import { motion } from "framer-motion";
import { BarChart3, BrainCircuit, Cog, Database, Languages, Network, Workflow } from "lucide-react";
import { fadeUp, stagger, viewport } from "@/lib/animations";

const groups = [
  {
    icon: BarChart3,
    title: "Dados & BI",
    text: "Análise, modelagem e comunicação de informações.",
    skills: [
      "SQL",
      "PostgreSQL",
      "Power BI",
      "DAX",
      "Power Query",
      "Modelagem de dados",
    ],
  },
  {
    icon: BrainCircuit,
    title: "Python & IA",
    text: "Tratamento de dados e construção de modelos.",
    skills: [
      "Python",
      "Pandas",
      "NumPy",
      "Scikit-learn",
      "Machine Learning",
      "Tratamento de dados",
    ],
  },
  {
    icon: Cog,
    title: "Desenvolvimento",
    text: "Construção de aplicações e trabalho com código versionado.",
    skills: [
      "TypeScript",
      "React",
      "Node.js",
      "APIs REST",
      "Git",
      "Docker",
    ],
  },
  {
    icon: Database,
    title: "Fundamentos de Engenharia",
    text: "Conhecimentos desenvolvidos na graduação e em projetos.",
    skills: [
      "C/C++",
      "Algoritmos",
      "Estruturas de dados",
      "Banco de dados",
      "Engenharia de Software",
      "GitHub",
    ],
  },
];

const practices = [
  { icon: Workflow, label: "Planejamento e OKRs" },
  { icon: Database, label: "Decisões orientadas por dados" },
  { icon: Network, label: "Liderança e colaboração" },
  { icon: Languages, label: "Inglês avançado" },
];

export default function Skills() {
  return (
    <section
      id="habilidades"
      className="section border-y border-border/70 bg-card/35"
    >
      <motion.div
        className="site-container"
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
      >
        <motion.p variants={fadeUp} className="section-kicker">
          03 / Competências
        </motion.p>

       <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-4"
>
          {groups.map(({ icon: Icon, title, text, skills }) => (
            <motion.article
              variants={fadeUp}
              className="skill-column"
              key={title}
            >
              <Icon className="size-7 text-primary" />

              <h3>{title}</h3>

              <p>{text}</p>

              <ul>
                {skills.map((skill) => (
                  <li key={skill}>{skill}</li>
                ))}
              </ul>
            </motion.article>
          ))}
        </motion.div>

        <motion.div variants={fadeUp} className="practice-bar">
          {practices.map(({ icon: Icon, label }) => (
            <div key={label}>
              <Icon className="size-5 text-primary" />
              <span>{label}</span>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
