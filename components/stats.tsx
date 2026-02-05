const stats = [
  { value: "2,000+", label: "Attendees Expected", description: "from 40+ countries" },
  { value: "50+", label: "World-Class Speakers", description: "leading experts" },
  { value: "3", label: "Days of Innovation", description: "immersive experience" },
  { value: "$2B+", label: "Investment Represented", description: "in biospace funding" },
]

export function Stats() {
  return (
    <section className="border-y border-border bg-card/30">
      <div className="mx-auto grid max-w-7xl grid-cols-2 divide-x divide-y divide-border md:grid-cols-4 md:divide-y-0">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center px-6 py-12 text-center md:py-16"
          >
            <p className="text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
              {stat.value}
            </p>
            <p className="mt-2 text-sm font-medium text-foreground">{stat.label}</p>
            <p className="mt-1 text-xs text-muted-foreground">{stat.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
