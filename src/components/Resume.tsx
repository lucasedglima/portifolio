import { motion } from "framer-motion";
import { BriefcaseBusiness, GraduationCap } from "lucide-react";
import { fadeUp, stagger, viewport } from "@/lib/animations";

export default function Resume() {
  return <section id="curriculo" className="section border-y border-border/70 bg-card/35"><motion.div className="site-container" variants={stagger} initial="hidden" whileInView="visible" viewport={viewport}>
    <motion.p variants={fadeUp} className="section-kicker">05 / Trajetória</motion.p><motion.h2 variants={fadeUp} className="section-title mt-5">Experiência e formação.</motion.h2>
    <div className="timeline mt-12">
      <motion.article variants={fadeUp}><div className="timeline-icon"><BriefcaseBusiness /></div><p className="timeline-label">Experiência</p><h3>Vice-Presidente</h3><strong>Asimov Jr. · Empresa Júnior de Tecnologia da UNIFEI</strong><ul><li>Acompanhamento das áreas de RH, Estratégia e Qualidade.</li><li>Trabalho com OKRs, indicadores e dados para apoiar decisões.</li><li>Organização e visualização de dados com Power BI.</li><li>Participação na área de Data Science, incluindo pesquisa de demandas, cursos, projetos e planejamento da área.</li></ul></motion.article>
      <motion.article variants={fadeUp}><div className="timeline-icon"><GraduationCap /></div><p className="timeline-label">Formação</p><h3>Engenharia de Computação</h3><strong>UNIFEI · Universidade Federal de Itajubá</strong><p>Graduação em andamento, integrando software, hardware, matemática, algoritmos e sistemas computacionais.</p></motion.article>
    </div>
  </motion.div></section>;
}
