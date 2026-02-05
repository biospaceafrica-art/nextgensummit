"use client"

import { ArrowRight } from "lucide-react"
import Link from "next/link"

export function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 pt-16">
      {/* Animated background elements */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2">
          <svg viewBox="0 0 400 400" className="h-full w-full animate-[spin_60s_linear_infinite] opacity-[0.03]">
            <path
              d="M200 50 Q350 200 200 350 Q50 200 200 50"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
              className="text-foreground"
            />
            <path
              d="M200 80 Q320 200 200 320 Q80 200 200 80"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
              className="text-foreground"
            />
            <circle cx="200" cy="200" r="120" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-foreground" />
            <circle cx="200" cy="200" r="80" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-foreground" />
          </svg>
        </div>
        {/* DNA helix inspired lines */}
        <div className="absolute right-0 top-0 h-full w-px bg-gradient-to-b from-transparent via-muted to-transparent opacity-50" />
        <div className="absolute left-[20%] top-0 h-full w-px bg-gradient-to-b from-transparent via-muted/50 to-transparent opacity-30" />
        <div className="absolute right-[20%] top-0 h-full w-px bg-gradient-to-b from-transparent via-muted/50 to-transparent opacity-30" />
      </div>

      <div className="relative z-10 mx-auto max-w-5xl text-center">
        {/* Tagline */}
        <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-border bg-card/50 px-4 py-2 backdrop-blur-sm">
          <span className="h-2 w-2 animate-pulse rounded-full bg-primary" />
          <span className="text-xs font-medium tracking-widest text-muted-foreground">
            SEPTEMBER 15-17, 2026 | CAPE TOWN, SOUTH AFRICA
          </span>
        </div>

        {/* Main headline */}
        <h1 className="mb-6 text-balance text-4xl font-bold leading-[1.1] tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl">
          Pioneering Africa&apos;s
          <br />
          <span className="bg-gradient-to-r from-primary via-primary/80 to-primary bg-clip-text text-transparent">
            Biospace Revolution
          </span>
        </h1>

        {/* Subheadline */}
        <p className="mx-auto mb-12 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground md:text-xl">
          Join 2,000+ visionary scientists, researchers, and industry leaders at Africa&apos;s 
          most influential biotechnology summit. Three days of groundbreaking insights, 
          collaboration, and innovation.
        </p>

        {/* CTA buttons */}
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="#register"
            className="group flex items-center gap-2 rounded-full bg-foreground px-8 py-4 text-sm font-semibold tracking-wider text-background transition-all hover:bg-foreground/90"
          >
            GET TICKETS
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
          <Link
            href="#speakers"
            className="rounded-full border border-border bg-transparent px-8 py-4 text-sm font-semibold tracking-wider text-foreground transition-all hover:bg-card"
          >
            VIEW SPEAKERS
          </Link>
        </div>
      </div>

      {/* Bottom info bar */}
      <div className="absolute bottom-0 left-0 right-0 border-t border-border">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 px-6 py-6 md:flex-row md:items-center">
          <div className="flex flex-col gap-1 md:flex-row md:items-center md:gap-12">
            <div>
              <p className="text-xs font-medium tracking-widest text-muted-foreground">LOCATION</p>
              <p className="text-sm font-medium text-foreground">Cape Town, South Africa</p>
            </div>
            <div>
              <p className="text-xs font-medium tracking-widest text-muted-foreground">DATE</p>
              <p className="text-sm font-medium text-foreground">September 15-17, 2026</p>
            </div>
          </div>
          <div className="flex items-center gap-8">
            <div>
              <p className="text-xs font-medium tracking-widest text-muted-foreground">VIRTUAL</p>
              <p className="text-sm font-medium text-foreground">Free Access</p>
            </div>
            <div>
              <p className="text-xs font-medium tracking-widest text-muted-foreground">EARLY BIRD</p>
              <p className="text-sm font-medium text-foreground">
                <span className="text-primary">$299</span>{" "}
                <span className="text-muted-foreground line-through">$599</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
