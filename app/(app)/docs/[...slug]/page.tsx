import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { docs } from "@/.velite"
import { OpenIn } from "@/components/docs/open-in"
import { Pager } from "@/components/docs/pager"
import { DocRefs } from "@/components/docs/references"
import { Toc } from "@/components/docs/toc"
import { MDXContent } from "@/components/mdx-content"
import { Badge } from "@/components/ui/badge"
import { getPageBySlug } from "@/lib/source"

type Props = {
  params: Promise<{ slug: string[] }>
}

export async function generateMetadata(props: Props): Promise<Metadata> {
  const { slug } = await props.params
  const doc = getPageBySlug(slug)

  if (!doc) return {}

  const ogSearchParams = new URLSearchParams()
  ogSearchParams.set("title", doc?.title)

  return {
    title: doc?.title,
    description: doc?.description,
    applicationName: "HQ UI",
    category: "Docs",
    keywords: [
      doc?.title,
      `${doc?.title} components`,
      `${doc?.title} component`,
      `${doc?.title} on React`,
      "React",
      "Next.js",
      "Inertia.js",
      "Tailwind CSS",
      "UI Components",
      "UI Kit",
      "UI Library",
      "UI Framework",
      "React Aria",
      "React Aria Components",
      "Server Components",
      "React Components",
      "Next UI Components",
      "UI Design System",
      "UI for Laravel Inertia"
    ]
  }
}

export function generateStaticParams() {
  return docs.map((doc) => ({ slug: doc.slug.split("/") }))
}

export default async function DocsPage(props: Props) {
  const { slug } = await props.params

  const doc = getPageBySlug(slug)

  if (!doc) {
    notFound()
  }

  return (
    <div className="flex w-full items-start">
      {/* Center */}
      <div className="w-full min-w-0 py-8 sm:pt-10 sm:pb-24 xl:border-x">
        <div className="mx-auto px-4 sm:px-6 xl:max-w-3xl">
          {doc.status !== "stable" && (
            <Badge
              className="mb-2 rounded-none font-mono"
              variant={doc.status === "new" ? "success" : doc.status === "alpha" ? "destructive" : "warning"}
            >
              {doc.status}
            </Badge>
          )}
          <div className="mb-3 flex flex-col justify-between gap-6 sm:mb-12 sm:flex-row sm:items-center">
            <h1 className="flex-1 text-3xl font-normal tracking-tight">{doc.title}</h1>
            <div className="flex items-center gap-x-1.5">
              {doc.references && doc.references?.length > 0 && <DocRefs references={doc.references} />}
              <OpenIn page={doc.content} url={doc.slug} />
            </div>
          </div>
          <div className="typeset typeset-docs">
            <MDXContent code={doc.content} />
          </div>

          <Pager url={doc.permalink} />
        </div>
      </div>

      {/* Right side */}
      <div className="sticky top-16 hidden flex-1 flex-col xl:flex">
        <Toc items={doc.toc} />
      </div>
    </div>
  )
}
