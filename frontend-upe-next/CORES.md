# Paleta de Cores - UPE (União Paranaense dos Estudantes)

## 🎨 Cores Primárias

### Azul Principal (Brand Blue)
- **Nome**: blue-upe
- **Hex**: #1A4081
- **RGB**: 26, 64, 129
- **Uso**: Títulos principais, botões primários, links, ícones, hero section
- **Tailwind**: `bg-blue-upe-700`, `text-blue-upe-700`, `border-blue-upe-700`
- **Tons disponíveis**:
  - `blue-upe-600`: #2E5DA3 (mais claro)
  - `blue-upe-700`: #1A4081 (principal)
  - `blue-upe-800`: #0F2654 (escuro)

### Verde Acento (Accent Green)
- **Nome**: green-upe
- **Hex**: #4CAF50
- **RGB**: 76, 175, 80
- **Uso**: Botões "Faça Parte", elementos de sucesso, tags, mapa, ícones de ação
- **Tailwind**: `bg-green-upe-500`, `text-green-upe-500`
- **Tons disponíveis**:
  - `green-upe-500`: #4CAF50 (principal)
  - `green-upe-600`: #388E3C (hover)

---

## 🌊 Cores Secundárias

### Azul Claro (Light Blue)
- **Nome**: light-blue-upe
- **Hex**: #E0F2F7
- **RGB**: 224, 242, 247
- **Uso**: Fundos alternativos, banners informativos, estado hover leve
- **Tailwind**: `bg-light-blue-upe-100`, `border-light-blue-upe-100`

### Verde Água (Teal)
- **Nome**: teal-upe
- **Hex**: #14B8A6
- **RGB**: 20, 184, 166
- **Uso**: Detalhes gráficos, sublinhados, elementos modernos
- **Tailwind**: `text-teal-upe-500`, `border-teal-upe-500`

---

## ⚪ Cores Neutras

### Branco
- **Hex**: #FFFFFF
- **Uso**: Fundos de cartões, backgrounds, texto em elementos escuros
- **Tailwind**: `bg-white`, `text-white`

### Preto
- **Hex**: #000000
- **Uso**: Textos de alto contraste, elementos específicos
- **Tailwind**: `text-black`, `bg-black`

### Cinza Escuro (Dark Gray)
- **Nome**: gray-upe
- **Hex**: #333333
- **RGB**: 51, 51, 51
- **Uso**: Texto de corpo principal, títulos secundários
- **Tailwind**: `text-gray-upe-800PS C:\Users\kamil\Desktop\siteupe> cd C:\Users\kamil\Desktop\siteupe\frontend-upe-next
PS C:\Users\kamil\Desktop\siteupe\frontend-upe-next> Test-Path package.json; if (Test-Path package.json) { Get-Content package.json -Head 20 } else { Write-Host "package.json não encontrado" -ForegroundColor Yellow }^C
PS C:\Users\kamil\Desktop\siteupe\frontend-upe-next> npm install --legacy-peer-deps
npm error process terminated
npm error signal SIGINT
npm error A complete log of this run can be found in: C:\Users\kamil\AppData\Local\npm-cache\_logs\2025-11-24T20_22_30_762Z-debug-0.log
PS C:\Users\kamil\Desktop\siteupe\frontend-upe-next> npx rimraf .nextPS C:\Users\kamil\Desktop\siteupe> cd C:\Users\kamil\Desktop\siteupe\frontend-upe-next
PS C:\Users\kamil\Desktop\siteupe\frontend-upe-next> Test-Path package.json; if (Test-Path package.json) { Get-Content package.json -Head 20 } else { Write-Host "package.json não encontrado" -ForegroundColor Yellow }^C
PS C:\Users\kamil\Desktop\siteupe\frontend-upe-next> npm install --legacy-peer-deps
npm error process terminated
npm error signal SIGINT
npm error A complete log of this run can be found in: C:\Users\kamil\AppData\Local\npm-cache\_logs\2025-11-24T20_22_30_762Z-debug-0.log
PS C:\Users\kamil\Desktop\siteupe\frontend-upe-next> npx rimraf .next`

### Cinza Médio (Medium Gray)
- **Hex**: #666666
- **RGB**: 102, 102, 102
- **Uso**: Textos secundários, descrições, placeholders
- **Tailwind**: `text-gray-upe-600`

### Cinza Claro (Light Gray)
- **Hex**: #EEEEEE
- **RGB**: 238, 238, 238
- **Uso**: Bordas, divisores, fundos de formulários
- **Tailwind**: `border-gray-upe-200`, `bg-gray-upe-200`

---

## 💡 Guia de Uso

### Componentes e Aplicações

| Elemento | Cor Primária | Cor Hover/Ativa | Fundo |
|----------|-------------|-----------------|-------|
| Header | blue-upe-700 | blue-upe-800 | white |
| Botão "Faça Parte" | green-upe-500 | green-upe-600 | - |
| Links | blue-upe-700 | blue-upe-800 | - |
| Hero Section | blue-upe-700 | - | blue-upe-700 |
| Títulos H1, H2 | blue-upe-700 | - | - |
| Texto corpo | gray-upe-800 | - | - |
| Texto secundário | gray-upe-600 | - | - |
| Cartões | - | - | white |
| Seções alternadas | - | - | light-blue-upe-100 |
| Bordas | gray-upe-200 | - | - |
| Footer | blue-upe-700 | - | blue-upe-700 |

---

## 🎯 Variáveis Tailwind

```typescript
// tailwind.config.ts
{
  colors: {
    'blue-upe': {
      600: '#2E5DA3',
      700: '#1A4081',
      800: '#0F2654',
    },
    'green-upe': {
      500: '#4CAF50',
      600: '#388E3C',
    },
    'light-blue-upe': {
      100: '#E0F2F7',
    },
    'teal-upe': {
      500: '#14B8A6',
    },
    'gray-upe': {
      200: '#EEEEEE',
      600: '#666666',
      800: '#333333',
    },
  }
}
```

---

## 📱 Exemplos de Uso

### Botão Primário (CTA)
```tsx
className="bg-green-upe-500 text-white hover:bg-green-upe-600"
```

### Heading Principal
```tsx
className="text-blue-upe-700 font-bold"
```

### Texto de Corpo
```tsx
className="text-gray-upe-800"
```

### Card com Fundo Alternado
```tsx
className="bg-light-blue-upe-100 border border-blue-upe-700 border-opacity-20"
```

### Link
```tsx
className="text-blue-upe-700 hover:text-blue-upe-800 hover:underline"
```

---

## ✨ Notas de Design

- **Acessibilidade**: A paleta mantém excelente contraste entre cores para legibilidade
- **Harmonia**: Verde e Azul criam uma sensação de confiança e dinamismo
- **Modernidade**: Teal é usado para detalher elementos mais modernos
- **Neutralidade**: Cinzas garantem fundo neutro para hierarquia visual
