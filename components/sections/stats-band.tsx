const stats = [
  { value: '99.9%', label: 'Uptime delivered' },
  { value: '90+', label: 'Lighthouse scores' },
  { value: 'WCAG AA', label: 'Accessibility standard' },
  { value: '100%', label: 'Transparent pricing' },
]

export function StatsBand() {
  return (
    <section className="bg-secondary py-14 text-primary-foreground">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <dl className="grid grid-cols-2 gap-8 lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <dt className="sr-only">{stat.label}</dt>
              <dd>
                <span className="block font-heading text-3xl font-bold text-teal sm:text-4xl">
                  {stat.value}
                </span>
                <span className="mt-1 block text-sm text-primary-foreground/75">
                  {stat.label}
                </span>
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
