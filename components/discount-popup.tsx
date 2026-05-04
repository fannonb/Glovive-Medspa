"use client"

import { useState, useEffect } from "react"
import { X } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"

export function DiscountPopup() {
  const [isOpen, setIsOpen] = useState(false)
  const [isMounted, setIsMounted] = useState(false)
  const pathname = usePathname()

  const getTreatmentTitle = () => {
    if (!pathname) return null
    if (pathname === '/treatments') return "Our Treatments"
    if (pathname.startsWith('/treatments/')) {
      const slug = pathname.replace('/treatments/', '')
      if (slug === 'iv-hydration') return "IV Hydration"
      if (slug === 'ketamine-iv-infusion') return "Ketamine IV Infusion"
      if (slug === 'nad-plus') return "NAD+"
      if (slug === 'aesthetic-treatments') return "Aesthetic Treatments"
      if (slug === 'vitality-therapy') return "Vitality Therapy"
      if (slug === 'body-balance') return "Body Balance"
      if (slug === 'concierge') return "Concierge IV Hydration"
      if (slug === 'vitamins') return "Vitamin Therapy"
      
      return slug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')
    }
    return null
  }

  const treatmentTitle = getTreatmentTitle()
  const storageKey = pathname?.startsWith('/treatments') 
    ? `glovive_discount_seen_${pathname}`
    : "glovive_discount_seen"

  useEffect(() => {
    setIsMounted(true)
    
    // Reset open state when route changes
    setIsOpen(false)
    
    const hasSeenPopup = localStorage.getItem(storageKey)
    
    if (!hasSeenPopup) {
      const checkScroll = () => {
        if (pathname === '/' || pathname === '') {
          // On homepage, trigger when treatments section is in view
          const servicesSection = document.getElementById('services')
          if (servicesSection) {
            const rect = servicesSection.getBoundingClientRect()
            // Trigger when the section enters the bottom 3/4 of the screen
            if (rect.top <= window.innerHeight * 0.75) {
              setIsOpen(true)
              window.removeEventListener("scroll", checkScroll)
              window.removeEventListener("resize", checkScroll)
            }
            return
          }
        }
        
        // Fallback or for other pages: halfway down
        const scrollableDistance = document.documentElement.scrollHeight - window.innerHeight
        if (scrollableDistance <= 0 || window.scrollY >= scrollableDistance / 2) {
          setIsOpen(true)
          window.removeEventListener("scroll", checkScroll)
          window.removeEventListener("resize", checkScroll)
        }
      }
      
      const timer = setTimeout(() => {
        window.addEventListener("scroll", checkScroll, { passive: true })
        window.addEventListener("resize", checkScroll, { passive: true })
        // Check immediately in case they are already scrolled halfway or page is short
        checkScroll()
      }, 500)
      
      return () => {
        clearTimeout(timer)
        window.removeEventListener("scroll", checkScroll)
        window.removeEventListener("resize", checkScroll)
      }
    }
  }, [pathname, storageKey])

  const handleClose = () => {
    setIsOpen(false)
    localStorage.setItem(storageKey, "true")
  }

  if (!isMounted || !isOpen) return null

  const isSpecificTreatment = treatmentTitle && treatmentTitle !== "Our Treatments"

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-md px-4">
      <div className="relative w-full max-w-md overflow-hidden rounded-[2rem] bg-gradient-to-b from-cognac to-cognac-dark text-linen shadow-2xl shadow-black/50 animate-in fade-in zoom-in-95 duration-500 border-2 border-white/10">
        <button
          onClick={handleClose}
          className="absolute right-4 top-4 z-20 rounded-full bg-black/20 p-2 text-white transition-colors hover:bg-black/40 hover:text-white backdrop-blur-md"
          aria-label="Close"
        >
          <X className="h-5 w-5" />
        </button>
        
        <div className="relative z-10 flex flex-col items-center p-10 text-center">
          <div className="mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-linen shadow-xl border-4 border-white/10 relative">
            <span className="font-serif text-[42px] text-cognac font-bold leading-none">
              10<span className="text-[24px]">%</span>
            </span>
          </div>
          
          {isSpecificTreatment ? (
            <>
              <h2 className="font-serif text-[28px] md:text-[32px] leading-[1.1] mb-3 text-white font-medium drop-shadow-md">
                10% Off <span className="text-[#FDE08B] block mt-1 font-semibold">{treatmentTitle}</span>
              </h2>
              <p className="text-white text-[16px] leading-relaxed mb-8 max-w-[280px] font-medium drop-shadow-sm">
                Enjoy 10% off your {treatmentTitle} session. Book your appointment today and start your journey to elevated wellness.
              </p>
            </>
          ) : (
            <>
              <h2 className="font-serif text-[32px] md:text-[36px] leading-[1.1] mb-3 text-white font-medium drop-shadow-md">
                Welcome to <em className="italic font-light text-[#FDE08B] font-semibold">GloVive</em>
              </h2>
              <p className="text-white text-[16px] leading-relaxed mb-8 max-w-[280px] font-medium drop-shadow-sm">
                Enjoy 10% off your first visit. Explore our services and start your journey to elevated wellness.
              </p>
            </>
          )}
          
          <Link
            href={isSpecificTreatment ? "/booking" : "/treatments"}
            onClick={handleClose}
            className="w-full flex items-center justify-center rounded-full bg-linen px-8 py-4 text-[14px] uppercase tracking-[0.2em] font-bold text-cognac-dark transition-all hover:scale-[1.03] hover:bg-white hover:shadow-xl active:scale-[0.98]"
          >
            {isSpecificTreatment ? "Book this treatment" : "View our treatments"}
          </Link>
          
          <p className="mt-6 text-[11px] text-linen/90 uppercase tracking-[0.25em] font-bold drop-shadow-sm">
            {isSpecificTreatment ? "Applies to selected service" : "Applies to all services"}
          </p>
        </div>
        
        {/* Subtle glows to add depth without muddying text */}
        <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-white/10 to-transparent pointer-events-none" />
      </div>
    </div>
  )
}
