'use client'

import { IconHome, IconLayoutDashboard, IconPackage, IconPalette, IconShapes } from 'hq-icons'
import { usePathname } from 'next/navigation'
import { Fragment, useEffect } from 'react'

import { Command } from '@/components/ui'

import { docs } from '@/components/docs/generated/docs'
import { titleCase } from '@/lib/utils/modifiers'

export interface OpenCloseProps {
    openCommand: boolean
    action: (openCommand: boolean) => void
}

export function CommandMenu({ openCommand, action }: OpenCloseProps) {
    const pathname = usePathname()

    // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
    useEffect(() => {
        if (action) {
            action(false)
        }
    }, [pathname, action])

    return (
        <Command.Modal isOpen={openCommand} onOpenChange={action} shortcut={{ key: 'k' }}>
            <Command.Section title='Pages'>
                <Command.Item textValue='home' href='/'>
                    <IconHome />
                    <Command.Label>Home</Command.Label>
                </Command.Item>
                <Command.Item textValue='documenation' href='/docs'>
                    <IconPackage />
                    <Command.Label>Documentation</Command.Label>
                </Command.Item>
                <Command.Item textValue='blocks' href='/blocks'>
                    <IconLayoutDashboard />
                    <Command.Label>Blocks</Command.Label>
                </Command.Item>
                <Command.Item textValue='icons' href='/icons'>
                    <IconShapes />
                    <Command.Label>Icons</Command.Label>
                </Command.Item>
                <Command.Item textValue='colors' href='/colors'>
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
                                        <Command.Item key={i} textValue={item.title} href={item.url as string}>
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
                                                        key={i}
                                                        textValue={item.title}
                                                        href={item.url as string}
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
