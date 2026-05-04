"use client"

import Image from "next/image"
import Link from "next/link"
import {
  ArrowLeft,
  ArrowUpRight,
  Plus,
  ShieldCheck,
  Stethoscope,
  RefreshCw,
  Check,
  Activity
} from "lucide-react"

const quickFacts = [
  { icon: ShieldCheck, label: "Consultation", value: "Required" },
  { icon: Stethoscope, label: "Administered by", value: "Licensed Providers" },
  { icon: Activity, label: "Monitoring", value: "Ongoing Labs" },
  { icon: RefreshCw, label: "Methods", value: "TRT / HRT / BHRT" },
]

const benefits = [
  "Improve energy production and reduce fatigue",
  "Support metabolism and weight regulation",
  "Enhance mood stability and mental clarity",
  "Improve sleep quality and recovery",
  "Restore libido and overall vitality",
  "Support muscle strength and body composition"
]

const idealCandidates = [
  "Low energy or chronic fatigue",
  "Brain fog or difficulty focusing",
  "Mood changes or irritability",
  "Weight gain or slowed metabolism",
  "Low libido or hormonal imbalance symptoms",
  "Sleep disturbances",
  "Age-related hormone decline"
]

const treatmentOptions = [
  {
    name: "Testosterone Replacement Therapy (TRT)",
    description: "Supports energy, strength, libido, and overall vitality",
  },
  {
    name: "Hormone Replacement Therapy (HRT)",
    description: "Supports hormonal balance, mood, sleep, and wellness",
  },
  {
    name: "Bioidentical Hormone Therapy (BHRT)",
    description: "Personalized hormone support designed to mirror your body's natural hormones",
    featured: true,
  }
]

const faqItems = [
  {
    q: "Do I need lab work before starting therapy?",
    a: "Yes. Lab testing is essential to safely assess your hormone levels and guide your treatment plan."
  },
  {
    q: "Is hormone therapy safe?",
    a: "When medically supervised and properly monitored, TRT and HRT are considered safe and effective for appropriate candidates."
  },
  {
    q: "How soon will I feel results?",
    a: "Some patients notice improvements within weeks, while full benefits develop over time with consistent treatment."
  },
  {
    q: "Is this a long-term treatment?",
    a: "Hormone therapy is often ongoing, with regular monitoring to ensure optimal results and safety."
  }
]

