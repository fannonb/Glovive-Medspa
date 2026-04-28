"use client"

import Image from "next/image"
import Link from "next/link"
import {
  ArrowLeft,
  ArrowUpRight,
  Plus,
  CheckCircle2,
  Info,
  RefreshCw,
  Clock,
  CalendarCheck,
  Scale,
  Stethoscope,
  HeartPulse
} from "lucide-react"

/** Quick Facts for Hero Bar */
const quickFacts = [
  { icon: Info, label: "Consultation Required?", value: "Yes" },
  { icon: RefreshCw, label: "Frequency", value: "Weekly" },
  { icon: Clock, label: "Treatment Length", value: "Varies" },
  { icon: CalendarCheck, label: "Results Duration", value: "Long-term" },
]

const benefits = [
  "Reduced appetite and cravings",
  "Increased fullness after meals",
  "More stable blood sugar response",
  "Gradual, sustainable weight loss",
  "Clinically guided, personalized care"
]

const faqItems = [
  {
    q: "What is GLP-1 therapy used for?",
    a: "GLP-1 medications help regulate appetite, fullness, and blood sugar to support weight loss and metabolic health.",
  },
  {
    q: "How soon will I notice changes?",
    a: "Many patients notice appetite changes within the first few weeks, with gradual weight changes over time.",
  },
  {
    q: "Will I need to change my lifestyle?",
    a: "No extreme changes are required. Healthy habits are encouraged and become easier to maintain with treatment support.",
  },
  {
    q: "Are there side effects?",
    a: "Some patients may experience mild digestive symptoms early in treatment, which often improve as the body adjusts.",
  },
  {
    q: "Is this right for me?",
    a: "A consultation is required to determine eligibility and create a safe, personalized treatment plan.",
  },
]

