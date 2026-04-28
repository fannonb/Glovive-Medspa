import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight, Droplets, Sparkles, HeartPulse, Syringe, MapPin, Leaf, Zap } from "lucide-react"

export const metadata = {
  title: "Services | GloVive Wellness & MedSpa",
  description:
    "Explore GloVive's full menu of services — IV Nutrient Hydration, Ketamine IV Infusion Therapy, Vitamin Injections, GloVive Body Balance, and Concierge IV Hydration.",
}

const services = [
  {
    icon: Droplets,
    title: "IV Nutrient Therapy",
    description: "Restore balance from within with customized infusions designed to hydrate, replenish, and elevate your overall wellness.",
    href: "/treatments#iv-hydration",
    image: "/images/service-card-iv.png",
    cta: "View Treatments",
  },
  {
    icon: MapPin,
    title: "GloVive Concierge Hydration",
    description: "Personalized IV therapy delivered directly to your home, office, or preferred location for a seamless, elevated wellness experience.",
    href: "/treatments#concierge",
    image: "/images/service-card-concierge.png",
    cta: "Learn More",
  },
  {
    icon: HeartPulse,
    title: "Ketamine Wellness Therapy",
    description: "A guided, medical approach to support mental clarity, emotional balance, and deeper healing in a safe, supportive environment.",
    href: "/treatments#ketamine",
    image: "/images/service-card-ketamine.png",
    cta: "Learn More",
  },
  {
    icon: Sparkles,
    title: "Aesthetic Treatments",
    description: "A refined selection of aesthetic services is currently in development. We look forward to introducing treatments designed to elevate and enhance your natural glow.",
    href: "/contact",
    image: "/images/service_card_botox_aesthetics.png",
    cta: "Join the Waitlist",
    comingSoon: true,
  },
  {
    icon: Syringe,
    title: "Vitamin Injections",
    description: "Quick, targeted boosts to support energy, immunity, and overall vitality — delivered efficiently and effectively.",
    href: "/treatments#vitamins",
    image: "/images/service-card-vitamins.png",
    cta: "View Shots",
  },
  {
    icon: Leaf,
    title: "GloVive Body Balance",
    description: "Personalized solutions designed to support sustainable weight loss, improved metabolism, and long-term wellness.",
    href: "/treatments#body-balance",
    image: "/images/service-card-balance.png",
    cta: "Learn More",
  },
  {
    icon: Zap,
    title: "GloVive Vitality Therapy",
    description: "Restore your natural balance with medically guided hormone optimization. Personalized TRT and HRT programs designed to enhance vitality, focus, and overall well-being.",
    href: "/contact",
    image: "/images/service-vitality-therapy.png",
    cta: "Learn More",
    comingSoon: false,
  },
]

