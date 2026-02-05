import { Beaker, Users, Lightbulb, Globe } from "lucide-react"

const features = [
  {
    icon: Beaker,
    title: "Cutting-Edge Research",
    description:
      "Discover the latest breakthroughs in genomics, pharmaceuticals, and biotechnology from Africa's leading research institutions.",
  },
  {
    icon: Users,
    title: "Strategic Networking",
    description:
      "Connect with decision-makers, investors, and innovators shaping the future of African life sciences.",
  },
  {
    icon: Lightbulb,
    title: "Innovation Showcase",
    description:
      "Explore groundbreaking startups and technologies in our dedicated exhibition hall and pitch competitions.",
  },
  {
    icon: Globe,
    title: "Global Perspective",
    description:
      "Gain insights from international experts while focusing on Africa-specific challenges and opportunities.",
  },
]

export function About() {
  return (
    <section id="about" className="py-24 bg-card">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-3xl mb-16">
          <span className="text-primary text-sm font-medium uppercase tracking-widest mb-4 block">
            About the Summit
          </span>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 text-balance">
            Where Innovation Meets Opportunity
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            NextGen Summit brings together the brightest minds in African
            biotechnology. From pioneering researchers to visionary investors,
            we create the connections that drive real progress in life sciences
            across the continent.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-6 bg-background border border-border rounded-lg hover:border-primary/50 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
