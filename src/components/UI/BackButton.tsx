import React from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'

interface BackButtonProps {
  to?: string
  label?: string
  className?: string
  variant?: 'button' | 'link'
  size?: 'sm' | 'md' | 'lg'
  showIcon?: boolean
  forceHome?: boolean // Nova prop para forçar volta para home
}

const BackButton: React.FC<BackButtonProps> = ({ 
  to, 
  label, 
  className = "",
  variant = 'button',
  size = 'md',
  showIcon = true,
  forceHome = false
}) => {
  const navigate = useNavigate()
  const location = useLocation()

  // Determina o destino baseado na lógica melhorada
  const getDestination = () => {
    // Se foi especificado um destino, usar ele
    if (to) {
      return to
    }

    // Se forceHome está ativo, sempre ir para home
    if (forceHome) {
      return '/'
    }

    // Se estamos na home, não mostrar o botão voltar
    if (location.pathname === '/') {
      return null
    }

    // Para páginas específicas, verificar se viemos da home
    const referrer = document.referrer
    const isFromSameDomain = referrer.includes(window.location.origin)
    
    // Se viemos de outra página do mesmo domínio e não é um loop, usar navigate(-1)
    // Caso contrário, ir para home para evitar loops
    if (isFromSameDomain && window.history.length > 2) {
      return 'back'
    }
    
    return '/'
  }

  const destination = getDestination()
  
  // Se destination é null, não renderizar o botão
  if (destination === null) {
    return null
  }

  const finalLabel = label || (destination === 'back' ? 'Voltar' : 'Voltar para a Página Inicial')

  const handleClick = (e: React.MouseEvent) => {
    if (destination === 'back') {
      e.preventDefault()
      // Verificação adicional para evitar loops
      const currentPath = location.pathname
      navigate(-1)
      
      // Fallback: se após 100ms ainda estamos na mesma página, ir para home
      setTimeout(() => {
        if (window.location.pathname === currentPath) {
          navigate('/')
        }
      }, 100)
    }
  }

  const getSizeClass = () => {
    switch (size) {
      case 'sm':
        return 'btn-sm'
      case 'lg':
        return 'btn-lg'
      default:
        return ''
    }
  }

  const baseClasses = `btn btn-outline-primary back-button ${getSizeClass()} ${className}`

  const content = (
    <>
      {showIcon && (
        <i 
          className="fas fa-arrow-left" 
          aria-hidden="true"
        ></i>
      )}
      <span>{finalLabel}</span>
    </>
  )

  if (variant === 'link' || destination === 'back') {
    return (
      <div className="back-button-container">
        <button
          type="button"
          className={baseClasses}
          onClick={handleClick}
          aria-label={finalLabel}
        >
          {content}
        </button>
      </div>
    )
  }

  return (
    <div className="back-button-container">
      <Link 
        to={destination as string}
        className={baseClasses}
        aria-label={finalLabel}
      >
        {content}
      </Link>
    </div>
  )
}

// Componente especializado para navegação de páginas
export const PageBackButton: React.FC<{
  pageName?: string
  className?: string
  forceHome?: boolean
}> = ({ pageName, className, forceHome = true }) => (
  <BackButton
    to={forceHome ? '/' : undefined}
    label={pageName ? `Voltar para ${pageName}` : 'Voltar para a Página Inicial'}
    className={className}
    size="md"
    forceHome={forceHome}
  />
)

// Componente específico para páginas internas (sempre volta para home)
export const SafeBackButton: React.FC<{
  className?: string
  label?: string
}> = ({ className, label }) => (
  <BackButton
    to="/"
    label={label || 'Voltar para a Página Inicial'}
    className={className}
    size="md"
    showIcon={true}
  />
)

// Componente para voltar em modais
export const ModalBackButton: React.FC<{
  onClose: () => void
  label?: string
}> = ({ onClose, label = "Fechar" }) => (
  <button
    type="button"
    className="btn btn-outline-secondary"
    onClick={onClose}
    aria-label={label}
  >
    <i className="fas fa-times me-2" aria-hidden="true"></i>
    {label}
  </button>
)

export default BackButton