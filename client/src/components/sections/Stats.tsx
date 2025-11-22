import { useEffect, useState, useRef } from "react";
import { useInView } from "framer-motion";

interface CounterProps {
  end: number;
  label: string;
  suffix?: string;
  decimals?: number;
}

function Counter({ end, label, suffix = "", decimals = 0 }: CounterProps) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const duration = 2000;
      const increment = end / (duration / 16);
      
      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(start);
        }
      }, 16);
      return () => clearInterval(timer);
    }
  }, [isInView, end]);

  return (
    <div ref={ref} className="flex flex-col items-center text-center p-4">
      <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
        {count.toFixed(decimals)}{suffix}
      </div>
      <div className="text-sm md:text-base text-muted-foreground font-medium">
        {label}
      </div>
    </div>
  );
}

export function Stats() {
  return (
    <section className="py-12 border-y border-white/5 bg-black/50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 divide-y md:divide-y-0 md:divide-x divide-white/5">
          <Counter end={2500} label="Students" suffix="+" />
          <Counter end={95} label="Success Rate" suffix="%" />
          <Counter end={150} label="Active Clients" suffix="+" />
          <Counter end={4.9} label="Rating" suffix="/5" decimals={1} />
        </div>
      </div>
    </section>
  );
}