import type { Metadata } from 'next'
import { PageHero } from '@/components/sections/page-hero'
import { CtaBanner } from '@/components/sections/cta-banner'

export const metadata: Metadata = {
  title: 'Blog',
  description:
    'Insights on secure engineering, accessible design, digital transformation, and building reliable software products.',
}

export default function BlogPage() {
  return (
    <>
      <PageHero
        eyebrow="Insights"
        title="Engineering wisdom and design lessons"
        description="Learn from our team on security, accessibility, performance optimization, and building products that last."
      />

      <section className="mx-auto max-w-6xl px-4 py-16 sm:py-20">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Latest articles
          </h2>
          <p className="mt-6 max-w-2xl mx-auto text-pretty leading-relaxed text-foreground-secondary">
            Our blog is coming soon. In the meantime, check out our latest insights on secure development and accessible design.
          </p>
        </div>
      </section>

      <CtaBanner />
    </>
  )
}
