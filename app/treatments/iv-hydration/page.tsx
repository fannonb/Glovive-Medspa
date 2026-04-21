import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, ArrowUpRight, Droplets, Plus, ChevronRight } from "lucide-react"

export const metadata = {
  title: "IV Nutrient Collection | GloVive Wellness & MedSpa",
  description: "Explore our signature IV nutrient infusions — customized treatments to restore, replenish, and illuminate.",
}

const treatments = [
  {
    name: "The GloVive Elixir",
    slug: "glovive-elixir",
    tagline: "A signature radiance infusion designed to deeply hydrate and enhance your natural glow.",
    benefits: ["Hydration", "Skin radiance", "Anti-aging", "Glow enhancement"],
    pricing: [
      { size: "500 mL", price: "$165" },
      { size: "1000 mL", price: "$195" },
    ],
  },
  {
    name: "Vive Vitality",
    tagline: "A revitalizing infusion crafted to restore energy and sharpen focus.",
    benefits: ["Energy", "Mental clarity", "Reduced fatigue", "Metabolism support"],
    pricing: [
      { size: "500 mL", price: "$140" },
      { size: "1000 mL", price: "$165" },
    ],
  },
  {
    name: "Immune Reserve",
    tagline: "A protective infusion designed to strengthen your immune system.",
    benefits: ["Immune support", "Recovery", "Anti-inflammatory", "Wellness"],
    pricing: [
      { size: "500 mL", price: "$150" },
      { size: "1000 mL", price: "$175" },
    ],
  },
  {
    name: "Tranquility Drip",
    tagline: "A calming infusion designed to ease tension and promote relaxation.",
    benefits: ["Relaxation", "Headache relief", "Reduced inflammation", "Hydration"],
    pricing: [
      { size: "500 mL", price: "$135" },
      { size: "1000 mL", price: "$160" },
    ],
  },
  {
    name: "NAD+ Longevity Infusion",
    tagline: "A premium treatment supporting cellular repair and long-term vitality.",
    benefits: ["Cellular repair", "Mental clarity", "Anti-aging", "Energy"],
    pricing: [{ size: "Starting at", price: "$275+" }],
    premium: true,
  },
  {
    name: "Pure Hydration",
    tagline: "An essential infusion to restore hydration and rebalance the body.",
    benefits: ["Rapid hydration", "Electrolytes", "Recovery"],
    pricing: [
      { size: "500 mL", price: "$110" },
      { size: "1000 mL", price: "$130" },
    ],
  },
  {
    name: "Detox Renewal",
    tagline: "A gentle infusion supporting detoxification and internal reset.",
    benefits: ["Detox", "Liver support", "Rejuvenation", "Hydration"],
    pricing: [
      { size: "500 mL", price: "$145" },
      { size: "1000 mL", price: "$170" },
    ],
  },
  {
    name: "Recovery Luxe",
    tagline: "A performance-focused infusion to restore strength and accelerate recovery.",
    benefits: ["Muscle recovery", "Reduced soreness", "Hydration", "Performance"],
    pricing: [
      { size: "500 mL", price: "$155" },
      { size: "1000 mL", price: "$180" },
    ],
  },
]

const addOns = [
  { name: "Vitamin C", price: "$25" },
  { name: "Glutathione", price: "$30 – $40" },
  { name: "B12 Boost", price: "$20" },
  { name: "Zinc", price: "$20" },
]

