"use client";

import { Github, Linkedin, Mail, Download, ArrowDown } from "lucide-react";
import { useEffect, useState } from "react";

export default function Hero() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16"
    >
      {/* Background orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-purple-500/10 blur-3xl animate-float" />
        <div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-blue-500/10 blur-3xl animate-float"
          style={{ animationDelay: "2s" }}
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-purple-500/5 blur-3xl" />
      </div>

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgb(var(--text)) 1px, transparent 1px), linear-gradient(90deg, rgb(var(--text)) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6 flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
        {/* Text content */}
        <div
          className={`flex-1 text-center lg:text-left transition-all duration-1000 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >

          <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.1] mb-4">
            <span className="gradient-text">Information Technology Student</span>
          </h1>

          <p className="text-base text-muted-foreground font-body leading-relaxed max-w-xl mx-auto lg:mx-0 mb-8">
          A passionate IT student with experience in web development, 
          creating responsive and user-friendly applications. I am passionate 
          about using technology to build meaningful digital solutions and continuously
          improving my skills through real-world projects and learning.
        </p>
        
          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center gap-3 justify-center lg:justify-start mb-8">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-accent text-white font-body font-medium text-sm hover:opacity-90 glow-accent transition-all hover:scale-105"
            >
              <Mail className="w-4 h-4" />
              Get In Touch
            </a>
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-custom bg-card-surface font-body font-medium text-sm hover:border-accent hover:text-accent transition-all hover:scale-105"
            >
              View Projects
            </a>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-3 justify-center lg:justify-start">
            <a
              href="mailto:pearlshalinegumiran@gmail.com"
              className="w-10 h-10 rounded-lg border border-custom bg-card-surface flex items-center justify-center text-muted-foreground hover:text-accent hover:border-accent transition-all hover:scale-110"
              aria-label="Email"
            >
              <Mail className="w-4 h-4" />
            </a>
            <a
              href="https://github.com/Pearlshaline"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-lg border border-custom bg-card-surface flex items-center justify-center text-muted-foreground hover:text-accent hover:border-accent transition-all hover:scale-110"
              aria-label="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-lg border border-custom bg-card-surface flex items-center justify-center text-muted-foreground hover:text-accent hover:border-accent transition-all hover:scale-110"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Avatar */}
        <div
          className={`flex-shrink-0 transition-all duration-1000 delay-300 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="relative">
            {/* Glow */}
            <div className="absolute inset-0 rounded-full glow-accent blur-md opacity-50" />
            {/* Avatar */}
            <div className="relative w-56 h-56 sm:w-64 sm:h-64 rounded-full border-2 border-accent/50 bg-gradient-to-br from-purple-500/20 to-blue-500/20 flex items-center justify-center overflow-hidden">
              <img
                src="/profile.jpg"
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
