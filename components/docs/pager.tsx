import { IconChevronLeft, IconChevronRight } from "@tabler/icons-react"
import { cn } from "cn"
import Link from "next/link"
import navigation from "@/components-search.json"

interface Page {
  slug: string
  title: string
  order: number
}

interface NavigationSection {
  id: number
  section?: string
  subsection?: string
  children?: NavigationSection[] | Page[]
}

interface PagerProps {
  url: string
  className?: string
}

function flattenPages(items: NavigationSection[]): Page[] {
  return items.flatMap((item) => {
    if (!item.children) {
      return []
    }

    // Halaman langsung di dalam section.
    if (item.children.every((child) => "slug" in child)) {
      return (item.children as Page[]).sort((a, b) => a.order - b.order)
    }

    // Subsection, misalnya Buttons, Forms, Charts.
    return flattenPages(item.children as NavigationSection[])
  })
}

const pages = flattenPages(navigation as NavigationSection[])

export function getNeighbours(url: string) {
  const index = pages.findIndex((page) => page.slug === url)

  return {
    previous: index > 0 ? pages[index - 1] : undefined,

    next: index >= 0 && index < pages.length - 1 ? pages[index + 1] : undefined
  }
}

export function Pager({ url, className }: PagerProps) {
  const { previous, next } = getNeighbours(url)

  if (!previous && !next) {
    return null
  }

  return (
    <div className={cn("not-typeset mt-6 flex w-full justify-between gap-3 sm:mt-12", className)}>
      {previous ? (
        <div className="group min-w-0 max-w-[50%]">
          <Link
            className="inline-flex min-h-10 items-center gap-2 gap-x-2 rounded-lg border px-[calc(--spacing(3.5)-1px)] py-[calc(--spacing(2.5)-1px)] transition hover:bg-muted sm:min-h-9 sm:px-3 sm:py-[calc(--spacing(1.5)-1px)] sm:text-sm/6"
            href={previous.slug}
            prefetch
          >
            <IconChevronLeft className="size-4 shrink-0 transition-transform group-hover:-translate-x-0.5" />
            <span className="line-clamp-1 text-foreground">{previous.title}</span>
          </Link>
        </div>
      ) : (
        <div />
      )}

      {next && (
        <div className="group ml-auto min-w-0 max-w-[50%]">
          <Link
            className="inline-flex min-h-10 items-center gap-2 gap-x-2 rounded-lg border px-[calc(--spacing(3.5)-1px)] py-[calc(--spacing(2.5)-1px)] transition hover:bg-muted sm:min-h-9 sm:px-3 sm:py-[calc(--spacing(1.5)-1px)] sm:text-sm/6"
            href={next.slug}
            prefetch
          >
            <span className="line-clamp-1 text-foreground">{next.title}</span>
            <IconChevronRight className="size-4 shrink-0 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>
      )}
    </div>
  )
}
