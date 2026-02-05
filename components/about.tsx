import { Microscope, Users, Lightbulb, Globe } from "lucide-react"

const features = [
  {
    icon: Microscope,
    title: "Cutting-Edge Research",
    description: "Explore the latest breakthroughs in genomics, synthetic biology, and biomanufacturing from Africa's leading institutions.",
  },
  {
    icon: Users,
    title: "Strategic Networking",
    description: "Connect with decision-makers, investors, and innovators shaping the future of African biotechnology.",
  },
  {
    icon: Lightbulb,
    title: "Innovation Showcase",
    description: "Discover groundbreaking startups and technologies transforming healthcare, agriculture, and sustainability.",
  },
  {
    icon: Globe,
    title: "Global Partnerships",
    description: "Forge international collaborations and access funding opportunities for your biospace ventures.",
  },
]

export function About() {
  return (
    <section id="about" className="border-b border-border py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        {/* Section header */}
        <div className="mb-16 max-w-3xl">
          <p className="mb-4 text-xs font-semibold tracking-widest text-primary">
            ABOUT THE SUMMIT
          </p>
          <h2 className="mb-6 text-balance text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
            Where African bioscience
            <br />
            meets global opportunity
          </h2>
          <p className="text-pretty text-lg leading-relaxed text-muted-foreground">
            NextGen Summit is the definitive gathering for biotechnology professionals 
            committed to advancing Africa&apos;s position in the global biospace ecosystem. 
            From drug discovery to agricultural innovation, we&apos;re building the platforms 
            that will define the next generation of African science.
          </p>
        </div>

        {/* Features grid */}
        <div className="grid gap-px overflow-hidden rounded-lg border border-border bg-border md:grid-cols-2">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-background p-8 transition-colors hover:bg-card md:p-12"
            >
              <feature.icon className="mb-6 h-8 w-8 text-primary" />
              <h3 className="mb-3 text-xl font-semibold text-foreground">
                {feature.title}
              </h3>
              <p className="text-pretty leading-relaxed text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
