import React from 'react';
import { motion } from 'framer-motion';

interface LinkButtonProps {
  href: string;
  children: React.ReactNode;
  external?: boolean;
  icon?: string;
  className?: string;
  'aria-label'?: string;
}

export const LinkButton: React.FC<LinkButtonProps> = ({ 
  href, 
  external = false, 
  children, 
  icon = 'fa-external-link-alt',
  className = '',
  'aria-label': ariaLabel,
  ...props 
}) => {
  const Component = motion.a;
  
  return (
    <Component
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
      className={`btn btn-outline-primary mb-3 d-inline-flex align-items-center gap-2 ${className}`}
      aria-label={ariaLabel || `${children} ${external ? '(abre em nova aba)' : ''}`}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      {...props}
    >
      <i className={`fas ${icon} me-1`} aria-hidden="true" />
      {children}
      {external && <i className="fas fa-external-link-alt ms-1" aria-hidden="true" />}
    </Component>
  );
};

// Componente específico para PDFs
export const PdfButton: React.FC<Omit<LinkButtonProps, 'icon'>> = (props) => {
  return <LinkButton {...props} icon="fa-file-pdf" />;
};

// Componente específico para downloads
export const DownloadButton: React.FC<Omit<LinkButtonProps, 'icon'>> = (props) => {
  return <LinkButton {...props} icon="fa-download" />;
};
