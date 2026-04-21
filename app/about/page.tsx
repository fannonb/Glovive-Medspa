import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

export const metadata = {
  title: "About GloVive Wellness & MedSpa | Columbia, MD",
  description:
    "Where wellness meets elevated care. Learn the story and philosophy behind GloVive Wellness & MedSpa.",
}

const philosophy = [
  {
    number: "01",
    title: "Wellness is the foundation of beauty",
    copy: "True radiance begins at the cellular level — with hydration, nutrients, and a body in balance.",
  },
  {
    number: "02",
    title: "Confidence starts from within",
    copy: "How you feel shapes how you show up. Our treatments support the quiet work that precedes every glow.",
  },
  {
    number: "03",
    title: "Every client deserves personalized care",
    copy: "No templates, no one-size protocols. Each visit is built around your body, your goals, your story.",
  },
]

export default function AboutPage() {
  return (
    <>
      {/* HEADER */}
      <section className="bg-linen">
        <div className="mx-auto max-w-6xl px-6 pt-20 pb-14 text-center lg:px-10 lg:pt-28 lg:pb-20">
          <span className="text-[11px] uppercase tracking-[0.32em] text-cognac">About</span>
          <h1 className="mt-6 font-serif text-[48px] leading-[1.02] tracking-tight text-ink md:text-[88px] lg:text-[104px]">
            About <em className="italic text-cognac">GloVive</em>
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-sm md:text-base lg:text-lg leading-relaxed text-ink/70">
            Where wellness meets elevated care.
          </p>
        </div>
        <div className="mx-auto max-w-7xl px-6 pb-20 lg:px-10">
          <div className="relative aspect-[16/9] overflow-hidden rounded-lg">
            <Image
              src="/images/interior-spa.jpg"
              alt="GloVive Wellness & MedSpa studio interior"
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* STORY */}
      <section className="bg-bone/60">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-24 lg:grid-cols-[1fr_1.2fr] lg:gap-20 lg:px-10 lg:py-32">
          <div className="relative">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2px]">
              <Image
                src="/images/about-founder.jpg"
                alt="GloVive founder"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>
          <div className="flex flex-col justify-center">
            <span className="text-[11px] uppercase tracking-[0.32em] text-cognac">Our Story</span>
            <h2 className="mt-4 font-serif text-[36px] leading-[1.1] tracking-tight text-ink md:text-5xl">
              A vision for wellness that feels <em className="italic text-cognac">personal.</em>
            </h2>
            <p className="mt-6 text-sm md:text-base leading-relaxed text-ink/75">
              GloVive Wellness & MedSpa was founded with a vision to create a space where health, beauty, and
              confidence come together. With a background in healthcare and a passion for helping others feel their
              best, our mission is to provide safe, effective, and personalized treatments that enhance both inner
              wellness and outward glow.
            </p>
            <p className="mt-6 text-sm md:text-base leading-relaxed text-ink/75">
              Every detail — from the design of our Columbia studio to the thoughtful cadence of our protocols — is
              intentional. We are a medical practice first, and a sanctuary second. And we believe the two belong
              together.
            </p>
            <div className="mt-10 flex items-center gap-6 border-t border-border/50 pt-8">
              <div>
                <p className="font-serif text-3xl text-ink">Columbia, MD</p>
                <p className="mt-1 text-[11px] uppercase tracking-[0.22em] text-muted-foreground">Our home studio</p>
              </div>
              <span className="h-10 w-px bg-border" />
              <div>
                <p className="font-serif text-3xl text-ink">Concierge</p>
                <p className="mt-1 text-[11px] uppercase tracking-[0.22em] text-muted-foreground">In-home service</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PHILOSOPHY */}
      <section className="bg-linen">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.6fr] lg:gap-20">
            <div>
              <span className="text-[11px] uppercase tracking-[0.32em] text-cognac">Philosophy</span>
              <h2 className="mt-4 font-serif text-[36px] leading-[1.1] tracking-tight text-ink md:text-5xl">
                What we <em className="italic text-cognac">believe.</em>
              </h2>
              <p className="mt-6 text-sm md:text-base leading-relaxed text-ink/70">
                Three principles guide every treatment we offer and every client we serve.
              </p>
            </div>
            <ul className="divide-y divide-border/50 border-y border-border/50">
              {philosophy.map((p) => (
                <li key={p.number} className="grid gap-6 py-10 md:grid-cols-[80px_1fr_2fr] md:items-start">
                  <span className="font-serif text-sm italic text-cognac">{p.number}</span>
                  <h3 className="font-serif text-2xl text-ink md:text-3xl">{p.title}</h3>
                  <p className="text-sm md:text-base leading-relaxed text-ink/70">{p.copy}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* CLOSING CTA */}
      <section className="bg-pine text-bone">
        <div className="mx-auto max-w-5xl px-6 py-28 text-center lg:px-10 lg:py-36">
          <span className="text-[11px] uppercase tracking-[0.32em] text-bone/60">Begin</span>
          <h2 className="mt-5 font-serif text-[40px] leading-[1.05] tracking-tight text-linen md:text-[72px]">
            Start your journey <em className="italic">with us.</em>
          </h2>
          <p className="mx-auto mt-6 max-w-lg text-sm md:text-base leading-relaxed text-bone/80">
            We&apos;d love to meet you. Schedule your first appointment and experience care designed just for you.
          </p>
          <Link
            href="/booking"
            className="group mt-10 inline-flex items-center gap-2 rounded-full bg-linen px-7 py-4 text-xs uppercase tracking-[0.22em] text-pine transition-colors hover:bg-bone"
          >
            Book Now
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </Link>
        </div>
      </section>
    </>
  )
}
