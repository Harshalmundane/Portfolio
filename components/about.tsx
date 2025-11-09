"use client"

export default function About() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-card/30">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">About Me</h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image Placeholder */}
          <div className="flex justify-center">
            <div className="w-64 h-64 bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg flex items-center justify-center border border-primary/30">
              <span className="text-muted-foreground">Profile Image</span>
            </div>
          </div>

          {/* Content */}
       <div className="space-y-6">
  <p className="text-lg text-muted-foreground leading-relaxed">
    I'm a passionate Full Stack Developer specializing in React.js and Node.js. A recent B.Tech graduate in Electronics
    and Telecommunication (2025), I’ve gained hands-on experience through multiple live projects and internships,
    building scalable, high-performance web applications.
  </p>

  <p className="text-lg text-muted-foreground leading-relaxed">
    My tech stack includes ReactJS, NodeJS, MongoDB, ExpressJS, and modern frontend tools like TypeScript and Tailwind
    CSS. I love transforming complex problems into simple, efficient, and user-friendly solutions that deliver real
    business value.
  </p>

  <p className="text-lg text-muted-foreground leading-relaxed">
    Having worked as a Full Stack Developer Intern on live projects, I’m committed to continuous learning and exploring
    the latest technologies to stay ahead in modern web development.
  </p>

  <div className="pt-4">
    <h3 className="text-xl font-semibold mb-4">Tech Stack</h3>
    <div className="flex flex-wrap gap-2">
      {[
        "ReactJS",
        "NextJS",
        "NodeJS",
        "ExpressJS",
        "MongoDB",
        "TypeScript",
        "Tailwind CSS",
        "Firebase",
        "MySQL",
      ].map((tech) => (
        <span
          key={tech}
          className="px-4 py-2 bg-primary/20 text-primary rounded-full text-sm font-medium"
        >
          {tech}
        </span>
      ))}
    </div>
  </div>
</div>

        </div>
      </div>
    </section>
  )
}
