"use client"

import { useEffect, useRef, useState } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Quote } from 'lucide-react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const testimonials = [
  {
    quote: "Working with LuxeStudio transformed our brand. Their attention to detail and creative vision exceeded our expectations.",
    author: "Sarah Johnson",
    role: "CEO, Elevate Fashion",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    initials: "SJ"
  },
  {
    quote: "The team at LuxeStudio delivered an exceptional website that perfectly captures our brand essence and has significantly increased our conversions.",
    author: "Michael Chen",
    role: "Marketing Director, Horizon Tech",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    initials: "MC"
  },
  {
    quote: "Their strategic approach to our rebranding campaign resulted in a 200% increase in engagement. I couldn't be happier with the results.",
    author: "Emma Rodriguez",
    role: "Founder, Pure Wellness",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    initials: "ER"
  },
  {
    quote: "LuxeStudio's UI/UX design for our app was nothing short of brilliant. User engagement has increased dramatically since the redesign.",
    author: "David Park",
    role: "Product Manager, NexGen Apps",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    initials: "DP"
  }
]

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0)
  const sectionRef = useRef<HTMLDivElement>(null)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)
  
  const nextTestimonial = () => {
    setActiveIndex(prev => (prev + 1) % testimonials.length)
  }
  
  const prevTestimonial = () => {
    setActiveIndex(prev => (prev - 1 + testimonials.length) % testimonials.length)
  }
  
  useEffect(() => {
    // Auto-rotate testimonials
    intervalRef.current = setInterval(nextTestimonial, 5000)
    
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }
  }, [])
  
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    
    gsap.fromTo(
      '.testimonials-title', 
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        }
      }
    )
    
    gsap.fromTo(
      '.testimonials-description', 
      { y: 30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        delay: 0.2,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        }
      }
    )
    
    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill())
    }
  }, [])
  
  useEffect(() => {
    // Animate testimonial change
    gsap.fromTo(
      '.testimonial-card', 
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" }
    )
  }, [activeIndex])

  return (
    <section ref={sectionRef} className="py-24">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="testimonials-title font-playfair text-3xl md:text-4xl font-bold mb-4">
            Client Testimonials
          </h2>
          <p className="testimonials-description text-xl text-muted-foreground">
            Don't just take our word for it. Here's what our clients have to say about working with us.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <Card className="testimonial-card border border-border/50 bg-card/50 backdrop-blur-sm">
            <CardContent className="p-8">
              <div className="flex justify-center mb-6">
                <Quote className="h-12 w-12 text-primary opacity-50" />
              </div>
              
              <p className="text-xl md:text-2xl text-center mb-8 italic">
                "{testimonials[activeIndex].quote}"
              </p>
              
              <div className="flex flex-col items-center">
                <Avatar className="h-16 w-16 mb-4">
                  <AvatarImage src={testimonials[activeIndex].avatar} alt={testimonials[activeIndex].author} />
                  <AvatarFallback>{testimonials[activeIndex].initials}</AvatarFallback>
                </Avatar>
                <div className="text-center">
                  <h4 className="font-medium text-lg">{testimonials[activeIndex].author}</h4>
                  <p className="text-muted-foreground">{testimonials[activeIndex].role}</p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <div className="flex justify-center mt-8 gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === activeIndex ? "bg-primary scale-125" : "bg-muted-foreground/30"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}