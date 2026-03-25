"use client"

import { Github, Calendar, ExternalLink, Cpu, Thermometer, Gamepad2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import Image from "next/image"
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
      "Automated worker tracking",
    ],
    tags: ["Raspberry Pi", "RFID", "IoT", "Node-RED", "MQTT"],
    github: "https://github.com/Noor186/Farm_System",
    image: "/projects/smart-farm.jpg",
    icon: Cpu,
    color: "emerald",
  },
  {
    title: "Smart Cooling System",
    subtitle: "IoT Project",
    period: "Sep 2025",
    description: "Developed an IoT-based environmental controller using DHT11 sensor to automate cooling and alerting systems.",
    highlights: [
      "Temperature & humidity monitoring",
      "MQTT and Blynk integration",
      "Remote dashboard monitoring",
    ],
    tags: ["Sensor Integration", "MQTT", "Blynk", "DHT11"],
    github: "https://github.com/Noor186/Temp_SIC",
    image: "/projects/smart-cooling.jpg",
    icon: Thermometer,
    color: "blue",
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
    image: null,
    icon: Gamepad2,
    color: "purple",
  },
]

const colorVariants = {
  emerald: {
    gradient: "from-emerald-500/20 to-emerald-600/5",
    iconBg: "bg-emerald-500/10 text-emerald-500 group-hover:bg-emerald-500 group-hover:text-white",
    border: "hover:border-emerald-500/50",
  },
  blue: {
    gradient: "from-blue-500/20 to-blue-600/5",
    iconBg: "bg-blue-500/10 text-blue-500 group-hover:bg-blue-500 group-hover:text-white",
    border: "hover:border-blue-500/50",
  },
  purple: {
    gradient: "from-purple-500/20 to-purple-600/5",
    iconBg: "bg-purple-500/10 text-purple-500 group-hover:bg-purple-500 group-hover:text-white",
    border: "hover:border-purple-500/50",
  },
}

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

        <div className="grid lg:grid-cols-3 gap-8">
          {projects.map((project, index) => {
            const colors = colorVariants[project.color as keyof typeof colorVariants]
            const Icon = project.icon
            
            return (
              <div
                key={project.title}
                className={`group bg-card rounded-2xl border border-border ${colors.border} transition-all duration-500 overflow-hidden flex flex-col hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/5 relative ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                {/* Project Image or Icon Header */}
                {project.image ? (
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-t ${colors.gradient} to-transparent opacity-60`} />
                    <div className="absolute top-4 left-4">
                      <div className={`p-2.5 rounded-xl ${colors.iconBg} transition-all duration-300 backdrop-blur-sm`}>
                        <Icon className="w-5 h-5" />
                      </div>
                    </div>
                    <Badge className="absolute top-4 right-4 bg-background/80 backdrop-blur-sm text-foreground">
                      {project.subtitle}
                    </Badge>
                  </div>
                ) : (
                  <div className={`relative h-32 bg-gradient-to-br ${colors.gradient} flex items-center justify-center`}>
                    <div className={`p-4 rounded-2xl ${colors.iconBg} transition-all duration-300`}>
                      <Icon className="w-10 h-10" />
                    </div>
                    <Badge className="absolute top-4 right-4 bg-background/80 backdrop-blur-sm text-foreground">
                      {project.subtitle}
                    </Badge>
                  </div>
                )}
                
                {/* Project content */}
                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                  </div>
                  
                  <div className="flex items-center gap-1.5 text-xs text-muted-foreground mb-4">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{project.period}</span>
                  </div>
                  
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    {project.description}
                  </p>
                  
                  {/* Highlights */}
                  <ul className="space-y-1.5 mb-4">
                    {project.highlights.map((item, i) => (
                      <li key={i} className="text-muted-foreground text-sm flex gap-2">
                        <span className="text-primary flex-shrink-0">&#9658;</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="outline" className="text-xs font-normal hover:bg-primary/10 transition-colors">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  {/* Spacer to push button to bottom */}
                  <div className="flex-1" />

                  {/* Action button */}
                  <Button asChild className="w-full group/btn hover:scale-[1.02] transition-all">
                    <Link href={project.github} target="_blank" className="flex items-center justify-center gap-2">
                      <Github className="w-4 h-4" />
                      View on GitHub
                      <ExternalLink className="w-3.5 h-3.5 opacity-0 group-hover/btn:opacity-100 transition-opacity -ml-1" />
                    </Link>
                  </Button>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
