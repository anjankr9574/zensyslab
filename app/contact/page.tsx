import type { Metadata } from 'next'
import { PageHero } from '@/components/sections/page-hero'
import { ContactForm } from '@/components/forms/contact-form'
import { CtaBanner } from '@/components/sections/cta-banner'

export const metadata: Metadata = {
  title: 'Contact Us',
  description:
    'Get in touch with ZensysLab Technologies for secure, reliable digital transformation support and engineering partnership.',
}

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Talk to our engineering team"
        description="Share your goals and challenges, and we’ll recommend the best path for your next digital initiative."
      />

      <section className="mx-auto max-w-6xl px-4 py-16 sm:py-20">
        <div className="grid gap-16 lg:grid-cols-[1.2fr_0.8fr] lg:items-start">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Tell us about your project.
            </h2>
            <p className="mt-6 max-w-2xl text-pretty leading-relaxed text-foreground-secondary">
              Whether you need a new digital product, an audit of your current stack, or a long-term support partner,
              our team is ready to evaluate your needs and share a secure plan.
            </p>
            <div className="mt-10 grid gap-6 sm:grid-cols-2">
              <div className="rounded-3xl bg-surface p-6 shadow-soft ring-1 ring-border/60">
                <p className="text-sm font-semibold uppercase tracking-wide text-accent">Email</p>
                <p className="mt-4 text-sm text-foreground-secondary">hello@zensyslab.com</p>
              </div>
              <div className="rounded-3xl bg-surface p-6 shadow-soft ring-1 ring-border/60">
                <p className="text-sm font-semibold uppercase tracking-wide text-accent">Phone</p>
                <p className="mt-4 text-sm text-foreground-secondary">+1 (555) 010-2030</p>
              </div>
            </div>
          </div>

          <ContactForm />
        </div>
      </section>

      <CtaBanner />
    </>
  )
}
