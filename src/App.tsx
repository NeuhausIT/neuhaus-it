import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Routes, Route, Navigate } from "react-router-dom";
import type { ComponentType } from "react";
import { contentRoutes, redirects, externalRedirects, type ContentRoute } from "./lib/routes";
import ExternalRedirect from "@/components/ExternalRedirect";
import ScrollToTop from "@/components/ScrollToTop";
import Index from "./pages/Index";
import Terminbuchungen from "./pages/Terminbuchungen";
import Preise from "./pages/Preise";
import KontaktImpressum from "./pages/KontaktImpressum";
import ManagedNodes from "./pages/ManagedNodes";
import Fernwartung from "./pages/Fernwartung";
import Leitbild from "./pages/Leitbild";
import GeschaeftsmodellUndDifferenzierung from "./pages/GeschaeftsmodellUndDifferenzierung";
import ManagedItServicesMspMonitoring from "./pages/ManagedItServicesMspMonitoring";
import Signal from "./pages/Signal";
import Tresor from "./pages/Tresor";
import NotepadPlusPlus from "./pages/NotepadPlusPlus";
import KundenZahnarztAmMarkt from "./pages/KundenZahnarztAmMarkt";
import NotFound from "./pages/NotFound";
import Datensicherung from "./pages/Datensicherung";
import Upload from "./pages/Upload";

const queryClient = new QueryClient();

const pages: Record<ContentRoute, ComponentType> = {
  "/": Index,
  "/terminbuchungen": Terminbuchungen,
  "/preise": Preise,
  "/datensicherung": Datensicherung,
  "/kontakt-und-impressum": KontaktImpressum,
  "/managed-nodes": ManagedNodes,
  "/fernwartung": Fernwartung,
  "/leitbild": Leitbild,
  "/geschaeftsmodell-und-differenzierung": GeschaeftsmodellUndDifferenzierung,
  "/managed-it-services-msp-monitoring": ManagedItServicesMspMonitoring,
  "/signal": Signal,
  "/tresor": Tresor,
  "/notepadplusplus": NotepadPlusPlus,
  "/kunden/zahnarzt-am-markt": KundenZahnarztAmMarkt,
  "/upload": Upload,
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
        <ScrollToTop />
        <Routes>
          {contentRoutes.map(path => {
            const Page = pages[path];
            return <Route key={path} path={path} element={<Page />} />;
          })}
          {Object.entries(redirects).map(([path, target]) => (
            <Route key={path} path={path} element={<Navigate to={target} replace />} />
          ))}
          {Object.entries(externalRedirects).map(([path, url]) => (
            <Route key={path} path={path} element={<ExternalRedirect url={url} />} />
          ))}
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
