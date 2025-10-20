"use client"

import { Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "./languageContext"
import { contactContent } from "@/lib/contact.Content"

export default function Contact() {
    const { isVietnamese } = useLanguage()
    const content = isVietnamese ? contactContent.vi : contactContent.en

    const handleEmailClick = () => {
        const email = "banhtuankiet2908@gmail.com"
        const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(email)}&su=${encodeURIComponent(content.emailSubject)}&body=${encodeURIComponent(content.emailBody)}`
        window.open(gmailUrl, "_blank")
    }

    return (
        <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl sm:text-4xl font-bold mb-4">{content.title}</h2>
                <p className="text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">{content.subtitle}</p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                    {content.contactInfo.map((info, index) => {
                        const Icon = info.icon
                        const isEmail = info.label.toLowerCase().includes("email")
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
                                        <a
                                            href={isEmail ? "#" : info.href}
                                            onClick={isEmail ? handleEmailClick : undefined}
                                            target={isEmail ? "_self" : "_blank"}
                                            rel="noopener noreferrer"
                                            className="text-foreground hover:text-primary transition-colors cursor-pointer"
                                        >
                                            {info.value}
                                        </a>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>

                <Button size="lg" onClick={handleEmailClick} className="gap-2 cursor-pointer">
                    <Mail className="h-4 w-4" />
                    {content.buttonText}
                </Button>
            </div>
        </section>
    )
}