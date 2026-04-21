import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, ArrowUpRight, MapPin, Check, CalendarCheck, Navigation, Clock, AlertCircle } from "lucide-react"

export const metadata = {
  title: "Concierge Hydration | GloVive Wellness & MedSpa",
  description: "Experience wellness on your terms. Personalized IV therapy delivered directly to your home, office, or preferred location.",
}

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

export default function ConciergePage() {
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
                  <MapPin className="h-5 w-5 text-cognac" strokeWidth={1.75} />
                </div>
                <span className="text-[11px] uppercase tracking-[0.22em] text-cognac">Collection 04</span>
              </div>
              <h1 className="mt-5 font-serif text-[44px] leading-[1.05] tracking-tight text-ink md:text-[56px]">
                GloVive <em className="italic text-cognac">Concierge</em> Hydration
              </h1>
              <p className="mt-5 max-w-lg text-base leading-relaxed text-ink/70">
                Experience wellness on your terms. Our concierge service brings personalized IV therapy directly to your home, office, or preferred location.
              </p>
              <div className="mt-6 flex items-center gap-6 border-t border-border/40 pt-6">
                <div>
                  <p className="text-[10px] uppercase tracking-[0.2em] text-ink/50">Pricing</p>
                  <p className="mt-1 font-serif text-xl text-ink">Treatment + travel fee</p>
                </div>
              </div>
            </div>

            {/* Right - Image */}
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl lg:aspect-square">
              <Image
                src="/images/collection-concierge.jpg"
                alt="Concierge IV therapy service"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* EXPERIENCE DETAILS */}
      <section className="bg-bone/40">
        <div className="mx-auto max-w-7xl px-6 py-14 lg:px-10 lg:py-20">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
            {/* Left - Features */}
            <div className="rounded-xl border border-border/50 bg-background p-8">
              <h2 className="font-serif text-[28px] text-ink">The Concierge Experience</h2>
              <p className="mt-3 text-sm md:text-base text-ink/65">
                Enjoy your favorite GloVive treatments in a private, convenient setting with one-on-one care from our medical team.
              </p>
              <ul className="mt-8 grid gap-4 sm:grid-cols-2">
                {features.map((f) => (
                  <li key={f} className="flex items-start gap-3">
                    <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-cognac/10">
                      <Check className="h-3 w-3 text-cognac" />
                    </div>
                    <span className="text-sm md:text-base text-ink/75">{f}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right - How it Works */}
            <div className="rounded-xl border border-cognac/30 bg-cognac/5 p-8">
              <h2 className="font-serif text-[28px] text-ink">How It Works</h2>
              <div className="mt-6 space-y-6">
                {[
                  { step: "1", title: "Book Your Appointment", desc: "Choose your treatment and preferred date, time, and location." },
                  { step: "2", title: "We Come to You", desc: "Our medical team arrives with all equipment and supplies." },
                  { step: "3", title: "Relax & Restore", desc: "Enjoy your treatment in the comfort of your own space." },
                ].map((s) => (
                  <div key={s.step} className="flex gap-4">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-cognac font-serif text-sm text-linen">
                      {s.step}
                    </div>
                    <div>
                      <h3 className="font-serif text-lg text-ink">{s.title}</h3>
                      <p className="mt-1 text-sm md:text-base text-ink/65">{s.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Notes */}
          <div className="mt-10">
            <p className="mb-5 text-[11px] uppercase tracking-[0.28em] text-ink/40">Good to Know</p>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {notes.map((n) => {
                const NoteIcon = n.icon
                return (
                  <div
                    key={n.title}
                    className="flex flex-col gap-3 rounded-xl border border-border/50 bg-background p-5 transition-colors hover:border-cognac/30"
                  >
                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-cognac/8">
                      <NoteIcon className="h-4 w-4 text-cognac" strokeWidth={1.75} />
                    </div>
                    <div>
                      <p className="text-[13px] font-medium leading-snug text-ink">{n.title}</p>
                      <p className="mt-1.5 text-[12px] leading-relaxed text-ink/55">{n.desc}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* AVAILABLE TREATMENTS */}
      <section className="bg-linen">
        <div className="mx-auto max-w-7xl px-6 py-14 lg:px-10 lg:py-20">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-serif text-[28px] text-ink md:text-[36px]">
              Available <em className="italic text-cognac">Treatments</em>
            </h2>
            <p className="mt-4 text-base text-ink/70">
              All of our IV hydration treatments are available for concierge service. Choose from our full menu of signature infusions.
            </p>
            <Link
              href="/treatments/iv-hydration"
              className="mt-6 inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.22em] text-cognac transition-colors hover:text-cognac-dark"
            >
              View IV Hydration Menu
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section className="bg-bone/40">
        <div className="mx-auto max-w-4xl px-6 py-14 text-center lg:px-10 lg:py-20">
          <h2 className="font-serif text-[32px] leading-[1.1] text-ink md:text-[40px]">
            Wellness, <em className="italic text-cognac">wherever you are.</em>
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-base text-ink/70">
            Book your concierge appointment and we&apos;ll bring the GloVive experience to you.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/booking"
              className="group inline-flex items-center gap-2 rounded-full bg-cognac px-7 py-4 text-xs uppercase tracking-[0.22em] text-primary-foreground transition-colors hover:bg-cognac-dark"
            >
              Book Concierge
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>
            <Link
              href="tel:4109484640"
              className="rounded-full border border-ink/20 px-7 py-4 text-xs uppercase tracking-[0.22em] text-ink transition-colors hover:border-cognac hover:text-cognac"
            >
              Call 410.948.4640
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
