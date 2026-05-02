import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Send, CheckCircle } from "lucide-react";
import { SiGithub } from "react-icons/si";
import { FaLinkedinIn } from "react-icons/fa6";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { fadeUp, fadeLeft, fadeRight, stagger, viewport } from "@/lib/animations";

// Validation schema — all fields are required and sanitised via zod
const contactSchema = z.object({
  name: z.string().min(2, "Nome deve ter pelo menos 2 caracteres").max(100).trim(),
  email: z.string().email("Digite um e-mail válido").max(200),
  message: z.string().min(10, "Mensagem deve ter pelo menos 10 caracteres").max(2000).trim(),
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: { name: "", email: "", message: "" },
  });

  // The form is visual-only (no backend).
  // TODO: conecte a um serviço como Formspree (https://formspree.io) ou
  // EmailJS para enviar mensagens reais sem precisar de backend.
  function onSubmit(_data: ContactFormData) {
    setSubmitted(true);
    form.reset();
  }

  return (
    <section id="contato" className="py-16 scroll-mt-20 bg-card/30 border-t border-border/50">
      <div className="container mx-auto px-6">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="max-w-5xl mx-auto"
        >
          {/* Heading */}
          <motion.div variants={fadeUp} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              Vamos Conversar?
            </h2>
            <p className="text-muted-foreground text-lg">
              Estou sempre aberto a novas conexões, projetos e oportunidades.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact info links */}
            <motion.div variants={fadeLeft}>
              <h3 className="text-2xl font-semibold mb-6 text-foreground">
                Informações de Contato
              </h3>
              <motion.div variants={stagger} className="space-y-6">
                {/*
                 * TODO: atualize os três links abaixo com seus dados reais:
                 *   - href="mailto:seuemail@gmail.com"  → seu e-mail
                 *   - href="https://linkedin.com/in/seu-perfil"  → seu LinkedIn
                 *   - href="https://github.com/seu-usuario"  → seu GitHub
                 */}
                <motion.a
                  variants={fadeUp}
                  href="#"
                  className="flex items-center gap-4 p-4 rounded-lg bg-card border border-border hover:border-primary/50 transition-colors group"
                  data-testid="link-contact-email"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Email</p>
                    <p className="text-sm text-muted-foreground">Em breve</p>
                  </div>
                </motion.a>

                <motion.a
                  variants={fadeUp}
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-lg bg-card border border-border hover:border-primary/50 transition-colors group"
                  data-testid="link-contact-linkedin"
                >
                  <div className="w-12 h-12 bg-[#0A66C2]/10 rounded-full flex items-center justify-center group-hover:bg-[#0A66C2]/20 transition-colors">
                    <FaLinkedinIn className="w-6 h-6 text-[#0A66C2]" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">LinkedIn</p>
                    <p className="text-sm text-muted-foreground">Conecte-se comigo</p>
                  </div>
                </motion.a>

                <motion.a
                  variants={fadeUp}
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-lg bg-card border border-border hover:border-primary/50 transition-colors group"
                  data-testid="link-contact-github"
                >
                  <div className="w-12 h-12 bg-foreground/5 rounded-full flex items-center justify-center group-hover:bg-foreground/10 transition-colors">
                    <SiGithub className="w-6 h-6 text-foreground" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">GitHub</p>
                    <p className="text-sm text-muted-foreground">Veja meus repositórios</p>
                  </div>
                </motion.a>
              </motion.div>
            </motion.div>

            {/* Contact form */}
            <motion.div
              variants={fadeRight}
              className="bg-card p-8 rounded-2xl border border-border shadow-lg"
            >
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="flex flex-col items-center justify-center h-full text-center gap-4 py-8"
                >
                  <CheckCircle className="w-14 h-14 text-primary" />
                  <h4 className="text-xl font-semibold text-foreground">
                    Mensagem recebida!
                  </h4>
                  <p className="text-muted-foreground text-sm">
                    Obrigado pelo contato. Retornarei em breve.
                  </p>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setSubmitted(false)}
                    data-testid="button-contact-new-message"
                  >
                    Enviar outra mensagem
                  </Button>
                </motion.div>
              ) : (
                <Form {...form}>
                  <form
                    className="space-y-6"
                    onSubmit={form.handleSubmit(onSubmit)}
                    noValidate
                  >
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Nome</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Seu nome completo"
                              className="bg-background"
                              data-testid="input-contact-name"
                              autoComplete="name"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email</FormLabel>
                          <FormControl>
                            <Input
                              type="email"
                              placeholder="seu@email.com"
                              className="bg-background"
                              data-testid="input-contact-email"
                              autoComplete="email"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Mensagem</FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="Como posso ajudar?"
                              className="min-h-[120px] bg-background resize-none"
                              data-testid="input-contact-message"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <Button
                      type="submit"
                      className="w-full gap-2"
                      size="lg"
                      disabled={form.formState.isSubmitting}
                      data-testid="button-contact-submit"
                    >
                      <Send className="w-4 h-4" /> Enviar Mensagem
                    </Button>
                  </form>
                </Form>
              )}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
