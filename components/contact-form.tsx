"use client"

import { useState, type FormEvent } from "react"
import { Check } from "lucide-react"

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle")

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus("submitting")
    // Simulated submission — connect to your provider of choice
    await new Promise((r) => setTimeout(r, 800))
    setStatus("success")
    ;(e.target as HTMLFormElement).reset()
  }

  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-6">
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="flex flex-col gap-2">
          <label htmlFor="name" className="text-[11px] uppercase tracking-[0.22em] text-ink/70">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            autoComplete="name"
            className="border-b border-border bg-transparent py-3 text-base text-ink outline-none transition-colors placeholder:text-ink/30 focus:border-cognac"
            placeholder="Your full name"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="email" className="text-[11px] uppercase tracking-[0.22em] text-ink/70">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            className="border-b border-border bg-transparent py-3 text-base text-ink outline-none transition-colors placeholder:text-ink/30 focus:border-cognac"
            placeholder="you@example.com"
          />
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="message" className="text-[11px] uppercase tracking-[0.22em] text-ink/70">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className="resize-none border-b border-border bg-transparent py-3 text-base text-ink outline-none transition-colors placeholder:text-ink/30 focus:border-cognac"
          placeholder="How can we help?"
        />
      </div>

      <div className="flex flex-col items-start gap-4 pt-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs text-ink/55">
          By submitting, you agree to be contacted about your inquiry. We never share your information.
        </p>
        <button
          type="submit"
          disabled={status === "submitting" || status === "success"}
          className="group inline-flex items-center gap-2 rounded-full bg-cognac px-7 py-3.5 text-xs uppercase tracking-[0.22em] text-primary-foreground transition-colors hover:bg-cognac-dark disabled:opacity-70"
        >
          {status === "success" ? (
            <>
              <Check className="h-4 w-4" />
              Sent
            </>
          ) : status === "submitting" ? (
            "Sending..."
          ) : (
            <>
              Send Message
              <span className="h-px w-6 bg-primary-foreground/60 transition-all group-hover:w-10" />
            </>
          )}
        </button>
      </div>

      {status === "success" ? (
        <p className="rounded-md bg-pine/10 p-4 text-sm text-pine">
          Thank you — we&apos;ve received your note and will be in touch shortly.
        </p>
      ) : null}
    </form>
  )
}
