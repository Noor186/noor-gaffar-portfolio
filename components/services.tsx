import { Database, Cpu, BarChart3, Bot, Cloud, Workflow } from "lucide-react"

const services = [
  {
    title: "Data Pipeline Development",
    description: "Building robust ETL pipelines using Python and SQL to process and transform data for analytics and reporting.",
    icon: Workflow,
  },
  {
    title: "IoT System Development",
    description: "Designing and implementing IoT solutions using Raspberry Pi, Arduino, and various communication protocols.",
    icon: Cpu,
  },
  {
    title: "Data Analysis",
    description: "Analyzing datasets using Python (Pandas, NumPy) to extract insights and support decision-making.",
    icon: BarChart3,
  },
  {
    title: "Database Management",
    description: "Designing, querying, and optimizing databases using SQL for efficient data storage and retrieval.",
    icon: Database,
  },
  {
    title: "Automation & Bots",
    description: "Creating automation scripts and Telegram bots for alerts, monitoring, and task automation.",
    icon: Bot,
  },
  {
    title: "Dashboard Development",
    description: "Building real-time monitoring dashboards using Node-RED and Blynk for IoT data visualization.",
    icon: Cloud,
  },
]

export function Services() {
  return (
    <section id="services" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            My <span className="text-primary">Services</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Leveraging technical expertise to deliver practical solutions across data and IoT domains
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group relative bg-card p-8 rounded-2xl border border-border hover:border-primary/50 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="absolute top-0 right-0 p-4 text-6xl font-bold text-primary/5">
                {String(index + 1).padStart(2, "0")}
              </div>
              <div className="p-4 rounded-xl bg-primary/10 text-primary w-fit mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                <service.icon className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">{service.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
