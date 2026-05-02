import { Code2 } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear() > 2026 ? new Date().getFullYear() : 2026;
  
  return (
    <footer className="py-8 bg-background border-t border-border">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2 text-primary">
          <Code2 className="w-5 h-5" />
          <span className="font-bold text-foreground">Lucas Lima</span>
        </div>
        
        <p className="text-sm text-muted-foreground text-center">
          &copy; {currentYear} Lucas Eduardo Gomes de Lima. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
