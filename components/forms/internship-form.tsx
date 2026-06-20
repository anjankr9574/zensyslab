'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { FormField } from '@/components/forms/form-field'
import { internshipSchema, type InternshipFormValues } from '@/lib/form-schemas'

export function InternshipForm() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')
  const [serverErrors, setServerErrors] = useState<Record<string, string[]>>({})

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<InternshipFormValues>({
    resolver: zodResolver(internshipSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      education: '',
      college: '',
      track: '',
      portfolio: '',
      motivation: '',
    },
  })

  async function onSubmit(values: InternshipFormValues) {
    setStatus('sending')
    setServerErrors({})

    const response = await fetch('/api/internship', {
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
        <FormField id="internship-name" label="Name" error={errors.name?.message || serverErrors.name?.[0]}>
          <Input id="internship-name" placeholder="Your full name" {...register('name')} />
        </FormField>
        <FormField id="internship-email" label="Email" error={errors.email?.message || serverErrors.email?.[0]}>
          <Input id="internship-email" type="email" placeholder="you@school.edu" {...register('email')} />
        </FormField>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <FormField id="internship-phone" label="Phone" error={serverErrors.phone?.[0]}>
          <Input id="internship-phone" type="tel" placeholder="Optional" {...register('phone')} />
        </FormField>
        <FormField id="internship-education" label="Education" error={errors.education?.message || serverErrors.education?.[0]}>
          <Input id="internship-education" placeholder="Degree or program" {...register('education')} />
        </FormField>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <FormField id="internship-college" label="College / University" error={serverErrors.college?.[0]}>
          <Input id="internship-college" placeholder="School name" {...register('college')} />
        </FormField>
        <FormField id="internship-track" label="Preferred track" error={errors.track?.message || serverErrors.track?.[0]}>
          <Input id="internship-track" placeholder="e.g. Frontend, QA, DevOps" {...register('track')} />
        </FormField>
      </div>

      <FormField id="internship-portfolio" label="Portfolio / LinkedIn" error={serverErrors.portfolio?.[0]}>
        <Input id="internship-portfolio" type="url" placeholder="Optional" {...register('portfolio')} />
      </FormField>

      <FormField id="internship-motivation" label="Motivation" error={errors.motivation?.message || serverErrors.motivation?.[0]}>
        <Textarea id="internship-motivation" placeholder="Why are you interested in this internship?" rows={6} {...register('motivation')} />
      </FormField>

      {status === 'success' ? (
        <div className="rounded-3xl border border-teal/20 bg-teal/10 px-4 py-3 text-sm text-teal">
          Your internship application has been submitted. We’ll be in touch soon.
        </div>
      ) : null}

      {status === 'error' ? (
        <div className="rounded-3xl border border-destructive/20 bg-destructive/10 px-4 py-3 text-sm text-destructive">
          Something went wrong. Please check the form and try again.
        </div>
      ) : null}

      <Button type="submit" disabled={status === 'sending'}>
        {status === 'sending' ? 'Submitting…' : 'Apply for Internship'}
      </Button>
    </form>
  )
}
