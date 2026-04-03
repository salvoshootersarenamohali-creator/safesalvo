"use client";

import { ArrowRight, Trophy, Users, Shield, BookOpen, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button, buttonVariants } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { COACHES, PARTNERS, GALLERY_IMAGES } from "@/lib/mock-data";
import { cn } from "@/lib/utils";

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
            <div key={partner.id} className="bg-card aspect-square rounded-2xl border border-border shadow-sm flex flex-col items-center justify-center p-4 text-center hover:border-primary transition-colors group">
              <BookOpen className="w-8 h-8 text-muted-foreground/40 mb-3 group-hover:text-primary transition-colors" />
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

export function LeadershipSection() {
  return (
    <section className="py-20 bg-foreground text-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
         <div className="max-w-4xl mx-auto grid md:grid-cols-5 gap-12 items-center bg-background/5 border border-background/10 rounded-3xl p-8 md:p-12">
            <div className="md:col-span-2 relative aspect-square rounded-2xl overflow-hidden bg-background/10">
               <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <Trophy className="w-16 h-16 text-primary mb-2 opacity-80" />
                  <span className="text-background/60 text-sm">Founder Placeholder</span>
               </div>
            </div>
            <div className="md:col-span-3 space-y-6">
               <h2 className="text-3xl font-bold text-background">Directed by Champions</h2>
               <p className="text-background/80 text-lg leading-relaxed">
                 The Safe Salvo initiative is overseen by the leadership of Salvo Shooters Arena. Our core philosophy is that absolute safety and elite methodology are not mutually exclusive. 
               </p>
               <p className="text-background/80 text-lg leading-relaxed">
                 We've engineered this program so that schools can confidently offer international-standard sports without the historical risks.
               </p>
               <div>
                 <p className="font-bold text-xl text-primary mt-4">Leadership Name</p>
                 <p className="text-background/60 text-sm">Director, Salvo Shooters Arena</p>
               </div>
            </div>
         </div>
      </div>
    </section>
  );
}

export function CTASection() {
  return (
    <section className="py-24 bg-background text-center relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="container relative z-10 mx-auto px-4 text-center">
        <h2 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">Join the Network</h2>
        <p className="mt-4 text-xl text-muted-foreground max-w-2xl mx-auto mb-10">We are expanding into more schools and institutions. Ensure your students don't miss out.</p>
        <Link href="/#contact" className={cn(buttonVariants({ size: "lg" }), "font-bold text-lg px-8 h-14 shadow-xl shadow-primary/20")}>
          Become a Partner
        </Link>
      </div>
    </section>
  );
}
