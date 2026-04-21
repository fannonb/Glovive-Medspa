import Link from "next/link"
import { MapPin, Phone, Mail, Clock } from "lucide-react"
import { ContactForm } from "@/components/contact-form"

export const metadata = {
  title: "Contact GloVive Wellness & MedSpa | Columbia, MD",
  description:
    "Get in touch with GloVive Wellness & MedSpa. Visit us at 7310 Grace Drive, Suite B, Columbia, MD 21044 or call 410.948.4640.",
}

const hours = [
  ["Sunday", "Closed"],
  ["Monday", "10:00 am – 6:00 pm"],
  ["Tuesday", "9:00 am – 5:00 pm"],
  ["Wednesday", "9:00 am – 5:00 pm"],
  ["Thursday", "9:00 am – 5:00 pm"],
  ["Friday", "10:00 am – 6:00 pm"],
  ["Saturday", "10:00 am – 3:00 pm"],
]

export default function ContactPage() {
  return (
    <>
      {/* HEADER */}
      <section className="bg-linen">
        <div className="mx-auto max-w-5xl px-6 pt-20 pb-16 text-center lg:px-10 lg:pt-28 lg:pb-20">
          <span className="text-[11px] uppercase tracking-[0.32em] text-cognac">Reach out</span>
          <h1 className="mt-6 font-serif text-[48px] leading-[1.02] tracking-tight text-ink md:text-[88px] lg:text-[104px]">
            <em className="italic text-cognac">Contact</em>
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-sm md:text-base lg:text-lg leading-relaxed text-ink/70">
            Questions, concierge requests, or just want to say hello? We&apos;d love to hear from you.
          </p>
        </div>
      </section>

      {/* INFO + FORM */}
      <section className="bg-bone/50">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-24 lg:grid-cols-[1fr_1.3fr] lg:gap-20 lg:px-10 lg:py-32">
          {/* LEFT: Info */}
          <div className="flex flex-col gap-10">
            <div>
              <span className="text-[11px] uppercase tracking-[0.32em] text-cognac">Visit</span>
              <h2 className="mt-3 font-serif text-3xl text-ink md:text-4xl">The GloVive Studio</h2>
              <div className="mt-6 space-y-5 text-sm md:text-base text-ink/80">
                <p className="flex items-start gap-4">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-cognac" />
                  <span>
                    7310 Grace Drive, Suite B
                    <br />
                    Columbia, MD 21044
                  </span>
                </p>
                <p className="flex items-start gap-4">
                  <Phone className="mt-0.5 h-4 w-4 shrink-0 text-cognac" />
                  <Link href="tel:4109484640" className="hover:text-cognac">
                    410.948.4640
                  </Link>
                </p>
                <p className="flex items-start gap-4">
                  <Mail className="mt-0.5 h-4 w-4 shrink-0 text-cognac" />
                  <Link href="mailto:info@glovivemedsspa.com" className="hover:text-cognac">
                    info@glovivemedsspa.com
                  </Link>
                </p>
              </div>
            </div>

            <div>
              <span className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.32em] text-cognac">
                <Clock className="h-3.5 w-3.5" />
                Hours
              </span>
              <ul className="mt-5 divide-y divide-border/60 border-y border-border/60">
                {hours.map(([day, time]) => (
                  <li key={day} className="flex items-baseline justify-between py-3 text-sm md:text-base">
                    <span className="text-ink">{day}</span>
                    <span className="text-ink/65">{time}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-lg border border-border/60 bg-linen p-6">
              <p className="text-[11px] uppercase tracking-[0.22em] text-cognac">Prefer to book?</p>
              <p className="mt-3 font-serif text-xl text-ink">Call or text to schedule instantly.</p>
              <Link
                href="/booking"
                className="mt-5 inline-flex items-center gap-2 rounded-full bg-cognac px-6 py-3 text-xs uppercase tracking-[0.22em] text-primary-foreground transition-colors hover:bg-cognac-dark"
              >
                Booking Page
              </Link>
            </div>
          </div>

          {/* RIGHT: Form */}
          <div className="rounded-lg border border-border/60 bg-linen p-8 md:p-12">
            <span className="text-[11px] uppercase tracking-[0.32em] text-cognac">Send a Message</span>
            <h2 className="mt-3 font-serif text-3xl text-ink md:text-4xl">
              How can we <em className="italic text-cognac">help?</em>
            </h2>
            <div className="mt-8">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* MAP */}
      <section className="bg-linen">
        <div className="mx-auto max-w-7xl px-6 pb-24 lg:px-10 lg:pb-32">
          <div className="overflow-hidden rounded-lg border border-border/60">
            <iframe
              title="GloVive Wellness & MedSpa location"
              src="https://www.google.com/maps?q=7310+Grace+Drive,+Columbia,+MD+21044&output=embed"
              width="100%"
              height="420"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="block w-full grayscale-[0.4] contrast-[0.95]"
            />
          </div>
        </div>
      </section>
    </>
  )
}
