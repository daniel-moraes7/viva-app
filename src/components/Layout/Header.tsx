import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';

interface HeaderProps {
  title?: string;
  showBreadcrumb?: boolean;
  breadcrumbItems?: Array<{ label: string; path?: string }>;
}

const Header: React.FC<HeaderProps> = ({
  title = "Vigilância de Violência e Acidentes",
  showBreadcrumb = false,
  breadcrumbItems = []
}) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(o => !o);

  // Bloqueia scroll quando menu está aberto
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  return (
    <motion.header
      className="main-header"
      role="banner"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container">
        <Link to="/" className="header-logo-link" aria-label="Voltar para a página inicial">
          <img
            src="/img/logoVIVA-PeB.png"
            alt="Logo VIVA - Vigilância de Violências e Acidentes"
            className="header-logo"
            loading="eager"
          />
        </Link>

        <motion.div
          className="header-content"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h1 className="header-title">
            {title}
            <span className="header-underline" aria-hidden="true" />
          </h1>

          {showBreadcrumb && breadcrumbItems.length > 0 && (
            <nav aria-label="Você está aqui" className="breadcrumb-nav">
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <Link to="/">Início</Link>
                </li>
                {breadcrumbItems.map((item, idx) => (
                  <li
                    key={idx}
                    className={`breadcrumb-item ${idx === breadcrumbItems.length - 1 ? 'active' : ''}`}
                    {...(idx === breadcrumbItems.length - 1 && { 'aria-current': 'page' })}
                  >
                    {item.path && idx < breadcrumbItems.length - 1
                      ? <Link to={item.path}>{item.label}</Link>
                      : item.label}
                  </li>
                ))}
              </ol>
            </nav>
          )}
        </motion.div>

        <button
          className="mobile-menu-button d-md-none"
          aria-label="Menu de navegação"
          aria-expanded={menuOpen}
          aria-controls="mobile-nav"
          onClick={toggleMenu}
        >
          <span className="hamburger-line" />
          <span className="hamburger-line" />
          <span className="hamburger-line" />
        </button>

        {menuOpen && (
          <motion.nav
            id="mobile-nav"
            className="mobile-nav d-md-none"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.3 }}
          >
            <ul>
              <li><NavLink to="/" onClick={toggleMenu}>Início</NavLink></li>
              {/* adicione outros links aqui */}
            </ul>
          </motion.nav>
        )}
      </div>
    </motion.header>
  );
};

export default Header