"use client"

import { Code2, Database, Wrench, Zap } from "lucide-react"

export default function Skills() {
  const skillCategories = [
    {
      title: "Frontend",
      icon: Code2,
      skills: ["HTML", "CSS", "JavaScript", "ReactJS", "NextJS","Tailwind CSS", "Responsive Design"],
    },
    {
      title: "Backend",
      icon: Zap,
      skills: ["NodeJS", "ExpressJS", "PHP", "REST APIs", "Authentication", "Server Management"],
    },
    {
      title: "Database",
      icon: Database,
      skills: ["MongoDB", "MySQL", "Firebase", "Data Modeling", "Query Optimization"],
    },
    {
      title: "Tools & Others",
      icon: Wrench,
      skills: ["Git", "GitHub", "VS Code", "JSON", "Postman", "Figma"],
    },
  ]

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">Skills & Expertise</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category) => {
            const Icon = category.icon
            return (
              <div
                key={category.title}
                className="p-6 bg-card border border-border rounded-lg hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/10"
              >
                <div className="flex items-center gap-3 mb-4">
                  <Icon size={24} className="text-primary" />
                  <h3 className="text-xl font-semibold">{category.title}</h3>
                </div>
                <ul className="space-y-2">
                  {category.skills.map((skill) => (
                    <li key={skill} className="text-muted-foreground flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
