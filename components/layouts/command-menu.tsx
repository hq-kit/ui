'use client'

import React from 'react'

import { docs } from '#docs'
import { IconHome, IconLayoutDashboard, IconPackage, IconPalette, IconShapes } from 'hq-icons'
import { usePathname, useRouter } from 'next/navigation'

import { createHierarchy, type Doc, type Hierarchy } from '@/components/layouts/aside'
import { Command } from '@/components/ui'
import { goodTitle } from '@/lib/utils'

export interface OpenCloseProps {
    openCommand: boolean
    setOpen: (openCommand: boolean) => void
}

export function CommandMenu({ openCommand, setOpen }: OpenCloseProps) {
    const router = useRouter()
    const pathname = usePathname()

    React.useEffect(() => {
        if (setOpen) {
            setOpen(false)
        }
    }, [pathname, setOpen])

    const data = createHierarchy(docs)
    const filteredNodeEntries = Object.entries(data).sort(([a], [b]) => {
        const order = ['prologue', 'getting-started', 'dark-mode', 'components']
        return order.indexOf(a) - order.indexOf(b)
    })

    return (
        <Command.Modal isOpen={openCommand} onOpenChange={setOpen} shortcut={{ key: 'k' }}>
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

            {filteredNodeEntries.map(([key, value]) => (
                <React.Fragment key={key}>
                    <Command.Section key={`${key}-section`} title={key !== 'components' ? goodTitle(key) : undefined}>
                        {Object.entries(value as Hierarchy).map(([subKey, subValue]) =>
                            typeof subValue === 'object' && 'title' in subValue ? (
                                <Command.Item
                                    textValue={key + (subValue as Doc).title}
                                    key={`${key}-${subKey}`}
                                    onAction={() => router.push(`/${subValue.slug}`)}
                                >
                                    <Command.Label>{goodTitle((subValue as Doc).title)}</Command.Label>
                                </Command.Item>
                            ) : null
                        )}
                    </Command.Section>

                    {Object.entries(value as Hierarchy).map(([subKey, subValue]) =>
                        typeof subValue === 'object' && 'title' in subValue ? null : (
                            <Command.Section key={`${key}-${subKey}-section`} title={goodTitle(subKey)}>
                                {Object.entries(subValue as Hierarchy).map(([childKey, childValue]) =>
                                    typeof childValue === 'object' && 'title' in childValue ? (
                                        <Command.Item
                                            textValue={
                                                childValue.title === 'Text Field'
                                                    ? 'Text Field Input'
                                                    : subKey + (childValue as Doc).title
                                            }
                                            key={`${key}-${subKey}-${childKey}`}
                                            onAction={() => router.push(`/${childValue.slug}`)}
                                        >
                                            <Command.Label>{goodTitle((childValue as Doc).title)}</Command.Label>
                                        </Command.Item>
                                    ) : null
                                )}
                            </Command.Section>
                        )
                    )}
                </React.Fragment>
            ))}
        </Command.Modal>
    )
}
