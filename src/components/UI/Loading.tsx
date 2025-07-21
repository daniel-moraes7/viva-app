import React from 'react'

export type LoadingSize = 'small' | 'medium' | 'large'
export type LoadingType = 'spinner' | 'dots' | 'skeleton'

interface LoadingProps {
  size?: LoadingSize
  type?: LoadingType
  text?: string
  className?: string
  inline?: boolean
  fullPage?: boolean
}

const Loading: React.FC<LoadingProps> = ({
  size = 'medium',
  type = 'spinner',
  text,
  className = '',
  inline = false,
  fullPage = false
}) => {
  const getSizeClass = () => {
    switch (size) {
      case 'small': return 'loading-small'
      case 'large': return 'loading-large'
      default: return 'loading-medium'
    }
  }

  const renderSpinner = () => (
    <div className={`loading-spinner ${getSizeClass()}`} aria-hidden="true"></div>
  )

  const renderDots = () => (
    <div className="loading-dots" aria-hidden="true">
      <span></span>
      <span></span>
      <span></span>
    </div>
  )

  const renderSkeleton = () => (
    <div className="skeleton-container" aria-hidden="true">
      <div className="skeleton skeleton-title"></div>
      <div className="skeleton skeleton-text"></div>
      <div className="skeleton skeleton-text" style={{ width: '80%' }}></div>
      <div className="skeleton skeleton-button"></div>
    </div>
  )

  const renderLoadingContent = () => {
    switch (type) {
      case 'dots':
        return renderDots()
      case 'skeleton':
        return renderSkeleton()
      default:
        return renderSpinner()
    }
  }

  const containerClass = `
    ${fullPage ? 'loading-page' : inline ? 'd-inline-flex align-items-center' : 'loading-container'}
    ${className}
  `.trim()

  return (
    <div 
      className={containerClass}
      role="status"
      aria-label={text || 'Carregando'}
    >
      {renderLoadingContent()}
      {text && (
        <span className="loading-text">
          {text}
        </span>
      )}
      <span className="sr-only">
        {text || 'Carregando...'}
      </span>
    </div>
  )
}

export const LoadingButton: React.FC<{ 
  isLoading: boolean; 
  children: React.ReactNode; 
  className?: string;
  disabled?: boolean;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
}> = ({ 
  isLoading, 
  children, 
  className = '',
  disabled = false,
  onClick,
  type = 'button'
}) => {
  return (
    <button 
      className={`btn ${isLoading ? 'loading' : ''} ${className}`} 
      disabled={isLoading || disabled}
      onClick={onClick}
      type={type}
    >
      {isLoading ? (
        <>
          <span className="loading-spinner loading-small me-2" aria-hidden="true"></span>
          Carregando...
          <span className="sr-only">Carregando...</span>
        </>
      ) : (
        children
      )}
    </button>
  )
}

export const LoadingPage: React.FC<{ text?: string }> = ({ text = 'Carregando página...' }) => {
  return (
    <div className="loading-page">
      <div className="container text-center py-5">
        <Loading size="large" text={text} fullPage />
      </div>
    </div>
  )
}

// Componente para skeleton de cards
export const CardSkeleton: React.FC<{ count?: number }> = ({ count = 1 }) => (
  <div className="row g-4">
    {Array.from({ length: count }).map((_, index) => (
      <div key={index} className="col-lg-3 col-md-4 col-sm-6">
        <div className="card h-100">
          <div className="card-body">
            <Loading type="skeleton" />
          </div>
        </div>
      </div>
    ))}
  </div>
)

export default Loading