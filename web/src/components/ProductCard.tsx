import Link from "next/link";

export type Product = {
  id: string;
  name: string;
  category: string;
  price: number;
  oldPrice?: number;
  tag?: "Novo" | "Mais vendido" | "Últimas peças";
  gradient: string;
};

const formatBRL = (value: number) =>
  new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
    minimumFractionDigits: 0,
  }).format(value);

export default function ProductCard({ product }: { product: Product }) {
  return (
    <Link href="#" className="group flex flex-col gap-3">
      <div
        className={`relative aspect-square overflow-hidden rounded-xl border border-border bg-gradient-to-br ${product.gradient}`}
      >
        {product.tag && (
          <span className="absolute left-3 top-3 rounded-full bg-background/90 px-2.5 py-1 text-[11px] font-medium text-foreground backdrop-blur">
            {product.tag}
          </span>
        )}
        <button
          aria-label="Favoritar"
          className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-background/90 text-muted-foreground opacity-0 backdrop-blur transition-opacity hover:text-foreground group-hover:opacity-100"
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.75"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
          </svg>
        </button>
      </div>

      <div className="flex items-start justify-between gap-3 px-0.5">
        <div className="min-w-0">
          <p className="text-xs text-muted-foreground">{product.category}</p>
          <p className="mt-0.5 truncate text-sm font-medium text-foreground">
            {product.name}
          </p>
        </div>
        <div className="text-right">
          <p className="text-sm font-semibold text-foreground">
            {formatBRL(product.price)}
          </p>
          {product.oldPrice && (
            <p className="text-xs text-muted-foreground line-through">
              {formatBRL(product.oldPrice)}
            </p>
          )}
        </div>
      </div>
    </Link>
  );
}
