# 🎬 Sistema de Animações CSS

Documentação completa das animações implementadas no projeto VIVA.

## ✨ Animações Disponíveis

### 1. **fadeIn** - Aparece suavemente
```css
@keyframes fadeIn {
  from { opacity: 0; }
  to   { opacity: 1; }
}
```

**Uso:**
```html
<div class="fade-in">Conteúdo que aparece suavemente</div>
```

### 2. **fadeInUp** - Aparece subindo
```css
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
```

**Uso:**
```html
<div class="fade-in-up">Conteúdo que sobe ao aparecer</div>
```

### 3. **iconBounce** - Ícone que quica
```css
@keyframes iconBounce {
  0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
  40%                    { transform: translateY(-4px); }
  60%                    { transform: translateY(-2px); }
}
```

**Uso:**
```html
<i class="fas fa-star icon-animate"></i>
```

## 🔗 Links Interativos

### Link com sublinhado crescente
```html
<a href="#" class="interactive-link">
  <span class="link-text">Texto do link</span>
  <span class="link-underline"></span>
</a>
```

## 🚀 Exemplos Práticos React

### Componente Quiz Animado
```tsx
// Animação escalonada nas questões
{questions.map((question, index) => (
  <div 
    key={question.id}
    className="question fade-in-up"
    style={{ animationDelay: `${index * 0.1}s` }}
  >
    {/* Conteúdo da questão */}
  </div>
))}
```

### Ícones de Feedback
```tsx
// Ícone animado para sucesso
{isCorrect && (
  <div className="text-success fade-in">
    <i className="fas fa-check-circle icon-animate"></i>
  </div>
)}
```

### Mensagem de Conclusão
```tsx
// Aparece com animação quando quiz é completado
{isCompleted && (
  <div className="completion-message fade-in-up">
    <h3>
      <span className="icon-animate">🎉</span> Parabéns!
    </h3>
  </div>
)}
```

## 🎯 Timing e Performance

### Variáveis de Timing
```css
:root {
  --trans-fast: 0.2s ease;    /* Animações rápidas */
  --trans-medium: 0.3s ease;  /* Animações médias */
}
```

### Delays Escalonados
```css
/* Para criar efeito de cascata */
.item:nth-child(1) { animation-delay: 0.0s; }
.item:nth-child(2) { animation-delay: 0.1s; }
.item:nth-child(3) { animation-delay: 0.2s; }
```

## 🎨 Casos de Uso

### 1. **Entrada de Conteúdo**
- Páginas carregando: `fade-in`
- Cards aparecendo: `fade-in-up`
- Listas de itens: `fade-in-up` com delay escalonado

### 2. **Feedback Visual**
- Ícones de sucesso: `icon-animate`
- Mensagens de erro/sucesso: `fade-in-up`
- Botões de confirmação: `fade-in`

### 3. **Navegação**
- Links de menu: `interactive-link`
- Botões de ação: hover com `transform`
- Breadcrumbs: `interactive-link`

### 4. **Estados de Loading**
- Spinners: usando `icon-animate` ou `spin`
- Skeleton screens: `fade-in` quando carrega
- Progress bars: transições suaves

## 📱 Responsividade

### Reduzir Animações em Mobile
```css
@media (prefers-reduced-motion: reduce) {
  .fade-in,
  .fade-in-up,
  .icon-animate {
    animation: none;
  }
  
  .interactive-link .link-text {
    transform: none;
  }
}
```

### Performance em Dispositivos Lentos
```css
/* Usar will-change para otimizar */
.fade-in-up {
  will-change: opacity, transform;
}

/* Remover após animação */
.fade-in-up.animation-complete {
  will-change: auto;
}
```

## 🧪 Testando Animações

### Depuração
```css
/* Classe para debug - torna animações mais lentas */
.debug-animations * {
  animation-duration: 2s !important;
  transition-duration: 2s !important;
}
```

### Controle Manual
```javascript
// Pausar todas as animações
document.documentElement.style.setProperty('--trans-fast', '0s');
document.documentElement.style.setProperty('--trans-medium', '0s');

// Restaurar
document.documentElement.style.removeProperty('--trans-fast');
document.documentElement.style.removeProperty('--trans-medium');
```

## 🎬 Combinações Populares

### Card de Conteúdo
```html
<div class="card fade-in-up">
  <h3 class="fade-in">Título</h3>
  <p class="fade-in">Descrição do conteúdo...</p>
  <a href="#" class="interactive-link">
    <span class="link-text">Saiba mais</span>
    <span class="link-underline"></span>
  </a>
</div>
```

### Lista de Notícias
```html
<div class="news-list">
  <article class="news-item fade-in-up" style="animation-delay: 0.0s">...</article>
  <article class="news-item fade-in-up" style="animation-delay: 0.1s">...</article>
  <article class="news-item fade-in-up" style="animation-delay: 0.2s">...</article>
</div>
```

### Modal com Animação
```html
<div class="modal fade-in">
  <div class="modal-content fade-in-up">
    <h2>Título do Modal</h2>
    <button class="interactive-link">
      <span class="link-text">Fechar</span>
      <span class="link-underline"></span>
    </button>
  </div>
</div>
```

## 🔧 Customizações Avançadas

### Criar Nova Animação
```css
@keyframes slideInLeft {
  from {
    opacity: 0;
    transform: translateX(-20px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

.slide-in-left {
  animation: slideInLeft var(--trans-medium) both;
}
```

### Animação Condicional
```css
/* Só anima se o usuário preferir movimento */
@media (prefers-reduced-motion: no-preference) {
  .conditional-animation {
    animation: fadeInUp var(--trans-medium) both;
  }
}
```

### Animação com JavaScript
```javascript
// Adicionar animação via JS
element.classList.add('fade-in-up');

// Remover após completar
element.addEventListener('animationend', () => {
  element.classList.remove('fade-in-up');
});
```

Essas animações tornam a interface mais dinâmica e profissional, melhorando significativamente a experiência do usuário! 🚀✨
