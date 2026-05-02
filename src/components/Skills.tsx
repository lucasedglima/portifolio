import { motion } from "framer-motion";
import { Code2, Database, BrainCircuit, Wrench } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { fadeUp, scaleIn, stagger, staggerFast, viewport } from "@/lib/animations";

// TODO: adicione ou remova habilidades conforme necessário
const skillGroups = [
  {
    label: "Data Science & IA",
    icon: <BrainCircuit className="w-5 h-5 text-primary" />,
    skills: ["Python", "Pandas", "NumPy", "Machine Learning", "Deep Learning", "Data Analysis"],
  },
  {
    label: "Frontend",
    icon: <Code2 className="w-5 h-5 text-primary" />,
    skills: ["HTML", "CSS", "JavaScript", "TypeScript", "React"],
  },
  {
    label: "Backend",
    icon: <Wrench className="w-5 h-5 text-primary" />,
    skills: ["Node.js", "APIs REST"],
  },
  {
    label: "Outros",
    icon: <Database className="w-5 h-5 text-primary" />,
    skills: ["Git", "GitHub", "C/C++", "Banco de Dados", "Lógica de Programação", "Estruturas de Dados"],
  },
];

// TODO: adicione ou remova habilidades comportamentais conforme necessário
const softSkills = [
  "Organização",
  "Trabalho em equipe",
  "Resolução de problemas",
  "Aprendizado contínuo",
  "Liderança",
  "Comunicação",
];

export default function Skills() {
  return (
    <section id="habilidades" className="py-16 scroll-mt-20 bg-card/30 border-y border-border/50">
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
            className="text-3xl md:text-4xl font-bold mb-12 text-foreground"
          >
            Habilidades
          </motion.h2>

          {/* Technical skills grouped */}
          <motion.div
            variants={stagger}
            className="grid sm:grid-cols-2 gap-6 mb-12"
          >
            {skillGroups.map((group) => (
              <motion.div
                key={group.label}
                variants={scaleIn}
                className="bg-card border border-border rounded-xl p-6 hover:border-primary/40 transition-colors"
              >
                <h3 className="flex items-center gap-2 font-semibold text-foreground mb-4">
                  {group.icon}
                  {group.label}
                </h3>
                <motion.div
                  variants={staggerFast}
                  className="flex flex-wrap gap-2"
                >
                  {group.skills.map((skill) => (
                    <motion.div key={skill} variants={scaleIn}>
                      <Badge
                        variant="outline"
                        className="px-3 py-1 text-sm border-primary/20 bg-background hover:bg-primary/10 transition-colors text-foreground cursor-default"
                      >
                        {skill}
                      </Badge>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
            ))}
          </motion.div>

          {/* Soft skills */}
          <motion.div variants={fadeUp}>
            <h3 className="text-xl font-bold mb-6 text-foreground">
              Habilidades Comportamentais
            </h3>
            <motion.div variants={staggerFast} className="flex flex-wrap gap-3">
              {softSkills.map((skill) => (
                <motion.div
                  key={skill}
                  variants={fadeUp}
                  className="flex items-center gap-2 px-4 py-2 rounded-lg bg-card border border-border hover:border-primary/40 transition-colors"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                  <span className="text-sm font-medium text-foreground">{skill}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
