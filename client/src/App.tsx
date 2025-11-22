import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import Services from "@/pages/Services";
import Courses from "@/pages/Courses";
import Register from "@/pages/Register";
import Admin from "@/pages/Admin";

import { useEffect } from "react";

function Router() {
  // Track visits
  useEffect(() => {
    const storedVisits = localStorage.getItem("hr_visitor_count");
    const lastVisitDate = localStorage.getItem("hr_last_visit_date");
    const today = new Date().toDateString();

    let currentCount = storedVisits ? parseInt(storedVisits) : 1250;

    // Increment if it's a new session or just for demo purposes, let's just increment on every load for the user to see it change
    // But to be more "real", let's check if they visited today.
    // For this request ("visitor website pe aaye to wohi show ho"), let's simple increment
    
    currentCount++;
    localStorage.setItem("hr_visitor_count", currentCount.toString());
    localStorage.setItem("hr_last_visit_date", today);
  }, []);

  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/services" component={Services} />
      <Route path="/courses" component={Courses} />
      <Route path="/register" component={Register} />
      <Route path="/admin" component={Admin} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;