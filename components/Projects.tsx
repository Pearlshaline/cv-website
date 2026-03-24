"use client";

import { useEffect, useRef } from "react";
import { Github } from "lucide-react";

const projects = [
  {
    title: "Personal Portfolio Website",
    type: "Personal Project",
    description:
      "A fully responsive personal CV and portfolio website built with Next.js 15 and Shadcn UI. Features dark/light mode, smooth scroll animations, and a clean professional layout to showcase skills and experience.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "React"],
    status: "Live",
    statusColor: "text-green-400 border-green-400/30 bg-green-400/10",
    github: "",
  },
  {
    title: "Mini Twitter",
    type: "Academic Project",
    description:
      "A social media web where users can post tweets, follow other users, and like posts. Built with Laravel and MySQL, featuring user authentication and a real-time-style feed.",
    tech: ["Laravel", "HTML", "MySQL", "Tailwind CSS"],
    status: "Completed",
    statusColor: "text-blue-400 border-blue-400/30 bg-blue-400/10",
    github: "https://github.com/Pearlshaline/Lab_HandsOn",
  },
  {
    title: "Movies",
    type: "Academic Project",
    description:
      "A movie browsing web app where users can explore a catalog of films, add titles to a personal watchlist, and rate movies. Built with Laravel and MySQL with a clean, responsive interface.",
    tech: ["Laravel", "HTML", "MySQL", "Tailwind CSS"],
    status: "Completed",
    statusColor: "text-blue-400 border-blue-400/30 bg-blue-400/10",
    github: "https://github.com/Pearlshaline/activity",
  },
];

export default function Projects() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) entry.target.classList.add("visible"); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="projects" className="py-24 px-6">
      <div ref={ref} className="section-fade max-w-6xl mx-auto">
        <div className="mb-14">
          <h2 className="font-display text-4xl sm:text-5xl font-bold">Projects</h2>
          <div className="mt-3 w-16 h-0.5 bg-accent" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group flex flex-col p-6 rounded-2xl bg-card-surface border border-custom card-hover"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="text-3xl"></div>
                <span className={`text-xs font-mono px-2.5 py-1 rounded-full border ${project.statusColor}`}>
                  {project.status}
                </span>
              </div>

              <p className="text-xs font-mono text-muted-foreground uppercase tracking-wide mb-2">
                {project.type}
              </p>

              <h3 className="font-display font-semibold text-base leading-snug mb-3 group-hover:text-accent transition-colors">
                {project.title}
              </h3>

              <p className="text-sm text-muted-foreground font-body leading-relaxed flex-1 mb-5">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-1.5 mb-5">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="text-xs font-mono px-2 py-0.5 rounded bg-muted-surface border border-custom text-muted-foreground"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-3 pt-4 border-t border-custom">
                {project.github ? (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-xs font-mono text-muted-foreground hover:text-accent transition-colors"
                  >
                    <Github className="w-3.5 h-3.5" />
                    Source
                  </a>
                ) : (
                  <span className="flex items-center gap-1.5 text-xs font-mono text-muted-foreground opacity-40 cursor-default">
                    <Github className="w-3.5 h-3.5" />
                    Source
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
