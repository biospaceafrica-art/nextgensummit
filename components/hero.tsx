"use client"

import { ArrowRight, Calendar, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <defs>
            <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
              <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeWidth="0.1" className="text-muted-foreground" />
            </pattern>
          </defs>
          <rect width="100" height="100" fill="url(#grid)" />
        </svg>
      </div>

      {/* DNA Helix Animation */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 opacity-10 hidden lg:block">
        <svg width="400" height="600" viewBox="0 0 400 600" className="text-primary">
          <g className="animate-pulse">
            {[...Array(12)].map((_, i) => (
              <g key={i} transform={`translate(0, ${i * 50})`}>
                <ellipse cx="200" cy="25" rx="150" ry="20" fill="none" stroke="currentColor" strokeWidth="2" opacity={0.3 + i * 0.05} />
                <circle cx={50 + Math.sin(i * 0.5) * 50} cy="25" r="8" fill="currentColor" opacity={0.5} />
                <circle cx={350 - Math.sin(i * 0.5) * 50} cy="25" r="8" fill="currentColor" opacity={0.5} />
              </g>
            ))}
          </g>
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-card mb-8">
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          <span className="text-sm text-muted-foreground">Registration Now Open</span>
        </div>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6">
          <span className="text-balance">
            Shaping Africa&apos;s
            <br />
            <span className="text-gradient">Biospace Future</span>
          </span>
        </h1>

        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed">
          Join 2,000+ researchers, investors, and industry leaders at Africa&apos;s
          premier biotechnology summit. Three days of innovation, collaboration,
          and breakthrough discoveries.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 gap-2">
            Get Your Pass <ArrowRight className="w-4 h-4" />
          </Button>
          <Button size="lg" variant="outline" className="border-border hover:bg-card">
            View Speakers
          </Button>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4 text-primary" />
            <span>September 15-17, 2026</span>
          </div>
          <div className="hidden sm:block w-1 h-1 rounded-full bg-muted-foreground" />
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-primary" />
            <span>Cape Town International Convention Centre</span>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="text-xs text-muted-foreground uppercase tracking-widest">Scroll to explore</span>
        <div className="w-6 h-10 rounded-full border-2 border-muted-foreground flex items-start justify-center p-1">
          <div className="w-1.5 h-3 rounded-full bg-primary animate-bounce" />
        </div>
      </div>
    </section>
  )
}
