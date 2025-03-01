"use client"

import { useEffect, useRef } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { ArrowRight, Palette, Code, LineChart, Lightbulb, Layers } from 'lucide-react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const services = [
  {
    icon: Palette,
    title: "Web Design",
    description: "Beautiful, intuitive designs that engage your audience and elevate your brand.",
    link: "/services/web-design"
  },
  {
    icon: Code,
    title: "Web Development",
    description: "Custom, high-performance websites and applications built with cutting-edge technology.",
    link: "/services/web-development"
  },
  {
    icon: Lightbulb,
    title: "Branding & Identity",
    description: "Distinctive brand identities that communicate your values and resonate with your audience.",
    link: "/services/branding"
  },
  {
    icon: LineChart,
    title: "Digital Marketing",
    description: "Strategic marketing campaigns that increase visibility and drive meaningful conversions.",
    link: "/services/digital-marketing"
  },
  {
    icon: Layers,
    title: "UI/UX Design",
    description: "User-centered design that creates seamless, enjoyable experiences across all devices.",
    link: "/services/ui-ux"
  }
]

export default function Services() {
  const sectionRef = useRef<HTMLDivElement>(null)
  
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    
    const cards = gsap.utils.toArray('.service-card')
    
    gsap.fromTo(
      '.services-title', 
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
      '.services-description', 
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
    
    cards.forEach((card, index) => {
      gsap.fromTo(
        card, 
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6, // Reduced duration
          delay: 0.1 + (index * 0.05), // Reduced delay and stagger
          scrollTrigger: {
            trigger: card,
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
          <h2 className="services-title font-playfair text-3xl md:text-4xl font-bold mb-4">
            Our Premium Services
          </h2>
          <p className="services-description text-xl text-muted-foreground">
            We offer a comprehensive suite of creative services to help your business stand out in today's competitive landscape.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="service-card border border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/50 transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 rounded-md bg-primary/10 flex items-center justify-center mb-4">
                  <service.icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl font-medium">{service.title}</CardTitle>
                <CardDescription className="text-muted-foreground">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardFooter>
                <Button variant="ghost" size="sm" asChild className="group">
                  <Link href={service.link}>
                    Learn more
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <Button size="lg" asChild>
            <Link href="/services">
              View All Services
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}