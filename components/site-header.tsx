"use client"

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { Menu, X, Phone } from "lucide-react"
import { cn } from "@/lib/utils"

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/treatments", label: "Treatments" },
  { href: "/policies", label: "Policies" },
  { href: "/contact", label: "Contact" },
]

export function SiteHeader() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-40 w-full border-b border-border/60 bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center px-6 py-0.5 lg:px-10 lg:py-1">
        {/* Logo */}
        <Link href="/" className="shrink-0" aria-label="GloVive Wellness & MedSpa home">
          <Image
            src="/images/glovive-logo.png"
            alt="GloVive Wellness & MedSpa"
            width={140}
            height={140}
            className="w-auto h-[60px] lg:h-[104px]"
            priority
          />
        </Link>

        {/* Centered nav */}
        <nav aria-label="Primary" className="mx-auto hidden items-center gap-8 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="group relative text-[14px] uppercase tracking-[0.18em] text-ink/80 transition-colors hover:text-cognac"
            >
              {item.label}
              <span className="absolute -bottom-1.5 left-0 h-px w-0 bg-cognac transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </nav>

        {/* Right side: phone + CTA */}
        <div className="ml-auto flex shrink-0 items-center gap-4">
          <Link
            href="tel:4109484640"
            className="hidden items-center gap-2 text-[13px] tracking-[0.1em] text-ink/70 transition-colors hover:text-cognac xl:flex"
          >
            <Phone className="h-3.5 w-3.5" />
            <span>410 · 948 · 4640</span>
          </Link>
          <Link
            href="/booking"
            className="hidden rounded-full bg-cognac px-5 py-2.5 text-[11px] uppercase tracking-[0.18em] text-primary-foreground transition-colors hover:bg-cognac-dark md:inline-flex"
          >
            Book Now
          </Link>
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border/70 text-ink lg:hidden"
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={cn(
          "overflow-hidden border-t border-border/50 bg-background transition-[max-height,opacity] duration-300 lg:hidden",
          open ? "max-h-[520px] opacity-100" : "max-h-0 opacity-0",
        )}
      >
        <div className="flex flex-col gap-1 px-6 py-6">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="border-b border-border/40 py-3 font-serif text-2xl text-ink transition-colors hover:text-cognac"
            >
              {item.label}
            </Link>
          ))}
          <div className="mt-5 flex flex-col gap-3">
            <Link
              href="tel:4109484640"
              className="flex items-center justify-center gap-2 rounded-full border border-border/80 py-3 text-sm uppercase tracking-[0.2em]"
            >
              <Phone className="h-3.5 w-3.5" />
              410 · 948 · 4640
            </Link>
            <Link
              href="/booking"
              onClick={() => setOpen(false)}
              className="rounded-full bg-cognac py-3 text-center text-xs uppercase tracking-[0.22em] text-primary-foreground"
            >
              Book Now
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}
