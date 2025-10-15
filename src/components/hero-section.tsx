import { Button } from "@/components/ui/button"
import { Download, Mail, ArrowRight } from "lucide-react"

export default function HeroSection() {
    return (
        <section id="home" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16">
            <div className="max-w-4xl mx-auto text-center">
                <div className="mb-6">
                    <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-4 text-balance">
                        <span className="text-primary inline-block animate-typing-loop overflow-hidden whitespace-nowrap border-r-4 border-primary">{"Hi, I'm Banh Tuan Kiet"}</span>
                    </h1>
                    <p className="text-xl sm:text-2xl text-muted-foreground mb-2">Backend Developer</p>
                    <p className="text-md text-muted-foreground max-w-4xl mx-auto leading-relaxed">
                        Specializing in building modern web applications with ReactJS, Next.js, and ASP.NET Core.
                    </p>
                    <p className="text-md text-muted-foreground max-w-4xl mx-auto leading-relaxed">
                        I love creating scalable systems, clean API s, and smooth, responsive user experiences.
                    </p>
                    <p className="text-md text-muted-foreground max-w-4xl mx-auto leading-relaxed">
                        Experienced in working with both SQL and NoSQL.
                    </p>
                    <p className="text-md text-muted-foreground max-w-4xl mx-auto leading-relaxed">
                        Familiar with caching and real-time technologies like Redis, Firebase, as well as hosting and deployment on Vercel, Google Cloud, and Docker-based environments
                    </p>
                </div>
                <div className="flex flex-wrap items-center justify-center gap-4 mt-8 ">
                    <Button size="lg" className="gap-2 ">
                        <Download className="h-4 w-4" />
                        Download CV
                    </Button>
                    <Button size="lg" variant="outline" asChild className="">
                        <a href="#projects" className="gap-2 ">
                            View Projects
                            <ArrowRight className="h-4 w-4" />
                        </a>
                    </Button>
                    <Button size="lg" variant="outline" asChild>
                        <a href="#contact" className="gap-2">
                            <Mail className="h-4 w-4" />
                            Contact Me
                        </a>
                    </Button>
                </div>

                <div className="mt-12 text-sm text-muted-foreground">
                    <p>📍 Ho Chi Minh City, Vietnam</p>
                </div>
            </div>
        </section>
    )
}
