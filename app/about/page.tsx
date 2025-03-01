"use client"

import { useEffect } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowRight, Award, Users, Clock, Zap } from 'lucide-react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export default function AboutPage() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    
    // Hero section animations
    gsap.fromTo(
      '.about-title', 
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6, ease: "power3.out" }
    )
    
    gsap.fromTo(
      '.about-subtitle', 
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6, delay: 0.1, ease: "power3.out" }
    )
    
    // Story section animations
    gsap.fromTo(
      '.story-title', 
      { y: 50, opacity: 0 },
      { 
        y: 0, 
        opacity: 1, 
        duration: 0.6,
        scrollTrigger: {
          trigger: '.story-section',
          start: "top 90%",
          once: true
        }
      }
    )
    
    gsap.fromTo(
      '.story-content', 
      { y: 30, opacity: 0 },
      { 
        y: 0, 
        opacity: 1, 
        duration: 0.6,
        delay: 0.1,
        scrollTrigger: {
          trigger: '.story-section',
          start: "top 90%",
          once: true
        }
      }
    )
    
    // Stats animations - UPDATED: removed stagger
    gsap.fromTo(
      '.stat-item', 
      { y: 30, opacity: 0 },
      { 
        y: 0, 
        opacity: 1,
        duration: 0.6,
        scrollTrigger: {
          trigger: '.stats-section',
          start: "top 90%",
          once: true
        }
      }
    )
    
    // Team animations
    gsap.fromTo(
      '.team-title', 
      { y: 50, opacity: 0 },
      { 
        y: 0, 
        opacity: 1, 
        duration: 0.6,
        scrollTrigger: {
          trigger: '.team-section',
          start: "top 90%",
          once: true
        }
      }
    )
    
    gsap.fromTo(
      '.team-description', 
      { y: 30, opacity: 0 },
      { 
        y: 0, 
        opacity: 1, 
        duration: 0.6,
        delay: 0.1,
        scrollTrigger: {
          trigger: '.team-section',
          start: "top 90%",
          once: true
        }
      }
    )
    
    // Team members - UPDATED: removed stagger
    gsap.fromTo(
      '.team-member', 
      { y: 30, opacity: 0 },
      { 
        y: 0, 
        opacity: 1,
        duration: 0.6,
        scrollTrigger: {
          trigger: '.team-grid',
          start: "top 90%",
          once: true
        }
      }
    )
    
    // Values animations
    gsap.fromTo(
      '.values-title', 
      { y: 50, opacity: 0 },
      { 
        y: 0, 
        opacity: 1, 
        duration: 0.6,
        scrollTrigger: {
          trigger: '.values-section',
          start: "top 90%",
          once: true
        }
      }
    )
    
    gsap.fromTo(
      '.values-description', 
      { y: 30, opacity: 0 },
      { 
        y: 0, 
        opacity: 1, 
        duration: 0.6,
        delay: 0.1,
        scrollTrigger: {
          trigger: '.values-section',
          start: "top 90%",
          once: true
        }
      }
    )
    
    // Value items - UPDATED: removed stagger
    gsap.fromTo(
      '.value-item', 
      { y: 30, opacity: 0 },
      { 
        y: 0, 
        opacity: 1,
        duration: 0.6,
        scrollTrigger: {
          trigger: '.values-grid',
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
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="absolute inset-0 bg-gradient-to-b from-background to-background/60 dark:from-background dark:to-background/80 z-0" />
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-1/3 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        
        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="about-title font-playfair text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              About LuxeStudio
            </h1>
            <p className="about-subtitle text-xl md:text-2xl text-muted-foreground">
              We're a team of passionate creatives dedicated to crafting exceptional digital experiences that elevate brands and drive results.
            </p>
          </div>
        </div>
      </section>
      
      {/* Our Story Section */}
      <section className="py-16 md:py-24 story-section">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="story-title font-playfair text-3xl md:text-4xl font-bold mb-6">
                Our Story
              </h2>
              <div className="story-content space-y-4 text-lg">
                <p>
                  Founded in 2018, LuxeStudio began with a simple mission: to create digital experiences that are as beautiful as they are functional. What started as a small team of three passionate designers has grown into a full-service creative agency with a global client base.
                </p>
                <p>
                  Our journey has been defined by a relentless pursuit of excellence and a commitment to pushing creative boundaries. We believe that exceptional design has the power to transform businesses and create meaningful connections with audiences.
                </p>
                <p>
                  Today, we're proud to work with brands across various industries, from luxury fashion and hospitality to technology and wellness. Our diverse team brings together unique perspectives and specialized expertise to deliver truly innovative solutions.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] rounded-lg overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
                  alt="LuxeStudio team" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-background p-4 rounded-lg shadow-lg">
                <p className="text-sm font-medium">Established 2018</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Stats Section */}
      <section className="py-16 md:py-24 bg-muted/30 stats-section">
        <div className="container">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="stat-item bg-card/50 backdrop-blur-sm border border-border/50 rounded-lg p-6 text-center">
              <p className="text-4xl font-bold text-primary mb-2">150+</p>
              <p className="text-lg font-medium">Projects Completed</p>
            </div>
            <div className="stat-item bg-card/50 backdrop-blur-sm border border-border/50 rounded-lg p-6 text-center">
              <p className="text-4xl font-bold text-primary mb-2">98%</p>
              <p className="text-lg font-medium">Client Satisfaction</p>
            </div>
            <div className="stat-item bg-card/50 backdrop-blur-sm border border-border/50 rounded-lg p-6 text-center">
              <p className="text-4xl font-bold text-primary mb-2">12</p>
              <p className="text-lg font-medium">Industry Awards</p>
            </div>
            <div className="stat-item bg-card/50 backdrop-blur-sm border border-border/50 rounded-lg p-6 text-center">
              <p className="text-4xl font-bold text-primary mb-2">25+</p>
              <p className="text-lg font-medium">Team Members</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Team Section */}
      <section className="py-16 md:py-24 team-section">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="team-title font-playfair text-3xl md:text-4xl font-bold mb-4">
              Meet Our Team
            </h2>
            <p className="team-description text-xl text-muted-foreground">
              Our diverse team of experts brings together unique perspectives and specialized skills to deliver exceptional results.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 team-grid">
            <div className="team-member group">
              <div className="relative aspect-[3/4] rounded-lg overflow-hidden mb-4">
                <img 
                  src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
                  alt="Emily Chen" 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-primary/60 opacity-0 group-hover:opacity-90 transition-opacity duration-300 flex items-center justify-center">
                  <div className="flex gap-4">
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-white/80 transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
                    </a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-white/80 transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-twitter"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
                    </a>
                  </div>
                </div>
              </div>
              <h3 className="text-lg font-medium">Emily Chen</h3>
              <p className="text-muted-foreground">Creative Director</p>
            </div>
            
            <div className="team-member group">
              <div className="relative aspect-[3/4] rounded-lg overflow-hidden mb-4">
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
                  alt="David Rodriguez" 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-primary/60 opacity-0 group-hover:opacity-90 transition-opacity duration-300 flex items-center justify-center">
                  <div className="flex gap-4">
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-white/80 transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
                    </a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-white/80 transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-twitter"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
                    </a>
                  </div>
                </div>
              </div>
              <h3 className="text-lg font-medium">David Rodriguez</h3>
              <p className="text-muted-foreground">Lead Developer</p>
            </div>
            
            <div className="team-member group">
              <div className="relative aspect-[3/4] rounded-lg overflow-hidden mb-4">
                <img 
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
                  alt="Sarah Johnson" 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-primary/60 opacity-0 group-hover:opacity-90 transition-opacity duration-300 flex items-center justify-center">
                  <div className="flex gap-4">
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-white/80 transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
                    </a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-white/80 transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-twitter"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
                    </a>
                  </div>
                </div>
              </div>
              <h3 className="text-lg font-medium">Sarah Johnson</h3>
              <p className="text-muted-foreground">Design Lead</p>
            </div>
            
            <div className="team-member group">
              <div className="relative aspect-[3/4] rounded-lg overflow-hidden mb-4">
                <img 
                  src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
                  alt="Michael Park" 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-primary/60 opacity-0 group-hover:opacity-90 transition-opacity duration-300 flex items-center justify-center">
                  <div className="flex gap-4">
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-white/80 transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
                    </a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-white/80 transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-twitter"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
                    </a>
                  </div>
                </div>
              </div>
              <h3 className="text-lg font-medium">Michael Park</h3>
              <p className="text-muted-foreground">Marketing Strategist</p>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <Button asChild>
              <Link href="/careers">
                Join Our Team
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
      
      {/* Values Section */}
      <section className="py-16 md:py-24 bg-muted/30 values-section">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="values-title font-playfair text-3xl md:text-4xl font-bold mb-4">
              Our Core Values
            </h2>
            <p className="values-description text-xl text-muted-foreground">
              These principles guide everything we do and define who we are as a company.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 values-grid">
            <div className="value-item bg-card/50 backdrop-blur-sm border border-border/50 rounded-lg p-6 flex gap-4">
              <div className="shrink-0">
                <div className="w-12 h-12 rounded-md bg-primary/10 flex items-center justify-center">
                  <Award className="h-6 w-6 text-primary" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-medium mb-2">Excellence</h3>
                <p className="text-muted-foreground">
                  We are committed to delivering the highest quality in everything we do, constantly pushing boundaries and exceeding expectations.
                </p>
              </div>
            </div>
            
            <div className="value-item bg-card/50 backdrop-blur-sm border border-border/50 rounded-lg p-6 flex gap-4">
              <div className="shrink-0">
                <div className="w-12 h-12 rounded-md bg-primary/10 flex items-center justify-center">
                  <Users className="h-6 w-6 text-primary" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-medium mb-2">Collaboration</h3>
                <p className="text-muted-foreground">
                  We believe in the power of teamwork and partnership, working closely with our clients and each other to achieve shared goals.
                </p>
              </div>
            </div>
            
            <div className="value-item bg-card/50 backdrop-blur-sm border border-border/50 rounded-lg p-6 flex gap-4">
              <div className="shrink-0">
                <div className="w-12 h-12 rounded-md bg-primary/10 flex items-center justify-center">
                  <Zap className="h-6 w-6 text-primary" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-medium mb-2">Innovation</h3>
                <p className="text-muted-foreground">
                  We embrace creativity and forward-thinking, constantly exploring new ideas and technologies to deliver innovative solutions.
                </p>
              </div>
            </div>
            
            <div className="value-item bg-card/50 backdrop-blur-sm border border-border/50 rounded-lg p-6 flex gap-4">
              <div className="shrink-0">
                <div className="w-12 h-12 rounded-md bg-primary/10 flex items-center justify-center">
                  <Clock className="h-6 w-6 text-primary" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-medium mb-2">Reliability</h3>
                <p className="text-muted-foreground">
                  We pride ourselves on being dependable partners, delivering on our promises and maintaining the highest standards of integrity.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-background z-0" />
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-1/3 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        
        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-playfair text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Let's Create Something Amazing Together
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Ready to elevate your brand with our premium creative services? Get in touch today to discuss your project.
            </p>
            <Button size="lg" asChild>
              <Link href="/contact">
                Contact Us
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}