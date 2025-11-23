import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { CheckCircle2, Clock, Calendar, Users } from "lucide-react";

export default function Courses() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      
      <main className="flex-grow py-24 container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Our Courses</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Industry-leading curriculum taught by active market professionals.
          </p>
        </div>

        <div className="space-y-12 max-w-5xl mx-auto">
          {/* Course 1: AI Automation */}
          <div className="bg-card border border-white/5 rounded-2xl p-8 md:p-10 flex flex-col md:flex-row gap-8 md:gap-12">
            <div className="flex-1">
              <div className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium mb-4">
                Most Popular
              </div>
              <h2 className="text-3xl font-bold text-white mb-4">AI Automation</h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Learn how to build and scale a YouTube Automation business using cutting-edge AI tools. 
                This course covers everything from niche selection to scriptwriting, voiceovers, and video editing—all automated.
              </p>
              
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Clock className="w-4 h-4 text-primary" /> 6 Weeks Duration
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Calendar className="w-4 h-4 text-primary" /> Weekend Classes
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Users className="w-4 h-4 text-primary" /> Mentorship Included
                </div>
              </div>

              <div className="flex items-center gap-4">
                <Link href="/register?course=ai">
                  <Button className="bg-primary hover:bg-primary/90 text-white px-6 py-2.5">
                    Enroll Now
                  </Button>
                </Link>
                <span className="text-lg font-bold text-white">PKR 25,000</span>
              </div>
            </div>
            
            <div className="w-full md:w-1/3 bg-secondary/20 rounded-xl p-6 border border-white/5">
              <h4 className="text-white font-semibold mb-4">What you'll learn:</h4>
              <ul className="space-y-3">
                {[
                  "Niche Selection Mastery",
                  "AI Script & Voiceover Gen",
                  "Automated Video Editing",
                  "Thumbnail Psychology",
                  "Monetization Strategies"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Course 2: Forex Trading */}
          <div className="bg-card border border-white/5 rounded-2xl p-8 md:p-10 flex flex-col md:flex-row gap-8 md:gap-12">
            <div className="flex-1">
              <div className="inline-block bg-secondary text-white px-3 py-1 rounded-full text-sm font-medium mb-4">
                Best for Beginners
              </div>
              <h2 className="text-3xl font-bold text-white mb-4">Forex Trading Mastery</h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                A complete A-to-Z program on Forex Trading. We teach you how to read the charts, 
                understand market structure, manage risk like a professional, and develop a winning psychology.
              </p>
              
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Clock className="w-4 h-4 text-primary" /> 6 Weeks Duration
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Calendar className="w-4 h-4 text-primary" /> Live Sessions
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Users className="w-4 h-4 text-primary" /> Trading Community
                </div>
              </div>

              <div className="flex items-center gap-4">
                <Link href="/register?course=forex">
                  <Button className="bg-primary hover:bg-primary/90 text-white px-6 py-2.5">
                    Enroll Now
                  </Button>
                </Link>
                <span className="text-lg font-bold text-white">PKR 35,000</span>
              </div>
            </div>
            
            <div className="w-full md:w-1/3 bg-secondary/20 rounded-xl p-6 border border-white/5">
              <h4 className="text-white font-semibold mb-4">What you'll learn:</h4>
              <ul className="space-y-3">
                {[
                  "Basic Market Information",
                  "Platforms Navigations",
                  "Market Structure",
                  "Price Action",
                  "Advance SMC",
                  "Volume Confirmations",
                  "Daily live trades"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}