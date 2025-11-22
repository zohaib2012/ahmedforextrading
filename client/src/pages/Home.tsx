import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { Stats } from "@/components/sections/Stats";
import { CourseCard } from "@/components/ui/CourseCard";
import { TestimonialCard } from "@/components/ui/TestimonialCard";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import stock1 from "@assets/stock_images/professional_portrai_79e85ef9.jpg";
import stock2 from "@assets/stock_images/professional_portrai_598da2a9.jpg";
import stock3 from "@assets/stock_images/professional_portrai_f1469072.jpg";
import stock4 from "@assets/stock_images/professional_portrai_98db11bd.jpg";

export default function Home() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <Hero />
        <Stats />

        {/* Courses Preview */}
        <section className="py-20 container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Our Premium Courses</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Expert-led courses designed to take you from beginner to professional.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <CourseCard 
              title="AI Automation"
              description="Master YouTube Automation and leverage AI tools to build scalable, passive income streams without showing your face."
              duration="8 Weeks"
              price="PKR 25,000"
            />
            <CourseCard 
              title="Forex Trading"
              description="Learn technical analysis, risk management, and proven strategies to trade the global currency markets profitably."
              duration="12 Weeks"
              price="PKR 35,000"
            />
          </div>
        </section>

        {/* Mid CTA */}
        <section className="py-20 bg-secondary/20 border-y border-white/5">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">Ready to Start Profiting?</h2>
            <p className="text-muted-foreground max-w-xl mx-auto mb-8 text-lg">
              Join a community of successful traders and entrepreneurs today.
            </p>
            <Link href="/register">
              <Button className="bg-primary hover:bg-primary/90 text-white font-bold text-base px-6 py-3 rounded-lg shadow-lg shadow-primary/20 hover:scale-105 transition-all duration-300 cursor-pointer">
                Join HR Growth
              </Button>
            </Link>
          </div>
        </section>

        {/* Success Stories & Testimonials */}
        <section className="py-20 container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Success Stories Grid */}
            <div>
              <h3 className="text-2xl font-bold mb-8 text-white">Success Stories</h3>
              <div className="grid grid-cols-2 gap-4">
                <img src={stock1} alt="Success Story 1" className="w-full aspect-square object-cover rounded-lg opacity-80 hover:opacity-100 transition-opacity" />
                <img src={stock2} alt="Success Story 2" className="w-full aspect-square object-cover rounded-lg opacity-80 hover:opacity-100 transition-opacity" />
                <img src={stock3} alt="Success Story 3" className="w-full aspect-square object-cover rounded-lg opacity-80 hover:opacity-100 transition-opacity" />
                <img src={stock4} alt="Success Story 4" className="w-full aspect-square object-cover rounded-lg opacity-80 hover:opacity-100 transition-opacity" />
              </div>
            </div>

            {/* Testimonials */}
            <div>
              <h3 className="text-2xl font-bold mb-8 text-white">What Students Say</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <TestimonialCard 
                  name="Umair" 
                  role="Forex Trader" 
                  image={stock1}
                  quote="The mentorship at HR Growth changed my life. I went from losing money to consistent profits in 3 months."
                />
                <TestimonialCard 
                  name="Ahmad Ali" 
                  role="Forex Trader" 
                  image={stock2}
                  quote="Best investment I ever made. The AI strategies are cutting edge and actually work."
                />
                <TestimonialCard 
                  name="Mohsin" 
                  role="Forex Trader" 
                  image={stock3}
                  quote="Finally a course that teaches real risk management. Highly recommended for beginners."
                />
                <TestimonialCard 
                  name="Hassnain" 
                  role="Forex Trader" 
                  image={stock4}
                  quote="Professional environment and great support team. The community is very helpful."
                />
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}