import type { Metadata } from 'next'
import { PageHero } from '@/components/sections/page-hero'
import { InternshipForm } from '@/components/forms/internship-form'
import { CtaBanner } from '@/components/sections/cta-banner'

export const metadata: Metadata = {
  title: 'Internship Application',
  description:
    'Apply for an internship with ZensysLab Technologies and join a team that builds secure, accessible, and reliable digital products.',
}

export default function InternshipPage() {
  return (
    <>
      <PageHero
        eyebrow="Internship"
        title="Apply for our internship program"
        description="Join a remote-first engineering team focused on secure development, accessibility, and product excellence."
      />

      <section className="mx-auto max-w-6xl px-4 py-16 sm:py-20">
        <div className="grid gap-16 lg:grid-cols-[1.2fr_0.8fr] lg:items-start">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Build practical experience on real client work.
            </h2>
            <p className="mt-6 max-w-2xl text-pretty leading-relaxed text-foreground-secondary">
              Our internship placements emphasize mentorship, secure engineering practices, and building products that make a measurable impact.
            </p>
          </div>

          <InternshipForm />
        </div>
      </section>

      <CtaBanner />
    </>
  )
}
