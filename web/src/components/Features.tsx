const features = [
  {
    title: "Frete grátis",
    description: "Em compras acima de R$ 299",
    icon: (
      <path d="M14 18V6H2v11h3M5 21a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm12 0a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm2-3h3v-4l-3-4h-5v8" />
    ),
  },
  {
    title: "Pagamento seguro",
    description: "Pix, boleto ou até 10x sem juros",
    icon: (
      <>
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="M3 10h18" />
      </>
    ),
  },
  {
    title: "Troca fácil",
    description: "30 dias para devolução gratuita",
    icon: (
      <>
        <path d="M3 12a9 9 0 0 1 15-6.7L21 8" />
        <path d="M21 3v5h-5" />
        <path d="M21 12a9 9 0 0 1-15 6.7L3 16" />
        <path d="M3 21v-5h5" />
      </>
    ),
  },
  {
    title: "Atendimento",
    description: "Suporte humano de seg a sáb",
    icon: (
      <>
        <path d="M21 15a2 2 0 0 1-2 2h-9l-5 4V5a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2Z" />
      </>
    ),
  },
];

export default function Features() {
  return (
    <section className="border-b border-border bg-muted">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-6 py-12 md:grid-cols-4">
        {features.map((f) => (
          <div key={f.title} className="flex items-start gap-3">
            <div className="flex h-10 w-10 flex-none items-center justify-center rounded-full border border-border bg-background text-foreground">
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.75"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                {f.icon}
              </svg>
            </div>
            <div>
              <p className="text-sm font-medium text-foreground">{f.title}</p>
              <p className="mt-0.5 text-xs text-muted-foreground">
                {f.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
