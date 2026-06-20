import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { SectionHeading } from '@/components/sections/section-heading'
import { SERVICES } from '@/lib/services-data'

export function ServicesOverview() {
  return (
    <section className="bg-background py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="What we do"
          title="Engineering services built around your goals"
          description="From first line of code to long-term support, we partner with you across the full digital lifecycle."
        />

        <div className="mt-14 flex flex-wrap justify-center gap-6">
          {SERVICES.map((service) => {
            const Icon = service.icon
            return (
              <Link
                key={service.slug}
                href={`/services#${service.slug}`}
                className="group glass-card flex w-full max-w-sm flex-col rounded-3xl border border-border/60 p-7 shadow-sm shadow-primary/5 transition-all hover:-translate-y-1 hover:border-accent/40 hover:shadow-lg hover:shadow-primary/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]"
              >
                <span className="flex size-12 items-center justify-center rounded-2xl bg-primary/5 text-primary transition-colors group-hover:bg-accent group-hover:text-accent-foreground">
                  <Icon className="size-6" aria-hidden="true" />
                </span>
                <h3 className="mt-5 font-heading text-xl font-semibold text-foreground">
                  {service.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {service.short}
                </p>
                <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-accent">
                  Learn more
                  <ArrowRight
                    className="size-4 transition-transform group-hover:translate-x-1"
                    aria-hidden="true"
                  />
                </span>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}
