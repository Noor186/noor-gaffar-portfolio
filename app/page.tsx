import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { Skills } from "@/components/skills"
import { Services } from "@/components/services"
import { Experience } from "@/components/experience"
import { Projects } from "@/components/projects"
import { Education } from "@/components/education"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <Skills />
      <Services />
      <Experience />
      <Projects />
      <Education />
      <Contact />
      <Footer />
    </main>
  )
}
