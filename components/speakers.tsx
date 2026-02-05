const speakers = [
  {
    name: "Dr. Amara Okonkwo",
    role: "Chief Scientist",
    company: "AfriGenomics Institute",
    topic: "Genomic Medicine in Africa",
    initials: "AO",
  },
  {
    name: "Prof. Kwame Mensah",
    role: "Director of Research",
    company: "Ghana Biotech Foundation",
    topic: "Sustainable Biomanufacturing",
    initials: "KM",
  },
  {
    name: "Dr. Fatima El-Amin",
    role: "CEO & Founder",
    company: "NilePharma",
    topic: "Drug Discovery Pipelines",
    initials: "FE",
  },
  {
    name: "Dr. Thabo Ndlovu",
    role: "Head of Innovation",
    company: "Cape Bio Ventures",
    topic: "Investment in African Biotech",
    initials: "TN",
  },
  {
    name: "Prof. Aisha Ibrahim",
    role: "Research Director",
    company: "Lagos Life Sciences",
    topic: "CRISPR Applications",
    initials: "AI",
  },
  {
    name: "Dr. Jean-Pierre Kagame",
    role: "Chief Medical Officer",
    company: "Rwanda Health Tech",
    topic: "Healthcare Infrastructure",
    initials: "JK",
  },
]

export function Speakers() {
  return (
    <section id="speakers" className="border-b border-border bg-card/20 py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        {/* Section header */}
        <div className="mb-16 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="mb-4 text-xs font-semibold tracking-widest text-primary">
              FEATURED SPEAKERS
            </p>
            <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
              Learn from Africa&apos;s
              <br />
              leading minds
            </h2>
          </div>
          <a
            href="#speakers"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            View all 50+ speakers →
          </a>
        </div>

        {/* Speakers grid */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {speakers.map((speaker, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg border border-border bg-background p-6 transition-all hover:border-muted-foreground/50 hover:bg-card"
            >
              <div className="mb-6 flex items-start justify-between">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-muted text-xl font-semibold text-foreground">
                  {speaker.initials}
                </div>
                <span className="rounded-full border border-border px-3 py-1 text-[10px] font-medium tracking-wider text-muted-foreground">
                  KEYNOTE
                </span>
              </div>
              <h3 className="mb-1 text-lg font-semibold text-foreground">
                {speaker.name}
              </h3>
              <p className="mb-1 text-sm text-muted-foreground">{speaker.role}</p>
              <p className="mb-4 text-sm font-medium text-primary">{speaker.company}</p>
              <div className="border-t border-border pt-4">
                <p className="text-xs font-medium tracking-wider text-muted-foreground">
                  SPEAKING ON
                </p>
                <p className="mt-1 text-sm text-foreground">{speaker.topic}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
