import { motion } from "framer-motion";
import { ArrowDownRight, Code2, Cpu, Github, LineChart } from "lucide-react";
import { Button } from "@/components/ui/button";

const pillars = [
  { icon: LineChart, label: "Dados & IA", value: "análise e modelos" },
  { icon: Code2, label: "Desenvolvimento", value: "software e aplicações" },
  { icon: Cpu, label: "Engenharia", value: "fundamentos e resolução de problemas" },
];

export default function Hero() {
  return (
    <section id="inicio" className="data-grid relative overflow-hidden pt-32 pb-20 md:pt-44 md:pb-28">
      <div className="orb orb-one" /><div className="orb orb-two" />
      <div className="site-container relative grid items-center gap-16 lg:grid-cols-[1.15fr_.85fr]">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .65 }}>
          <p className="hero-name">Lucas Eduardo Gomes de Lima</p>
          <h1 className="mt-7 max-w-4xl text-5xl font-semibold leading-[.98] tracking-[-.055em] sm:text-6xl lg:text-7xl">
            Engenharia guiada por <span className="text-primary">dados.</span>
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl">
             Estudante de Engenharia de Computação na UNIFEI, com interesse em Dados, Inteligência Artificial e Desenvolvimento de Software. Desenvolvo projeto que conectam análise, tecnologia e resolução de problemas.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Button asChild size="lg" className="gap-2"><a href="#projetos">Explorar projetos <ArrowDownRight className="size-4" /></a></Button>
            <Button asChild variant="outline" size="lg" className="gap-2"><a href="https://github.com/lucasedglima" target="_blank" rel="noreferrer"><Github className="size-4" /> GitHub</a></Button>
          </div>
        </motion.div>
        <motion.div initial={{ opacity: 0, scale: .96 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: .15, duration: .7 }} className="signal-panel">
          <div className="signal-orbit"><span /><span /><span /></div>
          <p className="font-mono text-xs uppercase tracking-[.22em] text-primary">Áreas de atuação</p>
          <div className="mt-8 space-y-3">
            {pillars.map(({ icon: Icon, label, value }, index) => (
              <div className="metric-row" key={label}><span className="metric-index">0{index + 1}</span><Icon className="size-5 text-primary" /><div><strong>{label}</strong><small>{value}</small></div></div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
