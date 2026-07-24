import { TooltipProvider } from "@/components/ui/tooltip";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Photos from "./components/Photos";
import Resume from "./components/Resume";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <TooltipProvider>
      <div className="min-h-screen bg-background text-foreground selection:bg-primary/25">
        <Header />
        <main>
          <Hero />
          <About />
          <Projects />
          <Skills />
          <Photos />
          <Resume />
          <Contact />
        </main>
        <Footer />
      </div>
    </TooltipProvider>
  );
}
