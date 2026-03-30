import type { NextRequest } from 'next/server'
import Previews from '@/components/samples/generated/previews.json'

type PreviewEntry = {
  raw?: string
}

export async function GET(_request: NextRequest, { params }: { params: Promise<{ slug?: string[] }> }) {
  const { slug } = (await params) ?? []

  if (slug?.length === 0) {
    return new Response('Not found', { status: 404 })
  }

  const key = slug?.join('/')
  const entry = (Previews as Record<string, PreviewEntry>)[key!]

  if (!entry?.raw) {
    return new Response('Not found', { status: 404 })
  }

  return Response.json(
    { raw: entry.raw },
    {
      headers: {
        'Cache-Control': 'public, max-age=0, s-maxage=31536000, immutable'
      }
    }
  )
}
