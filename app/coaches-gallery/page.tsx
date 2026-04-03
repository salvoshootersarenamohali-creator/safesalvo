import {
  PageBanner,
  CoachesSection,
  PartnersSection,
  GallerySection
} from "@/components/CoachesGallerySections";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Coaches & Gallery | Safe Salvo",
  description: "Meet the elite coaching staff backing Safe Salvo and view our gallery of school-focused shooting sports programs.",
};

export default function CoachesGalleryPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <PageBanner />
      <CoachesSection />
      <PartnersSection />
      <GallerySection />
    </div>
  );
}
