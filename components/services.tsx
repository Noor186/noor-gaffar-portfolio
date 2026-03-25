"use client"

import { Database, BarChart3, Cloud, Workflow } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { useEffect, useState, useRef } from "react"

const services = [
  {
    title: "Data Pipeline Development",
    description: "Building efficient ETL pipelines to extract, transform, and load data from various sources into data warehouses for analysis.",
    icon: Workflow,
    tags: ["ETL", "ELT", "Automation"],
    color: "from-blue-500/20 to-blue-600/5",
  },
  {
    title: "Data Analysis & Visualization",
    description: "Analyzing complex datasets using Python libraries and creating insightful visualizations with Matplotlib and Seaborn.",
    icon: BarChart3,
    tags: ["Matplotlib", "Seaborn", "Pandas"],
    color: "from-emerald-500/20 to-emerald-600/5",
  },
  {
    title: "Database Management",
    description: "Designing and optimizing SQL databases, writing complex queries, and ensuring data integrity and performance.",
    icon: Database,
    tags: ["SQL", "Schema", "Optimization"],
    color: "from-amber-500/20 to-amber-600/5",
  },
  {
    title: "Cloud Data Solutions",
    description: "Implementing scalable data solutions using cloud architecture principles and modern data engineering practices.",
    icon: Cloud,
    tags: ["Cloud", "Scalability", "Architecture"],
    color: "from-purple-500/20 to-purple-600/5",
  },
]

export function Services() {
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
    <section id="services" ref={sectionRef} className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-3">What I Do</p>
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Services
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            From raw data ingestion to clean, structured outputs — covering the full data engineering lifecycle.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`group bg-card p-8 rounded-2xl border border-border hover:border-primary/50 transition-all duration-500 hover-lift relative overflow-hidden ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Background gradient on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              
              <div className="relative z-10 flex items-start gap-5">
                <div className="p-4 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 flex-shrink-0 group-hover:scale-110">
                  <service.icon className="w-7 h-7" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-5">
                    {service.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {service.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-xs px-3 py-1 hover:bg-primary hover:text-primary-foreground transition-colors cursor-default">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
