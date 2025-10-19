"use client"

import { Mail, Github, Linkedin, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"

const contactInfo = [
    {
        icon: Mail,
        label: "Email",
        value: "banhtuankiet2908@gmail.com",
        href: "#", // sẽ được xử lý riêng bằng handleEmailClick
    },
    {
        icon: Github,
        label: "GitHub",
        value: "github.com/banhtuankiet",
        href: "https://github.com/banhtuankiet",
    },
    {
        icon: Linkedin,
        label: "LinkedIn",
        value: "linkedin.com/in/banhtuankiet",
        href: "https://www.linkedin.com/in/tu%E1%BA%A5n-ki%E1%BB%87t-b%C3%A0nh-a3ab85342/",
    },
    {
        icon: MapPin,
        label: "Địa điểm",
        value: "Tân Bình, Thành phố Hồ Chí Minh, Việt Nam",
        href: "https://maps.app.goo.gl/wsbLFZ6eWSQpmDY67",
    },
]

export default function Contact() {
    const handleEmailClick = () => {
        const email = "banhtuankiet2908@gmail.com"
        const subject = "Liên hệ từ portfolio"
        const body = "Chào bạn,\n\nTôi đã xem portfolio của bạn và muốn liên hệ để thảo luận về..."
        const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(email)}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
        window.open(gmailUrl, "_blank")
    }

    return (
        <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl sm:text-4xl font-bold mb-4">Liên Hệ</h2>
                <p className="text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
                    Tôi luôn sẵn sàng thảo luận về các dự án mới, ý tưởng sáng tạo hoặc cơ hội trở thành một phần trong tầm nhìn của bạn. Đừng ngần ngại liên hệ!
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                    {contactInfo.map((info, index) => {
                        const Icon = info.icon
                        const isEmail = info.label === "Email"
                        return (
                            <div
                                key={index}
                                className="group bg-slate-800/50 border border-slate-700/50 rounded-lg p-6 hover:border-cyan-500/50 hover:bg-slate-800/80 transition-all duration-300 block"
                            >
                                <div className="flex items-center gap-4">
                                    <div className="p-3 bg-primary/10 rounded-lg">
                                        <Icon className="h-5 w-5 text-primary" />
                                    </div>
                                    <div className="text-left">
                                        <p className="text-sm text-muted-foreground mb-1">{info.label}</p>
                                        {info.href ? (
                                            <a
                                                href={isEmail ? "#" : info.href}
                                                onClick={isEmail ? handleEmailClick : undefined}
                                                target={isEmail ? "_self" : "_blank"}
                                                rel="noopener noreferrer"
                                                className="text-foreground hover:text-primary transition-colors cursor-pointer"
                                            >
                                                {info.value}
                                            </a>
                                        ) : (
                                            <p className="text-foreground">{info.value}</p>
                                        )}
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>

                <Button size="lg" onClick={handleEmailClick} className="gap-2 cursor-pointer">
                    <Mail className="h-4 w-4" />
                    Gửi email cho tôi
                </Button>
            </div>
        </section>
    )
}
