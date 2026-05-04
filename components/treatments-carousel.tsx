"use client"

import { useRef, useState, useEffect, useCallback } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react"

const allTreatments = [
  {
    name: "The GloVive Elixir",
    category: "IV Nutrient",
    tagline: "Signature radiance infusion for deep hydration and natural glow.",
    benefits: ["Hydration", "Skin radiance", "Anti-aging"],
    price: "from $185",
    tag: "Most Requested",
    featured: true,
    image: "/images/service-iv-hydration.jpg",
    href: "/treatments/iv-hydration#glovive-elixir",
  },
  {
    name: "Vive Vitality",
    category: "IV Nutrient",
    tagline: "Revitalizing infusion to restore energy and sharpen focus.",
    benefits: ["Energy", "Mental clarity", "Metabolism"],
    price: "from $170",
    tag: null,
    featured: false,
    image: "/images/service-concierge.jpg",
    href: "/treatments/iv-hydration#vive-vitality",
  },
  {
    name: "NAD+ Longevity Infusion",
    category: "IV Nutrient",
    tagline: "Premium cellular repair and long-term vitality infusion.",
    benefits: ["Cellular repair", "Anti-aging", "Energy"],
    price: "from $275",
    tag: "Premium",
    featured: false,
    image: "/images/service-ketamine.jpg",
    href: "/treatments/iv-hydration#nadplus-longevity-infusion",
  },
  {
    name: "Immune Reserve",
    category: "IV Nutrient",
    tagline: "A protective infusion designed to strengthen your immune system.",
    benefits: ["Immune support", "Recovery", "Wellness"],
    price: "from $175",
    tag: null,
    featured: false,
    image: "/images/interior-spa.jpg",
    href: "/treatments/iv-hydration#immune-reserve",
  },
  {
    name: "Tranquility Drip",
    category: "IV Nutrient",
    tagline: "Calming infusion designed to ease tension and promote relaxation.",
    benefits: ["Relaxation", "Headache relief", "Hydration"],
    price: "from $155",
    tag: null,
    featured: false,
    image: "/images/service-body-balance.jpg",
    href: "/treatments/iv-hydration#tranquility-drip",
  },
  {
    name: "GloVive Glow Shot",
    category: "Vitamin Injection",
    tagline: "Glutathione beauty booster to brighten skin and support detox.",
    benefits: ["Skin brightening", "Detox", "Anti-aging"],
    price: "from $45",
    tag: "Signature",
    featured: true,
    image: "/images/service-vitamins.jpg",
    href: "/treatments/vitamins#glovive-glow-shot",
  },
  {
    name: "B12 Energy Boost",
    category: "Vitamin Injection",
    tagline: "Fast-acting injection to increase energy and support metabolism.",
    benefits: ["Energy", "Metabolism", "Focus"],
    price: "$40",
    tag: null,
    featured: false,
    image: "/images/service-card-vitamins.jpg",
    href: "/treatments/vitamins#b12-energy-boost",
  },
  {
    name: "Ketamine IV Infusion Therapy",
    category: "Ketamine Therapy",
    tagline: "Medically guided healing for clarity, balance, and inner calm.",
    benefits: ["Mental clarity", "Emotional balance", "Restoration"],
    price: "from $150",
    tag: "Guided",
    featured: false,
    image: "/images/service-card-ketamine.jpg",
    href: "/treatments/ketamine-iv-infusion",
  },
  {
    name: "GloVive Body Balance",
    category: "Weight Management",
    tagline: "Personalized plan for sustainable weight loss and metabolism.",
    benefits: ["Weight loss", "Metabolism", "Wellness"],
    price: "from $100",
    tag: null,
    featured: false,
    image: "/images/service-card-balance.jpg",
    href: "/treatments/body-balance",
  },
  {
    name: "Detox Renewal",
    category: "IV Nutrient Hydration",
    tagline: "Gentle infusion supporting detoxification and internal reset.",
    benefits: ["Detox", "Liver support", "Rejuvenation"],
    price: "from $170",
    tag: null,
    featured: false,
    image: "/images/about-founder.jpg",
    href: "/treatments/iv-hydration#detox-renewal",
  },
]

