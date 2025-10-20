'use client'

import { whatIDoContent } from "@/lib/what-i-do-content"
import { useLanguage } from "./languageContext"


export default function WhatIDo() {
  const { isVietnamese } = useLanguage()
  const t = isVietnamese ? whatIDoContent.vi : whatIDoContent.en

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-center">{t.title}</h2>
        <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
          {t.subtitle}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 cursor-pointer">
          {t.services.map((service, index) => {
            const Icon = service.icon
            return (
              <div
                key={index}
                className="bg-slate-800/50 hover:border-cyan-500/50 hover:bg-slate-800/80 transition-all duration-300 block border border-border rounded-lg p-6 hover:border-primary transition-colors group"
              >
                <div className="mb-4">
                  <Icon className="h-8 w-8 text-primary group-hover:scale-110 transition-transform" />
                </div>
                <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
