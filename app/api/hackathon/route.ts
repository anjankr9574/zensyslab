import { NextResponse } from 'next/server'
import { db } from '@/lib/db'
import { hackathonRegistrations } from '@/lib/db/schema'
import { hackathonSchema } from '@/lib/form-schemas'

export async function POST(request: Request) {
  const payload = await request.json()
  const parsed = hackathonSchema.safeParse(payload)

  if (!parsed.success) {
    return NextResponse.json(
      {
        errors: parsed.error.flatten(),
      },
      { status: 400 },
    )
  }

  await db.insert(hackathonRegistrations).values(parsed.data)

  return NextResponse.json({ success: true }, { status: 201 })
}
