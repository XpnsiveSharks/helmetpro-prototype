import { useEffect, useState } from 'react'
import type { RefObject } from 'react'
import { usePrefersReducedMotion } from './usePrefersReducedMotion'

export const useTimelineReveal = (
  timelineRef: RefObject<HTMLElement | null>,
) => {
  const prefersReducedMotion = usePrefersReducedMotion()
  const [lineHeight, setLineHeight] = useState(0)
  const [isActive, setIsActive] = useState(false)

  useEffect(() => {
    const timelineEl = timelineRef.current
    if (!timelineEl) {
      return
    }

    const steps = Array.from(
      timelineEl.querySelectorAll<HTMLElement>('.timeline-step'),
    )

    if (prefersReducedMotion) {
      setLineHeight(100)
      setIsActive(true)
      steps.forEach((step) => step.classList.add('step-visible'))
      return
    }

    const timeouts: number[] = []
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setLineHeight(100)
          setIsActive(true)

          steps.forEach((step, index) => {
            const timeout = window.setTimeout(() => {
              step.classList.add('step-visible')
            }, 400 + index * 400)
            timeouts.push(timeout)
          })

          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.2 },
    )

    observer.observe(timelineEl)

    return () => {
      observer.disconnect()
      timeouts.forEach((timeout) => window.clearTimeout(timeout))
    }
  }, [prefersReducedMotion, timelineRef])

  return { lineHeight, isActive }
}
