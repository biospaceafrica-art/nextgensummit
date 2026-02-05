import { Navigation } from "@/components/navigation"
import { Hero } from "@/components/hero"
import { Stats } from "@/components/stats"
import { About } from "@/components/about"
import { Speakers } from "@/components/speakers"
import { Agenda } from "@/components/agenda"
import { Venue } from "@/components/venue"
import { FAQ } from "@/components/faq"
import { Register } from "@/components/register"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <Stats />
        <About />
        <Speakers />
        <Agenda />
        <Venue />
        <FAQ />
        <Register />
      </main>
      <Footer />
    </>
  )
}
