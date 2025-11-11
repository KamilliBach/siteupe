# Estrutura de Pastas - Blog Institucional

## 📁 Organização do Projeto

```
frontend-upe-next/
├── public/                          # Arquivos estáticos
│   ├── images/
│   │   └── blog/                    # Imagens de artigos
│   └── icons/                       # Ícones SVG/PNG
│
├── src/
│   ├── pages/                       # Páginas do Next.js (App Router ou Pages Router)
│   │   ├── blog/
│   │   │   ├── [slug].tsx           # Página dinâmica de artigo
│   │   │   └── index.tsx            # Lista de artigos
│   │   ├── about.tsx                # Sobre a instituição
│   │   ├── contato.tsx              # Contato
│   │   └── index.tsx                # Home
│   │
│   ├── components/                  # Componentes React reutilizáveis
│   │   ├── common/                  # Componentes genéricos (Button, Card, etc.)
│   │   ├── layout/                  # Header, Footer, RootLayout
│   │   │   ├── Header.tsx
│   │   │   ├── Footer.tsx
│   │   │   └── RootLayout.tsx
│   │   ├── blog/                    # Componentes relacionados a blog
│   │   │   ├── BlogCard.tsx
│   │   │   ├── BlogGrid.tsx
│   │   │   └── BlogSidebar.tsx
│   │   └── home/                    # Componentes da home
│   │       ├── Hero.tsx
│   │       └── FeaturedPosts.tsx
│   │
│   ├── types/                       # TypeScript interfaces e tipos
│   │   └── index.ts
│   │
│   ├── utils/                       # Funções utilitárias
│   │   ├── formatDate.ts
│   │   ├── slugify.ts
│   │   └── api.ts                   # Chamadas a APIs
│   │
│   ├── hooks/                       # Hooks customizados React
│   │   ├── useBlogs.ts
│   │   └── usePagination.ts
│   │
│   ├── styles/                      # CSS global e Tailwind
│   │   └── globals.css
│   │
│   └── content/                     # Conteúdo estático (MDX, JSON, etc.)
│       ├── blog/                    # Posts em Markdown ou JSON
│       └── pages/                   # Páginas estáticas
│
├── package.json
├── tsconfig.json
├── next.config.js
├── tailwind.config.ts
└── postcss.config.js
```

## 📝 Convenções

### Componentes
- **`components/common/`**: Componentes reutilizáveis genéricos
- **`components/layout/`**: Layout, Header, Footer
- **`components/blog/`**: Componentes específicos de blog
- **`components/home/`**: Componentes específicos da página inicial

### Tipos
- Centralizar em `src/types/index.ts`
- Usar interfaces para estruturas de dados

### Utilitários
- Funções puras e testáveis
- Cada arquivo com responsabilidade única

### Hooks
- Lógica reutilizável entre componentes
- Nomes começam com `use`

## 🚀 Como Usar

1. **Criar nova página**: Adicionar arquivo em `src/pages/`
2. **Criar novo componente**: Adicionar em `src/components/[categoria]/`
3. **Adicionar tipo**: Definer em `src/types/index.ts`
4. **Criar utilitário**: Adicionar em `src/utils/`
5. **Adicionar conteúdo**: Armazenar em `src/content/`

## 📦 Dependências Principais

- **Next.js 14+**: Framework React
- **TypeScript**: Tipagem estática
- **Tailwind CSS**: Estilização utilitária
- **React 18+**: Biblioteca UI

---

Estrutura pronta para desenvolvimento escalável e maintível! 🎉
