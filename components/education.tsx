"use client"

import { GraduationCap, Award, Calendar } from "lucide-react"
import { useEffect, useState, useRef } from "react"

const education = {
  degree: "B.Sc. in Electronics & Communication Engineering",
  university: "Port Said University · Egypt",
  period: "2023 – Present",
  gpa: "3.9 / 4.0",
}

export function Education() {
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
    <section id="education" ref={sectionRef} className="py-24 bg-secondary/30">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-3">Background</p>
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Education
          </h2>
        </div>

        {/* Education Card */}
        <div className={`bg-card p-8 sm:p-10 rounded-2xl border border-border hover:border-primary/50 transition-all duration-500 hover-lift group relative overflow-hidden ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          style={{ transitionDelay: '100ms' }}
        >
          {/* Decorative gradient */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-primary/10 to-transparent rounded-full blur-3xl" />
          
          <div className="relative z-10 flex items-start gap-6">
            <div className="p-5 rounded-2xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 flex-shrink-0 group-hover:scale-110">
              <GraduationCap className="w-8 h-8" />
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                {education.degree}
              </h3>
              <p className="text-muted-foreground text-lg mb-5">{education.university}</p>
              <div className="flex flex-wrap items-center gap-4">
                <div className="flex items-center gap-2 text-muted-foreground bg-secondary/50 px-4 py-2 rounded-full">
                  <Calendar className="w-4 h-4 text-primary" />
                  <span className="font-medium">{education.period}</span>
                </div>
                <div className="flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full border border-primary/20 hover:bg-primary/20 transition-colors">
                  <Award className="w-5 h-5 text-primary" />
                  <span className="text-primary font-bold">GPA: {education.gpa}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
