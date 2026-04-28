"use client"

import Image from "next/image"
import Link from "next/link"
import {
  ArrowLeft,
  ArrowUpRight,
  Plus,
  ChevronRight,
  ChevronDown,
  CheckCircle2,
  XCircle,
  Info,
  RefreshCw,
  Clock,
  CalendarCheck,
} from "lucide-react"

/** Quick Facts for Hero Bar */
const quickFacts = [
  { icon: Info, label: "Consultation Required?", value: "No" },
  { icon: RefreshCw, label: "Sessions Needed", value: "As needed" },
  { icon: Clock, label: "Treatment Length", value: "30–60 min" },
  { icon: CalendarCheck, label: "Results Duration", value: "Immediate" },
]

/** Benefits */
const benefits = [
  {
    category: "Beauty",
    items: [
      "Enhanced skin radiance and luminous glow",
      "Support for collagen production and anti-aging",
      "Hydration for smoother, more supple skin",
    ],
  },
  {
    category: "Performance",
    items: [
      "Sustained energy and peak vitality",
      "Accelerated recovery and muscle support",
      "Enhanced focus, clarity, and cognitive performance",
    ],
  },
  {
    category: "Wellness",
    items: [
      "Immediate hydration and cellular replenishment",
      "Immune support and overall resilience",
      "Detoxification and internal balance",
      "Optimized nutrient absorption beyond oral supplements",
      "Reduced fatigue and improved day-to-day well-being",
    ],
  },
]

/** Pre/Post Care */
const preparingToDos = [
  "We invite you to arrive well-hydrated to ensure a seamless and comfortable infusion.",
  "A light, nourishing meal beforehand is recommended for optimal comfort.",
  "Please share any updates regarding your health, medications, or supplements with our team so we may tailor your experience with precision.",
  "We suggest wearing relaxed, elegant attire that allows easy access to your arms.",
]

const preparingToAvoid = [
  "Kindly limit alcohol and caffeine for 12–24 hours prior to your visit.",
]

const followingToDos = [
  "Continue hydrating to enhance absorption and extend the benefits of your treatment.",
  "Allow yourself a moment of rest as your body integrates the infusion.",
  "Resume your day at your own pace, guided by how you feel.",
  "You may notice slight sensitivity at the infusion site; this is temporary and typically resolves quickly.",
  "Should you have any questions or require additional support, our team remains at your service.",
]

const followingToAvoid = [
  "We recommend avoiding alcohol and limiting caffeine for the next 24 hours.",
]

/** FAQ */
const faqItems = [
  {
    q: "What is IV nutrient therapy?",
    a: "IV nutrient therapy is a sophisticated wellness treatment that delivers a curated blend of vitamins, minerals, and hydration directly into the bloodstream for optimal absorption and immediate support.",
  },
  {
    q: "How long does a session take?",
    a: "Most experiences are completed within 30 to 60 minutes, allowing you to relax and unwind while your body receives targeted nourishment.",
  },
  {
    q: "What does the treatment feel like?",
    a: "The experience is designed to be calm and comfortable. Many clients feel a sense of relaxation, clarity, and gentle revitalization during and after their session.",
  },
  {
    q: "How often should I receive IV therapy?",
    a: "Frequency is personalized based on your wellness goals. Some clients visit weekly for ongoing optimization, while others come as needed for recovery and support.",
  },
  {
    q: "Is IV therapy safe?",
    a: "When administered by trained professionals, IV therapy is a safe and effective way to support hydration, energy, and overall wellness. Each experience is tailored with your health and safety in mind.",
  },
]

