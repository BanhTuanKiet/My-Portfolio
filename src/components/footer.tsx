"use client"

import { Github, Linkedin, Mail } from "lucide-react"

export default function Footer() {
    const currentYear = new Date().getFullYear()

    const handleEmailClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault()
        const email = "banhtuankiet2908@gmail.com"
        const subject = "Liên hệ từ portfolio"
        const body = "Chào bạn,\n\nTôi đã xem portfolio của bạn và muốn liên hệ để thảo luận về..."
        const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(email)}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
        window.open(gmailUrl, "_blank")
    }

    return (
        <footer className="border-t border-border py-8 px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
                <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-sm text-muted-foreground">
                        © {currentYear} Banh Tuan Kiet. Built with Next.js and TailwindCSS
                    </p>

                    <div className="flex items-center gap-4">
                        <a
                            href="https://github.com/banhtuankiet"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-muted-foreground hover:text-primary transition-colors"
                            aria-label="GitHub"
                        >
                            <Github className="h-5 w-5" />
                        </a>
                        <a
                            href="https://www.linkedin.com/in/tu%E1%BA%A5n-ki%E1%BB%87t-b%C3%A0nh-a3ab85342/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-muted-foreground hover:text-primary transition-colors"
                            aria-label="LinkedIn"
                        >
                            <Linkedin className="h-5 w-5" />
                        </a>
                        <a
                            href="#"
                            onClick={handleEmailClick}
                            className="text-muted-foreground hover:text-primary transition-colors cursor-pointer"
                            aria-label="Email"
                        >
                            <Mail className="h-5 w-5" />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    )
}
