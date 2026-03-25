import { GraduationCap, Award, Users, Calendar } from "lucide-react"

const education = {
  degree: "Bachelor's degree in Electronics & Communication Engineering",
  university: "Port Said University, Egypt",
  period: "2023 - Present",
  gpa: "3.9/4.0",
}

const activities = [
  {
    title: "Autonomous Team Member",
    organization: "PSU Racing Team",
    period: "Jun 2024 - Present",
    description: "Organized SolidWorks events for engineering students. Represented the team in competitions like AAKRUTI and MathWorks drone simulation.",
    icon: Users,
  },
  {
    title: "Operations Team Member",
    organization: "ICPC PSU",
    period: "Sep 2024 - Present",
    description: "Organized weekly programming training and contests for 50+ students. Enhanced C++ problem-solving through competitive programming.",
    icon: Award,
  },
  {
    title: "Public Relations Member",
    organization: "Port Said Engineering Day (PSED)",
    period: "Feb 2024 - Present",
    description: "Contacted speakers, helped organize and coordinate event day for 200+ attendees.",
    icon: Users,
  },
  {
    title: "Volunteer",
    organization: "Life Makers Foundation",
    period: "Jan 2024 - Apr 2024",
    description: "Supported a disability inclusion campaign through event coordination and donation collection.",
    icon: Users,
  },
]

export function Education() {
  return (
    <section id="education" className="py-20 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Education & <span className="text-primary">Activities</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Academic foundation and extracurricular involvement
          </p>
        </div>

        {/* Education Card */}
        <div className="max-w-3xl mx-auto mb-16">
          <div className="bg-card p-8 rounded-2xl border border-border hover:border-primary/50 transition-all duration-300">
            <div className="flex items-start gap-6">
              <div className="p-4 rounded-xl bg-primary/10 text-primary flex-shrink-0">
                <GraduationCap className="w-8 h-8" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {education.degree}
                </h3>
                <p className="text-muted-foreground mb-4">{education.university}</p>
                <div className="flex flex-wrap gap-4">
                  <div className="flex items-center gap-2 text-sm">
                    <Calendar className="w-4 h-4 text-primary" />
                    <span className="text-muted-foreground">{education.period}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Award className="w-4 h-4 text-primary" />
                    <span className="text-primary font-semibold">GPA: {education.gpa}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Activities */}
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold text-foreground">
            Extracurricular <span className="text-primary">Activities</span>
          </h3>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {activities.map((activity) => (
            <div
              key={activity.title}
              className="bg-card p-6 rounded-xl border border-border hover:border-primary/50 transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-primary/10 text-primary flex-shrink-0">
                  <activity.icon className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">{activity.title}</h4>
                  <p className="text-primary text-sm mb-2">{activity.organization}</p>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground mb-3">
                    <Calendar className="w-3 h-3" />
                    <span>{activity.period}</span>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {activity.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
