import { useState, useEffect } from "react";
import { useLocation } from "wouter";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

const formSchema = z.object({
  fullName: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Phone number must be valid"),
  country: z.string().default("Pakistan"),
  course: z.string().min(1, "Please select a course"),
});

export default function Register() {
  const [location, setLocation] = useLocation();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Parse query param for default course selection
  const getCourseFromUrl = () => {
    const search = window.location.search;
    const params = new URLSearchParams(search);
    const course = params.get("course");
    if (course === "ai") return "AI Automation";
    if (course === "forex") return "Forex Trading";
    return "";
  };

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      country: "Pakistan",
      course: getCourseFromUrl(),
    },
  });

  // Update form value if URL param changes
  useEffect(() => {
    const course = getCourseFromUrl();
    if (course) {
      form.setValue("course", course);
    }
  }, [location, form]);

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500));
      
      // Save to localStorage for demo purposes
      const newRegistration = {
        id: Date.now(),
        name: values.fullName,
        email: values.email,
        phone: values.phone,
        course: values.course,
        date: new Date().toISOString().split('T')[0]
      };

      const existingRegs = JSON.parse(localStorage.getItem("hr_registrations") || "[]");
      localStorage.setItem("hr_registrations", JSON.stringify([newRegistration, ...existingRegs]));
      
      console.log("Registration submitted:", values);
      
      toast({
        title: "Registration Successful!",
        description: "We have received your application. Our team will contact you shortly.",
        variant: "default",
        className: "bg-primary text-white border-none",
      });
      
      form.reset();
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      
      <main className="flex-grow flex items-center justify-center py-24 container mx-auto px-4">
        <div className="w-full max-w-md bg-card border border-white/10 rounded-2xl p-8 shadow-2xl">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-white mb-2">Join HR Growth</h1>
            <p className="text-muted-foreground text-sm">
              Fill out the form below to secure your spot.
            </p>
          </div>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="fullName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-white">Full Name</FormLabel>
                    <FormControl>
                      <Input placeholder="John Doe" {...field} className="bg-secondary/30 border-white/10 text-white placeholder:text-white/30" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-white">Email Address</FormLabel>
                    <FormControl>
                      <Input placeholder="john@example.com" {...field} className="bg-secondary/30 border-white/10 text-white placeholder:text-white/30" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-white">Phone Number</FormLabel>
                    <FormControl>
                      <Input placeholder="0300 1234567" {...field} className="bg-secondary/30 border-white/10 text-white placeholder:text-white/30" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="country"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-white">Country</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value} disabled>
                      <FormControl>
                        <SelectTrigger className="bg-secondary/30 border-white/10 text-white">
                          <SelectValue placeholder="Select country" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent className="bg-card border-white/10 text-white">
                        <SelectItem value="Pakistan">Pakistan</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="course"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-white">Select Course</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger className="bg-secondary/30 border-white/10 text-white">
                          <SelectValue placeholder="Select a course" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent className="bg-card border-white/10 text-white">
                        <SelectItem value="AI Automation">AI Automation</SelectItem>
                        <SelectItem value="Forex Trading">Forex Trading</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button 
                type="submit" 
                className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-3 text-base cursor-pointer"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Submitting..." : "Register Now"}
              </Button>
            </form>
          </Form>
        </div>
      </main>

      <Footer />
    </div>
  );
}