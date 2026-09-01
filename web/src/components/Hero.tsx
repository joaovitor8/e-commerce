import Link from "next/link";

export default function Hero() {
  return (
    <section className="border-b border-border bg-muted">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 py-20 md:grid-cols-2 md:py-28">
        <div className="flex flex-col justify-center gap-6">
          <span className="w-fit rounded-full border border-border bg-background px-3 py-1 text-xs font-medium text-muted-foreground">
            Coleção Outono / Inverno 2026
          </span>
          <h1 className="text-4xl font-semibold leading-[1.05] tracking-tight text-foreground md:text-6xl">
            Peças atemporais,
            <br />
            feitas para durar.
          </h1>
          <p className="max-w-md text-base leading-relaxed text-muted-foreground md:text-lg">
            Curadoria de roupas e acessórios essenciais, produzidos por marcas
            que compartilham do nosso compromisso com qualidade e sustentabilidade.
          </p>
          <div className="flex flex-wrap gap-3 pt-2">
            <Link
              href="#produtos"
              className="inline-flex h-11 items-center justify-center rounded-full bg-foreground px-6 text-sm font-medium text-background transition-opacity hover:opacity-90"
            >
              Ver coleção
            </Link>
            <Link
              href="#"
              className="inline-flex h-11 items-center justify-center rounded-full border border-border bg-background px-6 text-sm font-medium text-foreground transition-colors hover:bg-muted"
            >
              Nossa história
            </Link>
          </div>
        </div>

        <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl bg-gradient-to-br from-stone-200 via-stone-100 to-stone-300 dark:from-stone-800 dark:via-stone-900 dark:to-stone-950 md:aspect-auto">
          <div className="absolute inset-0 flex items-center justify-center">
            <svg
              viewBox="0 0 200 260"
              className="h-3/4 w-auto text-foreground/10"
              fill="currentColor"
              aria-hidden
            >
              <path d="M70 20 h60 l20 40 -30 15 v170 h-40 v-170 l-30 -15 z" />
            </svg>
          </div>
          <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between rounded-xl bg-background/90 p-4 backdrop-blur">
            <div>
              <p className="text-xs uppercase tracking-wider text-muted-foreground">
                Destaque
              </p>
              <p className="text-sm font-medium">Casaco de lã merino</p>
            </div>
            <p className="text-sm font-semibold">R$ 1.290</p>
          </div>
        </div>
      </div>
    </section>
  );
}
