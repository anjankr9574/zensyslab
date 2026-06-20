import type { Metadata } from 'next'
import { PageHero } from '@/components/sections/page-hero'
import { CtaBanner } from '@/components/sections/cta-banner'

export const metadata: Metadata = {
  title: 'Industries We Serve',
  description:
    'Digital transformation and secure software solutions for fintech, healthcare, SaaS, and enterprise organizations.',
}

export default function IndustriesPage() {
  return (
    <>
      <PageHero
        eyebrow="Industries"
        title="Sector expertise in secure digital solutions"
        description="We partner with forward-thinking organizations across finance, healthcare, SaaS, and enterprise looking for reliable engineering partners."
      />

      <section className="mx-auto max-w-6xl px-4 py-16 sm:py-20">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Who we work with
          </h2>
          <p className="mt-6 max-w-2xl mx-auto text-pretty leading-relaxed text-foreground-secondary">
            Deep experience across regulated industries, high-growth startups, and established enterprises requiring security and reliability.
          </p>
        </div>
      </section>

      <CtaBanner />
    </>
  )
}
