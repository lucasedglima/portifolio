import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";

import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Photos from "./components/Photos";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Interests from "./components/Interests";
import Resume from "./components/Resume";
import GitHubStats from "./components/GitHubStats";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <div className="min-h-screen bg-background text-foreground selection:bg-primary/30">
          <Header />
          <main>
            <Hero />
            <About />
            <Photos />
            <Projects />
            <Skills />
            <Interests />
            <Resume />
            <GitHubStats />
            <Contact />
          </main>
          <Footer />
        </div>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
