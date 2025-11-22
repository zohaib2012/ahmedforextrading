import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { Users, Eye, Download, LogOut } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

// Mock Data
const MOCK_REGISTRATIONS = [
  { id: 1, name: "Ali Khan", email: "ali@example.com", phone: "03001234567", course: "Forex Trading", date: "2024-05-20" },
  { id: 2, name: "Sarah Ahmed", email: "sarah@example.com", phone: "03211234567", course: "AI Automation", date: "2024-05-21" },
  { id: 3, name: "Bilal Raza", email: "bilal@example.com", phone: "03331234567", course: "Forex Trading", date: "2024-05-21" },
  { id: 4, name: "Zara Sheikh", email: "zara@example.com", phone: "03451234567", course: "AI Automation", date: "2024-05-22" },
  { id: 5, name: "Usman Tariq", email: "usman@example.com", phone: "03121234567", course: "Forex Trading", date: "2024-05-22" },
];

const MOCK_STATS = [
  { name: 'Mon', visits: 120 },
  { name: 'Tue', visits: 150 },
  { name: 'Wed', visits: 180 },
  { name: 'Thu', visits: 140 },
  { name: 'Fri', visits: 210 },
  { name: 'Sat', visits: 250 },
  { name: 'Sun', visits: 300 },
];

const loginSchema = z.object({
  username: z.string().min(1, "Username is required"),
  password: z.string().min(1, "Password is required"),
});

export default function Admin() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const { toast } = useToast();
  const [visitorCount, setVisitorCount] = useState(1254);
  const [registrations, setRegistrations] = useState(MOCK_REGISTRATIONS);

  useEffect(() => {
    // Get visitor count from localStorage or initialize
    const storedVisits = localStorage.getItem("hr_visitor_count");
    if (storedVisits) {
      setVisitorCount(parseInt(storedVisits));
    }

    // Get registrations from localStorage
    const storedRegs = localStorage.getItem("hr_registrations");
    if (storedRegs) {
      const parsedRegs = JSON.parse(storedRegs);
      // Merge local storage regs with mock regs, avoiding duplicates if needed, 
      // but for simplicity we just prepend local ones to mock ones.
      setRegistrations([...parsedRegs, ...MOCK_REGISTRATIONS]);
    }
  }, []);

  const form = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });

  function onLogin(values: z.infer<typeof loginSchema>) {
    if (values.username === "TRADINGDESK" && values.password === "TRADINGDESK0099") {
      setIsAuthenticated(true);
      toast({
        title: "Welcome Admin",
        description: "Successfully logged in.",
        className: "bg-primary text-white border-none",
      });
    } else {
      toast({
        title: "Access Denied",
        description: "Invalid credentials.",
        variant: "destructive",
      });
    }
  }

  function onLogout() {
    setIsAuthenticated(false);
    form.reset();
  }

  function handleExport() {
    const csvContent = "data:text/csv;charset=utf-8," 
      + "Name,Email,Phone,Course,Date\n"
      + registrations.map(e => `${e.name},${e.email},${e.phone},${e.course},${e.date}`).join("\n");
    
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "registrations.csv");
    document.body.appendChild(link);
    link.click();
  }

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center p-4">
        <Card className="w-full max-w-md bg-card border-white/10">
          <CardHeader>
            <CardTitle className="text-2xl text-center text-white">Admin Login</CardTitle>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onLogin)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="username"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-white">Username</FormLabel>
                      <FormControl>
                        <Input {...field} className="bg-secondary/30 border-white/10 text-white" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-white">Password</FormLabel>
                      <FormControl>
                        <Input type="password" {...field} className="bg-secondary/30 border-white/10 text-white" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-white">
                  Login
                </Button>
              </form>
            </Form>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white p-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Admin Dashboard</h1>
          <Button variant="outline" onClick={onLogout} className="border-white/20 text-white hover:bg-white/10">
            <LogOut className="w-4 h-4 mr-2" /> Logout
          </Button>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <Card className="bg-card border-white/10">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-white">Total Visits Today</CardTitle>
              <Eye className="h-4 w-4 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-white">{visitorCount.toLocaleString()}</div>
              <p className="text-xs text-muted-foreground">Live tracking</p>
            </CardContent>
          </Card>
          <Card className="bg-card border-white/10">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-white">Total Registrations</CardTitle>
              <Users className="h-4 w-4 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-white">{registrations.length}</div>
              <p className="text-xs text-muted-foreground">All time</p>
            </CardContent>
          </Card>
        </div>

        {/* Chart */}
        <Card className="bg-card border-white/10 mb-8">
          <CardHeader>
            <CardTitle className="text-white">Visitor Growth (Last 7 Days)</CardTitle>
          </CardHeader>
          <CardContent className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={MOCK_STATS}>
                <CartesianGrid strokeDasharray="3 3" stroke="#333" />
                <XAxis dataKey="name" stroke="#888" />
                <YAxis stroke="#888" />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#111', border: '1px solid #333' }}
                  labelStyle={{ color: '#fff' }}
                />
                <Line type="monotone" dataKey="visits" stroke="#00C853" strokeWidth={2} dot={{ fill: '#00C853' }} />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Registrations Table */}
        <Card className="bg-card border-white/10">
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle className="text-white">Recent Registrations</CardTitle>
            <Button size="sm" variant="outline" onClick={handleExport} className="border-white/20 text-white hover:bg-white/10">
              <Download className="w-4 h-4 mr-2" /> Export CSV
            </Button>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow className="border-white/10 hover:bg-transparent">
                  <TableHead className="text-muted-foreground">Name</TableHead>
                  <TableHead className="text-muted-foreground">Email</TableHead>
                  <TableHead className="text-muted-foreground">Phone</TableHead>
                  <TableHead className="text-muted-foreground">Course</TableHead>
                  <TableHead className="text-muted-foreground">Date</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {registrations.map((reg) => (
                  <TableRow key={reg.id} className="border-white/10 hover:bg-white/5">
                    <TableCell className="font-medium text-white">{reg.name}</TableCell>
                    <TableCell className="text-gray-300">{reg.email}</TableCell>
                    <TableCell className="text-gray-300">{reg.phone}</TableCell>
                    <TableCell className="text-gray-300">
                      <span className={`px-2 py-1 rounded-full text-xs ${
                        reg.course === 'AI Automation' ? 'bg-purple-500/20 text-purple-400' : 'bg-green-500/20 text-green-400'
                      }`}>
                        {reg.course}
                      </span>
                    </TableCell>
                    <TableCell className="text-gray-300">{reg.date}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}