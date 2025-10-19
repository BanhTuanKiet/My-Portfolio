import { Brain, Code, Lightbulb, Users, Clock, Target } from "lucide-react"

const skills = [
  { icon: Brain, title: "Giải quyết vấn đề & tư duy phản biện" },
  { icon: Code, title: "Tư duy code sạch & kiến trúc hệ thống" },
  { icon: Lightbulb, title: "Tự học & khả năng thích ứng" },
  { icon: Users, title: "Cộng tác nhóm & quy trình Git" },
  { icon: Clock, title: "Quản lý thời gian & sở hữu công việc" },
  { icon: Target, title: "Định hướng mục tiêu & chú trọng chi tiết" },
]

export default function SoftSkills() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-center">Kỹ Năng Mềm</h2>
        <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
          Những phẩm chất chuyên nghiệp bổ trợ cho chuyên môn kỹ thuật của tôi
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => {
            const Icon = skill.icon
            return (
              <div
                key={index}
                className="cursor-pointer group bg-slate-800/50 border border-slate-700/50 rounded-lg p-6 hover:border-cyan-500/50 hover:bg-slate-800/80 transition-all duration-300 block flex items-center gap-4"
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