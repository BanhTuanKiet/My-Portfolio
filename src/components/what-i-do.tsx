import { Code2, Palette, Shield, Radio, Database, Layers } from "lucide-react"

const services = [
  {
    icon: Code2,
    title: "Backend Development",
    description: "Building secure and scalable APIs with ASP.NET Core and Entity Framework Core.",
  },
  {
    icon: Palette,
    title: "Frontend Development",
    description: "Designing interactive, responsive UIs using React.js, Next.js, and TailwindCSS.",
  },
  {
    icon: Shield,
    title: "Authentication & Authorization",
    description: "Implementing JWT authentication, ASP.NET Identity, and custom role policies.",
  },
  {
    icon: Radio,
    title: "Real-time Communication",
    description: "Developing live features with SignalR and React real-time updates.",
  },
  {
    icon: Database,
    title: "Database Design",
    description: "Designing and optimizing SQL Server databases with migrations and seeding.",
  },
  {
    icon: Layers,
    title: "System Architecture",
    description: "Structuring clean, maintainable projects with Controller–Service–Repository layers.",
  },
]

export default function WhatIDo() {
  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-center">What I Do</h2>
        <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
          Specialized expertise in full-stack development with a focus on modern web technologies
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 cursor-pointer">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <div
                key={index}
                className="bg-slate-800/50 hover:border-cyan-500/50 hover:bg-slate-800/80 transition-all duration-300 block border border-border rounded-lg p-6 hover:border-primary transition-colors group"
              >
                <div className="mb-4">
                  <Icon className="h-8 w-8 text-primary group-hover:scale-110 transition-transform" />
                </div>
                <h3 className="text-xl font-semibold mb-2 group-hover:text-cyan-400 transition-colors">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{service.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
