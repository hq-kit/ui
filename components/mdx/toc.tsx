'use client'

import React from 'react'

import { Heading } from 'react-aria-components'
import scrollIntoView from 'scroll-into-view-if-needed'

import { Link, Skeleton } from '@/components/ui'
import { cn } from '@/lib/utils'

interface TableOfContentsProps {
    title: string
    url: string
    items?: TableOfContentsProps[]
}

interface Props {
    className?: string
    items: TableOfContentsProps[]
}

export function TableOfContents({ className, items }: Props) {
    const tocRef = React.useRef<HTMLDivElement>(null)
    const ids = items.flatMap((item) => [
        item.url.split('#')[1],
        ...(item.items ? item.items.map((subItem) => subItem.url.split('#')[1]) : [])
    ])
    const activeId = useActiveItem(ids)
    const activeIndex = activeId?.length || 0
    React.useEffect(() => {
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
                'no-scrollbar xl:sticky xl:top-[1.75rem] xl:-mr-6 xl:h-[calc(100vh-4.75rem)] xl:flex-none xl:overflow-y-auto xl:py-16 xl:pr-6',
                'top-20',
                className
            )}
        >
            <nav aria-labelledby='on-this-page-title' className='xl:w-56'>
                <React.Suspense
                    fallback={
                        <div className='space-y-2'>
                            <Skeleton className='h-3 w-20 animate-pulse' />
                            <Skeleton className='h-3 w-32 animate-pulse' />
                            <Skeleton className='bg-fg/50 h-3 w-12 animate-pulse' />
                            <Skeleton className='h-3 w-16 animate-pulse' />
                            <Skeleton className='h-3 w-8 animate-pulse' />
                            <Skeleton className='h-3 w-24 animate-pulse' />
                        </div>
                    }
                >
                    <>
                        <Heading
                            level={2}
                            className='text-fg mb-6 text-base leading-7 font-medium lg:text-lg'
                        >
                            On this page
                        </Heading>
                        {items.length > 0 && (
                            <ul className='flex flex-col gap-y-2.5'>
                                {items.map((item) => (
                                    <React.Fragment key={item.title}>
                                        <TocLink item={item} activeId={activeId} />
                                        {item.items && item.items.length > 0 && (
                                            <ul className='flex flex-col gap-y-2.5 pl-3'>
                                                {item.items.map((subItem) => (
                                                    <TocLink
                                                        key={subItem.title}
                                                        item={subItem}
                                                        activeId={activeId}
                                                    />
                                                ))}
                                            </ul>
                                        )}
                                    </React.Fragment>
                                ))}
                            </ul>
                        )}
                    </>
                </React.Suspense>
            </nav>
        </aside>
    )
}

function TocLink({ item, activeId }: { item: TableOfContentsProps; activeId: string | null }) {
    return (
        <li key={item.title}>
            <Link
                className={cn(
                    'data-focus-visible:text-primary block tracking-tight no-underline duration-200 outline-none data-focus-visible:outline-none lg:text-[0.885rem]',
                    item.url.split('#')[1] === activeId ? 'text-primary' : 'text-muted-fg/90'
                )}
                href={item.url}
            >
                {item.title}
            </Link>
        </li>
    )
}

export function useActiveItem(itemIds: string[]) {
    const [activeId, setActiveId] = React.useState<string | null>(null)

    React.useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                let bestCandidate: IntersectionObserverEntry | null = null
                entries.forEach((entry) => {
                    if (
                        entry.isIntersecting &&
                        (!bestCandidate ||
                            bestCandidate.intersectionRatio < entry.intersectionRatio)
                    ) {
                        bestCandidate = entry
                    }
                })
                if (bestCandidate) {
                    // @ts-expect-error unknown-type
                    setActiveId(bestCandidate.target.id)
                }
            },
            { rootMargin: '0% 0% -25% 0%', threshold: 0.1 }
        )

        itemIds.forEach((id) => {
            const element = document.getElementById(id)
            if (element) observer.observe(element)
        })

        return () => {
            itemIds.forEach((id) => {
                const element = document.getElementById(id)
                if (element) observer.unobserve(element)
            })
        }
    }, [itemIds, activeId])

    return activeId
}
