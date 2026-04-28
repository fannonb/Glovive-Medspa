"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import {
  ArrowLeft,
  ArrowUpRight,
  ChevronDown,
  Droplets,
  Sparkles,
  Zap,
  Shield,
  Heart,
  Check,
  X,
  Clock,
  CalendarCheck,
  Timer,
  Activity,
} from "lucide-react"

export default function IVHydrationPage() {
  const [activeTab, setActiveTab] = useState<"pre" | "post">("pre")

  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────────────── */}
      <section className="relative bg-pine overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 h-64 w-64 rounded-full bg-cognac blur-3xl" />
          <div className="absolute bottom-10 right-20 h-48 w-48 rounded-full bg-linen blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 pt-8 pb-16 lg:px-10 lg:pt-12 lg:pb-24">
          <Link
            href="/treatments"
            className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.22em] text-bone/60 transition-colors hover:text-linen"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            All Treatments
          </Link>

          <div className="mt-10 grid gap-12 lg:grid-cols-2 lg:gap-16 lg:items-center">
            {/* Left content */}
            <div>
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-cognac/20">
                  <Droplets className="h-5 w-5 text-cognac" strokeWidth={1.5} />
                </div>
                <span className="text-[11px] uppercase tracking-[0.28em] text-cognac">
                  IV Nutrient Therapy
                </span>
              </div>

              <h1 className="mt-6 font-serif text-[44px] leading-[1.02] tracking-tight text-linen md:text-[56px] lg:text-[68px]">
                IV Hydration <br />
                <em className="italic text-cognac">Therapy</em>
              </h1>

              <p className="mt-6 max-w-lg text-base leading-relaxed text-bone/80 md:text-lg">
                Give your body the nutrients it needs. A simple solution that infuses essential vitamins directly into your bloodstream for immediate revitalization.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Link
                  href="/booking"
                  className="group inline-flex items-center gap-2 rounded-full bg-cognac px-8 py-4 text-[11px] uppercase tracking-[0.22em] text-primary-foreground transition-all hover:bg-cognac-dark hover:shadow-lg"
                >
                  Book Now
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-full border border-bone/30 px-8 py-4 text-[11px] uppercase tracking-[0.22em] text-bone transition-colors hover:border-bone/60 hover:text-linen"
                >
                  Ask a Question
                </Link>
              </div>
            </div>

            {/* Right - Image */}
            <div className="relative">
              <div className="relative aspect-[4/5] overflow-hidden rounded-3xl">
                <Image
                  src="/images/service-iv-hydration.jpg"
                  alt="IV Hydration therapy at GloVive"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-pine/40 to-transparent" />
              </div>

              {/* Floating stats card */}
              <div className="absolute -bottom-8 -left-4 rounded-2xl bg-linen p-6 shadow-xl lg:-left-12">
                <p className="text-[10px] uppercase tracking-[0.2em] text-ink/50">Results Duration</p>
                <p className="mt-1 font-serif text-3xl text-ink">Immediate</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── QUICK FACTS BAR ──────────────────────────────────────────── */}
      <section className="bg-linen border-b border-border/40">
        <div className="mx-auto max-w-7xl px-6 py-8 lg:px-10">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {[
              { icon: CalendarCheck, label: "Consultation Required?", value: "No" },
              { icon: Activity, label: "Sessions Needed", value: "As Needed" },
              { icon: Timer, label: "Treatment Length", value: "45 minutes" },
              { icon: Clock, label: "Results Duration", value: "Immediate" },
            ].map((fact) => (
              <div key={fact.label} className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-cognac/10">
                  <fact.icon className="h-4 w-4 text-cognac" strokeWidth={1.5} />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-[0.2em] text-ink/50">{fact.label}</p>
                  <p className="mt-1 font-serif text-xl text-ink">{fact.value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── INTRO SECTION ────────────────────────────────────────────── */}
      <section className="bg-linen">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
          <div className="grid gap-16 lg:grid-cols-[1.4fr_1fr] lg:gap-20">
            <div>
              <span className="text-[11px] uppercase tracking-[0.32em] text-cognac">
                Give Your Body What It Needs
              </span>
              <h2 className="mt-5 font-serif text-[32px] leading-[1.08] tracking-tight text-ink md:text-[44px]">
                Life Gets Hectic. <br />
                <em className="italic text-cognac">Your Wellness Shouldn&apos;t Suffer.</em>
              </h2>
              <p className="mt-6 text-base leading-relaxed text-ink/70 md:text-lg">
                Between work, family, social commitments, and everything else life throws at you, it can be hard to track what you eat and ensure you&apos;re getting all the vitamins and nutrients you need. Even with supplements, our digestive tracts may not fully absorb these nutrients — leaving us feeling constantly tired, weak, and lacking the energy to get things done.
              </p>
              <p className="mt-5 text-base leading-relaxed text-ink/70">
                IV Therapy at Glovive is a simple, sophisticated solution that infuses the vitamins you need directly into your bloodstream — bypassing your digestive system for 100% absorption and immediate results.
              </p>

              {/* Treated Concerns */}
              <div className="mt-12">
                <p className="text-[11px] uppercase tracking-[0.28em] text-ink/50">
                  Treated Concerns
                </p>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {[
                    "Lack of Energy",
                    "Chronic Fatigue",
                    "Signs of Aging",
                    "Depression",
                    "Lowered Athletic Performance",
                    "Brain Fog",
                    "Weakened Immunity",
                    "Dehydration",
                  ].map((concern) => (
                    <li
                      key={concern}
                      className="rounded-full border border-pine/20 bg-pine/5 px-4 py-2 text-sm text-ink/80 transition-colors hover:border-pine/40"
                    >
                      {concern}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Side image */}
            <div className="relative hidden lg:block">
              <div className="relative aspect-[3/4] overflow-hidden rounded-3xl">
                <Image
                  src="/images/collection-iv.jpg"
                  alt="IV therapy session at GloVive"
                  fill
                  sizes="33vw"
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 rounded-2xl bg-pine p-6 text-center shadow-xl">
                <p className="font-serif text-4xl text-linen">100%</p>
                <p className="mt-1 text-[10px] uppercase tracking-[0.2em] text-bone/70">Absorption Rate</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── BENEFITS ─────────────────────────────────────────────────── */}
      <section className="bg-bone/50">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
          <div className="text-center">
            <span className="text-[11px] uppercase tracking-[0.32em] text-cognac">Benefits</span>
            <h2 className="mt-5 font-serif text-[32px] leading-[1.08] text-ink md:text-[44px]">
              What IV Therapy Can <em className="italic text-cognac">Do For You</em>
            </h2>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-3">
            {[
              {
                icon: Sparkles,
                title: "Improved Mental Health",
                description:
                  "IV Therapy delivers the nutrients your brain needs to function optimally, providing mental clarity, focus, improved sleep, and elevated mood.",
                color: "cognac",
              },
              {
                icon: Zap,
                title: "Elevated Physical Health",
                description:
                  "Not only will you enjoy better mental health, but you can expect physical improvements as well. When your body has the vitamins it needs, you improve energy, stamina, and more.",
                color: "pine",
              },
              {
                icon: Heart,
                title: "Minimally Invasive",
                description:
                  "What makes IV therapy such a popular treatment is how simple and easy it is. After inserting the IV, you can sit back and relax while your body gets what it needs.",
                color: "cognac",
              },
            ].map((benefit) => (
              <div
                key={benefit.title}
                className="group relative overflow-hidden rounded-2xl bg-linen p-8 transition-all hover:shadow-lg"
              >
                <div
                  className={`flex h-14 w-14 items-center justify-center rounded-2xl ${
                    benefit.color === "cognac" ? "bg-cognac/10" : "bg-pine/10"
                  }`}
                >
                  <benefit.icon
                    className={`h-6 w-6 ${benefit.color === "cognac" ? "text-cognac" : "text-pine"}`}
                    strokeWidth={1.5}
                  />
                </div>
                <h3 className="mt-6 font-serif text-2xl text-ink">{benefit.title}</h3>
                <p className="mt-4 text-base leading-relaxed text-ink/65">{benefit.description}</p>

                {/* Decorative corner */}
                <div
                  className={`absolute -bottom-12 -right-12 h-32 w-32 rounded-full opacity-0 transition-opacity group-hover:opacity-100 ${
                    benefit.color === "cognac" ? "bg-cognac/5" : "bg-pine/5"
                  }`}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ─────────────────────────────────────────────── */}
      <section className="bg-linen">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
          <div className="text-center">
            <span className="text-[11px] uppercase tracking-[0.32em] text-cognac">The Process</span>
            <h2 className="mt-5 font-serif text-[32px] leading-[1.08] text-ink md:text-[44px]">
              How It <em className="italic text-cognac">Works</em>
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-ink/65">
              IV Therapy works by infusing essential vitamins directly through an IV, bypassing your digestive tract to deliver 100% of the necessary nutrients directly into your bloodstream.
            </p>
          </div>

          <div className="mt-16">
            {/* Timeline */}
            <div className="relative">
              {/* Connecting line */}
              <div className="absolute left-8 top-0 hidden h-full w-px bg-gradient-to-b from-cognac via-pine to-cognac/30 md:left-1/2 md:block" />

              <div className="flex flex-col gap-12">
                {[
                  {
                    step: "01",
                    title: "Consultation",
                    description:
                      "Every treatment at Glovive is personalized. While no formal consultation is required for IV therapy, we take time to understand your wellness goals and any health considerations to tailor the perfect blend for you.",
                  },
                  {
                    step: "02",
                    title: "Treatment",
                    description:
                      "We ask that you arrive 10 to 15 minutes ahead of your appointment time. Your IV therapy session will take about 45 minutes and should be completely comfortable. Sit back, relax, and let us take care of you.",
                  },
                  {
                    step: "03",
                    title: "Aftercare",
                    description:
                      "You&apos;ll be able to return to your normal activities immediately after your session. Our team will provide any individual aftercare instructions and help you schedule additional sessions if needed.",
                  },
                ].map((item, idx) => (
                  <div
                    key={item.step}
                    className={`relative flex flex-col gap-6 md:flex-row md:items-center ${
                      idx % 2 === 1 ? "md:flex-row-reverse" : ""
                    }`}
                  >
                    {/* Content */}
                    <div
                      className={`flex-1 rounded-2xl border border-border/50 bg-background p-8 md:p-10 ${
                        idx % 2 === 0 ? "md:text-right" : ""
                      }`}
                    >
                      <span className="font-serif text-5xl text-cognac/20">{item.step}</span>
                      <h3 className="mt-2 font-serif text-2xl text-ink md:text-3xl">{item.title}</h3>
                      <p className="mt-4 text-base leading-relaxed text-ink/65">{item.description}</p>
                    </div>

                    {/* Center dot */}
                    <div className="hidden h-16 w-16 shrink-0 items-center justify-center rounded-full border-4 border-linen bg-pine md:flex">
                      <span className="font-serif text-lg text-linen">{item.step}</span>
                    </div>

                    {/* Spacer for alignment */}
                    <div className="hidden flex-1 md:block" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── PRE & POST CARE TABS ─────────────────────────────────────── */}
      <section className="bg-pine">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.5fr] lg:gap-20">
            {/* Left - Info */}
            <div>
              <span className="text-[11px] uppercase tracking-[0.32em] text-cognac">
                Care Instructions
              </span>
              <h2 className="mt-5 font-serif text-[32px] leading-[1.08] text-linen md:text-[44px]">
                Prepare & <em className="italic text-cognac">Recover</em>
              </h2>
              <p className="mt-5 text-base leading-relaxed text-bone/70">
                For the best possible experience and results, follow these simple guidelines before and after your IV therapy session.
              </p>

              {/* Tab buttons */}
              <div className="mt-10 flex gap-3">
                <button
                  onClick={() => setActiveTab("pre")}
                  className={`rounded-full px-6 py-3 text-[11px] uppercase tracking-[0.2em] transition-all ${
                    activeTab === "pre"
                      ? "bg-cognac text-primary-foreground"
                      : "border border-bone/30 text-bone hover:border-bone/60"
                  }`}
                >
                  Pre-Care
                </button>
                <button
                  onClick={() => setActiveTab("post")}
                  className={`rounded-full px-6 py-3 text-[11px] uppercase tracking-[0.2em] transition-all ${
                    activeTab === "post"
                      ? "bg-cognac text-primary-foreground"
                      : "border border-bone/30 text-bone hover:border-bone/60"
                  }`}
                >
                  Post-Care
                </button>
              </div>
            </div>

            {/* Right - Content */}
            <div className="rounded-3xl bg-linen p-8 md:p-12">
              {activeTab === "pre" ? (
                <div className="space-y-10">
                  <h3 className="font-serif text-2xl text-ink">How To Prepare</h3>

                  {/* What to do */}
                  <div>
                    <div className="flex items-center gap-3">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-pine/10">
                        <Check className="h-4 w-4 text-pine" />
                      </div>
                      <p className="text-[11px] uppercase tracking-[0.2em] text-pine">What to Do</p>
                    </div>
                    <ul className="mt-4 space-y-3">
                      {[
                        "Drink plenty of water before your appointment.",
                        "Eat a light snack about an hour before.",
                        "Wear comfortable clothing with short sleeves.",
                      ].map((item) => (
                        <li key={item} className="flex items-start gap-3">
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-pine" />
                          <span className="text-base text-ink/70">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* What to avoid */}
                  <div>
                    <div className="flex items-center gap-3">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-destructive/10">
                        <X className="h-4 w-4 text-destructive" />
                      </div>
                      <p className="text-[11px] uppercase tracking-[0.2em] text-destructive">What to Avoid</p>
                    </div>
                    <ul className="mt-4 space-y-3">
                      {[
                        "Do not drink alcohol or use tobacco 24 hours before.",
                        "Avoid getting other infusions on the day of your appointment.",
                        "Do not fast before your appointment.",
                      ].map((item) => (
                        <li key={item} className="flex items-start gap-3">
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-destructive/60" />
                          <span className="text-base text-ink/70">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ) : (
                <div className="space-y-10">
                  <h3 className="font-serif text-2xl text-ink">Aftercare Instructions</h3>

                  {/* What to do */}
                  <div>
                    <div className="flex items-center gap-3">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-pine/10">
                        <Check className="h-4 w-4 text-pine" />
                      </div>
                      <p className="text-[11px] uppercase tracking-[0.2em] text-pine">What to Do</p>
                    </div>
                    <ul className="mt-4 space-y-3">
                      {[
                        "Move your arm occasionally to prevent soreness.",
                        "Continue to drink plenty of water.",
                        "Get plenty of rest after your appointment.",
                      ].map((item) => (
                        <li key={item} className="flex items-start gap-3">
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-pine" />
                          <span className="text-base text-ink/70">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* What to avoid */}
                  <div>
                    <div className="flex items-center gap-3">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-destructive/10">
                        <X className="h-4 w-4 text-destructive" />
                      </div>
                      <p className="text-[11px] uppercase tracking-[0.2em] text-destructive">What to Avoid</p>
                    </div>
                    <ul className="mt-4 space-y-3">
                      {[
                        "Avoid excessive exercise for 24 hours.",
                        "Try not to expose the injection site to direct sunlight.",
                        "Do not drink alcohol or use tobacco for 24 hours.",
                      ].map((item) => (
                        <li key={item} className="flex items-start gap-3">
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-destructive/60" />
                          <span className="text-base text-ink/70">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────────────── */}
      <section className="bg-linen">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
          <div className="grid gap-14 lg:grid-cols-[1fr_1.6fr] lg:gap-20">
            <div>
              <span className="text-[11px] uppercase tracking-[0.32em] text-cognac">FAQ</span>
              <h2 className="mt-5 font-serif text-[32px] leading-[1.08] text-ink md:text-[40px]">
                Frequently Asked <em className="italic text-cognac">Questions</em>
              </h2>
              <p className="mt-5 text-base leading-relaxed text-ink/65">
                We welcome the opportunity to answer any additional questions and thoughtfully design a treatment plan aligned with your goals.
              </p>
              <Link
                href="/contact"
                className="group mt-8 inline-flex items-center gap-2 rounded-full border border-cognac/50 px-6 py-3.5 text-[11px] uppercase tracking-[0.2em] text-cognac transition-colors hover:bg-cognac hover:text-primary-foreground"
              >
                Contact Us
                <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </Link>
            </div>

            <FaqAccordion />
          </div>
        </div>
      </section>

      {/* ── RELATED TREATMENTS ───────────────────────────────────────── */}
      <section className="bg-bone/50">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
          <div className="text-center">
            <span className="text-[11px] uppercase tracking-[0.32em] text-cognac">
              Explore More
            </span>
            <h2 className="mt-5 font-serif text-[32px] leading-[1.08] text-ink md:text-[40px]">
              Related <em className="italic text-cognac">Treatments</em>
            </h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              {
                name: "Vitamin Injections",
                description: "Targeted vitamin boosts for energy, immunity, and wellness.",
                href: "/treatments/vitamins",
                image: "/images/collection-vitamins.jpg",
              },
              {
                name: "Body Balance",
                description: "Comprehensive wellness programs for holistic health.",
                href: "/treatments/body-balance",
                image: "/images/service-body-balance.jpg",
              },
              {
                name: "Glovive Elixir",
                description: "Our signature blend for radiance and revitalization.",
                href: "/treatments/glovive-elixir",
                image: "/images/collection-glovive-elixir.jpg",
              },
            ].map((treatment) => (
              <Link
                key={treatment.name}
                href={treatment.href}
                className="group relative overflow-hidden rounded-2xl bg-linen"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={treatment.image}
                    alt={treatment.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/60 to-transparent" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="font-serif text-xl text-linen">{treatment.name}</h3>
                  <p className="mt-2 text-sm text-bone/80">{treatment.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── BOTTOM CTA ───────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-pine">
        {/* Decorative elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute -top-20 -right-20 h-80 w-80 rounded-full bg-cognac blur-3xl" />
          <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-linen blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
          <div className="flex flex-col items-center text-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-cognac/20">
              <Droplets className="h-8 w-8 text-cognac" strokeWidth={1.5} />
            </div>
            <h2 className="mt-8 font-serif text-[36px] leading-[1.08] text-linen md:text-[52px]">
              Ready to <em className="italic text-cognac">Restore & Replenish?</em>
            </h2>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-bone/70 md:text-lg">
              We welcome the opportunity to thoughtfully design a treatment plan aligned with your wellness goals. Book a session or reach out — our team is here to guide you.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/booking"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-cognac px-8 py-4 text-[11px] uppercase tracking-[0.22em] text-primary-foreground transition-all hover:bg-cognac-dark hover:shadow-lg"
              >
                Book Now
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full border border-bone/30 px-8 py-4 text-[11px] uppercase tracking-[0.22em] text-bone transition-colors hover:border-bone/60 hover:text-linen"
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
    q: "Is IV therapy painful?",
    a: "No, IV therapy is completely painless and comfortable. The only discomfort you may feel is the insertion of the IV needle, but once that is done, you can sit back and relax comfortably.",
  },
  {
    q: "How long should I be on IV therapy?",
    a: "The answer varies from person to person. You and our team can discuss how long you should undergo IV therapy based on your personal wellness concerns and results.",
  },
  {
    q: "Can I get IV therapy more than once a month?",
    a: "We have found that patients find the most success when they receive IV therapy monthly. However, if you believe you need additional appointments to achieve your goals, our team will work with you to find the best solution for your concerns.",
  },
  {
    q: "What does the treatment feel like?",
    a: "The experience is designed to be calm and comfortable. Many clients feel a sense of relaxation, clarity, and gentle revitalization during and after their session.",
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
            <span className="font-serif text-lg text-ink md:text-xl">{faq.q}</span>
            <ChevronDown
              className={`h-5 w-5 shrink-0 text-cognac transition-transform duration-300 ${
                open === idx ? "rotate-180" : ""
              }`}
              strokeWidth={1.5}
            />
          </button>
          <div
            className={`overflow-hidden transition-all duration-300 ${
              open === idx ? "max-h-96 pb-6" : "max-h-0"
            }`}
          >
            <p className="text-base leading-relaxed text-ink/65">{faq.a}</p>
          </div>
        </li>
      ))}
    </ul>
  )
}
