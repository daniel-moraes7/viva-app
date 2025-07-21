import React, { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

interface LayoutProps {
  children: React.ReactNode;
  showMainHeader?: boolean;
  title?: string;
  className?: string;
  showBreadcrumb?: boolean;
  breadcrumbItems?: Array<{ label: string; path?: string }>;
}

const Layout: React.FC<LayoutProps> = ({
  children,
  showMainHeader = false,
  title,
  className = '',
  showBreadcrumb = false,
  breadcrumbItems = []
}) => {
  const mainRef = useRef<HTMLElement>(null);
  const { pathname } = useLocation();

  // Ao mudar de rota, foca o main para o screen reader
  useEffect(() => {
    mainRef.current?.focus();
  }, [pathname]);

  return (
    <div className={`app-layout ${className}`}>
      <a href="#main-content" className="skip-link">
        Pular para o conteúdo principal
      </a>

      {showMainHeader && (
        <Header
          title={title}
          showBreadcrumb={showBreadcrumb}
          breadcrumbItems={breadcrumbItems}
        />
      )}

      <main
        id="main-content"
        className="main-content"
        role="main"
        tabIndex={-1}
        ref={mainRef}
        aria-live="polite"
      >
        <div className="container">
          {children}
        </div>
      </main>

      <Footer />

      {/* Footer Brasil - Componente do governo */}
      <div id="footer-brasil" aria-hidden="true" />
    </div>
  );
};

export default Layout