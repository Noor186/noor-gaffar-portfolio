"use client"

import { Mail, Phone, Linkedin, Github, MapPin } from "lucide-react"
import Link from "next/link"

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "gafernour@gmail.com",
    href: "mailto:gafernour@gmail.com",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/noor-gaffar",
    href: "https://www.linkedin.com/in/noor-gaffar",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "github.com/Noor186",
    href: "https://github.com/Noor186",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+20 128 715 3500",
    href: "tel:+201287153500",
  },
]

export function Contact() {
  return (
    <section id="contact" className="py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-primary font-medium mb-2">Get In Touch</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            {"Let's Connect"}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Open to internship opportunities, collaborations, and data engineering conversations.
          </p>
        </div>

        {/* Contact Cards Grid */}
        <div className="grid sm:grid-cols-2 gap-4">
          {contactInfo.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              target={item.href.startsWith("http") ? "_blank" : undefined}
              className="flex items-center gap-4 p-5 bg-card rounded-xl border border-border hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 group"
            >
              <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <item.icon className="w-5 h-5" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">{item.label}</p>
                <p className="text-foreground font-medium group-hover:text-primary transition-colors">
                  {item.value}
                </p>
              </div>
            </Link>
          ))}
        </div>

        {/* Location */}
        <div className="mt-8 text-center">
          <div className="inline-flex items-center gap-2 text-muted-foreground">
            <MapPin className="w-4 h-4" />
            <span>Port Said, Egypt</span>
          </div>
        </div>
      </div>
    </section>
  )
}