export default function BodyBalancePage() {
  return (
    <div className="bg-linen min-h-screen">
      {/* 1. HERO SECTION */}
      <section className="relative w-full h-[55vh] min-h-[500px] flex flex-col justify-center bg-ink">
        <Image
          src="/images/hero-secondary.png"
          alt="Body Balance GLP-1 Therapy"
          fill
          priority
          className="object-cover opacity-50 object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/20 to-transparent" />
        
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-10 pb-20 lg:pb-24 text-center md:text-left">
          <Link href="/treatments" className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.22em] text-bone/70 hover:text-bone mb-6 transition-colors">
            <ArrowLeft className="w-4 h-4" /> All Collections
          </Link>
          <span className="block text-[11px] uppercase tracking-[0.3em] text-cognac mb-4">Collection 03</span>
          <h1 className="font-serif text-[48px] md:text-[72px] lg:text-[84px] leading-[1] text-linen">
            The Body <br className="hidden md:block" />
            <em className="italic font-light text-cognac">Balance</em>
          </h1>
        </div>

        {/* STATS BAR */}
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

      {/* 2. INTRO SECTION */}
      <section className="bg-linen py-20 lg:py-32 relative overflow-hidden">
        <div className="absolute -left-32 top-10 w-96 h-96 rounded-full bg-cognac/[0.04] blur-3xl pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-6 lg:px-10 flex flex-col lg:flex-row gap-12 lg:gap-20 items-start relative z-10">
          <div className="lg:w-[45%]">
            <h2 className="font-serif text-[36px] md:text-[48px] leading-[1.1] text-ink tracking-tight">
              Effortless Weight Loss, <br/>
              <span className="italic text-cognac">Elevated</span>
            </h2>
          </div>
          <div className="lg:w-[55%] space-y-6 text-[15px] leading-[1.8] text-ink/80">
            <p>
              With so many weight loss options available today, it can be hard to know what actually works. GLP-1 receptor agonist injections are a once-weekly, medically guided treatment designed to support steady, sustainable weight loss.
            </p>
            <p>
              These medications work by helping your body better manage hunger, blood sugar, and digestion. After you eat, they help your body release insulin more effectively when needed, which supports healthier blood sugar levels. They also reduce signals that increase blood sugar and slow down how quickly food leaves your stomach. This helps you feel full longer after meals and can naturally reduce cravings and overeating.
            </p>
            <div className="p-6 bg-bone/40 border-l-2 border-cognac/50 rounded-r-lg">
              <p className="italic text-ink/90 font-medium">
                Rather than relying on willpower alone, GLP-1 therapy works with your body&apos;s own systems to help regulate appetite and support more consistent, long-term weight management in a structured and supported way.
              </p>
            </div>
            <p className="font-medium text-ink">
              With The Body Balance, we take a modern, medically guided approach to weight management—helping you feel more in control of hunger, more aligned with your goals, and more supported in your journey.
            </p>
          </div>
        </div>
      </section>

      {/* 3. BENEFITS */}
      <section className="bg-bone/40 py-16 lg:py-24 border-y border-border/50">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-[5fr_7fr] gap-12 lg:gap-20 items-center">
          {/* Left: Distinctive Image Crop */}
          <div className="relative aspect-square md:aspect-[4/3] lg:aspect-square rounded-[2rem] rounded-tl-none overflow-hidden border-8 border-linen shadow-sm order-2 lg:order-1">
            <Image 
              src="/images/service-card-balance.png" 
              alt="GLP-1 Weight Management Benefits"
              fill
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="object-cover"
            />
          </div>

          {/* Right: Benefits Content */}
          <div className="order-1 lg:order-2">
            <span className="text-[11px] uppercase tracking-[0.2em] text-cognac">The Results</span>
            <h2 className="mt-3 mb-6 font-serif text-[32px] md:text-[42px] text-ink">A More Balanced Approach to Weight Loss</h2>
            <p className="text-[15px] leading-[1.8] text-ink/75 mb-8">
              GLP-1 therapy is designed to work with your body—not against it. By supporting natural appetite and metabolic signals, it helps make healthy choices feel more achievable and less restrictive.
            </p>
            
            <div className="bg-linen border border-border/60 rounded-xl p-6 lg:p-8 shadow-sm">
              <ul className="space-y-4">
                {benefits.map((item) => (
                  <li key={item} className="flex gap-4 text-[15px] leading-relaxed text-ink/80">
                    <CheckCircle2 className="w-5 h-5 text-cognac shrink-0 mt-0.5" strokeWidth={1.5} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 4. JOURNEY */}
      <section className="bg-linen py-20 lg:py-32 relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="text-center mb-16 lg:mb-24">
            <span className="text-[11px] uppercase tracking-[0.2em] text-cognac">Your Journey</span>
            <h2 className="mt-3 font-serif text-[32px] md:text-[42px] text-ink">
              Begin Your Journey with <br className="hidden md:block" />
              <em className="italic text-cognac">The Body Balance</em>
            </h2>
            <p className="mt-4 text-[15px] text-ink/70">Personalized GLP-1 Treatment Plans Available</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 lg:gap-10 relative">
            <div className="bg-bone/40 border border-border/50 p-8 rounded-2xl relative overflow-hidden group hover:border-cognac/30 transition-colors">
              <div className="absolute top-0 right-0 p-8 opacity-5">
                <Stethoscope className="w-24 h-24 text-cognac" />
              </div>
              <div className="relative z-10">
                <span className="flex items-center justify-center w-10 h-10 rounded-full bg-cognac/10 text-cognac font-serif text-lg mb-6">01</span>
                <h3 className="font-serif text-[22px] text-ink mb-4">Consultation & Evaluation</h3>
                <p className="text-[14px] leading-[1.7] text-ink/75">
                  Your journey begins with a comprehensive medical consultation. We take time to understand your health history, goals, and lifestyle to determine if GLP-1 therapy is the right fit for you.
                </p>
              </div>
            </div>

            <div className="bg-bone/40 border border-border/50 p-8 rounded-2xl relative overflow-hidden group hover:border-cognac/30 transition-colors">
              <div className="absolute top-0 right-0 p-8 opacity-5">
                <Scale className="w-24 h-24 text-cognac" />
              </div>
              <div className="relative z-10">
                <span className="flex items-center justify-center w-10 h-10 rounded-full bg-cognac/10 text-cognac font-serif text-lg mb-6">02</span>
                <h3 className="font-serif text-[22px] text-ink mb-4">Personalized Treatment</h3>
                <p className="text-[14px] leading-[1.7] text-ink/75">
                  If appropriate, your provider will create a customized GLP-1 plan tailored specifically to your needs. Your treatment is carefully dosed, medically guided, and adjusted over time to support steady, sustainable progress.
                </p>
              </div>
            </div>

            <div className="bg-bone/40 border border-border/50 p-8 rounded-2xl relative overflow-hidden group hover:border-cognac/30 transition-colors">
              <div className="absolute top-0 right-0 p-8 opacity-5">
                <HeartPulse className="w-24 h-24 text-pine" />
              </div>
              <div className="relative z-10">
                <span className="flex items-center justify-center w-10 h-10 rounded-full bg-pine/10 text-pine font-serif text-lg mb-6">03</span>
                <h3 className="font-serif text-[22px] text-ink mb-4">Ongoing Care & Support</h3>
                <p className="text-[14px] leading-[1.7] text-ink/75 mb-4">
                  We continue to support you beyond your appointment. You&apos;ll receive ongoing guidance, check-ins, and personalized adjustments.
                </p>
                <ul className="space-y-2 mt-4 pt-4 border-t border-border/50">
                  <li className="flex gap-2 text-[13px] text-ink/70 items-center"><div className="w-1.5 h-1.5 rounded-full bg-pine/60 shrink-0" /> Support with managing side effects</li>
                  <li className="flex gap-2 text-[13px] text-ink/70 items-center"><div className="w-1.5 h-1.5 rounded-full bg-pine/60 shrink-0" /> Regular progress monitoring</li>
                  <li className="flex gap-2 text-[13px] text-ink/70 items-center"><div className="w-1.5 h-1.5 rounded-full bg-pine/60 shrink-0" /> Lifestyle and nutrition guidance</li>
                  <li className="flex gap-2 text-[13px] text-ink/70 items-center"><div className="w-1.5 h-1.5 rounded-full bg-pine/60 shrink-0" /> Dose adjustments for optimal results</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. PRICING & REAL LIFE INFO */}
      <section className="bg-bone/50 py-20 lg:py-32 border-y border-border/50" id="glp1-pricing">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
          <div className="lg:w-1/2">
            <div className="bg-linen border border-border/60 p-8 lg:p-12 rounded-3xl shadow-sm">
              <span className="text-[11px] uppercase tracking-[0.2em] text-cognac">Investment</span>
              <h2 className="mt-3 mb-6 font-serif text-[32px] md:text-[40px] text-ink leading-tight">Transparent Pricing, Tailored to You</h2>
              <p className="text-[15px] text-ink/75 mb-8">
                Because every plan is personalized, pricing is discussed during your consultation. Your plan is designed with clarity, safety, and long-term success in mind.
              </p>
              
              <ul className="space-y-5">
                <li className="flex gap-4 text-[15px] text-ink/80 items-start">
                  <CheckCircle2 className="w-5 h-5 text-cognac shrink-0 mt-0.5" strokeWidth={1.5} />
                  Initial medical evaluation required
                </li>
                <li className="flex gap-4 text-[15px] text-ink/80 items-start">
                  <CheckCircle2 className="w-5 h-5 text-cognac shrink-0 mt-0.5" strokeWidth={1.5} />
                  Customized monthly treatment plans
                </li>
                <li className="flex gap-4 text-[15px] text-ink/80 items-start">
                  <CheckCircle2 className="w-5 h-5 text-cognac shrink-0 mt-0.5" strokeWidth={1.5} />
                  Ongoing provider support and monitoring
                </li>
              </ul>
            </div>
          </div>
          <div className="lg:w-1/2">
             <span className="text-[11px] uppercase tracking-[0.2em] text-pine">The Philosophy</span>
             <h3 className="mt-3 font-serif text-[28px] md:text-[34px] text-ink mb-6">Designed for Real Life</h3>
             <p className="text-[15px] leading-[1.8] text-ink/75 mb-6">
                This is not a one-size-fits-all program. Your treatment is tailored, monitored, and adjusted to support your individual needs—so progress feels natural, steady, and maintainable.
             </p>
             <p className="text-[15px] leading-[1.8] text-ink/75">
                Our medically guided approach ensures that you are supported through every phase of your journey, blending scientific innovation with compassionate care.
             </p>
          </div>
        </div>
      </section>

      {/* 6. FAQ */}
      <section className="bg-linen py-20 lg:py-32">
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

      {/* 7. CTA */}
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
