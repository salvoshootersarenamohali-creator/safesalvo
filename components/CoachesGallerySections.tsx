"use client";

import { Users, BookOpen } from "lucide-react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { COACHES, PARTNERS, GALLERY_IMAGES } from "@/lib/mock-data";

export function PageBanner() {
  return (
    <section className="relative overflow-hidden bg-foreground text-background pt-24 pb-16 md:pt-32 md:pb-24 text-center">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-primary/30 via-foreground to-foreground opacity-50" />
      <div className="container relative z-10 mx-auto px-4">
        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl text-background">
          Community & <span className="text-primary">Excellence</span>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-background/80 md:text-xl leading-relaxed">
          Meet the exceptional team behind Safe Salvo, our trusted institutional partners, and moments from our journey.
        </p>
      </div>
    </section>
  );
}

export function CoachesSection() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="outline" className="mb-4 text-primary border-primary/20 bg-primary/5">Elite Supervision</Badge>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Our Coaching Staff</h2>
          <p className="mt-4 text-lg text-muted-foreground">Medalists and seasoned professionals dedicated to student safety and development.</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {COACHES.map((coach) => (
            <Card key={coach.id} className="overflow-hidden border-border/50 shadow-sm group">
              <div className="aspect-[4/5] bg-muted relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center bg-secondary/80">
                  <UserIcon className="w-16 h-16 text-muted-foreground/30" />
                  <span className="absolute bottom-4 text-xs font-medium text-muted-foreground">{coach.image}</span>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="font-bold text-xl">{coach.name}</h3>
                <p className="text-primary font-medium text-sm mt-1 mb-3">{coach.title}</p>
                <div className="h-px w-8 bg-border mb-3" />
                <p className="text-muted-foreground text-sm">{coach.expertise}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

function UserIcon({className}: {className?: string}) {
  return <Users className={className} />;
}

export function PartnersSection() {
  return (
    <section className="py-24 bg-secondary/50 border-y border-border/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Partner Institutions</h2>
          <p className="mt-4 text-lg text-muted-foreground">Schools that trust Safe Salvo to deliver premium shooting sports education.</p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {PARTNERS.map((partner) => (
            <div key={partner.id} className="bg-card aspect-square rounded-2xl border border-border shadow-sm flex flex-col items-center justify-center p-6 text-center hover:border-primary transition-colors group">
              {partner.logo ? <Image src={partner.logo} alt={partner.name} width={64} height={64} className="object-contain mb-3" /> : <BookOpen className="w-8 h-8 text-muted-foreground/40 mb-3 group-hover:text-primary transition-colors" />}
              <span className="text-sm font-semibold text-foreground/80">{partner.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function GallerySection() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Safe Salvo in Action</h2>
          <p className="mt-4 text-lg text-muted-foreground">Glimpses of discipline, focus, and training.</p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
          {GALLERY_IMAGES.map((img) => (
            <div key={img.id} className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-muted group cursor-pointer shadow-sm border border-border">
              <div className="absolute inset-0 flex items-center justify-center bg-secondary">
                 <span className="text-muted-foreground font-medium">{img.src}</span>
              </div>
              <div className="absolute inset-0 bg-foreground/60 opacity-0 group-hover:opacity-100 transition-opacity p-6 flex flex-col justify-end">
                 <Badge className="w-fit mb-2 bg-primary text-primary-foreground pointer-events-none">{img.category}</Badge>
                 <h3 className="text-background font-bold text-lg">{img.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

