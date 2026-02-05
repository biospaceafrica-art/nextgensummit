import Link from "next/link"

const footerLinks = {
  event: [
    { label: "About", href: "#about" },
    { label: "Speakers", href: "#speakers" },
    { label: "Agenda", href: "#agenda" },
    { label: "Venue", href: "#venue" },
  ],
  attend: [
    { label: "Register", href: "#register" },
    { label: "FAQ", href: "#faq" },
    { label: "Accommodation", href: "#venue" },
    { label: "Travel Info", href: "#venue" },
  ],
  connect: [
    { label: "Contact Us", href: "mailto:info@nextgensummit.africa" },
    { label: "Sponsorship", href: "mailto:sponsors@nextgensummit.africa" },
    { label: "Press", href: "mailto:press@nextgensummit.africa" },
    { label: "Careers", href: "#" },
  ],
}

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand column */}
          <div className="lg:col-span-1">
            <Link href="/" className="mb-4 inline-flex items-center gap-2">
              <span className="text-lg font-bold tracking-tight text-foreground">
                NextGen Summit
              </span>
              <span className="rounded border border-border px-1.5 py-0.5 text-[10px] font-semibold tracking-wider text-muted-foreground">
                26
              </span>
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Africa&apos;s premier biotechnology and life sciences summit. 
              Bringing together the brightest minds to shape the future of African biospace.
            </p>
            <div className="mt-6 flex gap-4">
              {["X", "LinkedIn", "YouTube"].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-xs font-semibold text-muted-foreground transition-all hover:border-foreground hover:text-foreground"
                >
                  {social[0]}
                </a>
              ))}
            </div>
          </div>

          {/* Links columns */}
          <div>
            <h4 className="mb-4 text-xs font-semibold tracking-widest text-foreground">
              EVENT
            </h4>
            <ul className="space-y-3">
              {footerLinks.event.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-xs font-semibold tracking-widest text-foreground">
              ATTEND
            </h4>
            <ul className="space-y-3">
              {footerLinks.attend.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-xs font-semibold tracking-widest text-foreground">
              CONNECT
            </h4>
            <ul className="space-y-3">
              {footerLinks.connect.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 md:flex-row">
          <p className="text-xs text-muted-foreground">
            &copy; 2026 NextGen Summit. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="#" className="text-xs text-muted-foreground hover:text-foreground">
              Privacy Policy
            </Link>
            <Link href="#" className="text-xs text-muted-foreground hover:text-foreground">
              Terms of Service
            </Link>
            <Link href="#" className="text-xs text-muted-foreground hover:text-foreground">
              Code of Conduct
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
