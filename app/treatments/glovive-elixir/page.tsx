import Image from "next/image"
import Link from "next/link"
import { Info, RefreshCw, Clock, CalendarCheck, Droplets, Sparkles, Sun, ChevronRight } from "lucide-react"

export const metadata = {
  title: "The GloVive Elixir | IV Hydration Treatment | GloVive Wellness & MedSpa",
  description:
    "A signature radiance infusion designed to deeply hydrate and enhance your natural glow. Experience skin radiance, anti-aging benefits, and deep hydration at GloVive.",
}

const quickFacts = [
  { icon: Info, label: "Consultation Required?", value: "No" },
  { icon: RefreshCw, label: "Sessions Recommended", value: "1-4" },
  { icon: Clock, label: "Treatment Length", value: "45-60 min" },
  { icon: CalendarCheck, label: "Results Duration", value: "1-2 weeks" },
]

const treatedConcerns = [
  "Dehydration",
  "Dull skin",
  "Fine lines",
  "Fatigue",
  "Skin texture",
  "Lack of radiance",
]

const benefits = [
  {
    title: "Deep Hydration",
    description:
      "Delivers essential fluids directly into your bloodstream for immediate, deep cellular hydration that drinking water alone cannot achieve.",
  },
  {
    title: "Radiant Glow",
    description:
      "A carefully crafted blend of vitamins and antioxidants works synergistically to brighten your complexion and restore your natural luminosity.",
  },
  {
    title: "Anti-Aging Support",
    description:
      "Powerful antioxidants help neutralize free radicals and support collagen production, reducing the appearance of fine lines over time.",
  },
]

const steps = [
  {
    step: "01",
    title: "Arrival & Comfort",
    description:
      "Settle into our luxurious treatment lounge. We will review your health history, discuss your goals, and ensure you are completely comfortable before beginning.",
  },
  {
    step: "02",
    title: "Infusion",
    description:
      "Your customized GloVive Elixir infusion is administered by our experienced medical team. Relax, read, or simply rest as the treatment works its magic over 45-60 minutes.",
  },
  {
    step: "03",
    title: "Glow & Go",
    description:
      "Once complete, you are free to continue your day immediately. Most clients notice improved energy and skin radiance within hours of treatment.",
  },
]

const preCare = {
  do: [
    "Drink plenty of water 24 hours before your appointment.",
    "Eat a light meal 1-2 hours before treatment.",
    "Wear comfortable clothing with easy arm access.",
  ],
  avoid: [
    "Avoid alcohol 24 hours before your appointment.",
    "Do not arrive on an empty stomach.",
    "Avoid excessive caffeine the day of treatment.",
  ],
}

const postCare = {
  do: [
    "Continue hydrating with water throughout the day.",
    "Enjoy your enhanced energy and radiant glow.",
    "Schedule your next session to maintain results.",
  ],
  avoid: [
    "Avoid strenuous exercise for 2-4 hours post-treatment.",
    "Do not consume alcohol immediately after your infusion.",
    "Avoid excessive sun exposure for 24 hours.",
  ],
}

const relatedTreatments = [
  { name: "Vive Vitality", href: "/treatments#iv-hydration" },
  { name: "GloVive Glow Shot", href: "/treatments#vitamins" },
  { name: "NAD+ Longevity Infusion", href: "/treatments#iv-hydration" },
]

