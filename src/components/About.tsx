import { motion } from "framer-motion";
import { BarChart3, BrainCircuit, Code2, Gauge } from "lucide-react";
import { fadeUp, stagger, viewport } from "@/lib/animations";

const areas = [
  { icon: Gauge, title: "Gestão orientada a dados", text: "Indicadores e informações organizadas para apoiar decisões." },
  { icon: BarChart3, title: "Análise de dados", text: "Python, SQL e Power BI aplicados a problemas práticos." },
  { icon: BrainCircuit, title: "Data Science & ML", text: "Exploração de dados e construção de modelos." },
  { icon: Code2, title: "Engenharia de Software", text: "Base de programação e desenvolvimento de aplicações." },
];

export default function About() {
  return (
    <section id="sobre" className="section border-y border-border/70 bg-card/35">
      <motion.div className="site-container" variants={stagger} initial="hidden" whileInView="visible" viewport={viewport}>
        <motion.p variants={fadeUp} className="section-kicker">01 / Sobre</motion.p>
        <div className="mt-5 grid items-start gap-12 lg:grid-cols-[.82fr_1.18fr]">
          <motion.div variants={fadeUp}>
           <h2 className="section-title">
            Liderança, tecnologia e decisões orientadas por dados.
            </h2>

          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            Ingressei na Asimov Jr. em agosto de 2024 e atuei como vice-presidente
            durante o ano de 2025. Nesse período, acompanhei OKRs, organizei reuniões, estudei métricas e planejamento estratégico, liderei
            pessoas e participei do planejamento de metas e iniciativas da empresa.
          </p>

          <p className="mt-4 leading-relaxed text-muted-foreground">
             Paralelamente participei do desenvolvimento de projetos e da estruturação da área
             de Ciência de Dados. Essas experiências fortaleceram meu interesse por
             análise de dados, inteligência artificial, desenvolvimento de software e
             aplicação da tecnologia na resolução de problemas reais.
        </p>

        <div className="impact-note">
        <span>Resultado da gestão · 2025</span>
        <strong>Cluster 5 alcançado pela Asimov Jr.</strong>
        <p>
             Classificação máxima de maturidade para Empresas Juniores, atingida por uma parcela pequena das EJs no Brasil, com 100% das metas do ciclo cumpridas.
       </p>
      </div>
      </motion.div>
          <motion.div variants={stagger} className="grid gap-4 sm:grid-cols-2">
            {areas.map(({ icon: Icon, title, text }) => <motion.article variants={fadeUp} key={title} className="feature-card"><Icon className="size-6 text-primary" /><h3>{title}</h3><p>{text}</p></motion.article>)}
          </motion.div>
        </div>
        
      </motion.div>
    </section>
    );
}
