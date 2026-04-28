"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { ArrowLeft, ArrowUpRight, ChevronDown, Sparkles, Droplets, Zap, Shield } from "lucide-react"

export default function IVHydrationPage() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────────────── */}
      <section className="bg-linen">
        <div className="mx-auto max-w-7xl px-6 pb-0 pt-10 lg:px-10 lg:pt-14">
          <Link
            href="/treatments"
            className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.22em] text-ink/50 transition-colors hover:text-cognac"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            All Treatments
          </Link>

          <div className="mt-8 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-[11px] uppercase tracking-[0.32em] text-cognac">
                IV Nutrient Therapy
              </p>
              <h1 className="mt-4 font-serif text-[48px] leading-[1.02] tracking-tight text-ink md:text-[68px] lg:text-[82px]">
                IV Hydration
              </h1>
            </div>
            <Link
              href="/booking"
              className="group inline-flex shrink-0 items-center gap-2 self-start rounded-full bg-cognac px-7 py-3.5 text-[11px] uppercase tracking-[0.22em] text-primary-foreground transition-colors hover:bg-cognac-dark md:self-end"
            >
              Book Now
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── HERO IMAGE + STAT BAR ─────────────────────────────────────── */}
      <section className="relative">
        <div className="relative aspect-[16/9] w-full md:aspect-[21/8]">
          <Image
            src="/images/service-iv-hydration.jpg"
            alt="IV Hydration therapy at GloVive"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
          <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-ink/75 to-transparent" />
        </div>

        {/* Quick facts bar */}
        <div className="absolute inset-x-0 bottom-0">
          <div className="mx-auto max-w-7xl px-6 pb-8 lg:px-10 lg:pb-12">
            <ul className="flex flex-wrap items-start gap-y-6 divide-x divide-bone/20">
              {[
                { label: "Consultation Required", value: "No" },
                { label: "Sessions Needed", value: "As Needed" },
                { label: "Treatment Length", value: "30–60 min" },
                { label: "Results Duration", value: "Immediate" },
              ].map((fact, idx) => (
                <li
                  key={fact.label}
                  className={`flex flex-col gap-1 pr-8 ${idx === 0 ? "pl-0" : "pl-8"}`}
                >
                  <p className="text-[10px] uppercase tracking-[0.22em] text-bone/60">
                    {fact.label}
                  </p>
                  <p className="font-serif text-xl text-linen md:text-2xl">{fact.value}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ── INTRO ────────────────────────────────────────────────────── */}
      <section className="bg-linen">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
          <div className="grid gap-16 lg:grid-cols-[1.5fr_1fr] lg:gap-24">
            <div>
              <span className="text-[11px] uppercase tracking-[0.32em] text-cognac">
                Curated Nutrient Therapy for Peak Performance
              </span>
              <h2 className="mt-5 font-serif text-[32px] leading-[1.08] tracking-tight text-ink md:text-[44px]">
                Restore. Replenish.{" "}
                <em className="italic text-cognac">Illuminate.</em>
              </h2>
              <p className="mt-6 text-sm leading-relaxed text-ink/70 md:text-base lg:text-[17px]">
                At Glovive, we understand that modern living can take a toll on your body. Between demanding schedules, family responsibilities, and an active social life, maintaining optimal nutrition isn&apos;t always realistic. Even with daily supplements, the body may not fully absorb the nutrients it needs — leaving you feeling depleted, fatigued, and not quite at your best.
              </p>
              <p className="mt-5 text-sm leading-relaxed text-ink/70 md:text-base">
                Our IV nutrient therapy is a sophisticated, results-driven approach to wellness — delivering a curated blend of essential vitamins and nutrients directly into the bloodstream for enhanced absorption and immediate revitalization.
              </p>

              {/* Treated Concerns */}
              <div className="mt-10">
                <p className="text-[11px] uppercase tracking-[0.28em] text-ink/50">
                  Treated Concerns
                </p>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {[
                    "Fatigue & Low Energy",
                    "Dehydration",
                    "Dull Skin",
                    "Immune Deficiency",
                    "Brain Fog",
                    "Muscle Recovery",
                    "Nutrient Deficiency",
                    "Inflammation",
                  ].map((concern) => (
                    <li
                      key={concern}
                      className="rounded-full border border-border/60 bg-bone/50 px-4 py-1.5 text-sm text-ink/75"
                    >
                      {concern}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Side image */}
            <div className="relative hidden overflow-hidden rounded-2xl lg:block">
              <Image
                src="/images/collection-iv.jpg"
                alt="IV therapy session at GloVive"
                fill
                sizes="33vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── BENEFITS ─────────────────────────────────────────────────── */}
      <section className="bg-bone/50">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
          <div className="mx-auto max-w-xl text-center">
            <span className="text-[11px] uppercase tracking-[0.32em] text-cognac">Benefits</span>
            <h2 className="mt-5 font-serif text-[32px] leading-[1.08] text-ink md:text-[42px]">
              What IV Therapy Can Do For You
            </h2>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {[
              {
                icon: Sparkles,
                category: "Beauty",
                items: [
                  "Enhanced skin radiance and luminous glow",
                  "Support for collagen production and anti-aging",
                  "Hydration for smoother, more supple skin",
                ],
              },
              {
                icon: Zap,
                category: "Performance",
                items: [
                  "Sustained energy and peak vitality",
                  "Accelerated recovery and muscle support",
                  "Enhanced focus, clarity, and cognitive performance",
                ],
              },
              {
                icon: Shield,
                category: "Wellness",
                items: [
                  "Immediate hydration and cellular replenishment",
                  "Immune support and overall resilience",
                  "Detoxification and internal balance",
                  "Optimized nutrient absorption beyond oral supplements",
                  "Reduced fatigue and improved day-to-day well-being",
                ],
              },
            ].map((pillar) => (
              <div
                key={pillar.category}
                className="flex flex-col rounded-xl border border-border/60 bg-linen p-8"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-cognac/10">
                  <pillar.icon className="h-5 w-5 text-cognac" strokeWidth={1.5} />
                </div>
                <h3 className="mt-5 font-serif text-2xl text-ink">{pillar.category}</h3>
                <ul className="mt-5 flex flex-col gap-3">
                  {pillar.items.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm leading-relaxed text-ink/70">
                      <span className="mt-2 h-1 w-3 shrink-0 bg-cognac/60" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PRE & POST CARE ──────────────────────────────────────────── */}
      <section className="bg-linen">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-12">
            {/* Pre-care */}
            <div>
              <p className="text-[11px] uppercase tracking-[0.32em] text-ink/50">
                Pre-Care Instructions
              </p>
              <h3 className="mt-4 font-serif text-[28px] text-ink md:text-[34px]">
                Preparing for Your <em className="italic text-cognac">Glovive Experience</em>
              </h3>
              <ul className="mt-8 flex flex-col divide-y divide-border/50">
                {[
                  "Arrive well-hydrated to ensure a seamless and comfortable infusion.",
                  "A light, nourishing meal beforehand is recommended for optimal comfort.",
                  "Limit alcohol and caffeine for 12–24 hours prior to your visit.",
                  "Share any updates regarding your health, medications, or supplements with our team.",
                  "Wear relaxed, elegant attire that allows easy access to your arms.",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-4 py-4">
                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-cognac/10 font-serif text-xs text-cognac">
                      {String(idx + 1).padStart(2, "0")}
                    </span>
                    <p className="text-sm leading-relaxed text-ink/70 md:text-base">{item}</p>
                  </li>
                ))}
              </ul>
            </div>

            {/* Post-care */}
            <div>
              <p className="text-[11px] uppercase tracking-[0.32em] text-ink/50">
                Post-Care Instructions
              </p>
              <h3 className="mt-4 font-serif text-[28px] text-ink md:text-[34px]">
                Following Your <em className="italic text-cognac">Glovive Experience</em>
              </h3>
              <ul className="mt-8 flex flex-col divide-y divide-border/50">
                {[
                  "Continue hydrating to enhance absorption and extend the benefits of your treatment.",
                  "Allow yourself a moment of rest as your body integrates the infusion.",
                  "Avoid alcohol and limit caffeine for the next 24 hours.",
                  "Resume your day at your own pace, guided by how you feel.",
                  "You may notice slight sensitivity at the infusion site — this is temporary.",
                  "Should you have any questions, our team remains at your service.",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-4 py-4">
                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-pine/10 font-serif text-xs text-pine">
                      {String(idx + 1).padStart(2, "0")}
                    </span>
                    <p className="text-sm leading-relaxed text-ink/70 md:text-base">{item}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────────────── */}
      <section className="bg-bone/50">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
          <div className="grid gap-14 lg:grid-cols-[1fr_1.6fr] lg:gap-24">
            <div>
              <span className="text-[11px] uppercase tracking-[0.32em] text-cognac">
                Frequently Asked Questions
              </span>
              <h2 className="mt-5 font-serif text-[32px] leading-[1.08] text-ink md:text-[40px]">
                Everything You Need to Know
              </h2>
              <p className="mt-5 text-sm leading-relaxed text-ink/65 md:text-base">
                We welcome the opportunity to answer any additional questions and thoughtfully design a treatment plan aligned with your goals.
              </p>
              <Link
                href="/contact"
                className="group mt-8 inline-flex items-center gap-2 rounded-full border border-cognac/50 px-6 py-3 text-[11px] uppercase tracking-[0.2em] text-cognac transition-colors hover:bg-cognac hover:text-primary-foreground"
              >
                Contact Us
                <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </Link>
            </div>

            <FaqAccordion />
          </div>
        </div>
      </section>

      {/* ── BOTTOM CTA ───────────────────────────────────────────────── */}
      <section className="bg-pine">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
          <div className="flex flex-col items-start gap-10 md:flex-row md:items-center md:justify-between">
            <div>
              <Droplets className="h-9 w-9 text-bone/50" strokeWidth={1.2} />
              <h2 className="mt-6 font-serif text-[32px] leading-[1.08] text-linen md:text-[44px]">
                Ready to{" "}
                <em className="italic text-cognac">Restore & Replenish?</em>
              </h2>
              <p className="mt-5 max-w-lg text-sm leading-relaxed text-bone/70 md:text-base">
                We welcome the opportunity to thoughtfully design a treatment plan aligned with your wellness goals. Book a session or reach out — our team is here to guide you.
              </p>
            </div>
            <div className="flex shrink-0 flex-col gap-3 sm:flex-row">
              <Link
                href="/booking"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-cognac px-7 py-4 text-[11px] uppercase tracking-[0.22em] text-primary-foreground transition-colors hover:bg-cognac-dark"
              >
                Book Now
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full border border-bone/30 px-7 py-4 text-[11px] uppercase tracking-[0.22em] text-bone transition-colors hover:border-bone/60 hover:text-linen"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

const faqs = [
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

function FaqAccordion() {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <ul className="flex flex-col divide-y divide-border/60">
      {faqs.map((faq, idx) => (
        <li key={idx}>
          <button
            onClick={() => setOpen(open === idx ? null : idx)}
            className="flex w-full items-center justify-between gap-6 py-6 text-left"
            aria-expanded={open === idx}
          >
            <span className="font-serif text-[18px] text-ink md:text-[20px]">{faq.q}</span>
            <ChevronDown
              className={`h-5 w-5 shrink-0 text-cognac transition-transform duration-300 ${open === idx ? "rotate-180" : ""}`}
              strokeWidth={1.5}
            />
          </button>
          <div
            className={`overflow-hidden transition-all duration-300 ${open === idx ? "max-h-96 pb-6" : "max-h-0"}`}
          >
            <p className="text-sm leading-relaxed text-ink/65 md:text-base">{faq.a}</p>
          </div>
        </li>
      ))}
    </ul>
  )
}
