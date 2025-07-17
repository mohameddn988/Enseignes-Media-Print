import { useRef, useEffect, useLayoutEffect } from 'react'
import { gsap } from 'gsap'

// Use useLayoutEffect for DOM measurements, useEffect for everything else
const useIsomorphicLayoutEffect = typeof window !== 'undefined' ? useLayoutEffect : useEffect

/**
 * Custom hook for using GSAP animations in React components
 * @param animation - Function that returns GSAP animation or timeline
 * @param dependencies - Array of dependencies that trigger re-animation
 * @returns Reference to the animated element
 */
export function useGSAP<T extends HTMLElement>(
  animation: (element: T) => gsap.core.Animation | gsap.core.Timeline | void,
  dependencies: any[] = []
) {
  const elementRef = useRef<T>(null)
  const animationRef = useRef<gsap.core.Animation | gsap.core.Timeline>()

  useIsomorphicLayoutEffect(() => {
    const element = elementRef.current
    if (!element) return

    // Kill any existing animation
    if (animationRef.current) {
      animationRef.current.kill()
    }

    // Create new animation
    const anim = animation(element)
    if (anim) {
      animationRef.current = anim
    }

    // Cleanup on unmount
    return () => {
      if (animationRef.current) {
        animationRef.current.kill()
      }
    }
  }, dependencies)

  return elementRef
}

/**
 * Hook for simple fade-in animation
 * @param delay - Animation delay in seconds
 * @param duration - Animation duration in seconds
 * @returns Reference to the animated element
 */
export function useFadeIn<T extends HTMLElement>(
  delay: number = 0,
  duration: number = 0.8
) {
  return useGSAP<T>((element) => {
    return gsap.fromTo(element,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration, delay, ease: "power2.out" }
    )
  }, [delay, duration])
}

/**
 * Hook for scale-in animation
 * @param delay - Animation delay in seconds
 * @param duration - Animation duration in seconds
 * @returns Reference to the animated element
 */
export function useScaleIn<T extends HTMLElement>(
  delay: number = 0,
  duration: number = 0.6
) {
  return useGSAP<T>((element) => {
    return gsap.fromTo(element,
      { opacity: 0, scale: 0.8 },
      { opacity: 1, scale: 1, duration, delay, ease: "back.out(1.7)" }
    )
  }, [delay, duration])
}

/**
 * Hook for slide-in-up animation
 * @param delay - Animation delay in seconds
 * @param duration - Animation duration in seconds
 * @returns Reference to the animated element
 */
export function useSlideInUp<T extends HTMLElement>(
  delay: number = 0,
  duration: number = 1
) {
  return useGSAP<T>((element) => {
    return gsap.fromTo(element,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration, delay, ease: "power3.out" }
    )
  }, [delay, duration])
}

/**
 * Hook for stagger animation of multiple elements
 * @param selector - CSS selector for child elements to animate
 * @param staggerDelay - Delay between each element animation
 * @param duration - Animation duration for each element
 * @returns Reference to the container element
 */
export function useStagger<T extends HTMLElement>(
  selector: string = '> *',
  staggerDelay: number = 0.1,
  duration: number = 0.8
) {
  return useGSAP<T>((element) => {
    const children = element.querySelectorAll(selector)
    return gsap.fromTo(children,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration, ease: "power2.out", stagger: staggerDelay }
    )
  }, [selector, staggerDelay, duration])
}

/**
 * Hook for hover animations
 * @param scaleValue - Scale value on hover
 * @returns Reference to the element and hover handlers
 */
export function useHoverScale<T extends HTMLElement>(scaleValue: number = 1.05) {
  const elementRef = useRef<T>(null)

  const handleMouseEnter = () => {
    if (elementRef.current) {
      gsap.to(elementRef.current, { scale: scaleValue, duration: 0.3, ease: "power2.out" })
    }
  }

  const handleMouseLeave = () => {
    if (elementRef.current) {
      gsap.to(elementRef.current, { scale: 1, duration: 0.3, ease: "power2.out" })
    }
  }

  return {
    ref: elementRef,
    onMouseEnter: handleMouseEnter,
    onMouseLeave: handleMouseLeave,
  }
}

export default useGSAP 