import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index";
import About from "./pages/About";
import Vision from "./pages/Vision";
import Achievements from "./pages/Achievements";
import Academics from "./pages/Academics";
import Events from "./pages/Events";
import Faculty from "./pages/Faculty";
import FacultyDetail from "./pages/FacultyDetail";
import Community from "./pages/Community";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/vision" element={<Vision />} />
          <Route path="/achievements" element={<Achievements />} />
          <Route path="/academics" element={<Academics />} />
          <Route path="/events" element={<Events />} />
          <Route path="/faculty" element={<Faculty />} />
          <Route path="/community" element={<Community />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
