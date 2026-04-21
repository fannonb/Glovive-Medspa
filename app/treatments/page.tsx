import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight, Droplets, HeartPulse, Syringe, MapPin, Leaf } from "lucide-react"

export const metadata = {
  title: "Treatment Collections | GloVive Wellness & MedSpa",
  description:
    "Explore our curated treatment collections — IV hydration, ketamine wellness, vitamin injections, concierge service, and body balance programs.",
}

const collections = [
  {
    id: "iv-hydration",
    number: "01",
    title: "Signature Hydration",
    subtitle: "IV Infusions",
    description: "Customized IV infusions medically formulated to restore, replenish, and illuminate. From radiance boosters to recovery support.",
    image: "/images/collection-iv.jpg",
    icon: Droplets,
    treatmentCount: 8,
    priceRange: "from $110",
    href: "/treatments/iv-hydration",
    featured: true,
  },
  {
    id: "ketamine",
    number: "02",
    title: "The Reset Experience",
    subtitle: "Ketamine Wellness",
    description: "Medically guided, immersive wellness designed to restore clarity, emotional balance, and inner calm in a safe environment.",
    image: "/images/collection-ketamine.jpg",
    icon: HeartPulse,
    treatmentCount: 4,
    priceRange: "from $125",
    href: "/treatments/ketamine",
  },
  {
    id: "vitamins",
    number: "03",
    title: "Vitamin Boost",
    subtitle: "Targeted Injections",
    description: "Quick, targeted vitamin injections designed to support energy, beauty, immunity, and overall wellness.",
    image: "/images/collection-vitamins.jpg",
    icon: Syringe,
    treatmentCount: 5,
    priceRange: "from $25",
    href: "/treatments/vitamins",
  },
  {
    id: "concierge",
    number: "04",
    title: "Concierge Care",
    subtitle: "In-Home IV Therapy",
    description: "Experience wellness on your terms. Personalized IV therapy delivered directly to your home, office, or preferred location.",
    image: "/images/collection-concierge.jpg",
    icon: MapPin,
    treatmentCount: 1,
    priceRange: "Treatment + travel fee",
    href: "/treatments/concierge",
  },
  {
    id: "body-balance",
    number: "05",
    title: "Body Balance",
    subtitle: "Weight Management",
    description: "A personalized, medically guided approach designed to support sustainable weight loss and improved metabolism.",
    image: "/images/collection-balance.jpg",
    icon: Leaf,
    treatmentCount: 2,
    priceRange: "from $100",
    href: "/treatments/body-balance",
  },
]

