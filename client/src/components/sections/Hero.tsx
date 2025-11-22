import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import heroBg from "@assets/generated_images/dark_cinematic_trading_chart_background.png";

export function Hero() {
  return (
    <section className="relative min-h-[78vh] md:min-h-[78vh] lg:min-h-[85vh] flex items-center justify-center overflow-hidden pt-20 md:pt-32">
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
        <h1 className="text-3xl sm:text-4xl md:text-[40px] lg:text-[56px] font-bold leading-tight mb-6 animate-in fade-in slide-in-from-bottom-4 duration-1000 flex flex-col md:block">
          <span className="block">Master Trading &</span>
          <span className="text-primary mt-1 md:mt-0 block">Accelerate Your Growth</span>
        </h1>
        
        <p className="text-muted-foreground text-base md:text-lg max-w-[760px] mb-8 animate-in fade-in slide-in-from-bottom-6 duration-1000 delay-200 px-4 md:px-0">
          Join thousands of students mastering Forex trading and AI automation. 
          Unlock your potential with expert-led strategies and real-world skills.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto items-center animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-300">
          <Link href="/register">
            <Button className="bg-primary hover:bg-primary/90 text-white font-semibold rounded-lg px-6 py-3 text-base w-full sm:w-auto min-w-[200px] cursor-pointer hover:scale-105 transition-transform shadow-[0_0_20px_rgba(0,200,83,0.3)]">
              Register
            </Button>
          </Link>
          <Link href="/services">
            <Button variant="outline" className="border-white/20 text-white hover:bg-white/10 hover:text-white font-medium rounded-lg px-6 py-3 text-base w-full sm:w-auto min-w-[200px] cursor-pointer hover:scale-105 transition-transform backdrop-blur-sm">
              Our Services
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}