"use client";

import { useEffect, useRef } from "react";
import { User, Target, Heart } from "lucide-react";

export default function About() {
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

  const highlights = [
    { icon: User, label: "Status", value: "3rd Year BSIT Student" },
    { icon: Target, label: "Focus", value: "Web Development" },
    { icon: Heart, label: "Passion", value: "Tech Innovation & Problem Solving" },
  ];

  return (
    <section id="about" className="py-24 px-6">
      <div ref={ref} className="section-fade max-w-6xl mx-auto">
        {/* Section header */}
        <div className="mb-14">
          <h2 className="font-display text-4xl sm:text-5xl font-bold">
            Who I Am
          </h2>
          <div className="mt-3 w-16 h-0.5 bg-accent" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Bio */}
          <div className="space-y-5">
  <p className="text-base text-muted-foreground font-body leading-relaxed">
    Hello! I&apos;m <span className="text-accent font-medium">Pearlshaline Gumiran</span>, a
    3rd-year Bachelor of Science in Information Technology student at{" "}
    <span className="text-[rgb(var(--text))] font-medium">St. Paul University Philippines</span>{" "}
    in Tuguegarao City, Cagayan.
  </p>

  <p className="text-base text-muted-foreground font-body leading-relaxed">
    I have a strong interest in web development and enjoy building responsive and user-friendly applications.
    I primarily work with technologies such as{" "}
    <span className="text-accent font-medium">React, Laravel, Tailwind CSS, Flutter, and Git</span>, 
    and I&apos;m continuously exploring new tools to improve my development skills.
  </p>

  <p className="text-base text-muted-foreground font-body leading-relaxed">
    I enjoy turning ideas into functional digital solutions and learning through real-world projects.
    I&apos;m always eager to grow, take on new challenges, and collaborate with others to create meaningful
    and impactful applications.
  </p>
</div>

          {/* Highlight cards */}
          <div className="space-y-4">
            {highlights.map(({ icon: Icon, label, value }) => (
              <div
                key={label}
                className="flex items-center gap-4 p-4 rounded-xl bg-card-surface border border-custom card-hover"
              >
                <div className="w-10 h-10 rounded-lg bg-muted-surface border border-custom flex items-center justify-center text-accent flex-shrink-0">
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-mono text-muted-foreground uppercase tracking-wide">{label}</p>
                  <p className="text-sm font-body font-medium">{value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
