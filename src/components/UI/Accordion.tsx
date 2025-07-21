import React, { ReactNode } from 'react'
import { AccordionItem as AccordionItemType } from '../../types/pageData'

interface AccordionProps {
  id: string
  items: AccordionItemType[]
  className?: string
}

interface AccordionItemProps {
  id: string
  title: string
  icon?: string
  children: ReactNode
  isOpen?: boolean
  parentId: string
  className?: string
}

const Accordion: React.FC<AccordionProps> = ({ id, items, className = "" }) => {
  return (
    <div className={`accordion ${className}`} id={id} role="region" aria-label="Seções de conteúdo">
      {items.map((item) => (
        <div key={item.id} className="accordion-item">
          <h2 className="accordion-header" id={`heading-${item.id}`}>
            <button
              className={`accordion-button ${!item.isExpanded ? 'collapsed' : ''}`}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target={`#collapse-${item.id}`}
              aria-expanded={item.isExpanded ? 'true' : 'false'}
              aria-controls={`collapse-${item.id}`}
            >
              {item.icon && (
                <i className={`${item.icon} me-2 text-primary icon-medium`} aria-hidden="true"></i>
              )}
              {item.title}
            </button>
          </h2>
          <div
            id={`collapse-${item.id}`}
            className={`accordion-collapse collapse ${item.isExpanded ? 'show' : ''}`}
            aria-labelledby={`heading-${item.id}`}
            data-bs-parent={`#${id}`}
          >
            <div className="accordion-body">
              {item.content}
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

// Additional standalone components for more flexible accordion usage
export const AccordionWrapper: React.FC<{ id: string; children: ReactNode; className?: string }> = ({ 
  id, 
  children, 
  className = "" 
}) => {
  return (
    <div className={`accordion ${className}`} id={id} role="region">
      {children}
    </div>
  )
}

export const AccordionItem: React.FC<AccordionItemProps> = ({ 
  id, 
  title, 
  icon, 
  children, 
  isOpen = false, 
  parentId,
  className = ""
}) => {
  const headingId = `heading-${id}`
  const collapseId = `collapse-${id}`
  
  return (
    <div className={`accordion-item ${className}`}>
      <h2 className="accordion-header" id={headingId}>
        <button 
          className={`accordion-button ${!isOpen ? 'collapsed' : ''}`}
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target={`#${collapseId}`}
          aria-expanded={isOpen} 
          aria-controls={collapseId}
        >
          {icon && <i className={`${icon} me-2 icon-medium`} aria-hidden="true"></i>}
          {title}
        </button>
      </h2>
      <div 
        id={collapseId}
        className={`accordion-collapse collapse ${isOpen ? 'show' : ''}`}
        aria-labelledby={headingId} 
        data-bs-parent={`#${parentId}`}
      >
        <div className="accordion-body">
          {children}
        </div>
      </div>
    </div>
  )
}

export default Accordion