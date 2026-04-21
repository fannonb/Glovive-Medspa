import type { Metadata } from "next"
import { Playfair_Display, Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["400", "500", "600", "700"],
  display: "swap",
})

export const metadata: Metadata = {
  title: "GloVive Wellness & MedSpa | IV Nutrient, Ketamine & Vitamin Therapy",
  description:
    "Elevated IV nutrient therapy, ketamine wellness, vitamin injections, and medical weight management in Columbia, Maryland. Where wellness meets elevated care.",
  generator: "v0.app",
  icons: {
    icon: [
      { url: "/images/glovive-logo.png", type: "image/png" },
    ],
    apple: "/images/glovive-logo.png",
  },
}

export const viewport = {
  themeColor: "#F5EFE6",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} bg-background`}>
      <body className="font-sans antialiased text-foreground">
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
        {process.env.NODE_ENV === "production" && <Analytics />}
      </body>
    </html>
  )
}