export default function ServicesPage() {
  return (
    <>
      {/* HEADER */}
      <section className="bg-linen">
        <div className="mx-auto max-w-5xl px-6 pt-16 pb-12 text-center lg:px-10 lg:pt-24 lg:pb-16">
          <span className="text-[11px] uppercase tracking-[0.32em] text-cognac">What We Offer</span>
          <h1 className="mt-5 font-serif text-[44px] leading-[1.02] tracking-tight text-ink md:text-[72px] lg:text-[88px]">
            Our <em className="italic text-cognac">Services</em>
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-sm md:text-base leading-relaxed text-ink/70">
            A curated menu of medically guided treatments to help you feel, look, and live better.
          </p>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section className="bg-bone/40">
        <div className="mx-auto max-w-7xl px-6 py-14 lg:px-10 lg:py-20">
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <Link
                key={s.title}
                href={s.href}
                className="group flex flex-col overflow-hidden rounded-2xl bg-background shadow-sm ring-1 ring-border/30 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_24px_48px_-16px_rgba(67,40,20,0.22)] hover:ring-cognac/40"
              >
                {/* Image */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={s.image}
                    alt={s.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  {s.comingSoon && (
                    <div className="absolute inset-0 flex items-center justify-center bg-ink/40">
                      <span className="rounded-full bg-linen/95 px-4 py-2 text-[10px] uppercase tracking-[0.22em] text-ink">
                        Coming Soon
                      </span>
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="flex flex-1 flex-col px-6 py-5">
                  <div className="flex items-start gap-3">
                    <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-cognac/10 transition-colors duration-300 group-hover:bg-cognac/20">
                      <s.icon className="h-4 w-4 text-cognac" strokeWidth={1.75} />
                    </div>
                    <h2 className="font-serif text-[22px] leading-snug text-ink">{s.title}</h2>
                  </div>
                  <div className="my-4 h-px w-full bg-border/50 transition-colors duration-300 group-hover:bg-cognac/30" />
                  <p className="text-sm md:text-base leading-relaxed text-ink/65">{s.description}</p>
                  <div className="mt-5 flex items-center gap-2 text-[11px] uppercase tracking-[0.22em] text-cognac">
                    {s.cta}
                    <span className="h-px w-5 bg-cognac transition-all duration-500 group-hover:w-9" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* WHY GLOVIVE */}
      <section className="bg-linen">
        <div className="mx-auto max-w-7xl px-6 py-14 lg:px-10 lg:py-20">
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-[11px] uppercase tracking-[0.32em] text-cognac">Why GloVive</span>
            <h2 className="mt-4 font-serif text-[36px] leading-[1.1] tracking-tight text-ink md:text-[48px]">
              The difference is in the <em className="italic text-cognac">details.</em>
            </h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            <div className="rounded-xl border border-border/40 bg-background p-8 text-center">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-cognac/10">
                <span className="font-serif text-2xl text-cognac">01</span>
              </div>
              <h3 className="mt-5 font-serif text-xl text-ink">Medically Guided</h3>
              <p className="mt-3 text-sm md:text-base leading-relaxed text-ink/65">
                Every therapy is overseen by experienced licensed healthcare professionals with your safety at the center.
              </p>
            </div>
            <div className="rounded-xl border border-border/40 bg-background p-8 text-center">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-cognac/10">
                <span className="font-serif text-2xl text-cognac">02</span>
              </div>
              <h3 className="mt-5 font-serif text-xl text-ink">Personalized Care</h3>
              <p className="mt-3 text-sm md:text-base leading-relaxed text-ink/65">
                We tailor every visit to your unique goals, health history, and wellness aspirations.
              </p>
            </div>
            <div className="rounded-xl border border-border/40 bg-background p-8 text-center">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-cognac/10">
                <span className="font-serif text-2xl text-cognac">03</span>
              </div>
              <h3 className="mt-5 font-serif text-xl text-ink">Elevated Experience</h3>
              <p className="mt-3 text-sm md:text-base leading-relaxed text-ink/65">
                From arrival to aftercare, every detail is designed to feel more spa than clinic.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-bone/40">
        <div className="mx-auto max-w-4xl px-6 py-16 text-center lg:px-10 lg:py-24">
          <h2 className="font-serif text-[32px] leading-[1.05] tracking-tight text-ink md:text-[48px]">
            Not sure where to <em className="italic text-cognac">begin?</em>
          </h2>
          <p className="mx-auto mt-5 max-w-lg text-base leading-relaxed text-ink/70">
            Book a consultation and we&apos;ll craft a personalized plan around your goals, lifestyle, and wellness vision.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/booking"
              className="group inline-flex items-center gap-2 rounded-full bg-cognac px-7 py-4 text-xs uppercase tracking-[0.22em] text-primary-foreground transition-colors hover:bg-cognac-dark"
            >
              Book a Consultation
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>
            <Link
              href="/treatments"
              className="rounded-full border border-ink/20 px-7 py-4 text-xs uppercase tracking-[0.22em] text-ink transition-colors hover:border-cognac hover:text-cognac"
            >
              See All Treatments
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
