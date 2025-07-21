import React from 'react';
import { Helmet } from 'react-helmet-async';
import { PageSEO } from '../../types/pageData';

interface SEOProps extends PageSEO {
  children?: React.ReactNode;
}

export const SEO: React.FC<SEOProps> = ({ 
  title, 
  description, 
  keywords,
  children 
}) => {
  const siteTitle = 'VIVA - Vigilância de Violências e Acidentes';
  const fullTitle = title.includes('–') ? title : `${title} – ${siteTitle}`;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:site_name" content={siteTitle} />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      
      {/* Additional SEO */}
      <meta name="robots" content="index, follow" />
      <meta name="author" content="Ministério da Saúde - Cgviva" />
      <link rel="canonical" href={window.location.href} />
      
      {children}
    </Helmet>
  );
};
