import { Button } from "@/components/ui/button"
import { Download, Mail, ArrowRight } from "lucide-react"

export default function HeroSection() {
    return (
        <section
            id="home"
            className="h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8"
        >
            <div className="max-w-4xl mx-auto text-center">
                <div className="mb-6">
                    <h1 className="text-4xl sm:text-2xl lg:text-6xl font-bold leading-tight">
                        <span className="text-primary inline-block animate-typing-loop overflow-hidden whitespace-nowrap border-r-4 border-primary">
                            {"Chào, tôi là Bành Tuấn Kiệt"}
                        </span>
                    </h1>

                    <p className="text-lg sm:text-2xl text-muted-foreground mb-2">
                        .NET Developer
                    </p>

                    <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                        Chuyên phát triển các ứng dụng web hiện đại với React.js, Next.js và ASP.NET Core.
                        Tôi đam mê xây dựng hệ thống có khả năng mở rộng, API tối ưu và trải nghiệm người dùng mượt mà, responsive.
                    </p>
                </div>

                <div className="flex flex-wrap items-center justify-center gap-3 mt-6">
                    <Button size="lg" className="gap-2 text-sm sm:text-base" asChild>
                        <a
                            href="/BanhTuanKiet_Backend_Developer.pdf"
                            download
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Download className="h-4 w-4" />
                            Tải CV
                        </a>
                    </Button>

                    <Button size="lg" variant="outline" className="text-sm sm:text-base" asChild>
                        <a href="#projects" className="gap-2">
                            Xem dự án
                            <ArrowRight className="h-4 w-4" />
                        </a>
                    </Button>

                    <Button size="lg" variant="outline" className="text-sm sm:text-base" asChild>
                        <a href="#contact" className="gap-2">
                            <Mail className="h-4 w-4" />
                            Liên hệ
                        </a>
                    </Button>
                </div>

                <div className="mt-10 text-xs sm:text-sm text-muted-foreground">
                    <p>Tân Bình, Thành phố Hồ Chí Minh, Việt Nam</p>
                </div>
            </div>
        </section>
    )
}