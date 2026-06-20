import { z } from 'zod'

const normalizeOptional = (maxLength: number) =>
  z.preprocess((value) => {
    if (typeof value === 'string') {
      const trimmed = value.trim()
      return trimmed === '' ? undefined : trimmed
    }
    return value
  }, z.string().max(maxLength).optional())

const optionalString = normalizeOptional(300)
const optionalShort = normalizeOptional(160)
const optionalPhone = normalizeOptional(40)
const optionalUrl = z.preprocess((value) => {
  if (typeof value === 'string') {
    const trimmed = value.trim()
    return trimmed === '' ? undefined : trimmed
  }
  return value
}, z.string().url().max(300).optional())

export const contactSchema = z.object({
  name: z.string().trim().min(2, 'Name is required').max(120),
  email: z.string().trim().email('Enter a valid email').max(160),
  company: optionalShort,
  subject: normalizeOptional(200),
  message: z.string().trim().min(10, 'Message is required').max(2000),
})

export const quoteSchema = z.object({
  name: z.string().trim().min(2, 'Name is required').max(120),
  email: z.string().trim().email('Enter a valid email').max(160),
  company: optionalShort,
  phone: optionalPhone,
  service: z.string().trim().min(1, 'Service is required').max(120),
  budget: optionalShort,
  timeline: optionalShort,
  details: z.string().trim().min(10, 'Tell us more about your project').max(2000),
})

export const internshipSchema = z.object({
  name: z.string().trim().min(2, 'Name is required').max(120),
  email: z.string().trim().email('Enter a valid email').max(160),
  phone: optionalPhone,
  education: z.string().trim().min(2, 'Education is required').max(60),
  college: optionalString,
  track: z.string().trim().min(2, 'Track is required').max(120),
  portfolio: optionalUrl,
  motivation: z.string().trim().min(20, 'Tell us what motivates you').max(2000),
})

export const hackathonSchema = z.object({
  teamName: z.string().trim().min(2, 'Team name is required').max(160),
  leaderName: z.string().trim().min(2, 'Leader name is required').max(120),
  email: z.string().trim().email('Enter a valid email').max(160),
  phone: optionalPhone,
  teamSize: z.string().trim().min(1, 'Team size is required').max(20),
  event: z.string().trim().min(1, 'Event is required').max(160),
  idea: normalizeOptional(2000),
})

export type ContactFormValues = z.infer<typeof contactSchema>
export type QuoteFormValues = z.infer<typeof quoteSchema>
export type InternshipFormValues = z.infer<typeof internshipSchema>
export type HackathonFormValues = z.infer<typeof hackathonSchema>
