import { Database, BarChart3, Cloud, Workflow } from "lucide-react"
import { Badge } from "@/components/ui/badge"

const services = [
  {
    title: "Data Pipeline Development",
    description: "Building efficient ETL pipelines to extract, transform, and load data from various sources into data warehouses for analysis.",
    icon: Workflow,
    tags: ["ETL", "ELT", "Automation"],
  },
  {
    title: "Data Analysis & Visualization",
    description: "Analyzing complex datasets using Python libraries and creating insightful visualizations with Matplotlib and Seaborn.",
    icon: BarChart3,
    tags: ["Matplotlib", "Seaborn", "Pandas"],
  },
  {
    title: "Database Management",
    description: "Designing and optimizing SQL databases, writing complex queries, and ensuring data integrity and performance.",
    icon: Database,
    tags: ["SQL", "Schema", "Optimization"],
  },
  {
    title: "Cloud Data Solutions",
    description: "Implementing scalable data solutions using cloud architecture principles and modern data engineering practices.",
    icon: Cloud,
    tags: ["Cloud", "Scalability", "Architecture"],
  },
]

export function Services() {
  return (
    <section id="services" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-primary font-medium mb-2">What I Do</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Services
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            From raw data ingestion to clean, structured outputs — covering the full data engineering lifecycle.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className="group bg-card p-6 rounded-xl border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 flex-shrink-0">
                  <service.icon className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    {service.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {service.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-xs">
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
