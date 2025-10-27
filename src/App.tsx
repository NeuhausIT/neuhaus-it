import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "@/components/ScrollToTop";
import Index from "./pages/Index";
import Booking from "./pages/Booking";
import Terminbuchungen from "./pages/Terminbuchungen";
import Preise from "./pages/Preise";
import KontaktImpressum from "./pages/KontaktImpressum";
import ManagedNodes from "./pages/ManagedNodes";
import Fernwartung from "./pages/Fernwartung";
import Leitbild from "./pages/Leitbild";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/terminbuchungen" element={<Terminbuchungen />} />
          <Route path="/preise" element={<Preise />} />
          <Route path="/terminbuchungen-preise" element={<Booking />} /> {/* Legacy redirect - kept for backwards compatibility */}
          <Route path="/kontakt" element={<KontaktImpressum />} />
          <Route path="/managed-nodes" element={<ManagedNodes />} />
          <Route path="/serveradministration" element={<ManagedNodes />} /> {/* Legacy redirect */}
          <Route path="/fernwartung" element={<Fernwartung />} />
          <Route path="/leitbild" element={<Leitbild />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
