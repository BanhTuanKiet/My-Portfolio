"use client"
import { createContext, useContext, useState, ReactNode } from "react"

type LanguageContextType = {
    isVietnamese: boolean
    toggleLanguage: () => void
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
    const [isVietnamese, setIsVietnamese] = useState(true)

    const toggleLanguage = () => setIsVietnamese(prev => !prev)

    return (
        <LanguageContext.Provider value={{ isVietnamese, toggleLanguage }}>
            {children}
        </LanguageContext.Provider>
    )
}

export function useLanguage() {
    const context = useContext(LanguageContext)
    if (!context) {
        throw new Error("useLanguage must be used within a LanguageProvider")
    }
    return context
}
