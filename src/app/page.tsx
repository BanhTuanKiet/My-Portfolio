import Navbar from "@/components/navbar"
import HeroSection from "@/components/hero-section"
import WhatIDo from "@/components/what-i-do"
import TechStack from "@/components/tech-stack"
import Projects from "@/components/projects"
import Experience from "@/components/experience"
import Education from "@/components/education"
import SoftSkills from "@/components/soft-skills"
import Contact from "@/components/contact"
import Footer from "@/components/footer"
import KnowledgeSharing from "@/components/knowledge-sharing"

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-900">
      <Navbar />
      <main>
        <HeroSection />
        <WhatIDo />
        <TechStack />
        <Projects />
        <KnowledgeSharing />
        <Education />
        <SoftSkills />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
