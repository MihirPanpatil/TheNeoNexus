"use client"

import { useEffect } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowRight, Palette, Code, LineChart, Lightbulb, Layers, Camera, Megaphone } from 'lucide-react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const services = [
  {
    id: "web-design",
    icon: Palette,
    title: "Web Design",
    description: "Beautiful, intuitive designs that engage your audience and elevate your brand.",
    features: [
      "Custom website design",
      "Responsive design for all devices",
      "User experience (UX) design",
      "Interactive prototypes",
      "Design system creation"
    ],
    image: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
  },
  {
    id: "web-development",
    icon: Code,
    title: "Web Development",
    description: "Custom, high-performance websites and applications built with cutting-edge technology.",
    features: [
      "Front-end development",
      "Back-end development",
      "E-commerce solutions",
      "Content management systems",
      "API integration"
    ],
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
  },
  {
    id: "branding",
    icon: Lightbulb,
    title: "Branding & Identity",
    description: "Distinctive brand identities that communicate your values and resonate with your audience.",
    features: [
      "Logo design",
      "Brand strategy",
      "Visual identity systems",
      "Brand guidelines",
      "Brand messaging"
    ],
    image: "https://images.unsplash.com/photo-1634084462412-b54873c0a56d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
  },
  {
    id: "digital-marketing",
    icon: LineChart,
    title: "Digital Marketing",
    description: "Strategic marketing campaigns that increase visibility and drive meaningful conversions.",
    features: [
      "Search engine optimization (SEO)",
      "Social media marketing",
      "Email marketing campaigns",
      "Content marketing",
      "Analytics and reporting"
    ],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
  },
  {
    id: "ui-ux",
    icon: Layers,
    title: "UI/UX Design",
    description: "User-centered design that creates seamless, enjoyable experiences across all devices.",
    features: [
      "User interface design",
      "User experience strategy",
      "Wireframing and prototyping",
      "Usability testing",
      "Information architecture"
    ],
    image: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
  },
  {
    id: "photography",
    icon: Camera,
    title: "Photography",
    description: "Professional photography services that capture your brand's essence and tell your story visually.",
    features: [
      "Product photography",
      "Brand lifestyle photography",
      "Corporate headshots",
      "Event coverage",
      "Photo editing and retouching"
    ],
    image: "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
  },
  {
    id: "content-creation",
    icon: Megaphone,
    title: "Content Creation",
    description: "Compelling content that engages your audience and effectively communicates your message.",
    features: [
      "Copywriting",
      "Blog content",
      "Social media content",
      "Video production",
      "Infographics and visual content"
    ],
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
  }
]

