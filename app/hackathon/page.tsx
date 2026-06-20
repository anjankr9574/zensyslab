import type { Metadata } from 'next'
import { PageHero } from '@/components/sections/page-hero'
import { HackathonForm } from '@/components/forms/hackathon-form'
import { CtaBanner } from '@/components/sections/cta-banner'

export const metadata: Metadata = {
  title: 'Hackathon Registration',
  description:
    'Register your team for hackathon events with ZensysLab Technologies and bring your idea to life with expert guidance.',
}

export default function HackathonPage() {
  return (
    <>
      <PageHero
        eyebrow="Hackathon"
        title="Register your team for hackathon events"
        description="Bring your idea, collaborate with peers, and build something meaningful with support from our engineering team."
      />

      <section className="mx-auto max-w-6xl px-4 py-16 sm:py-20">
        <div className="grid gap-16 lg:grid-cols-[1.2fr_0.8fr] lg:items-start">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Reserve your spot and share your vision.
            </h2>
            <p className="mt-6 max-w-2xl text-pretty leading-relaxed text-foreground-secondary">
              We invite teams to join our hackathons and compete with secure, innovative solutions built for modern business challenges.
            </p>
          </div>

          <HackathonForm />
        </div>
      </section>

      <CtaBanner />
    </>
  )
}
