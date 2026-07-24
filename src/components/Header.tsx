import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const navItems = [
  ["Sobre", "#sobre"],
  ["Projetos", "#projetos"],
  ["Competências", "#habilidades"],
  ["Trajetória", "#curriculo"],
  ["Contato", "#contato"],
] as const;

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`fixed inset-x-0 top-0 z-50 border-b transition-all ${scrolled ? "border-border bg-background/85 backdrop-blur-xl" : "border-transparent bg-background/60"}`}>
      <div className="site-container flex h-18 items-center justify-between">
        <a href="#inicio" className="flex items-center gap-3 font-semibold tracking-tight" aria-label="Ir para o início">
          <span className="brand-mark" aria-hidden="true">LE</span>
          <span className="hidden sm:inline">Lucas Eduardo</span>
        </a>
        <nav className="hidden items-center gap-7 md:flex" aria-label="Navegação principal">
          {navItems.map(([label, href]) => <a key={href} href={href} className="nav-link">{label}</a>)}
        </nav>
        <button className="rounded-lg border border-border p-2 md:hidden" onClick={() => setOpen(!open)} aria-label={open ? "Fechar menu" : "Abrir menu"} aria-expanded={open}>
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && <nav className="border-t border-border bg-card px-6 py-4 md:hidden">{navItems.map(([label, href]) => <a key={href} href={href} onClick={() => setOpen(false)} className="block py-3 text-sm text-muted-foreground">{label}</a>)}</nav>}
    </header>
  );
}
