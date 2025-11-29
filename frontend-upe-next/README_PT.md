# Site Institucional UPE

Site desenvolvido com Next.js 14, TypeScript e Tailwind CSS para divulgação e gerenciamento de conteúdo institucional.

## Estrutura

```
src/
├── app/                          # Páginas e layouts (App Router)
│   ├── page.tsx                  # Home
│   ├── about/page.tsx            # Sobre
│   ├── blog/page.tsx             # Artigos
│   ├── blog/[slug]/page.tsx      # Artigo individual
│   ├── contato/page.tsx          # Contato
│   ├── institucional/
│   ├── noticias/
│   ├── servicos/
│   ├── participe/page.tsx        # Participação
│   └── layout.tsx                # Layout global
│
├── components/
│   ├── layout/
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   └── RootLayout.tsx
│   ├── blog/
│   │   └── BlogCard.tsx
│   ├── home/
│   │   ├── Hero.tsx
│   │   └── MapaPresenca.tsx
│   └── UPELogo.tsx
│
├── types/
│   └── index.ts                  # Tipos TypeScript
│
├── utils/
│   ├── formatDate.ts             # Formatação de datas
│   └── slugify.ts                # Geração de slugs
│
├── hooks/
│   └── useBlogs.ts               # Hook para gerenciar artigos
│
└── styles/
    └── globals.css               # Estilos globais

public/
├── images/
└── icons/
```

## Páginas

| Página | URL |
|--------|-----|
| Home | `/` |
| Quem Somos | `/institucional/quem-somos` |
| História | `/institucional/historia` |
| Gestão | `/institucional/gestao` |
| Documentos | `/institucional/documentos` |
| Pautas | `/institucional/pautas` |
| Flâmula | `/noticias/flamula` |
| Artigos | `/noticias/artigos` |
| Mídia | `/noticias/midia` |
| Informações | `/servicos/informacoes` |
| Convênios | `/servicos/convenios` |
| Organização | `/servicos/organizacao` |
| Blog | `/blog` |
| Artigo | `/blog/[slug]` |
| Contato | `/contato` |

## Tecnologias

- Next.js 14.0.1
- TypeScript 5.1.6
- React 18.2.0
- Tailwind CSS 3.4.0
- ESLint

## Instalação

### Pré-requisitos
- Node.js 18+
- npm ou yarn

### Passos

1. Navegue até o diretório do projeto:
   ```powershell
   cd C:\Users\kamil\Desktop\siteupe\frontend-upe-next
   ```

2. Instale as dependências:
   ```powershell
   npm install
   ```

3. Execute em modo desenvolvimento:
   ```powershell
   npm run dev
   ```

4. Abra no navegador:
   ```
   http://localhost:3000
   ```

## Comandos

```powershell
# Modo desenvolvimento
npm run dev

# Build para produção
npm run build

# Executar em produção
npm start

# Linter
npm run lint
```

## Paleta de Cores

- Azul Principal: #1A4081
- Verde: #4CAF50
- Azul Claro: #E0F2F7
- Teal: #14B8A6

Consulte `CORES.md` para detalhes completos.

## Solução de Problemas

### Dependências não instalam
```powershell
npm cache clean --force
npm install
```

### Porta 3000 em uso
```powershell
npm run dev -- -p 3001
```

---

**Versão:** 2.0.0

## Backend (sugestão de skeleton)

Um esqueleto de backend em TypeScript com Express foi adicionado em `backend/`. Ele fornece endpoints de exemplo:

- GET /api/presidents — lista de ex-presidentes
- GET /api/presidents/:id — detalhe de um ex-presidente
- GET /api/motions — lista de moções e resoluções
- GET /api/motions/:id — detalhe de uma moção/resolução

Para executar o backend (opcional):

```powershell
cd backend
npm install
npm run dev
```

O servidor padrão escuta na porta 4000.
