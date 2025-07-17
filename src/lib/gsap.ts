import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger)

// Global GSAP configuration
gsap.config({
  nullTargetWarn: false,
  trialWarn: false,
})

// Animation presets for the signs and graphics company
export const animations = {
  // Fade animations
  fadeIn: (element: string | Element) => {
    return gsap.fromTo(element, 
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" }
    )
  },

  fadeInUp: (element: string | Element) => {
    return gsap.fromTo(element,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
    )
  },

  fadeInDown: (element: string | Element) => {
    return gsap.fromTo(element,
      { opacity: 0, y: -50 },
      { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
    )
  },

  fadeInLeft: (element: string | Element) => {
    return gsap.fromTo(element,
      { opacity: 0, x: -50 },
      { opacity: 1, x: 0, duration: 1, ease: "power3.out" }
    )
  },

  fadeInRight: (element: string | Element) => {
    return gsap.fromTo(element,
      { opacity: 0, x: 50 },
      { opacity: 1, x: 0, duration: 1, ease: "power3.out" }
    )
  },

  // Scale animations
  scaleIn: (element: string | Element) => {
    return gsap.fromTo(element,
      { opacity: 0, scale: 0.8 },
      { opacity: 1, scale: 1, duration: 0.6, ease: "back.out(1.7)" }
    )
  },

  scaleUp: (element: string | Element) => {
    return gsap.fromTo(element,
      { scale: 1 },
      { scale: 1.05, duration: 0.3, ease: "power2.out" }
    )
  },

  // Stagger animations for multiple elements
  staggerFadeIn: (elements: string | Element[], delay = 0.1) => {
    return gsap.fromTo(elements,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8, ease: "power2.out", stagger: delay }
    )
  },

  // Scroll-triggered animations
  scrollFadeIn: (element: string | Element) => {
    return gsap.fromTo(element,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: element,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse"
        }
      }
    )
  },

  // Parallax effect
  parallax: (element: string | Element, speed = 0.5) => {
    return gsap.to(element, {
      yPercent: -50 * speed,
      ease: "none",
      scrollTrigger: {
        trigger: element,
        start: "top bottom",
        end: "bottom top",
        scrub: true
      }
    })
  },

  // Text reveal animations
  textReveal: (element: string | Element) => {
    return gsap.fromTo(element,
      { opacity: 0, rotationX: -90 },
      { opacity: 1, rotationX: 0, duration: 1, ease: "power3.out" }
    )
  },

  // Counter animation
  counterUp: (element: string | Element, endValue: number, duration = 2) => {
    const obj = { value: 0 }
    return gsap.to(obj, {
      value: endValue,
      duration,
      ease: "power2.out",
      onUpdate: () => {
        if (typeof element === 'string') {
          const el = document.querySelector(element)
          if (el) el.textContent = Math.round(obj.value).toString()
        } else {
          element.textContent = Math.round(obj.value).toString()
        }
      }
    })
  },

  // Loading animations
  loadingSpinner: (element: string | Element) => {
    return gsap.to(element, {
      rotation: 360,
      duration: 1,
      ease: "none",
      repeat: -1
    })
  },

  // Hover animations
  hoverGrow: (element: string | Element) => {
    const tl = gsap.timeline({ paused: true })
    tl.to(element, { scale: 1.05, duration: 0.3, ease: "power2.out" })
    return tl
  },

  hoverShrink: (element: string | Element) => {
    const tl = gsap.timeline({ paused: true })
    tl.to(element, { scale: 0.95, duration: 0.3, ease: "power2.out" })
    return tl
  },
}

// Timeline utilities
export const createTimeline = (options?: gsap.TimelineVars) => {
  return gsap.timeline(options)
}

// Scroll trigger utilities
export const createScrollTrigger = (options: ScrollTrigger.Vars) => {
  return ScrollTrigger.create(options)
}

// Refresh ScrollTrigger (useful after content changes)
export const refreshScrollTrigger = () => {
  ScrollTrigger.refresh()
}

// Kill all ScrollTrigger instances
export const killScrollTrigger = () => {
  ScrollTrigger.killAll()
}

// Match media utility for responsive animations
export const createMatchMedia = () => {
  return gsap.matchMedia()
}

export { gsap, ScrollTrigger }
export default animations 