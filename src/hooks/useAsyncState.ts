import { useState, useCallback } from 'react'

interface AsyncState<T = any> {
  data: T | null
  loading: boolean
  error: string | null
}

interface UseAsyncStateReturn<T> extends AsyncState<T> {
  setData: (data: T) => void
  setLoading: (loading: boolean) => void
  setError: (error: string | null) => void
  reset: () => void
  execute: (asyncFunction: () => Promise<T>) => Promise<void>
}

export const useAsyncState = <T = any>(initialData: T | null = null): UseAsyncStateReturn<T> => {
  const [state, setState] = useState<AsyncState<T>>({
    data: initialData,
    loading: false,
    error: null
  })

  const setData = useCallback((data: T) => {
    setState(prev => ({ ...prev, data, error: null }))
  }, [])

  const setLoading = useCallback((loading: boolean) => {
    setState(prev => ({ ...prev, loading }))
  }, [])

  const setError = useCallback((error: string | null) => {
    setState(prev => ({ ...prev, error, loading: false }))
  }, [])

  const reset = useCallback(() => {
    setState({
      data: initialData,
      loading: false,
      error: null
    })
  }, [initialData])

  const execute = useCallback(async (asyncFunction: () => Promise<T>) => {
    setState(prev => ({ ...prev, loading: true, error: null }))
    
    try {
      const result = await asyncFunction()
      setState({
        data: result,
        loading: false,
        error: null
      })
    } catch (err) {
      setState(prev => ({
        ...prev,
        loading: false,
        error: err instanceof Error ? err.message : 'Ocorreu um erro inesperado'
      }))
    }
  }, [])

  return {
    ...state,
    setData,
    setLoading,
    setError,
    reset,
    execute
  }
}

// Hook para gerenciar formulários
interface UseFormStateOptions {
  initialValues?: Record<string, any>
  validate?: (values: Record<string, any>) => Record<string, string>
  onSubmit?: (values: Record<string, any>) => Promise<void> | void
}

export const useFormState = (options: UseFormStateOptions = {}) => {
  const [values, setValues] = useState(options.initialValues || {})
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [touched, setTouched] = useState<Record<string, boolean>>({})

  const setValue = useCallback((name: string, value: any) => {
    setValues(prev => ({ ...prev, [name]: value }))
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }))
    }
  }, [errors])

  const setFieldTouched = useCallback((name: string, isTouched: boolean = true) => {
    setTouched(prev => ({ ...prev, [name]: isTouched }))
  }, [])

  const validateForm = useCallback(() => {
    if (!options.validate) return true
    
    const validationErrors = options.validate(values)
    setErrors(validationErrors)
    
    return Object.keys(validationErrors).length === 0
  }, [options.validate, values])

  const handleSubmit = useCallback(async (e?: React.FormEvent) => {
    if (e) e.preventDefault()
    
    setIsSubmitting(true)
    
    // Mark all fields as touched
    const allTouched = Object.keys(values).reduce((acc, key) => ({
      ...acc,
      [key]: true
    }), {})
    setTouched(allTouched)
    
    if (validateForm() && options.onSubmit) {
      try {
        await options.onSubmit(values)
      } catch (error) {
        console.error('Form submission error:', error)
      }
    }
    
    setIsSubmitting(false)
  }, [values, validateForm, options.onSubmit])

  const reset = useCallback(() => {
    setValues(options.initialValues || {})
    setErrors({})
    setTouched({})
    setIsSubmitting(false)
  }, [options.initialValues])

  return {
    values,
    errors,
    touched,
    isSubmitting,
    setValue,
    setFieldTouched,
    handleSubmit,
    reset,
    isValid: Object.keys(errors).length === 0
  }
}

// Hook para gerenciar estado de modo escuro/claro (para implementação futura)
export const useTheme = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('theme') === 'dark' ||
             (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches)
    }
    return false
  })

  const toggleTheme = useCallback(() => {
    const newTheme = !isDarkMode
    setIsDarkMode(newTheme)
    if (typeof window !== 'undefined') {
      localStorage.setItem('theme', newTheme ? 'dark' : 'light')
      document.documentElement.setAttribute('data-theme', newTheme ? 'dark' : 'light')
    }
  }, [isDarkMode])

  return {
    isDarkMode,
    toggleTheme
  }
}

// Hook para detectar se o dispositivo é mobile
export const useIsMobile = (breakpoint: number = 768) => {
  const [isMobile, setIsMobile] = useState(() => {
    if (typeof window !== 'undefined') {
      return window.innerWidth < breakpoint
    }
    return false
  })

  useState(() => {
    if (typeof window === 'undefined') return

    const handleResize = () => {
      setIsMobile(window.innerWidth < breakpoint)
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  })

  return isMobile
}
