import React, { useState } from 'react';
import { AccordionItem as AccordionItemType } from '../../types/pageData';

interface SimpleAccordionProps {
  id: string;
  items: AccordionItemType[];
  className?: string;
}

const SimpleAccordion: React.FC<SimpleAccordionProps> = ({ id, items, className = "" }) => {
  const [openItems, setOpenItems] = useState<Set<string>>(new Set());

  const toggleItem = (itemId: string) => {
    const newOpenItems = new Set(openItems);
    if (newOpenItems.has(itemId)) {
      newOpenItems.delete(itemId);
    } else {
      newOpenItems.add(itemId);
    }
    setOpenItems(newOpenItems);
  };

  return (
    <div className={`space-y-4 ${className}`} id={id} role="region" aria-label="Seções de conteúdo">
      {items.map((item) => {
        const isOpen = openItems.has(item.id);
        return (
          <div key={item.id} className="border border-gray-200 rounded-lg">
            <button
              onClick={() => toggleItem(item.id)}
              className="w-full flex items-center justify-between p-4 text-left hover:bg-gray-50 transition-colors"
              aria-expanded={isOpen}
              aria-controls={`content-${item.id}`}
            >
              <div className="flex items-center">
                {item.icon && (
                  <i className={`${item.icon} mr-3 text-blue-600`} aria-hidden="true"></i>
                )}
                <span className="font-semibold text-gray-900">{item.title}</span>
              </div>
              <i className={`fas fa-chevron-down transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}></i>
            </button>
            
            {isOpen && (
              <div
                id={`content-${item.id}`}
                className="p-4 border-t border-gray-200 bg-gray-50"
              >
                {item.content}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default SimpleAccordion;
