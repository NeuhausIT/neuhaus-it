import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "@/components/ScrollToTop";
import Index from "./pages/Index";
import Booking from "./pages/Booking";
import KontaktImpressum from "./pages/KontaktImpressum";
import ManagedNodes from "./pages/ManagedNodes";
import Fernwartung from "./pages/Fernwartung";
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
          <Route path="/terminbuchungen-preise" element={<Booking />} />
          <Route path="/kontakt" element={<KontaktImpressum />} />
          <Route path="/managed-nodes" element={<ManagedNodes />} />
          <Route path="/serveradministration" element={<ManagedNodes />} /> {/* Legacy redirect */}
          <Route path="/fernwartung" element={<Fernwartung />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
