import ProductCard, { type Product } from "./ProductCard";

const products: Product[] = [
  {
    id: "1",
    name: "Camisa Oxford Algodão",
    category: "Vestuário",
    price: 349,
    tag: "Novo",
    gradient: "from-blue-100 to-blue-200 dark:from-blue-950 dark:to-blue-900",
  },
  {
    id: "2",
    name: "Tênis Runner Bege",
    category: "Calçados",
    price: 589,
    oldPrice: 749,
    gradient:
      "from-stone-200 to-stone-300 dark:from-stone-800 dark:to-stone-700",
  },
  {
    id: "3",
    name: "Mochila Urbana 18L",
    category: "Acessórios",
    price: 429,
    tag: "Mais vendido",
    gradient:
      "from-emerald-100 to-emerald-200 dark:from-emerald-950 dark:to-emerald-900",
  },
  {
    id: "4",
    name: "Óculos Retangular",
    category: "Acessórios",
    price: 269,
    gradient:
      "from-amber-100 to-amber-200 dark:from-amber-950 dark:to-amber-900",
  },
  {
    id: "5",
    name: "Suéter Tricô Merino",
    category: "Vestuário",
    price: 469,
    tag: "Últimas peças",
    gradient: "from-rose-100 to-rose-200 dark:from-rose-950 dark:to-rose-900",
  },
  {
    id: "6",
    name: "Bota de Couro",
    category: "Calçados",
    price: 899,
    gradient:
      "from-orange-100 to-orange-200 dark:from-orange-950 dark:to-orange-900",
  },
  {
    id: "7",
    name: "Cinto Trançado",
    category: "Acessórios",
    price: 189,
    gradient:
      "from-yellow-100 to-yellow-200 dark:from-yellow-950 dark:to-yellow-900",
  },
  {
    id: "8",
    name: "Calça Chino Slim",
    category: "Vestuário",
    price: 389,
    oldPrice: 459,
    gradient:
      "from-neutral-200 to-neutral-300 dark:from-neutral-800 dark:to-neutral-700",
  },
];

export default function FeaturedProducts() {
  return (
    <section id="produtos" className="border-b border-border">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="mb-10 flex flex-col gap-1 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
              Selecionados para você
            </h2>
            <p className="mt-2 text-sm text-muted-foreground">
              As peças mais desejadas da nova coleção
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-x-4 gap-y-10 md:grid-cols-3 lg:grid-cols-4">
          {products.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
