import { Code2, Database, Cpu, Wrench, Server, GitBranch } from "lucide-react"

const skillCategories = [
  {
    title: "Programming",
    icon: Code2,
    skills: ["C++", "Python (OOP, Pandas, Tkinter)", "SQL", "MATLAB/Simulink"],
  },
  {
    title: "IoT & Embedded",
    icon: Cpu,
    skills: ["Raspberry Pi", "Arduino", "Sensor Integration", "MQTT", "HTTP", "Node-RED"],
  },
  {
    title: "Data Engineering",
    icon: Database,
    skills: ["SQL", "Python (Pandas, NumPy)", "Data Pipelines", "ETL Processes"],
  },
  {
    title: "Tools & Platforms",
    icon: Wrench,
    skills: ["Git/GitHub", "Linux", "SolidWorks", "Blynk IoT", "Microsoft Office"],
  },
  {
    title: "Backend & APIs",
    icon: Server,
    skills: ["Node.js", "REST APIs", "CoAP Protocol", "Telegram Bot API"],
  },
  {
    title: "Version Control",
    icon: GitBranch,
    skills: ["Git", "GitHub", "Collaborative Development"],
  },
]

export function Skills() {
  return (
    <section id="skills" className="py-20 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Technical <span className="text-primary">Skills</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit built through hands-on projects and professional training
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="bg-card p-6 rounded-xl border border-border hover:border-primary/50 transition-all duration-300 group"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                  <category.icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 text-sm bg-secondary text-muted-foreground rounded-full"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