export default function ServicesPage() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    
    // Hero section animations
    gsap.fromTo(
      '.services-title', 
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: "power3.out" }
    )
    
    gsap.fromTo(
      '.services-subtitle', 
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, delay: 0.2, ease: "power3.out" }
    )
    
    // Services tabs animation
    gsap.fromTo(
      '.services-tabs', 
      { y: 30, opacity: 0 },
      { 
        y: 0, 
        opacity: 1, 
        duration: 0.8,
        delay: 0.4,
        ease: "power3.out"
      }
    )
    
    // Service cards animation
    gsap.fromTo(
      '.service-card', 
      { y: 30, opacity: 0 },
      { 
        y: 0, 
        opacity: 1, 
        stagger: 0.1,
        duration: 0.8,
        scrollTrigger: {
          trigger: '.services-grid',
          start: "top 80%",
        }
      }
    )
    
    // Process section animations
    gsap.fromTo(
      '.process-title', 
      { y: 50, opacity: 0 },
      { 
        y: 0, 
        opacity: 1, 
        duration: 0.8,
        scrollTrigger: {
          trigger: '.process-section',
          start: "top 80%",
        }
      }
    )
    
    gsap.fromTo(
      '.process-description', 
      { y: 30, opacity: 0 },
      { 
        y: 0, 
        opacity: 1, 
        duration: 0.8,
        delay: 0.2,
        scrollTrigger: {
          trigger: '.process-section',
          start: "top 80%",
        }
      }
    )
    
    gsap.fromTo(
      '.process-step', 
      { y: 30, opacity: 0 },
      { 
        y: 0, 
        opacity: 1, 
        stagger: 0.1,
        duration: 0.8,
        scrollTrigger: {
          trigger: '.process-steps',
          start: "top 80%",
        }
      }
    )
    
    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill())
    }
  }, [])

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="absolute inset-0 bg-gradient-to-b from-background to-background/60 dark:from-background dark:to-background/80 z-0" />
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-1/3 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        
        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="services-title font-playfair text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Our Services
            </h1>
            <p className="services-subtitle text-xl md:text-2xl text-muted-foreground">
              We offer a comprehensive suite of creative services to help your business stand out in today's competitive landscape.
            </p>
          </div>
        </div>
      </section>
      
      {/* Services Tabs Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <Tabs defaultValue="web-design" className="services-tabs">
            <div className="flex justify-center mb-12 overflow-x-auto pb-2">
              <TabsList className="bg-mute <TabsList className="bg-muted/50">
                {services.map(service => (
                  <TabsTrigger 
                    key={service.id} 
                    value={service.id}
                    className="data-[state=active]:bg-background"
                  >
                    <service.icon className="h-4 w-4 mr-2" />
                    {service.title}
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>
            
            {services.map(service => (
              <TabsContent key={service.id} value={service.id} className="mt-0">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  <div>
                    <div className="w-12 h-12 rounded-md bg-primary/10 flex items-center justify-center mb-6">
                      <service.icon className="h-6 w-6 text-primary" />
                    </div>
                    <h2 className="font-playfair text-3xl font-bold mb-4">{service.title}</h2>
                    <p className="text-lg text-muted-foreground mb-6">{service.description}</p>
                    
                    <ul className="space-y-3 mb-8">
                      {service.features.map((feature, index) => (
                        <li key={index} className="flex items-center gap-3">
                          <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <Button asChild>
                      <Link href={`/services/${service.id}`}>
                        Learn More
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                  <div className="relative">
                    <div className="aspect-[4/3] rounded-lg overflow-hidden">
                      <img 
                        src={service.image} 
                        alt={service.title} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>
      
      {/* All Services Grid */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-4">
              All Services
            </h2>
            <p className="text-xl text-muted-foreground">
              Browse our complete range of services designed to help your business thrive.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 services-grid">
            {services.map((service, index) => (
              <Link 
                key={service.id} 
                href={`/services/${service.id}`}
                className="service-card group block border border-border/50 bg-card/50 backdrop-blur-sm rounded-lg p-6 hover:border-primary/50 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-md bg-primary/10 flex items-center justify-center mb-4">
                  <service.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-medium mb-2 group-hover:text-primary transition-colors">{service.title}</h3>
                <p className="text-muted-foreground mb-4">{service.description}</p>
                <div className="flex items-center text-sm font-medium group-hover:text-primary transition-colors">
                  Learn more
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      
      {/* Process Section */}
      <section className="py-16 md:py-24 process-section" id="process">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="process-title font-playfair text-3xl md:text-4xl font-bold mb-4">
              Our Process
            </h2>
            <p className="process-description text-xl text-muted-foreground">
              We follow a structured approach to ensure every project is delivered with excellence and precision.
            </p>
          </div>
          
          <div className="relative process-steps">
            {/* Timeline line */}
            <div className="absolute left-[15px] md:left-1/2 top-0 bottom-0 w-0.5 bg-border md:-translate-x-1/2 z-0" />
            
            <div className="space-y-12 relative z-10">
              <div className="process-step flex flex-col md:flex-row items-start gap-8">
                <div className="md:text-right md:w-1/2 flex flex-row md:flex-row-reverse items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold text-sm mt-1">
                    1
                  </div>
                  <div>
                    <h3 className="text-xl font-medium mb-2">Discovery</h3>
                    <p className="text-muted-foreground">
                      We begin by understanding your business, goals, and target audience to create a strategic foundation for your project.
                    </p>
                  </div>
                </div>
                <div className="hidden md:block md:w-1/2" />
              </div>
              
              <div className="process-step flex flex-col md:flex-row items-start gap-8">
                <div className="hidden md:block md:w-1/2" />
                <div className="md:w-1/2 flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold text-sm mt-1">
                    2
                  </div>
                  <div>
                    <h3 className="text-xl font-medium mb-2">Strategy</h3>
                    <p className="text-muted-foreground">
                      Based on our findings, we develop a comprehensive strategy tailored to your specific needs and objectives.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="process-step flex flex-col md:flex-row items-start gap-8">
                <div className="md:text-right md:w-1/2 flex flex-row md:flex-row-reverse items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold text-sm mt-1">
                    3
                  </div>
                  <div>
                    <h3 className="text-xl font-medium mb-2">Design</h3>
                    <p className="text-muted-foreground">
                      Our creative team crafts visually stunning designs that align with your brand identity and engage your audience.
                    </p>
                  </div>
                </div>
                <div className="hidden md:block md:w-1/2" />
              </div>
              
              <div className="process-step flex flex-col md:flex-row items-start gap-8">
                <div className="hidden md:block md:w-1/2" />
                <div className="md:w-1/2 flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold text-sm mt-1">
                    4
                  </div>
                  <div>
                    <h3 className="text-xl font-medium mb-2">Development</h3>
                    <p className="text-muted-foreground">
                      We bring designs to life with clean, efficient code, ensuring optimal performance across all devices.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="process-step flex flex-col md:flex-row items-start gap-8">
                <div className="md:text-right md:w-1/2 flex flex-row md:flex-row-reverse items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold text-sm mt-1">
                    5
                  </div>
                  <div>
                    <h3 className="text-xl font-medium mb-2">Testing</h3>
                    <p className="text-muted-foreground">
                      Rigorous testing ensures everything functions flawlessly before launch, from usability to performance.
                    </p>
                  </div>
                </div>
                <div className="hidden md:block md:w-1/2" />
              </div>
              
              <div className="process-step flex flex-col md:flex-row items-start gap-8">
                <div className="hidden md:block md:w-1/2" />
                <div className="md:w-1/2 flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold text-sm mt-1">
                    6
                  </div>
                  <div>
                    <h3 className="text-xl font-medium mb-2">Launch</h3>
                    <p className="text-muted-foreground">
                      We carefully deploy your project and provide ongoing support to ensure continued success.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-6">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Contact us today to discuss your needs and discover how our services can help you achieve your goals.
            </p>
            <Button size="lg" asChild>
              <Link href="/contact">
                Get in Touch
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
  )
}