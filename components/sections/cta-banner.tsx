import { ArrowRight } from 'lucide-react'
import { ButtonLink } from '@/components/ui/button-link'

type CtaBannerProps = {
  title?: string
  description?: string
}

export function CtaBanner({
  title = 'Ready to build something reliable?',
  description = "Tell us about your project and we'll show you how a long-term engineering partner makes the difference.",
}: CtaBannerProps) {
  return (
    <section className="bg-background py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-[2rem] bg-primary px-6 py-14 text-center text-primary-foreground sm:px-12">
          <div
            aria-hidden="true"
            className="absolute -right-16 -top-16 size-56 rounded-full bg-teal/20 blur-3xl"
          />
          <div
            aria-hidden="true"
            className="absolute -bottom-20 -left-10 size-56 rounded-full bg-accent/20 blur-3xl"
          />
          <div className="relative mx-auto max-w-2xl">
            <h2 className="text-balance font-heading text-3xl font-bold tracking-tight sm:text-4xl">
              {title}
            </h2>
            <p className="mt-4 text-pretty text-lg leading-relaxed text-primary-foreground/80">
              {description}
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <ButtonLink
                href="/quote"
                size="lg"
                className="rounded-full bg-surface px-7 text-primary hover:bg-surface/90"
              >
                Get a Quote
                <ArrowRight className="size-4" aria-hidden="true" />
              </ButtonLink>
              <ButtonLink
                href="/contact"
                size="lg"
                variant="outline"
                className="rounded-full border-primary-foreground/30 bg-transparent px-7 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
              >
                Contact Us
              </ButtonLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
