import type { Metadata } from 'next'
import { Check } from 'lucide-react'
import { PageHero } from '@/components/sections/page-hero'
import { CtaBanner } from '@/components/sections/cta-banner'
import { ButtonLink } from '@/components/ui/button-link'
import { SERVICES } from '@/lib/services-data'

export const metadata: Metadata = {
  title: 'Services',
  description:
    'Website development, mobile apps, custom software, UI/UX design, SEO, digital marketing, and long-term maintenance — engineered with security and accessibility first.',
}

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="What We Do"
        title="Services engineered for long-term growth"
        description="From your first line of code to years of dependable support, we partner with you across the full digital lifecycle."
      >
        <ButtonLink
          href="/quote"
          className="rounded-full bg-surface px-7 text-primary hover:bg-surface/90"
        >
          Start Your Project
        </ButtonLink>
      </PageHero>

      {/* Quick nav */}
      <nav
        aria-label="Services"
        className="border-b border-border bg-surface"
      >
        <div className="mx-auto flex max-w-6xl flex-wrap gap-2 px-4 py-4">
          {SERVICES.map((service) => (
            <a
              key={service.slug}
              href={`#${service.slug}`}
              className="rounded-full border border-border px-4 py-1.5 text-sm font-medium text-foreground-secondary transition-colors hover:border-accent hover:text-accent"
            >
              {service.title}
            </a>
          ))}
        </div>
      </nav>

      <div className="mx-auto max-w-6xl px-4 py-16 sm:py-20">
        <div className="flex flex-col gap-16 sm:gap-20">
          {SERVICES.map((service, index) => {
            const Icon = service.icon
            return (
              <section
                key={service.slug}
                id={service.slug}
                className="scroll-mt-24"
                aria-labelledby={`${service.slug}-title`}
              >
                <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:gap-16">
                  <div>
                    <span className="inline-flex size-12 items-center justify-center rounded-2xl bg-accent/10 text-accent">
                      <Icon className="size-6" aria-hidden="true" />
                    </span>
                    <p className="mt-6 text-sm font-medium text-accent">
                      {String(index + 1).padStart(2, '0')}
                    </p>
                    <h2
                      id={`${service.slug}-title`}
                      className="mt-2 text-2xl font-bold tracking-tight text-foreground sm:text-3xl"
                    >
                      {service.title}
                    </h2>
                    <p className="mt-4 text-pretty leading-relaxed text-foreground-secondary">
                      {service.description}
                    </p>
                    <div className="mt-6 flex flex-wrap gap-2">
                      {service.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-full bg-muted px-3 py-1 text-xs font-medium text-foreground-secondary"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="grid gap-6 sm:grid-cols-2">
                    <div className="rounded-3xl bg-surface p-6 shadow-soft ring-1 ring-border/60">
                      <h3 className="text-sm font-semibold uppercase tracking-wide text-foreground">
                        Benefits
                      </h3>
                      <ul className="mt-4 flex flex-col gap-3">
                        {service.benefits.map((benefit) => (
                          <li key={benefit} className="flex gap-2 text-sm leading-relaxed text-foreground-secondary">
                            <Check className="mt-0.5 size-4 shrink-0 text-accent-secondary" aria-hidden="true" />
                            <span>{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="rounded-3xl bg-surface p-6 shadow-soft ring-1 ring-border/60">
                      <h3 className="text-sm font-semibold uppercase tracking-wide text-foreground">
                        Our Process
                      </h3>
                      <ol className="mt-4 flex flex-col gap-3">
                        {service.process.map((step, i) => (
                          <li key={step} className="flex gap-3 text-sm leading-relaxed text-foreground-secondary">
                            <span className="flex size-5 shrink-0 items-center justify-center rounded-full bg-primary text-[11px] font-semibold text-primary-foreground">
                              {i + 1}
                            </span>
                            <span>{step}</span>
                          </li>
                        ))}
                      </ol>
                    </div>
                  </div>
                </div>
              </section>
            )
          })}
        </div>
      </div>

      <CtaBanner />
    </>
  )
}
