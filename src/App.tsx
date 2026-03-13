import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import NotFound from "./pages/NotFound.tsx";
import FakeDetection from "./pages/FakeDetection.tsx";
import PolicyAnalyser from "./pages/PolicyAnalyser.tsx";
import PostPurchaseGuard from "./pages/PostPurchaseGuard.tsx";
import ScamAlerts from "./pages/ScamAlerts.tsx";
import PriceHistory from "./pages/PriceHistory.tsx";
import RightsNotifications from "./pages/RightsNotifications.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/fake-detection" element={<FakeDetection />} />
          <Route path="/policy-analyser" element={<PolicyAnalyser />} />
          <Route path="/post-purchase" element={<PostPurchaseGuard />} />
          <Route path="/scam-alerts" element={<ScamAlerts />} />
          <Route path="/price-history" element={<PriceHistory />} />
          <Route path="/rights" element={<RightsNotifications />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
