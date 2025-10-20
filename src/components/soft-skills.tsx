"use client"

import { softSkillsContent } from "@/lib/softskillsContent"
import { useLanguage } from "./languageContext"

export default function SoftSkills() {
    const { isVietnamese } = useLanguage()
    const content = isVietnamese ? softSkillsContent.vi : softSkillsContent.en

    return (
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/30">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-center">{content.title}</h2>
                <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">{content.subtitle}</p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {content.skills.map((skill, index) => {
                        const Icon = skill.icon
                        return (
                            <div
                                key={index}
                                className="cursor-pointer group bg-slate-800/50 border border-slate-700/50 rounded-lg p-6 
                hover:border-cyan-500/50 hover:bg-slate-800/80 transition-all duration-300 block flex items-center gap-4"
                            >
                                <Icon className="h-6 w-6 text-primary group-hover:scale-110 transition-transform flex-shrink-0" />
                                <p className="font-medium group-hover:text-primary transition-colors">{skill.title}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}
