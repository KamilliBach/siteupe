# Blog Institucional - Next.js + TypeScript + Tailwind CSS

Um projeto completo de blog institucional construído com Next.js 14, TypeScript, Tailwind CSS e componentes modernos.

## 🚀 Funcionalidades

- ✅ Home com hero section e grid de artigos em destaque
- ✅ Página de blog com listagem completa de artigos
- ✅ Página dinâmica de posts individuais
- ✅ Página "Sobre a Instituição" com missão, visão e valores
- ✅ Página de contato com formulário funcional
- ✅ Componentes reutilizáveis e bem organizados
- ✅ Design responsivo (mobile, tablet, desktop)
- ✅ Tailwind CSS para estilização moderna
- ✅ TypeScript para segurança de tipos

## 📁 Estrutura do Projeto

```
src/
├── app/                          # Páginas e layouts (App Router)
│   ├── page.tsx                  # Home
│   ├── blog/
│   │   ├── page.tsx              # Listagem de artigos
│   │   └── [slug]/
│   │       └── page.tsx          # Post individual dinâmico
│   ├── about/page.tsx            # Sobre a instituição
│   ├── contato/page.tsx          # Contato com formulário
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
│   │   └── Hero.tsx
│   └── common/
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
├── styles/
│   └── globals.css               # Estilos globais + Tailwind
│
└── content/
    ├── blog/                     # Conteúdo de posts (MDX, JSON, etc.)
    └── pages/                    # Conteúdo estático

public/
├── images/
│   └── blog/                     # Imagens de artigos
└── icons/                        # Ícones
```

## 🛠️ Tecnologias Utilizadas

- **Next.js 14**: Framework React moderno
- **TypeScript**: Tipagem estática
- **React 18**: Biblioteca UI
- **Tailwind CSS**: Estilização utilitária
- **ESLint**: Linting de código

## 📦 Instalação

### Pré-requisitos
- Node.js 18+ instalado
- npm ou yarn

### Passos de Instalação

1. **Navegue até a pasta do projeto:**
   ```powershell
   cd C:\Users\kamil\Desktop\siteupe\frontend-upe-next
   ```

2. **Instale as dependências:**
   ```powershell
   npm install
   ```

3. **Execute em modo desenvolvimento:**
   ```powershell
   npm run dev
   ```

4. **Abra no navegador:**
   ```
   http://localhost:3000
   ```

## 🏃 Comandos Disponíveis

```powershell
# Modo desenvolvimento (com hot reload)
npm run dev

# Construir para produção
npm build

# Iniciar em modo produção
npm start

# Executar linter
npm run lint
```

## 📄 Páginas Disponíveis

| Página | URL | Descrição |
|--------|-----|-----------|
| Home | `/` | Página inicial com artigos em destaque |
| Blog | `/blog` | Listagem completa de todos os artigos |
| Post | `/blog/[slug]` | Artigo individual |
| Sobre | `/about` | Informações sobre a instituição |
| Contato | `/contato` | Formulário de contato |

## 🎨 Customização

### Adicionar Novo Artigo

Para adicionar um novo artigo, edite o array `postagens` em qualquer página ou implemente uma integração com um CMS:

```typescript
const postagens: BlogPost[] = [
  {
    id: '1',
    slug: 'meu-artigo',
    title: 'Título do Artigo',
    excerpt: 'Resumo do artigo...',
    content: 'Conteúdo completo...',
    author: 'Nome do Autor',
    date: new Date().toISOString(),
    image: 'URL da imagem',
    tags: ['tag1', 'tag2'],
    category: 'Categoria',
  }
];
```

### Customizar Cores

Edite `tailwind.config.ts` para alterar o esquema de cores:

```typescript
theme: {
  extend: {
    colors: {
      primary: '#0066cc',
      secondary: '#00d4ff',
    }
  }
}
```

### Adicionar Fonte Customizada

Edite `src/styles/globals.css`:

```css
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap');

body {
  @apply font-poppins;
}
```

## 🔗 Integrações Futuras

- [ ] Integração com CMS (Strapi, Sanity, Contentful)
- [ ] Sistema de comentários (Disqus, Utterances)
- [ ] Analytics (Google Analytics, Plausible)
- [ ] Search (Algolia, ElasticSearch)
- [ ] Newsletter subscription
- [ ] Social media sharing

## 📱 Responsividade

O projeto é totalmente responsivo:
- ✅ Mobile (320px+)
- ✅ Tablet (768px+)
- ✅ Desktop (1024px+)

## 🐛 Troubleshooting

### Erro ao instalar dependências
```powershell
# Limpe o cache do npm
npm cache clean --force

# Tente instalar novamente
npm install
```

### Porta 3000 já em uso
```powershell
# Use uma porta diferente
npm run dev -- -p 3001
```

## 📝 Licença

Este projeto é fornecido como exemplo educacional.

## 👥 Suporte

Para dúvidas ou sugestões, entre em contato através da página de contato.

---

**Versão:** 1.0.0  
**Última atualização:** Novembro de 2024
