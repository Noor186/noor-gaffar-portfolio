"use client"

import { Github, Linkedin, Mail, Phone, Download, ChevronDown, MapPin, Briefcase } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import Image from "next/image"
import { useEffect, useState } from "react"

const techBadges = ["Python", "SQL", "ETL", "Pandas", "NumPy", "Matplotlib"]

export function Hero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
      {/* Animated background elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/10 via-background to-background" />
      <div className="absolute top-20 right-20 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      <div className="absolute top-1/2 left-1/4 w-48 h-48 bg-primary/3 rounded-full blur-2xl animate-float" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text Content */}
          <div className={`text-center lg:text-left order-2 lg:order-1 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            {/* Status badges */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 mb-6">
              <Badge variant="secondary" className="px-4 py-1.5 text-sm animate-pulse">
                <Briefcase className="w-3.5 h-3.5 mr-1.5" />
                Open for Internship
              </Badge>
              <Badge variant="outline" className="px-4 py-1.5 text-sm">
                <MapPin className="w-3.5 h-3.5 mr-1.5" />
                Egypt
              </Badge>
            </div>
            
            <p className="text-primary font-medium text-lg mb-2">{"Hi, I'm"}</p>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-foreground mb-4 tracking-tight">
              Noor Gaffar
            </h1>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-primary mb-6">
              Data Engineer
            </h2>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto lg:mx-0 mb-8 leading-relaxed">
              I build efficient data pipelines and transform raw data into clean, reliable insights using Python and SQL.
            </p>
            
            {/* Tech badges with stagger animation */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 mb-8">
              {techBadges.map((tech, index) => (
                <Badge 
                  key={tech} 
                  variant="secondary" 
                  className="px-4 py-2 text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-all duration-300 cursor-default"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {tech}
                </Badge>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-8">
              <Button asChild size="lg" className="w-full sm:w-auto text-base px-8 hover:scale-105 transition-transform">
                <Link href="#contact">
                  Get in Touch
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="w-full sm:w-auto text-base px-8 hover:scale-105 transition-transform">
                <a href="/Noor_Gaffar_CV.pdf" download>
                  <Download className="w-5 h-5 mr-2" />
                  Download CV
                </a>
              </Button>
            </div>
            
            {/* Social Links */}
            <div className="flex items-center justify-center lg:justify-start gap-3">
              {[
                { href: "https://www.linkedin.com/in/noor-gaffar", icon: Linkedin, label: "LinkedIn" },
                { href: "https://github.com/Noor186", icon: Github, label: "GitHub" },
                { href: "mailto:gafernour@gmail.com", icon: Mail, label: "Email" },
                { href: "tel:+201287153500", icon: Phone, label: "Phone" },
              ].map((social, index) => (
                <Link
                  key={social.label}
                  href={social.href}
                  target={social.href.startsWith("http") ? "_blank" : undefined}
                  className="p-3 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110 hover:-translate-y-1"
                  aria-label={social.label}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <social.icon className="w-5 h-5" />
                </Link>
              ))}
            </div>
          </div>

          {/* Profile Image */}
          <div className={`flex justify-center order-1 lg:order-2 transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="relative">
              {/* Animated decorative ring */}
              <div className="absolute -inset-4 rounded-full bg-gradient-to-br from-primary/50 via-primary/20 to-transparent blur-md animate-pulse" />
              <div className="absolute -inset-8 rounded-full border-2 border-primary/20 animate-spin" style={{ animationDuration: '20s' }} />
              
              {/* Image container */}
              <div className="relative w-80 h-80 sm:w-96 sm:h-96 lg:w-[420px] lg:h-[420px] rounded-full overflow-hidden border-4 border-primary/40 bg-secondary shadow-2xl hover:border-primary/60 transition-all duration-500 group">
                <Image
                  src="/profile.png"
                  alt="Noor Gaffar"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  priority
                />
              </div>
              
              {/* GPA Badge - animated */}
              <div className="absolute -bottom-2 right-8 bg-primary text-primary-foreground px-5 py-2.5 rounded-full shadow-lg border-4 border-background animate-float hover:scale-110 transition-transform cursor-default">
                <span className="text-sm font-bold">GPA 3.9/4.0</span>
              </div>
              
              {/* Data Engineer badge */}
              <div className="absolute top-8 -left-4 bg-card border border-border shadow-lg animate-float" style={{ animationDelay: '0.5s', fontSize: '18px', paddingLeft: '25px', paddingRight: '21px', paddingTop: '11px', paddingBottom: '9px', borderRadius: '18px' }}>
                <p className="font-semibold text-primary">Data Engineer</p>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-6 -right-6 w-28 h-28 bg-primary/10 rounded-full blur-2xl" />
              <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-primary/10 rounded-full blur-2xl" />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <Link href="#skills" className="text-muted-foreground hover:text-primary transition-colors">
          <ChevronDown className="w-8 h-8" />
        </Link>
      </div>
    </section>
  )
}
