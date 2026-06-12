import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch, useLocation } from "wouter";
import { useEffect } from "react";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import { I18nProvider } from "./contexts/I18nContext";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Vision from "./pages/Vision";
import Technology from "./pages/Technology";
import Product from "./pages/Product";
import Roadmap from "./pages/Roadmap";
import Contact from "./pages/Contact";
import Dashboard from "./pages/Dashboard";
import Admin from "./pages/Admin";
import AIAgents from "./pages/AIAgents";
import DataAssets from "./pages/DataAssets";
import Compliance from "./pages/Compliance";
import API from "./pages/API";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import DataEthics from "./pages/DataEthics";
import Login from "./pages/Login";
import Team from "./pages/Team";

// Scroll to top on route change
function ScrollToTop() {
  const [location] = useLocation();
  
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [location]);
  
  return null;
}

function Router() {
  return (
    <Layout>
      <ScrollToTop />
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/vision" component={Vision} />
        <Route path="/technology" component={Technology} />
        <Route path="/product" component={Product} />
        <Route path="/roadmap" component={Roadmap} />
        <Route path="/contact" component={Contact} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/admin" component={Admin} />
        <Route path="/ai-agents" component={AIAgents} />
        <Route path="/data-assets" component={DataAssets} />
        <Route path="/compliance" component={Compliance} />
        <Route path="/api" component={API} />
        <Route path="/privacy" component={Privacy} />
        <Route path="/terms" component={Terms} />
        <Route path="/data-ethics" component={DataEthics} />
        <Route path="/login" component={Login} />
        <Route path="/team" component={Team} />
        <Route component={NotFound} />
      </Switch>
    </Layout>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <I18nProvider>
          <TooltipProvider>
            <Toaster />
            <Router />
          </TooltipProvider>
        </I18nProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
