import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { Palette, Share2, Rocket, Code } from "lucide-react";

export default function Services() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      
      <main className="flex-grow py-24 container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Our Services</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Comprehensive digital solutions to help your business scale and succeed in the modern economy.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <ServiceCard 
            title="Graphic Designing"
            description="Professional branding, logo design, and visual identity creation that makes your business stand out."
            icon={Palette}
          />
          <ServiceCard 
            title="Social Media Marketing"
            description="Strategic social media management and advertising to grow your audience and engagement."
            icon={Share2}
          />
          <ServiceCard 
            title="Brand Startups"
            description="End-to-end incubation and strategy for new businesses looking to launch with impact."
            icon={Rocket}
          />
          <ServiceCard 
            title="Website Development"
            description="Custom, responsive, and high-performance websites built with the latest technologies."
            icon={Code}
          />
        </div>
      </main>

      <Footer />
    </div>
  );
}