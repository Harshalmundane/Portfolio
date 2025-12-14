"use client";

import { Briefcase } from "lucide-react";

export default function Experience() {
  const experiences = [
    {
      title: "Associate Software Developer",
      company: "Technobase IT Solutions Pvt. Ltd.",
      period: "Oct 2025 – Present",
      location: "Nagpur, Maharashtra",
      description: [
        "Working on the Indigrow Stock Market platform, developing and maintaining automated trading (Algo) strategies.",
        "Built and maintained both frontend and backend modules using Next.js for the UI and Node.js for server-side logic.",
        "Implemented strategy-based order execution where trades are automatically placed in customer trading accounts.",
        "Integrated webhook-based signal handling to trigger real-time order execution for multiple trading strategies.",
        "Designed and managed MySQL database schemas for orders, strategies, users, and execution logs.",
        "Developed Admin and Customer-side functionalities for strategy configuration, monitoring, and execution.",
        "Collaborated on improving system reliability, execution accuracy, and scalability for live trading environments.",
      ],
    },
    {
      title: "Full Stack Developer Intern",
      company: "Fireblaze AI School",
      period: "May 2025 – Aug 2025",
      location: "Nagpur, Maharashtra",
      description: [
        "Engineered key admin panel features within ignite.fireblazeaischool.in, reducing administrative task completion times by 30%.",
        "Developed responsive and scalable React.js UI components integrated with Firebase (Firestore, Auth, Hosting).",
        "Improved page load performance by 20% and enhanced real-time data accessibility for 30+ active users daily.",
        "Collaborated with a cross-functional Agile team and managed version control via GitHub for production deployment.",
      ],
    },
    {
      title: "Web Developer Intern",
      company: "Shyno Technology",
      period: "July 2024 – Jan 2025",
      location: "Remote (West Bengal)",
      description: [
        "Developed and optimized invoice generation, billing, and sales tracking modules for ShyBiz.com, reducing manual workload by 40%.",
        "Implemented advanced inventory management features such as low-stock alerts, expiry tracking, and valuation.",
        "Integrated secure OTP-based authentication for seamless user access and improved system security.",
        "Built responsive dashboards with PHP & MySQL, delivering real-time insights and improving business accuracy by 35%.",
      ],
    },
  ];

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">Experience</h2>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="p-6 bg-card border border-border rounded-lg hover:border-primary/50 transition-all"
            >
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-primary/20">
                    <Briefcase size={24} className="text-primary" />
                  </div>
                </div>

                <div className="flex-1">
                  <h3 className="text-xl font-bold">{exp.title}</h3>
                  <p className="text-primary font-semibold">{exp.company}</p>
                  <p className="text-sm text-muted-foreground mb-4">
                    {exp.period} • {exp.location}
                  </p>

                  <ul className="space-y-2">
                    {exp.description.map((item, i) => (
                      <li
                        key={i}
                        className="text-muted-foreground flex items-start gap-2"
                      >
                        <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
