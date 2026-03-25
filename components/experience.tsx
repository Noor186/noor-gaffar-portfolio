import { Briefcase, Calendar } from "lucide-react"

const experiences = [
  {
    title: "Data Engineering Trainee",
    company: "DEPI – Digital Egypt Pioneers Initiative",
    period: "Dec 2025 – Present",
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
    description: [
      "Gained proficiency in Python, OOP, and Pandas for data manipulation.",
      "Applied JSON for data handling and structured data processing.",
      "Developed practical data processing skills applicable to real-world engineering tasks.",
    ],
  },
]

export function Experience() {
  return (
    <section id="experience" className="py-20 bg-secondary/30">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-primary font-medium mb-2">Work History</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Experience
          </h2>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-border" />

          <div className="space-y-8">
            {experiences.map((exp) => (
              <div key={exp.title} className="relative pl-16">
                {/* Timeline dot */}
                <div className="absolute left-4 w-4 h-4 bg-primary rounded-full -translate-x-1/2 mt-1.5 ring-4 ring-background" />

                <div className="bg-card p-6 rounded-xl border border-border hover:border-primary/50 transition-all duration-300">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
                    <h3 className="text-lg font-semibold text-foreground">{exp.title}</h3>
                    <div className="flex items-center gap-2 text-primary text-sm">
                      <Calendar className="w-4 h-4" />
                      <span className="font-medium">{exp.period}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground mb-4">
                    <Briefcase className="w-4 h-4" />
                    <span>{exp.company}</span>
                  </div>
                  <ul className="space-y-2">
                    {exp.description.map((item, i) => (
                      <li key={i} className="text-muted-foreground text-sm flex gap-2">
                        <span className="text-primary mt-0.5 flex-shrink-0">▸</span>
                        <span>{item}</span>
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
