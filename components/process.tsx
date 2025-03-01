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
        duration: 0.6, // Reduced duration
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 90%", // Changed from 80% to 90%
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
        duration: 0.6, // Reduced duration
        delay: 0.1, // Reduced delay
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 90%", // Changed from 80% to 90%
          once: true
        }
      }
    )
    
    const processSteps = gsap.utils.toArray('.process-step')
    
    processSteps.forEach((step, index) => {
      gsap.fromTo(
        step, 
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6, // Reduced duration
          delay: 0.1 + (index * 0.05), // Reduced delay and stagger
          scrollTrigger: {
            trigger: step,
            start: "top 90%", // Already at 90%
            once: true
          }
        }
      )
    })
    
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
          <Button size="lg" asChild>
            <Link href="/about#process">
              Learn More About Our Process
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}