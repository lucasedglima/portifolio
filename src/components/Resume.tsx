import { motion } from "framer-motion";
import { GraduationCap, Briefcase, Award, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { fadeUp, fadeLeft, stagger, viewport } from "@/lib/animations";

export default function Resume() {
  return (
    <section id="curriculo" className="py-16 scroll-mt-20">
      <div className="container mx-auto px-6">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="max-w-4xl mx-auto"
        >
          {/* Header row */}
          <motion.div
            variants={fadeUp}
            className="flex flex-col md:flex-row md:items-center justify-between mb-12 gap-6"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">Trajetória</h2>
            <Button asChild size="lg" className="gap-2" data-testid="button-download-resume">
              {/* TODO: coloque seu curriculo.pdf na pasta public/ */}
              <a href="/curriculo.pdf" target="_blank" rel="noopener noreferrer">
                <Download className="w-4 h-4" /> Baixar Currículo
              </a>
            </Button>
          </motion.div>

          <div className="space-y-12">
            {/* Formação Acadêmica */}
            <motion.div variants={fadeLeft} className="relative pl-8 border-l-2 border-border/50">
              <div className="absolute -left-[11px] top-0 w-5 h-5 rounded-full bg-background border-2 border-primary flex items-center justify-center">
                <div className="w-1.5 h-1.5 rounded-full bg-primary" />
              </div>
              <h3 className="text-xl font-bold flex items-center gap-2 mb-4 text-foreground">
                <GraduationCap className="w-5 h-5 text-primary" /> Formação Acadêmica
              </h3>
              <div className="bg-card p-6 rounded-xl border border-border">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
                  <div>
                    <h4 className="font-semibold text-lg text-foreground">Engenharia de Computação</h4>
                    <p className="text-primary font-medium text-sm mt-0.5">
                      UNIFEI — Universidade Federal de Itajubá
                    </p>
                  </div>
                  <span className="text-xs text-muted-foreground bg-primary/10 text-primary px-3 py-1 rounded-full self-start whitespace-nowrap">
                    Em andamento
                  </span>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Formação com foco em fundamentos sólidos de hardware e software, algoritmos,
                  estruturas de dados, sistemas digitais e desenvolvimento de soluções computacionais.
                </p>
              </div>
            </motion.div>

            {/* Experiência */}
            <motion.div variants={fadeLeft} className="relative pl-8 border-l-2 border-border/50">
              <div className="absolute -left-[11px] top-0 w-5 h-5 rounded-full bg-background border-2 border-primary flex items-center justify-center">
                <div className="w-1.5 h-1.5 rounded-full bg-primary" />
              </div>
              <h3 className="text-xl font-bold flex items-center gap-2 mb-4 text-foreground">
                <Briefcase className="w-5 h-5 text-primary" /> Experiência
              </h3>
              <div className="bg-card p-6 rounded-xl border border-border">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
                  <div>
                    <h4 className="font-semibold text-lg text-foreground">
                      Diretor Vice-Presidente · Ciência de Dados
                    </h4>
                    <p className="text-primary font-medium text-sm mt-0.5">
                      Asimov Jr. — Empresa Júnior de Tecnologia · UNIFEI
                    </p>
                  </div>
                </div>
                {/* TODO: atualize com as responsabilidades reais que você teve */}
                <ul className="mt-3 space-y-2">
                  {[
                    "Atuação em projetos tecnológicos e análise de dados",
                    "Participação em atividades relacionadas à Ciência de Dados",
                    "Apoio no desenvolvimento de soluções tecnológicas",
                    "Liderança e organização de projetos internos",
                    "Trabalho colaborativo em equipe multidisciplinar",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

            {/* Cursos & Certificados */}
            <motion.div variants={fadeLeft} className="relative pl-8 border-l-2 border-transparent">
              <div className="absolute -left-[11px] top-0 w-5 h-5 rounded-full bg-background border-2 border-primary flex items-center justify-center">
                <div className="w-1.5 h-1.5 rounded-full bg-primary" />
              </div>
              <h3 className="text-xl font-bold flex items-center gap-2 mb-4 text-foreground">
                <Award className="w-5 h-5 text-primary" /> Cursos & Certificados
              </h3>
              {/* TODO: substitua pelo seu conteúdo real de cursos e certificados */}
              <div className="bg-card p-6 rounded-xl border border-border border-dashed">
                <p className="text-muted-foreground text-center text-sm py-2">
                  Em breve — adicione seus cursos e certificados aqui.
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
