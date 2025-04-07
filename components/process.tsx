"use client"

import { useEffect, useRef } from 'react'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const steps = [
  {
    number: "01",
    title: "Discovery",
    description: "We begin by understanding your business, goals, and target audience to create a strategic foundation."
  },
  {
    number: "02",
    title: "Strategy",
    description: "Based on our findings, we develop a comprehensive strategy tailored to your specific needs and objectives."
  },
  {
    number: "03",
    title: "Design",
    description: "Our creative team crafts visually stunning designs that align with your brand identity and engage your audience."
  },
  {
    number: "04",
    title: "Development",
    description: "We bring designs to life with clean, efficient code, ensuring optimal performance across all devices."
  },
  {
    number: "05",
    title: "Testing",
    description: "Rigorous testing ensures everything functions flawlessly before launch, from usability to performance."
  },
  {
    number: "06",
    title: "Launch",
    description: "We carefully deploy your project and provide ongoing support to ensure continued success."
  }
]

export default function Process() {
  const sectionRef = useRef<HTMLDivElement>(null)
  
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    
    gsap.fromTo(
      '.process-title', 
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.6,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 90%",
          once: true
        }
      }
    )
    
    gsap.fromTo(
      '.process-description', 
      { y: 30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.6,
        delay: 0.1,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 90%",
          once: true
        }
      }
    )
    
    // Animate all process steps at once instead of staggered
    gsap.fromTo(
      '.process-step', 
      { y: 30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.6,
        delay: 0.2, // Single delay for all steps
        scrollTrigger: {
          trigger: '.process-step',
          start: "top 90%",
          once: true
        }
      }
    )
    
    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill())
    }
  }, [])

  return (
    <section ref={sectionRef} className="py-24 bg-muted/30">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="process-title font-playfair text-3xl md:text-4xl font-bold mb-4">
            Our Creative Process
          </h2>
          <p className="process-description text-xl text-muted-foreground">
            We follow a structured approach to ensure every project is delivered with excellence and precision.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className="process-step relative border border-border/50 bg-card/50 backdrop-blur-sm rounded-lg p-6 hover:border-primary/50 transition-all duration-300"
            >
              <div className="absolute -top-4 -right-4 w-12 h-12 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold">
                {step.number}
              </div>
              <h3 className="text-xl font-medium mb-3">{step.title}</h3>
              <p className="text-muted-foreground">{step.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
        <Link href="/about#process">
                <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
                  <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent flex items-center">
                  Learn More About Our Process
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </span>
                </button>
              </Link>
        </div>
      </div>
    </section>
  )
}