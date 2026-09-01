@AGENTS.md

# Nord — E-commerce

Loja online (visual/vitrine) construída com Next.js 16 App Router, React 19 e Tailwind CSS v4. Idioma: pt-BR. Moeda: BRL.

## Stack

- **Next.js 16.3.3** (App Router, Turbopack no dev)
- **React 19.2.8**
- **Tailwind CSS 4** (via `@tailwindcss/postcss`, config inline em `globals.css` com `@theme`)
- **TypeScript 5** (strict)
- **Fontes:** Geist Sans e Geist Mono (via `next/font/google`)

Sem libs de UI externas (nenhum shadcn, headless-ui, lucide, etc). Ícones são SVG inline.

## Comandos

```bash
npm run dev      # dev server (Turbopack) em http://localhost:3000
npm run build    # build de produção
npm run start    # roda o build
npm run lint     # eslint
```

## Estrutura

```
src/
  app/
    layout.tsx        # RootLayout, metadata, fontes, <html lang="pt-BR">
    page.tsx          # Home — compõe as seções
    globals.css       # tokens de design + reset
  components/         # componentes de UI (sem client boundary por padrão)
    Navbar.tsx
    Hero.tsx
    Categories.tsx
    ProductCard.tsx
    FeaturedProducts.tsx
    Features.tsx
    Newsletter.tsx
    Footer.tsx
public/               # SVGs estáticos
```

Alias de path: `@/*` → raiz do projeto (ex.: `@/src/components/Navbar`).

## Design system

Tokens em `src/app/globals.css` (CSS vars + `@theme inline` para expor como classes Tailwind).

| Token                        | Uso                                  |
| ---------------------------- | ------------------------------------ |
| `bg-background` / `text-foreground` | superfícies e texto padrão    |
| `bg-muted` / `text-muted-foreground` | seções secundárias, legendas |
| `border-border`              | divisórias e outlines                |
| `bg-accent` / `text-accent-foreground` | destaque (âmbar)           |

- Paleta neutra (stone/zinc) com acento âmbar (`#b45309` claro / `#f59e0b` escuro).
- Dark mode via `prefers-color-scheme` (automático, sem toggle).
- Radius padrão: `rounded-xl` para cards, `rounded-full` para pills/CTAs.
- Container: `max-w-7xl mx-auto px-6`.
- Tipografia: `text-2xl md:text-3xl font-semibold tracking-tight` para títulos de seção.

## Convenções

- Imagens de produto: por enquanto **gradientes CSS** (sem `next/image` para produtos). Ao trocar por fotos reais, configurar `images.remotePatterns` em `next.config.ts`.
- Todos os componentes são **Server Components** (não usar `"use client"` a menos que precise de estado/handlers).
- Preços formatados com `Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" })` — ver `ProductCard.tsx`.
- Ícones: SVG inline com `stroke="currentColor"`, `strokeWidth="1.75"`, tamanho 16–18px.

## Gotchas do Next.js 16

- `LayoutProps<"/rota">` é helper **global** (não importar) — gerado por `next dev`/`next build`/`next typegen`.
- Bloco de comentários no topo do `AGENTS.md` é reescrito pelo `next dev` a cada execução — commitar junto para manter tree limpo.
