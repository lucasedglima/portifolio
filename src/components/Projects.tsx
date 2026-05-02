import { motion } from "framer-motion";
import { Github, ExternalLink, FolderGit2 } from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { fadeUp, scaleIn, stagger, viewport } from "@/lib/animations";

// TODO: substitua pelos seus projetos reais do GitHub
const projects = [
  {
    title: "Sistema de Gestão Escolar",
    description:
      "Plataforma completa para gerenciamento de alunos, professores e notas. Interface intuitiva e backend robusto.",
    technologies: ["React", "Node.js", "TypeScript", "PostgreSQL"],
    githubUrl: "https://github.com/",
    demoUrl: "https://example.com",
  },
  {
    title: "Analisador de Algoritmos",
    description:
      "Ferramenta visual para análise de complexidade de algoritmos clássicos de ordenação e busca.",
    technologies: ["Python", "C++", "Matplotlib"],
    githubUrl: "https://github.com/",
    demoUrl: "#",
  },
  {
    title: "E-commerce API",
    description:
      "API RESTful escalável para e-commerce com autenticação, carrinho de compras e processamento de pagamentos.",
    technologies: ["Express", "MongoDB", "Redis", "Docker"],
    githubUrl: "https://github.com/",
    demoUrl: "https://example.com",
  },
];

export default function Projects() {
  return (
    <section id="projetos" className="py-16 scroll-mt-20">
      <div className="container mx-auto px-6">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          {/* Heading */}
          <motion.h2
            variants={fadeUp}
            className="text-3xl md:text-4xl font-bold mb-12 flex items-center gap-3 text-foreground"
          >
            <FolderGit2 className="text-primary w-8 h-8" />
            Projetos em Destaque
          </motion.h2>

          {/* Cards grid */}
          <motion.div
            variants={stagger}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {projects.map((project, index) => (
              <motion.div key={index} variants={scaleIn}>
                <Card className="h-full flex flex-col bg-card border-border hover:border-primary/50 transition-colors duration-300">
                  <CardHeader>
                    <CardTitle className="text-xl">{project.title}</CardTitle>
                    <CardDescription className="text-muted-foreground mt-2">
                      {project.description}
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="flex-1">
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <Badge
                          key={tech}
                          variant="secondary"
                          className="bg-secondary text-secondary-foreground"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>

                  <CardFooter className="gap-4">
                    <Button
                      asChild
                      variant="outline"
                      size="sm"
                      className="flex-1"
                      data-testid={`button-github-${index}`}
                    >
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4 mr-2" /> GitHub
                      </a>
                    </Button>
                    {project.demoUrl !== "#" && (
                      <Button
                        asChild
                        size="sm"
                        className="flex-1"
                        data-testid={`button-demo-${index}`}
                      >
                        <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-4 h-4 mr-2" /> Demo
                        </a>
                      </Button>
                    )}
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
