"use client"

import Image from "next/image"
import Link from "next/link"
import {
  ArrowLeft,
  ArrowUpRight,
  Plus,
  ExternalLink,
  ShieldCheck,
  Stethoscope,
  HeartPulse,
  Clock
} from "lucide-react"

const quickFacts = [
  { icon: ShieldCheck, label: "Consultation Required?", value: "Health Intake" },
  { icon: Stethoscope, label: "Administered by", value: "Licensed Providers" },
  { icon: HeartPulse, label: "Setting", value: "Safe & Monitored" },
  { icon: Clock, label: "Sessions Needed", value: "6 Initial Recommended" },
]

const whatToExpect = [
  {
    title: "Consultation & Assessment",
    content: "Your journey begins with a private consultation where we take time to understand your symptoms, medical history, and overall wellness goals. We discuss concerns such as depression, anxiety, PTSD, chronic pain, and other treatment-resistant conditions, along with your current medications, allergies, past surgeries, and previous treatments. This helps our medical team determine if ketamine therapy is the right fit for you and allows us to create a personalized treatment plan."
  },
  {
    title: "The Infusion Experience",
    content: "Ketamine is administered through a carefully monitored IV infusion in a calm, comfortable, and supportive setting designed to promote healing. You’ll relax in our reclining treatment chair while your body and mind are given the opportunity to reset in a peaceful environment."
  },
  {
    title: "Safety & Monitoring",
    content: "During your treatment, our licensed clinical team closely monitors your heart rhythm, blood pressure, pulse, and oxygen levels to ensure your safety and comfort. You will remain awake throughout the infusion, but most patients describe feeling deeply relaxed and mentally at ease."
  },
  {
    title: "Post-Treatment Care",
    content: "Because temporary drowsiness may occur after treatment, we ask that you arrange for someone to drive you home. Most patients find that the immediate effects wear off within a few hours."
  },
  {
    title: "Recommended Care Plan",
    content: "For best results, ketamine therapy is typically recommended as a series of six initial infusions over a two- to four-week period, with one to three treatments per week depending on your personalized care plan. After your initial series, we continue to monitor your progress with follow-up visits and ongoing support. Some patients experience lasting relief, while others may benefit from occasional booster infusions. If there is little to no improvement after the first several treatments, our provider will reassess your response and recommend the best next steps. Our priority is always honest, personalized care focused on what is truly best for your health."
  }
]

const faqItems = [
  {
    q: "Is ketamine FDA-approved?",
    a: "Ketamine is FDA-approved as an anesthetic and for certain medical uses, including pain management in clinical settings. Its use for depression, anxiety, PTSD, and some chronic pain conditions is considered off-label and is performed under licensed healthcare supervision.",
  },
  {
    q: "What is ketamine IV therapy used for?",
    a: "Ketamine infusion therapy is commonly used to support treatment-resistant depression, anxiety, PTSD, chronic pain conditions, and certain mood-related disorders.",
  },
  {
    q: "How quickly will I notice results?",
    a: "Some patients notice improvement after the first few sessions, while others may benefit most from a personalized treatment series over time.",
  },
  {
    q: "Will I be awake during treatment?",
    a: "Yes. Ketamine infusions are administered in a calm, monitored setting where you remain comfortable and closely supervised throughout the session.",
  },
  {
    q: "Are there side effects?",
    a: "Some patients may experience temporary mild dizziness, nausea, fatigue, or light dissociation following treatment, which typically resolves shortly after the session.",
  },
]

const offerings = [
  {
    name: "Initial Consultation",
    description: "Personalized assessment and treatment planning with our medical team.",
    price: "$150",
  },
  {
    name: "Ketamine Infusion Session",
    description: "A guided IV experience focused on healing, clarity, and restoration in a controlled, supportive environment.",
    price: "$450 – $500",
    per: "per session",
    featured: true,
  },
  {
    name: "Wellness Reset Package",
    description: "A structured treatment plan of six sessions designed for optimal results and lasting change.",
    price: "$2,700 – $3,000",
    per: "6 sessions",
  },
  {
    name: "Maintenance Sessions",
    description: "Continued support following your initial treatment protocol to sustain your progress.",
    price: "$400",
  },
]

