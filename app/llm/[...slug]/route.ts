import { notFound } from "next/navigation"
import { type NextRequest, NextResponse } from "next/server"
import { docs } from "@/.velite"
import { processMdxForLLMs } from "@/lib/llm"
import { getPageBySlug } from "@/lib/source"

export async function GET(_req: NextRequest, { params }: { params: Promise<{ slug: string[] }> }) {
  const slug = (await params).slug
  const page = getPageBySlug(slug)
  console.log(slug)

  if (!page) {
    notFound()
  }

  const processedContent = processMdxForLLMs(page.raw)
  return new NextResponse(processedContent, {
    headers: {
      "Content-Type": "text/markdown; charset=utf-8"
    }
  })
}

export function generateStaticParams() {
  return docs.map((doc) => ({ slug: doc.slug.split("/") }))
}
