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
  PartnersSection,
  FAQSection,
  FinalCTA 
} from "@/components/HomeSections";
import { Mail, MapPin, Phone } from "lucide-react";

function ContactSection() {
  return (
    <section id="contact" className="py-24 bg-background border-t border-border/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl mb-6">Partner With Us</h2>
          <p className="text-lg text-muted-foreground mb-10">
            Ready to bring structured, safe shooting sports to your institution? Get in touch with our team today.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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

            <div className="space-y-8">
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
      <PartnersSection />
      <WhyDifferent />
      <Disciplines />
      <WhySchoolsChooseUs />
      <HowItWorks />
      <StudentBenefits />
      <CoachesPreview />
      <ExpertVideos />
      <FAQSection />
      <FinalCTA />
      <ContactSection />
    </div>
  );
}
