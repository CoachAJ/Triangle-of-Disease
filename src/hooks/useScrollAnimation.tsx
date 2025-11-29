import { useEffect, useRef, useState } from 'react'

interface ScrollAnimationOptions {
  threshold?: number
  rootMargin?: string
  triggerOnce?: boolean
}

export const useScrollAnimation = (
  options: ScrollAnimationOptions = {}
) => {
  const {
    threshold = 0.1,
    rootMargin = '0px',
    triggerOnce = true
  } = options
  
  const ref = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)
  const [hasAnimated, setHasAnimated] = useState(false)

  useEffect(() => {
    const element = ref.current
    if (!element || (triggerOnce && hasAnimated)) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          if (triggerOnce) {
            setHasAnimated(true)
            observer.unobserve(element)
          }
        } else if (!triggerOnce) {
          setIsVisible(false)
        }
      },
      {
        threshold,
        rootMargin
      }
    )

    observer.observe(element)

    return () => {
      if (element) {
        observer.unobserve(element)
      }
    }
  }, [threshold, rootMargin, triggerOnce, hasAnimated])

  return { ref, isVisible }
}

// Pre-configured animations
export const useSlideUp = (delay = 0) => {
  const { ref, isVisible } = useScrollAnimation()
  const className = isVisible
    ? `animate-slide-up opacity-100`
    : 'translate-y-20 opacity-0'
  const style = { 
    transition: `all 0.8s cubic-bezier(0.17, 0.55, 0.55, 1) ${delay}ms`,
    willChange: 'transform, opacity'
  }
  return { ref, className, style }
}

export const useSlideIn = (direction: 'left' | 'right' = 'left', delay = 0) => {
  const { ref, isVisible } = useScrollAnimation()
  const translateClass = direction === 'left' ? '-translate-x-20' : 'translate-x-20'
  const className = isVisible
    ? `animate-slide-in opacity-100 translate-x-0`
    : `${translateClass} opacity-0`
  const style = { 
    transition: `all 0.8s cubic-bezier(0.17, 0.55, 0.55, 1) ${delay}ms`,
    willChange: 'transform, opacity'
  }
  return { ref, className, style }
}

export const useZoomIn = (delay = 0) => {
  const { ref, isVisible } = useScrollAnimation()
  const className = isVisible
    ? `animate-zoom-in opacity-100 scale-100`
    : 'scale-75 opacity-0'
  const style = { 
    transition: `all 0.8s cubic-bezier(0.17, 0.55, 0.55, 1) ${delay}ms`,
    willChange: 'transform, opacity'
  }
  return { ref, className, style }
}

export const useRotateIn = (delay = 0) => {
  const { ref, isVisible } = useScrollAnimation()
  const className = isVisible
    ? `animate-rotate-in opacity-100 rotate-0`
    : '-rotate-12 opacity-0'
  const style = { 
    transition: `all 1s cubic-bezier(0.17, 0.55, 0.55, 1) ${delay}ms`,
    willChange: 'transform, opacity'
  }
  return { ref, className, style }
}
