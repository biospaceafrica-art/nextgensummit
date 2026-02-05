"use client"

import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const speakers = [
  {
    name: "Dr. Amara Okonkwo",
    role: "Chief Scientific Officer",
    company: "GenomeAfrica Labs",
    topic: "Genomics & Precision Medicine",
    initials: "AO",
  },
  {
    name: "Prof. Kwame Mensah",
    role: "Director of Research",
    company: "Pan-African Health Institute",
    topic: "Vaccine Development",
    initials: "KM",
  },
  {
    name: "Dr. Fatima El-Rashid",
    role: "Managing Partner",
    company: "BioVentures Capital",
    topic: "Investment Strategies",
    initials: "FR",
  },
  {
    name: "Dr. Thabo Ndlovu",
    role: "CEO & Founder",
    company: "AfriPharma Solutions",
    topic: "Drug Manufacturing",
    initials: "TN",
  },
  {
    name: "Prof. Aisha Diallo",
    role: "Head of Biotechnology",
    company: "University of Cape Town",
    topic: "Agricultural Biotech",
    initials: "AD",
  },
  {
    name: "Mr. Samuel Osei",
    role: "Innovation Director",
    company: "TechBio Accelerator",
    topic: "Startup Ecosystem",
    initials: "SO",
  },
]

export function Speakers() {
  return (
    <section id="speakers" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <span className="text-primary text-sm font-medium uppercase tracking-widest mb-4 block">
              Featured Speakers
            </span>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-balance">
              Learn from Industry Pioneers
            </h2>
          </div>
          <Button variant="outline" className="border-border hover:bg-card gap-2 w-fit">
            View All Speakers <ArrowRight className="w-4 h-4" />
          </Button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {speakers.map((speaker, index) => (
            <div
              key={index}
              className="group p-6 bg-card border border-border rounded-lg hover:border-primary/50 transition-all duration-300"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <span className="text-xl font-bold text-primary">
                    {speaker.initials}
                  </span>
                </div>
                <div>
                  <h3 className="font-semibold text-lg">{speaker.name}</h3>
                  <p className="text-sm text-muted-foreground">{speaker.role}</p>
                  <p className="text-sm text-primary">{speaker.company}</p>
                </div>
              </div>
              <div className="pt-4 border-t border-border">
                <span className="text-xs text-muted-foreground uppercase tracking-wider">
                  Speaking on
                </span>
                <p className="text-sm font-medium mt-1">{speaker.topic}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
