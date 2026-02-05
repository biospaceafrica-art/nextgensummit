"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

const faqs = [
  {
    question: "Who should attend NextGen Summit?",
    answer: "NextGen Summit is designed for biotechnology professionals, researchers, scientists, healthcare executives, investors, policymakers, and students interested in the African biospace ecosystem. Whether you're a startup founder, corporate leader, or academic researcher, you'll find valuable insights and connections.",
  },
  {
    question: "What's included in the ticket price?",
    answer: "Your ticket includes access to all keynotes, panel discussions, and workshops across all three days. It also covers networking events, the welcome reception, all meals during the summit, and exclusive access to our mobile app with full agenda and speaker profiles.",
  },
  {
    question: "Is there a virtual attendance option?",
    answer: "Yes! We offer free virtual access to all keynote sessions and select panel discussions. Virtual attendees can also participate in Q&A sessions and access recordings for 30 days after the event. For full access to workshops and networking events, we recommend in-person attendance.",
  },
  {
    question: "What are the accommodation options?",
    answer: "We've partnered with several hotels near the Cape Town International Convention Centre offering special rates for attendees. Options range from 3-star to 5-star accommodations, all within walking distance of the venue. Details will be sent upon registration.",
  },
  {
    question: "Can I get a refund if I can't attend?",
    answer: "Tickets are fully refundable up to 60 days before the event. Between 60 and 30 days, you can receive a 50% refund or transfer your ticket to another attendee. Within 30 days of the event, tickets can be transferred but are non-refundable.",
  },
  {
    question: "Are there sponsorship opportunities?",
    answer: "Yes, we offer various sponsorship packages including Platinum, Gold, and Silver tiers, as well as booth spaces in our exhibition hall. Sponsors gain visibility among Africa's top biotech professionals and decision-makers. Contact us at sponsors@nextgensummit.africa for details.",
  },
]

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section id="faq" className="border-b border-border py-24 md:py-32">
      <div className="mx-auto max-w-4xl px-6">
        {/* Section header */}
        <div className="mb-12 text-center">
          <p className="mb-4 text-xs font-semibold tracking-widest text-primary">
            FAQ
          </p>
          <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Frequently asked questions
          </h2>
        </div>

        {/* FAQ items */}
        <div className="divide-y divide-border rounded-lg border border-border">
          {faqs.map((faq, index) => (
            <div key={index}>
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="flex w-full items-center justify-between gap-4 p-6 text-left transition-colors hover:bg-card/50"
              >
                <span className="text-lg font-medium text-foreground">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`h-5 w-5 flex-shrink-0 text-muted-foreground transition-transform ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openIndex === index && (
                <div className="border-t border-border bg-card/30 px-6 py-4">
                  <p className="text-pretty leading-relaxed text-muted-foreground">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Contact note */}
        <p className="mt-8 text-center text-sm text-muted-foreground">
          Have more questions?{" "}
          <a href="mailto:info@nextgensummit.africa" className="text-primary hover:underline">
            Contact our team
          </a>
        </p>
      </div>
    </section>
  )
}
