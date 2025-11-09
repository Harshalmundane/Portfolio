"use client"

import { ArrowDown, Github, Linkedin, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Hero() {
  const scrollToProjects = () => {
    const element = document.getElementById("projects")
    element?.scrollIntoView({ behavior: "smooth" })
  }

  const downloadResume = () => {
    // Create a mock resume download
    const link = document.createElement("a")
    link.href = "#"
    link.download = "Harshal_Mundane_Resume.pdf"
    link.click()
  }

  return (
    <section className="min-h-screen flex items-center justify-center pt-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10 pointer-events-none" />

      <div className="max-w-4xl mx-auto text-center relative z-10 animate-fade-in-up">
        <div className="mb-6">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-4 text-balance">
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Harshal Mundane
            </span>{" "}
            👋
          </h1>
          <p className="text-xl sm:text-2xl text-muted-foreground mb-2">
            Full Stack Developer | ReactJS | NodeJS | NextJS
          </p>
          <p className="text-lg text-muted-foreground">
            I build responsive web applications and have worked on live client projects.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Button
            onClick={scrollToProjects}
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg"
          >
            View My Work
          </Button>
          <Button
            onClick={downloadResume}
            variant="outline"
            className="border-primary text-primary hover:bg-primary/10 px-8 py-6 text-lg bg-transparent"
          >
            Download Resume
          </Button>
        </div>

        {/* Social Links */}
        <div className="flex justify-center gap-6 mb-12">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-card hover:bg-card/80 rounded-full transition-colors"
          >
            <Github size={24} className="text-primary" />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-card hover:bg-card/80 rounded-full transition-colors"
          >
            <Linkedin size={24} className="text-primary" />
          </a>
          <a
            href="mailto:harshalmundane01@gmail.com"
            className="p-3 bg-card hover:bg-card/80 rounded-full transition-colors"
          >
            <Mail size={24} className="text-primary" />
          </a>
        </div>

        {/* Scroll Indicator */}
        <div className="flex justify-center animate-bounce">
          <ArrowDown size={24} className="text-primary" />
        </div>
      </div>
    </section>
  )
}
