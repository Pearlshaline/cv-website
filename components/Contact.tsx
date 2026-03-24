"use client";

import { useEffect, useRef, useState } from "react";
import { Mail, Github, Linkedin, MapPin, Send, CheckCircle } from "lucide-react";

export default function Contact() {
  const ref = useRef<HTMLDivElement>(null);
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

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

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // In production, wire this to an API route or Formspree
    setSent(true);
    setTimeout(() => setSent(false), 4000);
    setForm({ name: "", email: "", message: "" });
  }

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "pearlshalinegumiran@gmail.com",
      href: "mailto:pearlshalinegumiran@gmail.com",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/pearlshaline",
      href: "https://github.com",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/pearlshaline",
      href: "https://linkedin.com",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Tuguegarao City, Cagayan, Philippines",
      href: null,
    },
  ];

  return (
    <section id="contact" className="py-24 px-6 bg-muted-surface/30">
      <div ref={ref} className="section-fade max-w-6xl mx-auto">
        <div className="mb-14">
          <h2 className="font-display text-4xl sm:text-5xl font-bold">Get In Touch</h2>
          <div className="mt-3 w-16 h-0.5 bg-accent" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left — info */}
          <div>
            <p className="text-base text-muted-foreground font-body leading-relaxed mb-8">
              I&apos;m always open to connecting with fellow tech enthusiasts, potential collaborators,
              or anyone interested in discussing projects and opportunities. Feel free to reach out!
            </p>

            <div className="space-y-4">
              {contactInfo.map(({ icon: Icon, label, value, href }) => (
                <div
                  key={label}
                  className="flex items-center gap-4 p-4 rounded-xl bg-card-surface border border-custom card-hover"
                >
                  <div className="w-10 h-10 rounded-lg bg-muted-surface border border-custom flex items-center justify-center text-accent flex-shrink-0">
                    <Icon className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-xs font-mono text-muted-foreground uppercase tracking-wide">
                      {label}
                    </p>
                    {href ? (
                      <a
                        href={href}
                        target={href.startsWith("mailto") ? "_self" : "_blank"}
                        rel="noopener noreferrer"
                        className="text-sm font-body hover:text-accent transition-colors"
                      >
                        {value}
                      </a>
                    ) : (
                      <p className="text-sm font-body">{value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — form */}
          <div className="p-6 rounded-2xl bg-card-surface border border-custom">
            <h3 className="font-display text-xl font-semibold mb-6">Send a Message</h3>

            {sent ? (
              <div className="flex flex-col items-center justify-center py-12 text-center gap-3">
                <CheckCircle className="w-12 h-12 text-green-400" />
                <p className="font-display text-lg font-semibold">Message Sent!</p>
                <p className="text-sm text-muted-foreground font-body">
                  Thank you for reaching out. I&apos;ll get back to you soon.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-mono text-muted-foreground uppercase tracking-wide mb-1.5">
                    Name
                  </label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="Your full name"
                    className="w-full px-4 py-3 rounded-xl bg-muted-surface border border-custom text-sm font-body placeholder:text-muted-foreground focus:outline-none focus:border-accent transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs font-mono text-muted-foreground uppercase tracking-wide mb-1.5">
                    Email
                  </label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="your@email.com"
                    className="w-full px-4 py-3 rounded-xl bg-muted-surface border border-custom text-sm font-body placeholder:text-muted-foreground focus:outline-none focus:border-accent transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs font-mono text-muted-foreground uppercase tracking-wide mb-1.5">
                    Message
                  </label>
                  <textarea
                    required
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="What would you like to say?"
                    className="w-full px-4 py-3 rounded-xl bg-muted-surface border border-custom text-sm font-body placeholder:text-muted-foreground focus:outline-none focus:border-accent transition-colors resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-accent text-white font-body font-medium text-sm hover:opacity-90 glow-accent transition-all hover:scale-[1.02]"
                >
                  <Send className="w-4 h-4" />
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
