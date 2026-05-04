"use client"

import Image from "next/image"
import Link from "next/link"
import {
  ArrowLeft,
  ArrowUpRight,
  Plus,
  ShieldCheck,
  Stethoscope,
  Clock,
  RefreshCw,
  Check
} from "lucide-react"

const quickFacts = [
  { icon: Clock, label: "Treatment Time", value: "5–15 min" },
  { icon: ShieldCheck, label: "Consultation", value: "Brief Review" },
  { icon: RefreshCw, label: "Frequency", value: "Weekly to Monthly" },
  { icon: Stethoscope, label: "Administered by", value: "Licensed Providers" },
]

const vitaminShots = [
  {
    name: "B12 Energy Boost",
    description: "Supports energy, metabolism, and mental clarity",
    price: "$45",
  },
  {
    name: "MIC + B12 Metabolic Boost",
    description: "Supports fat metabolism and weight management",
    price: "$55",
  },
  {
    name: "Vitamin D Restore",
    description: "Supports immunity, mood, and overall wellness",
    price: "$45",
  },
  {
    name: "Biotin Beauty Boost",
    description: "Supports healthy hair, skin, and nails",
    price: "$40",
  },
  {
    name: "Immunity Boost",
    description: "Supports immune defense and overall resilience",
    price: "$40",
  },
  {
    name: "GloVive Glow Shot",
    description: "Supports detoxification, skin radiance, and overall rejuvenation",
    price: "$45",
    featured: true,
  },
]

const benefits = [
  "Increased energy and reduced fatigue",
  "Metabolism and weight support",
  "Immune system strengthening",
  "Enhanced mood and mental clarity",
  "Support for hair, skin, and nail health",
  "Improved overall wellness and vitality"
]

const faqItems = [
  {
    q: "Do vitamin injections hurt?",
    a: "Most clients feel only a quick pinch, and the process is over within minutes."
  },
  {
    q: "How quickly will I feel results?",
    a: "Many clients notice increased energy and clarity within a short time, though results can vary."
  },
  {
    q: "How often should I get injections?",
    a: "This depends on your goals—your provider will recommend a personalized schedule."
  },
  {
    q: "Do I need a consultation?",
    a: "Yes, a brief medical review ensures your treatment is safe and effective."
  },
  {
    q: "Are vitamin injections safe?",
    a: "Yes, when administered by licensed professionals and tailored to your health history."
  }
]

