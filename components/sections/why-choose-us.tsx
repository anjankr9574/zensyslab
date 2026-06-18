import {
  ShieldCheck,
  Accessibility,
  Truck,
  Eye,
  Layers,
  HeartHandshake,
} from 'lucide-react'
import { SectionHeading } from '@/components/sections/section-heading'

const reasons = [
  {
    icon: ShieldCheck,
    title: 'Security by Design',
    description:
      'Security is built into every layer from day one, not bolted on at the end. Threat modeling, secure defaults, and rigorous reviews.',
  },
  {
    icon: Accessibility,
    title: 'Accessibility First',
    description:
      'We build to WCAG 2.1 AA so every user can engage with your product, regardless of ability or device.',
  },
  {
    icon: Truck,
    title: 'Reliable Delivery',
    description:
      'Predictable timelines and dependable releases backed by automated testing and continuous integration.',
  },
  {
    icon: Eye,
    title: 'Transparent Process',
    description:
      'Clear communication, honest estimates, and full visibility into progress at every stage of the engagement.',
  },
  {
    icon: Layers,
    title: 'Scalable Architecture',
    description:
      'Systems engineered to grow with you, from your first users to enterprise scale, without costly rewrites.',
  },
  {
    icon: HeartHandshake,
    title: 'Long-Term Partnership',
    description:
      'We invest in relationships, not transactions. Your continued success is the measure of ours.',
  },
]

export function WhyChooseUs() {
  return (
    <section className="bg-muted/40 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Why choose us"
          title="A partner you can build a future on"
          description="The principles that guide every project we take on and every relationship we build."
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map(({ icon: Icon, title, description }) => (
            <article
              key={title}
              className="rounded-3xl border border-border/60 bg-surface p-7 shadow-sm shadow-primary/5"
            >
              <span className="flex size-12 items-center justify-center rounded-2xl bg-teal/10 text-teal">
                <Icon className="size-6" aria-hidden="true" />
              </span>
              <h3 className="mt-5 font-heading text-xl font-semibold text-foreground">
                {title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
