import { useEffect, useRef } from 'react'

// Hook para gerenciar foco em mudanças de rota
export const useRouteFocus = () => {
  const skipLinkRef = useRef<HTMLAnchorElement>(null)

  useEffect(() => {
    // Foca no skip link quando a rota muda
    if (skipLinkRef.current) {
      skipLinkRef.current.focus()
    }
  }, [])

  return { skipLinkRef }
}

// Hook para focus trap (usado em modais e menus móveis)
export const useFocusTrap = (isActive: boolean) => {
  const containerRef = useRef<HTMLElement>(null)
  const previousFocusRef = useRef<HTMLElement | null>(null)

  useEffect(() => {
    if (!isActive || !containerRef.current) return

    // Salva o elemento com foco atual
    previousFocusRef.current = document.activeElement as HTMLElement

    // Elementos focáveis
    const focusableElements = containerRef.current.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    )
    
    const firstElement = focusableElements[0] as HTMLElement
    const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement

    // Foca no primeiro elemento
    firstElement?.focus()

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Tab') {
        if (e.shiftKey) {
          // Shift + Tab
          if (document.activeElement === firstElement) {
            e.preventDefault()
            lastElement?.focus()
          }
        } else {
          // Tab
          if (document.activeElement === lastElement) {
            e.preventDefault()
            firstElement?.focus()
          }
        }
      }
      
      // ESC para fechar
      if (e.key === 'Escape') {
        const closeButton = containerRef.current?.querySelector('[data-close]') as HTMLElement
        closeButton?.click()
      }
    }

    document.addEventListener('keydown', handleKeyDown)

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      // Restaura o foco anterior
      if (previousFocusRef.current) {
        previousFocusRef.current.focus()
      }
    }
  }, [isActive])

  return { containerRef }
}

// Hook para navegação por teclado
export const useKeyboardNavigation = (
  onPrevious: () => void,
  onNext: () => void,
  onSelect?: () => void
) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      switch (e.key) {
        case 'ArrowLeft':
          e.preventDefault()
          onPrevious()
          break
        case 'ArrowRight':
          e.preventDefault()
          onNext()
          break
        case 'Enter':
        case ' ':
          if (onSelect) {
            e.preventDefault()
            onSelect()
          }
          break
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [onPrevious, onNext, onSelect])
}
