import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Space_Grotesk, Inter, Geist_Mono } from 'next/font/google'
import { SiteHeader } from '@/components/layout/site-header'
import { SiteFooter } from '@/components/layout/site-footer'
import './globals.css'

const spaceGrotesk = Space_Grotesk({
  variable: '--font-space-grotesk',
  subsets: ['latin'],
  display: 'swap',
})
const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  display: 'swap',
})
const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
  display: 'swap',
})

const siteUrl = 'https://zensyslab.com'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'ZensysLab Technologies | Secure. Reliable. Built for Growth.',
    template: '%s | ZensysLab Technologies',
  },
  description:
    'ZensysLab Technologies helps businesses build scalable digital solutions through engineering excellence, transparent collaboration, and long-term partnership.',
  keywords: [
    'IT services',
    'software development',
    'web development',
    'mobile app development',
    'UI/UX design',
    'SEO services',
    'digital transformation',
    'ZensysLab',
  ],
  authors: [{ name: 'ZensysLab Technologies' }],
  creator: 'ZensysLab Technologies',
  generator: 'v0.app',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteUrl,
    siteName: 'ZensysLab Technologies',
    title: 'ZensysLab Technologies | Secure. Reliable. Built for Growth.',
    description:
      'Helping businesses build scalable digital solutions through engineering excellence, transparent collaboration, and long-term partnership.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ZensysLab Technologies',
    description:
      'Secure. Reliable. Built for Growth. Engineering excellence for your digital future.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#0f2744',
  width: 'device-width',
  initialScale: 1,
}

const orgJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'ZensysLab Technologies',
  url: siteUrl,
  slogan: 'Secure. Reliable. Built for Growth.',
  description:
    'IT services company specializing in secure, accessible, and scalable digital solutions.',
  sameAs: [],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${inter.variable} ${geistMono.variable} bg-background`}
    >
      <body className="font-sans antialiased">
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
        />
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-lg focus:bg-primary focus:px-4 focus:py-2 focus:text-primary-foreground"
        >
          Skip to main content
        </a>
        <SiteHeader />
        <main id="main-content">{children}</main>
        <SiteFooter />
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