export default function KetamineInfusionPage() {
  return (
    <div className="bg-linen min-h-screen">
      {/* 1. HERO SECTION */}
      <section className="relative w-full h-[60vh] min-h-[500px] flex flex-col justify-center bg-ink">
        <Image
          src="/images/collection-ketamine.jpg"
          alt="Ketamine IV Infusion Therapy"
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
            Ketamine IV <br className="hidden md:block" />
            <em className="italic font-light text-gold drop-shadow-[0_2px_8px_rgba(0,0,0,0.4)]">Infusion Therapy</em>
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
              Elevated Healing <br/>
              <span className="italic text-cognac">for Mind & Body</span>
            </h2>
          </div>
          <div className="lg:w-[55%] space-y-6 text-[15px] leading-[1.8] text-ink/80">
            <p>
              Physician-tailored ketamine infusion therapy designed to help restore balance, improve quality of life, and support both physical and emotional healing.
            </p>
            <p>
              At GloVive, we offer a medically guided approach to ketamine IV infusion therapy using ketamine as an off-label treatment for conditions such as depression, anxiety, PTSD, and treatment-resistant mood disorders. While ketamine is FDA-approved as an anesthetic and is widely used in medical settings for pain management and sedation, it is also utilized in specialized clinical settings to support mental health and chronic pain relief.
            </p>
            <p>
              Each treatment plan is carefully tailored by a licensed physician and administered in a safe, controlled setting by one of our experienced Advanced Practice Registered Nurses (APRN), Physician Assistants (PA) or Registered Nurses (RN) to ensure the highest level of safety, comfort, and clinical excellence throughout your experience.
            </p>
            <div className="p-6 bg-bone/40 border-l-2 border-cognac/50 rounded-r-lg">
              <p className="italic text-ink/90 font-medium">
                Ketamine therapy may also provide support for certain chronic pain conditions by helping regulate pain pathways within the nervous system, making it a valuable option for patients seeking alternatives to traditional pain management approaches.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. WHAT TO EXPECT */}
      <section className="bg-bone/40 py-16 lg:py-24 border-y border-border/50">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-[5fr_7fr] gap-12 lg:gap-20 items-center">
          <div className="relative aspect-square md:aspect-[4/3] lg:aspect-[3/4] rounded-[2rem] rounded-tl-none overflow-hidden border-8 border-linen shadow-sm order-2 lg:order-1">
            <Image 
              src="/images/service-card-ketamine-diverse.png" 
              alt="Ketamine Therapy Experience"
              fill
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="object-cover"
            />
          </div>

          <div className="order-1 lg:order-2">
            <span className="text-[11px] uppercase tracking-[0.2em] text-cognac">Your Journey</span>
            <h2 className="mt-3 mb-10 font-serif text-[32px] md:text-[42px] text-ink">What to Expect</h2>
            
            <div className="space-y-4">
              {whatToExpect.map((step, idx) => (
                <details key={step.title} className="group bg-linen border border-border/60 rounded-xl transition-shadow hover:shadow-sm" open={idx === 0}>
                  <summary className="flex items-center justify-between p-6 cursor-pointer list-none font-serif text-[22px] text-ink">
                    <div className="flex items-center gap-4">
                      <span className="flex items-center justify-center w-8 h-8 rounded-full bg-cognac/10 text-cognac text-sm font-sans">{idx + 1}</span>
                      {step.title}
                    </div>
                    <Plus className="w-5 h-5 text-cognac transition-transform duration-300 group-open:rotate-45" />
                  </summary>
                  <div className="px-6 pb-6 pt-1">
                    <p className="text-[15px] leading-relaxed text-ink/75 border-t border-border/40 pt-4 ml-12">
                      {step.content}
                    </p>
                  </div>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4. BEGIN YOUR WELLNESS JOURNEY */}
      <section className="bg-linen py-16 lg:py-24 border-b border-border/50">
        <div className="max-w-5xl mx-auto px-6 lg:px-10">
          <div className="flex flex-col md:flex-row gap-8 items-center justify-between p-8 md:p-12 bg-background border border-border/60 rounded-3xl relative overflow-hidden">
            <div className="absolute right-0 top-0 w-64 h-64 bg-cognac/[0.03] rounded-full blur-3xl" />
            <div className="relative z-10 md:w-2/3 pr-4">
              <span className="text-[11px] uppercase tracking-[0.2em] text-cognac">Next Steps</span>
              <h3 className="font-serif text-[28px] text-ink mt-2 mb-4">Begin Your Wellness Journey</h3>
              <p className="text-[15px] text-ink/70 leading-relaxed mb-6">
                Schedule your private consultation today and discover whether ketamine IV infusion therapy may be the next step toward restoring balance, relief, and long-term wellness.
              </p>
              <div className="flex flex-col gap-3">
                <a 
                  href="https://medicine.yale.edu/news-article/ketamine-how-yale-redefined-depression-treatment/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[12px] uppercase tracking-[0.1em] text-cognac hover:text-cognac-dark font-medium transition-colors"
                >
                  <ExternalLink className="w-4 h-4" /> Yale Medicine Research
                </a>
                <a 
                  href="https://pmc.ncbi.nlm.nih.gov/articles/PMC6767816/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[12px] uppercase tracking-[0.1em] text-cognac hover:text-cognac-dark font-medium transition-colors"
                >
                  <ExternalLink className="w-4 h-4" /> NIH Clinical Study
                </a>
              </div>
            </div>
            
            <div className="relative z-10 w-full md:w-1/3 flex justify-center md:justify-end">
              <Link
                href="/booking"
                className="inline-flex items-center gap-2 rounded-full bg-cognac px-8 py-4 text-[11px] uppercase tracking-[0.2em] text-primary-foreground transition-colors hover:bg-cognac-dark whitespace-nowrap"
              >
                Schedule Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 4.5 OFFERINGS */}
      <section className="bg-bone/30 py-20 lg:py-32 border-b border-border/50">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-12 gap-12 lg:gap-20">
          <div className="lg:col-span-4 lg:sticky lg:top-32 self-start">
            <span className="text-[11px] uppercase tracking-[0.2em] text-cognac">The Protocol</span>
            <h2 className="mt-3 font-serif text-[36px] md:text-[42px] leading-[1.1] text-ink mb-6">
              Our Offerings
            </h2>
            <p className="text-[15px] leading-relaxed text-ink/70 mb-8">
              All ketamine treatments require an initial consultation. Treatment plans are created individually based on medical evaluation to ensure the highest level of safety and efficacy.
            </p>
            <Link
              href="/booking"
              className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.2em] text-cognac hover:text-cognac-dark transition-colors font-medium"
            >
              Book Consultation <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
          
          <div className="lg:col-span-8 flex flex-col gap-5">
            {offerings.map((o) => (
              <div
                key={o.name}
                className={`group relative overflow-hidden flex flex-col sm:flex-row sm:items-center justify-between gap-6 rounded-2xl border p-8 md:p-10 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_20px_50px_-20px_rgba(67,40,20,0.15)] ${
                  o.featured
                    ? "border-cognac/30 bg-linen ring-1 ring-cognac/10"
                    : "border-border/60 bg-background hover:border-cognac/30"
                }`}
              >
                {/* Subtle background glow for featured */}
                {o.featured && (
                  <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-cognac/[0.04] blur-3xl" />
                )}
                
                <div className="relative z-10 flex-1">
                  <div className="flex flex-wrap items-center gap-3 mb-3">
                    <h3 className="font-serif text-[24px] md:text-[28px] leading-tight text-ink">{o.name}</h3>
                    {o.featured && (
                      <span className="shrink-0 bg-cognac/10 px-3 py-1 text-[9px] uppercase tracking-[0.25em] text-cognac rounded-full">
                        Signature
                      </span>
                    )}
                  </div>
                  <p className="max-w-md text-[14px] md:text-[15px] leading-relaxed text-ink/70">{o.description}</p>
                </div>
                
                <div className="relative z-10 sm:text-right shrink-0 border-t sm:border-t-0 sm:border-l border-border/50 pt-5 sm:pt-0 sm:pl-8 flex flex-row sm:flex-col items-end sm:items-end justify-between sm:justify-center">
                  <p className="font-serif text-[26px] md:text-[32px] text-ink">{o.price}</p>
                  {o.per && (
                    <p className="mt-1 text-[10px] uppercase tracking-[0.2em] text-ink/50">{o.per}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. PRICING */}
      <section className="bg-bone/50 py-20 lg:py-32 border-b border-border/50">
        <div className="max-w-4xl mx-auto px-6 lg:px-10">
          <div className="text-center mb-12">
            <h2 className="font-serif text-[32px] md:text-[42px] text-ink mb-4">Transparent Pricing, Tailored to You</h2>
            <p className="text-[15px] text-ink/70 max-w-2xl mx-auto">
              Because every treatment plan is personalized, pricing is discussed during your consultation to ensure clarity, flexibility, and alignment with your individual care needs.
            </p>
          </div>

          <div className="bg-background rounded-2xl border border-border/60 p-8 md:p-12 transition-shadow hover:shadow-lg">
            <ul className="space-y-6">
              <li className="flex gap-4">
                <span className="text-xl">✨</span>
                <span className="text-[16px] text-ink/80 leading-relaxed pt-1">Some treatments may be covered by select insurance plans</span>
              </li>
              <li className="flex gap-4">
                <span className="text-xl">✨</span>
                <span className="text-[16px] text-ink/80 leading-relaxed pt-1">Customized infusion treatment plans</span>
              </li>
              <li className="flex gap-4">
                <span className="text-xl">✨</span>
                <span className="text-[16px] text-ink/80 leading-relaxed pt-1">Flexible payment plan options available</span>
              </li>
              <li className="flex gap-4 mt-8 pt-6 border-t border-border/40">
                <span className="text-xl">💬</span>
                <span className="text-[16px] text-ink/90 font-medium italic leading-relaxed pt-1">Our goal is to make exceptional care both accessible and thoughtfully tailored to your wellness journey.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* 6. FAQ */}
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

      {/* 7. CTA */}
      <section className="bg-pine py-20 lg:py-32 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-bone/5 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-4xl mx-auto px-6 lg:px-10 text-center relative z-10">
          <h2 className="font-serif text-[36px] md:text-[48px] leading-[1.1] text-linen mb-6">
            Ready to <em className="italic text-gold">restore & replenish?</em>
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
