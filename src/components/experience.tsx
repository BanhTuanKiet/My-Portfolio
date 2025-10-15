import { Briefcase } from "lucide-react"

const experiences = [
  {
    role: "Backend Intern",
    company: "Tech Company",
    period: "2025",
    description: [
      "Developed REST APIs using ASP.NET Core and Entity Framework Core",
      "Implemented user authentication with Identity and JWT",
      "Collaborated with frontend team to integrate APIs",
      "Participated in code reviews and agile development practices",
    ],
  },
]

export default function Experience() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/30">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-center">Experience</h2>
        <p className="text-muted-foreground text-center mb-12">Professional journey and internships</p>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-lg p-6 hover:border-primary transition-colors"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>
                <div className="flex-1">
                  <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                    <div>
                      <h3 className="text-xl font-semibold">{exp.role}</h3>
                      <p className="text-primary">{exp.company}</p>
                    </div>
                    <span className="text-sm text-muted-foreground">{exp.period}</span>
                  </div>
                  <ul className="space-y-2 mt-4">
                    {exp.description.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-muted-foreground">
                        <span className="text-primary mt-1">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
