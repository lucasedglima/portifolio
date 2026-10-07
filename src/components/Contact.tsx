import {
  ArrowUpRight,
  Download,
  Github,
  Linkedin,
  Mail,
} from "lucide-react";

export default function Contact() {
  return (
    <section id="contato" className="section">
      <div className="site-container">
        <div className="contact-panel data-grid">
          <p className="section-kicker">06 / Contato</p>

          <h2>Entre em contato.</h2>

          <p>
            Para oportunidades, projetos ou troca de experiências, você pode
            me encontrar por e-mail, no LinkedIn e no GitHub.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              className="contact-action"
              href="mailto:lucasedglima@gmail.com"
            >
              <Mail />
              E-mail
              <ArrowUpRight />
            </a>

            <a
              className="contact-action secondary"
              href="https://www.linkedin.com/in/lucas-eduardo-21998532a/"
              target="_blank"
              rel="noreferrer"
            >
              <Linkedin />
              LinkedIn
              <ArrowUpRight />
            </a>

            <a
              className="contact-action secondary"
              href="https://github.com/lucasedglima"
              target="_blank"
              rel="noreferrer"
            >
              <Github />
              GitHub
              <ArrowUpRight />
            </a>

            <a
              className="contact-action secondary"
              href="/lucas-eduardo-curriculo.pdf"
              download
            >
              <Download />
              Currículo
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}