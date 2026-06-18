import Link from 'next/link'
import { ShieldCheck, Mail, Phone, MapPin } from 'lucide-react'
import { COMPANY, NAV_LINKS } from '@/lib/constants'

const serviceLinks = [
  { label: 'Website Development', href: '/services#website-development' },
  { label: 'Mobile App Development', href: '/services#mobile-app-development' },
  { label: 'Software Development', href: '/services#software-development' },
  { label: 'UI/UX Design', href: '/services#ui-ux-design' },
  { label: 'SEO Services', href: '/services#seo-services' },
  { label: 'Digital Marketing', href: '/services#digital-marketing' },
]

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2" aria-label={`${COMPANY.name} home`}>
              <span className="flex size-9 items-center justify-center rounded-xl bg-surface/10">
                <ShieldCheck className="size-5 text-teal" aria-hidden="true" />
              </span>
              <span className="font-heading text-lg font-bold">ZensysLab</span>
            </Link>
            <p className="max-w-xs text-sm leading-relaxed text-primary-foreground/70">
              {COMPANY.tagline} Helping businesses build scalable digital
              solutions through engineering excellence and long-term
              partnership.
            </p>
          </div>

          <nav aria-label="Footer navigation">
            <h2 className="font-heading text-sm font-semibold uppercase tracking-wider text-primary-foreground/90">
              Company
            </h2>
            <ul className="mt-4 space-y-2.5">
              {NAV_LINKS.slice(0, 7).map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-primary-foreground/70 transition-colors hover:text-teal"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Services navigation">
            <h2 className="font-heading text-sm font-semibold uppercase tracking-wider text-primary-foreground/90">
              Services
            </h2>
            <ul className="mt-4 space-y-2.5">
              {serviceLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-primary-foreground/70 transition-colors hover:text-teal"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="font-heading text-sm font-semibold uppercase tracking-wider text-primary-foreground/90">
              Get in touch
            </h2>
            <ul className="mt-4 space-y-3">
              <li className="flex items-center gap-3 text-sm text-primary-foreground/70">
                <Mail className="size-4 shrink-0 text-teal" aria-hidden="true" />
                <a href={`mailto:${COMPANY.email}`} className="hover:text-teal">
                  {COMPANY.email}
                </a>
              </li>
              <li className="flex items-center gap-3 text-sm text-primary-foreground/70">
                <Phone className="size-4 shrink-0 text-teal" aria-hidden="true" />
                <a href={`tel:${COMPANY.phone}`} className="hover:text-teal">
                  {COMPANY.phone}
                </a>
              </li>
              <li className="flex items-center gap-3 text-sm text-primary-foreground/70">
                <MapPin className="size-4 shrink-0 text-teal" aria-hidden="true" />
                {COMPANY.address}
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-primary-foreground/15 pt-6 sm:flex-row">
          <p className="text-sm text-primary-foreground/60">
            &copy; {new Date().getFullYear()} {COMPANY.name}. All rights
            reserved.
          </p>
          <p className="text-sm text-primary-foreground/60">
            Built with security, accessibility, and care.
          </p>
        </div>
      </div>
    </footer>
  )
}
