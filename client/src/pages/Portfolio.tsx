import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import TimelineJourney from "@/components/TimelineJourney";
import ProjectsGallery from "@/components/ProjectsGallery";
import SkillsGalaxy from "@/components/SkillsGalaxy";
import AwardsWall from "@/components/AwardsWall";
import ContactSection from "@/components/ContactSection";
import MohanBot from "@/components/MohanBot";
import Footer from "@/components/Footer";

export default function Portfolio() {
  useEffect(() => {
    // Add dark class to document element
    document.documentElement.classList.add('dark');
    
    // Set document title and meta description
    document.title = "Mohankumar Palanisamy - Software Engineer & Tech Artist";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Award-winning Software Engineer and Creative Technologist from Chennai. Specializing in Python, React, and cutting-edge data solutions. Walk through my journey of innovation and excellence.');
    }
  }, []);

  return (
    <div className="min-h-screen bg-slate-900 text-slate-50 relative">
      {/* Background Pattern */}
      <div className="fixed inset-0 opacity-30 pointer-events-none">
        <div 
          className="w-full h-full" 
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.1'%3E%3Cpath d='m36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}
        />
      </div>
      <div className="fixed inset-0 tech-bg pointer-events-none" />

      <Navigation />
      <HeroSection />
      <TimelineJourney />
      <ProjectsGallery />
      <SkillsGalaxy />
      <AwardsWall />
      <ContactSection />
      <MohanBot />
      <Footer />
    </div>
  );
}
