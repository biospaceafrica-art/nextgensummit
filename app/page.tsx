import { Navigation } from "@/components/navigation"
import { Hero } from "@/components/hero"
import { Stats } from "@/components/stats"
import { About } from "@/components/about"
import { Speakers } from "@/components/speakers"
import { Agenda } from "@/components/agenda"
import { Venue } from "@/components/venue"
import { Sponsors } from "@/components/sponsors"
import { CTA } from "@/components/cta"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <Stats />
      <About />
      <Speakers />
      <Agenda />
      <Venue />
      <Sponsors />
      <CTA />
      <Footer />
    </main>
  )
}
