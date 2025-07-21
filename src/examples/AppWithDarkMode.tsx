/**
 * Exemplo de integração do Dark Mode no App.tsx
 * 
 * Para usar o dark mode na sua aplicação:
 * 
 * 1. Importe e use o ThemeToggle component
 * 2. Inicialize o tema no App.tsx
 */

import { useEffect } from 'react';
import { initializeTheme } from '../utils/darkMode';
import ThemeToggle from '../components/UI/ThemeToggle';
// import outros componentes...

function App() {
  // Inicializa o tema quando a aplicação carrega
  useEffect(() => {
    initializeTheme();
  }, []);

  return (
    <div className="app-layout">
      {/* Botão de toggle do tema */}
      <ThemeToggle />
      
      {/* Resto da sua aplicação */}
      <header className="main-header">
        {/* Header content */}
      </header>
      
      <main className="main-content">
        {/* Main content */}
      </main>
      
      <footer className="main-footer">
        {/* Footer content */}
      </footer>
    </div>
  );
}

export default App;

/**
 * Alternativa sem React Hook (para uso direto no HTML/JavaScript)
 * 
 * No seu HTML, adicione:
 * 
 * <button class="theme-toggle" onclick="toggleDarkMode()" aria-label="Alternar tema">
 *   <span id="theme-icon">🌙</span>
 * </button>
 * 
 * E no JavaScript:
 * 
 * import { darkModeUtils } from './utils/darkMode';
 * 
 * // Inicializar ao carregar a página
 * document.addEventListener('DOMContentLoaded', () => {
 *   darkModeUtils.initializeTheme();
 *   updateThemeIcon();
 * });
 * 
 * function toggleDarkMode() {
 *   darkModeUtils.toggleTheme();
 *   updateThemeIcon();
 * }
 * 
 * function updateThemeIcon() {
 *   const icon = document.getElementById('theme-icon');
 *   const isDark = darkModeUtils.getCurrentTheme() === 'dark';
 *   if (icon) {
 *     icon.textContent = isDark ? '☀️' : '🌙';
 *   }
 * }
 */
