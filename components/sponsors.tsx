import { Button } from "@/components/ui/button"

const sponsors = {
  platinum: ["BioAfrica Labs", "GenomeVentures", "LifeScience Partners"],
  gold: ["AfriPharma", "MedTech Africa", "BioInvest SA", "HealthGrid"],
  silver: ["TechBio", "VaxAfrica", "Genomics Hub", "BioStart", "LabConnect", "ResearchNet"],
}

export function Sponsors() {
  return (
    <section id="sponsors" className="py-24 bg-card">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-medium uppercase tracking-widest mb-4 block">
            Our Partners
          </span>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Trusted by Industry Leaders
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Join the organizations driving innovation in African biotechnology.
          </p>
        </div>

        {/* Platinum Sponsors */}
        <div className="mb-12">
          <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-widest text-center mb-6">
            Platinum Partners
          </h3>
          <div className="flex flex-wrap justify-center gap-8">
            {sponsors.platinum.map((sponsor, index) => (
              <div
                key={index}
                className="w-48 h-24 bg-background border border-border rounded-lg flex items-center justify-center hover:border-primary/50 transition-colors"
              >
                <span className="text-lg font-semibold text-foreground">{sponsor}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Gold Sponsors */}
        <div className="mb-12">
          <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-widest text-center mb-6">
            Gold Partners
          </h3>
          <div className="flex flex-wrap justify-center gap-6">
            {sponsors.gold.map((sponsor, index) => (
              <div
                key={index}
                className="w-40 h-20 bg-background border border-border rounded-lg flex items-center justify-center hover:border-primary/50 transition-colors"
              >
                <span className="text-sm font-medium text-foreground">{sponsor}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Silver Sponsors */}
        <div className="mb-12">
          <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-widest text-center mb-6">
            Silver Partners
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {sponsors.silver.map((sponsor, index) => (
              <div
                key={index}
                className="w-32 h-16 bg-background border border-border rounded-lg flex items-center justify-center hover:border-primary/50 transition-colors"
              >
                <span className="text-xs font-medium text-muted-foreground">{sponsor}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center">
          <Button variant="outline" className="border-border hover:bg-background">
            Become a Sponsor
          </Button>
        </div>
      </div>
    </section>
  )
}
