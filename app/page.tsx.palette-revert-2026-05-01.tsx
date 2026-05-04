import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight, Droplets, Sparkles, Syringe, Leaf, MapPin, HeartPulse, Zap } from "lucide-react"
import { TreatmentsCarousel } from "@/components/treatments-carousel"

const serviceCards = [
  {
    icon: Droplets,
    title: "IV Nutrient Therapy",
    description: "Customized infusions designed to hydrate, replenish, and elevate your overall wellness.",
    href: "/treatments#iv-hydration",
    image: "/images/hero-main.png",
  },
  {
    icon: MapPin,
    title: "Concierge IV Hydration",
    description: "Personalized IV therapy delivered directly to your home, office, or preferred location.",
    href: "/treatments#concierge",
    featured: true,
    image: "/images/service-card-iv-diverse.png",
  },
  {
    icon: HeartPulse,
    title: "Ketamine IV Infusion Therapy",
    description: "A guided, medical approach supporting mental clarity and emotional balance.",
    href: "/treatments#ketamine",
    image: "/images/service-card-ketamine-diverse.png",
  },
  {
    icon: Sparkles,
    title: "Aesthetic Treatment",
    description: "A refined selection of aesthetic services designed to enhance your natural glow.",
    href: "/services",
    image: "/images/service-card-aesthetics-diverse.png",
  },
  {
    icon: Syringe,
    title: "Vitamin Boost Injections",
    description: "Quick, targeted boosts to support energy, immunity, and overall vitality.",
    href: "/treatments#vitamins",
    image: "/images/service-card-vitamins.png",
  },
  {
    icon: Leaf,
    title: "GloVive Body Balance",
    description: "Personalized solutions for sustainable weight loss and long-term wellness.",
    href: "/treatments#body-balance",
    image: "/images/service-card-balance.png",
  },
  {
    icon: Zap,
    title: "GloVive Vitality Therapy",
    description: "Restore your natural balance with medically guided hormone optimization. Personalized TRT and HRT programs designed to enhance vitality, focus, and overall well-being.",
    href: "/services",
    image: "/images/service-card-vitality-diverse.png",
  },
]


