import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, ArrowUpRight, Leaf, Check } from "lucide-react"

export const metadata = {
  title: "Body Balance Program | GloVive Wellness & MedSpa",
  description: "A personalized, medically guided approach designed to support sustainable weight loss and improved metabolism.",
}

const offerings = [
  {
    name: "Initial Consultation",
    description: "Comprehensive evaluation of health, goals, and eligibility. Includes a personalized plan tailored to your needs.",
    price: "$100 – $125",
  },
  {
    name: "Medical Weight Management Program",
    description: "A customized plan that may include GLP-1 medications, lifestyle guidance, and ongoing clinical support.",
    price: "Custom",
    featured: true,
    includes: [
      "Personalized treatment plan",
      "Medication management (if applicable)",
      "Progress tracking",
      "Ongoing clinical support",
    ],
  },
]

export default function BodyBalancePage() {
  return (
    <>
      {/* HEADER */}
      <section className="bg-linen">
        <div className="mx-auto max-w-7xl px-6 pb-10 pt-8 lg:px-10 lg:pb-14 lg:pt-10">
          {/* Back link */}
          <Link
            href="/treatments"
            className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.22em] text-ink/60 transition-colors hover:text-cognac"
          >
            <ArrowLeft className="h-4 w-4" />
            All Collections
          </Link>

          <div className="mt-8 grid gap-10 lg:grid-cols-2 lg:gap-16">
            {/* Left - Content */}
            <div className="flex flex-col justify-center">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-cognac/10">
                  <Leaf className="h-5 w-5 text-cognac" strokeWidth={1.75} />
                </div>
                <span className="text-[11px] uppercase tracking-[0.22em] text-cognac">Collection 05</span>
              </div>
              <h1 className="mt-5 font-serif text-[44px] leading-[1.05] tracking-tight text-ink md:text-[56px]">
                GloVive <em className="italic text-cognac">Body Balance</em>
              </h1>
              <p className="mt-5 max-w-lg text-sm md:text-base leading-relaxed text-ink/70">
                A personalized, medically guided approach designed to support sustainable weight loss, improved metabolism, and overall wellness.
              </p>
              <div className="mt-6 flex items-center gap-6 border-t border-border/40 pt-6">
                <div>
                  <p className="text-[10px] uppercase tracking-[0.2em] text-ink/50">Offerings</p>
                  <p className="mt-1 font-serif text-2xl text-ink">{offerings.length}</p>
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-[0.2em] text-ink/50">Starting</p>
                  <p className="mt-1 font-serif text-2xl text-cognac">$100</p>
                </div>
              </div>
            </div>

            {/* Right - Image */}
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl lg:aspect-square">
              <Image
                src="/images/collection-balance.jpg"
                alt="Body balance wellness"
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
      <section className="bg-bone/40">
        <div className="mx-auto max-w-7xl px-6 py-14 lg:px-10 lg:py-20">
          <h2 className="font-serif text-[28px] text-ink md:text-[32px]">Our Offerings</h2>
          
          <div className="mt-8 grid gap-5 lg:grid-cols-2">
            {offerings.map((o) => (
              <div
                key={o.name}
                className={`flex flex-col gap-5 rounded-xl border p-8 ${
                  o.featured
                    ? "border-cognac/30 bg-cognac/5"
                    : "border-border/50 bg-background"
                }`}
              >
                <div className="flex items-start justify-between gap-4">
                  <h3 className="font-serif text-[26px] leading-tight text-ink">{o.name}</h3>
                  <p className="shrink-0 font-serif text-2xl text-cognac">{o.price}</p>
                </div>
                <p className="text-sm md:text-base leading-relaxed text-ink/65">{o.description}</p>
                {o.includes && (
                  <ul className="mt-2 grid gap-3 border-t border-border/50 pt-5 sm:grid-cols-2">
                    {o.includes.map((i) => (
                      <li key={i} className="flex items-start gap-3">
                        <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-cognac/10">
                          <Check className="h-3 w-3 text-cognac" />
                        </div>
                        <span className="text-sm md:text-base text-ink/75">{i}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* APPROACH SECTION */}
      <section className="bg-linen">
        <div className="mx-auto max-w-7xl px-6 py-14 lg:px-10 lg:py-20">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-serif text-[28px] text-ink md:text-[36px]">
              Our <em className="italic text-cognac">Approach</em>
            </h2>
            <p className="mt-4 text-sm md:text-base text-ink/70">
              We believe in sustainable, medically guided weight management — not quick fixes. Our team works with you to develop a personalized plan that fits your lifestyle and goals.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              { title: "Personalized", desc: "Every plan is tailored to your unique body, health history, and goals." },
              { title: "Medically Guided", desc: "Work with our clinical team who monitors your progress and adjusts your plan." },
              { title: "Sustainable", desc: "Focus on long-term results through balanced approaches, not extreme measures." },
            ].map((s) => (
              <div key={s.title} className="rounded-xl border border-border/50 bg-background p-6 text-center">
                <h3 className="font-serif text-xl text-ink">{s.title}</h3>
                <p className="mt-2 text-sm md:text-base text-ink/65">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section className="bg-bone/40">
        <div className="mx-auto max-w-4xl px-6 py-14 text-center lg:px-10 lg:py-20">
          <h2 className="font-serif text-[32px] leading-[1.1] text-ink md:text-[40px]">
            Start your <em className="italic text-cognac">transformation.</em>
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-sm md:text-base text-ink/70">
            Schedule a consultation to discuss your goals and learn if our Body Balance program is right for you.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/booking"
              className="group inline-flex items-center gap-2 rounded-full bg-cognac px-7 py-4 text-xs uppercase tracking-[0.22em] text-primary-foreground transition-colors hover:bg-cognac-dark"
            >
              Book Consultation
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>
            <Link
              href="/treatments"
              className="rounded-full border border-ink/20 px-7 py-4 text-xs uppercase tracking-[0.22em] text-ink transition-colors hover:border-cognac hover:text-cognac"
            >
              View All Collections
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
