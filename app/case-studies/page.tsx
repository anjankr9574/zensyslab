import type { Metadata } from 'next'
import { PageHero } from '@/components/sections/page-hero'
import { CtaBanner } from '@/components/sections/cta-banner'

export const metadata: Metadata = {
  title: 'Case Studies',
  description:
    'Deep dives into how ZensysLab Technologies solved real business challenges with secure, scalable software solutions.',
}

export default function CaseStudiesPage() {
  return (
    <>
      <PageHero
        eyebrow="Case Studies"
        title="Real challenges, real solutions"
        description="See how we've helped businesses achieve digital transformation through secure engineering and long-term partnership."
      />

      <section className="mx-auto max-w-6xl px-4 py-16 sm:py-20">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Success stories
          </h2>
          <p className="mt-6 max-w-2xl mx-auto text-pretty leading-relaxed text-foreground-secondary">
            Our case studies showcase real client wins. Reach out to discuss how we can deliver similar results for your organization.
          </p>
        </div>
      </section>

      <CtaBanner />
    </>
  )
}
