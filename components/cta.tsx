"use client"

import { useState } from "react"
import { ArrowRight, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

const tickets = [
  {
    name: "Virtual Pass",
    price: "$199",
    description: "Full digital access",
    features: ["Live stream all sessions", "Digital networking", "Recording access for 30 days", "Virtual exhibition hall"],
  },
  {
    name: "Standard Pass",
    price: "$799",
    description: "Full in-person experience",
    features: ["All virtual features", "In-person attendance", "Networking events", "Exhibition access", "Welcome kit"],
    popular: true,
  },
  {
    name: "VIP Pass",
    price: "$1,499",
    description: "Premium experience",
    features: ["All standard features", "VIP lounge access", "Speaker dinners", "1-on-1 meetings", "Priority seating", "Gala dinner"],
  },
]

export function CTA() {
  const [email, setEmail] = useState("")

  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-medium uppercase tracking-widest mb-4 block">
            Get Your Pass
          </span>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Secure Your Spot Today
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Early bird pricing ends August 31, 2026. Choose the pass that fits your needs.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {tickets.map((ticket, index) => (
            <div
              key={index}
              className={`relative p-6 rounded-lg border transition-all duration-300 ${
                ticket.popular
                  ? "bg-primary/5 border-primary"
                  : "bg-card border-border hover:border-primary/50"
              }`}
            >
              {ticket.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-primary text-primary-foreground text-xs font-medium rounded-full">
                  Most Popular
                </div>
              )}
              <div className="text-center mb-6">
                <h3 className="text-xl font-semibold mb-1">{ticket.name}</h3>
                <p className="text-sm text-muted-foreground mb-4">{ticket.description}</p>
                <div className="text-4xl font-bold">{ticket.price}</div>
              </div>
              <ul className="space-y-3 mb-6">
                {ticket.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
              <Button
                className={`w-full ${
                  ticket.popular
                    ? "bg-primary text-primary-foreground hover:bg-primary/90"
                    : "bg-card border border-border hover:bg-background"
                }`}
                variant={ticket.popular ? "default" : "outline"}
              >
                Get {ticket.name}
              </Button>
            </div>
          ))}
        </div>

        {/* Newsletter */}
        <div className="max-w-xl mx-auto text-center">
          <h3 className="text-xl font-semibold mb-4">Stay Updated</h3>
          <p className="text-muted-foreground mb-6">
            Subscribe to receive speaker announcements and exclusive early access.
          </p>
          <form className="flex flex-col sm:flex-row gap-3">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 bg-card border-border"
            />
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90 gap-2">
              Subscribe <ArrowRight className="w-4 h-4" />
            </Button>
          </form>
        </div>
      </div>
    </section>
  )
}
