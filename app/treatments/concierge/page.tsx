"use client"

import Image from "next/image"
import Link from "next/link"
import {
  ArrowLeft,
  ArrowUpRight,
  Plus,
  ShieldCheck,
  Stethoscope,
  MapPin,
  Users,
  Check,
  CalendarCheck,
  Navigation,
  Clock,
  AlertCircle
} from "lucide-react"

const features = [
  "Travel to your location",
  "Full IV setup & equipment",
  "Personalized one-on-one care",
  "Same high-quality treatments",
  "Flexible scheduling",
  "Privacy in your own space",
]

const notes = [
  {
    icon: CalendarCheck,
    title: "Appointment Required",
    desc: "All concierge visits are by appointment only. Book in advance to secure your preferred time.",
  },
  {
    icon: Navigation,
    title: "Travel Fee Applies",
    desc: "A travel fee is added based on your location. We will confirm the exact amount at booking.",
  },
  {
    icon: Clock,
    title: "Extended Travel",
    desc: "A minimum booking may be required for locations beyond our standard service radius.",
  },
  {
    icon: AlertCircle,
    title: "Same-Day Availability",
    desc: "Same-day bookings are subject to team availability. We recommend booking 24 hours ahead.",
  },
]

const quickFacts = [
  { icon: ShieldCheck, label: "Consultation Required?", value: "Health Intake" },
  { icon: Stethoscope, label: "Administered by", value: "Licensed Providers" },
  { icon: MapPin, label: "Location", value: "Your Choice" },
  { icon: Users, label: "Groups & Events", value: "Available" },
]

const groupDiscounts = [
  { name: "2 People", discount: "5% Off" },
  { name: "3 People", discount: "10% Off" },
  { name: "4 People", discount: "15% Off" },
  { name: "5 People", discount: "20% Off" },
  { name: "6–10 People", discount: "25% Off" },
  { name: "More than 10?", discount: "Contact Us" },
]

const faqItems = [
  {
    q: "Is IV therapy painful?",
    a: "A brief pinch may be felt during IV placement, but most clients find the experience comfortable and relaxing from start to finish."
  },
  {
    q: "How long does a session take?",
    a: "Most Concierge IV Hydration sessions last 30–60 minutes, depending on your personalized infusion."
  },
  {
    q: "What does the experience feel like?",
    a: "You’ll relax in a calm, elevated setting while your body receives hydration and nutrients. Many clients describe the experience as refreshing and restorative."
  },
  {
    q: "What are the benefits of IV therapy?",
    a: "IV therapy supports hydration, energy, immunity, recovery, skin health, and overall wellness by delivering nutrients directly into your bloodstream."
  },
  {
    q: "How quickly will I feel results?",
    a: "Many clients notice benefits shortly after treatment, including improved energy, hydration, and mental clarity."
  },
  {
    q: "How often should I receive IV therapy?",
    a: "Frequency varies based on your goals. Some clients come weekly, while others prefer bi-weekly or monthly wellness support."
  },
  {
    q: "Can I receive IV therapy more than once a month?",
    a: "Yes. Your provider will guide a schedule that aligns with your wellness needs and lifestyle."
  },
  {
    q: "Do I need a consultation first?",
    a: "Yes. A medical screening is required to ensure your treatment is safe and tailored to your individual needs."
  },
  {
    q: "Who administers the treatment?",
    a: "All IV infusions are administered by licensed professionals, including RN, APRN, or PA, under medical guidance."
  },
  {
    q: "Is IV therapy safe?",
    a: "Yes. Treatments are provided in accordance with clinical standards and are based on your health history and provider recommendations."
  },
  {
    q: "Where can I receive treatment?",
    a: "We bring wellness to you—whether at home, in a hotel, at the office, or at a private event."
  },
  {
    q: "Can this be done for groups or events?",
    a: "Absolutely. Concierge IV therapy is perfect for group wellness experiences, celebrations, retreats, and special occasions."
  },
  {
    q: "Can I drive after my session?",
    a: "Yes, most IV hydration treatments allow you to resume normal activities immediately unless otherwise advised."
  },
  {
    q: "Are there any side effects?",
    a: "Side effects are minimal but may include slight bruising or a cooling sensation during infusion. Your licensed professional will review everything with you beforehand."
  }
]