export default function GloViveElixirPage() {
  return (
    <>
      {/* HERO HEADER - matching Grace Beauty structure */}
      <section className="bg-linen">
        <div className="mx-auto max-w-7xl px-6 pb-0 pt-16 lg:px-10 lg:pt-20">
          <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
            <div>
              <p className="text-[11px] uppercase tracking-[0.3em] text-ink/60">
                IV Nutrient Therapy
              </p>
              <h1 className="mt-4 font-serif text-[42px] leading-[1.02] tracking-tight text-ink md:text-[64px] lg:text-[80px]">
                The GloVive Elixir
              </h1>
            </div>
            <Link
              href="/booking"
              className="mt-2 inline-flex shrink-0 items-center justify-center self-start rounded-full border-2 border-ink px-6 py-3 text-[11px] uppercase tracking-[0.2em] text-ink transition-colors hover:bg-ink hover:text-linen md:mt-4"
            >
              Book Now
            </Link>
          </div>
        </div>
      </section>

      {/* HERO IMAGE with stat bar overlay */}
      <section className="relative">
        <div className="relative aspect-[16/9] w-full md:aspect-[21/9]">
          <Image
            src="/images/treatment-elixir-hero.jpg"
            alt="GloVive Elixir IV hydration treatment"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          {/* Dark gradient overlay at bottom */}
          <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-ink/80 to-transparent" />
        </div>

        {/* Quick facts bar */}
        <div className="absolute inset-x-0 bottom-0">
          <div className="mx-auto max-w-7xl px-6 pb-8 lg:px-10 lg:pb-12">
            <ul className="flex flex-wrap items-start gap-y-6 divide-x divide-bone/30">
              {quickFacts.map((fact, idx) => (
                <li
                  key={fact.label}
                  className={`flex items-start gap-3 px-6 first:pl-0 last:pr-0 ${idx === 0 ? "pl-0" : ""}`}
                >
                  <fact.icon className="mt-0.5 h-5 w-5 shrink-0 text-bone/70" strokeWidth={1.5} />
                  <div>
                    <p className="text-[11px] uppercase tracking-[0.2em] text-bone/70">
                      {fact.label}
                    </p>
                    <p className="mt-1 font-serif text-xl text-linen md:text-2xl">{fact.value}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* INTRO + PRICING */}
      <section className="bg-linen">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
          <div className="grid gap-16 lg:grid-cols-[1.4fr_1fr] lg:gap-24">
            <div>

              <h2 className="mt-6 font-serif text-[32px] leading-[1.1] tracking-tight text-ink md:text-[44px]">
                Elevate Your Natural Radiance
              </h2>
              <p className="mt-6 text-sm md:text-base lg:text-lg leading-relaxed text-ink/75">
                The GloVive Elixir is our signature radiance infusion — a carefully formulated blend designed to deeply hydrate, replenish essential nutrients, and enhance your natural glow from the inside out.
              </p>
              <p className="mt-6 text-sm md:text-base leading-relaxed text-ink/75">
                This treatment delivers a potent combination of hydration, vitamins, and antioxidants directly into your bloodstream, bypassing the digestive system for maximum absorption and immediate results. Whether you are preparing for a special event, recovering from travel, or simply seeking that luminous, well-rested look — The GloVive Elixir is your go-to glow treatment.
              </p>

              {/* Treated concerns */}
              <div className="mt-10">
                <h3 className="text-[11px] uppercase tracking-[0.25em] text-cognac">
                  Treated Concerns
                </h3>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {treatedConcerns.map((concern) => (
                    <li
                      key={concern}
                      className="rounded-full border border-border/60 bg-bone/50 px-4 py-2 text-sm text-ink/80"
                    >
                      {concern}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Pricing card */}
            <div className="flex flex-col gap-6">
              <div className="rounded-xl border border-cognac/30 bg-cognac/5 p-8 md:p-10">
                <Droplets className="h-8 w-8 text-cognac" strokeWidth={1.2} />
                <h3 className="mt-4 font-serif text-2xl text-ink">Treatment Pricing</h3>
                <ul className="mt-6 divide-y divide-border/50">
                  <li className="flex items-center justify-between py-4">
                    <span className="text-ink/75">500 mL</span>
                    <span className="font-serif text-2xl text-ink">$165</span>
                  </li>
                  <li className="flex items-center justify-between py-4">
                    <span className="flex items-center gap-2 text-ink/75">
                      1000 mL
                      <span className="rounded-full bg-pine/15 px-2 py-0.5 text-[9px] uppercase tracking-[0.18em] text-pine">
                        Most Popular
                      </span>
                    </span>
                    <span className="font-serif text-2xl text-ink">$195</span>
                  </li>
                </ul>
                <Link
                  href="/booking"
                  className="mt-8 flex w-full items-center justify-center rounded-full bg-cognac py-3.5 text-[11px] uppercase tracking-[0.2em] text-primary-foreground transition-colors hover:bg-cognac-dark"
                >
                  Book Your Elixir
                </Link>
              </div>

              {/* Add-on suggestion */}
              <div className="rounded-xl border border-border/60 bg-bone/40 p-6">
                <Sparkles className="h-5 w-5 text-cognac" strokeWidth={1.5} />
                <p className="mt-3 text-sm md:text-base leading-relaxed text-ink/70">
                  <strong className="text-ink">Enhance your glow</strong> — Add Glutathione ($30-$40) for extra skin brightening and detox support.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="bg-bone/50">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-[11px] uppercase tracking-[0.3em] text-cognac">Benefits</span>
            <h2 className="mt-5 font-serif text-[32px] leading-[1.08] tracking-tight text-ink md:text-[44px]">
              Why Choose The GloVive Elixir
            </h2>
          </div>

          <ul className="mt-14 grid gap-8 md:grid-cols-3">
            {benefits.map((benefit) => (
              <li
                key={benefit.title}
                className="rounded-xl border border-border/60 bg-linen p-8 transition-shadow hover:shadow-lg"
              >
                <h3 className="font-serif text-2xl text-ink">{benefit.title}</h3>
                <p className="mt-4 text-sm md:text-base leading-relaxed text-ink/70">{benefit.description}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* HOW IT WORKS / WHAT TO EXPECT */}
      <section className="bg-linen">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-[11px] uppercase tracking-[0.3em] text-cognac">
              What to Expect
            </span>
            <h2 className="mt-5 font-serif text-[32px] leading-[1.08] tracking-tight text-ink md:text-[44px]">
              Your Treatment Experience
            </h2>
          </div>

          <ol className="mx-auto mt-14 max-w-4xl">
            {steps.map((step, idx) => (
              <li
                key={step.step}
                className={`relative flex gap-8 pb-12 ${idx !== steps.length - 1 ? "border-l-2 border-cognac/20 pl-8" : "pl-8"}`}
              >
                {/* Step number circle */}
                <span className="absolute -left-5 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-cognac font-serif text-lg text-primary-foreground">
                  {step.step}
                </span>
                <div>
                  <h3 className="font-serif text-2xl text-ink">{step.title}</h3>
                  <p className="mt-3 text-sm md:text-base leading-relaxed text-ink/70">{step.description}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* PRE & POST CARE */}
      <section className="bg-bone/50">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            {/* Pre-care */}
            <div className="rounded-xl border border-border/60 bg-linen p-8 md:p-10">
              <span className="text-[11px] uppercase tracking-[0.3em] text-cognac">
                Pre-Care Instructions
              </span>
              <h3 className="mt-4 font-serif text-[28px] text-ink">How to Prepare</h3>

              <div className="mt-8 grid gap-8 sm:grid-cols-2">
                <div>
                  <p className="text-[10px] uppercase tracking-[0.25em] text-pine">What to Do</p>
                  <ul className="mt-4 space-y-3">
                    {preCare.do.map((item) => (
                      <li key={item} className="flex items-start gap-3 text-sm text-ink/75">
                        <span className="mt-1.5 h-1 w-4 shrink-0 bg-pine" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-[0.25em] text-cognac">What to Avoid</p>
                  <ul className="mt-4 space-y-3">
                    {preCare.avoid.map((item) => (
                      <li key={item} className="flex items-start gap-3 text-sm text-ink/75">
                        <span className="mt-1.5 h-1 w-4 shrink-0 bg-cognac" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Post-care */}
            <div className="rounded-xl border border-border/60 bg-linen p-8 md:p-10">
              <span className="text-[11px] uppercase tracking-[0.3em] text-cognac">
                Post-Care Instructions
              </span>
              <h3 className="mt-4 font-serif text-[28px] text-ink">Aftercare</h3>

              <div className="mt-8 grid gap-8 sm:grid-cols-2">
                <div>
                  <p className="text-[10px] uppercase tracking-[0.25em] text-pine">What to Do</p>
                  <ul className="mt-4 space-y-3">
                    {postCare.do.map((item) => (
                      <li key={item} className="flex items-start gap-3 text-sm text-ink/75">
                        <span className="mt-1.5 h-1 w-4 shrink-0 bg-pine" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-[0.25em] text-cognac">What to Avoid</p>
                  <ul className="mt-4 space-y-3">
                    {postCare.avoid.map((item) => (
                      <li key={item} className="flex items-start gap-3 text-sm text-ink/75">
                        <span className="mt-1.5 h-1 w-4 shrink-0 bg-cognac" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* RELATED TREATMENTS */}
      <section className="bg-linen">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <div>
              <span className="text-[11px] uppercase tracking-[0.3em] text-cognac">
                Related Treatments
              </span>
              <h2 className="mt-4 font-serif text-[32px] leading-[1.08] tracking-tight text-ink">
                Continue Your Glow Journey
              </h2>
            </div>
            <Link
              href="/treatments"
              className="group flex items-center gap-2 text-sm text-cognac transition-colors hover:text-cognac-dark"
            >
              View All Treatments
              <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>

          <ul className="mt-10 grid gap-4 sm:grid-cols-3">
            {relatedTreatments.map((treatment) => (
              <li key={treatment.name}>
                <Link
                  href={treatment.href}
                  className="group flex items-center justify-between rounded-xl border border-border/60 bg-bone/40 p-6 transition-all hover:border-cognac/40 hover:bg-cognac/5"
                >
                  <span className="font-serif text-xl text-ink">{treatment.name}</span>
                  <ChevronRight className="h-5 w-5 text-ink/40 transition-all group-hover:translate-x-1 group-hover:text-cognac" />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-pine text-bone">
        <div className="mx-auto max-w-4xl px-6 py-20 text-center lg:py-28">
          <Sun className="mx-auto h-10 w-10 text-bone/60" strokeWidth={1.2} />
          <h2 className="mt-6 font-serif text-[36px] leading-[1.08] tracking-tight text-linen md:text-[48px]">
            Ready to Experience <em className="italic">The Glow</em>?
          </h2>
          <p className="mx-auto mt-6 max-w-lg text-sm md:text-base leading-relaxed text-bone/75">
            Book your GloVive Elixir session today and discover the radiance that comes from true hydration and elevated wellness.
          </p>
          <Link
            href="/booking"
            className="mt-10 inline-flex rounded-full bg-cognac px-8 py-4 text-[12px] uppercase tracking-[0.22em] text-primary-foreground transition-colors hover:bg-cognac-dark"
          >
            Book Your Appointment
          </Link>
        </div>
      </section>
    </>
  )
}
