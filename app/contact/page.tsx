"use client"

import { useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Checkbox } from '@/components/ui/checkbox'
import { Card, CardContent } from '@/components/ui/card'
import { Mail, Phone, MapPin, Send } from 'lucide-react'
import { useToast } from '@/hooks/use-toast'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export default function ContactPage() {
  const { toast } = useToast()
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    toast({
      title: "Message sent!",
      description: "We'll get back to you as soon as possible.",
    })
  }
  
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    
    // Hero section animations
    gsap.fromTo(
      '.contact-title', 
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6, ease: "power3.out" } // Reduced duration
    )
    
    gsap.fromTo(
      '.contact-subtitle', 
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6, delay: 0.1, ease: "power3.out" } // Reduced duration and delay
    )
    
    // Form and info animations
    gsap.fromTo(
      '.contact-form', 
      { y: 50, opacity: 0 },
      { 
        y: 0, 
        opacity: 1, 
        duration: 0.6, // Reduced duration
        delay: 0.2, // Reduced delay
        ease: "power3.out",
        scrollTrigger: {
          trigger: '.contact-form',
          start: "top 90%", // Added scroll trigger
          once: true
        }
      }
    )
    
    gsap.fromTo(
      '.contact-info', 
      { y: 50, opacity: 0 },
      { 
        y: 0, 
        opacity: 1, 
        duration: 0.6, // Reduced duration
        delay: 0.3, // Reduced delay
        ease: "power3.out",
        scrollTrigger: {
          trigger: '.contact-info',
          start: "top 90%", // Added scroll trigger
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
            <h1 className="contact-title font-playfair text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Get in Touch
            </h1>
            <p className="contact-subtitle text-xl md:text-2xl text-muted-foreground">
              Have a project in mind? We'd love to hear from you. Let's create something amazing together.
            </p>
          </div>
        </div>
      </section>
      
      {/* Contact Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="contact-form">
              <Card className="border border-border/50 bg-card/50 backdrop-blur-sm">
                <CardContent className="p-6 md:p-8">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-4">
                      <h2 className="text-2xl font-medium">Send us a message</h2>
                      <p className="text-muted-foreground">
                        Fill out the form below and we'll get back to you as soon as possible.
                      </p>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">First Name</Label>
                        <Input id="firstName" placeholder="John" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName">Last Name</Label>
                        <Input id="lastName" placeholder="Doe" required />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" placeholder="john@example.com" required />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone (optional)</Label>
                      <Input id="phone" type="tel" placeholder="+1 (555) 000-0000" />
                    </div>
                    
                    <div className="space-y-2">
                      <Label>What services are you interested in?</Label>
                      <RadioGroup defaultValue="web-design">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="web-design" id="web-design" />
                            <Label htmlFor="web-design">Web Design</Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="web-development" id="web-development" />
                            <Label htmlFor="web-development">Web Development</Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="branding" id="branding" />
                            <Label htmlFor="branding">Branding</Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="marketing" id="marketing" />
                            <Label htmlFor="marketing">Digital Marketing</Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="ui-ux" id="ui-ux" />
                            <Label htmlFor="ui-ux">UI/UX Design</Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="other" id="other" />
                            <Label htmlFor="other">Other</Label>
                          </div>
                        </div>
                      </RadioGroup>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="message">Message</Label>
                      <Textarea 
                        id="message" 
                        placeholder="Tell us about your project..." 
                        className="min-h-[120px]"
                        required
                      />
                    </div>
                    
                    <div className="flex items-start space-x-2">
                      <Checkbox id="terms" required />
                      <div className="grid gap-1.5 leading-none">
                        <Label
                          htmlFor="terms"
                          className="text-sm font-normal leading-snug text-muted-foreground"
                        >
                          I agree to the{" "}
                          <a href="/terms-of-service" className="text-primary underline">
                            terms of service
                          </a>{" "}
                          and{" "}
                          <a href="/privacy-policy" className="text-primary underline">
                            privacy policy
                          </a>
                          .
                        </Label>
                      </div>
                    </div>
                    
                    <Button type="submit" className="w-full">
                      Send Message
                      <Send className="ml-2 h-4 w-4" />
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
            
            {/* Contact Info */}
            <div className="contact-info space-y-8">
              <div>
                <h2 className="text-2xl font-medium mb-6">Contact Information</h2>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      <MapPin className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium mb-1">Our Location</h3>
                      <p className="text-muted-foreground">
                        123 Design Avenue, Creative District<br />
                        New York, NY 10001
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      <Mail className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium mb-1">Email Us</h3>
                      <p className="text-muted-foreground">
                        <a href="mailto:hello@luxestudio.com" className="hover:text-primary transition-colors">
                          hello@luxestudio.com
                        </a>
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      <Phone className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium mb-1">Call Us</h3>
                      <p className="text-muted-foreground">
                        <a href="tel:+12125551234" className="hover:text-primary transition-colors">
                          +1 (212) 555-1234
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <h2 className="text-2xl font-medium mb-6">Office Hours</h2>
                <ul className="space-y-2">
                  <li className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span className="text-muted-foreground">9:00 AM - 6:00 PM</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Saturday</span>
                    <span className="text-muted-foreground">10:00 AM - 4:00 PM</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Sunday</span>
                    <span className="text-muted-foreground">Closed</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h2 className="text-2xl font-medium mb-6">Follow Us</h2>
                <div className="flex space-x-4">
                  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-muted/50 flex items-center justify-center hover:bg-primary/10 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-instagram"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
                  </a>
                  <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-muted/50 flex items-center justify-center hover:bg-primary/10 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-twitter"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
                  </a>
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-muted/50 flex items-center justify-center hover:bg-primary/10 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
                  </a>
                  <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-muted/50 flex items-center justify-center hover:bg-primary/10 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-facebook"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
                  </a>
                </div>
              </div>
              
              {/* Map */}
              <div className="mt-8">
                <h2 className="text-2xl font-medium mb-6">Find Us</h2>
                <div className="aspect-video rounded-lg overflow-hidden border border-border/50">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.15830869428!2d-74.11976397304605!3d40.69766374874431!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sca!4v1659912153371!5m2!1sen!2sca" 
                    width="100%" 
                    height="100%" 
                    style={{ border: 0 }} 
                    allowFullScreen 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}