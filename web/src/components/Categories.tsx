import Link from "next/link";

const categories = [
  {
    name: "Vestuário",
    count: "128 peças",
    gradient: "from-amber-100 to-amber-200 dark:from-amber-950 dark:to-amber-900",
  },
  {
    name: "Calçados",
    count: "54 peças",
    gradient: "from-stone-200 to-stone-300 dark:from-stone-800 dark:to-stone-700",
  },
  {
    name: "Acessórios",
    count: "76 peças",
    gradient: "from-emerald-100 to-emerald-200 dark:from-emerald-950 dark:to-emerald-900",
  },
  {
    name: "Casa",
    count: "42 peças",
    gradient: "from-slate-200 to-slate-300 dark:from-slate-800 dark:to-slate-700",
  },
];

export default function Categories() {
  return (
    <section className="border-b border-border">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
              Categorias
            </h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Explore por seção
            </p>
          </div>
          <Link
            href="#"
            className="hidden text-sm text-muted-foreground transition-colors hover:text-foreground md:inline-flex"
          >
            Ver todas →
          </Link>
        </div>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {categories.map((c) => (
            <Link
              key={c.name}
              href="#"
              className="group relative flex aspect-[4/5] flex-col justify-end overflow-hidden rounded-xl border border-border p-5 transition-transform hover:-translate-y-1"
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${c.gradient}`}
              />
              <div className="relative">
                <p className="text-lg font-medium text-foreground">{c.name}</p>
                <p className="text-xs text-muted-foreground">{c.count}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
