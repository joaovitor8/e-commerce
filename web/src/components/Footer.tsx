import Link from "next/link";

const columns = [
  {
    title: "Loja",
    links: ["Novidades", "Masculino", "Feminino", "Acessórios", "Ofertas"],
  },
  {
    title: "Ajuda",
    links: ["Central de ajuda", "Entrega", "Trocas e devoluções", "Contato"],
  },
  {
    title: "Empresa",
    links: ["Sobre nós", "Sustentabilidade", "Trabalhe conosco", "Imprensa"],
  },
];

export default function Footer() {
  return (
    <footer className="bg-background">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-4">
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="text-lg font-semibold tracking-tight">
              Nord<span className="text-accent">.</span>
            </Link>
            <p className="mt-4 max-w-xs text-sm text-muted-foreground">
              Curadoria de peças essenciais para o dia a dia. Feitas para durar.
            </p>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <h4 className="text-sm font-semibold text-foreground">
                {col.title}
              </h4>
              <ul className="mt-4 space-y-3">
                {col.links.map((link) => (
                  <li key={link}>
                    <Link
                      href="#"
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-border pt-8 md:flex-row md:items-center">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Nord. Todos os direitos reservados.
          </p>
          <div className="flex gap-3 text-xs text-muted-foreground">
            <Link href="#" className="transition-colors hover:text-foreground">
              Termos
            </Link>
            <span>·</span>
            <Link href="#" className="transition-colors hover:text-foreground">
              Privacidade
            </Link>
            <span>·</span>
            <Link href="#" className="transition-colors hover:text-foreground">
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
