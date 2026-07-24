import { motion } from "framer-motion";
import { BarChart3, Compass, Target, Users } from "lucide-react";
import { fadeUp, stagger, viewport } from "@/lib/animations";

const leadership = [
  { icon: Compass, title: "Direção e planejamento", text: "Planejamento e participação em reuniões gerais e de área, com acompanhamento da estratégia da empresa." },
  { icon: Target, title: "OKRs e metas", text: "Estruturação de objetivos, metas de time e rotinas de acompanhamento para transformar intenção em execução." },
  { icon: Users, title: "Liderança e qualidade", text: "Apoio aos times, alinhamento de prioridades e atenção à qualidade das entregas e da relação com clientes." },
  { icon: BarChart3, title: "Cultura de dados", text: "Organização de informações para orientar decisões, medir avanços e dar clareza ao trabalho coletivo." },
];

export default function About() {
  return (
    <section id="sobre" className="section border-y border-border/70 bg-card/35">
      <motion.div className="site-container" variants={stagger} initial="hidden" whileInView="visible" viewport={viewport}>
        <motion.p variants={fadeUp} className="section-kicker">01 / Sobre</motion.p>
        <div className="mt-5 grid gap-12 lg:grid-cols-[.82fr_1.18fr]">
          <motion.div variants={fadeUp}>
            <h2 className="section-title">Organização virou interesse por dados.</h2>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">Na Asimov Jr., atuei como Diretor de Vice-Presidência. Ao planejar e participar de reuniões gerais e de área, acompanhar OKRs, liderar pessoas e trabalhar metas de qualidade, percebi o valor de organizar informações para tomar decisões melhores.</p>
            <p className="mt-4 leading-relaxed text-muted-foreground">Em paralelo, participei da área de Ciência de Dados: pesquisei demandas e cursos, contribuí com projetos e ajudei a planejar o desenvolvimento da área dentro da empresa júnior. Essa experiência conectou minha visão de gestão ao interesse técnico por dados, IA e engenharia.</p>
            <div className="impact-note"><span>Resultado da gestão · 2025</span><strong>Cluster 5 e 100% das metas do ciclo alcançadas</strong><p>Também expandimos as áreas de projetos e ampliamos a realização de eventos internos e externos.</p></div>
          </motion.div>
          <motion.div variants={stagger} className="grid gap-4 sm:grid-cols-2">
            {leadership.map(({ icon: Icon, title, text }) => <motion.article variants={fadeUp} key={title} className="feature-card"><Icon className="size-6 text-primary" /><h3>{title}</h3><p>{text}</p></motion.article>)}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
