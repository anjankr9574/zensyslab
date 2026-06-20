import { NextResponse } from 'next/server'
import { db } from '@/lib/db'
import { quoteRequests } from '@/lib/db/schema'
import { quoteSchema } from '@/lib/form-schemas'

export async function POST(request: Request) {
  const payload = await request.json()
  const parsed = quoteSchema.safeParse(payload)

  if (!parsed.success) {
    return NextResponse.json(
      {
        errors: parsed.error.flatten(),
      },
      { status: 400 },
    )
  }

  await db.insert(quoteRequests).values(parsed.data)

  return NextResponse.json({ success: true }, { status: 201 })
}
