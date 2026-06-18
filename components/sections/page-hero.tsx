import type { ReactNode } from 'react'

interface PageHeroProps {
  eyebrow?: string
  title: string
  description?: string
  children?: ReactNode
}

export function PageHero({ eyebrow, title, description, children }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-primary text-primary-foreground">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.12]"
        style={{
          backgroundImage:
            'linear-gradient(to right, oklch(1 0 0 / 0.6) 1px, transparent 1px), linear-gradient(to bottom, oklch(1 0 0 / 0.6) 1px, transparent 1px)',
          backgroundSize: '56px 56px',
        }}
        aria-hidden="true"
      />
      <div className="pointer-events-none absolute -right-24 -top-24 size-80 rounded-full bg-accent/20 blur-3xl" aria-hidden="true" />
      <div className="pointer-events-none absolute -bottom-24 left-1/4 size-72 rounded-full bg-accent-secondary/15 blur-3xl" aria-hidden="true" />
      <div className="relative mx-auto max-w-3xl px-4 py-20 text-center sm:py-24 lg:py-28">
        {eyebrow ? (
          <span className="inline-block rounded-full border border-primary-foreground/20 bg-primary-foreground/5 px-4 py-1 text-sm font-medium text-accent-secondary">
            {eyebrow}
          </span>
        ) : null}
        <h1 className="mt-5 text-balance text-4xl font-bold tracking-tight sm:text-5xl">
          {title}
        </h1>
        {description ? (
          <p className="mx-auto mt-5 max-w-2xl text-pretty text-lg leading-relaxed text-primary-foreground/75">
            {description}
          </p>
        ) : null}
        {children ? <div className="mt-8 flex flex-wrap justify-center gap-3">{children}</div> : null}
      </div>
    </section>
  )
}