export function TreatmentsCarousel() {
  const trackRef = useRef<HTMLDivElement>(null)
  const [activeIndex, setActiveIndex] = useState(0)
  const [canPrev, setCanPrev] = useState(false)
  const [canNext, setCanNext] = useState(true)

  const CARD_WIDTH = 320
  const GAP = 20
  const STEP = CARD_WIDTH + GAP

  const updateButtons = useCallback(() => {
    const el = trackRef.current
    if (!el) return
    setCanPrev(el.scrollLeft > 4)
    setCanNext(el.scrollLeft < el.scrollWidth - el.clientWidth - 4)
    // update dot
    setActiveIndex(Math.round(el.scrollLeft / STEP))
  }, [STEP])

  useEffect(() => {
    const el = trackRef.current
    if (!el) return
    el.addEventListener("scroll", updateButtons, { passive: true })
    updateButtons()
    return () => el.removeEventListener("scroll", updateButtons)
  }, [updateButtons])

  const scroll = (dir: "prev" | "next") => {
    const el = trackRef.current
    if (!el) return
    el.scrollBy({ left: dir === "next" ? STEP : -STEP, behavior: "smooth" })
  }

  const scrollTo = (idx: number) => {
    const el = trackRef.current
    if (!el) return
    el.scrollTo({ left: idx * STEP, behavior: "smooth" })
  }

  return (
    <div className="relative">
      {/* Scroll track */}
      <div
        ref={trackRef}
        className="flex gap-5 overflow-x-auto scroll-smooth pb-4"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {allTreatments.map((t) => (
          <Link
            key={t.name}
            href={t.href}
            className="group relative flex w-[320px] shrink-0 flex-col overflow-hidden rounded-2xl bg-background ring-1 ring-border/30 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_20px_50px_-20px_rgba(67,40,20,0.28)] hover:ring-cognac/40"
          >
            {/* Image */}
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src={t.image}
                alt={t.name}
                fill
                sizes="320px"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/20 to-transparent" />

              <div className="absolute inset-x-0 bottom-0 px-5 pb-4">
                <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-linen drop-shadow-sm">{t.category}</p>
              </div>
            </div>

            {/* Content */}
            <div className="flex flex-1 flex-col gap-3 px-5 py-4">
              <h3 className="font-serif text-[22px] leading-snug text-ink">{t.name}</h3>
              <p className="text-[13px] leading-relaxed text-ink/60">{t.tagline}</p>

              {/* Benefit pills */}
              <div className="flex flex-wrap gap-1.5">
                {t.benefits.map((b) => (
                  <span key={b} className="rounded-full bg-[#a4532e] px-2.5 py-0.5 text-[10px] text-white">
                    {b}
                  </span>
                ))}
              </div>

              <div className="mt-auto flex items-center justify-between border-t border-border/50 pt-4">
                <span className="font-serif text-lg text-ink">{t.price}</span>
                <span className="inline-flex items-center gap-1 text-[10px] uppercase tracking-[0.2em] text-cognac transition-colors group-hover:text-cognac-dark">
                  View
                  <ArrowUpRight className="h-3 w-3 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Controls row */}
      <div className="mt-8 flex items-center justify-between">
        {/* Dot indicators */}
        <div className="flex items-center gap-2">
          {allTreatments.map((_, i) => (
            <button
              key={i}
              onClick={() => scrollTo(i)}
              aria-label={`Go to treatment ${i + 1}`}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === activeIndex ? "w-6 bg-cognac" : "w-1.5 bg-border"
              }`}
            />
          ))}
        </div>

        {/* Prev / Next */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => scroll("prev")}
            disabled={!canPrev}
            aria-label="Previous treatment"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-border/60 text-ink/60 transition-all hover:border-cognac hover:text-cognac disabled:opacity-30"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
          <button
            onClick={() => scroll("next")}
            disabled={!canNext}
            aria-label="Next treatment"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-border/60 text-ink/60 transition-all hover:border-cognac hover:text-cognac disabled:opacity-30"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  )
}
