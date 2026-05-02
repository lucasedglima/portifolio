import { motion } from "framer-motion";
import { Github } from "lucide-react";
import { fadeUp, scaleIn, stagger, viewport } from "@/lib/animations";

// TODO: substitua pelo seu usuário real do GitHub
// Exemplo: const GITHUB_USERNAME = "lucaseduardolima";
const GITHUB_USERNAME = "YOUR_GITHUB_USERNAME";

const BASE_PARAMS =
  "theme=dark&hide_border=true&bg_color=0d1117&title_color=38bdf8&icon_color=38bdf8&text_color=94a3b8";

export default function GitHubStats() {
  // Não renderiza a seção enquanto o username não for configurado
  if (GITHUB_USERNAME === "YOUR_GITHUB_USERNAME") {
    return (
      <section id="github" className="py-16 scroll-mt-20 bg-card/30 border-y border-border/50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <Github className="w-10 h-10 text-primary mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-foreground mb-3">Atividade no GitHub</h2>
            <p className="text-muted-foreground text-lg">
              Em breve, minhas estatísticas e principais atividades no GitHub
              estarão disponíveis aqui.
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="github" className="py-16 scroll-mt-20 bg-card/30 border-y border-border/50">
      <div className="container mx-auto px-6">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="max-w-4xl mx-auto"
        >
          {/* Heading */}
          <motion.div variants={fadeUp} className="mb-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-3 flex items-center gap-3 text-foreground">
              <Github className="text-primary w-8 h-8" />
              Atividade no GitHub
            </h2>
            <p className="text-muted-foreground text-lg">
              Um retrato do meu histórico de contribuições e linguagens mais utilizadas.
            </p>
          </motion.div>

          {/* Stats grid */}
          <motion.div variants={stagger} className="grid md:grid-cols-2 gap-6">
            <motion.div
              variants={scaleIn}
              className="bg-card border border-border rounded-xl overflow-hidden"
            >
              <img
                src={`https://github-readme-stats.vercel.app/api?username=${GITHUB_USERNAME}&show_icons=true&count_private=true&${BASE_PARAMS}`}
                alt="GitHub Stats"
                className="w-full"
                loading="lazy"
              />
            </motion.div>

            <motion.div
              variants={scaleIn}
              className="bg-card border border-border rounded-xl overflow-hidden"
            >
              <img
                src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${GITHUB_USERNAME}&layout=compact&langs_count=8&${BASE_PARAMS}`}
                alt="Top Languages"
                className="w-full"
                loading="lazy"
              />
            </motion.div>
          </motion.div>

          {/* Streak */}
          <motion.div
            variants={fadeUp}
            className="mt-6 bg-card border border-border rounded-xl overflow-hidden flex justify-center"
          >
            <img
              src={`https://streak-stats.demolab.com?user=${GITHUB_USERNAME}&theme=dark&hide_border=true&background=0d1117&ring=38bdf8&fire=38bdf8&currStreakLabel=38bdf8&sideLabels=94a3b8&dates=94a3b8&currStreakNum=e2e8f0&sideNums=e2e8f0`}
              alt="GitHub Streak"
              className="max-w-full"
              loading="lazy"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
