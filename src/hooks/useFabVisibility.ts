import { useEffect, useState } from 'react'

export const useFabVisibility = (heroId: string, ctaId: string) => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const heroEl = document.getElementById(heroId)
    const ctaEl = document.getElementById(ctaId)

    if (!heroEl && !ctaEl) {
      setIsVisible(false)
      return
    }

    let heroVisible = Boolean(heroEl)
    let ctaVisible = false

    const updateVisibility = () => {
      setIsVisible(!heroVisible && !ctaVisible)
    }

    const heroObserver = heroEl
      ? new IntersectionObserver(
          ([entry]) => {
            heroVisible = entry.isIntersecting
            updateVisibility()
          },
          { threshold: 0 },
        )
      : null

    const ctaObserver = ctaEl
      ? new IntersectionObserver(
          ([entry]) => {
            ctaVisible = entry.isIntersecting
            updateVisibility()
          },
          { threshold: 0.1 },
        )
      : null

    if (heroEl && heroObserver) heroObserver.observe(heroEl)
    if (ctaEl && ctaObserver) ctaObserver.observe(ctaEl)

    updateVisibility()

    return () => {
      heroObserver?.disconnect()
      ctaObserver?.disconnect()
    }
  }, [ctaId, heroId])

  return isVisible
}
