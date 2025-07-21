import React from 'react'
import { Link } from 'react-router-dom'

interface BreadcrumbItem {
  label: string
  path?: string
}

interface BreadcrumbProps {
  items: BreadcrumbItem[]
  className?: string
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ items, className = '' }) => {
  if (items.length === 0) return null

  return (
    <nav aria-label="Você está aqui" className={`breadcrumb-navigation ${className}`}>
      <ol className="breadcrumb">
        <li className="breadcrumb-item">
          <Link to="/" aria-label="Voltar para a página inicial">
            <i className="fas fa-home me-1" aria-hidden="true"></i>
            Início
          </Link>
        </li>
        {items.map((item, index) => (
          <li 
            key={index} 
            className={`breadcrumb-item ${index === items.length - 1 ? 'active' : ''}`}
            {...(index === items.length - 1 && { 'aria-current': 'page' })}
          >
            {item.path && index < items.length - 1 ? (
              <Link to={item.path}>{item.label}</Link>
            ) : (
              <span>{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  )
}

export default Breadcrumb
