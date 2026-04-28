"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import {
  ArrowUpRight,
  ChevronDown,
  Check,
  X,
} from "lucide-react"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const ivTreatments = [
  { name: "Immunity Boost", image: "/images/iv-immunity.jpg" },
  { name: "Hangover Relief", image: "/images/iv-hangover.jpg" },
  { name: "Energy Boost", image: "/images/iv-energy.jpg" },
  { name: "Beauty Drip", image: "/images/iv-beauty.jpg" },
  { name: "Athletic Recovery", image: "/images/iv-athletic.jpg" },
  { name: "Hydration", image: "/images/iv-hydration-thumb.jpg" },
]

const treatedConcerns = [
  "Lack of Energy",
  "Fatigue",
  "Signs of Aging",
  "Depression",
  "Addiction",
  "Lowered Muscle Function & Athletic Performance",
  "Lowered Cognitive Function",
]

const benefits = [
  "Improved Mental Health",
  "Elevated Physical Health",
  "Minimally Invasive",
]

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

const relatedTreatments = [
  {
    name: "Vitamin Injections",
    href: "/treatments/vitamins",
    image: "/images/collection-vitamins.jpg",
  },
  {
    name: "Body Balance",
    href: "/treatments/body-balance",
    image: "/images/service-body-balance.jpg",
  },
  {
    name: "Glovive Elixir",
    href: "/treatments/glovive-elixir",
    image: "/images/collection-glovive-elixir.jpg",
  },
]

