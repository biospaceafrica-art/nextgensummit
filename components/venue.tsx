import { MapPin, Wifi, Car, Coffee, Building2 } from "lucide-react"

const amenities = [
  { icon: Wifi, label: "High-Speed WiFi" },
  { icon: Car, label: "Parking Available" },
  { icon: Coffee, label: "Catering Included" },
  { icon: Building2, label: "Exhibition Hall" },
]

export function Venue() {
  return (
    <section id="venue" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-primary text-sm font-medium uppercase tracking-widest mb-4 block">
              Event Venue
            </span>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
              Cape Town International Convention Centre
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Located in the heart of Cape Town, the CTICC offers world-class
              facilities with stunning views of Table Mountain. Our venue
              features state-of-the-art conference rooms, expansive exhibition
              spaces, and premium networking areas.
            </p>

            <div className="flex items-start gap-3 mb-8">
              <MapPin className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
              <div>
                <p className="font-medium">Convention Square</p>
                <p className="text-muted-foreground">1 Lower Long Street, Cape Town, 8001</p>
                <p className="text-muted-foreground">South Africa</p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {amenities.map((amenity, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <amenity.icon className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-sm font-medium">{amenity.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="aspect-[4/3] rounded-lg bg-card border border-border overflow-hidden">
              <div className="w-full h-full bg-gradient-to-br from-primary/5 to-primary/10 flex items-center justify-center">
                <div className="text-center p-8">
                  <Building2 className="w-16 h-16 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">CTICC</h3>
                  <p className="text-sm text-muted-foreground">
                    Africa&apos;s Leading Conference Venue
                  </p>
                </div>
              </div>
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 border border-primary/20 rounded-lg" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 border border-primary/20 rounded-lg" />
          </div>
        </div>
      </div>
    </section>
  )
}
