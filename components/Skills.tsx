"use client";

import { useEffect, useRef } from "react";

const skillGroups = [
  {
    category: "Languages",
    skills: ["Python", "Java", "PHP", "SQL", "JavaScript"],
  },
  {
    category: "Fontend",
    skills: ["React", "Next.js", "HTML", "CSS", "JavaScript",  "Tailwind CSS", "Flutter"],
  },
  {
    category: "Backend & Database",
    skills: ["Node.js", "Python", "PHP", "Java", "Laravel", "MYSQL"],
  },
  {
    category: "Tools & Platforms",
    skills: ["VS Code", "Figma", "Git", "GitHub", "Vercel", "Linux"],
  },
];

const langColors: Record<string, string> = {
  Python: "",
  Java: "",
  JavaScript: "",
  PHP: "",
  CSS: "",
};

export default function Skills() {
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
    <section id="skills" className="py-24 px-6 bg-muted-surface/30">
      <div ref={ref} className="section-fade max-w-6xl mx-auto">
        <div className="mb-14">
          <h2 className="font-display text-4xl sm:text-5xl font-bold">Skills</h2>
          <div className="mt-3 w-16 h-0.5 bg-accent" />
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {skillGroups.map(({ category, skills }) => (
            <div
              key={category}
              className="p-6 rounded-2xl bg-card-surface border border-custom card-hover"
            >
              <div className="flex items-center gap-3 mb-5">
                <h3 className="font-display font-semibold text-lg">{category}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => {
                  const color = langColors[skill];
                  if (color) {
                    return (
                      <span
                        key={skill}
                        className={`inline-flex items-center px-3 py-1.5 rounded-lg text-xs font-mono font-medium bg-gradient-to-r border ${color} transition-all hover:scale-105 cursor-default`}
                      >
                        {skill}
                      </span>
                    );
                  }
                  return (
                    <span key={skill} className="skill-pill">
                      {skill}
                    </span>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
