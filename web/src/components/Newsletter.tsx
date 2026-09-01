export default function Newsletter() {
  return (
    <section className="border-b border-border">
      <div className="mx-auto max-w-3xl px-6 py-20 text-center">
        <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
          Receba novidades em primeira mão
        </h2>
        <p className="mx-auto mt-3 max-w-md text-sm text-muted-foreground">
          Assine nossa newsletter e ganhe 10% de desconto na primeira compra.
        </p>

        <form className="mx-auto mt-8 flex max-w-md flex-col gap-2 sm:flex-row">
          <input
            type="email"
            required
            placeholder="seu@email.com"
            className="h-11 flex-1 rounded-full border border-border bg-background px-5 text-sm text-foreground placeholder:text-muted-foreground focus:border-foreground focus:outline-none"
          />
          <button
            type="submit"
            className="h-11 rounded-full bg-foreground px-6 text-sm font-medium text-background transition-opacity hover:opacity-90"
          >
            Assinar
          </button>
        </form>
      </div>
    </section>
  );
}
