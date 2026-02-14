"use client"

import { useState } from "react"
import { cn } from "@/lib/utils"

const days = [
  {
    date: "September 15",
    label: "Day 1",
    theme: "Discovery & Innovation",
    sessions: [
      { time: "08:00", title: "Registration & Welcome Coffee", type: "networking" },
      { time: "09:00", title: "Opening Keynote: The Future of African Biospace", type: "keynote" },
      { time: "10:30", title: "Panel: Genomics Revolution in Africa", type: "panel" },
      { time: "12:00", title: "Networking Lunch", type: "networking" },
      { time: "14:00", title: "Workshop: Precision Medicine Applications", type: "workshop" },
      { time: "16:00", title: "Startup Pitch Competition Round 1", type: "competition" },
      { time: "18:00", title: "Welcome Reception", type: "networking" },
    ],
  },
  {
    date: "September 16",
    label: "Day 2",
    theme: "Investment & Growth",
    sessions: [
      { time: "09:00", title: "Keynote: Investing in African Life Sciences", type: "keynote" },
      { time: "10:30", title: "Panel: Scaling Biotech Startups", type: "panel" },
      { time: "12:00", title: "Investor Lunch Roundtables", type: "networking" },
      { time: "14:00", title: "Workshop: Regulatory Pathways in Africa", type: "workshop" },
      { time: "16:00", title: "Startup Pitch Competition Finals", type: "competition" },
      { time: "18:00", title: "Gala Dinner & Awards Ceremony", type: "networking" },
    ],
  },
  {
    date: "September 17",
    label: "Day 3",
    theme: "Collaboration & Impact",
    sessions: [
      { time: "09:00", title: "Keynote: Building Pan-African Research Networks", type: "keynote" },
      { time: "10:30", title: "Panel: Public-Private Partnerships", type: "panel" },
      { time: "12:00", title: "Networking Lunch", type: "networking" },
      { time: "14:00", title: "Closing Summit: Action Plans for 2027", type: "keynote" },
      { time: "15:30", title: "Farewell & Networking", type: "networking" },
    ],
  },
]

const typeStyles: Record<string, string> = {
  keynote: "bg-primary/10 text-primary border-primary/20",
  panel: "bg-blue-500/10 text-blue-400 border-blue-500/20",
  workshop: "bg-purple-500/10 text-purple-400 border-purple-500/20",
  competition: "bg-amber-500/10 text-amber-400 border-amber-500/20",
  networking: "bg-muted text-muted-foreground border-border",
}

export function Agenda() {
  const [activeDay, setActiveDay] = useState(0)

  return (
    <section id="agenda" className="py-24 bg-card">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-medium uppercase tracking-widest mb-4 block">
            Event Schedule
          </span>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Three Days of Innovation
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Immersive sessions, hands-on workshops, and unparalleled networking opportunities.
          </p>
        </div>

        {/* Day Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {days.map((day, index) => (
            <button
              key={index}
              onClick={() => setActiveDay(index)}
              className={cn(
                "px-6 py-4 rounded-lg border transition-all duration-300 text-left",
                activeDay === index
                  ? "bg-primary border-primary text-primary-foreground"
                  : "bg-background border-border hover:border-primary/50"
              )}
            >
              <div className="text-sm font-medium">{day.label}</div>
              <div className={cn("text-xs", activeDay === index ? "text-primary-foreground/80" : "text-muted-foreground")}>
                {day.date}
              </div>
            </button>
          ))}
        </div>

        {/* Active Day Content */}
        <div className="bg-background border border-border rounded-lg p-6 md:p-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-2">{days[activeDay].theme}</h3>
            <p className="text-muted-foreground">{days[activeDay].date}, 2026</p>
          </div>

          <div className="space-y-4">
            {days[activeDay].sessions.map((session, index) => (
              <div
                key={index}
                className="flex flex-col sm:flex-row sm:items-center gap-4 p-4 rounded-lg border border-border hover:border-primary/30 transition-colors"
              >
                <div className="text-sm font-mono text-primary w-16 flex-shrink-0">
                  {session.time}
                </div>
                <div className="flex-1">
                  <h4 className="font-medium">{session.title}</h4>
                </div>
                <span
                  className={cn(
                    "text-xs px-3 py-1 rounded-full border capitalize w-fit",
                    typeStyles[session.type]
                  )}
                >
                  {session.type}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
