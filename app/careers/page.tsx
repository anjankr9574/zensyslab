import type { Metadata } from 'next'
import { PageHero } from '@/components/sections/page-hero'
import { CtaBanner } from '@/components/sections/cta-banner'

export const metadata: Metadata = {
  title: 'Careers',
  description:
    'Join ZensysLab Technologies and build secure, accessible digital products with a team dedicated to engineering excellence.',
}

export default function CareersPage() {
  return (
    <>
      <PageHero
        eyebrow="Careers"
        title="Build with a team that cares about quality"
        description="We're hiring engineers, designers, and operations specialists who value security, accessibility, and long-term craftsmanship."
      />

      <section className="mx-auto max-w-6xl px-4 py-16 sm:py-20">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Open positions
          </h2>
          <p className="mt-6 max-w-2xl mx-auto text-pretty leading-relaxed text-foreground-secondary">
            We're always looking for talented people to join our team. Check back soon for open roles, or reach out to learn about future opportunities.
          </p>
        </div>
      </section>

      <CtaBanner
        title="Ready to make an impact?"
        description="Send us your resume and tell us about your interests. We'd love to hear from you."
      />
    </>
  )
}
