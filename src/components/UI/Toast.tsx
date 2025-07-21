import React, { useEffect, useState, useRef } from 'react'

export type ToastType = 'success' | 'error' | 'warning' | 'info'

interface ToastProps {
  id: string
  type: ToastType
  title: string
  message?: string
  duration?: number
  onClose: (id: string) => void
}

const Toast: React.FC<ToastProps> = ({
  id,
  type,
  title,
  message,
  duration = 5000,
  onClose
}) => {
  const [isVisible, setIsVisible] = useState(true)
  const toastRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Foca no toast quando aparecer para leitores de tela
    if (toastRef.current) {
      toastRef.current.focus();
    }
  }, []);

  useEffect(() => {
    // Permite fechar com ESC
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        handleClose();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  useEffect(() => {
    if (duration > 0) {
      const timer = setTimeout(() => {
        setIsVisible(false)
        setTimeout(() => onClose(id), 300) // Wait for animation to complete
      }, duration)

      return () => clearTimeout(timer)
    }
  }, [duration, id, onClose])

  const getIcon = () => {
    switch (type) {
      case 'success':
        return <i className="fas fa-check-circle" aria-hidden="true"></i>
      case 'error':
        return <i className="fas fa-exclamation-circle" aria-hidden="true"></i>
      case 'warning':
        return <i className="fas fa-exclamation-triangle" aria-hidden="true"></i>
      case 'info':
        return <i className="fas fa-info-circle" aria-hidden="true"></i>
      default:
        return null
    }
  }

  const handleClose = () => {
    setIsVisible(false)
    setTimeout(() => onClose(id), 300)
  }

  if (!isVisible) return null

  return (
    <div 
      ref={toastRef}
      className={`toast ${type}`}
      role="alert"
      aria-live="assertive"
      tabIndex={-1}
      aria-atomic="true"
    >
      <div className="toast-header">
        <div className="d-flex align-items-center gap-2">
          {getIcon()}
          <strong>{title}</strong>
        </div>
        <button
          type="button"
          className="toast-close"
          onClick={handleClose}
          aria-label="Fechar notificação"
        >
          <i className="fas fa-times" aria-hidden="true"></i>
        </button>
      </div>
      {message && (
        <div className="toast-body">
          {message}
        </div>
      )}
    </div>
  )
}

// Hook para gerenciar toasts
export const useToast = () => {
  const [toasts, setToasts] = useState<Array<{
    id: string
    type: ToastType
    title: string
    message?: string
    duration?: number
  }>>([])

  const addToast = (toast: Omit<typeof toasts[0], 'id'>) => {
    const id = Math.random().toString(36).substr(2, 9)
    setToasts(prev => [...prev, { ...toast, id }])
  }

  const removeToast = (id: string) => {
    setToasts(prev => prev.filter(toast => toast.id !== id))
  }

  const showSuccess = (title: string, message?: string, duration?: number) => {
    addToast({ type: 'success', title, message, duration })
  }

  const showError = (title: string, message?: string, duration?: number) => {
    addToast({ type: 'error', title, message, duration })
  }

  const showWarning = (title: string, message?: string, duration?: number) => {
    addToast({ type: 'warning', title, message, duration })
  }

  const showInfo = (title: string, message?: string, duration?: number) => {
    addToast({ type: 'info', title, message, duration })
  }

  return {
    toasts,
    removeToast,
    showSuccess,
    showError,
    showWarning,
    showInfo
  }
}

// Container de toasts
export const ToastContainer: React.FC<{
  toasts: ReturnType<typeof useToast>['toasts']
  onRemove: (id: string) => void
}> = ({ toasts, onRemove }) => {
  if (toasts.length === 0) return null

  return (
    <div className="toast-container" aria-live="polite" aria-label="Notificações">
      {toasts.map(toast => (
        <Toast
          key={toast.id}
          id={toast.id}
          type={toast.type}
          title={toast.title}
          message={toast.message}
          duration={toast.duration}
          onClose={onRemove}
        />
      ))}
    </div>
  )
}

export default Toast
