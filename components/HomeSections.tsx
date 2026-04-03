"use client";

import Link from "next/link";
import { ArrowRight, CheckCircle2, ShieldCheck, Target, Crosshair, Users, Activity, ChevronRight, Play } from "lucide-react";
import { Button, buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { FAQS, COACHES } from "@/lib/mock-data";
import { cn } from "@/lib/utils";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-background pt-24 pb-16 md:pt-32 md:pb-24 lg:pt-40 lg:pb-32">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/10 via-background to-background pointer-events-none" />
      <div className="container relative z-10 mx-auto px-4 text-center sm:px-6 lg:px-8">
        <Badge variant="outline" className="mb-6 px-4 py-1.5 rounded-full border-primary/30 bg-primary/5 text-primary text-sm font-medium">
          A Salvo Shooters Arena Initiative
        </Badge>
        <h1 className="mx-auto max-w-4xl text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl lg:text-7xl">
          Safe Shooting Sports <br className="hidden md:block"/>
          <span className="text-primary">for Schools</span>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground md:text-xl leading-relaxed">
          Safe Salvo introduces students to shooting sports through proprietary electronic pistol and rifle systems designed for safe, school-friendly training environments.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
          <Link href="#contact" className={cn(buttonVariants({ size: "lg" }), "font-semibold w-full sm:w-auto shadow-lg shadow-primary/20")}>
            Partner With Us
          </Link>
          <Link href="#how-it-works" className={cn(buttonVariants({ variant: "outline", size: "lg" }), "font-semibold w-full sm:w-auto")}>
            Explore the Program
          </Link>
        </div>
      </div>
    </section>
  );
}

