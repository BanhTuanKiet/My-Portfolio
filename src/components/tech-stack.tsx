import { ASPNETCore, Bootstrap, CleanArchitecture, Cloudinary, CSharp, EntityFrameworkCore, Expressjs, Firebase, Git, GitHub, GoogleCloud, Identity, JavaScript, JWT, Middleware, Nextjs, NoSQL, Postman, Reactjs, Redis, Render, RESTfulAPI, SignalR, SQL, TailwindCSS, TypeScript } from "@/lib/utils"
import { Code2, Server, Database, Wrench, Boxes } from "lucide-react"

const techStack = {
    Frontend: [JavaScript, TypeScript, Reactjs, Nextjs, TailwindCSS, Bootstrap],
    Backend: [CSharp, ASPNETCore, Expressjs, EntityFrameworkCore],
    Database: [SQL, NoSQL],
    Tools: [Git, GitHub, Postman, Redis, Render, Firebase, GoogleCloud, Cloudinary],
    Other: [CleanArchitecture, JWT, Identity, Middleware, SignalR, RESTfulAPI],
}

const categoryIcons: Record<string, React.ElementType> = {
    Frontend: Code2,
    Backend: Server,
    Database: Database,
    Tools: Wrench,
    Other: Boxes,
}

export default function TechStack() {
    return (
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/30">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-center">Tech Stack</h2>
                <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
                    Technologies and tools I work with to build modern applications
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {Object.entries(techStack).map(([category, technologies]) => {
                        const Icon = categoryIcons[category]
                        return (
                            <div
                                key={category}
                                className="space-y-4 group bg-slate-800/50 border border-slate-700/50 rounded-lg p-6 hover:border-cyan-500/50 hover:bg-slate-800/80 transition-all duration-300"
                            >
                                <div className="flex items-center gap-3 mb-3">
                                    <Icon className="w-6 h-6 text-primary group-hover:scale-110 transition-transform duration-300" />
                                    <h3 className="text-xl font-semibold text-slate-100 group-hover:text-primary transition-colors">
                                        {category}
                                    </h3>
                                </div>
                                <div className="flex flex-wrap gap-2 my-5 mb-1">
                                    {technologies.map((tech) => (
                                        <a
                                            key={tech.name}
                                            href={tech.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="px-2 py-1 bg-primary/10 rounded text-xs font-medium hover:underline hover:bg-primary/20 transition"
                                        >
                                            {tech.name}
                                        </a>
                                    ))}
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}
