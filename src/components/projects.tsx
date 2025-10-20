"use client"

import { ExternalLink, Users } from "lucide-react"
import { useLanguage } from "./languageContext"
import { projectContent } from "@/lib/projectContent"
import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css"
import VerticalImageCarousel from "./VerticalImageCarousel"

export default function Projects() {
    const { isVietnamese } = useLanguage()
    const { title, subtitle, items } = isVietnamese ? projectContent.vi : projectContent.en

    const responsive = {
        desktop: { breakpoint: { max: 3000, min: 1024 }, items: 1 },
        tablet: { breakpoint: { max: 1024, min: 640 }, items: 1 },
        mobile: { breakpoint: { max: 640, min: 0 }, items: 1 },
    }

    return (
        <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-center">{title}</h2>
                <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">{subtitle}</p>

                <div className="space-y-12">
                    {items.map((project, index) => (
                        <div
                            key={index}
                            className="group border bg-slate-800/50 border-border rounded-xl p-6 md:p-8 hover:border-primary transition-all duration-300  hover:bg-slate-800/80 flex flex-col lg:flex-row lg:items-start gap-8"
                        >
                            {project.images && project.images.length > 0 && (
                                <div className="lg:w-1/2">
                                    <VerticalImageCarousel images={project.images} speed={0.25} />
                                </div>
                            )}

                            <div className="flex-1 flex flex-col justify-center">
                                <div className="flex flex-wrap justify-between items-center mb-4">
                                    <div className="flex items-center gap-4 flex-wrap">
                                        <h3 className="text-2xl font-bold group-hover:text-primary transition-colors">
                                            <a
                                                href={project.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="cursor-pointer flex items-center gap-2"
                                            >
                                                {project.title}
                                                <ExternalLink className="h-4 w-4 opacity-70 group-hover:opacity-100 transition-opacity" />
                                            </a>
                                        </h3>

                                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                            <Users className="h-4 w-4" />
                                            <span>
                                                {project.teamSize}{" "}
                                                {isVietnamese
                                                    ? "thành viên"
                                                    : project.teamSize > 1
                                                        ? "members"
                                                        : "member"}
                                            </span>
                                        </div>
                                    </div>

                                    {project.duration && (
                                        <div className="flex items-center gap-1 text-sm text-muted-foreground">
                                            <span>{project.duration}</span>
                                        </div>
                                    )}
                                </div>

                                <p className="text-muted-foreground mb-4 leading-relaxed">{project.description}</p>

                                <div className="mb-4">
                                    <h4 className="text-sm font-semibold mb-2 text-primary">
                                        {isVietnamese ? "Tính năng chính:" : "Key Features:"}
                                    </h4>
                                    <ul className="space-y-1 text-sm text-muted-foreground">
                                        {project.features.map((feature, i) => (
                                            <li key={i} className="flex items-start gap-2">
                                                <span className="text-primary mt-1">•</span>
                                                <span>{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="flex flex-wrap gap-2">
                                    {project.tech.map((tech) => (
                                        <a
                                            key={tech.name}
                                            href={tech.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="px-2 py-1 bg-primary/10 text-primary rounded text-xs font-medium hover:underline hover:bg-primary/20 transition"
                                        >
                                            {tech.name}
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
