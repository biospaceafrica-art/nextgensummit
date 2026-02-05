"use client"

import { useState } from "react"
import { Check, ArrowRight } from "lucide-react"

const tiers = [
  {
    name: "Virtual",
    price: "Free",
    description: "Access keynotes online",
    features: [
      "Live keynote streaming",
      "Q&A participation",
      "30-day replay access",
      "Digital resource pack",
    ],
    cta: "Register Free",
    featured: false,
  },
  {
    name: "Standard",
    price: "$299",
    originalPrice: "$599",
    description: "Full in-person access",
    features: [
      "All virtual benefits",
      "3-day conference access",
      "Workshop participation",
      "Networking events",
      "Meals included",
      "Attendee badge & swag",
    ],
    cta: "Get Tickets",
    featured: true,
  },
  {
    name: "VIP",
    price: "$799",
    originalPrice: "$1,299",
    description: "Premium experience",
    features: [
      "All standard benefits",
      "VIP seating at keynotes",
      "Exclusive speaker dinners",
      "1-on-1 mentorship sessions",
      "Priority workshop access",
      "Complimentary accommodation",
    ],
    cta: "Go VIP",
    featured: false,
  },
]

export function Register() {
  const [email, setEmail] = useState("")
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setSubmitted(true)
    }
  }

  return (
    <section id="register" className="bg-card/20 py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        {/* Section header */}
        <div className="mb-16 text-center">
          <p className="mb-4 text-xs font-semibold tracking-widest text-primary">
            REGISTER NOW
          </p>
          <h2 className="mb-4 text-balance text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
            Secure your spot at
            <br />
            NextGen Summit 2026
          </h2>
          <p className="mx-auto max-w-2xl text-pretty text-lg text-muted-foreground">
            Early bird pricing ends August 1, 2026. Join us in shaping the future of African biospace.
          </p>
        </div>

        {/* Pricing tiers */}
        <div className="mb-16 grid gap-6 md:grid-cols-3">
          {tiers.map((tier, index) => (
            <div
              key={index}
              className={`relative flex flex-col rounded-lg border p-8 transition-all ${
                tier.featured
                  ? "border-primary bg-primary/5"
                  : "border-border bg-background hover:border-muted-foreground/50"
              }`}
            >
              {tier.featured && (
                <span className="absolute -top-3 left-6 rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground">
                  MOST POPULAR
                </span>
              )}
              <div className="mb-6">
                <h3 className="mb-2 text-xl font-semibold text-foreground">
                  {tier.name}
                </h3>
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl font-bold text-foreground">
                    {tier.price}
                  </span>
                  {tier.originalPrice && (
                    <span className="text-lg text-muted-foreground line-through">
                      {tier.originalPrice}
                    </span>
                  )}
                </div>
                <p className="mt-2 text-sm text-muted-foreground">
                  {tier.description}
                </p>
              </div>
              <ul className="mb-8 flex-1 space-y-3">
                {tier.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3">
                    <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                    <span className="text-sm text-muted-foreground">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
              <button
                className={`group flex w-full items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-all ${
                  tier.featured
                    ? "bg-foreground text-background hover:bg-foreground/90"
                    : "border border-border bg-transparent text-foreground hover:bg-card"
                }`}
              >
                {tier.cta}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          ))}
        </div>

        {/* Email signup */}
        <div className="mx-auto max-w-xl rounded-lg border border-border bg-background p-8 text-center">
          <h3 className="mb-2 text-xl font-semibold text-foreground">
            Stay updated
          </h3>
          <p className="mb-6 text-sm text-muted-foreground">
            Get the latest speaker announcements and agenda updates.
          </p>
          {submitted ? (
            <div className="flex items-center justify-center gap-2 text-primary">
              <Check className="h-5 w-5" />
              <span className="font-medium">Thank you for subscribing!</span>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex gap-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-1 rounded-full border border-border bg-card px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                required
              />
              <button
                type="submit"
                className="rounded-full bg-foreground px-6 py-3 text-sm font-semibold text-background transition-all hover:bg-foreground/90"
              >
                Subscribe
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
