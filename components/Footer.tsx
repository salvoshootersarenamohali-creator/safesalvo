import Link from "next/link";
import { Target } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-foreground text-background border-t border-border/10">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <Target className="h-6 w-6 text-primary" />
              <span className="font-bold text-xl tracking-tight text-background">Safe Salvo</span>
            </Link>
            <p className="text-background/80 max-w-xs text-sm leading-relaxed">
              Safe Salvo introduces students to shooting sports through proprietary electronic pistol and rifle systems, designed for safe, school-friendly training environments.
            </p>
          </div>

          <div className="space-y-4 md:ml-auto md:pr-24">
            <h3 className="font-semibold text-lg text-background/90 tracking-wide">Quick Links</h3>
            <nav className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-background/70">
              <Link href="/" className="hover:text-primary transition-colors">Home</Link>
              <Link href="/coaches-gallery" className="hover:text-primary transition-colors">Coaches & Gallery</Link>
              <Link href="/#faq" className="hover:text-primary transition-colors">FAQ</Link>
              <Link href="/#contact" className="hover:text-primary transition-colors">Contact Us</Link>
            </nav>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-background/10 text-center text-sm text-background/60">
          <p>&copy; {new Date().getFullYear()} Salvo Shooters Arena. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
