import React from 'react';
import { motion } from 'framer-motion';
import { CaseStudyItem } from '../../types/pageData';

interface CaseStudyProps extends CaseStudyItem {
  className?: string;
}

export const CaseStudy: React.FC<CaseStudyProps> = ({
  title,
  relato,
  objetivo,
  image,
  points,
  className = ''
}) => {
  return (
    <motion.div
      className={`case-study card mb-4 ${className}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {image && (
        <div className="card-img-top">
          <img 
            src={image} 
            alt={title}
            className="w-100"
            style={{ height: '200px', objectFit: 'cover' }}
          />
        </div>
      )}
      
      <div className="card-body">
        <h3 className="card-title h4 text-primary mb-3">
          <i className="fas fa-file-medical me-2" aria-hidden="true"></i>
          {title}
        </h3>
        
        <div className="case-relato mb-4">
          <h4 className="h5 text-secondary mb-2">
            <i className="fas fa-quote-left me-2" aria-hidden="true"></i>
            Relato do Caso
          </h4>
          <p className="text-muted fst-italic border-start border-primary ps-3">
            {relato}
          </p>
        </div>
        
        <div className="case-objetivo mb-4">
          <h4 className="h5 text-secondary mb-2">
            <i className="fas fa-bullseye me-2" aria-hidden="true"></i>
            Objetivo
          </h4>
          <p>{objetivo}</p>
        </div>
        
        {points && points.length > 0 && (
          <div className="case-points">
            <h4 className="h5 text-secondary mb-3">
              <i className="fas fa-list-check me-2" aria-hidden="true"></i>
              Pontos Importantes
            </h4>
            <ul className="list-group list-group-flush">
              {points.map((point, index) => (
                <motion.li
                  key={index}
                  className="list-group-item border-0 ps-0"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <i className="fas fa-check-circle text-success me-2" aria-hidden="true"></i>
                  {point}
                </motion.li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </motion.div>
  );
};
