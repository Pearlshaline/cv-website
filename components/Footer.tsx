import { Code2, Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="py-8 px-6 border-t border-custom">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg bg-accent flex items-center justify-center">
            <Code2 className="w-3.5 h-3.5 text-white" />
          </div>
          <span className="text-sm font-display font-semibold">
            Pearlshaline<span className="text-accent">.</span>dev
          </span>
        </div>

        <p className="text-xs text-muted-foreground font-body flex items-center gap-1.5">
          Built with <Heart className="w-3 h-3 text-red-400 fill-red-400" /> using Next.js 15 & Shadcn UI
        </p>

        <p className="text-xs font-mono text-muted-foreground">
          © {new Date().getFullYear()} Pearlshaline Gumiran
        </p>
      </div>
    </footer>
  );
}