export default function TreatmentsPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-linen">
        <div className="mx-auto max-w-7xl px-6 pb-14 pt-20 lg:px-10 lg:pb-20 lg:pt-28">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center gap-2.5 text-[10px] uppercase tracking-[0.38em] text-cognac">
              <span className="h-px w-8 bg-cognac" />
              Our Collections
              <span className="h-px w-8 bg-cognac" />
            </span>
            <h1 className="mt-6 font-serif text-[48px] leading-[1.02] tracking-tight text-ink md:text-[72px] lg:text-[88px]">
              Treatment <em className="italic text-cognac">Collections</em>
            </h1>
            <p className="mx-auto mt-6 max-w-xl text-sm md:text-base lg:text-lg leading-relaxed text-ink/70">
              Five curated collections. Each designed with intention, backed by medicine, and delivered with care.
            </p>
          </div>
        </div>
      </section>

      {/* COLLECTIONS GRID */}
      <section className="bg-bone/40">
        <div className="mx-auto max-w-7xl px-6 py-14 lg:px-10 lg:py-20">
          {/* Featured Collection - Full Width */}
          {(() => {
            const featured = collections[0]
            const FeaturedIcon = featured.icon
            return (
              <Link
                href={featured.href}
                className="group relative mb-6 flex flex-col overflow-hidden rounded-2xl bg-background shadow-sm ring-1 ring-border/30 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_24px_48px_-16px_rgba(67,40,20,0.22)] hover:ring-cognac/40 lg:flex-row"
              >
                {/* Image */}
                <div className="relative aspect-[4/3] w-full overflow-hidden lg:aspect-auto lg:w-1/2">
                  <Image
                    src={featured.image}
                    alt={featured.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Collection number overlay */}
                  <div className="absolute left-5 top-5 flex h-12 w-12 items-center justify-center rounded-full bg-linen/95 font-serif text-lg text-cognac shadow-md">
                    {featured.number}
                  </div>
                </div>

                {/* Content */}
                <div className="flex flex-1 flex-col justify-center p-8 lg:p-12">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-cognac/10">
                      <FeaturedIcon className="h-5 w-5 text-cognac" strokeWidth={1.75} />
                    </div>
                    <span className="text-[11px] uppercase tracking-[0.22em] text-cognac">{featured.subtitle}</span>
                  </div>
                  <h2 className="mt-4 font-serif text-[36px] leading-[1.1] text-ink md:text-[44px]">{featured.title}</h2>
                  <p className="mt-4 max-w-md text-base leading-relaxed text-ink/65">{featured.description}</p>
                  
                  <div className="mt-6 flex flex-wrap items-center gap-6 border-t border-border/40 pt-6">
                    <div>
                      <p className="text-[10px] uppercase tracking-[0.2em] text-ink/50">Treatments</p>
                      <p className="mt-1 font-serif text-xl text-ink">{featured.treatmentCount}</p>
                    </div>
                    <div>
                      <p className="text-[10px] uppercase tracking-[0.2em] text-ink/50">Starting</p>
                      <p className="mt-1 font-serif text-xl text-cognac">{featured.priceRange}</p>
                    </div>
                  </div>

                  <div className="mt-6 inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.22em] text-cognac transition-colors group-hover:text-cognac-dark">
                    Explore Collection
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </div>
                </div>
              </Link>
            )
          })()}

          {/* Rest of Collections - 2x2 Grid */}
          <div className="grid gap-5 sm:grid-cols-2">
            {collections.slice(1).map((c) => {
              const IconComponent = c.icon
              return (
                <Link
                  key={c.id}
                  href={c.href}
                  className="group flex flex-col overflow-hidden rounded-2xl bg-background shadow-sm ring-1 ring-border/30 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_24px_48px_-16px_rgba(67,40,20,0.22)] hover:ring-cognac/40"
                >
                  {/* Image */}
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={c.image}
                      alt={c.title}
                      fill
                      sizes="(max-width: 640px) 100vw, 50vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    {/* Collection number */}
                    <div className="absolute left-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-linen/95 font-serif text-sm text-cognac shadow-md">
                      {c.number}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex flex-1 flex-col p-6">
                    <div className="flex items-center gap-3">
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-cognac/10 transition-colors duration-300 group-hover:bg-cognac/20">
                        <IconComponent className="h-4 w-4 text-cognac" strokeWidth={1.75} />
                      </div>
                      <span className="text-[10px] uppercase tracking-[0.22em] text-cognac">{c.subtitle}</span>
                    </div>
                    <h3 className="mt-3 font-serif text-[24px] leading-snug text-ink">{c.title}</h3>
                    <div className="my-4 h-px w-full bg-border/50 transition-colors duration-300 group-hover:bg-cognac/30" />
                    <p className="text-sm md:text-base leading-relaxed text-ink/65">{c.description}</p>
                    
                    <div className="mt-5 flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <span className="text-[10px] text-ink/50">{c.treatmentCount} treatments</span>
                        <span className="text-[10px] text-cognac">{c.priceRange}</span>
                      </div>
                      <div className="flex items-center gap-1 text-[11px] uppercase tracking-[0.22em] text-cognac">
                        View
                        <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                      </div>
                    </div>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section className="bg-linen">
        <div className="mx-auto max-w-4xl px-6 py-14 text-center lg:px-10 lg:py-20">
          <span className="text-[11px] uppercase tracking-[0.32em] text-cognac">Not Sure Where to Start?</span>
          <h2 className="mt-5 font-serif text-[36px] leading-[1.05] tracking-tight text-ink md:text-[48px]">
            Let&apos;s build your <em className="italic text-cognac">protocol.</em>
          </h2>
          <p className="mx-auto mt-5 max-w-lg text-base leading-relaxed text-ink/70">
            Every treatment starts with a conversation. Book a consultation and we&apos;ll design something just for you.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/booking"
              className="group inline-flex items-center gap-2 rounded-full bg-cognac px-7 py-4 text-xs uppercase tracking-[0.22em] text-primary-foreground transition-colors hover:bg-cognac-dark"
            >
              Book Consultation
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>
            <Link
              href="tel:4109484640"
              className="rounded-full border border-ink/20 px-7 py-4 text-xs uppercase tracking-[0.22em] text-ink transition-colors hover:border-cognac hover:text-cognac"
            >
              Call 410.948.4640
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