/** Existing Treatments & Pricing Data */
const treatments = [
  {
    name: "The GloVive Elixir",
    slug: "glovive-elixir",
    tagline: "A signature radiance infusion designed to deeply hydrate and enhance your natural glow.",
    pricing: [
      { size: "500 mL", price: "$185" },
      { size: "1000 mL", price: "$220" },
    ],
  },
  {
    name: "Vive Vitality",
    tagline: "A revitalizing infusion crafted to restore energy and sharpen focus.",
    pricing: [
      { size: "500 mL", price: "$170" },
      { size: "1000 mL", price: "$200" },
    ],
  },
  {
    name: "Immune Reserve",
    tagline: "A protective infusion designed to strengthen your immune system.",
    pricing: [
      { size: "500 mL", price: "$175" },
      { size: "1000 mL", price: "$205" },
    ],
  },
  {
    name: "Tranquility Drip",
    tagline: "A calming infusion designed to ease tension and promote relaxation.",
    pricing: [
      { size: "500 mL", price: "$155" },
      { size: "1000 mL", price: "$190" },
    ],
  },
  {
    name: "NAD+ Longevity Infusion",
    tagline: "A premium treatment supporting cellular repair and long-term vitality.",
    pricing: [{ size: "Starting at", price: "$275+" }],
    premium: true,
  },
  {
    name: "Pure Hydration",
    tagline: "An essential infusion to restore hydration and rebalance the body.",
    pricing: [
      { size: "500 mL", price: "$150" },
      { size: "1000 mL", price: "$185" },
    ],
  },
  {
    name: "Detox Renewal",
    tagline: "A gentle infusion supporting detoxification and internal reset.",
    pricing: [
      { size: "500 mL", price: "$170" },
      { size: "1000 mL", price: "$200" },
    ],
  },
  {
    name: "Recovery Luxe",
    tagline: "A performance-focused infusion to restore strength and accelerate recovery.",
    pricing: [
      { size: "500 mL", price: "$180" },
      { size: "1000 mL", price: "$200" },
    ],
  },
]

const addOns = [
  { name: "Vitamin C", price: "$50" },
  { name: "Glutathione", price: "$45 – $55" },
  { name: "B12 Boost", price: "$40" },
  { name: "Zinc", price: "$45" },
]

