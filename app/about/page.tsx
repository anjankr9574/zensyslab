import type { Metadata } from 'next'
import { Lock, Accessibility, MessagesSquare, Recycle, Handshake, Target, Sparkles } from 'lucide-react'
import { PageHero } from '@/components/sections/page-hero'
import { SectionHeading } from '@/components/sections/section-heading'
import { CtaBanner } from '@/components/sections/cta-banner'
import { CORE_VALUES } from '@/lib/services-data'

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'ZensysLab Technologies is a trusted engineering partner built on security, accessibility, transparency, and long-term client relationships.',
}

const PILLARS = [
  {
    icon: Lock,
    title: 'Security First Approach',
    body: 'We treat security as a foundation, not an afterthought. Threat modeling, secure defaults, and proactive risk management are built into every engagement.',
  },
  {
    icon: Accessibility,
    title: 'Accessibility Standards',
    body: 'Every product we ship targets WCAG 2.1 AA. We believe digital experiences should be usable by everyone, regardless of ability or device.',
  },
  {
    icon: MessagesSquare,
    title: 'Transparent Communication',
    body: 'Honest estimates, clear updates, and no surprises. You always know where your project stands and what comes next.',
  },
  {
    icon: Recycle,
    title: 'Sustainable Development',
    body: 'We write maintainable code and design architecture that reduces technical debt, keeping your software healthy for years.',
  },
  {
    icon: Handshake,
    title: 'Long-Term Relationships',
    body: 'We measure success by the partnerships we keep. Most of our work comes from clients who stay with us for years.',
  },
]

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About ZensysLab"
        title="A trusted technology partner, built for the long term"
        description="We help businesses establish and scale their digital presence through engineering excellence, transparent communication, and accessibility-first design."
      />

      {/* Mission */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:py-20">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <span className="inline-flex size-12 items-center justify-center rounded-2xl bg-accent/10 text-accent">
              <Target className="size-6" aria-hidden="true" />
            </span>
            <h2 className="mt-6 text-3xl font-bold tracking-tight text-foreground">
              Our mission
            </h2>
            <p className="mt-4 text-pretty leading-relaxed text-foreground-secondary">
              To help businesses establish and scale their digital presence
              through engineering excellence, transparent communication,
              accessibility-first design, and long-term partnerships.
            </p>
            <p className="mt-4 text-pretty leading-relaxed text-foreground-secondary">
              We are not just another agency. We are the engineering partner you
              call when reliability, security, and craftsmanship actually matter.
            </p>
          </div>
          <div>
            <span className="inline-flex size-12 items-center justify-center rounded-2xl bg-accent-secondary/10 text-accent-secondary">
              <Sparkles className="size-6" aria-hidden="true" />
            </span>
            <h2 className="mt-6 text-3xl font-bold tracking-tight text-foreground">
              Our core values
            </h2>
            <ul className="mt-6 flex flex-wrap gap-3">
              {CORE_VALUES.map((value) => (
                <li
                  key={value}
                  className="rounded-full border border-border bg-surface px-4 py-2 text-sm font-medium text-foreground shadow-soft"
                >
                  {value}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Pillars */}
      <section className="bg-surface py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4">
          <SectionHeading
            eyebrow="How We Work"
            title="The principles behind every engagement"
            description="These are the commitments that shape how we design, build, and support your software."
          />
          <div className="mt-12 flex flex-wrap justify-center gap-6">
            {PILLARS.map((pillar) => {
              const Icon = pillar.icon
              return (
                <div
                  key={pillar.title}
                  className="w-full max-w-sm rounded-3xl bg-background p-7 shadow-soft ring-1 ring-border/60 md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]"
                >
                  <span className="inline-flex size-11 items-center justify-center rounded-2xl bg-accent/10 text-accent">
                    <Icon className="size-5" aria-hidden="true" />
                  </span>
                  <h3 className="mt-5 text-lg font-semibold text-foreground">
                    {pillar.title}
                  </h3>
                  <p className="mt-2 text-pretty text-sm leading-relaxed text-foreground-secondary">
                    {pillar.body}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  )
}
