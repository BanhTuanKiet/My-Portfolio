import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"
import { LanguageProvider } from "@/components/languageContext"
import { ThemeProvider } from "@/components/themeContext"

export const metadata: Metadata = {
    title: "Banh Tuan Kiet - .NET DEVELOPER",
    description: "Fullstack Developer specializing in React and ASP.NET Core",
    generator: "v0.app",
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en">
            <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable} antialiased`}>
                {/* <ThemeProvider> */}
                    <LanguageProvider>
                        <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>
                        <Analytics />
                    </LanguageProvider>
                {/* </ThemeProvider> */}
            </body>
        </html>
    )
}
