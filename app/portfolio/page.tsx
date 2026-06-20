import type { Metadata } from 'next'
import { PageHero } from '@/components/sections/page-hero'
import { CtaBanner } from '@/components/sections/cta-banner'

export const metadata: Metadata = {
  title: 'Portfolio',
  description:
    'Recent projects and digital products built by ZensysLab Technologies. See how we solve real business challenges.',
}

export default function PortfolioPage() {
  return (
    <>
      <PageHero
        eyebrow="Portfolio"
        title="Projects built with engineering excellence"
        description="A selection of products and platforms we've engineered for security, performance, and long-term reliability."
      />

      <section className="mx-auto max-w-6xl px-4 py-16 sm:py-20">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Featured work
          </h2>
          <p className="mt-6 max-w-2xl mx-auto text-pretty leading-relaxed text-foreground-secondary">
            Our portfolio is being curated. Contact us to learn about specific projects and how we can help with yours.
          </p>
        </div>
      </section>

      <CtaBanner />
    </>
  )
}
