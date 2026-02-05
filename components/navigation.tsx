"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"

const navLinks = [
  { href: "#about", label: "ABOUT" },
  { href: "#speakers", label: "SPEAKERS" },
  { href: "#agenda", label: "AGENDA" },
  { href: "#venue", label: "VENUE" },
  { href: "#faq", label: "FAQ" },
]

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border/40 bg-background/80 backdrop-blur-md">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        {/* Left nav links - desktop */}
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.slice(0, 3).map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-xs font-medium tracking-widest text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Logo - center */}
        <Link href="/" className="flex items-center gap-2">
          <span className="font-sans text-lg font-bold tracking-tight text-foreground">
            NextGen Summit
          </span>
          <span className="rounded border border-border px-1.5 py-0.5 text-[10px] font-semibold tracking-wider text-muted-foreground">
            26
          </span>
        </Link>

        {/* Right nav + CTA - desktop */}
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.slice(3).map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-xs font-medium tracking-widest text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="#register"
            className="rounded-full bg-foreground px-5 py-2 text-xs font-semibold tracking-wider text-background transition-all hover:bg-foreground/90"
          >
            REGISTER
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-foreground md:hidden"
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobile menu */}
      {isOpen && (
        <div className="border-t border-border bg-background md:hidden">
          <div className="flex flex-col gap-4 px-6 py-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-sm font-medium tracking-widest text-muted-foreground transition-colors hover:text-foreground"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="#register"
              onClick={() => setIsOpen(false)}
              className="mt-4 rounded-full bg-foreground px-5 py-3 text-center text-sm font-semibold tracking-wider text-background transition-all hover:bg-foreground/90"
            >
              REGISTER
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
