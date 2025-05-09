'use client'

import { Fragment, Suspense, useEffect, useRef, useState } from 'react'

import { Heading, Link } from 'react-aria-components'
import scrollIntoView from 'scroll-into-view-if-needed'

import { Skeleton } from '@/components/ui'
import { cn } from '@/lib/utils'

interface TableOfContentsProps {
    title: string
    url: string
    items: TableOfContentsProps[]
}

interface Props {
    className?: string
    items: TableOfContentsProps[]
}

export function TableOfContents({ className, items }: Props) {
    const tocRef = useRef<HTMLDivElement>(null)
    const ids = items.map((item) => item.url.replace('#', ''))

    const activeId = useActiveItem(ids)
    const activeIndex = activeId?.length || 0
    useEffect(() => {
        if (!activeId || activeIndex < 2) return
        const anchor = tocRef.current?.querySelector(`li > a[href="#${activeId}"]`)

        if (anchor) {
            scrollIntoView(anchor, {
                behavior: 'smooth',
                block: 'center',
                inline: 'center',
                scrollMode: 'always',
                boundary: tocRef.current
            })
        }
    }, [activeId, activeIndex])

    return (
        <aside
            ref={tocRef}
            className={cn(
                'not-prose',
                'no-scrollbar xl:-mr-6 xl:sticky xl:top-7 xl:h-[calc(100vh-4.75rem)] xl:flex-none xl:overflow-y-auto xl:py-16 xl:pr-6',
                'top-20',
                className
            )}
        >
            <nav aria-labelledby='on-this-page-title' className='xl:w-56'>
                <Suspense
                    fallback={
                        <div className='space-y-2'>
                            <Skeleton className='h-3 w-20 animate-pulse' />
                            <Skeleton className='h-3 w-32 animate-pulse' />
                            <Skeleton className='h-3 w-12 animate-pulse bg-fg/50' />
                            <Skeleton className='h-3 w-16 animate-pulse' />
                            <Skeleton className='h-3 w-8 animate-pulse' />
                            <Skeleton className='h-3 w-24 animate-pulse' />
                        </div>
                    }
                >
                    <>
                        <Heading level={2} className='mb-6 font-medium text-base text-fg leading-7 lg:text-lg'>
                            On this page
                        </Heading>
                        {items.length > 0 && (
                            <ul className='flex flex-col gap-y-2.5'>
                                {items.map((item) => (
                                    <Fragment key={item.url}>
                                        <TocLink item={item} activeId={activeId} />
                                        {item.items.length > 0 && (
                                            <ul className='flex flex-col gap-y-2.5 pl-4'>
                                                {item.items.map((subItem) => (
                                                    <TocLink key={subItem.url} item={subItem} activeId={activeId} />
                                                ))}
                                            </ul>
                                        )}
                                    </Fragment>
                                ))}
                            </ul>
                        )}
                    </>
                </Suspense>
            </nav>
        </aside>
    )
}

function TocLink({ item, activeId }: { item: TableOfContentsProps; activeId: string | null }) {
    return (
        <li key={item.url}>
            <Link
                className={cn(
                    'block text-sm tracking-tight no-underline outline-hidden focus-visible:text-primary',
                    item.url === `#${activeId}` ? 'text-primary' : 'text-muted-fg'
                )}
                href={item.url}
            >
                {item.title}
            </Link>
        </li>
    )
}

export function useActiveItem(itemIds: string[]) {
    const [activeId, setActiveId] = useState<string | null>(null)

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                let bestCandidate: IntersectionObserverEntry | null = null
                for (const entry of entries) {
                    if (
                        entry.isIntersecting &&
                        (!bestCandidate || bestCandidate.intersectionRatio < entry.intersectionRatio)
                    ) {
                        bestCandidate = entry
                    }
                }
                if (bestCandidate) {
                    setActiveId(bestCandidate.target.id)
                }
            },
            { rootMargin: '0% 0% -25% 0%', threshold: 0.1 }
        )

        for (const id of itemIds) {
            const element = document.getElementById(id)
            if (element) observer.observe(element)
        }

        return () => {
            for (const id of itemIds) {
                const element = document.getElementById(id)
                if (element) observer.unobserve(element)
            }
        }
    }, [itemIds])

    return activeId
}
