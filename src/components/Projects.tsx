import { motion } from "framer-motion";
import { ArrowUpRight, Github, Layers3 } from "lucide-react";
import { fadeUp, stagger, viewport } from "@/lib/animations";

const projects = [
  { number: "01", title: "Classificação com Regressão Logística", description: "Estudo em notebook sobre classificação, construído para explorar o fluxo de preparação, treinamento e avaliação de um modelo de regressão logística.", tags: ["Python", "Jupyter", "Machine Learning", "Classificação"], url: "https://github.com/lucasedglima/trabalho_ia" },
  { number: "02", title: "Laboratório de Análise de Dados", description: "Coleção de estudos aplicados com K-means, matriz de confusão, redução de dimensionalidade e exploração do conjunto de dados Netflix Titles.", tags: ["K-means", "EDA", "Métricas", "Redução dimensional"], url: "https://github.com/lucasedglima/topicos" },
  { number: "03", title: "Compilador", description: "Projeto em C que amplia o portfólio para além de dados e evidencia fundamentos de programação, linguagens e engenharia de software.", tags: ["C", "Compiladores", "Algoritmos", "Engenharia"], url: "https://github.com/lucasedglima/compilador" },
];

export default function Projects() {
  return <section id="projetos" className="section"><motion.div className="site-container" variants={stagger} initial="hidden" whileInView="visible" viewport={viewport}>
    <motion.div variants={fadeUp} className="flex flex-col justify-between gap-6 md:flex-row md:items-end"><div><p className="section-kicker">02 / Projetos</p><h2 className="section-title mt-5">Projetos práticos.</h2><p className="mt-5 max-w-2xl text-lg text-muted-foreground">Aplicações e estudos desenvolvidos para transformar conhecimento técnico em experiência.</p></div><a className="inline-link" href="https://github.com/lucasedglima?tab=repositories" target="_blank" rel="noreferrer">Todos os repositórios <ArrowUpRight className="size-4" /></a></motion.div>
    <motion.div variants={stagger} className="mt-12 grid gap-5 lg:grid-cols-3">{projects.map((project) => <motion.article variants={fadeUp} key={project.title} className="project-card group"><div className="flex items-center justify-between"><span className="font-mono text-xs text-muted-foreground">PROJETO / {project.number}</span><Layers3 className="size-5 text-primary" /></div><h3>{project.title}</h3><p>{project.description}</p><div className="mt-auto flex flex-wrap gap-2 pt-7">{project.tags.map(tag => <span className="tag" key={tag}>{tag}</span>)}</div><a href={project.url} target="_blank" rel="noreferrer" className="project-link"><Github className="size-4" /> Ver código <ArrowUpRight className="ml-auto size-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" /></a></motion.article>)}</motion.div>
  </motion.div></section>;
}
