"use client";

import Link from "next/link";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function FeaturedProjects() {
  const projects = [
    {
      id: 1,
      title: "MyShop – E-commerce Web Application",
      description:
        "A full-stack e-commerce platform with secure role-based authentication, enabling product browsing, cart management, and order tracking with admin control for stock and delivery workflow.",
     image: "/My shop.png",
      tech: ["NextJS", "Node.js", "Express", "MongoDB"],
     liveUrl: "https://ecommerce-3o2b.vercel.app/",
      githubUrl: "https://github.com/Harshalmundane/Ecommerce",
    },
    {
      id: 2,
      title: "Job Portal",
      description:
        "A full-stack MERN Job Portal with secure role-based authentication, allowing job seekers to apply and employers to post, manage, and track applications with real-time status updates.",
      image: "/job-portal.jpg",
      tech: ["ReactJS", "NodeJS", "MongoDB", "Express", "JWT"],
      liveUrl: "#",
      githubUrl: "#",
    },
  ];

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-card/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">
          Featured Projects
        </h2>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-card border border-border rounded-lg overflow-hidden hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/10"
            >
              {/* Project Image */}
              <div className="h-48 bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center border-b border-border">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                <p className="text-muted-foreground mb-4">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-primary/20 text-primary rounded-full text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex gap-3">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1"
                  >
                    <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground gap-2">
                      <ExternalLink size={18} />
                       LIVE
                    </Button>
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1"
                  >
                    <Button
                      variant="outline"
                      className="w-full border-primary text-primary hover:bg-primary/10 gap-2 bg-transparent"
                    >
                      <Github size={18} />
                      Code
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* See More Button */}
        <div className="text-center">
          <Link href="/projects">
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg">
              See All Projects →
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
