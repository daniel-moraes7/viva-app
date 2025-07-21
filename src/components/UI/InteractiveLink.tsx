import React from 'react';

interface InteractiveLinkProps {
  href?: string;
  onClick?: () => void;
  children: React.ReactNode;
  className?: string;
  external?: boolean;
}

const InteractiveLink: React.FC<InteractiveLinkProps> = ({
  href,
  onClick,
  children,
  className = '',
  external = false
}) => {
  const handleClick = (e: React.MouseEvent) => {
    if (onClick) {
      e.preventDefault();
      onClick();
    }
  };

  const linkProps = {
    className: `interactive-link ${className}`,
    onClick: handleClick,
    ...(external && { target: '_blank', rel: 'noopener noreferrer' })
  };

  return (
    <a href={href} {...linkProps}>
      <span className="link-text">{children}</span>
      <span className="link-underline" aria-hidden="true"></span>
    </a>
  );
};

export default InteractiveLink;

// Exemplo de uso:
export const InteractiveLinkExample: React.FC = () => {
  return (
    <div className="fade-in-up" style={{ padding: '2rem' }}>
      <h2 className="fade-in">Exemplos de Links Interativos</h2>
      
      <div style={{ marginBottom: '1rem' }}>
        <InteractiveLink href="https://example.com" external>
          Link externo com animação
        </InteractiveLink>
      </div>
      
      <div style={{ marginBottom: '1rem' }}>
        <InteractiveLink onClick={() => alert('Clicou!')}>
          Link com ação customizada
        </InteractiveLink>
      </div>
      
      <div style={{ marginBottom: '1rem' }}>
        <InteractiveLink href="#section" className="text-primary">
          Link interno com classe customizada
        </InteractiveLink>
      </div>
      
      <div>
        <span>Texto com </span>
        <InteractiveLink href="#" onClick={() => console.log('Inline link')}>
          link inline animado
        </InteractiveLink>
        <span> no meio da frase.</span>
      </div>
    </div>
  );
};
