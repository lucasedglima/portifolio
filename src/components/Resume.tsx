import { motion } from "framer-motion";
import { BriefcaseBusiness, GraduationCap } from "lucide-react";
import { fadeUp, stagger, viewport } from "@/lib/animations";

export default function Resume() {
  return <section id="curriculo" className="section border-y border-border/70 bg-card/35"><motion.div className="site-container" variants={stagger} initial="hidden" whileInView="visible" viewport={viewport}>
    <motion.p variants={fadeUp} className="section-kicker">05 / Trajetória</motion.p><motion.h2 variants={fadeUp} className="section-title mt-5">Formação técnica, experiência de liderança.</motion.h2>
    <div className="timeline mt-12">
      <motion.article variants={fadeUp}><div className="timeline-icon"><BriefcaseBusiness /></div><p className="timeline-label">Experiência</p><h3>Diretor de Vice-Presidência</h3><strong>Asimov Jr. · Empresa Júnior de Tecnologia da UNIFEI</strong><ul><li>Gestão de 2025 com alcance do Cluster 5 e cumprimento de todas as metas do ciclo.</li><li>Planejamento e participação em reuniões gerais e de área.</li><li>Definição e organização de OKRs, metas de time e indicadores.</li><li>Expansão das áreas de projetos e dos eventos internos e externos.</li><li>Liderança de pessoas e atenção à qualidade da relação com clientes.</li><li>Organização e visualização de dados com Power BI.</li><li>Pesquisa de demandas, cursos, projetos e planejamento para a área de Ciência de Dados.</li></ul></motion.article>
      <motion.article variants={fadeUp}><div className="timeline-icon"><GraduationCap /></div><p className="timeline-label">Formação</p><h3>Engenharia de Computação</h3><strong>UNIFEI · Universidade Federal de Itajubá</strong><p>Graduação em andamento, integrando software, hardware, matemática, algoritmos e sistemas computacionais.</p></motion.article>
    </div>
  </motion.div></section>;
}
