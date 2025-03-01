"use client"

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
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
    image: "https://images.unsplash.com/photo-1618220179428-22790b461013?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    link: "/portfolio/luxury-fashion"
  },
  {
    id: 2,
    title: "Artisan Coffee Brand",
    category: "branding",
    image: "https://images.unsplash.com/photo-1517142089942-ba376ce32a2e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    link: "/portfolio/coffee-brand"
  },
  {
    id: 3,
    title: "Tech Startup Campaign",
    category: "marketing",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    link: "/portfolio/tech-startup"
  },
  {
    id: 4,
    title: "Wellness App Design",
    category: "ui-ux",
    image: "https://images.unsplash.com/photo-1616469829941-c7200edec809?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    link: "/portfolio/wellness-app"
  },
  {
    id: 5,
    title: "Boutique Hotel Website",
    category: "web",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    link: "/portfolio/boutique-hotel"
  },
  {
    id: 6,
    title: "Organic Food Packaging",
    category: "branding",
    image: "https://images.unsplash.com/photo-1506617564039-2f3b650b7010?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    link: "/portfolio/organic-food"
  }
]

export default function Portfolio() {
  const [activeTab, setActiveTab] = useState("all")
  const sectionRef = useRef<HTMLDivElement>(null)
  
  const filteredProjects = activeTab === "all" 
    ? projects 
    : projects.filter(project => project.category === activeTab)
  
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    
    gsap.fromTo(
      '.portfolio-title', 
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
      '.portfolio-description', 
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
    
    gsap.fromTo(
      '.portfolio-tabs', 
      { y: 20, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        delay: 0.3,
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
    // Animate projects when tab changes
    const projectItems = document.querySelectorAll('.project-item')
    
    gsap.fromTo(
      projectItems, 
      { y: 30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        stagger: 0.1,
        duration: 0.6,
        ease: "power3.out"
      }
    )
  }, [activeTab])

  return (
    <section ref={sectionRef} className="py-24">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="portfolio-title font-playfair text-3xl md:text-4xl font-bold mb-4">
            Our Featured Work
          </h2>
          <p className="portfolio-description text-xl text-muted-foreground">
            Explore our portfolio of award-winning projects that showcase our creativity and expertise.
          </p>
        </div>
        
        <Tabs 
          defaultValue="all" 
          value={activeTab} 
          onValueChange={setActiveTab}
          className="portfolio-tabs"
        >
          <div className="flex justify-center mb-12">
            <TabsList className="bg-muted/50">
              {categories.map(category => (
                <TabsTrigger 
                  key={category.value} 
                  value={category.value}
                  className="data-[state=active]:bg-background"
                >
                  {category.label}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>
          
          <TabsContent value={activeTab} className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map(project => (
                <Link 
                  key={project.id} 
                  href={project.link}
                  className="project-item group block overflow-hidden rounded-lg"
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <div className="absolute inset-0 bg-primary/70 opacity-0 group-hover:opacity-90 transition-opacity duration-300 z-10 flex flex-col items-center justify-center p-6">
                      <h3 className="text-xl font-medium text-white mb-2">{project.title}</h3>
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
                </Link>
              ))}
            </div>
          </TabsContent>
        </Tabs>
        
        <div className="mt-16 text-center">
          <Button size="lg" asChild>
            <Link href="/portfolio">
              View All Projects
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}