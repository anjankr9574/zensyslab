'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { Menu, X, ShieldCheck, ChevronDown } from 'lucide-react'
import { ButtonLink } from '@/components/ui/button-link'
import { COMPANY, NAV_LINKS, PRIMARY_NAV, MORE_NAV } from '@/lib/constants'
import { cn } from '@/lib/utils'

export function SiteHeader() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)
  const [moreOpen, setMoreOpen] = useState(false)

  const isActive = (href: string) =>
    href === '/' ? pathname === '/' : pathname.startsWith(href)

  return (
    <header className="sticky top-0 z-40 w-full border-b border-border/70 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="flex items-center gap-2 rounded-lg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
          aria-label={`${COMPANY.name} home`}
        >
          <span className="flex size-9 items-center justify-center rounded-xl bg-primary text-primary-foreground">
            <ShieldCheck className="size-5" aria-hidden="true" />
          </span>
          <span className="flex flex-col leading-none">
            <span className="font-heading text-base font-bold tracking-tight text-foreground">
              ZensysLab
            </span>
            <span className="text-[10px] font-medium uppercase tracking-widest text-muted-foreground">
              Technologies
            </span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav
          className="hidden items-center gap-1 lg:flex"
          aria-label="Primary"
        >
          {PRIMARY_NAV.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              aria-current={isActive(link.href) ? 'page' : undefined}
              className={cn(
                'rounded-full px-3 py-2 text-sm font-medium transition-colors',
                isActive(link.href)
                  ? 'bg-muted text-primary'
                  : 'text-muted-foreground hover:bg-muted hover:text-foreground',
              )}
            >
              {link.label}
            </Link>
          ))}
          <div
            className="relative"
            onMouseEnter={() => setMoreOpen(true)}
            onMouseLeave={() => setMoreOpen(false)}
          >
            <button
              type="button"
              aria-expanded={moreOpen}
              aria-haspopup="true"
              onClick={() => setMoreOpen((v) => !v)}
              className="flex items-center gap-1 rounded-full px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
            >
              More
              <ChevronDown className="size-4" aria-hidden="true" />
            </button>
            {moreOpen && (
              <div className="absolute right-0 top-full w-48 pt-2">
                <div className="glass-card overflow-hidden rounded-2xl border border-border/70 p-2 shadow-lg shadow-primary/5">
                  {MORE_NAV.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className={cn(
                        'block rounded-xl px-3 py-2 text-sm font-medium transition-colors',
                        isActive(link.href)
                          ? 'bg-muted text-primary'
                          : 'text-muted-foreground hover:bg-muted hover:text-foreground',
                      )}
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <ButtonLink
            href="/contact"
            variant="outline"
            className="rounded-full border-border bg-surface"
          >
            Talk to us
          </ButtonLink>
          <ButtonLink href="/quote" className="rounded-full bg-primary text-primary-foreground hover:bg-secondary">
            Get a Quote
          </ButtonLink>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          className="inline-flex size-10 items-center justify-center rounded-xl text-foreground lg:hidden"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? (
            <X className="size-6" aria-hidden="true" />
          ) : (
            <Menu className="size-6" aria-hidden="true" />
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-border bg-surface lg:hidden">
          <nav
            className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-4 sm:px-6"
            aria-label="Mobile"
          >
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                aria-current={isActive(link.href) ? 'page' : undefined}
                className={cn(
                  'rounded-xl px-4 py-3 text-base font-medium transition-colors',
                  isActive(link.href)
                    ? 'bg-muted text-primary'
                    : 'text-foreground hover:bg-muted',
                )}
              >
                {link.label}
              </Link>
            ))}
            <div className="mt-2 flex flex-col gap-2">
              <ButtonLink
                href="/contact"
                onClick={() => setOpen(false)}
                variant="outline"
                className="w-full rounded-full"
              >
                Talk to us
              </ButtonLink>
              <ButtonLink
                href="/quote"
                onClick={() => setOpen(false)}
                className="w-full rounded-full bg-primary text-primary-foreground hover:bg-secondary"
              >
                Get a Quote
              </ButtonLink>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
