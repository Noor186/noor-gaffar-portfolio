import { Github, ExternalLink, Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"

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
  },
]

export function Projects() {
  return (
    <section id="projects" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-primary font-medium mb-2">Portfolio</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Projects
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Real-world IoT and data engineering projects {"I've"} built.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group bg-card rounded-xl border border-border hover:border-primary/50 transition-all duration-300 overflow-hidden flex flex-col"
            >
              {/* Project header */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <Badge variant="secondary" className="text-xs">
                    {project.subtitle}
                  </Badge>
                  <div className="flex items-center gap-1 text-xs text-muted-foreground">
                    <Calendar className="w-3 h-3" />
                    <span>{project.period}</span>
                  </div>
                </div>
                
                <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {project.description}
                </p>
                
                {/* Highlights */}
                <ul className="space-y-1.5 mb-4">
                  {project.highlights.map((item, i) => (
                    <li key={i} className="text-muted-foreground text-sm flex gap-2">
                      <span className="text-primary flex-shrink-0">▸</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="outline" className="text-xs font-normal">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Action button */}
              <div className="px-6 pb-6 mt-auto">
                <Button asChild variant="outline" size="sm" className="w-full">
                  <Link href={project.github} target="_blank">
                    <Github className="w-4 h-4 mr-2" />
                    View Repository
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
