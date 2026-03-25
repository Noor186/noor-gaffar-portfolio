import { Briefcase, Calendar } from "lucide-react"

const experiences = [
  {
    title: "Data Engineering",
    company: "DEPI - Digital Egypt Pioneers Initiative",
    period: "Dec 2025 - Present",
    description: [
      "Applied SQL and Python (Pandas, NumPy) to analyze datasets and build data pipelines for practical use cases",
    ],
  },
  {
    title: "IoT System Developer Internship",
    company: "Samsung Innovation Campus (SIC)",
    period: "Aug 2025 - Oct 2025",
    description: [
      "Designed and implemented IoT systems using Raspberry Pi and Electronics",
      "Built sensor integration and IoT communication protocols (MQTT, HTTP, CoAP)",
      "Applied Node.js and Node-RED to build dashboards and Telegram bot for alerts",
      "Used Linux, Git/GitHub for version control and platforms (Blynk)",
    ],
  },
  {
    title: "Python Development Trainee",
    company: "Samsung Innovation Campus",
    period: "Jul 2024 - Sep 2024",
    description: [
      "Gained proficiency in Python, OOP, Tkinter (GUI), JSON and Pandas",
      "Built a social media app and online shopping website",
    ],
  },
  {
    title: "Be An Ambassador Program",
    company: "UN SDGs Initiative",
    period: "Sep 2024 - Oct 2024",
    description: [
      "Completed training on the UN Sustainable Development Goals (SDGs)",
      "Delivered technical and business presentations to judges and mentors",
      'Developed and pitched an AI-powered recycled app idea "Dawarha" in the final competition',
    ],
  },
]

export function Experience() {
  return (
    <section id="experience" className="py-20 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Work <span className="text-primary">Experience</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Professional journey through internships and training programs
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={exp.title}
                className={`relative flex flex-col md:flex-row gap-8 ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 w-4 h-4 bg-primary rounded-full md:-translate-x-1/2 -translate-x-1/2 mt-1.5" />

                {/* Content */}
                <div className={`flex-1 ml-6 md:ml-0 ${index % 2 === 0 ? "md:pr-16" : "md:pl-16"}`}>
                  <div className="bg-card p-6 rounded-xl border border-border hover:border-primary/50 transition-all duration-300">
                    <div className="flex items-center gap-2 text-primary mb-2">
                      <Calendar className="w-4 h-4" />
                      <span className="text-sm font-medium">{exp.period}</span>
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-1">{exp.title}</h3>
                    <div className="flex items-center gap-2 text-muted-foreground mb-4">
                      <Briefcase className="w-4 h-4" />
                      <span>{exp.company}</span>
                    </div>
                    <ul className="space-y-2">
                      {exp.description.map((item, i) => (
                        <li key={i} className="text-muted-foreground text-sm flex gap-2">
                          <span className="text-primary mt-1.5 flex-shrink-0">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden md:block flex-1" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
