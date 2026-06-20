import type { Metadata } from 'next'
import { PageHero } from '@/components/sections/page-hero'
import { CtaBanner } from '@/components/sections/cta-banner'

export const metadata: Metadata = {
  title: 'Technologies',
  description:
    'Modern tools, frameworks, and platforms we use to build secure, scalable, and accessible digital products.',
}

export default function TechnologiesPage() {
  return (
    <>
      <PageHero
        eyebrow="Technology Stack"
        title="Tools and frameworks we trust"
        description="We use modern, proven technologies selected for security, performance, maintainability, and long-term support."
      />

      <section className="mx-auto max-w-6xl px-4 py-16 sm:py-20">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Our tech preferences
          </h2>
          <p className="mt-6 max-w-2xl mx-auto text-pretty leading-relaxed text-foreground-secondary">
            Frontend, backend, database, and infrastructure tools selected for reliability, security, and team productivity.
          </p>
        </div>
      </section>

      <CtaBanner />
    </>
  )
}
