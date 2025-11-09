"use client"

import { GraduationCap } from "lucide-react"

export default function Education() {
  const education = [
    {
      degree: "Bachelor of Engineering",
      field: "Electronics and Telecommunication",
      school: "Government college of engineering, Nagpur",
      period: "2021 – 2025",
      gpa: "7/10",
    },
    {
      degree: "Higher Secondary Certificate",
      field: "Science Stream",
      school: "Mahatma Gandhi Junior Colllege",
      period: "2019 – 2021",
      gpa: "80%",
    },
  ]

  return (
    <section id="education" className="py-20 px-4 sm:px-6 lg:px-8 bg-card/30">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">Education</h2>

        <div className="space-y-6">
          {education.map((edu, index) => (
            <div
              key={index}
              className="p-6 bg-card border border-border rounded-lg hover:border-primary/50 transition-all"
            >
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-primary/20">
                    <GraduationCap size={24} className="text-primary" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold">{edu.degree}</h3>
                  <p className="text-primary font-semibold">{edu.field}</p>
                  <p className="text-muted-foreground">{edu.school}</p>
                  <div className="flex justify-between items-center mt-2 text-sm text-muted-foreground">
                    <span>{edu.period}</span>
                    <span className="text-primary font-semibold">GPA: {edu.gpa}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
