'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { FormField } from '@/components/forms/form-field'
import { contactSchema, type ContactFormValues } from '@/lib/form-schemas'

type ErrorMap = Record<string, string[]>

export function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')
  const [serverErrors, setServerErrors] = useState<ErrorMap>({})

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: '',
      email: '',
      company: '',
      subject: '',
      message: '',
    },
  })

  async function onSubmit(values: ContactFormValues) {
    setStatus('sending')
    setServerErrors({})

    const response = await fetch('/api/contact', {
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

    if (body?.errors?.fieldErrors) {
      setServerErrors(body.errors.fieldErrors)
    }
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-6 rounded-[2rem] border border-border bg-surface p-8 shadow-soft sm:p-10"
      noValidate
    >
      <div className="grid gap-6 sm:grid-cols-2">
        <FormField id="contact-name" label="Name" error={errors.name?.message || serverErrors.name?.[0]}>
          <Input id="contact-name" placeholder="Your full name" {...register('name')} />
        </FormField>
        <FormField id="contact-email" label="Email" error={errors.email?.message || serverErrors.email?.[0]}>
          <Input id="contact-email" type="email" placeholder="you@company.com" {...register('email')} />
        </FormField>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <FormField id="contact-company" label="Company" error={serverErrors.company?.[0]}>
          <Input id="contact-company" placeholder="Company name" {...register('company')} />
        </FormField>
        <FormField id="contact-subject" label="Subject" error={serverErrors.subject?.[0]}>
          <Input id="contact-subject" placeholder="Project or inquiry topic" {...register('subject')} />
        </FormField>
      </div>

      <FormField id="contact-message" label="Message" error={errors.message?.message || serverErrors.message?.[0]}>
        <Textarea id="contact-message" placeholder="Tell us about your project or question" rows={6} {...register('message')} />
      </FormField>

      {status === 'success' ? (
        <div className="rounded-3xl border border-teal/20 bg-teal/10 px-4 py-3 text-sm text-teal">
          Thanks! Your message has been sent. We’ll reply shortly.
        </div>
      ) : null}

      {status === 'error' ? (
        <div className="rounded-3xl border border-destructive/20 bg-destructive/10 px-4 py-3 text-sm text-destructive">
          Something went wrong while sending your message. Please review the form and try again.
        </div>
      ) : null}

      <Button type="submit" disabled={status === 'sending'}>
        {status === 'sending' ? 'Sending…' : 'Send Message'}
      </Button>
    </form>
  )
}
