"use client"

import { Mail, Phone, Linkedin, Github, MapPin, ExternalLink } from "lucide-react"
import Link from "next/link"
import { useEffect, useState, useRef } from "react"

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "gafernour@gmail.com",
    href: "mailto:gafernour@gmail.com",
    color: "from-red-500/20 to-red-600/5",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/noor-gaffar",
    href: "https://www.linkedin.com/in/noor-gaffar",
    color: "from-blue-500/20 to-blue-600/5",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "github.com/Noor186",
    href: "https://github.com/Noor186",
    color: "from-gray-500/20 to-gray-600/5",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+20 128 715 3500",
    href: "tel:+201287153500",
    color: "from-green-500/20 to-green-600/5",
  },
]

export function Contact() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="contact" ref={sectionRef} className="py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-3">Get In Touch</p>
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            {"Let's Connect"}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Open to internship opportunities, collaborations, and IoT engineering conversations.
          </p>
        </div>

        {/* Contact Cards Grid */}
        <div className="grid sm:grid-cols-2 gap-5">
          {contactInfo.map((item, index) => (
            <Link
              key={item.label}
              href={item.href}
              target={item.href.startsWith("http") ? "_blank" : undefined}
              className={`flex items-center gap-5 p-6 bg-card rounded-2xl border border-border hover:border-primary/50 transition-all duration-500 group hover-lift relative overflow-hidden ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Hover gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              
              <div className="relative z-10 p-4 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 group-hover:scale-110">
                <item.icon className="w-6 h-6" />
              </div>
              <div className="relative z-10 flex-1">
                <p className="text-sm text-muted-foreground mb-1">{item.label}</p>
                <p className="text-foreground font-semibold group-hover:text-primary transition-colors">
                  {item.value}
                </p>
              </div>
              <ExternalLink className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity relative z-10" />
            </Link>
          ))}
        </div>

        {/* Location */}
        <div className={`mt-10 text-center transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="inline-flex items-center gap-2 text-muted-foreground bg-secondary/50 px-5 py-2.5 rounded-full">
            <MapPin className="w-4 h-4 text-primary" />
            <span className="font-medium">Port Said, Egypt</span>
          </div>
        </div>
      </div>
    </section>
  )
}
