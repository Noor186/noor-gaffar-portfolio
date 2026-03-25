import { GraduationCap, Award, Calendar } from "lucide-react"

const education = {
  degree: "B.Sc. in Electronics & Communication Engineering",
  university: "Port Said University · Egypt",
  period: "2023 – Present",
  gpa: "3.9 / 4.0",
}

export function Education() {
  return (
    <section id="education" className="py-20 bg-secondary/30">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-primary font-medium mb-2">Background</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Education
          </h2>
        </div>

        {/* Education Card */}
        <div className="bg-card p-8 rounded-xl border border-border hover:border-primary/50 transition-all duration-300">
          <div className="flex items-start gap-5">
            <div className="p-4 rounded-xl bg-primary/10 text-primary flex-shrink-0">
              <GraduationCap className="w-7 h-7" />
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-semibold text-foreground mb-1">
                {education.degree}
              </h3>
              <p className="text-muted-foreground mb-4">{education.university}</p>
              <div className="flex flex-wrap items-center gap-4">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Calendar className="w-4 h-4 text-primary" />
                  <span>{education.period}</span>
                </div>
                <div className="flex items-center gap-2 bg-primary/10 px-3 py-1 rounded-full">
                  <Award className="w-4 h-4 text-primary" />
                  <span className="text-primary font-semibold text-sm">GPA: {education.gpa}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
