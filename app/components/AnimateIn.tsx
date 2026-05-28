'use client'

import { useEffect, useRef } from 'react'

type AnimateInProps = {
  children: React.ReactNode,
  delay?: number,
  className?: string,
}

export const AnimateIn = ({ children, delay = 0, className = '' }: AnimateInProps) => {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.transitionDelay = `${delay}ms`
          el.classList.add('reveal')
          observer.unobserve(el)
        }
      },
      { threshold: 0.12 },
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [delay])

  return (
    <div
      ref={ref}
      className={`before-reveal ${className}`}
    >
      {children}
    </div>
  )
}
