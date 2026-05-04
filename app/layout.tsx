import type { Metadata } from "next"
import { Analytics } from "@vercel/analytics/next"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { DiscountPopup } from "@/components/discount-popup"
import "./globals.css"

export const metadata: Metadata = {
  title: "GloVive Wellness & MedSpa | IV Nutrient, Ketamine & Vitamin Therapy",
  description:
    "Elevated IV nutrient therapy, Ketamine IV Infusion Therapy, vitamin injections, and medical weight management in Columbia, Maryland. Where wellness meets elevated care.",
  generator: "v0.app",
  icons: {
    icon: [
      { url: "/images/glovive-logo.png", type: "image/png" },
    ],
    apple: "/images/glovive-logo.png",
  },
}

export const viewport = {
  themeColor: "#FFFBF5",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className="bg-background"
    >
      <body className="font-sans antialiased text-foreground">
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
        <DiscountPopup />
        {process.env.NODE_ENV === "production" && <Analytics />}
      </body>
    </html>
  )
}
