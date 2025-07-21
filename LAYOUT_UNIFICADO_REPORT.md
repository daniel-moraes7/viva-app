# Aplicativo Viva - Layout Unificado com Navegação Interna

## Visão Geral

Implementação de uma página única para o Aplicativo Viva com navegação interna por âncoras, eliminando a necessidade de múltiplas rotas e proporcionando uma experiência de usuário mais fluida e organizada.

## Estrutura Implementada

### 1. Componente de Navegação Interna (`SectionNav.tsx`)

```tsx
// src/components/UI/SectionNav.tsx
```

**Características:**
- Navegação lateral fixa (sticky) apenas em desktop (lg:)
- Lista de seções com links que saltam para âncoras
- Estilo minimalista com hover states
- Totalmente acessível com ARIA labels

**Responsividade:**
- Desktop: Barra lateral fixa
- Mobile: Escondida, substituída por navegação dropdown

### 2. Navegação Móvel

**Implementação:**
- Dropdown expansível com `<details>` e `<summary>`
- Auto-fechamento após seleção de link
- Ícone rotativo para indicar estado

**Vantagens:**
- Sem JavaScript complexo
- Acessibilidade nativa do HTML5
- Performance otimizada

### 3. Estrutura de Seções

```typescript
const sectionList = [
  { id: 'conceitos', label: 'Conceitos sobre violência' },
  { id: 'notificacao', label: 'O que é notificação?' },
  { id: 'interpessoal', label: 'Violência interpessoal' },
  { id: 'autoprovocada', label: 'Violência autoprovocada' },
  { id: 'exercicios', label: 'Exercícios (Quiz)' },
  { id: 'casos', label: 'Estudo de caso' },
];
```

**Scroll Behavior:**
- `scroll-margin-top: 6rem` para compensar header fixo
- Scroll suave nativo do browser
- Âncoras semânticas com IDs descritivos

### 4. Centralização de Dados

**Arquivo:** `src/data/aplicativoVivaData.ts`

**Conteúdo Extraído:**
- ✅ Questões do Quiz com respostas
- ✅ Casos de estudo com relatos e objetivos
- ✅ Dados conceituais sobre violência
- ✅ Informações sobre violência interpessoal
- ✅ Conteúdo sobre violência autoprovocada
- ✅ Links de download e referências

**Benefícios:**
- Manutenção centralizada
- Reutilização em outras páginas
- Tipagem TypeScript consistente
- Separação clara entre dados e UI

### 5. Componentes Reutilizáveis

#### Quiz Component (`QuizComponent.tsx`)
```tsx
interface QuizProps {
  questions: QuizQuestion[];
  answers: Record<string, boolean>;
  onAnswer: (questionId: string, isCorrect: boolean) => void;
}
```

**Funcionalidades:**
- Estados visuais para respostas corretas/incorretas
- Desabilitação após resposta
- Feedback visual imediato
- Totalmente tipado

#### Accordion Atualizado
**Mudanças:**
- Aceita `ReactNode` em vez de apenas strings
- Renderização direta de JSX (sem `dangerouslySetInnerHTML`)
- Compatibilidade com sistema de tipos centralizado

### 6. Sistema de Estilos

**CSS Adicionado:**
```css
.scroll-mt-24 { scroll-margin-top: 6rem; }
.quiz-container { /* estilos do quiz */ }
.case-study { /* estilos dos casos */ }
```

**Classes Tailwind:**
- Layout flexível com `flex gap-8`
- Responsividade com `hidden lg:block`
- Estados de hover e focus
- Espaçamentos consistentes

### 7. Acessibilidade

**Implementações:**
- ✅ Skip links para conteúdo principal
- ✅ ARIA labels descritivos
- ✅ Estrutura semântica com `<nav>`, `<section>`, `<article>`
- ✅ Focus management adequado
- ✅ Contraste e estados visuais claros

### 8. SEO e Meta Tags

**Implementação:**
```tsx
<SEO 
  title="Aplicativo Viva - Conceitos sobre Violência e Notificação"
  description="Aprenda sobre conceitos de violência, tipos, naturezas e processo de notificação..."
  keywords="violência, notificação, VIVA, saúde pública, prevenção"
/>
```

## Vantagens do Layout Unificado

### 1. **Experiência do Usuário**
- ✅ Navegação rápida entre seções
- ✅ Contexto preservado
- ✅ Scroll position inteligente
- ✅ Menos carregamentos de página

### 2. **Performance**
- ✅ Single Page Application (SPA) benefits
- ✅ Lazy loading mantido para outras páginas
- ✅ CSS/JS compartilhado
- ✅ Cache otimizado

### 3. **Manutenibilidade**
- ✅ Dados centralizados
- ✅ Componentes reutilizáveis
- ✅ Tipagem consistente
- ✅ Separação de responsabilidades

### 4. **Acessibilidade**
- ✅ Navegação por teclado
- ✅ Screen readers friendly
- ✅ Landmarks ARIA
- ✅ Estados visuais claros

### 5. **Responsividade**
- ✅ Layout adaptativo
- ✅ Navegação específica por dispositivo
- ✅ Touch-friendly em mobile
- ✅ Performance em dispositivos lentos

## Uso da Implementação

### Navegação Desktop
1. Usuário vê barra lateral com índice
2. Clica em qualquer seção
3. Scroll automático para âncora
4. Contexto visual mantido

### Navegação Mobile
1. Usuário vê dropdown "Índice da página"
2. Expande para ver opções
3. Seleciona seção desejada
4. Dropdown fecha automaticamente

### Interação com Quiz
1. Usuário responde questões
2. Feedback visual imediato
3. Botões desabilitam após resposta
4. Estado preservado durante navegação

### Estudo de Casos
1. Layout limpo com cards
2. Imagens quando disponíveis
3. Estrutura consistente
4. Fácil escaneamento visual

## Futuras Melhorias

### 1. **Indicador de Progresso**
- Barra de progresso baseada em scroll
- Destaque da seção atual na navegação

### 2. **Busca Interna**
- Campo de busca para encontrar conteúdo
- Highlighting de resultados

### 3. **Favoritos**
- Marcar seções importantes
- Bookmark persistence

### 4. **Print Styles**
- CSS otimizado para impressão
- Quebras de página inteligentes

## Conclusão

A implementação do layout unificado transforma a experiência do usuário de fragmentada para fluida, mantendo toda a funcionalidade educativa enquanto melhora significativamente a navegabilidade e acessibilidade. O sistema é escalável e pode ser aplicado a outras páginas do projeto com adaptações mínimas.
