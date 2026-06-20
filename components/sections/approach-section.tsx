import { Lock, Accessibility, MessagesSquare, Recycle, Handshake, ArrowRight } from 'lucide-react'
import { ButtonLink } from '@/components/ui/button-link'
import { SectionHeading } from '@/components/sections/section-heading'

const pillars = [
  {
    icon: Lock,
    title: 'Security First Approach',
    description: 'Secure architecture, data protection, and proactive risk management at every layer.',
  },
  {
    icon: Accessibility,
    title: 'Accessibility Standards',
    description: 'Inclusive, WCAG 2.1 AA-compliant experiences usable by everyone.',
  },
  {
    icon: MessagesSquare,
    title: 'Transparent Communication',
    description: 'Honest estimates, clear updates, and no surprises throughout the engagement.',
  },
  {
    icon: Recycle,
    title: 'Sustainable Development',
    description: 'Maintainable codebases and architecture that reduce technical debt over time.',
  },
  {
    icon: Handshake,
    title: 'Long-Term Relationships',
    description: 'We measure success by the partnerships we keep, not the projects we close.',
  },
]

export function ApproachSection() {
  return (
    <section className="bg-background py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <SectionHeading
              eyebrow="Our approach"
              title="A trusted technology partner, not just another agency"
              description="We combine engineering excellence with a people-first philosophy. Our work is grounded in principles that protect your business and earn lasting trust."
              align="left"
            />
            <ButtonLink
              href="/about"
              size="lg"
              className="mt-8 px-7 rounded-full bg-primary hover:bg-secondary"
            >
              More about us
              <ArrowRight className="size-4" aria-hidden="true" />
            </ButtonLink>
          </div>

          <ul className="space-y-4">
            {pillars.map(({ icon: Icon, title, description }) => (
              <li
                key={title}
                className="flex gap-4 rounded-2xl border border-border/60 bg-surface p-5 shadow-sm shadow-primary/5"
              >
                <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent">
                  <Icon className="size-5" aria-hidden="true" />
                </span>
                <div>
                  <h3 className="font-heading font-semibold text-foreground">
                    {title}
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                    {description}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
