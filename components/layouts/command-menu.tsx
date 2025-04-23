'use client'

import { IconHome, IconLayoutDashboard, IconPackage, IconPalette, IconShapes } from 'hq-icons'
import { usePathname, useRouter } from 'next/navigation'
import { Fragment, useEffect, useState } from 'react'

import { Command } from '@/components/ui'
import { type Docs, getAllDocs } from '@/lib/hooks/docs'

export interface OpenCloseProps {
    openCommand: boolean
    action: (openCommand: boolean) => void
}

export function CommandMenu({ openCommand, action }: OpenCloseProps) {
    const router = useRouter()
    const pathname = usePathname()
    const [docs, setDocs] = useState<Docs[]>([])

    useEffect(() => {
        const getDocs = async () => {
            setDocs(await getAllDocs())
        }
        getDocs()
    }, [])

    // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
    useEffect(() => {
        if (action) {
            action(false)
        }
    }, [pathname, action])

    return (
        <Command.Modal isOpen={openCommand} onOpenChange={action} shortcut={{ key: 'k' }}>
            <Command.Section title='Pages'>
                <Command.Item textValue='home' onAction={() => router.push('/')}>
                    <IconHome />
                    <Command.Label>Home</Command.Label>
                </Command.Item>
                <Command.Item textValue='documenation' onAction={() => router.push('/docs')}>
                    <IconPackage />
                    <Command.Label>Documentation</Command.Label>
                </Command.Item>
                <Command.Item textValue='blocks' onAction={() => router.push('/blocks')}>
                    <IconLayoutDashboard />
                    <Command.Label>Blocks</Command.Label>
                </Command.Item>
                <Command.Item textValue='icons' onAction={() => router.push('/icons')}>
                    <IconShapes />
                    <Command.Label>Icons</Command.Label>
                </Command.Item>
                <Command.Item textValue='colors' onAction={() => router.push('/colors')}>
                    <IconPalette />
                    <Command.Label>Colors</Command.Label>
                </Command.Item>
            </Command.Section>
            {docs
                .sort((a, b) => b.order - a.order)
                .map((doc, i) => (
                    <Command.Section key={i} title={doc.title}>
                        {doc?.items
                            ?.sort((a, b) => a.order - b.order)
                            .map(
                                (item, i) =>
                                    item.url && (
                                        <Command.Item
                                            key={i}
                                            textValue={item.title}
                                            onAction={() => router.push(item.url as string)}
                                        >
                                            <Command.Label>{item.title}</Command.Label>
                                        </Command.Item>
                                    )
                            )}
                    </Command.Section>
                ))}
            {docs
                .filter((item) => item.title === 'Components')
                .map((item, i) => (
                    <Fragment key={i}>
                        {item.items
                            ?.sort((a, b) => a.order - b.order)
                            .map((item, i) => (
                                <Command.Section key={i} title={item.title}>
                                    {item?.items
                                        ?.sort((a, b) => a.order - b.order)
                                        .map(
                                            (item, i) =>
                                                item.url && (
                                                    <Command.Item
                                                        key={i}
                                                        textValue={item.title}
                                                        onAction={() => router.push(item.url as string)}
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
