"use client"

import { Github, Linkedin, Mail, Heart } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-card border-t border-border py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-2">
              Harshal Mundane
            </h3>
            <p className="text-muted-foreground">Full Stack Developer | Building amazing web experiences</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#projects" className="text-muted-foreground hover:text-primary transition-colors">
                  Projects
                </a>
              </li>
              <li>
                <a href="#contact" className="text-muted-foreground hover:text-primary transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="font-semibold mb-4">Connect</h4>
            <div className="flex gap-4">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-card hover:bg-primary/20 rounded-lg transition-colors"
              >
                <Github size={20} className="text-primary" />
              </a>
              <a
                href="https://github.com/Harshalmundane"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-card hover:bg-primary/20 rounded-lg transition-colors"
              >
                <Linkedin size={20} className="text-primary" />
              </a>
              <a
                href="mailto:harshalmundane01@gmail.com"
                className="p-2 bg-card hover:bg-primary/20 rounded-lg transition-colors"
              >
                <Mail size={20} className="text-primary" />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-border pt-8">
          <p className="text-center text-muted-foreground flex items-center justify-center gap-1">
            © {currentYear} Harshal Mundane | Built with <Heart size={16} className="text-primary" /> using React &
            Next.js
          </p>
        </div>
      </div>
    </footer>
  )
}
