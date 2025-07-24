'use client'

import { docs } from '@/components/docs/generated/docs'

import { Navbar } from '@/components/ui'
import { useIsMobile } from '@/lib/hooks'
import { titleCase } from '@/lib/utils/modifiers'
import { Fragment } from 'react'

export function MobileNav({ currentUrl }: { currentUrl: string }) {
    const isMobile = useIsMobile()
    return (
        isMobile && (
            <>
                {docs
                    .sort((a, b) => b.order - a.order)
                    .map((doc, i) => (
                        <Navbar.Section key={i} title={titleCase(doc.title)}>
                            {doc?.items
                                ?.sort((a, b) => a.order - b.order)
                                .map(
                                    (item, i) =>
                                        item.url && (
                                            <Navbar.Item
                                                key={i}
                                                href={item.url as string}
                                                isCurrent={item.url === currentUrl}
                                            >
                                                {item.title}
                                            </Navbar.Item>
                                        )
                                )}
                        </Navbar.Section>
                    ))}
                {docs
                    .filter((item) => item.title === 'components')
                    .map((item, i) => (
                        <Fragment key={i}>
                            {item.items
                                ?.sort((a, b) => a.order - b.order)
                                .map((item, i) => (
                                    <Navbar.Section key={i} title={titleCase(item.title)}>
                                        {item?.items
                                            ?.sort((a, b) => a.order - b.order)
                                            .map(
                                                (item, i) =>
                                                    item.url && (
                                                        <Navbar.Item
                                                            key={i}
                                                            href={item.url as string}
                                                            isCurrent={item.url === currentUrl}
                                                        >
                                                            {item.title}
                                                        </Navbar.Item>
                                                    )
                                            )}
                                    </Navbar.Section>
                                ))}
                        </Fragment>
                    ))}
            </>
        )
    )
}
