import React from 'react';
import Layout from '../components/Layout/Layout';
import { motion } from 'framer-motion';

const ExamplePage: React.FC = () => {
  const breadcrumbItems = [
    { label: 'Exemplos', path: '/exemplos' },
    { label: 'Animações' }
  ];

  return (
    <Layout
      showMainHeader={true}
      title="Exemplo de Animações"
      showBreadcrumb={true}
      breadcrumbItems={breadcrumbItems}
      className="example-page"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="fade-in-up"
      >
        <h2 className="fade-in">Demonstração dos Componentes Animados</h2>
        
        <div className="card fade-in-up" style={{ animationDelay: '0.1s' }}>
          <h3>🎬 Animações com Framer Motion</h3>
          <p>
            Os componentes Header, Footer e Layout agora usam Framer Motion para 
            animações mais suaves e profissionais.
          </p>
          
          <h4>✨ Novos Recursos:</h4>
          <ul>
            <li><strong>Header animado:</strong> Aparece suavemente de cima</li>
            <li><strong>Footer sequencial:</strong> Elementos aparecem em cascata</li>
            <li><strong>Menu mobile:</strong> Desliza da direita com animação</li>
            <li><strong>Foco automático:</strong> Screen readers navegam melhor</li>
            <li><strong>Skip link:</strong> Acessibilidade aprimorada</li>
          </ul>
        </div>

        <div className="card fade-in-up" style={{ animationDelay: '0.2s' }}>
          <h3>📱 Menu Mobile Acessível</h3>
          <p>
            O menu mobile agora possui:
          </p>
          <ul>
            <li><code>aria-expanded</code> - Indica se está aberto/fechado</li>
            <li><code>aria-controls</code> - Associa botão ao menu</li>
            <li><strong>Bloqueio de scroll</strong> - Previne scroll da página</li>
            <li><strong>Animação fluida</strong> - Desliza suavemente</li>
            <li><strong>Ícone animado</strong> - Hamburger vira X</li>
          </ul>
        </div>

        <div className="card fade-in-up" style={{ animationDelay: '0.3s' }}>
          <h3>🔗 Links Interativos</h3>
          <p>Exemplos de links com animações:</p>
          
          <div style={{ marginBottom: '1rem' }}>
            <a href="#" className="interactive-link">
              <span className="link-text">Link com sublinhado crescente</span>
              <span className="link-underline"></span>
            </a>
          </div>
          
          <div style={{ marginBottom: '1rem' }}>
            <a href="#" className="interactive-link" style={{ color: 'var(--color-primary)' }}>
              <span className="link-text">Link colorido animado</span>
              <span className="link-underline"></span>
            </a>
          </div>
          
          <div>
            <span>Texto com </span>
            <a href="#" className="interactive-link">
              <span className="link-text">link inline</span>
              <span className="link-underline"></span>
            </a>
            <span> animado no meio da frase.</span>
          </div>
        </div>

        <div className="card fade-in-up" style={{ animationDelay: '0.4s' }}>
          <h3>
            <span className="icon-animate">🎯</span> Performance e Acessibilidade
          </h3>
          <p>
            Todas as animações respeitam as preferências do usuário:
          </p>
          <ul>
            <li><strong>prefers-reduced-motion:</strong> Desabilita animações se solicitado</li>
            <li><strong>Lazy loading:</strong> Imagens carregam quando necessário</li>
            <li><strong>Focus management:</strong> Navegação por teclado otimizada</li>
            <li><strong>ARIA labels:</strong> Screen readers bem informados</li>
          </ul>
        </div>

        <motion.div
          className="completion-message fade-in-up"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.3 }}
          style={{
            background: 'var(--color-success-bg)',
            color: 'var(--color-success-text)',
            padding: 'var(--spacing-4)',
            borderRadius: 'var(--radius-md)',
            textAlign: 'center',
            marginTop: 'var(--spacing-5)'
          }}
        >
          <h3>
            <span className="icon-animate">🚀</span> Sistema Completo!
          </h3>
          <p style={{ marginBottom: 0 }}>
            Animações, acessibilidade e performance otimizados para uma 
            experiência de usuário excepcional.
          </p>
        </motion.div>
      </motion.div>
    </Layout>
  );
};

export default ExamplePage;
