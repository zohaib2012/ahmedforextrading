import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Clock, ArrowRight } from "lucide-react";

interface CourseCardProps {
  title: string;
  description: string;
  duration: string;
  price: string;
}

export function CourseCard({ title, description, duration, price }: CourseCardProps) {
  return (
    <div className="group relative bg-card border border-white/5 rounded-xl p-6 overflow-hidden hover:border-primary/50 transition-colors duration-300 flex flex-col h-full">
      <div className="mb-4">
        <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-primary transition-colors">{title}</h3>
        <div className="w-12 h-1 bg-primary rounded-full mb-4" />
        <p className="text-muted-foreground text-sm leading-relaxed mb-6">
          {description}
        </p>
      </div>
      
      <div className="mt-auto">
        <div className="flex items-center justify-between text-sm text-muted-foreground mb-6">
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-primary" />
            <span>{duration}</span>
          </div>
          <div className="font-semibold text-white">{price}</div>
        </div>
        
        <Link href="/courses">
          <Button className="w-full bg-white/5 hover:bg-primary hover:text-white text-white border border-white/10 hover:border-primary transition-all duration-300">
            View Course <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </Link>
      </div>
    </div>
  );
}