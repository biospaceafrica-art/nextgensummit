const stats = [
  { value: "2,000+", label: "Attendees", description: "from 40+ countries" },
  { value: "150+", label: "Speakers", description: "industry leaders" },
  { value: "$2.5B", label: "Investment", description: "deals facilitated" },
  { value: "98%", label: "Satisfaction", description: "attendee rating" },
]

export function Stats() {
  return (
    <section className="py-20 border-y border-border">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center lg:border-r last:border-r-0 border-border"
            >
              <div className="text-4xl md:text-5xl font-bold text-foreground mb-2">
                {stat.value}
              </div>
              <div className="text-sm font-medium text-foreground mb-1">
                {stat.label}
              </div>
              <div className="text-xs text-muted-foreground">
                {stat.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
