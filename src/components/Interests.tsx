import { motion } from "framer-motion";
import { Globe, BarChart2, Bot, Cpu, Layers, BrainCircuit } from "lucide-react";
import { fadeUp, scaleIn, stagger, viewport } from "@/lib/animations";

// TODO: adicione ou remova cards de interesse conforme necessário
const interests = [
  {
    icon: <BarChart2 className="w-7 h-7 text-primary" />,
    title: "Ciência de Dados",
    description:
      "Extração de valor a partir de dados, análise exploratória e construção de pipelines de dados eficientes.",
  },
  {
    icon: <Bot className="w-7 h-7 text-primary" />,
    title: "Inteligência Artificial",
    description:
      "Desenvolvimento e aplicação de sistemas inteligentes capazes de aprender, raciocinar e tomar decisões.",
  },
  {
    icon: <BrainCircuit className="w-7 h-7 text-primary" />,
    title: "Machine Learning",
    description:
      "Construção de modelos preditivos e algoritmos que aprendem com dados para resolver problemas reais.",
  },
  {
    icon: <Layers className="w-7 h-7 text-primary" />,
    title: "Deep Learning",
    description:
      "Redes neurais profundas aplicadas a visão computacional, linguagem natural e outros domínios.",
  },
  {
    icon: <Globe className="w-7 h-7 text-primary" />,
    title: "Desenvolvimento Web",
    description:
      "Criação de interfaces modernas e sistemas web escaláveis, com foco em boas práticas e experiência do usuário.",
  },
  {
    icon: <Cpu className="w-7 h-7 text-primary" />,
    title: "Sistemas Computacionais",
    description:
      "Algoritmos, estruturas de dados, arquitetura de computadores e desenvolvimento de software de baixo nível.",
  },
];

export default function Interests() {
  return (
    <section id="interesses" className="py-16 scroll-mt-20">
      <div className="container mx-auto px-6">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="max-w-4xl mx-auto"
        >
          {/* Heading */}
          <motion.div variants={fadeUp} className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-3 text-foreground">
              Áreas de Interesse
            </h2>
            <p className="text-muted-foreground text-lg">
              Temas que me motivam a aprender e explorar continuamente.
            </p>
          </motion.div>

          {/* Cards */}
          <motion.div
            variants={stagger}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {interests.map((item) => (
              <motion.div
                key={item.title}
                variants={scaleIn}
                className="bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-colors duration-300 group"
              >
                <div className="mb-4 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  {item.icon}
                </div>
                <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
