"use client"

import { GraduationCap, Award } from "lucide-react"
import { useLanguage } from "./languageContext"
import { educationContent } from "@/lib/educationContent"

export default function Education() {
    const { isVietnamese } = useLanguage()
    const content = isVietnamese ? educationContent.vi : educationContent.en

    const iconMap = {
        GraduationCap,
        Award,
    }

    return (
        <section className="py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-center">{content.title}</h2>
                <p className="text-muted-foreground text-center mb-12">{content.subtitle}</p>

                <div className="space-y-6">
                    {content.items.map((item, index) => {
                        const Icon = iconMap[item.icon as keyof typeof iconMap]
                        return (
                            <div
                                key={index}
                                className="cursor-pointer group bg-slate-800/50 border border-slate-700/50 rounded-lg p-6 hover:border-cyan-500/50 hover:bg-slate-800/80 transition-all duration-300 block"
                            >
                                <div className="flex items-start gap-4">
                                    <div className="p-3 bg-primary/10 rounded-lg">
                                        <Icon className="h-6 w-6 text-primary" />
                                    </div>
                                    <div className="flex-1">
                                        <div className="flex flex-wrap items-start justify-between gap-2">
                                            <div>
                                                <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                                                    {item.title}
                                                </h3>
                                                {item.school && <p>{item.school}</p>}
                                                {item.description && (
                                                    <p className="mt-1 text-muted-foreground">{item.description}</p>
                                                )}
                                            </div>
                                            <div className="flex flex-col items-end">
                                                <span className="text-sm text-muted-foreground">{item.period}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}