const pillars = [
  {
    number: "01",
    title: "Medically Guided",
    copy: "Every therapy is overseen by experienced licensed healthcare professionals with your safety at the center.",
  },
  {
    number: "02",
    title: "Personalized Care",
    copy: "No two clients are the same. Sessions are tailored to your goals, biochemistry, and lifestyle.",
  },
  {
    number: "03",
    title: "Elevated Experience",
    copy: "A calm, wellness spa — or concierge delivery — designed around your comfort and ease.",
  },
  {
    number: "04",
    title: "Results That Last",
    copy: "From first visit to maintenance, we design personalized protocols that support long-term vitality and glow.",
  },
]

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-linen">

        {/* Desktop */}
        <div className="hidden lg:flex lg:h-[78vh] lg:min-h-[560px] lg:items-stretch">

          {/* LEFT — copy */}
          <div className="flex w-[44%] shrink-0 flex-col justify-center px-14 pb-10 pt-24">
            <h1 className="font-serif text-[54px] leading-[1.05] tracking-tight text-ink xl:text-[68px]">
              Restore Your Balance.
              <br />
              <em className="italic text-cognac">Revive</em> Your Glow.
            </h1>
            <p className="mt-6 max-w-[420px] text-sm md:text-base leading-relaxed text-ink/70">
              True radiance begins with balance. At GloVive, we combine modern wellness therapies and aesthetic treatment to help restore vitality, enhance confidence, and support your overall well-being.
            </p>
            <div className="mt-8 flex items-center gap-5">
              <Link
                href="/booking"
                className="group inline-flex items-center gap-2 rounded-full bg-cognac px-7 py-3.5 text-[11px] uppercase tracking-[0.2em] text-primary-foreground transition-all hover:bg-cognac-dark"
              >
                Book Your Visit
                <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </Link>
              <Link
                href="/treatments"
                className="group inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.2em] text-ink/60 transition-colors hover:text-cognac"
              >
                Our Treatments
                <span className="h-px w-7 bg-ink/30 transition-all group-hover:w-10 group-hover:bg-cognac" />
              </Link>
            </div>
          </div>

          {/* RIGHT — three-panel mosaic */}
          <div className="flex flex-1 gap-2.5 p-3 pl-0">
            <div className="relative flex-1 overflow-hidden rounded-l-sm">
              <Image
                src="/images/hero-main.png"
                alt="IV Nutrient Hydration treatment featuring a serene Black woman in a luxury medspa"
                fill
                priority
                sizes="35vw"
                className="object-cover object-center"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/55 to-transparent p-6">
              </div>
            </div>
            <div className="flex w-[38%] flex-col gap-2.5">
              <div className="relative flex-1 overflow-hidden rounded-sm">
                <Image
                  src="/images/hero-secondary.png"
                  alt="Asian woman in a calm, immersive wellness therapy setting"
                  fill
                  sizes="18vw"
                  className="object-cover"
                />
              </div>
              <div className="relative flex-1 overflow-hidden rounded-sm">
                <Image
                  src="/images/hero-tertiary.png"
                  alt="White man receiving a health consultation and vitamin boost"
                  fill
                  sizes="18vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Mobile */}
        <div className="lg:hidden">

          {/* Full-bleed hero image with overlaid copy */}
          <div className="relative h-[85vw] min-h-[340px] max-h-[500px] w-full overflow-hidden">
            <Image
              src="/images/hero-main.png"
              alt="IV Nutrient Hydration treatment featuring a serene Black woman"
              fill
              priority
              sizes="100vw"
              className="object-cover object-center"
            />
            {/* Gradient overlay — dark at bottom, clear at top */}
            <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/30 to-transparent" />

            {/* Copy layered over image */}
            <div className="absolute inset-x-0 bottom-0 px-6 pb-8">
              <h1 className="font-serif text-[38px] leading-[1.05] tracking-tight text-linen sm:text-[44px]">
                Restore Your Balance.
                <br />
                <em className="italic text-cognac">Revive</em> Your Glow.
              </h1>
              <p className="mt-3 text-[15px] leading-relaxed text-bone/90">
                True radiance begins with balance. At GloVive, we combine modern wellness therapies and aesthetic treatment to help restore vitality, enhance confidence, and support your overall well-being.
              </p>
              <div className="mt-8 flex items-center gap-5">
                <Link
                  href="/booking"
                  className="inline-flex items-center gap-2 rounded-full bg-cognac px-6 py-3 text-[11px] uppercase tracking-[0.2em] text-primary-foreground hover:bg-cognac-dark"
                >
                  Book Your Visit
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </Link>
                <Link
                  href="/treatments"
                  className="inline-flex items-center rounded-full border border-bone/40 px-5 py-3 text-[11px] uppercase tracking-[0.2em] text-bone/90 backdrop-blur-sm hover:border-cognac hover:text-cognac"
                >
                  Treatments
                </Link>
              </div>
            </div>
          </div>

          {/* Two supporting treatment images */}
          <div className="grid grid-cols-2 gap-2 px-5 pt-2 pb-8">
            <div className="relative aspect-[4/3] overflow-hidden rounded-sm">
              <Image
                src="/images/hero-secondary.png"
                alt="Immersive wellness therapy session"
                fill
                sizes="50vw"
                className="object-cover"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/50 to-transparent px-4 py-3">
                <p className="text-[9px] uppercase tracking-[0.22em] text-bone/90">IV Nutrient Hydration</p>
              </div>
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-sm">
              <Image
                src="/images/hero-tertiary.png"
                alt="Vitamin boost preparation"
                fill
                sizes="50vw"
                className="object-cover"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/50 to-transparent px-4 py-3">
                <p className="text-[9px] uppercase tracking-[0.22em] text-bone/90">Vitamin Therapy</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INTRO / MARQUEE */}
      <section aria-label="Highlights" className="border-y border-border/50 bg-bone/60 overflow-hidden">
        <div className="flex w-max items-center animate-marquee-slow">
          <div className="flex items-center gap-12 px-12 py-6 text-[11px] uppercase tracking-[0.32em] text-ink/70">
            <span>IV Nutrient Hydration</span>
            <span className="h-1 w-1 rounded-full bg-cognac" />
            <span>Ketamine IV Infusion Therapy</span>
            <span className="h-1 w-1 rounded-full bg-cognac" />
            <span>Vitamin Boost Injections</span>
            <span className="h-1 w-1 rounded-full bg-cognac" />
            <span>GloVive Body Balance</span>
            <span className="h-1 w-1 rounded-full bg-cognac" />
            <span>Concierge IV Hydration</span>
          </div>
          {/* Duplicate set for seamless loop */}
          <div className="flex items-center gap-12 px-12 py-6 text-[11px] uppercase tracking-[0.32em] text-ink/70">
            <span>IV Nutrient Hydration</span>
            <span className="h-1 w-1 rounded-full bg-cognac" />
            <span>Ketamine IV Infusion Therapy</span>
            <span className="h-1 w-1 rounded-full bg-cognac" />
            <span>Vitamin Boost Injections</span>
            <span className="h-1 w-1 rounded-full bg-cognac" />
            <span>GloVive Body Balance</span>
            <span className="h-1 w-1 rounded-full bg-cognac" />
            <span>Concierge IV Hydration</span>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="bg-linen">
        <div className="mx-auto max-w-5xl px-6 py-14 text-center lg:px-10 lg:py-20">
          <span className="text-[11px] uppercase tracking-[0.32em] text-cognac">Welcome</span>
          <h2 className="mt-5 font-serif text-[44px] leading-[1.1] tracking-tight text-ink md:text-[56px] lg:text-[72px]">
            A quieter kind of wellness,
            <br />
            designed <em className="italic text-cognac">around you.</em>
          </h2>
          <p className="mx-auto mt-8 max-w-2xl text-sm md:text-base lg:text-lg leading-relaxed text-ink/75">
            GloVive was founded on a simple belief: that health, beauty, and confidence should feel seamless. Our
            medically guided treatments support your body from the inside out — blending clinical expertise with an
            experience that feels more spa than clinic.
          </p>
          <div className="mx-auto mt-10 h-px w-16 bg-cognac" />
        </div>
      </section>

      {/* SERVICES PREVIEW */}
      <section id="services" className="bg-bone/50">
        <div className="mx-auto max-w-7xl px-6 py-14 lg:px-10 lg:py-20">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div className="max-w-xl">
              <span className="text-[11px] uppercase tracking-[0.32em] text-cognac">Our Services</span>
              <h2 className="mt-4 font-serif text-[40px] leading-[1.1] tracking-tight text-ink md:text-[48px] lg:text-[56px]">
                Ways to feel like <em className="italic text-cognac">yourself</em> again.
              </h2>
            </div>
            <Link
              href="/services"
              className="group inline-flex items-center gap-2 self-start text-xs uppercase tracking-[0.22em] text-ink/80 transition-colors hover:text-cognac md:self-end"
            >
              View all services
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>
          </div>

          <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {serviceCards.map((s) => (
              <Link
                key={s.title}
                href={s.href}
                className="group flex flex-col overflow-hidden rounded-2xl bg-background shadow-sm ring-1 ring-border/30 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_24px_48px_-16px_rgba(67,40,20,0.22)] hover:ring-cognac/40"
              >
                {/* Image — fixed aspect ratio so all cards are identical height */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={s.image}
                    alt={s.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                </div>

                {/* Content */}
                <div className="flex flex-1 flex-col px-6 py-5">
                  <div className="flex items-start gap-3">
                    <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-cognac/10 transition-colors duration-300 group-hover:bg-cognac/20">
                      <s.icon className="h-4 w-4 text-cognac" strokeWidth={1.75} />
                    </div>
                    <h3 className="font-serif text-[22px] leading-snug text-ink">{s.title}</h3>
                  </div>
                  <div className="my-4 h-px w-full bg-border/50 transition-colors duration-300 group-hover:bg-cognac/30" />
                  <p className="text-sm md:text-base leading-relaxed text-ink/65">{s.description}</p>
                  <div className="mt-5 flex items-center gap-2 text-[11px] uppercase tracking-[0.22em] text-cognac">
                    Learn more
                    <span className="h-px w-5 bg-cognac transition-all duration-500 group-hover:w-9" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED TREATMENTS — carousel */}
      <section className="bg-linen overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 py-14 lg:px-10 lg:py-20">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <div className="max-w-xl">
              <span className="text-[11px] uppercase tracking-[0.32em] text-cognac">Our Treatments</span>
              <h2 className="mt-4 font-serif text-[40px] leading-[1.1] tracking-tight text-ink md:text-[48px] lg:text-[56px]">
                Every Treatment <em className="italic text-cognac">thoughtfully curated.</em>
              </h2>
            </div>
            <Link
              href="/treatments"
              className="group inline-flex shrink-0 items-center gap-2 self-start rounded-full border border-border/60 px-5 py-2.5 text-[11px] uppercase tracking-[0.2em] text-ink/70 transition-all hover:border-cognac hover:text-cognac sm:self-end"
            >
              View all treatments
              <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>
          </div>

          <div className="mt-12">
            <TreatmentsCarousel />
          </div>
        </div>
      </section>

      {/* WHY GLOVIVE */}
      <section className="bg-pine text-bone">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr]">
            <div>
              <span className="text-[11px] uppercase tracking-[0.32em] text-bone/60">Why GloVive</span>
              <h2 className="mt-4 font-serif text-[40px] leading-[1.1] tracking-tight text-linen md:text-[48px] lg:text-[56px]">
                The difference is in the <em className="italic">details.</em>
              </h2>
              <p className="mt-6 max-w-md text-sm md:text-base leading-relaxed text-bone/75">
                A refined wellness medspa where medical expertise, personalized therapy, and a calm
                environment come together in service of how you feel inside and out.
              </p>
            </div>

            <div className="grid gap-px bg-bone/15 sm:grid-cols-2">
              {pillars.map((p) => (
                <div key={p.number} className="bg-pine p-8">
                  <span className="font-serif text-sm text-bone/50">{p.number}</span>
                  <h3 className="mt-3 font-serif text-2xl text-linen">{p.title}</h3>
                  <p className="mt-3 text-sm md:text-base leading-relaxed text-bone/75">{p.copy}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="bg-linen">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-24 lg:grid-cols-[1fr_1.1fr] lg:gap-20 lg:px-10 lg:py-32">
          <div className="relative self-center">
            <div className="relative aspect-square md:aspect-[4/5] lg:aspect-square overflow-hidden rounded-[2rem] shadow-sm">
              <Image
                src="/images/about-studio.jpg"
                alt="The GloVive Wellness & MedSpa treatment medspa"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center"
              />
              {/* Subtle gold border accent */}
              <div className="absolute inset-0 rounded-[2rem] ring-1 ring-inset ring-cognac/20" />
            </div>
            {/* Floating stat badge */}
            <div className="absolute -bottom-6 -right-6 lg:-bottom-10 lg:-right-10 hidden flex-col items-center justify-center rounded-full bg-cognac shadow-xl md:flex w-32 h-32 lg:w-40 lg:h-40 z-10 border-[6px] border-linen">
              <span className="font-serif text-3xl lg:text-4xl leading-none text-linen">100%</span>
              <span className="mt-1 text-center text-[9px] lg:text-[10px] uppercase tracking-[0.2em] text-linen/90">Medically<br/>Guided</span>
            </div>
          </div>

          <div className="flex flex-col justify-center">
            <span className="text-[11px] uppercase tracking-[0.32em] text-cognac">About GloVive</span>
            <h2 className="mt-4 font-serif text-[40px] leading-[1.1] tracking-tight text-ink md:text-[48px] lg:text-[56px]">
              Rooted in healthcare. Built for <em className="italic text-cognac">how you feel.</em>
            </h2>
            <div className="mt-6 space-y-4 text-sm md:text-base leading-relaxed text-ink/75">
              <p>
                GloVive Wellness & MedSpa is a physician- and nurse-led practice where advanced medical expertise meets elevated, intentional self-care. We specialize in personalized wellness and aesthetic services designed to restore balance, enhance confidence, and optimize overall well-being.
              </p>
              <p>
                Our offerings include IV nutrient hydration therapy, body balance weight management, ketamine-assisted infusion therapy, hormone optimization, and aesthetic treatments—each thoughtfully curated and delivered with precision, discretion, and a commitment to exceptional results.
              </p>
              <p>
                At GloVive, care is not routine—it is refined, personalized, and designed to help you look, feel, and function at your highest level.
              </p>
            </div>

            <ul className="mt-8 space-y-4 text-sm md:text-base text-ink/80">
              {[
                "Wellness is the foundation of beauty",
                "Confidence starts from within",
                "Every client deserves personalized care",
              ].map((v) => (
                <li key={v} className="flex items-start gap-4 border-b border-border/40 pb-4">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-cognac" />
                  <span className="font-serif text-lg italic text-ink">{v}</span>
                </li>
              ))}
            </ul>

            <Link
              href="/about"
              className="mt-10 inline-flex w-fit items-center gap-2 rounded-full border border-ink/20 px-6 py-3 text-xs uppercase tracking-[0.22em] text-ink transition-colors hover:border-cognac hover:text-cognac"
            >
              Our full story
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-linen py-20 lg:py-28">
        <div className="mx-auto max-w-2xl px-6 text-center lg:px-10">
          <h2 className="font-serif text-[42px] leading-[1.05] tracking-tight text-ink md:text-[56px]">
            Not sure where to <em className="italic text-cognac">begin?</em>
          </h2>
          <p className="mt-5 text-sm md:text-base leading-relaxed text-ink/60">
            Book a consultation and we&apos;ll craft a personalized plan around your goals, lifestyle, and wellness vision.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/booking"
              className="group inline-flex items-center gap-2 rounded-full bg-cognac px-8 py-4 text-[11px] uppercase tracking-[0.22em] text-linen transition-all hover:bg-cognac-dark"
            >
              Book a Consultation
              <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>
            <Link
              href="/treatments"
              className="inline-flex items-center gap-2 rounded-full border border-border px-8 py-4 text-[11px] uppercase tracking-[0.22em] text-ink/70 transition-all hover:border-cognac hover:text-cognac"
            >
              See All Treatments
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
