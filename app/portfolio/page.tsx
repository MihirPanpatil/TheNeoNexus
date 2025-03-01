"use client"

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const categories = [
  { value: "all", label: "All Projects" },
  { value: "web", label: "Web Design" },
  { value: "branding", label: "Branding" },
  { value: "marketing", label: "Marketing" },
  { value: "ui-ux", label: "UI/UX" },
]

const projects = [
  {
    id: 1,
    title: "Luxury Fashion E-commerce",
    category: "web",
    description: "A premium online shopping experience for a high-end fashion brand, featuring elegant design and seamless user experience.",
    image: "https://images.unsplash.com/photo-1618220179428-22790b461013?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    link: "/portfolio/luxury-fashion"
  },
  {
    id: 2,
    title: "Artisan Coffee Brand",
    category: "branding",
    description: "Complete brand identity for an artisanal coffee roaster, including logo, packaging, and marketing materials.",
    image: "https://images.unsplash.com/photo-1517142089942-ba376ce32a2e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    link: "/portfolio/coffee-brand"
  },
  {
    id: 3,
    title: "Tech Startup Campaign",
    category: "marketing",
    description: "Comprehensive digital marketing strategy for a tech startup's product launch, resulting in 200% increase in conversions.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    link: "/portfolio/tech-startup"
  },
  {
    id: 4,
    title: "Wellness App Design",
    category: "ui-ux",
    description: "User-centered design for a wellness application, focusing on intuitive navigation and engaging user experience.",
    image: "https://images.unsplash.com/photo-1616469829941-c7200edec809?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    link: "/portfolio/wellness-app"
  },
  {
    id: 5,
    title: "Boutique Hotel Website",
    category: "web",
    description: "Elegant website design for a luxury boutique hotel, showcasing amenities and creating a seamless booking experience.",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    link: "/portfolio/boutique-hotel"
  },
  {
    id: 6,
    title: "Organic Food Packaging",
    category: "branding",
    description: "Sustainable packaging design for an organic food brand, emphasizing eco-friendly materials and vibrant visuals.",
    image: "https://images.unsplash.com/photo-1506617564039-2f3b650b7010?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    link: "/portfolio/organic-food"
  },
  {
    id: 7,
    title: "Financial Services Rebrand",
    category: "branding",
    description: "Complete rebranding for a financial services firm, modernizing their identity while maintaining trust and professionalism.",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    link: "/portfolio/financial-rebrand"
  },
  {
    id: 8,
    title: "Travel Blog Platform",
    category: "web",
    description: "Custom blog platform for travel enthusiasts, featuring immersive content presentation and intuitive content management.",
    image: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    link: "/portfolio/travel-blog"
  },
  {
    id: 9,
    title: "Fitness App Interface",
    category: "ui-ux",
    description: "Intuitive mobile app interface for a fitness tracking application, focusing on user motivation and progress visualization.",
    image: "https://images.unsplash.com/photo-1576678927484-cc907957088c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    link: "/portfolio/fitness-app"
  }
]

export default function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState("all")
  
  const filteredProjects = activeCategory === "all" 
    ? projects 
    : projects.filter(project => project.category === activeCategory)
  
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    
    // Hero section animations
    gsap.fromTo(
      '.portfolio-title', 
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6, ease: "power3.out" } // Reduced duration
    )
    
    gsap.fromTo(
      '.portfolio-subtitle', 
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6, delay: 0.1, ease: "power3.out" } // Reduced duration and delay
    )
    
    // Filter buttons animation
    gsap.fromTo(
      '.filter-buttons', 
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6, delay: 0.2, ease: "power3.out" } // Reduced duration and delay
    )
    
    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill())
    }
  }, [])
  
  useEffect(() => {
    // Animate projects when category changes
    gsap.fromTo(
      '.project-item', 
      { y: 30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        stagger: 0.05, // Reduced stagger
        duration: 0.6, // Reduced duration
        ease: "power3.out"
      }
    )
  }, [activeCategory])

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="absolute inset-0 bg-gradient-to-b from-background to-background/60 dark:from-background dark:to-background/80 z-0" />
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-1/3 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        
        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="portfolio-title font-playfair text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Our Portfolio
            </h1>
            <p className="portfolio-subtitle text-xl md:text-2xl text-muted-foreground">
              Explore our collection of award-winning projects that showcase our creativity and expertise.
            </p>
          </div>
        </div>
      </section>
      
      {/* Portfolio Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          {/* Filter buttons */}
          <div className="filter-buttons flex flex-wrap justify-center gap-4 mb-16">
            {categories.map(category => (
              <Button
                key={category.value}
                variant={activeCategory === category.value ? "default" : "outline"}
                onClick={() => setActiveCategory(category.value)}
                className="min-w-[100px]"
              >
                {category.label}
              </Button>
            ))}
          </div>
          
          {/* Projects grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map(project => (
              <Link 
                key={project.id} 
                href={project.link}
                className="project-item group block overflow-hidden rounded-lg border border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/50 transition-all duration-300"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <div className="absolute inset-0 bg-primary/70 opacity-0 group-hover:opacity-90 transition-opacity duration-300 z-10 flex flex-col items-center justify-center p-6">
                    <h3 className="text-xl font-medium text-white mb-2">{project.title}</h3>
                    <p className="text-white/90 text-center mb-4">{project.description}</p>
                    <Button variant="outline" size="sm" className="text-white border-white hover:bg-white/20">
                      View Project
                    </Button>
                  </div>
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-medium mb-1">{project.title}</h3>
                  <p className="text-sm text-muted-foreground capitalize">{project.category}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-6">
              Ready to Create Your Success Story?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Let's collaborate to bring your vision to life. Contact us today to discuss your project.
            </p>
            <Button size="lg" asChild>
              <Link href="/contact">
                Start Your Project
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}