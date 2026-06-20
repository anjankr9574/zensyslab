import type { Metadata } from 'next'
import { PageHero } from '@/components/sections/page-hero'
import { QuoteForm } from '@/components/forms/quote-form'
import { CtaBanner } from '@/components/sections/cta-banner'

export const metadata: Metadata = {
  title: 'Quote Request',
  description:
    'Request a quote from ZensysLab Technologies for your next secure, scalable software or digital product initiative.',
}

export default function QuotePage() {
  return (
    <>
      <PageHero
        eyebrow="Quote Request"
        title="Request a project quote"
        description="Share your requirements and timeline, and we’ll respond with a clear scope and next steps."
      />

      <section className="mx-auto max-w-6xl px-4 py-16 sm:py-20">
        <div className="grid gap-16 lg:grid-cols-[1.2fr_0.8fr] lg:items-start">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Get the details you need to move forward.
            </h2>
            <p className="mt-6 max-w-2xl text-pretty leading-relaxed text-foreground-secondary">
              We provide realistic estimates backed by secure architecture, performance planning, and long-term support considerations.
            </p>
          </div>

          <QuoteForm />
        </div>
      </section>

      <CtaBanner />
    </>
  )
}
