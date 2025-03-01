"use client"

import { useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'

// Register GSAP plugins
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)
}

export const useGSAP = (callback: () => void, dependencies: any[] = []) => {
  useEffect(() => {
    const ctx = gsap.context(callback)
    
    return () => {
      ctx.revert()
      
      // Clean up ScrollTrigger instances
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }
  }, dependencies)
}

export const animateOnScroll = (
  element: string,
  animation: gsap.TweenVars,
  trigger: string | Element = element,
  options: Partial<ScrollTrigger.Vars> = {}
) => {
  return gsap.fromTo(
    element,
    { opacity: 0, y: 50 },
    {
      ...animation,
      scrollTrigger: {
        trigger,
        start: "top 80%",
        toggleActions: "play none none none",
        ...options
      }
    }
  )
}

export const animateStagger = (
  elements: string,
  animation: gsap.TweenVars,
  staggerAmount: number = 0.1,
  trigger: string | Element = elements,
  options: Partial<ScrollTrigger.Vars> = {}
) => {
  return gsap.fromTo(
    elements,
    { opacity: 0, y: 30 },
    {
      ...animation,
      stagger: staggerAmount,
      scrollTrigger: {
        trigger,
        start: "top 80%",
        toggleActions: "play none none none",
        ...options
      }
    }
  )
}

export const smoothScroll = (target: string | Element, duration: number = 1, offset: number = 0) => {
  gsap.to(window, {
    duration,
    scrollTo: {
      y: target,
      offsetY: offset
    },
    ease: "power3.inOut"
  })
}

export default gsap