export function WhatIsSafeSalvo() {
  return (
    <section className="py-16 md:py-24 bg-secondary/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">What is Safe Salvo?</h2>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              Safe Salvo is a school-focused initiative by Salvo Shooters Arena. We utilize proprietary electronic training systems to introduce precision shooting sports in a safer, more accessible, and fully school-compatible way. 
            </p>
            <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
              Our compact setup removes the need for traditional 10m ranges while delivering the same discipline, focus, and core training of Olympic-style shooting.
            </p>
          </div>
          <div className="relative rounded-2xl bg-muted overflow-hidden aspect-video shadow-xl">
            <div className="absolute inset-0 bg-primary/10 flex items-center justify-center">
              <span className="text-muted-foreground text-sm font-medium">Safe Salvo Overview Image [Placeholder]</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function WhyDifferent() {
  const features = [
    { title: "Proprietary Technology", icon: <Target className="w-6 h-6 text-primary" />, desc: "Advanced electronic targets and trigger systems." },
    { title: "Pistol & Rifle Formats", icon: <Crosshair className="w-6 h-6 text-primary" />, desc: "Authentic training in both core shooting disciplines." },
    { title: "No Harmful Projectiles", icon: <ShieldCheck className="w-6 h-6 text-primary" />, desc: "100% electronic. No pellets, zero risk." },
    { title: "Compact Setup", icon: <Activity className="w-6 h-6 text-primary" />, desc: "Fits in classrooms, halls, or existing sports areas." },
    { title: "Coach-Led Sessions", icon: <Users className="w-6 h-6 text-primary" />, desc: "Expert guidance from professional Salvo coaches." },
    { title: "School-Friendly Design", icon: <CheckCircle2 className="w-6 h-6 text-primary" />, desc: "Meets institutional compliance and safety standards." }
  ];

  return (
    <section className="py-20 md:py-32 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Why Safe Salvo is Different</h2>
          <p className="mt-4 text-lg text-muted-foreground">A revolutionized approach to sports education.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feat, i) => (
            <Card key={i} className="border-border/50 shadow-sm hover:shadow-md transition-shadow bg-card">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  {feat.icon}
                </div>
                <CardTitle>{feat.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">{feat.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Disciplines() {
  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
         <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Precision Disciplines</h2>
          <p className="mt-4 text-lg text-primary font-medium">Two disciplines. One safe system. One elite standard of coaching.</p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {/* Pistol */}
          <div className="group relative rounded-3xl overflow-hidden bg-card border border-border shadow-sm">
            <div className="aspect-[4/3] bg-muted relative">
              <div className="absolute inset-0 bg-accent/20 flex flex-col items-center justify-center p-6 text-center">
                 <Target className="w-16 h-16 text-primary mb-4 opacity-50" />
                 <span className="text-muted-foreground font-medium">Electronic Pistol System [Placeholder]</span>
              </div>
            </div>
            <div className="p-8">
              <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">Electronic Pistol Training</h3>
              <p className="text-muted-foreground">Focus strictly on one-handed stability, micro-trigger control, and stance alignment. Pistol training develops supreme upper-body discipline and acute focus.</p>
            </div>
          </div>

          {/* Rifle */}
          <div className="group relative rounded-3xl overflow-hidden bg-card border border-border shadow-sm">
            <div className="aspect-[4/3] bg-muted relative">
              <div className="absolute inset-0 bg-primary/10 flex flex-col items-center justify-center p-6 text-center">
                 <Crosshair className="w-16 h-16 text-accent mb-4 opacity-50" />
                 <span className="text-muted-foreground font-medium">Electronic Rifle System [Placeholder]</span>
              </div>
            </div>
            <div className="p-8">
              <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">Electronic Rifle Training</h3>
              <p className="text-muted-foreground">Engaging the full body in a complex dynamic of posture, breathing, and stillness. Rifle training is the ultimate test of endurance and total-body coordination.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function WhySchoolsChooseUs() {
  const points = [
    "Significantly safer model than traditional ranges",
    "Absolute zero pellets or harmful projectiles",
    "Minimal space required (easily fits standard halls)",
    "Constant expert supervision by trained professionals",
    "Extremely beginner friendly and inclusive",
    "Ideal for workshops, demos, and recurring setups"
  ];

  return (
    <section className="py-24 bg-foreground text-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-background">Why Schools Choose Us</h2>
            <p className="mt-6 text-lg text-background/80 leading-relaxed mb-8">
              We remove the logistical and safety hurdles of launching a shooting sports program, allowing institutions to offer an elite sporting experience on campus.
            </p>
            <ul className="space-y-4">
              {points.map((pt, i) => (
                <li key={i} className="flex items-start gap-4">
                  <div className="mt-1 bg-primary/20 p-1 rounded-full"><CheckCircle2 className="w-5 h-5 text-primary" /></div>
                  <span className="text-background/90 text-lg">{pt}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative rounded-2xl bg-background/5 overflow-hidden aspect-square border border-background/10">
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-background/50 text-sm font-medium">School Integration [Placeholder Image]</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function HowItWorks() {
  const steps = [
    { step: "01", title: "Space Assessment", desc: "We evaluate your available hall or classroom space." },
    { step: "02", title: "Compact Range Setup", desc: "Installation of our mobile electronic target systems." },
    { step: "03", title: "Guided Student Sessions", desc: "Coaches walk students through safety and fundamentals." },
    { step: "04", title: "Safe Skill Development", desc: "Students practice under direct expert supervision." },
    { step: "05", title: "Ongoing Engagement", desc: "Continuous mapping of progress and competitive workshops." }
  ];

  return (
    <section id="how-it-works" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">How It Works</h2>
        </div>
        <div className="max-w-4xl mx-auto">
          {steps.map((item, i) => (
            <div key={i} className="flex flex-col sm:flex-row items-start sm:items-center gap-6 py-6 border-b border-border/50 last:border-0 relative group">
              <div className="text-5xl font-black text-muted/50 group-hover:text-primary/20 transition-colors">{item.step}</div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-foreground">{item.title}</h3>
                <p className="text-muted-foreground mt-1">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function StudentBenefits() {
  const benefits = ["Laser Concentration", "Mental Discipline", "Patience", "Inner Confidence", "Posture & Control", "Hand-Eye Coordination", "Mental Composure", "Sports Exposure"];
  return (
    <section className="py-20 bg-secondary/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center border-t border-border/50 pt-20">
        <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl mb-12">Student Benefits</h2>
        <div className="flex flex-wrap justify-center gap-4 max-w-5xl mx-auto">
          {benefits.map((b, i) => (
            <div key={i} className="bg-card px-6 py-4 rounded-full border border-border shadow-sm text-foreground font-semibold flex items-center gap-2 hover:border-primary transition-colors cursor-default">
              <div className="w-2 h-2 rounded-full bg-primary" />
              {b}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function CoachesPreview() {
  const previewCoaches = COACHES.slice(0, 3);
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Meet the Coaches</h2>
            <p className="mt-4 text-lg text-muted-foreground">Expert supervision is the foundation of our safety.</p>
          </div>
          <Link href="/coaches-gallery" className="text-primary hover:text-primary/80 font-medium inline-flex items-center gap-1 mt-4 sm:mt-0">
            View All Coaches <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {previewCoaches.map((coach) => (
            <Card key={coach.id} className="overflow-hidden border-border/50 bg-card group">
              <div className="aspect-square bg-muted relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center bg-secondary/80">
                  <span className="text-muted-foreground text-sm font-medium">{coach.image}</span>
                </div>
              </div>
              <CardCardContent className="p-6">
                <h3 className="font-bold text-xl">{coach.name}</h3>
                <p className="text-primary font-medium text-sm mt-1 mb-3">{coach.title}</p>
                <p className="text-muted-foreground text-sm border-t border-border pt-3">{coach.expertise}</p>
              </CardCardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

// Temporary card content wrapper to match above
function CardCardContent({children, className}: {children: React.ReactNode, className?: string}) {
  return <div className={className}>{children}</div>;
}

export function ExpertVideos() {
  return (
    <section className="py-20 bg-foreground text-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold tracking-tight mb-4 text-background">Coach Insights & Videos</h2>
        <p className="text-background/70 mb-12 max-w-2xl mx-auto">Hear from our professional athletes and coaches about the discipline required for precision shooting.</p>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {[1,2].map((i) => (
            <div key={i} className="relative aspect-video rounded-2xl bg-background/10 border border-background/20 flex flex-col items-center justify-center group cursor-pointer overflow-hidden">
              <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg shadow-primary/20">
                <Play className="w-6 h-6 text-primary-foreground fill-primary-foreground ml-1" />
              </div>
              <span className="mt-4 font-medium text-background/80">Video Placeholder {i}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function AboutLegacy() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center border p-12 md:p-16 rounded-3xl bg-secondary/20 relative overflow-hidden">
           <div className="absolute top-0 right-0 p-8 opacity-5">
             <Target className="w-48 h-48" />
           </div>
           <Badge variant="outline" className="mb-6 mx-auto px-4 py-1.5 rounded-full border-foreground/20 text-foreground text-sm">
            Our Legacy
          </Badge>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl mb-6">Backed by Salvo Shooters Arena</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Safe Salvo was born out of <strong>Salvo Shooters Arena's</strong> mission to bring structured shooting sports exposure to schools across cities and countries. By eliminating traditional barriers—such as space requirements and live projectiles—we ensure that every student can learn precision, discipline, and focus safely.
          </p>
        </div>
      </div>
    </section>
  );
}

export function FAQSection() {
  return (
    <section id="faq" className="py-24 bg-secondary/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Frequently Asked Questions</h2>
          </div>
          <Accordion className="w-full bg-card rounded-2xl p-6 shadow-sm border border-border">
            {FAQS.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-border">
                <AccordionTrigger className="text-left font-semibold text-lg hover:text-primary transition-colors">{faq.question}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}

export function FinalCTA() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-primary/5" />
      <div className="container relative z-10 mx-auto px-4 text-center">
        <h2 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">Translate Focus Into Action</h2>
        <p className="mt-4 text-xl text-muted-foreground max-w-2xl mx-auto mb-10">Bring the discipline of Olympic-style precision sports directly to your campus.</p>
        <Link href="#contact" className={cn(buttonVariants({ size: "lg" }), "font-bold text-lg px-8 h-14 shadow-xl shadow-primary/20")}>
          Get Started Today <ChevronRight className="ml-2 w-5 h-5" />
        </Link>
      </div>
    </section>
  );
}
