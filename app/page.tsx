import { 
  HeroSection, 
  WhatIsSafeSalvo, 
  WhyDifferent, 
  Disciplines, 
  WhySchoolsChooseUs, 
  HowItWorks, 
  StudentBenefits, 
  CoachesPreview, 
  ExpertVideos, 
  AboutLegacy, 
  FAQSection, 
  FinalCTA 
} from "@/components/HomeSections";
import { Mail, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

function ContactSection() {
  return (
    <section id="contact" className="py-24 bg-background border-t border-border/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl mb-6">Partner With Us</h2>
            <p className="text-lg text-muted-foreground mb-10">
              Ready to bring structured, safe shooting sports to your institution? Get in touch with our team today.
            </p>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg text-foreground">Visit Us</h4>
                  <p className="text-muted-foreground mt-1">
                    Salvo Shooters Arena<br/>
                    SCO 15, Preet City, opposite water tank,<br/>
                    Sector 86, Sahibzada Ajit Singh Nagar,<br/>
                    Punjab 140308
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg text-foreground">Call Us</h4>
                  <p className="text-muted-foreground mt-1">+91 97003 30076</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg text-foreground">Email Us</h4>
                  <p className="text-muted-foreground mt-1 text-sm sm:text-base break-words">salvoshootersarenamohali@gmail.com</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-card p-8 rounded-3xl border border-border/50 shadow-lg relative overflow-hidden">
             <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 blur-3xl rounded-full" />
             <h3 className="text-2xl font-bold mb-6 relative z-10">Send an Inquiry</h3>
             <form className="space-y-4 relative z-10">
               <div className="grid grid-cols-2 gap-4">
                 <div className="space-y-2">
                   <label className="text-sm font-medium">First Name</label>
                   <Input placeholder="John" className="bg-background" />
                 </div>
                 <div className="space-y-2">
                   <label className="text-sm font-medium">Last Name</label>
                   <Input placeholder="Doe" className="bg-background" />
                 </div>
               </div>
               <div className="space-y-2">
                 <label className="text-sm font-medium">Institution Name</label>
                 <Input placeholder="E.g. St. Xavier's High School" className="bg-background" />
               </div>
               <div className="space-y-2">
                 <label className="text-sm font-medium">Email Address</label>
                 <Input type="email" placeholder="john@school.edu" className="bg-background" />
               </div>
               <div className="space-y-2">
                 <label className="text-sm font-medium">Message</label>
                 <Textarea placeholder="Tell us about your requirements..." className="bg-background min-h-[120px]" />
               </div>
               <Button type="button" className="w-full font-bold h-12 text-base mt-2" size="lg">Submit Inquiry</Button>
             </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <HeroSection />
      <WhatIsSafeSalvo />
      <WhyDifferent />
      <Disciplines />
      <WhySchoolsChooseUs />
      <HowItWorks />
      <StudentBenefits />
      <CoachesPreview />
      <ExpertVideos />
      <AboutLegacy />
      <FAQSection />
      <FinalCTA />
      <ContactSection />
    </div>
  );
}
