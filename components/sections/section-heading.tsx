import { cn } from '@/lib/utils'

type SectionHeadingProps = {
  eyebrow?: string
  title: string
  description?: string
  align?: 'left' | 'center'
  className?: string
  inverted?: boolean
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'center',
  className,
  inverted = false,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        'max-w-2xl',
        align === 'center' && 'mx-auto text-center',
        className,
      )}
    >
      {eyebrow && (
        <span
          className={cn(
            'inline-block text-sm font-semibold uppercase tracking-wider',
            inverted ? 'text-teal' : 'text-accent',
          )}
        >
          {eyebrow}
        </span>
      )}
      <h2
        className={cn(
          'mt-3 text-balance font-heading text-3xl font-bold tracking-tight sm:text-4xl',
          inverted ? 'text-primary-foreground' : 'text-foreground',
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            'mt-4 text-pretty text-lg leading-relaxed',
            inverted ? 'text-primary-foreground/75' : 'text-muted-foreground',
          )}
        >
          {description}
        </p>
      )}
    </div>
  )
}
