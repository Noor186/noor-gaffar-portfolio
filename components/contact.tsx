"use client"

import { Mail, Phone, Linkedin, Github, MapPin, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import Link from "next/link"
import { useState } from "react"

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "gafernour@gmail.com",
    href: "mailto:gafernour@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+20 128 715 3500",
    href: "tel:+201287153500",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "noor-gaffar",
    href: "https://www.linkedin.com/in/noor-gaffar",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "Noor186",
    href: "https://github.com/Noor186",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Port Said, Egypt",
    href: null,
  },
]

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Create mailto link with form data
    const mailtoLink = `mailto:gafernour@gmail.com?subject=${encodeURIComponent(
      formData.subject
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`
    window.location.href = mailtoLink
  }

  return (
    <section id="contact" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Get In <span className="text-primary">Touch</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Feel free to reach out for collaborations, opportunities, or just to say hello!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold text-foreground mb-6">
              Contact Information
            </h3>
            <div className="space-y-4">
              {contactInfo.map((item) => (
                <div
                  key={item.label}
                  className="flex items-center gap-4 p-4 bg-card rounded-xl border border-border hover:border-primary/50 transition-all duration-300"
                >
                  <div className="p-3 rounded-lg bg-primary/10 text-primary">
                    <item.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">{item.label}</p>
                    {item.href ? (
                      <Link
                        href={item.href}
                        target={item.href.startsWith("http") ? "_blank" : undefined}
                        className="text-foreground hover:text-primary transition-colors"
                      >
                        {item.value}
                      </Link>
                    ) : (
                      <p className="text-foreground">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div className="mt-8">
              <p className="text-muted-foreground mb-4">Connect with me on social media</p>
              <div className="flex gap-4">
                <Link
                  href="https://www.linkedin.com/in/noor-gaffar"
                  target="_blank"
                  className="p-3 rounded-full bg-card border border-border hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300"
                >
                  <Linkedin className="w-5 h-5" />
                </Link>
                <Link
                  href="https://github.com/Noor186"
                  target="_blank"
                  className="p-3 rounded-full bg-card border border-border hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300"
                >
                  <Github className="w-5 h-5" />
                </Link>
                <Link
                  href="mailto:gafernour@gmail.com"
                  className="p-3 rounded-full bg-card border border-border hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300"
                >
                  <Mail className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-card p-8 rounded-2xl border border-border">
            <h3 className="text-xl font-semibold text-foreground mb-6">
              Send a Message
            </h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-muted-foreground mb-2">
                    Your Name
                  </label>
                  <Input
                    id="name"
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-muted-foreground mb-2">
                    Your Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                  />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-muted-foreground mb-2">
                  Subject
                </label>
                <Input
                  id="subject"
                  placeholder="What is this about?"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-muted-foreground mb-2">
                  Message
                </label>
                <Textarea
                  id="message"
                  placeholder="Your message..."
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                />
              </div>
              <Button type="submit" className="w-full" size="lg">
                <Send className="w-4 h-4 mr-2" />
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
