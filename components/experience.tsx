"use client"

import { Briefcase, Calendar } from "lucide-react"
import { useEffect, useState, useRef } from "react"

const experiences = [
  {
    title: "Data Engineering Trainee",
    company: "DEPI – Digital Egypt Pioneers Initiative",
    period: "Dec 2025 – Present",
    current: true,
    description: [
      "Applied SQL and Python (Pandas, NumPy) to analyze datasets and build data pipelines for practical use cases.",
      "Building proficiency in data visualization using Matplotlib and Seaborn.",
      "Gained hands-on experience in database management and ETL processes.",
    ],
  },
  {
    title: "Python Development Trainee",
    company: "Samsung Innovation Campus",
    period: "Jul 2024 – Sep 2024",
    current: false,
    description: [
      "Gained proficiency in Python, OOP, and Pandas for data manipulation.",
      "Applied JSON for data handling and structured data processing.",
      "Developed practical data processing skills applicable to real-world engineering tasks.",
    ],
  },
]

export function Experience() {
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
    <section id="experience" ref={sectionRef} className="py-24 bg-secondary/30">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-3">Work History</p>
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Experience
          </h2>
        </div>

        <div className="relative">
          {/* Timeline line - animated */}
          <div className={`absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary/50 to-transparent transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`} />

          <div className="space-y-10">
            {experiences.map((exp, index) => (
              <div 
                key={exp.title} 
                className={`relative pl-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                {/* Timeline dot - animated pulse for current */}
                <div className={`absolute left-4 w-5 h-5 rounded-full -translate-x-1/2 mt-1.5 ring-4 ring-background transition-all duration-500 ${
                  exp.current 
                    ? 'bg-primary animate-pulse shadow-lg shadow-primary/50' 
                    : 'bg-primary/60'
                }`} />

                <div className="bg-card p-7 rounded-2xl border border-border hover:border-primary/50 transition-all duration-300 hover-lift group">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-4">
                    <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">{exp.title}</h3>
                    <div className={`flex items-center gap-2 text-sm px-3 py-1 rounded-full ${exp.current ? 'bg-primary/10 text-primary' : 'bg-secondary text-muted-foreground'}`}>
                      <Calendar className="w-4 h-4" />
                      <span className="font-medium">{exp.period}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground mb-5">
                    <Briefcase className="w-4 h-4 text-primary" />
                    <span className="font-medium">{exp.company}</span>
                  </div>
                  <ul className="space-y-3">
                    {exp.description.map((item, i) => (
                      <li key={i} className="text-muted-foreground flex gap-3">
                        <span className="text-primary mt-1 flex-shrink-0 font-bold">▸</span>
                        <span className="leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
