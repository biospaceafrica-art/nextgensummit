"use client"

import { useState } from "react"

const days = [
  {
    date: "Day 1",
    title: "September 15",
    theme: "Discovery & Research",
    sessions: [
      { time: "09:00", title: "Opening Keynote: The Future of African Biospace", speaker: "Dr. Amara Okonkwo" },
      { time: "10:30", title: "Genomics Revolution: Mapping African Genetic Diversity", speaker: "Panel Discussion" },
      { time: "12:00", title: "Networking Lunch", speaker: "" },
      { time: "14:00", title: "CRISPR & Gene Editing: Opportunities and Ethics", speaker: "Prof. Aisha Ibrahim" },
      { time: "16:00", title: "Startup Pitch Session: Early-Stage Biotech", speaker: "10 Selected Startups" },
      { time: "18:00", title: "Welcome Reception", speaker: "" },
    ],
  },
  {
    date: "Day 2",
    title: "September 16",
    theme: "Innovation & Industry",
    sessions: [
      { time: "09:00", title: "Keynote: Sustainable Biomanufacturing at Scale", speaker: "Prof. Kwame Mensah" },
      { time: "10:30", title: "Drug Discovery: From Lab to Market", speaker: "Dr. Fatima El-Amin" },
      { time: "12:00", title: "Networking Lunch", speaker: "" },
      { time: "14:00", title: "Agricultural Biotechnology for Food Security", speaker: "Panel Discussion" },
      { time: "16:00", title: "Workshop: Building Your Biotech Startup", speaker: "Industry Experts" },
      { time: "19:00", title: "Gala Dinner & Awards", speaker: "" },
    ],
  },
  {
    date: "Day 3",
    title: "September 17",
    theme: "Investment & Future",
    sessions: [
      { time: "09:00", title: "Keynote: The Investment Landscape", speaker: "Dr. Thabo Ndlovu" },
      { time: "10:30", title: "Global Partnerships: Connecting African & International Markets", speaker: "Panel Discussion" },
      { time: "12:00", title: "Networking Lunch", speaker: "" },
      { time: "14:00", title: "Healthcare Infrastructure in Emerging Markets", speaker: "Dr. Jean-Pierre Kagame" },
      { time: "15:30", title: "Closing Keynote: NextGen Vision 2030", speaker: "Special Guest" },
      { time: "17:00", title: "Closing Ceremony", speaker: "" },
    ],
  },
]

export function Agenda() {
  const [activeDay, setActiveDay] = useState(0)

  return (
    <section id="agenda" className="border-b border-border py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        {/* Section header */}
        <div className="mb-12">
          <p className="mb-4 text-xs font-semibold tracking-widest text-primary">
            SUMMIT AGENDA
          </p>
          <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
            Three days of
            <br />
            transformative content
          </h2>
        </div>

        {/* Day tabs */}
        <div className="mb-8 flex gap-2 overflow-x-auto pb-2">
          {days.map((day, index) => (
            <button
              key={index}
              onClick={() => setActiveDay(index)}
              className={`flex-shrink-0 rounded-full px-6 py-3 text-sm font-medium transition-all ${
                activeDay === index
                  ? "bg-foreground text-background"
                  : "border border-border bg-transparent text-muted-foreground hover:bg-card hover:text-foreground"
              }`}
            >
              <span className="font-semibold">{day.date}</span>
              <span className="mx-2 text-muted-foreground/50">|</span>
              <span>{day.title}</span>
            </button>
          ))}
        </div>

        {/* Theme badge */}
        <div className="mb-8">
          <span className="inline-block rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-xs font-semibold tracking-wider text-primary">
            THEME: {days[activeDay].theme.toUpperCase()}
          </span>
        </div>

        {/* Sessions list */}
        <div className="divide-y divide-border rounded-lg border border-border">
          {days[activeDay].sessions.map((session, index) => (
            <div
              key={index}
              className="flex flex-col gap-4 p-6 transition-colors hover:bg-card/50 md:flex-row md:items-center md:justify-between"
            >
              <div className="flex flex-col gap-4 md:flex-row md:items-center md:gap-8">
                <span className="w-16 text-lg font-semibold tabular-nums text-primary">
                  {session.time}
                </span>
                <div>
                  <h3 className="text-lg font-medium text-foreground">
                    {session.title}
                  </h3>
                  {session.speaker && (
                    <p className="mt-1 text-sm text-muted-foreground">
                      {session.speaker}
                    </p>
                  )}
                </div>
              </div>
              {session.speaker && (
                <span className="self-start rounded-full border border-border px-3 py-1 text-xs font-medium text-muted-foreground md:self-center">
                  Session
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
