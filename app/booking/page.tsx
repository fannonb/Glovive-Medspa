import Image from "next/image"
import Link from "next/link"
import { Phone, MessageSquare, Mail, MapPin, ArrowUpRight } from "lucide-react"

export const metadata = {
  title: "Book an Appointment | GloVive Wellness & MedSpa",
  description:
    "Book your GloVive appointment. Call or text us to schedule IV hydration, ketamine wellness, vitamin injections, body balance, or concierge service.",
}

const steps = [
  {
    number: "01",
    title: "Reach out",
    copy: "Call or text us directly. Share what you're curious about and we'll guide you from there.",
  },
  {
    number: "02",
    title: "Book your visit",
    copy: "Choose in-studio or concierge. We'll confirm your date, time, and any pre-treatment guidance.",
  },
  {
    number: "03",
    title: "Arrive & glow",
    copy: "Settle in at the studio or welcome us to your space. Everything after is designed around you.",
  },
]

export default function BookingPage() {
  return (
    <>
      {/* HEADER */}
      <section className="bg-linen">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 pt-20 pb-16 lg:grid-cols-[1.2fr_1fr] lg:gap-16 lg:px-10 lg:pt-28 lg:pb-24">
          <div className="flex flex-col justify-center">
            <span className="text-[11px] uppercase tracking-[0.32em] text-cognac">Schedule</span>
            <h1 className="mt-6 font-serif text-[48px] leading-[1.02] tracking-tight text-ink md:text-[76px] lg:text-[88px]">
              Book your <em className="italic text-cognac">appointment.</em>
            </h1>
            <p className="mt-6 max-w-lg text-sm md:text-base lg:text-lg leading-relaxed text-ink/75">
              We&apos;re excited to be part of your wellness journey. Schedule your appointment today and experience
              personalized care designed just for you.
            </p>
          </div>
          <div className="relative aspect-[4/5] overflow-hidden rounded-lg lg:aspect-[4/5]">
            <Image
              src="/images/interior-spa.jpg"
              alt="GloVive studio interior"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* CALL / TEXT */}
      <section className="bg-bone/60">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-[11px] uppercase tracking-[0.32em] text-cognac">How to Book</span>
            <h2 className="mt-5 font-serif text-[36px] leading-[1.05] tracking-tight text-ink md:text-[56px]">
              Call or text <em className="italic text-cognac">to book.</em>
            </h2>
            <p className="mt-6 text-sm md:text-base leading-relaxed text-ink/70">
              Our team personally confirms every appointment to ensure the right treatment, timing, and experience for
              you.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2">
            <Link
              href="tel:4109484640"
              className="group flex items-center gap-6 rounded-lg border border-border/60 bg-linen p-8 transition-all hover:-translate-y-1 hover:border-cognac/40 hover:shadow-[0_24px_60px_-30px_rgba(67,40,20,0.35)] md:p-10"
            >
              <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-cognac/10 text-cognac transition-colors group-hover:bg-cognac group-hover:text-primary-foreground">
                <Phone className="h-5 w-5" strokeWidth={1.5} />
              </span>
              <div className="flex-1">
                <p className="text-[11px] uppercase tracking-[0.22em] text-muted-foreground">Call us</p>
                <p className="mt-1 font-serif text-3xl text-ink">410.948.4640</p>
              </div>
              <ArrowUpRight className="h-5 w-5 text-ink/40 transition-colors group-hover:text-cognac" />
            </Link>

            <Link
              href="sms:4109484640"
              className="group flex items-center gap-6 rounded-lg border border-border/60 bg-linen p-8 transition-all hover:-translate-y-1 hover:border-cognac/40 hover:shadow-[0_24px_60px_-30px_rgba(67,40,20,0.35)] md:p-10"
            >
              <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-cognac/10 text-cognac transition-colors group-hover:bg-cognac group-hover:text-primary-foreground">
                <MessageSquare className="h-5 w-5" strokeWidth={1.5} />
              </span>
              <div className="flex-1">
                <p className="text-[11px] uppercase tracking-[0.22em] text-muted-foreground">Text us</p>
                <p className="mt-1 font-serif text-3xl text-ink">410.948.4640</p>
              </div>
              <ArrowUpRight className="h-5 w-5 text-ink/40 transition-colors group-hover:text-cognac" />
            </Link>
          </div>

          <div className="mt-6 grid gap-6 md:grid-cols-2">
            <Link
              href="mailto:info@glovivemedsspa.com"
              className="flex items-center gap-5 rounded-lg border border-border/60 bg-linen p-6 transition-colors hover:border-cognac/40"
            >
              <Mail className="h-5 w-5 text-cognac" strokeWidth={1.5} />
              <div>
                <p className="text-[11px] uppercase tracking-[0.22em] text-muted-foreground">Email</p>
                <p className="mt-1 text-sm md:text-base text-ink">info@glovivemedsspa.com</p>
              </div>
            </Link>
            <Link
              href="/contact"
              className="flex items-center gap-5 rounded-lg border border-border/60 bg-linen p-6 transition-colors hover:border-cognac/40"
            >
              <MapPin className="h-5 w-5 text-cognac" strokeWidth={1.5} />
              <div>
                <p className="text-[11px] uppercase tracking-[0.22em] text-muted-foreground">Visit the studio</p>
                <p className="mt-1 text-sm md:text-base text-ink">7310 Grace Drive, Suite B · Columbia, MD</p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* WHAT TO EXPECT */}
      <section className="bg-linen">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
          <div className="max-w-2xl">
            <span className="text-[11px] uppercase tracking-[0.32em] text-cognac">What to Expect</span>
            <h2 className="mt-5 font-serif text-[36px] leading-[1.05] tracking-tight text-ink md:text-5xl">
              A thoughtful visit, <em className="italic text-cognac">every time.</em>
            </h2>
          </div>

          <ol className="mt-14 grid gap-px overflow-hidden rounded-lg border border-border/60 bg-border/60 md:grid-cols-3">
            {steps.map((s) => (
              <li key={s.number} className="flex flex-col gap-4 bg-linen p-8 md:p-10">
                <span className="font-serif text-sm italic text-cognac">{s.number}</span>
                <h3 className="font-serif text-2xl text-ink md:text-3xl">{s.title}</h3>
                <p className="text-sm md:text-base leading-relaxed text-ink/70">{s.copy}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

    </>
  )
}