export default function ConciergeIVPage() {
  return (
    <div className="bg-linen min-h-screen">
      {/* 1. HERO SECTION */}
      <section className="relative w-full h-[60vh] min-h-[500px] flex flex-col justify-center bg-ink">
        <Image
          src="/images/collection-concierge.jpg"
          alt="Concierge IV Hydration Therapy"
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
            Concierge IV <br className="hidden md:block" />
            <em className="italic font-light text-gold drop-shadow-[0_2px_8px_rgba(0,0,0,0.4)]">Hydration</em>
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
              Hydration Elevated—<br/>
              <span className="italic text-cognac">Delivered to You</span>
            </h2>
          </div>
          <div className="lg:w-[55%] space-y-6 text-[15px] leading-[1.8] text-ink/80">
            <p className="font-medium text-[16px] text-ink/90">
              Energy, Glow, and Clarity Delivered to You
            </p>
            <p>
              Whether you&apos;re in the mood for a personal reset or planning a private retreat, celebrating a special occasion, preparing for an event, or enjoying time with friends, GloVive Concierge IV Hydration brings elevated wellness directly to you.
            </p>
            <p>
              Experience personalized IV therapy in the comfort of your home, hotel, event space, or private venue—featuring customized infusions thoughtfully designed by our medical team and administered by licensed clinical professionals.
            </p>
            <p>
              Luxury IV therapy, administered by licensed medical professionals across Columbia, Maryland, Howard County, Montgomery County, Prince George County, and Anne Arundel County.
            </p>
            <div className="p-6 bg-bone/40 border-l-2 border-cognac/50 rounded-r-lg">
              <p className="italic text-ink/90 font-medium">
                At GloVive, our concierge IV therapies unite medical expertise with refined, white-glove service—offering tailored hydration, cellular restoration, and performance support, all delivered seamlessly to your preferred setting.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 2.5 THE EXPERIENCE & HOW IT WORKS */}
      <section className="bg-bone/40 py-20 lg:py-32 border-t border-border/50">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
            
            {/* The Experience (Features) */}
            <div>
              <span className="text-[11px] uppercase tracking-[0.2em] text-cognac">The Experience</span>
              <h2 className="mt-3 font-serif text-[32px] md:text-[42px] text-ink mb-6">Uncompromising Care</h2>
              <p className="text-[15px] leading-relaxed text-ink/70 mb-8">
                Enjoy your favorite GloVive treatments in a private, convenient setting with one-on-one care from our medical team.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {features.map((f) => (
                  <div key={f} className="flex items-start gap-3 p-5 bg-background border border-border/60 rounded-xl transition-colors hover:border-cognac/30">
                    <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-cognac/10">
                      <Check className="h-3 w-3 text-cognac" strokeWidth={2.5} />
                    </div>
                    <span className="text-[14px] text-ink/80 font-medium">{f}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* How It Works */}
            <div>
              <div className="rounded-3xl border border-cognac/30 bg-linen p-8 md:p-12 shadow-sm relative overflow-hidden h-full">
                <div className="absolute right-0 top-0 w-64 h-64 bg-cognac/[0.04] rounded-full blur-3xl -mr-10 -mt-10" />
                <h2 className="relative z-10 font-serif text-[32px] text-ink mb-10">How It Works</h2>
                <div className="relative z-10 space-y-10">
                  {[
                    { step: "01", title: "Book Your Appointment", desc: "Choose your treatment and preferred date, time, and location." },
                    { step: "02", title: "We Come to You", desc: "Our medical team arrives with all equipment and supplies." },
                    { step: "03", title: "Relax & Restore", desc: "Enjoy your treatment in the comfort of your own space." },
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
                </div>
              </div>
            </div>
            
          </div>

          {/* Good to Know */}
          <div className="mt-24">
            <div className="text-center mb-12">
              <span className="text-[11px] uppercase tracking-[0.2em] text-cognac">Concierge Policies</span>
              <h3 className="mt-3 font-serif text-[28px] md:text-[36px] text-ink">Good to Know</h3>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {notes.map((n) => {
                const NoteIcon = n.icon
                return (
                  <div
                    key={n.title}
                    className="flex flex-col items-center text-center gap-4 rounded-2xl border border-border/50 bg-background p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:border-cognac/30 group"
                  >
                    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-cognac/10 transition-colors group-hover:bg-cognac/20">
                      <NoteIcon className="h-6 w-6 text-cognac" strokeWidth={1.5} />
                    </div>
                    <div>
                      <p className="font-serif text-[20px] text-ink mb-3">{n.title}</p>
                      <p className="text-[14px] leading-[1.7] text-ink/65">{n.desc}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* 3. GROUP DISCOUNTS */}
      <section className="bg-bone/30 py-20 lg:py-32 border-y border-border/50">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-12 gap-12 lg:gap-20">
          <div className="lg:col-span-4 lg:sticky lg:top-32 self-start">
            <span className="text-[11px] uppercase tracking-[0.2em] text-cognac">Group Wellness</span>
            <h2 className="mt-3 font-serif text-[36px] md:text-[42px] leading-[1.1] text-ink mb-6">
              Group Discount Packages
            </h2>
            <p className="text-[15px] leading-relaxed text-ink/70 mb-8">
              Elevate your next gathering with our specialized group wellness experiences. The more people that join, the larger your discount.
            </p>
            <p className="text-[12px] uppercase tracking-[0.1em] text-ink/50 font-medium mb-8">
              Travel expense calculated during booking
            </p>
            <Link
              href="/booking"
              className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.2em] text-cognac hover:text-cognac-dark transition-colors font-medium"
            >
              Book For Your Group <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
          
          <div className="lg:col-span-8 flex flex-col gap-4">
            {groupDiscounts.map((discount, index) => (
              <div
                key={discount.name}
                className="group relative overflow-hidden flex flex-col sm:flex-row sm:items-center justify-between gap-6 rounded-2xl border border-border/60 bg-background hover:border-cognac/30 p-6 md:p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_15px_40px_-15px_rgba(67,40,20,0.1)]"
              >
                <div className="relative z-10 flex-1">
                  <div className="flex items-center gap-4">
                    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-cognac/5 text-cognac font-serif text-lg">
                      {index + 1}
                    </span>
                    <h3 className="font-serif text-[22px] md:text-[26px] leading-tight text-ink">{discount.name}</h3>
                  </div>
                </div>
                
                <div className="relative z-10 sm:text-right shrink-0 border-t sm:border-t-0 sm:border-l border-border/50 pt-4 sm:pt-0 sm:pl-8 flex justify-end">
                  <p className="font-serif text-[24px] md:text-[28px] text-cognac">{discount.discount}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. FAQ */}
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

      {/* 4.5 AVAILABLE TREATMENTS */}
      <section className="bg-bone/30">
        <div className="mx-auto max-w-7xl px-6 py-14 lg:px-10 lg:py-20 border-b border-border/50">
          <div className="mx-auto max-w-4xl text-center bg-background border border-border/60 rounded-3xl p-10 lg:p-16 shadow-[0_10px_40px_-20px_rgba(67,40,20,0.1)] relative overflow-hidden">
            <div className="absolute left-0 top-0 w-64 h-64 bg-cognac/[0.03] rounded-full blur-3xl" />
            <div className="relative z-10">
              <span className="text-[11px] uppercase tracking-[0.2em] text-cognac">Menu</span>
              <h2 className="mt-3 font-serif text-[32px] md:text-[42px] text-ink mb-4">
                Available <em className="italic text-cognac">Treatments</em>
              </h2>
              <p className="text-[15px] leading-relaxed text-ink/70 max-w-2xl mx-auto mb-8">
                All of our IV Nutrient Hydration treatments are available for concierge service. Choose from our full menu of signature infusions.
              </p>
              <Link
                href="/treatments/iv-hydration"
                className="inline-flex items-center gap-2 rounded-full border border-cognac/30 px-8 py-4 text-[11px] uppercase tracking-[0.2em] text-ink transition-colors hover:border-cognac hover:text-cognac hover:bg-cognac/5"
              >
                View IV Hydration Menu
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 5. CTA */}
      <section className="bg-pine py-20 lg:py-32 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-bone/5 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-4xl mx-auto px-6 lg:px-10 text-center relative z-10">
          <h2 className="font-serif text-[36px] md:text-[48px] leading-[1.1] text-linen mb-6">
            Wellness, <em className="italic text-gold">wherever you are.</em>
          </h2>
          <p className="text-[16px] leading-[1.8] text-bone/80 max-w-2xl mx-auto mb-10">
            Book your concierge appointment and we&apos;ll bring the GloVive experience to you.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/booking"
              className="inline-flex items-center gap-2 rounded-full bg-cognac px-8 py-4 text-[11px] uppercase tracking-[0.2em] text-primary-foreground transition-colors hover:bg-cognac-dark"
            >
              Book Concierge <ArrowUpRight className="w-4 h-4" />
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
