import { Link, useLocation } from "wouter";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import logo from "@assets/IMG_4610_1763847844166.PNG";

export function Navbar() {
  const [location] = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/services", label: "Services" },
    { href: "/courses", label: "Courses" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "h-14 bg-black/80 backdrop-blur-md border-b border-white/5" : "h-[72px] bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 h-full flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <img 
            src={logo} 
            alt="HR Growth Logo" 
            className={`transition-all duration-300 object-contain ${scrolled ? "h-9" : "h-11"}`} 
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link 
              key={link.href} 
              href={link.href}
              className={`text-sm font-medium transition-colors hover:text-primary ${
                location === link.href ? "text-primary" : "text-white"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link href="/register">
            <Button className="bg-primary hover:bg-primary/90 text-white font-semibold rounded-lg px-4 py-2 h-auto text-sm cursor-pointer">
              Register
            </Button>
          </Link>
        </nav>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="text-white hover:bg-white/10" aria-label="Open menu">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-black border-l border-white/10 w-[300px] p-6">
              <div className="flex flex-col gap-8 mt-8">
                <div className="flex flex-col gap-4">
                  {navLinks.map((link) => (
                    <Link 
                      key={link.href} 
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className={`text-lg font-medium transition-colors hover:text-primary ${
                        location === link.href ? "text-primary" : "text-white"
                      }`}
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
                
                <div className="h-px bg-white/10 my-2" />
                
                <Link href="/register" onClick={() => setIsOpen(false)}>
                  <Button className="w-full bg-primary hover:bg-primary/90 text-white font-semibold rounded-lg py-6 text-lg">
                    Get Started
                  </Button>
                </Link>

                <div className="mt-auto text-sm text-muted-foreground">
                  <p>Contact us:</p>
                  <p className="text-white">0370-5102268</p>
                  <p className="text-white">HRgrowths@gmail.com</p>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}