export default function IVHydrationPage() {
  return (
    <div className="bg-linen min-h-screen">
      {/* 1. HERO SECTION (Full-width overlay like Grace Beauty) */}
      <section className="relative w-full h-[55vh] min-h-[500px] flex flex-col justify-center bg-ink">
        <Image
          src="/images/collection-iv.jpg"
          alt="IV Hydration Therapy"
          fill
          priority
          className="object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/20 to-transparent" />
        
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-10 pb-20 lg:pb-24 text-center md:text-left">
          <Link href="/treatments" className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.22em] text-bone/70 hover:text-bone mb-6 transition-colors">
            <ArrowLeft className="w-4 h-4" /> All Collections
          </Link>
          <span className="block text-[11px] uppercase tracking-[0.3em] text-cognac mb-4">Collection 01</span>
          <h1 className="font-serif text-[48px] md:text-[72px] lg:text-[84px] leading-[1] text-linen">
            GloVive <br className="hidden md:block" />
            <em className="italic font-light text-cognac">Signature Hydration</em>
          </h1>
        </div>

        {/* STATS BAR at bottom of hero */}
        <div className="absolute bottom-0 w-full border-t border-white/10 bg-ink/40 backdrop-blur-md">
          <div className="max-w-7xl mx-auto px-6 lg:px-10 py-6 md:py-8 grid grid-cols-2 md:grid-cols-4 gap-6">
            {quickFacts.map((fact) => (
              <div key={fact.label} className="flex flex-col gap-1.5">
                <div className="flex items-center gap-2 text-[10px] md:text-[11px] uppercase tracking-[0.15em] text-bone/60">
                  <fact.icon className="w-3.5 h-3.5" />
                  {fact.label}
                </div>
                <span className="font-serif text-lg md:text-xl text-linen">{fact.value}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 2. INTRO SECTION (Split layout) */}
      <section className="bg-linen py-20 lg:py-32 relative overflow-hidden">
        {/* Soft background glow */}
        <div className="absolute -left-32 top-10 w-96 h-96 rounded-full bg-cognac/[0.04] blur-3xl pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-6 lg:px-10 flex flex-col lg:flex-row gap-12 lg:gap-20 items-start relative z-10">
          <div className="lg:w-[45%]">
            <h2 className="font-serif text-[36px] md:text-[48px] leading-[1.1] text-ink tracking-tight">
              Curated Nutrient Therapy <br/>
              <span className="italic text-cognac">for peak performance</span>
            </h2>
          </div>
          <div className="lg:w-[55%] space-y-6 text-[15px] leading-[1.8] text-ink/80">
            <p>
              At Glovive, we understand that modern living can take a toll on your body. Between demanding schedules, family responsibilities, and an active social life, maintaining optimal nutrition isn&apos;t always realistic. Even with daily supplements, the body may not fully absorb the nutrients it needs—leaving you feeling depleted, fatigued, and not quite at your best.
            </p>
            <div className="p-6 bg-bone/40 border-l-2 border-cognac/50 rounded-r-lg">
              <p className="italic text-ink/90 font-medium">
                At Glovive, our IV nutrient therapy is a sophisticated, results-driven approach to wellness—delivering a curated blend of essential vitamins and nutrients directly into the bloodstream for enhanced absorption and immediate revitalization.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. BENEFITS (Image + Accordion) */}
      <section className="bg-bone/40 py-16 lg:py-24 border-y border-border/50">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-[5fr_7fr] gap-12 lg:gap-20 items-center">
          {/* Left: Distinctive Image Crop */}
          <div className="relative aspect-square md:aspect-[4/3] lg:aspect-square rounded-[2rem] rounded-tl-none overflow-hidden border-8 border-linen shadow-sm order-2 lg:order-1">
            <Image 
              src="/images/service-card-iv.png" 
              alt="Benefits of IV Therapy"
              fill
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="object-cover"
            />
          </div>

          {/* Right: Benefits Accordion */}
          <div className="order-1 lg:order-2">
            <span className="text-[11px] uppercase tracking-[0.2em] text-cognac">The Results</span>
            <h2 className="mt-3 mb-10 font-serif text-[32px] md:text-[42px] text-ink">Benefits</h2>
            
            <div className="space-y-4">
              {benefits.map((benefit, idx) => (
                <details key={benefit.category} className="group bg-linen border border-border/60 rounded-xl transition-shadow hover:shadow-sm" open={idx === 0}>
                  <summary className="flex items-center justify-between p-6 cursor-pointer list-none font-serif text-[22px] text-ink">
                    {benefit.category}
                    <ChevronDown className="w-5 h-5 text-cognac transition-transform duration-300 group-open:rotate-180" />
                  </summary>
                  <div className="px-6 pb-6 pt-1">
                    <ul className="space-y-3.5 border-t border-border/40 pt-4">
                      {benefit.items.map((item) => (
                        <li key={item} className="flex gap-3.5 text-[14px] leading-relaxed text-ink/75">
                          <CheckCircle2 className="w-4 h-4 text-cognac shrink-0 mt-0.5" strokeWidth={2} />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4. WHAT TO EXPECT (Pre/Post Care) */}
      <section className="bg-linen py-20 lg:py-32 relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="text-center mb-16 lg:mb-24">
            <span className="text-[11px] uppercase tracking-[0.2em] text-cognac">Your Journey</span>
            <h2 className="mt-3 font-serif text-[32px] md:text-[42px] text-ink">
              Experience, Elevated—<br className="hidden md:block" />
              <em className="italic text-cognac">Before and Beyond Your Visit</em>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12 lg:gap-24 relative">
            {/* Divider line for desktop */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-border/60 -translate-x-1/2" />
            
            {/* Preparing */}
            <div className="md:pr-8">
              <div className="mb-10 text-center md:text-left">
                <span className="text-[11px] uppercase tracking-[0.2em] text-ink/60">Pre-Care Instructions</span>
                <h3 className="mt-2 font-serif text-[32px] md:text-[40px] uppercase tracking-tight text-ink">How to Prepare</h3>
              </div>
              
              <div className="space-y-2">
                <details className="group border-b border-t border-border/60" open>
                  <summary className="flex cursor-pointer list-none items-center justify-between py-6 font-serif text-[20px] text-ink">
                    <div className="flex items-center gap-3">
                      <CheckCircle2 className="w-6 h-6 text-cognac" strokeWidth={1.5} />
                      What to Do
                    </div>
                    <Plus className="w-5 h-5 text-ink/40 transition-transform group-open:rotate-45" />
                  </summary>
                  <div className="pb-8">
                    <ul className="space-y-4 pl-[3.25rem]">
                      {preparingToDos.map((item) => (
                        <li key={item} className="relative text-[15px] leading-[1.7] text-ink/75 before:absolute before:-left-5 before:top-[0.6em] before:h-1.5 before:w-1.5 before:rounded-full before:bg-cognac/70">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </details>
                
                <details className="group border-b border-border/60">
                  <summary className="flex cursor-pointer list-none items-center justify-between py-6 font-serif text-[20px] text-ink">
                    <div className="flex items-center gap-3">
                      <XCircle className="w-6 h-6 text-cognac/70" strokeWidth={1.5} />
                      What to Avoid
                    </div>
                    <Plus className="w-5 h-5 text-ink/40 transition-transform group-open:rotate-45" />
                  </summary>
                  <div className="pb-8">
                    <ul className="space-y-4 pl-[3.25rem]">
                      {preparingToAvoid.map((item) => (
                        <li key={item} className="relative text-[15px] leading-[1.7] text-ink/75 before:absolute before:-left-5 before:top-[0.6em] before:h-1.5 before:w-1.5 before:rounded-full before:bg-cognac/70">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </details>
              </div>
            </div>

            {/* Following */}
            <div className="md:pl-8">
              <div className="mb-10 text-center md:text-left">
                <span className="text-[11px] uppercase tracking-[0.2em] text-ink/60">Post-Care Instructions</span>
                <h3 className="mt-2 font-serif text-[32px] md:text-[40px] uppercase tracking-tight text-ink">Aftercare</h3>
              </div>
              
              <div className="space-y-2">
                <details className="group border-b border-t border-border/60" open>
                  <summary className="flex cursor-pointer list-none items-center justify-between py-6 font-serif text-[20px] text-ink">
                    <div className="flex items-center gap-3">
                      <CheckCircle2 className="w-6 h-6 text-pine" strokeWidth={1.5} />
                      What to Do
                    </div>
                    <Plus className="w-5 h-5 text-ink/40 transition-transform group-open:rotate-45" />
                  </summary>
                  <div className="pb-8">
                    <ul className="space-y-4 pl-[3.25rem]">
                      {followingToDos.map((item) => (
                        <li key={item} className="relative text-[15px] leading-[1.7] text-ink/75 before:absolute before:-left-5 before:top-[0.6em] before:h-1.5 before:w-1.5 before:rounded-full before:bg-pine/70">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </details>
                
                <details className="group border-b border-border/60">
                  <summary className="flex cursor-pointer list-none items-center justify-between py-6 font-serif text-[20px] text-ink">
                    <div className="flex items-center gap-3">
                      <XCircle className="w-6 h-6 text-pine/70" strokeWidth={1.5} />
                      What to Avoid
                    </div>
                    <Plus className="w-5 h-5 text-ink/40 transition-transform group-open:rotate-45" />
                  </summary>
                  <div className="pb-8">
                    <ul className="space-y-4 pl-[3.25rem]">
                      {followingToAvoid.map((item) => (
                        <li key={item} className="relative text-[15px] leading-[1.7] text-ink/75 before:absolute before:-left-5 before:top-[0.6em] before:h-1.5 before:w-1.5 before:rounded-full before:bg-pine/70">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </details>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. TREATMENTS & PRICING */}
      <section className="bg-bone/50 py-20 lg:py-32 border-y border-border/50" id="iv-treatments-pricing">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="font-serif text-[32px] md:text-[42px] text-ink mb-4">Treatment & Pricing</h2>
            <p className="text-[15px] text-ink/70">Review our signature infusions. We offer transparent pricing by volume.</p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:gap-8">
            {treatments.map((t) => (
              <div key={t.name} className={`group flex flex-col bg-background rounded-2xl border ${t.premium ? 'border-cognac/40 bg-linen' : 'border-border/60'} p-8 transition-shadow hover:shadow-lg`}>
                <div className="flex justify-between items-start mb-4">
                  <h3 className="font-serif text-[24px] text-ink leading-tight pr-4">{t.name}</h3>
                  {t.premium && (
                    <span className="shrink-0 bg-cognac/10 px-3 py-1 text-[9px] uppercase tracking-[0.2em] text-cognac rounded-full">
                      Premium
                    </span>
                  )}
                </div>
                <p className="text-[14px] leading-relaxed text-ink/70 mb-8">{t.tagline}</p>
                
                <ul className="mt-auto divide-y divide-border/40 border-t border-border/40">
                  {t.pricing.map((p) => (
                    <li key={p.size} className="flex items-center justify-between py-4">
                      <span className="text-[14px] text-ink/60 font-medium">{p.size}</span>
                      <span className="font-serif text-[20px] text-ink">{p.price}</span>
                    </li>
                  ))}
                </ul>
                {t.slug && (
                  <div className="mt-4 pt-4 border-t border-border/40 flex justify-end">
                    <Link href={`/treatments/${t.slug}`} className="inline-flex items-center gap-1 text-[11px] uppercase tracking-[0.2em] text-cognac hover:text-cognac-dark transition-colors">
                      View Details <ChevronRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. ADD-ONS */}
      <section className="bg-linen py-16 lg:py-24 border-b border-border/50">
        <div className="max-w-5xl mx-auto px-6 lg:px-10">
          <div className="flex flex-col md:flex-row gap-8 items-center justify-between p-8 md:p-12 bg-background border border-border/60 rounded-3xl relative overflow-hidden">
            <div className="absolute right-0 top-0 w-64 h-64 bg-cognac/[0.03] rounded-full blur-3xl" />
            <div className="relative z-10 md:w-1/3">
              <span className="text-[11px] uppercase tracking-[0.2em] text-cognac">Add-ons</span>
              <h3 className="font-serif text-[28px] text-ink mt-2 mb-3">Enhance your IV</h3>
              <p className="text-[14px] text-ink/70 leading-relaxed">Customize any infusion with a targeted booster for immunity, energy, or radiance.</p>
            </div>
            
            <div className="relative z-10 w-full md:w-2/3 grid sm:grid-cols-2 gap-4">
              {addOns.map((a) => (
                <div key={a.name} className="flex justify-between items-center bg-bone/30 border border-border/50 p-4 rounded-xl">
                  <span className="font-serif text-lg text-ink">{a.name}</span>
                  <span className="text-[14px] font-medium text-cognac">{a.price}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 7. FAQ */}
      <section className="bg-bone/40 py-20 lg:py-32">
        <div className="max-w-3xl mx-auto px-6 lg:px-10">
          <h2 className="text-center font-serif text-[32px] md:text-[42px] text-ink mb-12">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqItems.map((item) => (
              <details key={item.q} className="group bg-background border border-border/60 rounded-xl transition-all hover:border-cognac/30">
                <summary className="flex cursor-pointer list-none items-center justify-between p-6 font-serif text-[18px] md:text-[20px] text-ink">
                  {item.q}
                  <div className="flex items-center justify-center w-8 h-8 rounded-full bg-bone/50 shrink-0 ml-4 group-open:bg-cognac/10 transition-colors">
                    <Plus className="w-4 h-4 text-cognac transition-transform duration-300 group-open:rotate-45" />
                  </div>
                </summary>
                <div className="px-6 pb-6 pt-2 border-t border-border/40 mx-6">
                  <p className="mt-4 text-[15px] leading-[1.8] text-ink/75">{item.a}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* 8. CTA */}
      <section className="bg-pine py-20 lg:py-32 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-bone/5 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-4xl mx-auto px-6 lg:px-10 text-center relative z-10">
          <h2 className="font-serif text-[36px] md:text-[48px] leading-[1.1] text-linen mb-6">
            Ready to <em className="italic text-cognac">restore & replenish?</em>
          </h2>
          <p className="text-[16px] leading-[1.8] text-bone/80 max-w-2xl mx-auto mb-10">
            We welcome the opportunity to answer any additional questions and thoughtfully design a treatment plan aligned with your goals.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/booking"
              className="inline-flex items-center gap-2 rounded-full bg-cognac px-8 py-4 text-[11px] uppercase tracking-[0.2em] text-primary-foreground transition-colors hover:bg-cognac-dark"
            >
              Book Your Visit <ArrowUpRight className="w-4 h-4" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full border border-bone/30 px-8 py-4 text-[11px] uppercase tracking-[0.2em] text-bone transition-colors hover:border-cognac hover:text-cognac"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
