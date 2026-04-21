import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

export const metadata = {
  title: "Policies | GloVive Wellness & MedSpa",
  description:
    "GloVive Wellness & MedSpa policies — appointments, cancellations, late arrivals, consultations, payment, and concierge service.",
}

const policies = [
  {
    number: "01",
    title: "Appointments & Consultations",
    body: [
      "All new clients are required to complete a brief health intake prior to their first visit. This ensures we can provide safe, personalized care from the moment you arrive.",
      "Certain services — including ketamine wellness and medical weight management — require an initial consultation before treatment can be scheduled.",
    ],
  },
  {
    number: "02",
    title: "Cancellations & Rescheduling",
    body: [
      "We kindly ask for at least 24 hours notice to cancel or reschedule your appointment. This allows us to accommodate other clients who may be waiting for care.",
      "Cancellations made with less than 24 hours notice may be subject to a fee equal to 50% of the scheduled service.",
    ],
  },
  {
    number: "03",
    title: "Late Arrivals",
    body: [
      "Please arrive 5–10 minutes before your appointment time. If you arrive more than 15 minutes late, your appointment may need to be shortened or rescheduled to respect the schedule of other guests.",
    ],
  },
  {
    number: "04",
    title: "No-Show Policy",
    body: [
      "Missed appointments without notice may result in a charge equal to 100% of the scheduled service, and may require a deposit to book future visits.",
    ],
  },
  {
    number: "05",
    title: "Concierge Service",
    body: [
      "Concierge appointments require booking in advance and may be subject to a travel fee depending on your location. A minimum booking may be required for extended travel distances.",
      "Same-day concierge requests are accommodated when possible, subject to availability and clinical discretion.",
    ],
  },
  {
    number: "06",
    title: "Payment",
    body: [
      "We accept major credit cards, debit cards, and HSA/FSA cards when applicable. Payment is due at the time of service.",
      "Pricing is published transparently across our treatment menu. Package pricing, when offered, is non-refundable and valid for 12 months from purchase.",
    ],
  },
  {
    number: "07",
    title: "Medical Eligibility",
    body: [
      "All treatments are medically guided. Not every service is appropriate for every client. We reserve the right to decline treatment if it is not in the best interest of your health or safety.",
      "If you are pregnant, nursing, or managing a complex medical condition, please let us know during booking so we can guide you to appropriate options.",
    ],
  },
  {
    number: "08",
    title: "Privacy",
    body: [
      "Your health information is confidential and protected in accordance with applicable privacy regulations. We will never share your information without your consent, except as required by law.",
    ],
  },
]

export default function PoliciesPage() {
  return (
    <>
      {/* HEADER */}
      <section className="bg-linen">
        <div className="mx-auto max-w-5xl px-6 pt-20 pb-16 text-center lg:px-10 lg:pt-28 lg:pb-20">
          <span className="text-[11px] uppercase tracking-[0.32em] text-cognac">The Fine Print</span>
          <h1 className="mt-6 font-serif text-[48px] leading-[1.02] tracking-tight text-ink md:text-[88px] lg:text-[104px]">
            <em className="italic text-cognac">Policies</em>
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-sm md:text-base lg:text-lg leading-relaxed text-ink/70">
            A few thoughtful guidelines that help us provide the best possible care to every guest.
          </p>
        </div>
      </section>

      {/* POLICIES */}
      <section className="bg-bone/50">
        <div className="mx-auto max-w-5xl px-6 py-20 lg:px-10 lg:py-28">
          <ul className="divide-y divide-border/60 border-y border-border/60">
            {policies.map((p) => (
              <li key={p.number} className="grid gap-6 py-12 md:grid-cols-[80px_1fr_2fr] md:items-start">
                <span className="font-serif text-sm italic text-cognac">{p.number}</span>
                <h2 className="font-serif text-2xl text-ink md:text-3xl">{p.title}</h2>
                <div className="space-y-4 text-sm leading-relaxed text-ink/75">
                  {p.body.map((para, i) => (
                    <p key={i}>{para}</p>
                  ))}
                </div>
              </li>
            ))}
          </ul>

          <p className="mt-14 text-center text-xs text-ink/55">
            Policies may be updated periodically. Most recently reviewed{" "}
            {new Date().toLocaleDateString("en-US", { month: "long", year: "numeric" })}.
          </p>
        </div>
      </section>

      {/* QUESTIONS CTA */}
      <section className="bg-linen">
        <div className="mx-auto max-w-5xl px-6 py-24 text-center lg:px-10 lg:py-32">
          <h2 className="font-serif text-[36px] leading-[1.05] tracking-tight text-ink md:text-5xl">
            Questions about a policy?
          </h2>
          <p className="mx-auto mt-5 max-w-lg text-sm text-ink/70">
            We&apos;re always happy to clarify. Reach out and we&apos;ll walk through anything you need.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 rounded-full bg-cognac px-7 py-4 text-xs uppercase tracking-[0.22em] text-primary-foreground transition-colors hover:bg-cognac-dark"
            >
              Contact Us
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
