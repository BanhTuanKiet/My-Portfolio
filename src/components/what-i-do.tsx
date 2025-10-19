import { Code2, Palette, Shield, Radio, Database, Layers } from "lucide-react"

const services = [
    {
        icon: Code2,
        title: "Phát Triển Backend",
        description: "Xây dựng các API bảo mật và có khả năng mở rộng với ASP.NET Core và Entity Framework Core.",
    },
    {
        icon: Palette,
        title: "Phát Triển Frontend",
        description: "Thiết kế giao diện người dùng tương tác và responsive sử dụng React.js, Next.js và TailwindCSS.",
    },
    {
        icon: Shield,
        title: "Xác Thực & Phân Quyền",
        description: "Triển khai xác thực JWT, ASP.NET Identity và các chính sách phân quyền tùy chỉnh.",
    },
    {
        icon: Radio,
        title: "Giao Tiếp Thời Gian Thực",
        description: "Phát triển tính năng live với SignalR và cập nhật thời gian thực trong React.",
    },
    {
        icon: Database,
        title: "Thiết Kế Cơ Sở Dữ Liệu",
        description: "Thiết kế và tối ưu hóa cơ sở dữ liệu SQL Server với migrations và seeding.",
    },
    {
        icon: Layers,
        title: "Kiến Trúc Hệ Thống",
        description: "Xây dựng cấu trúc dự án sạch sẽ, dễ bảo trì với mô hình Controller–Service–Repository.",
    },
]

export default function WhatIDo() {
    return (
        <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-center">Kỹ năng</h2>
                <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
                    Chuyên môn về phát triển full-stack với trọng tâm vào các công nghệ web hiện đại
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