export const COMPANY = {
  name: 'ZensysLab Technologies',
  shortName: 'ZensysLab',
  tagline: 'Secure. Reliable. Built for Growth.',
  email: 'hello@zensyslab.com',
  phone: '+1 (555) 010-2030',
  address: 'Remote-first · Serving clients worldwide',
} as const

export const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Technologies', href: '/technologies' },
  { label: 'Portfolio', href: '/portfolio' },
  { label: 'Case Studies', href: '/case-studies' },
  { label: 'Internship', href: '/internship' },
  { label: 'Hackathons', href: '/hackathons' },
  { label: 'Careers', href: '/careers' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/contact' },
] as const

// Primary links shown in the top bar; the rest live under "More".
export const PRIMARY_NAV = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Technologies', href: '/technologies' },
  { label: 'Portfolio', href: '/portfolio' },
  { label: 'Internship', href: '/internship' },
  { label: 'Contact', href: '/contact' },
] as const

export const MORE_NAV = [
  { label: 'Case Studies', href: '/case-studies' },
  { label: 'Hackathons', href: '/hackathons' },
  { label: 'Careers', href: '/careers' },
  { label: 'Blog', href: '/blog' },
] as const
