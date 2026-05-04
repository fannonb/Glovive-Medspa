import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Sparkles, Mail, ArrowUpRight } from "lucide-react"

export const metadata = {
  title: "Aesthetic Treatments - Coming Soon | GloVive Wellness & MedSpa",
  description: "A refined selection of aesthetic treatments designed to enhance your natural glow is currently in development at GloVive Wellness & MedSpa.",
}

export default function AestheticTreatmentsPage() {
  return (
    <div className="bg-linen min-h-screen flex flex-col">
      {/* 1. HERO SECTION */}
      <section className="relative w-full min-h-screen flex flex-col items-center justify-center bg-ink">
        <Image
          src="/images/service-card-aesthetics-diverse.png"
          alt="Aesthetic Treatments Coming Soon"
          fill
          priority
          className="object-cover opacity-60 object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/60 to-transparent" aria-hidden />
        <div className="absolute inset-0 bg-ink/30" aria-hidden /> {/* Extra overall dimming */}
        
        <div className="relative z-10 w-full max-w-5xl mx-auto px-6 lg:px-10 py-20 lg:py-32 text-center">
          <div className="flex justify-center mb-8">
            <div className="flex items-center justify-center w-16 h-16 rounded-full bg-cognac/10 border border-cognac/30 backdrop-blur-sm">
              <Sparkles className="w-8 h-8 text-cognac" strokeWidth={1.5} />
            </div>
          </div>
          
          <span className="block text-[14px] font-bold uppercase tracking-[0.4em] text-linen mb-6 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
            Currently In Development
          </span>
          <h1 className="font-serif text-[48px] md:text-[72px] lg:text-[96px] leading-[1] text-linen mb-8 drop-shadow-[0_4px_24px_rgba(0,0,0,0.6)]">
            Aesthetic <br className="hidden md:block" />
            <em className="italic font-light text-gold drop-shadow-[0_2px_8px_rgba(0,0,0,0.4)]">Treatments</em>
          </h1>
          
          <p className="max-w-2xl mx-auto text-[16px] md:text-[18px] leading-[1.8] text-bone/80 mb-12">
            We are meticulously curating a refined selection of aesthetic treatments designed to elevate and enhance your natural glow. Our commitment to excellence means we take the time to ensure every treatment meets our rigorous standards for safety, efficacy, and luxury.
          </p>

          <div className="flex justify-center">
            <Link
              href="/treatments"
              className="inline-flex items-center gap-2 rounded-full bg-cognac px-10 py-4 text-[12px] uppercase tracking-[0.2em] text-primary-foreground transition-all hover:bg-cognac-dark hover:-translate-y-1 hover:shadow-[0_10px_30px_-10px_rgba(202,138,92,0.4)]"
            >
              <ArrowLeft className="w-4 h-4" /> Explore Other Treatments
            </Link>
          </div>
        </div>
      </section>

      {/* 2. THE VISION */}
      <section className="bg-linen py-24 lg:py-32">
        <div className="max-w-4xl mx-auto px-6 lg:px-10 text-center">
          <span className="text-[11px] uppercase tracking-[0.2em] text-cognac">The Vision</span>
          <h2 className="mt-4 mb-8 font-serif text-[32px] md:text-[42px] text-ink">
            Where Science Meets <em className="italic text-cognac">Artistry</em>
          </h2>
          <div className="grid md:grid-cols-3 gap-8 text-left mt-16">
            <div className="bg-background border border-border/60 p-8 rounded-2xl hover:border-cognac/30 transition-colors shadow-sm">
              <h3 className="font-serif text-[22px] text-ink mb-3">Subtle Enhancements</h3>
              <p className="text-[14px] text-ink/75 leading-relaxed">
                Our philosophy centers on natural-looking results. We believe in enhancing your unique features, not changing them.
              </p>
            </div>
            <div className="bg-background border border-border/60 p-8 rounded-2xl hover:border-cognac/30 transition-colors shadow-sm">
              <h3 className="font-serif text-[22px] text-ink mb-3">Premium Products</h3>
              <p className="text-[14px] text-ink/75 leading-relaxed">
                We are partnering with industry-leading brands to provide the highest quality injectables, dermal fillers, and skincare.
              </p>
            </div>
            <div className="bg-background border border-border/60 p-8 rounded-2xl hover:border-cognac/30 transition-colors shadow-sm">
              <h3 className="font-serif text-[22px] text-ink mb-3">Expert Care</h3>
              <p className="text-[14px] text-ink/75 leading-relaxed">
                All aesthetic treatments will be performed by highly trained, licensed medical professionals with an eye for detail.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
