import { Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="py-8 px-6 border-t border-custom">
      <div className="max-w-6xl mx-auto flex items-center justify-center">
        <p className="text-xs font-mono text-muted-foreground">
          © {new Date().getFullYear()} Pearlshaline Gumiran. Built with Next.js & Tailwind CSS.
        </p>
      </div>
    </footer>
  );
}