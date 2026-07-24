export default function Footer() {
  return <footer className="border-t border-border bg-background py-8"><div className="site-container flex flex-col items-center justify-between gap-4 sm:flex-row"><div className="flex items-center gap-3"><span className="brand-mark" aria-hidden="true">LE</span><span className="font-semibold">Lucas Eduardo</span></div><p className="text-center text-sm text-muted-foreground">© {new Date().getFullYear()} Lucas Eduardo Gomes de Lima.</p></div></footer>;
}
