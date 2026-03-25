"use client"

import { Github, Linkedin, Mail, Phone, Download, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/20 via-background to-background" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left order-2 lg:order-1">
            <p className="text-primary font-medium mb-2">Hello, I am</p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-4">
              Noor Gaffar
            </h1>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-primary mb-6">
              Data Engineer
            </h2>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto lg:mx-0 mb-8 leading-relaxed">
              Passionate about building data pipelines, IoT systems, and leveraging technology to solve real-world problems. 
              Currently pursuing Electronics & Communication Engineering at Port Said University.
            </p>
            
            {/* Social Links */}
            <div className="flex items-center justify-center lg:justify-start gap-4 mb-8">
              <Link
                href="https://www.linkedin.com/in/noor-gaffar"
                target="_blank"
                className="p-3 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              >
                <Linkedin className="w-5 h-5" />
              </Link>
              <Link
                href="https://github.com/Noor186"
                target="_blank"
                className="p-3 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              >
                <Github className="w-5 h-5" />
              </Link>
              <Link
                href="mailto:gafernour@gmail.com"
                className="p-3 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              >
                <Mail className="w-5 h-5" />
              </Link>
              <Link
                href="tel:+201287153500"
                className="p-3 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              >
                <Phone className="w-5 h-5" />
              </Link>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <Button asChild size="lg" className="w-full sm:w-auto">
                <a href="/Noor_Gaffar_CV.pdf" download>
                  <Download className="w-5 h-5 mr-2" />
                  Download CV
                </a>
              </Button>
              <Button asChild variant="outline" size="lg" className="w-full sm:w-auto">
                <Link href="#contact">
                  Contact Me
                </Link>
              </Button>
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex justify-center order-1 lg:order-2">
            <div className="relative">
              {/* Decorative ring */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary via-primary/50 to-transparent p-1 animate-pulse" style={{ transform: "scale(1.05)" }} />
              
              {/* Image container */}
              <div className="relative w-80 h-80 sm:w-88 sm:h-88 lg:w-[420px] lg:h-[420px] rounded-full overflow-hidden border-4 border-primary/30 bg-secondary">
                <Image
                  src="/profile.jpg"
                  alt="Noor Gaffar"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              
              {/* GPA Badge */}
              <div className="absolute -bottom-2 right-4 bg-primary text-primary-foreground px-4 py-2 rounded-full shadow-lg">
                <span className="text-sm font-bold">GPA: 3.9/4.0</span>
              </div>
              
              {/* Decorative dots */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-primary/20 rounded-full blur-xl" />
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-primary/20 rounded-full blur-xl" />
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
