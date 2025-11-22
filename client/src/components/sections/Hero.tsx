import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import heroBg from "@assets/generated_images/dark_cinematic_trading_chart_background.png";

export function Hero() {
  return (
    <section className="relative min-h-[78vh] md:min-h-[78vh] lg:min-h-[85vh] flex items-center justify-center overflow-hidden">
      {/* Background with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroBg} 
          alt="Trading Chart Background" 
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black"></div>
      </div>

      <div className="container relative z-10 px-4 text-center flex flex-col items-center">
        <h1 className="text-[28px] md:text-[40px] lg:text-[56px] font-bold leading-tight mb-6 animate-in fade-in slide-in-from-bottom-4 duration-1000">
          Master Trading & <span className="text-primary">Accelerate Your Growth</span>
        </h1>
        
        <p className="text-muted-foreground text-base md:text-lg max-w-[760px] mb-8 animate-in fade-in slide-in-from-bottom-6 duration-1000 delay-200">
          Join thousands of students mastering Forex trading and AI automation. 
          Unlock your potential with expert-led strategies and real-world skills.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-300">
          <Link href="/register">
            <Button className="bg-primary hover:bg-primary/90 text-white font-semibold rounded-lg px-8 py-6 text-lg w-full sm:w-auto">
              Get Started
            </Button>
          </Link>
          <Link href="/services">
            <Button variant="outline" className="border-white/20 text-white hover:bg-white/10 hover:text-white font-medium rounded-lg px-8 py-6 text-lg w-full sm:w-auto">
              Our Services
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}