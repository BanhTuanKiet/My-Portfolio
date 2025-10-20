'use client'

import { Button } from "@/components/ui/button"
import { Download, Mail, ArrowRight } from "lucide-react"
import { useLanguage } from "./languageContext"
import { heroSectionContent } from "@/lib/hero-sectionContent"


export default function HeroSection() {
    const { isVietnamese } = useLanguage()
    const content = isVietnamese ? heroSectionContent.vi : heroSectionContent.en

    return (
        <section id="home" className="h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
                <div className="mb-6">
                    <h1 className="text-3xl sm:text-2xl lg:text-5xl font-bold leading-tight">
                        <span className="text-primary inline-block animate-typing-loop overflow-hidden whitespace-nowrap border-r-4 border-primary">
                            {content.greeting}
                        </span>
                    </h1>

                    <p className="text-lg sm:text-2xl text-muted-foreground mb-2">{content.position}</p>

                    <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                        {content.description}
                    </p>
                </div>

                <div className="flex flex-wrap items-center justify-center gap-3 mt-6">
                    <Button size="lg" className="gap-2 text-sm sm:text-base" asChild>
                        <a href="/BanhTuanKiet_Backend_Developer.pdf" download target="_blank" rel="noopener noreferrer">
                            <Download className="h-4 w-4" />
                            {content.downloadCv}
                        </a>
                    </Button>

                    <Button size="lg" variant="outline" className="text-sm sm:text-base" asChild>
                        <a href="#projects" className="gap-2">
                            {content.viewProjects}
                            <ArrowRight className="h-4 w-4" />
                        </a>
                    </Button>

                    <Button size="lg" variant="outline" className="text-sm sm:text-base" asChild>
                        <a href="#contact" className="gap-2">
                            <Mail className="h-4 w-4" />
                            {content.contact}
                        </a>
                    </Button>
                </div>

                <div className="mt-10 text-xs sm:text-sm text-muted-foreground">
                    <p>{content.location}</p>
                </div>
            </div>
        </section>
    )
}
