import type { Metadata } from 'next'
import { Hero } from '@/components/sections/hero'
import { StatsBand } from '@/components/sections/stats-band'
import { ServicesOverview } from '@/components/sections/services-overview'
import { ApproachSection } from '@/components/sections/approach-section'
import { WhyChooseUs } from '@/components/sections/why-choose-us'
import { CtaBanner } from '@/components/sections/cta-banner'

export const metadata: Metadata = {
  title: 'ZensysLab Technologies | Secure. Reliable. Built for Growth.',
  description:
    'ZensysLab Technologies helps businesses build scalable digital solutions through engineering excellence, transparent collaboration, and long-term partnership.',
}

export default function HomePage() {
  return (
    <>
      <Hero />
      <StatsBand />
      <ServicesOverview />
      <ApproachSection />
      <WhyChooseUs />
      <CtaBanner />
    </>
  )
}
