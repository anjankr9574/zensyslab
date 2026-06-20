import Image from 'next/image'
import { ArrowRight, ShieldCheck, Accessibility, Truck, MessagesSquare } from 'lucide-react'
import { ButtonLink } from '@/components/ui/button-link'

const trustIndicators = [
  { icon: ShieldCheck, label: 'Security First' },
  { icon: Accessibility, label: 'Accessibility Focused' },
  { icon: Truck, label: 'Reliable Delivery' },
  { icon: MessagesSquare, label: 'Transparent Communication' },
]

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-primary text-primary-foreground">
      {/* Background image */}
      <Image
        src="/hero-architecture.png"
        alt=""
        fill
        priority
        sizes="100vw"
        className="-z-20 object-cover opacity-40 motion-safe:animate-float-slow"
      />
      {/* Drifting gradient overlay */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-gradient-to-br from-primary via-primary/85 to-secondary motion-safe:animate-drift-gradient"
      />
      {/* Animated grid lines */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 overflow-hidden opacity-[0.12]"
      >
        <div
          className="absolute inset-0 motion-safe:animate-grid-pan"
          style={{
            backgroundImage:
              'linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)',
            backgroundSize: '48px 48px',
          }}
        />
      </div>
      {/* Soft floating accents */}
      <div
        aria-hidden="true"
        className="absolute -right-24 top-1/4 -z-10 size-72 rounded-full bg-teal/20 blur-3xl motion-safe:animate-float-slow"
      />
      <div
        aria-hidden="true"
        className="absolute -left-20 bottom-0 -z-10 size-64 rounded-full bg-accent/20 blur-3xl"
      />

      <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/20 bg-primary-foreground/5 px-4 py-1.5 text-sm font-medium text-primary-foreground/90 backdrop-blur">
            <span className="size-2 rounded-full bg-teal" aria-hidden="true" />
            Trusted Technology Partner
          </span>

          <h1 className="mt-6 text-balance font-heading text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            Secure. Reliable. Built for Growth.
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-primary-foreground/80">
            Helping businesses build scalable digital solutions through
            engineering excellence, transparent collaboration, and long-term
            partnership.
          </p>

          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <ButtonLink
              href="/quote"
              size="lg"
              className="rounded-full bg-surface px-7 text-primary hover:border-primary-foreground/30 hover:text-primary-foreground"
            >
              Start Your Project
              <ArrowRight className="size-4" aria-hidden="true" />
            </ButtonLink>
            <ButtonLink
              href="/services"
              size="lg"
              variant="outline"
              className="rounded-full border-primary-foreground/30 bg-transparent px-7 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
            >
              View Our Services
            </ButtonLink>
          </div>

          <ul className="mx-auto mt-14 grid max-w-2xl grid-cols-2 gap-4 sm:grid-cols-4">
            {trustIndicators.map(({ icon: Icon, label }) => (
              <li
                key={label}
                className="flex flex-col items-center gap-2 rounded-2xl border border-primary-foreground/10 bg-primary-foreground/5 px-3 py-4 backdrop-blur"
              >
                <Icon className="size-6 text-teal" aria-hidden="true" />
                <span className="text-center text-xs font-medium text-primary-foreground/85">
                  {label}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
