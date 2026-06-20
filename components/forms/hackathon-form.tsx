'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { FormField } from '@/components/forms/form-field'
import { hackathonSchema, type HackathonFormValues } from '@/lib/form-schemas'

export function HackathonForm() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')
  const [serverErrors, setServerErrors] = useState<Record<string, string[]>>({})

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<HackathonFormValues>({
    resolver: zodResolver(hackathonSchema),
    defaultValues: {
      teamName: '',
      leaderName: '',
      email: '',
      phone: '',
      teamSize: '',
      event: '',
      idea: '',
    },
  })

  async function onSubmit(values: HackathonFormValues) {
    setStatus('sending')
    setServerErrors({})

    const response = await fetch('/api/hackathon', {
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
        <FormField id="hackathon-team" label="Team name" error={errors.teamName?.message || serverErrors.teamName?.[0]}>
          <Input id="hackathon-team" placeholder="Team name" {...register('teamName')} />
        </FormField>
        <FormField id="hackathon-leader" label="Team lead" error={errors.leaderName?.message || serverErrors.leaderName?.[0]}>
          <Input id="hackathon-leader" placeholder="Leader name" {...register('leaderName')} />
        </FormField>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <FormField id="hackathon-email" label="Email" error={errors.email?.message || serverErrors.email?.[0]}>
          <Input id="hackathon-email" type="email" placeholder="you@domain.com" {...register('email')} />
        </FormField>
        <FormField id="hackathon-phone" label="Phone" error={serverErrors.phone?.[0]}>
          <Input id="hackathon-phone" type="tel" placeholder="Optional" {...register('phone')} />
        </FormField>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <FormField id="hackathon-size" label="Team size" error={errors.teamSize?.message || serverErrors.teamSize?.[0]}>
          <Input id="hackathon-size" placeholder="e.g. 3-5" {...register('teamSize')} />
        </FormField>
        <FormField id="hackathon-event" label="Event name" error={errors.event?.message || serverErrors.event?.[0]}>
          <Input id="hackathon-event" placeholder="Hackathon event" {...register('event')} />
        </FormField>
      </div>

      <FormField id="hackathon-idea" label="Project idea" error={serverErrors.idea?.[0]}>
        <Textarea id="hackathon-idea" placeholder="Optional summary of your idea" rows={6} {...register('idea')} />
      </FormField>

      {status === 'success' ? (
        <div className="rounded-3xl border border-teal/20 bg-teal/10 px-4 py-3 text-sm text-teal">
          Your hackathon registration is confirmed. We’ll get back to you with next steps.
        </div>
      ) : null}

      {status === 'error' ? (
        <div className="rounded-3xl border border-destructive/20 bg-destructive/10 px-4 py-3 text-sm text-destructive">
          Something went wrong. Please correct the information and submit again.
        </div>
      ) : null}

      <Button type="submit" disabled={status === 'sending'}>
        {status === 'sending' ? 'Registering…' : 'Register Team'}
      </Button>
    </form>
  )
}
