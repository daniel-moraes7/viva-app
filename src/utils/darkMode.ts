/**
 * Dark Mode Theme Toggle Utility
 * Gerencia a alternância entre temas claro e escuro
 */

import React from 'react';

export type Theme = 'light' | 'dark';

const THEME_KEY = 'viva-app-theme';

/**
 * Obtém o tema atual do localStorage ou detecta a preferência do sistema
 */
export function getCurrentTheme(): Theme {
  // Verifica se há um tema salvo no localStorage
  const savedTheme = localStorage.getItem(THEME_KEY) as Theme;
  if (savedTheme && (savedTheme === 'light' || savedTheme === 'dark')) {
    return savedTheme;
  }
  
  // Se não há tema salvo, detecta a preferência do sistema
  if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    return 'dark';
  }
  
  return 'light';
}

/**
 * Aplica o tema ao documento
 */
export function applyTheme(theme: Theme): void {
  const root = document.documentElement;
  
  if (theme === 'dark') {
    root.setAttribute('data-theme', 'dark');
  } else {
    root.removeAttribute('data-theme');
  }
  
  // Salva o tema no localStorage
  localStorage.setItem(THEME_KEY, theme);
}

/**
 * Alterna entre os temas
 */
export function toggleTheme(): Theme {
  const currentTheme = getCurrentTheme();
  const newTheme: Theme = currentTheme === 'light' ? 'dark' : 'light';
  
  applyTheme(newTheme);
  return newTheme;
}

/**
 * Inicializa o sistema de temas
 */
export function initializeTheme(): void {
  const theme = getCurrentTheme();
  applyTheme(theme);
  
  // Escuta mudanças na preferência do sistema
  if (window.matchMedia) {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    mediaQuery.addEventListener('change', (e) => {
      // Só aplica automaticamente se não há preferência salva
      if (!localStorage.getItem(THEME_KEY)) {
        const systemTheme: Theme = e.matches ? 'dark' : 'light';
        applyTheme(systemTheme);
      }
    });
  }
}

/**
 * Hook React para gerenciar o tema
 */
export function useTheme() {
  const [theme, setTheme] = React.useState<Theme>(getCurrentTheme);
  
  const toggle = React.useCallback(() => {
    const newTheme = toggleTheme();
    setTheme(newTheme);
  }, []);
  
  React.useEffect(() => {
    initializeTheme();
    setTheme(getCurrentTheme());
  }, []);
  
  return { theme, toggle };
}

// Para uso em componentes que não são React
export const darkModeUtils = {
  getCurrentTheme,
  applyTheme,
  toggleTheme,
  initializeTheme,
};
