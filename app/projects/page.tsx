"use client";

import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function ProjectsPage() {
  const allProjects = [
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

    {
      id: 3,
      title: "Personalized Content Dashboard",
      description:
        "A full-stack Next.js application that aggregates news, recommendations, and social posts into a customizable dashboard with drag-and-drop layout, infinite scroll, and debounced search for a seamless user experience.",
      image: "/Personalized-feed.png",
      tech: ["NextJS", "Redux", "TypeScript", "Jest", "Playwright"],
      category: "Full Stack",
      liveUrl: "https://personalized-feed-aoed.vercel.app/",
      githubUrl: "https://github.com/Harshalmundane/Personalized-Feed",
    },
    {
      id: 4,
      title: "Event Management",
      description:
        "Interactive chatbot interface with real-time messaging and AI integration.",
      image: "/chatbot-interface.jpg",
      tech: ["React", "Node.js", "Express.js", "MongoDB"],
      category: "Frontend",
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      id: 5,
      title: "Anime Streaming Platform",
      description:
        "A web application for anime enthusiasts to explore, search, and view anime details using the Jikan API. Integrated with Supabase for authentication and user-specific favorites management. Built with Next.js, TailwindCSS, and Shadcn UI for a modern and responsive design.",
      image: "/anime.png",
      tech: ["Next.js", "Tailwind CSS", "Shadcn UI", "Supabase", "Jikan API"],
      category: "Full Stack",
      liveUrl: "https://anime-black-ten.vercel.app/",
      githubUrl: "https://github.com/Harshalmundane/Anime",
    },
    {
      id: 6,
      title: "Institute Landing Page + Course & Branch Management",
      description:
        "A full-stack MERN-based Institute Platform with admin panel. Admins can add courses, branches, upload images, set three featured items for landing page, and manage all institute details through a secure dashboard.",
      image: "./InstituteProject.png",
      tech: ["ReactJS", "NodeJS", "Express", "MongoDB", "Redux Toolkit"],
      category: "Full Stack",
      liveUrl: "https://institute-frontend-t1z5.vercel.app/",
      githubUrl: "https://github.com/Harshalmundane/Institute_Frontend",
    },

    {
      id: 7,
      title: "Jewellery Bill Design",
      description:
        "A full-stack MERN stack application for an institute landing page. Admins can add courses and branches, select three to feature on the landing page, and manage various other functionalities.",
      image: "/Jewellery-Shop.png",
      tech: ["HTML", "CSS", "JAVASCIRPT"],
      category: "Full Stack",
      liveUrl: "https://bill-design.vercel.app/",
      githubUrl: "https://github.com/Harshalmundane/BILL_DESIGN-",
    },
      {
      id: 8,
      title: "Task Management System",
      description:
        "A full-stack MERN Task Management Application featuring role-based authentication, task creation, priority management, deadlines, and progress tracking. Includes dashboards for admins and users with secure JWT authentication.",
      image: "/taskManagement.png",
      tech: ["ReactJS", "NodeJS", "Express", "MongoDB"],
      category: "Full Stack",
      liveUrl: "http://task-mangement-frontend-82wk.vercel.app",
      githubUrl: "https://github.com/Harshalmundane/TaskMangement_frontend",
    },
  ];

  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <Link
              href="/"
              className="text-primary hover:text-primary/80 transition-colors mb-4 inline-block"
            >
              ← Back to Home
            </Link>
            <h1 className="text-5xl font-bold mb-4">All Projects</h1>
            <p className="text-xl text-muted-foreground">
              Explore my complete portfolio of projects and applications
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {allProjects.map((project) => (
              <div
                key={project.id}
                className="bg-card border border-border rounded-lg overflow-hidden hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/10"
              >
                {/* Project Image */}
                <div className="h-40 bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center border-b border-border">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Project Content */}
                <div className="p-4">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="text-lg font-bold flex-1">
                      {project.title}
                    </h3>
                    <span className="px-2 py-1 bg-primary/20 text-primary rounded text-xs font-medium whitespace-nowrap ml-2">
                      {project.category}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-1 mb-4">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-primary/10 text-primary rounded text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Buttons */}
                  <div className="flex gap-2">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1"
                    >
                      <Button
                        size="sm"
                        className="w-full bg-primary hover:bg-primary/90 text-primary-foreground gap-1"
                      >
                        <ExternalLink size={14} />
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
                        size="sm"
                        variant="outline"
                        className="w-full border-primary text-primary hover:bg-primary/10 gap-1 bg-transparent"
                      >
                        <Github size={14} />
                        Code
                      </Button>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
