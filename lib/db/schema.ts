import {
  pgTable,
  serial,
  text,
  timestamp,
  varchar,
} from 'drizzle-orm/pg-core'

export const contactSubmissions = pgTable('contact_submissions', {
  id: serial('id').primaryKey(),
  name: varchar('name', { length: 120 }).notNull(),
  email: varchar('email', { length: 160 }).notNull(),
  company: varchar('company', { length: 160 }),
  subject: varchar('subject', { length: 200 }),
  message: text('message').notNull(),
  createdAt: timestamp('createdAt').defaultNow().notNull(),
})

export const quoteRequests = pgTable('quote_requests', {
  id: serial('id').primaryKey(),
  name: varchar('name', { length: 120 }).notNull(),
  email: varchar('email', { length: 160 }).notNull(),
  company: varchar('company', { length: 160 }),
  phone: varchar('phone', { length: 40 }),
  service: varchar('service', { length: 120 }).notNull(),
  budget: varchar('budget', { length: 60 }),
  timeline: varchar('timeline', { length: 60 }),
  details: text('details').notNull(),
  createdAt: timestamp('createdAt').defaultNow().notNull(),
})

export const internshipApplications = pgTable('internship_applications', {
  id: serial('id').primaryKey(),
  name: varchar('name', { length: 120 }).notNull(),
  email: varchar('email', { length: 160 }).notNull(),
  phone: varchar('phone', { length: 40 }),
  education: varchar('education', { length: 60 }).notNull(),
  college: varchar('college', { length: 200 }),
  track: varchar('track', { length: 120 }).notNull(),
  portfolio: varchar('portfolio', { length: 300 }),
  motivation: text('motivation').notNull(),
  createdAt: timestamp('createdAt').defaultNow().notNull(),
})

export const hackathonRegistrations = pgTable('hackathon_registrations', {
  id: serial('id').primaryKey(),
  teamName: varchar('teamName', { length: 160 }).notNull(),
  leaderName: varchar('leaderName', { length: 120 }).notNull(),
  email: varchar('email', { length: 160 }).notNull(),
  phone: varchar('phone', { length: 40 }),
  teamSize: varchar('teamSize', { length: 20 }).notNull(),
  event: varchar('event', { length: 160 }).notNull(),
  idea: text('idea'),
  createdAt: timestamp('createdAt').defaultNow().notNull(),
})
