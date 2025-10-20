"use client"
import { useEffect, useRef, useState } from "react"

type VerticalImageCarouselProps = {
  images: string[]
  speed?: number // tốc độ trượt
}

export default function VerticalImageCarousel({ images, speed = 0.3 }: VerticalImageCarouselProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [visibleCount, setVisibleCount] = useState(2) // desktop: 2 ảnh

  useEffect(() => {
    // Theo dõi kích thước màn hình để thay đổi số ảnh hiển thị
    const updateVisibleCount = () => {
      if (window.innerWidth < 640) setVisibleCount(1) // mobile
      else setVisibleCount(2) // tablet/desktop
    }

    updateVisibleCount()
    window.addEventListener("resize", updateVisibleCount)
    return () => window.removeEventListener("resize", updateVisibleCount)
  }, [])

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    let position = 0
    const totalHeight = container.scrollHeight / 2 // do nhân đôi ảnh

    const animate = () => {
      position += speed // tốc độ trượt
      if (position >= totalHeight) position = 0
      container.style.transform = `translateY(-${position}px)`
      requestAnimationFrame(animate)
    }

    animate()
  }, [speed])

  const itemHeight = visibleCount === 1 ? 320 : 245
  const containerHeight = visibleCount * itemHeight

  return (
    <div
      className="relative overflow-hidden w-full rounded-xl shadow border border-border"
      style={{ height: `${containerHeight}px` }}
    >
      <div ref={containerRef} className="flex flex-col will-change-transform">
        {[...images, ...images].map((src, idx) => (
          <div key={idx} style={{ height: `${itemHeight}px` }} className="flex-shrink-0 w-full">
            <img src={src} alt={`slide-${idx}`} className="h-full w-full object-cover" />
          </div>
        ))}
      </div>
    </div>
  )
}
