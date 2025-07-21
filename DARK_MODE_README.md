# 🌙 Dark Mode Implementation

Implementação completa de dark mode para a aplicação VIVA usando CSS Custom Properties e React.

## ✨ Características

- **Tema automático**: Detecta a preferência do sistema operacional
- **Persistência**: Lembra da escolha do usuário no localStorage
- **Transições suaves**: Animações fluidas na mudança de tema
- **Acessibilidade**: Suporte completo a screen readers e navegação por teclado
- **Performance**: Usa CSS Custom Properties para mudanças instantâneas

## 🚀 Como Usar

### 1. Componente React (Recomendado)

```tsx
import React, { useEffect } from 'react';
import { initializeTheme } from './utils/darkMode';
import ThemeToggle from './components/UI/ThemeToggle';

function App() {
  useEffect(() => {
    initializeTheme();
  }, []);

  return (
    <div className="app-layout">
      <ThemeToggle />
      {/* Resto da aplicação */}
    </div>
  );
}
```

### 2. JavaScript Vanilla

```html
<!-- No HTML -->
<button class="theme-toggle" onclick="toggleDarkMode()">
  <span id="theme-icon">🌙</span>
</button>
```

```javascript
// No JavaScript
import { darkModeUtils } from './utils/darkMode';

document.addEventListener('DOMContentLoaded', () => {
  darkModeUtils.initializeTheme();
  updateThemeIcon();
});

function toggleDarkMode() {
  darkModeUtils.toggleTheme();
  updateThemeIcon();
}

function updateThemeIcon() {
  const icon = document.getElementById('theme-icon');
  const isDark = darkModeUtils.getCurrentTheme() === 'dark';
  if (icon) {
    icon.textContent = isDark ? '☀️' : '🌙';
  }
}
```

## 🎨 Variáveis CSS Disponíveis

### Cores Principais
```css
:root {
  --color-bg: #f8f9fa;              /* Fundo principal */
  --color-bg-secondary: #ffffff;     /* Fundo secundário */
  --color-text: #495057;             /* Texto principal */
  --color-text-secondary: #6c757d;   /* Texto secundário */
  --color-text-heading: #212529;     /* Títulos */
  --color-primary: #0d6efd;          /* Cor primária */
  --color-border: #e9ecef;           /* Bordas */
}
```

### Tema Escuro
```css
[data-theme="dark"] {
  --color-bg: #121212;
  --color-bg-secondary: #1e1e1e;
  --color-text: #e0e0e0;
  --color-text-secondary: #a0a0a0;
  --color-text-heading: #ffffff;
  --color-primary: #4dabf7;
  --color-border: #333333;
}
```

## 🔧 Personalização

### Adicionando Novas Variáveis

1. Adicione no `:root` para o tema claro:
```css
:root {
  --minha-cor-custom: #ff6b6b;
}
```

2. Adicione no `[data-theme="dark"]` para o tema escuro:
```css
[data-theme="dark"] {
  --minha-cor-custom: #ff8787;
}
```

3. Use no seu CSS:
```css
.meu-componente {
  background-color: var(--minha-cor-custom);
}
```

### Criando Componentes Themáveis

```css
.meu-card {
  background-color: var(--color-bg-secondary);
  color: var(--color-text);
  border: 1px solid var(--color-border);
  transition: all var(--trans-medium);
}
```

## 🎯 Benefícios da Implementação

### ✅ Performance
- **CSS Custom Properties**: Mudanças instantâneas sem re-render
- **Transições otimizadas**: Usando variáveis para timing consistente
- **Sem flash**: Carregamento suave do tema inicial

### ✅ Acessibilidade
- **Respeita preferências do sistema**: `prefers-color-scheme`
- **Contraste otimizado**: Cores ajustadas para cada tema
- **Navegação por teclado**: Botão focável e acessível

### ✅ Experiência do Usuário
- **Persistência**: Lembra da escolha entre sessões
- **Feedback visual**: Ícones indicativos do tema atual
- **Transições suaves**: Mudanças animadas

### ✅ Manutenibilidade
- **Sistema centralizado**: Todas as cores em variáveis
- **Fácil personalização**: Adicionar novos temas é simples
- **Código limpo**: Separação clara entre lógica e apresentação

## 🔍 Detecção de Tema do Sistema

A implementação detecta automaticamente a preferência do usuário:

```javascript
// Detecta tema escuro do sistema
if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
  return 'dark';
}

// Escuta mudanças na preferência
mediaQuery.addEventListener('change', (e) => {
  const systemTheme = e.matches ? 'dark' : 'light';
  applyTheme(systemTheme);
});
```

## 📱 Suporte Mobile

O dark mode funciona perfeitamente em dispositivos móveis:

- **iOS**: Respeita a configuração de "Aparência" 
- **Android**: Respeita o "Tema escuro" do sistema
- **Browsers mobile**: Suporte completo ao `prefers-color-scheme`

## 🧪 Testando

Para testar a implementação:

1. **Teste manual**: Clique no botão de toggle
2. **Teste do sistema**: Mude a preferência do SO
3. **Teste de persistência**: Recarregue a página
4. **Teste de acessibilidade**: Use navegação por teclado

## 🎭 Estados Visuais

### Botão de Toggle
- **Idle**: Ícone da lua (tema claro) ou sol (tema escuro)
- **Hover**: Escala 1.1x com shadow aumentado
- **Focus**: Outline visível para acessibilidade
- **Active**: Feedback tátil na mudança

### Transições
- **Cores**: 0.3s ease para mudanças suaves
- **Elementos**: Mantém animações existentes
- **Performance**: GPU-accelerated quando possível

Essa implementação fornece uma base sólida e extensível para dark mode, seguindo as melhores práticas de acessibilidade e performance! 🚀
