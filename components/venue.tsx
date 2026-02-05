import { MapPin, Wifi, Coffee, Car } from "lucide-react"

const amenities = [
  { icon: Wifi, label: "High-Speed WiFi" },
  { icon: Coffee, label: "Premium Catering" },
  { icon: Car, label: "Valet Parking" },
  { icon: MapPin, label: "Central Location" },
]

export function Venue() {
  return (
    <section id="venue" className="border-b border-border bg-card/20 py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left column - Info */}
          <div>
            <p className="mb-4 text-xs font-semibold tracking-widest text-primary">
              THE VENUE
            </p>
            <h2 className="mb-6 text-balance text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
              Cape Town International
              <br />
              Convention Centre
            </h2>
            <p className="mb-8 text-pretty text-lg leading-relaxed text-muted-foreground">
              Experience world-class facilities at Africa&apos;s premier convention destination. 
              Located in the heart of Cape Town, with stunning views of Table Mountain and 
              easy access to hotels, restaurants, and attractions.
            </p>

            {/* Address */}
            <div className="mb-8 rounded-lg border border-border bg-background p-6">
              <p className="mb-2 text-xs font-semibold tracking-widest text-muted-foreground">
                ADDRESS
              </p>
              <p className="text-foreground">
                Convention Square
                <br />
                1 Lower Long Street
                <br />
                Cape Town, 8001
                <br />
                South Africa
              </p>
            </div>

            {/* Amenities */}
            <div className="grid grid-cols-2 gap-4">
              {amenities.map((amenity, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 rounded-lg border border-border bg-background p-4"
                >
                  <amenity.icon className="h-5 w-5 text-primary" />
                  <span className="text-sm font-medium text-foreground">
                    {amenity.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right column - Map placeholder */}
          <div className="relative overflow-hidden rounded-lg border border-border bg-muted">
            <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center">
              <MapPin className="mb-4 h-12 w-12 text-primary" />
              <h3 className="mb-2 text-xl font-semibold text-foreground">
                Cape Town, South Africa
              </h3>
              <p className="mb-6 text-sm text-muted-foreground">
                Where innovation meets African excellence
              </p>
              <a
                href="https://maps.google.com/?q=Cape+Town+International+Convention+Centre"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-border bg-background px-6 py-3 text-sm font-medium text-foreground transition-all hover:bg-card"
              >
                View on Google Maps
              </a>
            </div>
            {/* Grid pattern overlay */}
            <div 
              className="absolute inset-0 opacity-10"
              style={{
                backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px),
                                  linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
                backgroundSize: '40px 40px'
              }}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