export default function VitalityTherapyPage() {
  return (
    <div className="bg-linen min-h-screen">
      {/* 1. HERO SECTION */}
      <section className="relative w-full h-[60vh] min-h-[500px] flex flex-col justify-center bg-ink">
        <Image
          src="/images/service-vitality-therapy.png"
          alt="Glovive Vitality Therapy"
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
            Vitality <em className="italic font-light text-gold drop-shadow-[0_2px_8px_rgba(0,0,0,0.4)]">Therapy</em>
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
              Hormone Optimization,<br/>
              <span className="italic text-cognac">Elevated</span>
            </h2>
          </div>
          <div className="lg:w-[55%] space-y-6 text-[15px] leading-[1.8] text-ink/80">
            <p>
              Hormone therapy is designed to restore optimal levels of key hormones—such as testosterone, estrogen, and progesterone—when the body is no longer producing them at balanced levels. These hormones play a critical role in regulating energy, metabolism, mood, sleep, libido, and overall physical and mental function.
            </p>
            <p>
              Through carefully monitored TRT (Testosterone Replacement Therapy) and HRT (Hormone Replacement Therapy), your body is supported with precise, individualized dosing to bring levels back into a healthy range. This helps improve how your body functions on a day-to-day basis—not by overstimulating it, but by restoring what may be lacking.
            </p>
            <div className="p-6 bg-bone/40 border-l-2 border-cognac/50 rounded-r-lg">
              <p className="font-medium text-[16px] text-ink/90 mb-2">BHRT (Bioidentical Hormone Replacement Therapy)</p>
              <p className="italic text-ink/90">
                A more personalized approach using hormones that are structurally identical to those naturally produced by your body. BHRT is often preferred for its ability to work more seamlessly with your body’s natural processes, allowing for a more tailored and balanced treatment experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. MENU / TREATMENT OPTIONS */}
      <section className="bg-bone/30 py-20 lg:py-32 border-y border-border/50">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-12 gap-12 lg:gap-20">
          <div className="lg:col-span-4 lg:sticky lg:top-32 self-start">
            <span className="text-[11px] uppercase tracking-[0.2em] text-cognac">The Protocols</span>
            <h2 className="mt-3 font-serif text-[36px] md:text-[42px] leading-[1.1] text-ink mb-6">
              Treatment Options
            </h2>
            <p className="text-[15px] leading-relaxed text-ink/70 mb-8">
              Personalized hormone support designed to align with your body&apos;s natural rhythms and needs.
            </p>
            <Link
              href="/booking"
              className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.2em] text-cognac hover:text-cognac-dark transition-colors font-medium"
            >
              Start Your Journey <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
          
          <div className="lg:col-span-8 flex flex-col gap-5">
            {treatmentOptions.map((o) => (
              <div
                key={o.name}
                className={`group relative overflow-hidden flex flex-col justify-between gap-4 rounded-2xl border p-8 md:p-10 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_20px_50px_-20px_rgba(67,40,20,0.15)] ${
                  o.featured
                    ? "border-cognac/30 bg-linen ring-1 ring-cognac/10"
                    : "border-border/60 bg-background hover:border-cognac/30"
                }`}
              >
                {o.featured && (
                  <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-cognac/[0.04] blur-3xl" />
                )}
                
                <div className="relative z-10">
                  <div className="flex flex-wrap items-center gap-3 mb-3">
                    <h3 className="font-serif text-[24px] md:text-[28px] leading-tight text-ink">{o.name}</h3>
                    {o.featured && (
                      <span className="shrink-0 bg-cognac/10 px-3 py-1 text-[9px] uppercase tracking-[0.25em] text-cognac rounded-full">
                        Recommended
                      </span>
                    )}
                  </div>
                  <p className="text-[15px] leading-relaxed text-ink/70">{o.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. RESULTS & CANDIDATES */}
      <section className="bg-linen py-20 lg:py-32 border-b border-border/50">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
            
            {/* The Benefits */}
            <div>
              <span className="text-[11px] uppercase tracking-[0.2em] text-cognac">The Results</span>
              <h2 className="mt-3 font-serif text-[32px] md:text-[42px] text-ink mb-6">Restoring Balance</h2>
              <p className="text-[15px] leading-relaxed text-ink/70 mb-8">
                By rebalancing your core systems, hormone therapy may help restore what has been lost and elevate your daily function.
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

            {/* Candidates */}
            <div>
              <div className="rounded-3xl border border-cognac/30 bg-bone/40 p-8 md:p-12 shadow-sm relative h-full">
                <span className="text-[11px] uppercase tracking-[0.2em] text-cognac">Indications</span>
                <h2 className="mt-3 font-serif text-[32px] text-ink mb-8">Who Vitality Therapy Is For</h2>
                <p className="text-[15px] leading-relaxed text-ink/70 mb-8">
                  This treatment may be ideal for individuals experiencing the following symptoms:
                </p>
                
                <ul className="space-y-4">
                  {idealCandidates.map((candidate) => (
                    <li key={candidate} className="flex items-start gap-3">
                      <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-cognac shrink-0" />
                      <span className="text-[15px] text-ink/80 leading-relaxed">{candidate}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
          </div>
        </div>
      </section>

      {/* 5. THE EXPERIENCE & PRICING */}
      <section className="bg-bone/40 py-20 lg:py-32 border-b border-border/50">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-20">
            
            {/* Experience Steps */}
            <div>
              <h2 className="font-serif text-[32px] md:text-[40px] text-ink mb-10">Your Experience with GloVive</h2>
              
              <div className="space-y-10">
                {[
                  { step: "01", title: "Consultation & Evaluation", desc: "Your journey begins with an in-depth medical consultation and lab work to assess your current hormone levels, symptoms, and overall health." },
                  { step: "02", title: "Personalized Treatment Plan", desc: "Based on your results, your provider will create a customized TRT or HRT plan tailored specifically to your body and goals." },
                  { step: "03", title: "Ongoing Monitoring & Optimization", desc: "We provide continuous monitoring, follow-up labs, and treatment adjustments to ensure your therapy remains safe, effective, and aligned with your needs." },
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
                    {["Regular lab monitoring", "Dose adjustments for optimal balance", "Symptom tracking and support", "Long-term wellness planning"].map(perk => (
                      <li key={perk} className="flex gap-3 text-[14px] text-ink/75 items-center">
                        <span className="text-cognac text-lg">💫</span> {perk}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Pricing */}
            <div>
              <div className="bg-background rounded-3xl border border-border/60 p-8 md:p-12 h-full shadow-sm flex flex-col">
                <h2 className="font-serif text-[32px] text-ink mb-2">Payments + Pricing</h2>
                <p className="text-[15px] text-ink/70 mb-10">
                  Transparent pricing for your long-term wellness.
                </p>
                
                <div className="space-y-6 flex-1">
                  <div className="flex justify-between items-end border-b border-border/50 pb-4">
                    <div>
                      <h3 className="font-serif text-[20px] text-ink">Initial Consultation</h3>
                    </div>
                    <span className="font-serif text-[24px] text-cognac">$150</span>
                  </div>
                  
                  <div className="flex justify-between items-end border-b border-border/50 pb-4">
                    <div>
                      <h3 className="font-serif text-[20px] text-ink">Comprehensive Lab Panel</h3>
                      <p className="text-[13px] text-ink/60 mt-1">8 Hormone Panel & Evaluation</p>
                    </div>
                    <span className="font-serif text-[24px] text-cognac text-right">$250–$400</span>
                  </div>
                  
                  <div className="flex justify-between items-end border-b border-border/50 pb-4">
                    <div>
                      <h3 className="font-serif text-[20px] text-ink">Monthly Injections</h3>
                    </div>
                    <span className="font-serif text-[24px] text-cognac">$150–$200</span>
                  </div>
                </div>

                <div className="mt-10 pt-8 border-t border-cognac/20">
                  <p className="text-[14px] leading-relaxed text-ink/80 italic mb-6">
                    Should you decide to proceed with treatment, your consultation fee will be seamlessly credited toward your comprehensive lab panel.
                  </p>
                  <p className="text-[14px] leading-relaxed text-ink/70">
                    We believe improving health and wellness is for everyone. We offer payment plans and financing options through CareCredit so you can make manageable monthly payments towards treatments.
                  </p>
                </div>
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
          <span className="block text-[11px] uppercase tracking-[0.2em] text-cognac mb-4">Begin Your Vitality Journey</span>
          <h2 className="font-serif text-[36px] md:text-[48px] leading-[1.1] text-linen mb-6">
            Personalized TRT, HRT & BHRT Plans <em className="italic text-gold">Available</em>
          </h2>
          <p className="text-[16px] leading-[1.8] text-bone/80 max-w-2xl mx-auto mb-10">
            A comprehensive evaluation is required to determine the most appropriate treatment plan for you.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/booking"
              className="inline-flex items-center gap-2 rounded-full bg-cognac px-8 py-4 text-[11px] uppercase tracking-[0.2em] text-primary-foreground transition-colors hover:bg-cognac-dark"
            >
              Schedule Consultation <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