export default function VitaminsPage() {
  return (
    <div className="bg-linen min-h-screen">
      {/* 1. HERO SECTION */}
      <section className="relative w-full h-[60vh] min-h-[500px] flex flex-col justify-center bg-ink">
        <Image
          src="/images/collection-vitamins.jpg"
          alt="Vitamin Boost Injections"
          fill
          priority
          className="object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/60 to-transparent" aria-hidden />
        <div className="absolute inset-0 bg-ink/30" aria-hidden /> {/* Extra overall dimming */}
        
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-10 pb-20 lg:pb-24 text-center md:text-left">
          <Link href="/treatments" className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.22em] text-linen hover:text-white mb-6 transition-colors drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] font-semibold">
            <ArrowLeft className="w-4 h-4" /> All Treatments
          </Link>
          <h1 className="font-serif text-[48px] md:text-[72px] lg:text-[84px] leading-[1] text-linen drop-shadow-[0_4px_24px_rgba(0,0,0,0.6)]">
            Vitamin Boost Injections <br className="hidden md:block" />
          </h1>
        </div>

        {/* STATS BAR */}
        <div className="absolute bottom-0 w-full border-t border-white/10 bg-pine backdrop-blur-md">
          <div className="max-w-7xl mx-auto px-6 lg:px-10 py-6 md:py-8 grid grid-cols-2 md:grid-cols-4 gap-6">
            {quickFacts.map((fact) => (
              <div key={fact.label} className="flex flex-col gap-1.5">
                <div className="flex items-center gap-2 text-[11px] md:text-xs uppercase tracking-[0.15em] text-linen/90 font-medium leading-normal pt-0.5">
                  <fact.icon className="w-3.5 h-3.5" />
                  {fact.label}
                </div>
                <span className="font-serif text-lg md:text-xl text-linen">{fact.value}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 2. INTRO SECTION */}
      <section className="bg-linen py-20 lg:py-32 relative overflow-hidden">
        <div className="absolute -left-32 top-10 w-96 h-96 rounded-full bg-cognac/[0.04] blur-3xl pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-6 lg:px-10 flex flex-col lg:flex-row gap-12 lg:gap-20 items-start relative z-10">
          <div className="lg:w-[45%]">
            <h2 className="font-serif text-[36px] md:text-[48px] leading-[1.1] text-ink tracking-tight">
              Targeted Wellness,<br/>
              <span className="italic text-cognac">Elevated from Within</span>
            </h2>
          </div>
          <div className="lg:w-[55%] space-y-6 text-[15px] leading-[1.8] text-ink/80">
            <p>
              Physician-tailored vitamin injections designed to support energy, metabolism, immunity, and overall vitality—delivered with precision and ease.
            </p>
            <p>
              At GloVive, our Vitamin Boost Injections offer a refined, efficient approach to wellness by delivering essential nutrients directly into the muscle for rapid absorption and optimal effectiveness. These targeted injections are ideal for individuals seeking quick, focused support without the time commitment of a full IV infusion.
            </p>
            <div className="p-6 bg-bone/40 border-l-2 border-cognac/50 rounded-r-lg">
              <p className="font-medium text-[16px] text-ink/90 mb-2">Designed for Real Life</p>
              <p className="italic text-ink/90">
                Whether you’re looking for a quick energy boost, immune support, or ongoing wellness maintenance, Vitamin Boost Injections offer a convenient, effective solution that fits seamlessly into your lifestyle.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. MENU / OFFERINGS */}
      <section className="bg-bone/30 py-20 lg:py-32 border-y border-border/50">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-12 gap-12 lg:gap-20">
          <div className="lg:col-span-4 lg:sticky lg:top-32 self-start">
            <span className="text-[11px] uppercase tracking-[0.2em] text-cognac">The Menu</span>
            <h2 className="mt-3 font-serif text-[36px] md:text-[42px] leading-[1.1] text-ink mb-6">
              Our Vitamin Boost Injections Menu
            </h2>
            <p className="text-[15px] leading-relaxed text-ink/70 mb-8">
              Targeted injections designed for real life. Choose the boost that best aligns with your current wellness goals.
            </p>
            <Link
              href="/booking"
              className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.2em] text-cognac hover:text-cognac-dark transition-colors font-medium"
            >
              Book Your Boost <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
          
          <div className="lg:col-span-8 flex flex-col gap-5">
            {vitaminShots.map((o) => (
              <div
                key={o.name}
                id={o.name.toLowerCase().replace(/ /g, '-').replace(/\+/g, 'plus')}
                className={`group relative overflow-hidden flex flex-col sm:flex-row sm:items-center justify-between gap-6 rounded-2xl border p-6 md:p-8 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_20px_50px_-20px_rgba(67,40,20,0.15)] ${
                  o.featured
                    ? "border-cognac/30 bg-linen ring-1 ring-cognac/10"
                    : "border-border/60 bg-background hover:border-cognac/30"
                }`}
              >
                {o.featured && (
                  <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-cognac/[0.04] blur-3xl" />
                )}
                
                <div className="relative z-10 flex-1">
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <h3 className="font-serif text-[22px] md:text-[24px] leading-tight text-ink">{o.name}</h3>
                    {o.featured && (
                      <span className="shrink-0 bg-cognac/10 px-3 py-1 text-[9px] uppercase tracking-[0.25em] text-cognac rounded-full">
                        Signature
                      </span>
                    )}
                  </div>
                  <p className="max-w-md text-[14px] leading-relaxed text-ink/70">{o.description}</p>
                </div>
                
                <div className="relative z-10 sm:text-right shrink-0 border-t sm:border-t-0 sm:border-l border-border/50 pt-4 sm:pt-0 sm:pl-6 flex flex-row sm:flex-col items-end justify-between sm:justify-center">
                  <p className="font-serif text-[24px] md:text-[28px] text-ink">{o.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. THE EXPERIENCE & BENEFITS */}
      <section className="bg-linen py-20 lg:py-32 border-b border-border/50">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
            
            {/* The Benefits */}
            <div>
              <span className="text-[11px] uppercase tracking-[0.2em] text-cognac">The Results</span>
              <h2 className="mt-3 font-serif text-[32px] md:text-[42px] text-ink mb-6">A Focused Approach</h2>
              <p className="text-[15px] leading-relaxed text-ink/70 mb-8">
                Vitamin injections bypass the digestive system, allowing your body to absorb nutrients more efficiently and experience benefits more quickly.
              </p>
              
              <div className="grid grid-cols-1 gap-4">
                {benefits.map((b) => (
                  <div key={b} className="flex items-start gap-4 p-5 bg-background border border-border/60 rounded-xl transition-colors hover:border-cognac/30">
                    <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-cognac/10">
                      <Check className="h-3 w-3 text-cognac" strokeWidth={2.5} />
                    </div>
                    <span className="text-[14px] text-ink/80 font-medium">{b}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Your Experience with GloVive */}
            <div>
              <div className="rounded-3xl border border-cognac/30 bg-linen p-8 md:p-12 shadow-sm relative overflow-hidden h-full">
                <div className="absolute right-0 top-0 w-64 h-64 bg-cognac/[0.04] rounded-full blur-3xl -mr-10 -mt-10" />
                <h2 className="relative z-10 font-serif text-[32px] text-ink mb-10">Your Experience</h2>
                <div className="relative z-10 space-y-10">
                  {[
                    { step: "01", title: "Consultation & Evaluation", desc: "We begin with a quick wellness assessment to understand your goals, lifestyle, and health history." },
                    { step: "02", title: "Targeted Treatment", desc: "Your selected vitamin injection is administered quickly and comfortably by one of our licensed professionals in a calm, supportive setting." },
                    { step: "03", title: "Ongoing Support & Maintenance", desc: "We help guide your treatment frequency and wellness plan to ensure you continue feeling your best with consistent, personalized support." },
                  ].map((s) => (
                    <div key={s.step} className="flex gap-6 group">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-cognac/10 border border-cognac/20 font-serif text-lg text-cognac transition-all group-hover:bg-cognac group-hover:text-linen">
                        {s.step}
                      </div>
                      <div>
                        <h3 className="font-serif text-[22px] text-ink">{s.title}</h3>
                        <p className="mt-2 text-[14px] leading-relaxed text-ink/65">{s.desc}</p>
                      </div>
                    </div>
                  ))}
                  
                  <div className="mt-8 pt-8 border-t border-border/50">
                    <ul className="space-y-3">
                      {["Quick and convenient treatments", "Minimal downtime", "Personalized wellness guidance", "Flexible treatment scheduling"].map(perk => (
                        <li key={perk} className="flex gap-3 text-[14px] text-ink/75 items-center">
                          <span className="text-cognac text-lg">💫</span> {perk}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </section>

      {/* 5. TIME, FREQUENCY & PRICING */}
      <section className="bg-bone/40 py-20 lg:py-32 border-b border-border/50">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-20">
            {/* Time & Frequency */}
            <div>
              <h2 className="font-serif text-[32px] md:text-[40px] text-ink mb-8">Treatment Time & Frequency</h2>
              
              <div className="space-y-8">
                <div>
                  <h3 className="font-serif text-[22px] text-ink mb-3">How Long Does It Take?</h3>
                  <p className="text-[15px] leading-relaxed text-ink/75">
                    Most Vitamin Boost Injections take just 5–15 minutes, making them ideal for clients on the go.
                  </p>
                </div>
                
                <div>
                  <h3 className="font-serif text-[22px] text-ink mb-4">How Often Should You Receive Injections?</h3>
                  <p className="text-[15px] leading-relaxed text-ink/75 mb-6">
                    Frequency depends on your goals, but many clients choose:
                  </p>
                  <ul className="space-y-4">
                    <li className="flex gap-4">
                      <span className="text-xl">✨</span>
                      <span className="text-[15px] text-ink/80 leading-relaxed pt-1">Weekly for energy and metabolism support</span>
                    </li>
                    <li className="flex gap-4">
                      <span className="text-xl">✨</span>
                      <span className="text-[15px] text-ink/80 leading-relaxed pt-1">Bi-weekly for maintenance</span>
                    </li>
                    <li className="flex gap-4">
                      <span className="text-xl">✨</span>
                      <span className="text-[15px] text-ink/80 leading-relaxed pt-1">Monthly for general wellness</span>
                    </li>
                  </ul>
                  <p className="mt-6 text-[14px] text-ink/60 italic">Your provider will guide the best schedule for your needs.</p>
                </div>
              </div>
            </div>

            {/* Pricing */}
            <div>
              <div className="bg-background rounded-3xl border border-border/60 p-8 md:p-12 h-full shadow-sm">
                <h2 className="font-serif text-[32px] text-ink mb-4">Transparent Pricing, Tailored to You</h2>
                <p className="text-[15px] text-ink/70 mb-8">
                  Because treatments are personalized, pricing will vary based on your selected injections and wellness plan.
                </p>
                
                <ul className="space-y-6">
                  <li className="flex gap-4">
                    <span className="text-xl">✨</span>
                    <span className="text-[15px] text-ink/80 leading-relaxed pt-1">Individual injections or package options</span>
                  </li>
                  <li className="flex gap-4">
                    <span className="text-xl">✨</span>
                    <span className="text-[15px] text-ink/80 leading-relaxed pt-1">Add-on treatments available</span>
                  </li>
                  <li className="flex gap-4">
                    <span className="text-xl">✨</span>
                    <span className="text-[15px] text-ink/80 leading-relaxed pt-1">Membership and wellness plans offered</span>
                  </li>
                  <li className="flex gap-4 mt-8 pt-6 border-t border-border/40">
                    <span className="text-xl">💬</span>
                    <span className="text-[15px] text-ink/90 font-medium italic leading-relaxed pt-1">Our goal is to make elevated wellness simple, effective, and designed entirely around you.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. FAQ */}
      <section className="bg-linen py-20 lg:py-32">
        <div className="max-w-4xl mx-auto px-6 lg:px-10">
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

      {/* 7. CTA */}
      <section className="bg-pine py-20 lg:py-32 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-bone/5 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-4xl mx-auto px-6 lg:px-10 text-center relative z-10">
          <h2 className="font-serif text-[36px] md:text-[48px] leading-[1.1] text-linen mb-6">
            Ready for your <em className="italic text-cognac">boost?</em>
          </h2>
          <p className="text-[16px] leading-[1.8] text-bone/80 max-w-2xl mx-auto mb-10">
            Start with a brief medical evaluation to determine the best vitamin support for your needs.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/booking"
              className="inline-flex items-center gap-2 rounded-full bg-cognac px-8 py-4 text-[11px] uppercase tracking-[0.2em] text-primary-foreground transition-colors hover:bg-cognac-dark"
            >
              Schedule Consultation <ArrowUpRight className="w-4 h-4" />
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
