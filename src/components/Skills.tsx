import { motion } from "framer-motion";
import { BrainCircuit, Cloud, Cog, Database, Languages, Network, Workflow } from "lucide-react";
import { fadeUp, stagger, viewport } from "@/lib/animations";

const groups = [
  { icon: BrainCircuit, title: "Dados & IA", text: "Análise, visualização e construção de modelos.", skills: ["Python", "SQL", "Power BI", "Pandas", "NumPy", "Machine Learning"] },
  { icon: Cloud, title: "Nuvem & Infraestrutura", text: "Base para sistemas confiáveis e escaláveis.", skills: ["Cloud Computing", "Docker", "APIs REST", "Banco de dados"] },
  { icon: Cog, title: "Desenvolvimento", text: "Construção de aplicações e trabalho com código versionado.", skills: ["TypeScript", "React", "Git", "GitHub"] },
  { icon: Database, title: "Fundamentos de Engenharia", text: "Conhecimentos desenvolvidos ao longo da graduação.", skills: ["C/C++", "Algoritmos", "Estruturas de dados", "Engenharia de Software"] },
];

const practices = [
  { icon: Workflow, label: "Planejamento e OKRs" },
  { icon: Database, label: "Decisões orientadas por dados" },
  { icon: Network, label: "Liderança e colaboração" },
  { icon: Languages, label: "Inglês avançado · curso em andamento" },
];

export default function Skills() {
  return <section id="habilidades" className="section border-y border-border/70 bg-card/35"><motion.div className="site-container" variants={stagger} initial="hidden" whileInView="visible" viewport={viewport}>
    <motion.p variants={fadeUp} className="section-kicker">03 / Competências</motion.p>
    <motion.h2 variants={fadeUp} className="section-title mt-5 max-w-3xl">Amplitude técnica com método para executar.</motion.h2>
    <motion.div variants={stagger} className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">{groups.map(({ icon: Icon, title, text, skills }) => <motion.article variants={fadeUp} className="skill-column" key={title}><Icon className="size-7 text-primary" /><h3>{title}</h3><p>{text}</p><ul>{skills.map(skill => <li key={skill}>{skill}</li>)}</ul></motion.article>)}</motion.div>
    <motion.div variants={fadeUp} className="practice-bar">{practices.map(({ icon: Icon, label }) => <div key={label}><Icon className="size-5 text-primary" /><span>{label}</span></div>)}</motion.div>
  </motion.div></section>;
}
