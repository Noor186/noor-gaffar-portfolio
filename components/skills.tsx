"use client"

import { Code2, Database, BarChart3, Cloud, Terminal, GitBranch } from "lucide-react"
import { Progress } from "@/components/ui/progress"

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

export function Skills() {
  return (
    <section id="skills" className="py-20 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-primary font-medium mb-2">Expertise</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Technical Skills
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Core tools and technologies I use to build reliable data infrastructure.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="bg-card p-6 rounded-xl border border-border hover:border-primary/50 transition-all duration-300 group"
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="p-2.5 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                  <category.icon className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">{category.title}</h3>
              </div>
              <div className="space-y-4">
                {category.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-sm text-foreground font-medium">{skill.name}</span>
                      <span className="text-xs text-muted-foreground">{skill.level}%</span>
                    </div>
                    <Progress value={skill.level} className="h-2" />
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