export default function IVHydrationPage() {
  return (
    <>
      {/* ── COMPACT HERO ─────────────────────────────────────────────── */}
      <section className="border-b border-border/30 bg-background">
        <div className="mx-auto max-w-7xl px-6 pt-6 pb-10 lg:px-10 lg:pt-8 lg:pb-14">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
            <Link href="/" className="transition-colors hover:text-foreground">
              Home
            </Link>
            <span>/</span>
            <Link href="/treatments" className="transition-colors hover:text-foreground">
              Treatments
            </Link>
            <span>/</span>
            <span className="text-foreground">IV Therapy</span>
          </nav>

          {/* Title */}
          <h1 className="mt-6 font-serif text-[42px] leading-[1] tracking-tight text-foreground md:text-[56px] lg:text-[72px]">
            IV THERAPY
          </h1>

          {/* Treatment Options Row */}
          <div className="mt-10 overflow-x-auto">
            <div className="flex gap-6 pb-2 md:gap-8 lg:gap-10">
              {ivTreatments.map((treatment) => (
                <button
                  key={treatment.name}
                  className="group flex shrink-0 flex-col items-center gap-3"
                >
                  <div className="relative h-20 w-20 overflow-hidden rounded-full border-2 border-transparent transition-all group-hover:border-cognac md:h-24 md:w-24">
                    <Image
                      src={treatment.image}
                      alt={treatment.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <span className="max-w-[100px] text-center text-xs leading-tight text-muted-foreground transition-colors group-hover:text-foreground">
                    {treatment.name}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── INTRO SECTION ────────────────────────────────────────────── */}
      <section className="bg-background">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-24">
          <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-20">
            {/* Left - Content */}
            <div>
              <h2 className="font-serif text-[32px] leading-[1.1] tracking-tight text-foreground md:text-[40px] lg:text-[48px]">
                GIVE YOUR BODY
                <br />
                THE NUTRIENTS IT
                <br />
                NEEDS
              </h2>

              <p className="mt-8 text-base leading-relaxed text-muted-foreground">
                Life gets hectic. You have work, family, social commitments, and 
                everything else life throws at you. It can be hard to track what 
                you eat and ensure you&apos;re getting all the vitamins and nutrients 
                you need. Even with supplements, our digestive tracts may not 
                fully absorb these nutrients — leaving us feeling constantly tired, 
                weak, and lacking the energy to get things done.
              </p>

              <p className="mt-5 text-base leading-relaxed text-muted-foreground">
                IV Therapy at Glovive is a simple solution that infuses the 
                vitamins you need directly into your bloodstream for immediate 
                revitalization and 100% absorption.
              </p>
            </div>

            {/* Right - Image */}
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl lg:aspect-square">
              <Image
                src="/images/service-iv-hydration.jpg"
                alt="IV Therapy session at Glovive"
                fill
                priority
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── TREATED CONCERNS ─────────────────────────────────────────── */}
      <section className="border-y border-border/30 bg-background">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-24">
          <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-20">
            {/* Left - Concerns List */}
            <div>
              <h3 className="text-[11px] uppercase tracking-[0.28em] text-muted-foreground">
                Treated Concerns
              </h3>
              <ul className="mt-8 space-y-4">
                {treatedConcerns.map((concern) => (
                  <li key={concern} className="flex items-center gap-4">
                    <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded border border-foreground/20">
                      <Check className="h-3.5 w-3.5 text-foreground" strokeWidth={2} />
                    </div>
                    <span className="text-base text-foreground">{concern}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right - Image */}
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
              <Image
                src="/images/collection-iv.jpg"
                alt="IV drip therapy"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── BENEFITS ─────────────────────────────────────────────────── */}
      <section className="bg-background">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-24">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
            {/* Left - Image */}
            <div className="relative aspect-square overflow-hidden rounded-2xl">
              <Image
                src="/images/iv-benefits.jpg"
                alt="Benefits of IV therapy"
                fill
                className="object-cover"
              />
            </div>

            {/* Right - Benefits */}
            <div>
              <h3 className="text-[11px] uppercase tracking-[0.28em] text-muted-foreground">
                Benefits
              </h3>
              <ul className="mt-8 space-y-5">
                {benefits.map((benefit) => (
                  <li key={benefit} className="flex items-center gap-4">
                    <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded border border-foreground/20">
                      <Check className="h-3.5 w-3.5 text-foreground" strokeWidth={2} />
                    </div>
                    <span className="text-lg text-foreground">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ──────────────────────────────────────────────── */}
      <section className="border-y border-border/30 bg-linen/30">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-24">
          <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-20">
            {/* Left - Content */}
            <div>
              <h3 className="text-[11px] uppercase tracking-[0.28em] text-muted-foreground">
                How It Works
              </h3>
              <p className="mt-6 text-base leading-relaxed text-muted-foreground">
                IV Therapy works by infusing your body with the vitamins you 
                need directly through an IV. The IV bypasses your digestive 
                tract so you get 100% of the nutrients that you need directly 
                into your bloodstream.
              </p>
              <p className="mt-5 text-base leading-relaxed text-muted-foreground">
                Just relax as we start to supplement your body and start 
                replenishing what it needs. Before you know it, you&apos;ll be
                feeling better than before as your body has the vitamins it 
                needs to operate at its peak performance levels. Your body
                will thank you for taking this revolutionary approach to your 
                overall well-being, and you&apos;ll wonder why you didn&apos;t try it 
                sooner!
              </p>
            </div>

            {/* Right - Images */}
            <div className="grid grid-cols-2 gap-4">
              <div className="relative aspect-[3/4] overflow-hidden rounded-2xl">
                <Image
                  src="/images/iv-process-1.jpg"
                  alt="IV therapy process"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-[3/4] overflow-hidden rounded-2xl">
                <Image
                  src="/images/iv-process-2.jpg"
                  alt="IV therapy session"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHAT TO EXPECT ────────────────────────────────────────────── */}
      <section className="bg-bone/40">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-24">
          <h2 className="text-center font-serif text-[32px] leading-[1.1] tracking-tight text-foreground md:text-[40px]">
            WHAT TO EXPECT
          </h2>

          <div className="mt-16 space-y-0">
            {/* Step 1 - Consultation */}
            <div className="grid items-center border-t border-border/40 lg:grid-cols-2">
              <div className="order-2 border-l border-border/40 p-8 lg:order-1 lg:p-12">
                <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                  01. Consultation
                </span>
                <h3 className="mt-4 font-serif text-2xl text-foreground">
                  01. CONSULTATION
                </h3>
                <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                  Every treatment at Glovive is personalized. While no formal 
                  consultation is required for IV therapy, we take time to 
                  understand your wellness goals and any health considerations 
                  to tailor the perfect blend for you.
                </p>
              </div>
              <div className="relative order-1 aspect-[4/3] overflow-hidden lg:order-2 lg:aspect-auto lg:h-full">
                <Image
                  src="/images/iv-consultation.jpg"
                  alt="Consultation at Glovive"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Step 2 - Build Your Treatment Plan */}
            <div className="grid items-center border-t border-border/40 lg:grid-cols-2">
              <div className="relative aspect-[4/3] overflow-hidden lg:aspect-auto lg:h-full">
                <Image
                  src="/images/iv-treatment-plan.jpg"
                  alt="Build your treatment plan"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="border-l border-border/40 p-8 lg:p-12">
                <h3 className="font-serif text-2xl text-foreground md:text-3xl">
                  BUILD YOUR
                  <br />
                  TREATMENT PLAN
                </h3>
                <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                  Our experts will help you create a personized treatment plan
                  tailored to your unique needs. Whether you&apos;re looking for 
                  energy, recovery, or beauty benefits, we&apos;ll design the 
                  perfect IV therapy regimen for you.
                </p>
                <Link
                  href="/booking"
                  className="group mt-6 inline-flex items-center gap-2 rounded-full border border-foreground px-6 py-3 text-[11px] uppercase tracking-[0.2em] text-foreground transition-all hover:bg-foreground hover:text-background"
                >
                  Get Started
                  <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── PRE & POST CARE ───────────────────────────────────────────── */}
      <section className="bg-background">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-24">
          <div className="grid gap-12 md:grid-cols-2 md:gap-16">
            {/* Pre-Care */}
            <div>
              <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                Pre-Care Instructions
              </p>
              <h3 className="mt-3 font-serif text-2xl text-foreground md:text-3xl">
                HOW TO PREPARE
              </h3>

              {/* What to Do */}
              <div className="mt-8">
                <div className="flex items-center gap-2">
                  <div className="flex h-5 w-5 items-center justify-center rounded-full bg-foreground">
                    <Check className="h-3 w-3 text-background" strokeWidth={2.5} />
                  </div>
                  <span className="text-sm font-medium text-foreground">What to Do</span>
                </div>
                <ul className="mt-4 space-y-3 pl-7">
                  <li className="text-base text-muted-foreground">
                    Drink plenty of water before your appointment.
                  </li>
                  <li className="text-base text-muted-foreground">
                    Eat a light snack about an hour before.
                  </li>
                  <li className="text-base text-muted-foreground">
                    Wear comfortable clothing with short sleeves.
                  </li>
                </ul>
              </div>

              {/* What to Avoid */}
              <div className="mt-8">
                <div className="flex items-center gap-2">
                  <div className="flex h-5 w-5 items-center justify-center rounded-full bg-foreground">
                    <X className="h-3 w-3 text-background" strokeWidth={2.5} />
                  </div>
                  <span className="text-sm font-medium text-foreground">What to Avoid</span>
                </div>
                <ul className="mt-4 space-y-3 pl-7">
                  <li className="text-base text-muted-foreground">
                    Do not drink alcohol or use tobacco 24 hours before.
                  </li>
                  <li className="text-base text-muted-foreground">
                    Avoid getting other infusions on the day of your appointment.
                  </li>
                  <li className="text-base text-muted-foreground">
                    Do not fast before your appointment.
                  </li>
                </ul>
              </div>
            </div>

            {/* Post-Care */}
            <div>
              <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                Post-Care Instructions
              </p>
              <h3 className="mt-3 font-serif text-2xl text-foreground md:text-3xl">
                AFTERCARE
              </h3>

              {/* What to Do */}
              <div className="mt-8">
                <div className="flex items-center gap-2">
                  <div className="flex h-5 w-5 items-center justify-center rounded-full bg-foreground">
                    <Check className="h-3 w-3 text-background" strokeWidth={2.5} />
                  </div>
                  <span className="text-sm font-medium text-foreground">What to Do</span>
                </div>
                <ul className="mt-4 space-y-3 pl-7">
                  <li className="text-base text-muted-foreground">
                    Move your arm occasionally to prevent soreness.
                  </li>
                  <li className="text-base text-muted-foreground">
                    Continue to drink plenty of water.
                  </li>
                  <li className="text-base text-muted-foreground">
                    Get plenty of rest after your appointment.
                  </li>
                </ul>
              </div>

              {/* What to Avoid */}
              <div className="mt-8">
                <div className="flex items-center gap-2">
                  <div className="flex h-5 w-5 items-center justify-center rounded-full bg-foreground">
                    <X className="h-3 w-3 text-background" strokeWidth={2.5} />
                  </div>
                  <span className="text-sm font-medium text-foreground">What to Avoid</span>
                </div>
                <ul className="mt-4 space-y-3 pl-7">
                  <li className="text-base text-muted-foreground">
                    Avoid excessive exercise for 24 hours.
                  </li>
                  <li className="text-base text-muted-foreground">
                    Try not to expose the injection site to direct sunlight.
                  </li>
                  <li className="text-base text-muted-foreground">
                    Do not drink alcohol or use tobacco for 24 hours.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── RELATED TREATMENTS ────────────────────────────────────────── */}
      <section className="border-y border-border/30 bg-linen/30">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-24">
          <h2 className="text-center font-serif text-[32px] leading-[1.1] tracking-tight text-foreground md:text-[40px]">
            RELATED TREATMENTS
          </h2>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {relatedTreatments.map((treatment) => (
              <Link
                key={treatment.name}
                href={treatment.href}
                className="group relative aspect-[4/3] overflow-hidden rounded-lg"
              >
                <Image
                  src={treatment.image}
                  alt={treatment.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="font-serif text-xl text-white">{treatment.name}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ───────────────────────────────────────────────────────── */}
      <section className="bg-background">
        <div className="mx-auto max-w-3xl px-6 py-16 lg:px-10 lg:py-24">
          <h2 className="text-center font-serif text-[32px] leading-[1.1] tracking-tight text-foreground md:text-[40px]">
            FREQUENTLY ASKED QUESTIONS
          </h2>

          <Accordion type="single" collapsible className="mt-12">
            {faqs.map((faq, idx) => (
              <AccordionItem key={idx} value={`faq-${idx}`} className="border-border/40">
                <AccordionTrigger className="py-5 text-left font-serif text-lg text-foreground hover:no-underline">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-base leading-relaxed text-muted-foreground">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* ── BOTTOM CTA ────────────────────────────────────────────────── */}
      <section className="bg-pine">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-24">
          <div className="flex flex-col items-center text-center">
            <h2 className="font-serif text-[32px] leading-[1.1] text-linen md:text-[44px]">
              Ready to Restore &amp; Replenish?
            </h2>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-bone/70">
              We welcome the opportunity to thoughtfully design a treatment plan 
              aligned with your wellness goals. Book a session or reach out — 
              our team is here to guide you.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/booking"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-cognac px-8 py-4 text-[11px] uppercase tracking-[0.22em] text-primary-foreground transition-all hover:bg-cognac-dark"
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
