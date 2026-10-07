import { motion } from "framer-motion";
import { BriefcaseBusiness, GraduationCap } from "lucide-react";
import { fadeUp, stagger, viewport } from "@/lib/animations";

export default function Resume() {
  return (
    <section
      id="curriculo"
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
          05 / Trajetória
        </motion.p>

        <motion.h2 variants={fadeUp} className="section-title mt-5">
          Experiência e formação.
        </motion.h2>

        <div className="timeline mt-12">
          <motion.article variants={fadeUp}>
            <div className="timeline-icon">
              <BriefcaseBusiness />
            </div>

            <p className="timeline-label">Experiência</p>
            <h3>Vice-presidente</h3>

            <strong>
              Asimov Jr. · Empresa Júnior de Tecnologia da UNIFEI
            </strong>

            <p className="mt-2 text-sm font-medium text-primary">
              Ingresso em ago. 2024 · Vice-presidência em 2025
            </p>

            <ul>
              <li>
                Acompanhamento das áreas de RH, Estratégia e Qualidade por meio
                de OKRs e indicadores.
              </li>

              <li>
                Liderança de pessoas, organização de reuniões e participação
                no planejamento de metas e iniciativas.
              </li>

              <li>
                Organização e visualização de dados em dashboards desenvolvidos
                com Power BI.
              </li>

              <li>
                Participação em projetos e na estruturação da área de Ciência
                de Dados.
              </li>
            </ul>
          </motion.article>

          <motion.article variants={fadeUp}>
            <div className="timeline-icon">
              <GraduationCap />
            </div>

            <p className="timeline-label">Formação</p>
            <h3>Engenharia de Computação</h3>

            <strong>
              UNIFEI · Universidade Federal de Itajubá
            </strong>

            <p className="mt-2 text-sm font-medium text-primary">
              Conclusão prevista · dezembro de 2027
            </p>

            <p>
              Graduação em andamento, integrando desenvolvimento de software,
              hardware, matemática, algoritmos e sistemas computacionais.
            </p>
          </motion.article>
        </div>
      </motion.div>
    </section>
  );
}