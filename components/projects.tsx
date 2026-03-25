import { Github, ExternalLink, Cpu, Thermometer, Gamepad2, Zap, Recycle, Shield, Trophy } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const projects = [
  {
    title: "Smart Farm Management System",
    description: "Built an IoT-based monitoring system using Raspberry Pi, MQTT, and Node-RED to automate alerts and reduce manual farm inspection. Created a real-time dashboard and Telegram alert system with automated worker attendance tracking.",
    tags: ["Raspberry Pi", "MQTT", "Node-RED", "Telegram Bot", "IoT"],
    icon: Cpu,
    github: "https://github.com/Noor186/Farm_System",
    achievement: "Samsung Innovation Campus Project",
  },
  {
    title: "Smart Cooling System",
    description: "Built an IoT-based environment controller using DHT11 sensor to automate cooling fans and alerts based on temperature and humidity thresholds. Designed MQTT and Blynk for remote dashboard monitoring.",
    tags: ["DHT11", "MQTT", "Blynk", "IoT", "Arduino"],
    icon: Thermometer,
    github: "https://github.com/Noor186/Temp_SIC",
    achievement: "IoT Project",
  },
  {
    title: "Gesture Controlled Robot Car",
    description: "Built a robot car controlled by hand gestures using Arduino Uno. Established wireless control via HC-05 Bluetooth module for seamless gesture recognition and movement control.",
    tags: ["Arduino", "HC-05 Bluetooth", "Gesture Control", "Robotics"],
    icon: Gamepad2,
    github: "https://github.com/Noor186/Gesture-robot-car",
    achievement: "University Project",
  },
  {
    title: "Bolt Energy Harvesting Shoe",
    description: "Led electrical circuit design using Multisim for an energy-harvesting shoe that converts kinetic energy into electrical power using magnetic induction. Achieved 1st place overall Egypt and 2nd place in presentation.",
    tags: ["Multisim", "Circuit Design", "Energy Harvesting", "Innovation"],
    icon: Zap,
    achievement: "1st Place Egypt - AAKRUTI Competition",
  },
  {
    title: "Ecosta Social Enterprise",
    description: "Co-founded a women-led venture that upcycles seashells into sellable products. Won second place and secured seed fund in the Empower Hub Competition.",
    tags: ["Entrepreneurship", "Sustainability", "Social Impact"],
    icon: Recycle,
    achievement: "2nd Place - Empower Hub Competition",
  },
  {
    title: "Security Alarm System",
    description: "Designed and hand-soldered a laser security circuit with transistor switch and buzzer. Placed 3rd between 20+ teams in the PMMC2 Competition.",
    tags: ["Electronics", "Circuit Design", "Soldering", "Security"],
    icon: Shield,
    achievement: "3rd Place - PMMC2 Competition",
  },
]

export function Projects() {
  return (
    <section id="projects" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Featured <span className="text-primary">Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A selection of projects showcasing my skills in IoT, data engineering, and innovation
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group bg-card rounded-2xl border border-border hover:border-primary/50 transition-all duration-300 overflow-hidden flex flex-col"
            >
              {/* Project header */}
              <div className="p-6 pb-4">
                <div className="flex items-start justify-between mb-4">
                  <div className="p-3 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                    <project.icon className="w-6 h-6" />
                  </div>
                  {project.github && (
                    <Link
                      href={project.github}
                      target="_blank"
                      className="p-2 rounded-lg bg-secondary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                    >
                      <Github className="w-5 h-5" />
                    </Link>
                  )}
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                {project.achievement && (
                  <div className="flex items-center gap-2 text-primary text-sm mb-3">
                    <Trophy className="w-4 h-4" />
                    <span>{project.achievement}</span>
                  </div>
                )}
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {project.description}
                </p>
              </div>

              {/* Tags */}
              <div className="px-6 pb-6 mt-auto">
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 text-xs bg-secondary text-muted-foreground rounded-md"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action button for projects with GitHub */}
              {project.github && (
                <div className="px-6 pb-6">
                  <Button asChild variant="outline" className="w-full">
                    <Link href={project.github} target="_blank">
                      <Github className="w-4 h-4 mr-2" />
                      View on GitHub
                      <ExternalLink className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