export default function IVHydrationPage() {
  return (
    <>
      {/* HEADER */}
      <section className="bg-linen">
        <div className="mx-auto max-w-7xl px-6 pb-10 pt-8 lg:px-10 lg:pb-14 lg:pt-10">
          {/* Back link */}
          <Link
            href="/treatments"
            className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.22em] text-ink/60 transition-colors hover:text-cognac"
          >
            <ArrowLeft className="h-4 w-4" />
            All Collections
          </Link>

          <div className="mt-8 grid gap-10 lg:grid-cols-2 lg:gap-16">
            {/* Left - Content */}
            <div className="flex flex-col justify-center">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-cognac/10">
                  <Droplets className="h-5 w-5 text-cognac" strokeWidth={1.75} />
                </div>
                <span className="text-[11px] uppercase tracking-[0.22em] text-cognac">Collection 01</span>
              </div>
              <h1 className="mt-5 font-serif text-[44px] leading-[1.05] tracking-tight text-ink md:text-[56px]">
                GloVive <em className="italic text-cognac">Signature Hydration</em>
              </h1>
              <p className="mt-5 max-w-lg text-sm md:text-base leading-relaxed text-ink/70">
                Customized IV infusions, medically formulated to restore, replenish, and illuminate. Choose from our curated menu or let us customize one for you.
              </p>
              <div className="mt-6 flex items-center gap-6 border-t border-border/40 pt-6">
                <div>
                  <p className="text-[10px] uppercase tracking-[0.2em] text-ink/50">Treatments</p>
                  <p className="mt-1 font-serif text-2xl text-ink">{treatments.length}</p>
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-[0.2em] text-ink/50">Starting</p>
                  <p className="mt-1 font-serif text-2xl text-cognac">$110</p>
                </div>
              </div>
            </div>

            {/* Right - Image */}
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl lg:aspect-square">
              <Image
                src="/images/collection-iv.jpg"
                alt="IV Hydration treatments"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* TREATMENTS GRID */}
      <section className="bg-bone/40">
        <div className="mx-auto max-w-7xl px-6 py-14 lg:px-10 lg:py-20">
          <h2 className="font-serif text-[28px] text-ink md:text-[32px]">All Treatments</h2>
          
          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {treatments.map((t) => {
              const cardContent = (
                <>
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="font-serif text-[24px] leading-tight text-ink">{t.name}</h3>
                      <p className="mt-2 text-sm md:text-base leading-relaxed text-ink/65">{t.tagline}</p>
                    </div>
                    {t.premium && (
                      <span className="shrink-0 rounded-full bg-cognac/10 px-3 py-1 text-[9px] uppercase tracking-[0.2em] text-cognac">
                        Premium
                      </span>
                    )}
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {t.benefits.map((b) => (
                      <span
                        key={b}
                        className="rounded-full border border-border/60 bg-background px-3 py-1 text-[10px] text-ink/65"
                      >
                        {b}
                      </span>
                    ))}
                  </div>

                  <ul className="mt-auto divide-y divide-border/50 border-t border-border/50 pt-4">
                    {t.pricing.map((p) => (
                      <li key={p.size} className="flex items-center justify-between py-3">
                        <span className="text-sm text-ink/70">{p.size}</span>
                        <span className="font-serif text-lg text-ink">{p.price}</span>
                      </li>
                    ))}
                  </ul>

                  {t.slug && (
                    <div className="flex items-center gap-1 pt-2 text-[11px] uppercase tracking-[0.2em] text-cognac transition-colors group-hover:text-cognac-dark">
                      View Details
                      <ChevronRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                    </div>
                  )}
                </>
              )

              const baseClasses = `group flex flex-col gap-4 rounded-xl border p-6 transition-all ${
                t.premium
                  ? "border-cognac/30 bg-cognac/5"
                  : "border-border/50 bg-background hover:border-cognac/40 hover:shadow-lg"
              }`

              return t.slug ? (
                <Link key={t.name} href={`/treatments/${t.slug}`} className={`${baseClasses} hover:shadow-lg`}>
                  {cardContent}
                </Link>
              ) : (
                <div key={t.name} className={baseClasses}>
                  {cardContent}
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ADD-ONS */}
      <section className="bg-linen">
        <div className="mx-auto max-w-7xl px-6 py-14 lg:px-10 lg:py-20">
          <div className="rounded-xl border border-border/60 bg-bone/50 p-8 md:p-10">
            <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
              <div>
                <span className="text-[11px] uppercase tracking-[0.32em] text-cognac">Enhance Your Experience</span>
                <h3 className="mt-3 font-serif text-[28px] text-ink md:text-[32px]">
                  Customize with <em className="italic text-cognac">Glow add-ons.</em>
                </h3>
                <p className="mt-3 max-w-lg text-sm md:text-base text-ink/70">
                  Elevate any infusion with a performance, beauty, or immunity booster.
                </p>
              </div>
              <Plus className="h-10 w-10 text-cognac" strokeWidth={1.2} />
            </div>
            <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {addOns.map((a) => (
                <li key={a.name} className="flex items-baseline justify-between gap-4 rounded-lg bg-linen p-4">
                  <span className="font-serif text-lg text-ink">{a.name}</span>
                  <span className="text-sm text-cognac">{a.price}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section className="bg-bone/40">
        <div className="mx-auto max-w-4xl px-6 py-14 text-center lg:px-10 lg:py-20">
          <h2 className="font-serif text-[32px] leading-[1.1] text-ink md:text-[40px]">
            Ready to <em className="italic text-cognac">restore & replenish?</em>
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-sm md:text-base text-ink/70">
            Book your IV hydration session today or call us to discuss which infusion is right for you.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/booking"
              className="group inline-flex items-center gap-2 rounded-full bg-cognac px-7 py-4 text-xs uppercase tracking-[0.22em] text-primary-foreground transition-colors hover:bg-cognac-dark"
            >
              Book Now
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>
            <Link
              href="/treatments"
              className="rounded-full border border-ink/20 px-7 py-4 text-xs uppercase tracking-[0.22em] text-ink transition-colors hover:border-cognac hover:text-cognac"
            >
              View All Collections
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
