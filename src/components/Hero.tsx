import { type Variants } from "framer-motion";
import { motion } from "framer-motion";
import { ArrowRight, FileText, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

// Framer Motion 12 requires a bezier tuple for `ease`, not a string name.
const EASE_OUT = [0.25, 0.46, 0.45, 0.94] as const;

// Hero-specific variants — animate on page load, not on scroll
const heroItem: Variants = {
  hidden: { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE_OUT } },
};

const heroContainer: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.08 } },
};

export default function Hero() {
  const handleProjectsClick = () => {
    document.querySelector("#projetos")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    /*
     * Layout: section starts immediately after fixed header (mt-16).
     * min-h fills the rest of the viewport; flex centers content vertically.
     * py-10 gives breathing room without creating empty-looking space.
     */
    <section
      id="inicio"
      className="mt-16 min-h-[calc(100vh-4rem)] flex items-center relative overflow-hidden py-10"
    >
      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[128px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/30 rounded-full blur-[128px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          variants={heroContainer}
          initial="hidden"
          animate="visible"
          className="max-w-3xl"
        >
          {/* Available badge */}
          <motion.div
            variants={heroItem}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/50 border border-border text-xs font-medium text-primary mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            Disponível para oportunidades
          </motion.div>

          {/* Name */}
          <motion.h1
            variants={heroItem}
            className="text-5xl md:text-7xl font-bold tracking-tight text-foreground mb-6"
          >
            Lucas Eduardo <br className="hidden md:block" />
            <span className="text-muted-foreground">Gomes de Lima</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.h2
            variants={heroItem}
            className="text-xl md:text-2xl font-medium text-primary mb-4"
          >
            Estudante de Engenharia de Computação
          </motion.h2>

          {/* TODO: edite esta descrição com sua apresentação pessoal */}
          <motion.p
            variants={heroItem}
            className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl leading-relaxed"
          >
            Focado em Dados e IA, com passagem pela Asimov Jr. e interesse em
            construir soluções inteligentes que fazem sentido no mundo real.
          </motion.p>

          {/* CTAs */}
          <motion.div variants={heroItem} className="flex flex-wrap gap-4">
            <Button
              onClick={handleProjectsClick}
              size="lg"
              className="gap-2"
              data-testid="button-hero-projects"
            >
              Ver projetos <ArrowRight className="w-4 h-4" />
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="gap-2"
              data-testid="button-hero-resume"
            >
              {/* TODO: coloque seu curriculo.pdf na pasta public/ */}
              <a href="/curriculo.pdf" target="_blank" rel="noopener noreferrer">
                <FileText className="w-4 h-4" /> Baixar currículo
              </a>
            </Button>
            <Button
              asChild
              variant="secondary"
              size="lg"
              className="gap-2"
              data-testid="button-hero-github"
            >
              {/* TODO: atualize com seu link real do GitHub */}
              <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
                <Github className="w-4 h-4" /> GitHub
              </a>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
