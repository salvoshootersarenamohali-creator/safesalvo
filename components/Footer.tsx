import Link from "next/link";
import { Target, MapPin, Phone, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-foreground text-background border-t border-border/10">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <Target className="h-6 w-6 text-primary" />
              <span className="font-bold text-xl tracking-tight text-background">Safe Salvo</span>
            </Link>
            <p className="text-background/80 max-w-xs text-sm leading-relaxed">
              Safe Salvo introduces students to shooting sports through proprietary electronic pistol and rifle systems, designed for safe, school-friendly training environments.
            </p>
          </div>
          
          <div className="space-y-4">
            <h3 className="font-semibold text-lg text-background/90 tracking-wide">Quick Links</h3>
            <nav className="flex flex-col gap-3 text-sm text-background/70">
              <Link href="/" className="hover:text-primary transition-colors">Home</Link>
              <Link href="/coaches-gallery" className="hover:text-primary transition-colors">Coaches & Gallery</Link>
              <Link href="/#faq" className="hover:text-primary transition-colors">FAQ</Link>
              <Link href="/#contact" className="hover:text-primary transition-colors">Contact Us</Link>
            </nav>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold text-lg text-background/90 tracking-wide">Contact Us</h3>
            <div className="space-y-3 text-sm text-background/80">
              <p className="font-medium">Salvo Shooters Arena</p>
              <div className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5 text-primary shrink-0" />
                <span>SCO 15, Preet City, opposite water tank,<br/>Sector 86, Sahibzada Ajit Singh Nagar,<br/>Punjab 140308</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-primary shrink-0" />
                <span>+91 97003 30076</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-primary shrink-0" />
                <span>salvoshootersarenamohali@gmail.com</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-background/10 text-center text-sm text-background/60">
          <p>&copy; {new Date().getFullYear()} Salvo Shooters Arena. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
