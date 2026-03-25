"use client"

import { Github, Linkedin, Mail, Phone, Download, ChevronDown, MapPin, Briefcase } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import Image from "next/image"

const techBadges = ["Python", "SQL", "ETL", "Pandas", "NumPy", "Matplotlib"]

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/10 via-background to-background" />
      <div className="absolute top-20 right-20 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left order-2 lg:order-1">
            {/* Status badges */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 mb-6">
              <Badge variant="secondary" className="px-3 py-1 text-sm">
                <Briefcase className="w-3 h-3 mr-1.5" />
                Open for Internship
              </Badge>
              <Badge variant="outline" className="px-3 py-1 text-sm">
                <MapPin className="w-3 h-3 mr-1.5" />
                Egypt
              </Badge>
            </div>
            
            <p className="text-primary font-medium text-lg mb-2">{"Hi, I'm"}</p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-4">
              Noor Gaffar
            </h1>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-primary mb-6">
              Data Engineer
            </h2>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto lg:mx-0 mb-6 leading-relaxed">
              I build efficient data pipelines and transform raw data into clean, reliable insights using Python and SQL.
            </p>
            
            {/* Tech badges */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 mb-8">
              {techBadges.map((tech) => (
                <Badge key={tech} variant="secondary" className="px-3 py-1.5 text-sm font-medium">
                  {tech}
                </Badge>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-8">
              <Button asChild size="lg" className="w-full sm:w-auto">
                <Link href="#contact">
                  Get in Touch
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="w-full sm:w-auto">
                <a href="/Noor_Gaffar_CV.pdf" download>
                  <Download className="w-5 h-5 mr-2" />
                  Download CV
                </a>
              </Button>
            </div>
            
            {/* Social Links */}
            <div className="flex items-center justify-center lg:justify-start gap-3">
              <Link
                href="https://www.linkedin.com/in/noor-gaffar"
                target="_blank"
                className="p-3 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </Link>
              <Link
                href="https://github.com/Noor186"
                target="_blank"
                className="p-3 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </Link>
              <Link
                href="mailto:gafernour@gmail.com"
                className="p-3 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </Link>
              <Link
                href="tel:+201287153500"
                className="p-3 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                aria-label="Phone"
              >
                <Phone className="w-5 h-5" />
              </Link>
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex justify-center order-1 lg:order-2">
            <div className="relative">
              {/* Decorative ring */}
              <div className="absolute -inset-4 rounded-full bg-gradient-to-br from-primary/40 via-primary/20 to-transparent blur-sm" />
              
              {/* Image container */}
              <div className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-[380px] lg:h-[380px] rounded-full overflow-hidden border-4 border-primary/30 bg-secondary shadow-2xl">
                <Image
                  src="/profile.png"
                  alt="Noor Gaffar"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              
              {/* GPA Badge */}
              <div className="absolute -bottom-2 right-4 bg-primary text-primary-foreground px-5 py-2.5 rounded-full shadow-lg border-2 border-background">
                <span className="text-sm font-bold">GPA 3.9/4.0</span>
              </div>
              
              {/* Name card */}
              <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 bg-card border border-border px-6 py-3 rounded-xl shadow-lg text-center min-w-[200px]">
                <p className="font-bold text-foreground">Noor Gaffar</p>
                <p className="text-sm text-primary font-medium">Data Engineer</p>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-primary/10 rounded-full blur-2xl" />
              <div className="absolute -bottom-6 -left-6 w-20 h-20 bg-primary/10 rounded-full blur-2xl" />
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
