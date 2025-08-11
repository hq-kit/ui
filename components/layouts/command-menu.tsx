'use client'

import { IconHome, IconLayoutDashboard, IconPackage, IconPalette } from '@tabler/icons-react'
import { usePathname } from 'next/navigation'
import { Fragment, useEffect } from 'react'
import { docs } from '@/components/docs/generated/docs'
import { Command } from '@/components/ui'
import { titleCase } from '@/lib/utils/modifiers'

export interface OpenCloseProps {
    openCommand: boolean
    action: (openCommand: boolean) => void
}

export function CommandMenu({ openCommand, action }: OpenCloseProps) {
    const pathname = usePathname()

    useEffect(() => {
        if (action) {
            action(false)
        }
    }, [pathname, action])

    return (
        <Command.Modal isOpen={openCommand} onOpenChange={action} shortcut={{ key: 'k' }}>
            <Command.Section title='Pages'>
                <Command.Item href='/' textValue='home'>
                    <IconHome />
                    <Command.Label>Home</Command.Label>
                </Command.Item>
                <Command.Item href='/docs' textValue='documenation'>
                    <IconPackage />
                    <Command.Label>Documentation</Command.Label>
                </Command.Item>
                <Command.Item href='/blocks' textValue='blocks'>
                    <IconLayoutDashboard />
                    <Command.Label>Blocks</Command.Label>
                </Command.Item>
                <Command.Item href='/colors' textValue='colors'>
                    <IconPalette />
                    <Command.Label>Colors</Command.Label>
                </Command.Item>
            </Command.Section>
            {docs
                .sort((a, b) => b.order - a.order)
                .map((doc, i) => (
                    <Command.Section key={i} title={titleCase(doc.title)}>
                        {doc?.items
                            ?.sort((a, b) => a.order - b.order)
                            .map(
                                (item, i) =>
                                    item.url && (
                                        <Command.Item href={item.url as string} key={i} textValue={item.title}>
                                            <Command.Label>{item.title}</Command.Label>
                                        </Command.Item>
                                    )
                            )}
                    </Command.Section>
                ))}
            {docs
                .filter((item) => item.title === 'components')
                .map((item, i) => (
                    <Fragment key={i}>
                        {item.items
                            ?.sort((a, b) => a.order - b.order)
                            .map((item, i) => (
                                <Command.Section key={i} title={titleCase(item.title)}>
                                    {item?.items
                                        ?.sort((a, b) => a.order - b.order)
                                        .map(
                                            (item, i) =>
                                                item.url && (
                                                    <Command.Item
                                                        href={item.url as string}
                                                        key={i}
                                                        textValue={item.title}
                                                    >
                                                        <Command.Label>{item.title}</Command.Label>
                                                    </Command.Item>
                                                )
                                        )}
                                </Command.Section>
                            ))}
                    </Fragment>
                ))}
        </Command.Modal>
    )
}
