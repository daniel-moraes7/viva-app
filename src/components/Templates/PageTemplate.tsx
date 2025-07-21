import React from 'react';
import { motion } from 'framer-motion';
import { PageData } from '../../types/pageData';
import { SEO } from '../SEO/SEO';
import Accordion from '../UI/Accordion';
import { LinkButton, PdfButton, DownloadButton } from '../UI/LinkButton';

interface PageTemplateProps {
  data: PageData;
  children?: React.ReactNode;
  customContent?: React.ReactNode;
  accordionId?: string;
}

export const PageTemplate: React.FC<PageTemplateProps> = ({ 
  data, 
  children, 
  customContent,
  accordionId = 'main-accordion'
}) => {

  return (
    <>
      <SEO {...data.seo} />
      
      <motion.div
        className="container py-4"
        tabIndex={-1}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* Conteúdo customizado no topo */}
        {customContent}
        
        {/* Conteúdo padrão passado via children */}
        {children}
        
        {/* Links de downloads/PDFs */}
        {data.links && data.links.length > 0 && (
          <motion.section
            className="links-section mb-5"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 className="h4 mb-3 text-primary">
              <i className="fas fa-download me-2" aria-hidden="true"></i>
              Downloads e Links Úteis
            </h2>
            <div className="row">
              {data.links.map((link, index) => (
                <div key={index} className="col-md-6 col-lg-4 mb-3">
                  {link.icon === 'fa-file-pdf' ? (
                    <PdfButton 
                      href={link.href} 
                      external={link.external}
                      aria-label={link.description}
                    >
                      {link.title}
                    </PdfButton>
                  ) : link.icon === 'fa-download' ? (
                    <DownloadButton 
                      href={link.href} 
                      external={link.external}
                      aria-label={link.description}
                    >
                      {link.title}
                    </DownloadButton>
                  ) : (
                    <LinkButton 
                      href={link.href} 
                      external={link.external}
                      icon={link.icon}
                      aria-label={link.description}
                    >
                      {link.title}
                    </LinkButton>
                  )}
                </div>
              ))}
            </div>
          </motion.section>
        )}
        
        {/* Accordion principal */}
        {data.accordionItems && data.accordionItems.length > 0 && (
          <motion.section
            className="content-section"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Accordion 
              id={accordionId}
              items={data.accordionItems}
              className="mb-4"
            />
          </motion.section>
        )}
      </motion.div>
    </>
  );
};
