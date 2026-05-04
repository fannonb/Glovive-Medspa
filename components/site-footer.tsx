import Link from "next/link"
import Image from "next/image"
import { MapPin, Phone, Mail, Instagram, Facebook } from "lucide-react"

const hours = [
  ["Sunday", "By Appointment Only"],
  ["Monday", "10:00 am – 6:00 pm"],
  ["Tuesday", "9:00 am – 5:00 pm"],
  ["Wednesday", "9:00 am – 5:00 pm"],
  ["Thursday", "9:00 am – 5:00 pm"],
  ["Friday", "10:00 am – 6:00 pm"],
  ["Saturday", "10:00 am – 3:00 pm"],
]

export function SiteFooter() {
  return (
    <footer className="relative bg-pine text-bone">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-24">
        <div className="grid gap-14 lg:grid-cols-[1.3fr_1fr_1fr_1fr]">
          <div>
            <Link href="/" aria-label="GloVive home">
              <Image
                src="/images/glovive-logo.png"
                alt="GloVive Wellness & MedSpa"
                width={160}
                height={160}
                className="h-24 w-auto brightness-0 invert"
              />
            </Link>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-bone/75">
              Where wellness meets elevated care. Personalized IV Nutrient Hydration, Ketamine IV Infusion Therapy, Vitamin Injections, and
              medical weight management in Columbia, Maryland.
            </p>
            <div className="mt-7 flex items-center gap-3">
              <Link
                href="https://www.instagram.com/glovivemedspa?utm_source=qr"
                aria-label="Instagram"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-bone/25 transition-colors hover:border-bone hover:bg-bone/10"
              >
                <Instagram className="h-4 w-4" />
              </Link>
              <Link
                href="https://www.facebook.com/share/1Zi12qXkhz/?mibextid=wwXIfr"
                aria-label="Facebook"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-bone/25 transition-colors hover:border-bone hover:bg-bone/10"
              >
                <Facebook className="h-4 w-4" />
              </Link>
            </div>
          </div>

          <div>
            <h4 className="text-[11px] uppercase tracking-[0.28em] text-bone/60">Visit</h4>
            <div className="mt-5 space-y-4 text-sm text-bone/85">
              <p className="flex gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-bone/60" />
                <span>
                  7310 Grace Drive, Suite B
                  <br />
                  Columbia, MD 21044
                </span>
              </p>
              <p className="flex gap-3">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-bone/60" />
                <Link href="tel:4109484640" className="hover:text-linen">
                  410.948.4640
                </Link>
              </p>
              <p className="flex gap-3">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-bone/60" />
                <Link href="mailto:info@glovivemedsspa.com" className="hover:text-linen">
                  info@glovivemedsspa.com
                </Link>
              </p>
            </div>
          </div>

          <div>
            <h4 className="text-[11px] uppercase tracking-[0.28em] text-bone/60">Hours</h4>
            <ul className="mt-5 space-y-2 text-sm text-bone/85">
              {hours.map(([day, time]) => (
                <li key={day} className="flex justify-between gap-4">
                  <span>{day}</span>
                  <span className="text-bone/70">{time}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[11px] uppercase tracking-[0.28em] text-bone/60">Explore</h4>
            <ul className="mt-5 space-y-3 text-sm">
              {[
                ["/about", "About"],
                ["/treatments", "Treatments"],
                ["/booking", "Booking"],
                ["/policies", "Policies"],
                ["/contact", "Contact"],
              ].map(([href, label]) => (
                <li key={href}>
                  <Link href={href} className="text-bone/85 transition-colors hover:text-linen">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-bone/15 pt-8 text-xs text-bone/55 md:flex-row md:items-center">
          <p>© {new Date().getFullYear()} GloVive Wellness & MedSpa. All rights reserved.</p>
          <p className="tracking-[0.2em] uppercase">Columbia · Maryland</p>
        </div>
      </div>
    </footer>
  )
}
