import React from 'react';
import { useTheme } from '../../utils/darkMode';

/**
 * Componente do botão de toggle do dark mode
 */
export const ThemeToggle: React.FC = () => {
  const { theme, toggle } = useTheme();
  
  const isDark = theme === 'dark';
  
  return (
    <button
      className="theme-toggle"
      onClick={toggle}
      aria-label={`Alternar para tema ${isDark ? 'claro' : 'escuro'}`}
      title={`Alternar para tema ${isDark ? 'claro' : 'escuro'}`}
    >
      {isDark ? '☀️' : '🌙'}
    </button>
  );
};

export default ThemeToggle;
