'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { FormField } from '@/components/forms/form-field'
import { quoteSchema, type QuoteFormValues } from '@/lib/form-schemas'

export function QuoteForm() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')
  const [serverErrors, setServerErrors] = useState<Record<string, string[]>>({})

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<QuoteFormValues>({
    resolver: zodResolver(quoteSchema),
    defaultValues: {
      name: '',
      email: '',
      company: '',
      phone: '',
      service: '',
      budget: '',
      timeline: '',
      details: '',
    },
  })

  async function onSubmit(values: QuoteFormValues) {
    setStatus('sending')
    setServerErrors({})

    const response = await fetch('/api/quote', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(values),
    })

    if (response.ok) {
      reset()
      setStatus('success')
      return
    }

    const body = await response.json()
    setStatus('error')
    if (body?.errors?.fieldErrors) setServerErrors(body.errors.fieldErrors)
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-6 rounded-[2rem] border border-border bg-surface p-8 shadow-soft sm:p-10"
      noValidate
    >
      <div className="grid gap-6 sm:grid-cols-2">
        <FormField id="quote-name" label="Name" error={errors.name?.message || serverErrors.name?.[0]}>
          <Input id="quote-name" placeholder="Your full name" {...register('name')} />
        </FormField>
        <FormField id="quote-email" label="Email" error={errors.email?.message || serverErrors.email?.[0]}>
          <Input id="quote-email" type="email" placeholder="you@company.com" {...register('email')} />
        </FormField>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <FormField id="quote-company" label="Company" error={serverErrors.company?.[0]}>
          <Input id="quote-company" placeholder="Company name" {...register('company')} />
        </FormField>
        <FormField id="quote-phone" label="Phone" error={serverErrors.phone?.[0]}>
          <Input id="quote-phone" type="tel" placeholder="Optional" {...register('phone')} />
        </FormField>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <FormField id="quote-service" label="Service" error={errors.service?.message || serverErrors.service?.[0]}>
          <Input id="quote-service" placeholder="e.g. Website Development" {...register('service')} />
        </FormField>
        <FormField id="quote-budget" label="Budget" error={serverErrors.budget?.[0]}>
          <Input id="quote-budget" placeholder="Optional" {...register('budget')} />
        </FormField>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <FormField id="quote-timeline" label="Timeline" error={serverErrors.timeline?.[0]}>
          <Input id="quote-timeline" placeholder="Optional" {...register('timeline')} />
        </FormField>
      </div>

      <FormField id="quote-details" label="Project details" error={errors.details?.message || serverErrors.details?.[0]}>
        <Textarea id="quote-details" placeholder="Tell us what you need" rows={6} {...register('details')} />
      </FormField>

      {status === 'success' ? (
        <div className="rounded-3xl border border-teal/20 bg-teal/10 px-4 py-3 text-sm text-teal">
          Quote request submitted successfully. We’ll be in touch soon.
        </div>
      ) : null}

      {status === 'error' ? (
        <div className="rounded-3xl border border-destructive/20 bg-destructive/10 px-4 py-3 text-sm text-destructive">
          Unable to submit your request. Please correct any errors and try again.
        </div>
      ) : null}

      <Button type="submit" disabled={status === 'sending'}>
        {status === 'sending' ? 'Submitting…' : 'Request Quote'}
      </Button>
    </form>
  )
}
