"use client"

import { Code2, Database, BarChart3, Cloud, Terminal } from "lucide-react"
import { useEffect, useState, useRef } from "react"

const skillCategories = [
  {
    title: "Python & Core",
    icon: Code2,
    skills: [
      { name: "Python", level: 90 },
      { name: "SQL", level: 88 },
      { name: "OOP", level: 83 },
    ],
  },
  {
    title: "Data Processing",
    icon: Database,
    skills: [
      { name: "Pandas", level: 85 },
      { name: "NumPy", level: 82 },
      { name: "ETL", level: 80 },
    ],
  },
  {
    title: "Visualization",
    icon: BarChart3,
    skills: [
      { name: "Matplotlib", level: 75 },
      { name: "Seaborn", level: 72 },
    ],
  },
  {
    title: "Cloud & Infrastructure",
    icon: Cloud,
    skills: [
      { name: "Cloud Architecture", level: 70 },
      { name: "Database Management", level: 78 },
    ],
  },
  {
    title: "Tools & Platforms",
    icon: Terminal,
    skills: [
      { name: "Linux", level: 78 },
      { name: "Git / GitHub", level: 85 },
    ],
  },
]

function ProgressBar({ value, delay }: { value: number; delay: number }) {
  const [width, setWidth] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        setWidth(value)
      }, delay)
      return () => clearTimeout(timer)
    }
  }, [isVisible, value, delay])

  return (
    <div ref={ref} className="h-2.5 bg-secondary rounded-full overflow-hidden">
      <div
        className="h-full bg-gradient-to-r from-primary to-primary/70 rounded-full transition-all duration-1000 ease-out"
        style={{ width: `${width}%` }}
      />
    </div>
  )
}

export function Skills() {
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
    <section id="skills" ref={sectionRef} className="py-24 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-3">Expertise</p>
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Technical Skills
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Core tools and technologies I use to build reliable data infrastructure.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, catIndex) => (
            <div
              key={category.title}
              className={`bg-card p-6 rounded-2xl border border-border hover:border-primary/50 transition-all duration-500 group hover-lift ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: `${catIndex * 100}ms` }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                  <category.icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">{category.title}</h3>
              </div>
              <div className="space-y-5">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name}>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-foreground font-medium">{skill.name}</span>
                      <span className="text-sm font-semibold text-primary">{skill.level}%</span>
                    </div>
                    <ProgressBar value={skill.level} delay={catIndex * 100 + skillIndex * 100} />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
