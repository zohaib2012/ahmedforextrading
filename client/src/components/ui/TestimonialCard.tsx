import { Star } from "lucide-react";

interface TestimonialCardProps {
  name: string;
  role: string;
  quote: string;
  image: string;
  rating?: number;
}

export function TestimonialCard({ name, role, quote, image, rating = 5 }: TestimonialCardProps) {
  return (
    <div className="bg-card border border-white/5 p-6 rounded-xl h-full flex flex-col">
      <div className="flex items-center gap-4 mb-4">
        <img 
          src={image} 
          alt={name} 
          className="w-12 h-12 rounded-full object-cover border border-white/10"
        />
        <div>
          <h4 className="text-white font-semibold text-sm">{name}</h4>
          <p className="text-primary text-xs">{role}</p>
        </div>
      </div>
      <div className="flex gap-1 mb-3">
        {[...Array(rating)].map((_, i) => (
          <Star key={i} className="w-3 h-3 fill-primary text-primary" />
        ))}
      </div>
      <p className="text-muted-foreground text-sm italic leading-relaxed">
        "{quote}"
      </p>
    </div>
  );
}