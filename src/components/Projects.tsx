import { motion } from "framer-motion";
import { ArrowUpRight, Github, Layers3 } from "lucide-react";
import { fadeUp, stagger, viewport } from "@/lib/animations";

const projects = [
  { number: "01", title: "Da Roça", description: "Aplicação full stack para um marketplace local de produtos agrícolas, conectando interface, API e persistência de dados.", tags: ["React", "TypeScript", "Fastify", "PostgreSQL", "Prisma", "JWT", "Docker"], url: "https://github.com/lucasedglima/da-roca" },
  { number: "02", title: "Netflix Machine Learning", description: "Coleção de estudos aplicados sobre o dataset Netflix Titles, reunindo análise de dados, agrupamento, classificação e redução de dimensionalidade.", tags: ["Python", "Scikit-learn", "Jupyter", "K-Means", "KNN", "PCA", "Matriz de confusão"], url: "https://github.com/lucasedglima/netflix-machine-learning" },
  { number: "03", title: "Custom Language Compiler", description: "Projeto acadêmico de compiladores com implementação das etapas de análise léxica e sintática de uma linguagem personalizada.", tags: ["C", "Flex", "Bison", "Compiladores", "Análise léxica", "Análise sintática"], url: "https://github.com/lucasedglima/custom-language-compiler" },
];

export default function Projects() {
  return <section id="projetos" className="section"><motion.div className="site-container" variants={stagger} initial="hidden" whileInView="visible" viewport={viewport}>
    <motion.div variants={fadeUp} className="flex flex-col justify-between gap-6 md:flex-row md:items-end"><div><p className="section-kicker">02 / Projetos</p><h2 className="section-title mt-5">Projetos práticos.</h2><p className="mt-5 max-w-2xl text-lg text-muted-foreground">Aplicações e estudos desenvolvidos para transformar conhecimento técnico em experiência.</p></div><a className="inline-link" href="https://github.com/lucasedglima?tab=repositories" target="_blank" rel="noreferrer">Todos os repositórios <ArrowUpRight className="size-4" /></a></motion.div>
    <motion.div variants={stagger} className="mt-12 grid gap-5 lg:grid-cols-3">{projects.map((project) => <motion.article variants={fadeUp} key={project.title} className="project-card group"><div className="flex items-center justify-between"><span className="font-mono text-xs text-muted-foreground">PROJETO / {project.number}</span><Layers3 className="size-5 text-primary" /></div><h3>{project.title}</h3><p>{project.description}</p><div className="mt-auto flex flex-wrap gap-2 pt-7">{project.tags.map(tag => <span className="tag" key={tag}>{tag}</span>)}</div><a href={project.url} target="_blank" rel="noreferrer" className="project-link"><Github className="size-4" /> Ver código <ArrowUpRight className="ml-auto size-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" /></a></motion.article>)}</motion.div>
  </motion.div></section>;
}
