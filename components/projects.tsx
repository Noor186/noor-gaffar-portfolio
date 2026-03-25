"use client"

import { Github, Calendar, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { useEffect, useState, useRef } from "react"

const projects = [
  {
    title: "Smart Farm Management System",
    subtitle: "IoT Project (SIC)",
    period: "Aug 2025 – Oct 2025",
    description: "Built an IoT system with Raspberry Pi and multiple sensors for comprehensive farm monitoring and automation.",
    highlights: [
      "Real-time Node RED dashboard",
      "Telegram alert system",
      "Automated worker tracking and task assignment",
    ],
    tags: ["Raspberry Pi", "RFID", "IoT", "Node-RED", "MQTT"],
    github: "https://github.com/Noor186/Farm_System",
    gradient: "from-emerald-500/10 to-emerald-600/5",
  },
  {
    title: "Smart Cooling System",
    subtitle: "IoT Project",
    period: "Sep 2025",
    description: "Developed an IoT-based environmental controller using DHT11 sensor to automate cooling and alerting systems.",
    highlights: [
      "Temperature and humidity monitoring",
      "MQTT and Blynk integration",
      "Remote dashboard monitoring",
    ],
    tags: ["Sensor Integration", "MQTT", "Blynk", "DHT11"],
    github: "https://github.com/Noor186/Temp_SIC",
    gradient: "from-blue-500/10 to-blue-600/5",
  },
  {
    title: "Gesture Controlled Robot Car",
    subtitle: "Robotics Project",
    period: "2024",
    description: "Built a robot car controlled by hand gestures using Arduino and wireless Bluetooth communication.",
    highlights: [
      "Hand gesture recognition",
      "Wireless HC-05 Bluetooth control",
      "Real-time movement response",
    ],
    tags: ["Arduino", "Bluetooth", "Robotics", "Gesture Control"],
    github: "https://github.com/Noor186/Gesture-robot-car",
    gradient: "from-purple-500/10 to-purple-600/5",
  },
]

export function Projects() {
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
    <section id="projects" ref={sectionRef} className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-3">Portfolio</p>
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Projects
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Real-world IoT and data engineering projects {"I've"} built.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className={`group bg-card rounded-2xl border border-border hover:border-primary/50 transition-all duration-500 overflow-hidden flex flex-col hover-lift relative ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {/* Gradient overlay on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              
              {/* Project content */}
              <div className="p-6 relative z-10 flex-1 flex flex-col">
                <div className="flex items-center justify-between mb-4">
                  <Badge variant="secondary" className="text-xs px-3 py-1 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    {project.subtitle}
                  </Badge>
                  <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{project.period}</span>
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed mb-5">
                  {project.description}
                </p>
                
                {/* Highlights */}
                <ul className="space-y-2 mb-5">
                  {project.highlights.map((item, i) => (
                    <li key={i} className="text-muted-foreground text-sm flex gap-2">
                      <span className="text-primary flex-shrink-0 font-bold">▸</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="outline" className="text-xs font-normal hover:bg-primary/10 transition-colors">
                      {tag}
                    </Badge>
                  ))}
                </div>

                {/* Spacer to push button to bottom */}
                <div className="flex-1" />

                {/* Action button */}
                <Button asChild variant="outline" className="w-full group/btn hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all">
                  <Link href={project.github} target="_blank" className="flex items-center justify-center gap-2">
                    <Github className="w-4 h-4" />
                    View Repository
                    <ExternalLink className="w-3.5 h-3.5 opacity-0 group-hover/btn:opacity-100 transition-opacity" />
                  </Link>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
