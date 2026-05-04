import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, ArrowUpRight, HeartPulse } from "lucide-react"

export const metadata = {
  title: "Ketamine IV Infusion Therapy Treatment | GloVive Wellness & MedSpa",
  description: "Medically guided ketamine therapy designed to restore clarity, emotional balance, and inner calm.",
}

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

export default function KetaminePage() {
  return (
    <>
      {/* HEADER */}
      <section className="bg-pine text-bone">
        <div className="mx-auto max-w-7xl px-6 pb-10 pt-8 lg:px-10 lg:pb-14 lg:pt-10">
          {/* Back link */}
          <Link
            href="/treatments"
            className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.22em] text-linen/85 transition-colors hover:text-linen"
          >
            <ArrowLeft className="h-4 w-4" />
            All Treatments
          </Link>

          <div className="mt-8 grid gap-10 lg:grid-cols-2 lg:gap-16">
            {/* Left - Content */}
            <div className="flex flex-col justify-center">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-bone/10">
                  <HeartPulse className="h-5 w-5 text-bone" strokeWidth={1.75} />
                </div>
              </div>
              <h1 className="mt-5 font-serif text-[44px] leading-[1.05] tracking-tight text-linen md:text-[56px]">
                The GloVive <em className="italic">Reset</em> Experience
              </h1>
              <p className="mt-5 max-w-lg text-sm md:text-base leading-relaxed text-bone/80">
                Medically guided, immersive wellness designed to restore clarity, emotional balance, and inner calm — in a controlled, supportive environment.
              </p>
              <div className="mt-6 flex items-center gap-6 border-t border-bone/20 pt-6">
                <div>
                  <p className="text-[10px] uppercase tracking-[0.2em] text-bone/70">Offerings</p>
                  <p className="mt-1 font-serif text-2xl text-linen">{offerings.length}</p>
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-[0.2em] text-bone/70">Starting</p>
                  <p className="mt-1 font-serif text-2xl text-linen">$150</p>
                </div>
              </div>
            </div>

            {/* Right - Image */}
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl lg:aspect-square">
              <Image
                src="/images/collection-ketamine.jpg"
                alt="Ketamine IV Infusion Therapy treatment room"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* OFFERINGS */}
      <section className="bg-linen">
        <div className="mx-auto max-w-7xl px-6 py-14 lg:px-10 lg:py-20">
          <h2 className="font-serif text-[28px] text-ink md:text-[32px]">Our Offerings</h2>
          
          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {offerings.map((o) => (
              <div
                key={o.name}
                className={`flex flex-col gap-4 rounded-xl border p-6 ${
                  o.featured
                    ? "border-pine/40 bg-pine/5 md:col-span-2"
                    : "border-border/50 bg-background"
                }`}
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="font-serif text-[24px] leading-tight text-ink">{o.name}</h3>
                    <p className="mt-2 max-w-lg text-sm md:text-base leading-relaxed text-ink/65">{o.description}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-serif text-2xl text-ink">{o.price}</p>
                    {o.per && (
                      <p className="mt-1 text-[10px] uppercase tracking-[0.2em] text-ink/50">{o.per}</p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <p className="mt-8 text-xs text-ink/55">
            All ketamine treatments require an initial consultation. Treatment plans are created individually based on medical evaluation.
          </p>
        </div>
      </section>

      {/* INFO SECTION */}
      <section className="bg-bone/40">
        <div className="mx-auto max-w-7xl px-6 py-14 lg:px-10 lg:py-20">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-serif text-[28px] text-ink md:text-[36px]">
              What to <em className="italic text-pine">Expect</em>
            </h2>
            <p className="mt-4 text-sm md:text-base text-ink/70">
              Your journey begins with a comprehensive consultation to ensure ketamine therapy is right for you. During sessions, you&apos;ll relax in a private, calming environment while our medical team monitors your comfort and safety throughout.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              { step: "01", title: "Consultation", desc: "Meet with our team to discuss your goals and medical history." },
              { step: "02", title: "Treatment", desc: "Relax in a private setting while receiving your guided infusion." },
              { step: "03", title: "Integration", desc: "Process your experience with support and follow-up care." },
            ].map((s) => (
              <div key={s.step} className="rounded-xl border border-border/50 bg-background p-6">
                <span className="font-serif text-3xl text-pine/40">{s.step}</span>
                <h3 className="mt-3 font-serif text-xl text-ink">{s.title}</h3>
                <p className="mt-2 text-sm md:text-base text-ink/65">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section className="bg-linen">
        <div className="mx-auto max-w-4xl px-6 py-14 text-center lg:px-10 lg:py-20">
          <h2 className="font-serif text-[32px] leading-[1.1] text-ink md:text-[40px]">
            Begin your <em className="italic text-pine">Reset</em> journey.
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-base text-ink/70">
            Schedule your initial consultation to learn if ketamine therapy is right for you.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/booking"
              className="group inline-flex items-center gap-2 rounded-full bg-pine px-7 py-4 text-xs uppercase tracking-[0.22em] text-bone transition-colors hover:bg-pine/90"
            >
              Book Consultation
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>
            <Link
              href="/treatments"
              className="rounded-full border border-ink/20 px-7 py-4 text-xs uppercase tracking-[0.22em] text-ink transition-colors hover:border-pine hover:text-pine"
            >
              View All Treatments
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
