import { motion } from "framer-motion";
import { Terminal, Cpu, Database } from "lucide-react";
import { fadeUp, fadeLeft, stagger, viewport } from "@/lib/animations";

export default function About() {
  return (
    <section id="sobre" className="py-16 scroll-mt-20 bg-card/30 border-y border-border/50">
      <div className="container mx-auto px-6">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="max-w-4xl mx-auto"
        >
          {/* Heading */}
          <motion.h2
            variants={fadeUp}
            className="text-3xl md:text-4xl font-bold mb-12 flex items-center gap-3 text-foreground"
          >
            <Terminal className="text-primary w-8 h-8" />
            Sobre Mim
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-10">
            {/* Text content */}
            <motion.div
              variants={stagger}
              className="md:col-span-2 space-y-6 text-lg text-muted-foreground leading-relaxed"
            >
              {/*
               * TODO: reescreva estes parágrafos com suas próprias palavras se quiser
               * personalizar ainda mais. O tom aqui é direto e humano, sem exageros.
               */}
              <motion.p variants={fadeUp}>
                Cresci curioso sobre como as coisas funcionam por dentro — e a computação foi
                a área que mais deu espaço pra isso. Hoje curso Engenharia de Computação na
                UNIFEI e, ao longo do caminho, fui percebendo que o que mais me interessa
                está na interseção entre dados, inteligência artificial e desenvolvimento.
              </motion.p>

              <motion.p variants={fadeUp}>
                Minha maior afinidade está com Ciência de Dados e Inteligência Artificial —
                extrair valor de dados, construir modelos e criar sistemas que aprendem é o
                que mais me motiva. Também trabalho com desenvolvimento e enxergo as duas
                áreas como naturalmente complementares: bons modelos precisam de bons
                sistemas, e bons sistemas podem ser muito mais inteligentes com IA.
              </motion.p>

              <motion.p variants={fadeUp}>
                Durante a graduação, fiz parte da Asimov Jr., empresa júnior de tecnologia
                da UNIFEI, onde atuei como Diretor Vice-Presidente na área de Ciência de
                Dados. Foi uma experiência que me ensinou a equilibrar o lado técnico com
                organização, responsabilidade e trabalho em equipe de verdade.
              </motion.p>

              <motion.p variants={fadeUp}>
                Gosto de resolver problemas que misturam raciocínio lógico com criatividade.
                Estou sempre aprendendo — não por obrigação, mas porque essa área muda rápido
                e isso é exatamente o que a torna interessante.
              </motion.p>
            </motion.div>

            {/* Info cards */}
            <motion.div variants={stagger} className="space-y-6">
              <motion.div
                variants={fadeLeft}
                className="p-6 rounded-xl bg-card border border-border hover:border-primary/40 transition-colors"
              >
                <Cpu className="w-8 h-8 text-primary mb-4" />
                <h3 className="font-semibold text-foreground mb-2">Engenharia de Computação</h3>
                <p className="text-sm text-muted-foreground">
                  UNIFEI — Universidade Federal de Itajubá
                </p>
              </motion.div>

              <motion.div
                variants={fadeLeft}
                className="p-6 rounded-xl bg-card border border-border hover:border-primary/40 transition-colors"
              >
                <Database className="w-8 h-8 text-primary mb-4" />
                <h3 className="font-semibold text-foreground mb-2">Asimov Jr.</h3>
                <p className="text-sm text-muted-foreground">
                  Diretor Vice-Presidente · Ciência de Dados
                </p>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
