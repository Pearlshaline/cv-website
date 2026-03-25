"use client";

import { useEffect, useRef } from "react";
import { GraduationCap, BookOpen, School } from "lucide-react";

const education = [
  {
    degree: "Bachelor of Science in Information Technology",
    school: "St. Paul University Philippines",
    location: "Tuguegarao City, Cagayan",
    period: "2023 - Present",
    status: "In Progress",
    statusColor: "text-yellow-400 border-yellow-400/30 bg-yellow-400/10",
    icon: GraduationCap,
    courses: [
      "Data Structures & Algorithms",
      "Advanced Database Systems",
      "Web Systems abd Technologies",
      "Object-Oriented Programming",
      "Systems Analysis & Design",
      "Application Development and Emerging Technologies",
      "Coputer Network Systems",
      "Human Computer Interaction",
      "System Integration and Architecture",
      "Introduction to Computing ",
    ],
  },
   {
    degree: "Senior High School",
    school: "Quirino National High School",
    location: "Quirino, Isabela, Philippines",
    period: "2022-2023",
    status: "Completed",
    statusColor: "text-green-400 border-green-400/30 bg-green-400/10",
    icon: School,
    highlight: null,
    highlightDesc: null,
    courses: [],
  },
  {
    degree: "Junior High School",
    school: "Quirino National High School",
    location: "Quirino, Isabela, Philippines",
    period: "2020-2021",
    status: "Completed",
    statusColor: "text-green-400 border-green-400/30 bg-green-400/10",
    icon: School,
    highlight: null,
    highlightDesc: null,
    courses: [],
  },
  {
    degree: "Elementary School",
    school: "San Juan Quirino School",
    location: "Quirino, Isabela, Philippines",
    period: "2016-2017",
    status: "Completed",
    statusColor: "text-green-400 border-green-400/30 bg-green-400/10",
    icon: School,
    highlight: null,
    highlightDesc: null,
    courses: [],
  },
];

export default function Education() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) entry.target.classList.add("visible");
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="education" className="py-24 px-6">
      <div ref={ref} className="section-fade max-w-6xl mx-auto">
        <div className="mb-14">
          <h2 className="font-display text-4xl sm:text-5xl font-bold">
            Education
          </h2>
          <div className="mt-3 w-16 h-0.5 bg-accent" />
        </div>

        <div className="space-y-6">
          {education.map((edu, i) => {
            const Icon = edu.icon;
            return (
              <div
                key={i}
                className="p-6 rounded-2xl bg-card-surface border border-custom card-hover"
              >
                <div className="flex flex-col sm:flex-row sm:items-start gap-4">
                  {/* Icon */}
                  <div className="w-12 h-12 rounded-xl bg-muted-surface border border-custom flex items-center justify-center text-accent flex-shrink-0">
                    <Icon className="w-6 h-6" />
                  </div>

                  <div className="flex-1 min-w-0">
                    {/* Header row */}
                    <div className="flex flex-wrap items-start justify-between gap-3 mb-1">
                      <div>
                        <h3 className="font-display font-semibold text-base leading-snug">
                          {edu.degree}
                        </h3>
                        <p className="text-sm text-accent font-body mt-0.5">{edu.school}</p>
                        <p className="text-xs text-muted-foreground font-mono mt-0.5">
                          {edu.location}
                        </p>
                      </div>
                      <div className="flex flex-col items-end gap-2">
                        <span
                          className={`text-xs font-mono px-2.5 py-1 rounded-full border ${edu.statusColor}`}
                        >
                          {edu.status}
                        </span>
                        <span className="text-xs font-mono text-muted-foreground">
                          {edu.period}
                        </span>
                      </div>
                    </div>

                    {/* Capstone highlight */}
                    {edu.highlight && (
                      <div className="mt-4 p-4 rounded-xl bg-accent/5 border border-accent/20">
                        <p className="text-xs font-mono text-accent uppercase tracking-wide mb-1.5">
                          ✦ {edu}
                        </p>
                        <p className="text-sm text-muted-foreground font-body leading-relaxed">
                          {edu}
                        </p>
                      </div>
                    )}

                    {/* Relevant courses */}
                    {edu.courses.length > 0 && (
                      <div className="mt-4">
                        <p className="text-xs font-mono text-muted-foreground uppercase tracking-wide mb-2 flex items-center gap-1.5">
                          <BookOpen className="w-3 h-3" /> Relevant Coursework
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {edu.courses.map((course) => (
                            <span
                              key={course}
                              className="text-xs font-body px-2.5 py-1 rounded-lg bg-muted-surface border border-custom text-muted-foreground"
                            >
                              {course}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
