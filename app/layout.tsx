import type { Metadata, Viewport } from "next"
import { Inter, Space_Grotesk } from "next/font/google"
import "./globals.css"

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter"
})

const spaceGrotesk = Space_Grotesk({ 
  subsets: ["latin"],
  variable: "--font-space-grotesk"
})

export const metadata: Metadata = {
  title: "NextGen Summit 2026 | Africa's Premier Biospace Event",
  description: "Join visionary scientists, researchers, and industry leaders at Africa's most influential biotechnology and life sciences summit. Shaping the future of African biospace.",
  keywords: ["biotechnology", "biospace", "Africa", "summit", "life sciences", "research", "innovation"],
  openGraph: {
    title: "NextGen Summit 2026 | Africa's Premier Biospace Event",
    description: "Join visionary scientists, researchers, and industry leaders at Africa's most influential biotechnology and life sciences summit.",
    type: "website",
  },
}

export const viewport: Viewport = {
  themeColor: "#000000",
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
