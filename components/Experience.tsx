"use client";

import { useEffect, useRef } from "react";
import { Award, Calendar, MapPin, Users } from "lucide-react";

const certifications = [
  { title: "Certificate of Membership", org: "JPCS – SPUP Chapter", year: "2025–2026"},
  { title: "Certificate of Membership", org: "JPCS National", year: "2025–2026"},
  { title: "Certificate of Participation", org: "ITE Convention 2025 – Innovate, Transform, Shaping a Smarter World", year: "2025"},
  { title: "Certificate of Participation", org: "ITE Convention 2024 – Sustainable Energy: IT & Engineering for a Greener Tomorrow", year: "2024"},
  { title: "Certificate of Participation", org: "IT Cybersecurity Roadshow", year: "2025", },
  { title: "Certificate of Participation", org: "SITE Film Festival 2025", year: "2025"},
  { title: "Certificate of Participation", org: "The Art of Filmmaking Workshop", year: "2025"},
  { title: "Certificate of Completion", org: "National Service Training Program (NSTP)", year: "2025" },
  { title: "Certificate of Participation", org: "CYBER SUMMIT 2023", year: "2023" },
];

const events = [
  {
    event: "IT Cybersecurity Roadshow",
    venue: "St. Paul University Philippines, Tuguegarao City",
    date: "October 25, 2025",
    description: "A focused seminar on cybersecurity trends, threats, and best practices in IT systems.",
  },
  {
    event: "SITE Film Festival 2025",
    venue: "St. Paul University Philippines, Tuguegarao City",
    date: "June 19, 2025",
    description: "Annual film festival celebrating creativity and storytelling within the IT and Engineering community.",
  },
  {
    event: 'ITE Convention 2025 – "Innovate, Transform, Shaping a Smarter World"',
    venue: "St. Paul University Philippines, Tuguegarao City, Cagayan",
    date: "March 26–28, 2025",
    description: "Multi-day convention showcasing innovations in information technology and engineering.",
  },
  {
    event: 'ITE Convention 2024 – "Sustainable Energy: IT & Engineering for a Greener Tomorrow"',
    venue: "St. Paul University Philippines, Tuguegarao City, Cagayan",
    date: "April 17–19, 2024",
    description: "Convention focused on sustainable technology and its integration with engineering practices.",
  },
];

export default function Experience() {
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
    <section id="experience" className="py-24 px-6 bg-muted-surface/30">
      <div ref={ref} className="section-fade max-w-6xl mx-auto">
        <div className="mb-14">
          <h2 className="font-display text-4xl sm:text-5xl font-bold">Experience</h2>
          <div className="mt-3 w-16 h-0.5 bg-accent" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Certifications */}
          <div>
            <h3 className="font-display text-xl font-semibold mb-6 flex items-center gap-2">
              <Award className="w-5 h-5 text-accent" />
              Certifications & Memberships
            </h3>
            <div className="space-y-3">
              {certifications.map((cert, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 p-4 rounded-xl bg-card-surface border border-custom card-hover"
                >
                  <span className="text-xl flex-shrink-0 mt-0.5"></span>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-body font-medium leading-snug">{cert.title}</p>
                    <p className="text-xs text-muted-foreground font-body mt-0.5 leading-snug">{cert.org}</p>
                  </div>
                  <span className="text-xs font-mono text-accent flex-shrink-0 mt-0.5">{cert.year}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Events timeline */}
          <div>
            <h3 className="font-display text-xl font-semibold mb-6 flex items-center gap-2">
              <Calendar className="w-5 h-5 text-accent" />
              Seminars & Conferences
            </h3>
            <div className="relative pl-10">
              <div className="timeline-line" />
              <div className="space-y-6">
                {events.map((ev, i) => (
                  <div key={i} className="relative">
                    {/* Dot */}
                    <div className="absolute -left-10 top-2 w-4 h-4 rounded-full border-2 border-accent bg-[rgb(var(--bg))] z-10 flex items-center justify-center">
                      <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                    </div>
                    <div className="p-4 rounded-xl bg-card-surface border border-custom card-hover">
                      <p className="text-sm font-body font-semibold leading-snug mb-1">{ev.event}</p>
                      <div className="flex flex-wrap gap-3 mb-2">
                        <span className="flex items-center gap-1 text-xs font-mono text-muted-foreground">
                          <Calendar className="w-3 h-3" /> {ev.date}
                        </span>
                        <span className="flex items-center gap-1 text-xs font-mono text-muted-foreground">
                          <MapPin className="w-3 h-3" /> {ev.venue}
                        </span>
                      </div>
                      <p className="text-xs text-muted-foreground font-body leading-relaxed">{ev.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Affiliations */}
        <div className="mt-12 p-6 rounded-2xl bg-card-surface border border-custom">
          <h3 className="font-display text-xl font-semibold mb-5 flex items-center gap-2">
            <Users className="w-5 h-5 text-accent" />
            Affiliations
          </h3>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { org: "JPCS – Junior Philippine Computer Society", role: "Member", period: "2025–2026" },
              { org: "JPCS-SPUP Chapter", role: "Member", period: "2025–2026" },
            ].map((a) => (
              <div key={a.org} className="flex items-center justify-between p-4 rounded-xl bg-muted-surface border border-custom">
                <div>
                  <p className="text-sm font-body font-medium">{a.org}</p>
                  <p className="text-xs text-muted-foreground font-mono mt-0.5">{a.role}</p>
                </div>
                <span className="text-xs font-mono text-accent">{a.period}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
