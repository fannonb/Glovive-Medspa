import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, ArrowUpRight, Syringe } from "lucide-react"

export const metadata = {
  title: "Vitamin Injections Collection | GloVive Wellness & MedSpa",
  description: "Targeted vitamin injections designed to support energy, beauty, immunity, and overall wellness.",
}

const vitaminShots = [
  {
    name: "B12 Vitality Boost",
    tagline: "Fast-acting injection to increase energy and support metabolism.",
    benefits: ["Energy", "Metabolism", "Focus"],
    price: "$25",
  },
  {
    name: "Vitamin D Restore",
    tagline: "Supports bone health, immune function, and overall wellness.",
    benefits: ["Immunity", "Bone health", "Mood support"],
    price: "$30",
  },
  {
    name: "Biotin Beauty Boost",
    tagline: "Enhance the health of your hair, skin, and nails.",
    benefits: ["Hair growth", "Skin health", "Nail strength"],
    price: "$30",
  },
  {
    name: "Immunity Boost",
    tagline: "Vitamin C + Zinc combination to strengthen your immune system.",
    benefits: ["Immune support", "Recovery", "Antioxidant support"],
    price: "$35",
  },
  {
    name: "GloVive Glow Shot",
    tagline: "Signature glutathione booster for brightening, detox, and radiance.",
    benefits: ["Skin brightening", "Detox support", "Anti-aging"],
    price: "$35 – $45",
    signature: true,
  },
]

export default function VitaminsPage() {
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
                  <Syringe className="h-5 w-5 text-cognac" strokeWidth={1.75} />
                </div>
                <span className="text-[11px] uppercase tracking-[0.22em] text-cognac">Collection 03</span>
              </div>
              <h1 className="mt-5 font-serif text-[44px] leading-[1.05] tracking-tight text-ink md:text-[56px]">
                GloVive <em className="italic text-cognac">Vitamin Boost</em>
              </h1>
              <p className="mt-5 max-w-lg text-sm md:text-base leading-relaxed text-ink/70">
                Targeted vitamin injections designed to support energy, beauty, immunity, and overall wellness — delivered quickly for effective results.
              </p>
              <div className="mt-6 flex items-center gap-6 border-t border-border/40 pt-6">
                <div>
                  <p className="text-[10px] uppercase tracking-[0.2em] text-ink/50">Injections</p>
                  <p className="mt-1 font-serif text-2xl text-ink">{vitaminShots.length}</p>
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-[0.2em] text-ink/50">Starting</p>
                  <p className="mt-1 font-serif text-2xl text-cognac">$25</p>
                </div>
              </div>
            </div>

            {/* Right - Image */}
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl lg:aspect-square">
              <Image
                src="/images/collection-vitamins.jpg"
                alt="Vitamin injections"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* VITAMIN SHOTS GRID */}
      <section className="bg-bone/40">
        <div className="mx-auto max-w-7xl px-6 py-14 lg:px-10 lg:py-20">
          <h2 className="font-serif text-[28px] text-ink md:text-[32px]">All Injections</h2>
          
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {vitaminShots.map((v) => (
              <div
                key={v.name}
                className={`flex flex-col gap-4 rounded-xl border p-6 ${
                  v.signature
                    ? "border-cognac/30 bg-cognac/5"
                    : "border-border/50 bg-background"
                }`}
              >
                <div className="flex items-start justify-between gap-3">
                  <h3 className="font-serif text-[22px] leading-tight text-ink">{v.name}</h3>
                </div>
                <p className="text-sm md:text-base leading-relaxed text-ink/65">{v.tagline}</p>
                <div className="flex flex-wrap gap-2">
                  {v.benefits.map((b) => (
                    <span
                      key={b}
                      className="rounded-full border border-border/60 bg-background px-2.5 py-1 text-[10px] text-ink/60"
                    >
                      {b}
                    </span>
                  ))}
                </div>
                <div className="mt-auto flex items-end justify-between border-t border-border/50 pt-4">
                  <span className="text-[10px] uppercase tracking-[0.22em] text-muted-foreground">Injection</span>
                  <span className="font-serif text-xl text-ink">{v.price}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section className="bg-linen">
        <div className="mx-auto max-w-4xl px-6 py-14 text-center lg:px-10 lg:py-20">
          <h2 className="font-serif text-[32px] leading-[1.1] text-ink md:text-[40px]">
            Quick, targeted <em className="italic text-cognac">wellness boosts.</em>
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-sm md:text-base text-ink/70">
            Walk in for a vitamin shot or add one to your IV infusion for enhanced results.
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
