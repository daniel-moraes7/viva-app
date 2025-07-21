import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const footerVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0 }
};

const Footer: React.FC = () => (
  <motion.footer
    className="main-footer enhanced-footer"
    role="contentinfo"
    aria-label="Informações do rodapé"
    initial="hidden"
    animate="visible"
    variants={footerVariants}
    transition={{ duration: 0.4 }}
  >
    <div className="container">
      <div className="footer-content">
        <motion.div
          className="footer-info fade-in-up"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.3 }}
        >
          <p className="mb-1 footer-copyright">
            &copy; 2025 Cgviva | Daent | Svsa - Todos os direitos reservados.
          </p>
          <Link
            to="/sobre-desenvolvedores"
            className="footer-link interactive-link"
            aria-label="Página sobre os desenvolvedores"
          >
            <i className="fa-solid fa-user-gear me-1 icon-animate" aria-hidden="true" />
            <span className="link-text">Sobre os desenvolvedores</span>
            <span className="link-underline" />
          </Link>
        </motion.div>
        <motion.div
          className="footer-logo fade-in"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.3 }}
        >
          <img
            src="/img/Logo Topo Bandeira.png"
            alt="Bandeira do Brasil"
            className="brazil-flag"
            loading="lazy"
          />
        </motion.div>
      </div>
    </div>
  </motion.footer>
);

export default Footer;