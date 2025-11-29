# Site Institucional UPE

Site desenvolvido com Next.js 14, TypeScript e Tailwind CSS para divulgação e gerenciamento de conteúdo institucional.

## Estrutura de Páginas

### Home (`/`)
Página inicial contendo seções de apresentação institucional, mapa de presença, destaques e chamadas para ação.

### Institucional (`/institucional`)

**Quem Somos** (`/institucional/quem-somos`)  
Informações sobre a instituição, propósito e contatos principais.

**História** (`/institucional/historia`)  
Histórico institucional, marcos importantes e evolução.

**Gestão Atual** (`/institucional/gestao`)  
Diretores, lideranças, funções e responsabilidades.

**Documentos** (`/institucional/documentos`)  
Estatuto, regimentos e documentos oficiais para download.

**Pautas** (`/institucional/pautas`)  
Objetivos, projetos e iniciativas estratégicas.

### Notícias (`/noticias`)

**Flâmula** (`/noticias/flamula`)  
Publicação oficial da instituição.

**Artigos** (`/noticias/artigos`)  
Seção de artigos e análises com categorias e busca.

**Artigo Individual** (`/noticias/artigos/[slug]`)  
Visualização completa de artigos com informações de autor e data.

**Mídia** (`/noticias/midia`)  
Galeria de fotos e vídeos de eventos e atividades.

### Serviços (`/servicos`)

**Informações** (`/servicos/informacoes`)  
FAQ, guia do estudante, calendário acadêmico e regulamentos.

**Convênios** (`/servicos/convenios`)  
Parcerias, descontos e benefícios disponíveis.

**Organização** (`/servicos/organizacao`)  
Estrutura de DCE, centros acadêmicos e contatos.

### Blog (`/blog`)
Seção de artigos e análises com acesso a posts individuais.

### Contato (`/contato`)
Formulário de contato, localização, mapa e horário de funcionamento.

---

## Rotas

| Seção | Página | URL | Descrição |
|-------|--------|-----|-----------|
| Home | Home | `/` | Página inicial |
| Institucional | Quem Somos | `/institucional/quem-somos` | Informações institucionais |
| | História | `/institucional/historia` | Histórico da instituição |
| | Gestão | `/institucional/gestao` | Diretores e lideranças |
| | Documentos | `/institucional/documentos` | Documentos oficiais |
| | Pautas | `/institucional/pautas` | Objetivos e compromissos |
| Notícias | Flâmula | `/noticias/flamula` | Publicação oficial |
| | Artigos | `/noticias/artigos` | Blog de artigos |
| | Artigo | `/noticias/artigos/[slug]` | Artigo completo |
| | Mídia | `/noticias/midia` | Galeria de fotos e vídeos |
| Serviços | Informações | `/servicos/informacoes` | FAQ e guia |
| | Convênios | `/servicos/convenios` | Parcerias e benefícios |
| | Organização | `/servicos/organizacao` | DCE e CA |
| Blog | Blog | `/blog` | Artigos e análises |
| Contato | Contato | `/contato` | Formulário e localização |

---

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

---

## Paleta de Cores

A paleta de cores segue a identidade visual da UPE:

- Azul Principal: #1A4081
- Verde: #4CAF50
- Azul Claro: #E0F2F7
- Teal: #14B8A6

Consulte `CORES.md` para detalhes completos.

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
