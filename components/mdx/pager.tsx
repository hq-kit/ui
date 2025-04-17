'use client'

import { IconChevronLeft, IconChevronRight } from 'hq-icons'

import { Link, buttonStyles } from '@/components/ui'
import { cn } from '@/lib/utils'

interface Doc {
    slug: string
    title: string
}

const getPagerForDoc = (docs: Doc[], doc: Doc) => {
    const nav = docs.map((d) => ({
        href: `/${d.slug}`,
        title: d.title
    }))

    const activeIndex = nav.findIndex((link) => `/${doc.slug}` === link.href)

    const prev = activeIndex > 0 ? nav[activeIndex - 1] : null
    const next = activeIndex < nav.length - 1 ? nav[activeIndex + 1] : null

    return {
        prev,
        next
    }
}

export default function Pager({ docs, doc }: { docs: Doc[]; doc: Doc }) {
    const groupedAndSortedDocs = docs.sort((a, b) => {
        const groupA = a.slug.split('/')[2]
        const groupB = b.slug.split('/')[2]

        if (groupA === groupB) {
            return a.title.localeCompare(b.title)
        }

        return groupA.localeCompare(groupB)
    })

    const pager = getPagerForDoc(groupedAndSortedDocs, doc)

    if (!pager.prev && !pager.next) {
        return null
    }

    return (
        <div className='not-prose mt-6 flex flex-row items-center justify-between'>
            {pager.prev && (
                <Link
                    aria-label={`Previous page: ${pager.prev.title}`}
                    href={pager.prev.href}
                    className={buttonStyles({ variant: 'outline' })}
                >
                    <IconChevronLeft />
                    {pager.prev.title}
                </Link>
            )}
            {pager.next && (
                <Link
                    aria-label={`Next page: ${pager.next.title}`}
                    href={pager.next.href}
                    className={cn(buttonStyles({ variant: 'outline' }), 'ml-auto')}
                >
                    {pager.next.title}
                    <IconChevronRight />
                </Link>
            )}
        </div>
    )
}
