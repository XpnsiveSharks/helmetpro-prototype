import { useEffect } from 'react'
import { usePrefersReducedMotion } from './usePrefersReducedMotion'

export const useRevealOnScroll = (
  selector = '.reveal-on-scroll',
  options?: IntersectionObserverInit,
) => {
  const prefersReducedMotion = usePrefersReducedMotion()

  useEffect(() => {
    const elements = Array.from(document.querySelectorAll<HTMLElement>(selector))
    if (elements.length === 0) {
      return
    }

    if (prefersReducedMotion) {
      elements.forEach((element) => element.classList.add('is-visible'))
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      {
        threshold: 0.1,
        ...options,
      },
    )

    elements.forEach((element) => observer.observe(element))

    return () => observer.disconnect()
  }, [selector, options, prefersReducedMotion])
}
