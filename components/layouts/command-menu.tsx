'use client'

import React from 'react'

import { docs } from '#docs'
import {
    IconHome,
    IconLayoutDashboard,
    IconPackage,
    IconPalette,
    IconShapes,
    IconSwatchBook
} from 'hq-icons'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'

import { createHierarchy, type Doc, type Hierarchy } from '@/components/layouts/aside'
import { Command, useMediaQuery } from '@/components/ui'
import { goodTitle } from '@/lib/utils'

export interface OpenCloseProps {
    openCommand: boolean
    setOpen: (openCommand: boolean) => void
}

export function CommandMenu({ openCommand, setOpen }: OpenCloseProps) {
    const router = useRouter()
    const pathname = usePathname()
    React.useEffect(() => {
        const down = (e: KeyboardEvent) => {
            if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
                e.preventDefault()
                // @ts-expect-error unknown-type
                setOpen((openCommand: boolean) => !openCommand)
            }
        }

        document.addEventListener('keydown', down)

        return () => document.removeEventListener('keydown', down)
    }, [pathname, setOpen])

    React.useEffect(() => {
        if (setOpen) {
            setOpen(false)
        }
    }, [pathname, setOpen])

    const isDesktop = useMediaQuery('(min-width: 1024px)')

    const data = createHierarchy(docs)
    const filteredNodeEntries = Object.entries(data).sort(([a], [b]) => {
        const order = ['prologue', 'getting-started', 'dark-mode', 'components']
        return order.indexOf(a) - order.indexOf(b)
    })

    return (
        <Command isBlurred isOpen={openCommand} onOpenChange={setOpen}>
            <Command.Input autoFocus={isDesktop} placeholder='Quick search...' />
            <Command.List>
                <Command.Section separator heading='Pages'>
                    <Command.Item value='home' asChild>
                        <Link href='/'>
                            <IconHome /> Home
                        </Link>
                    </Command.Item>
                    <Command.Item value='documenation' asChild>
                        <Link href='/docs'>
                            <IconPackage /> Components
                        </Link>
                    </Command.Item>
                    <Command.Item value='blocks' asChild>
                        <Link href='/blocks'>
                            <IconLayoutDashboard /> Blocks
                        </Link>
                    </Command.Item>
                    <Command.Item value='icons' asChild>
                        <Link href='/icons'>
                            <IconShapes /> Icons
                        </Link>
                    </Command.Item>
                    <Command.Item value='colors' asChild>
                        <Link href='/colors'>
                            <IconPalette /> Colors
                        </Link>
                    </Command.Item>
                    <Command.Item value='themes' asChild>
                        <Link href='/themes'>
                            <IconSwatchBook /> Themes
                        </Link>
                    </Command.Item>
                </Command.Section>

                {filteredNodeEntries.map(([key, value]) => (
                    <React.Fragment key={key}>
                        <Command.Section
                            key={`${key}-section`}
                            heading={key !== 'components' ? goodTitle(key) : undefined}
                        >
                            {Object.entries(value as Hierarchy).map(([subKey, subValue]) =>
                                typeof subValue === 'object' && 'title' in subValue ? (
                                    <Command.Item
                                        value={goodTitle(key + ' ' + (subValue as Doc).title)}
                                        className='flex items-center justify-between pl-[2rem]'
                                        key={`${key}-${subKey}`}
                                        onSelect={() => router.push(`/${subValue.slug}`)}
                                    >
                                        {goodTitle((subValue as Doc).title)}
                                    </Command.Item>
                                ) : null
                            )}
                        </Command.Section>

                        {Object.entries(value as Hierarchy).map(([subKey, subValue]) =>
                            typeof subValue === 'object' && 'title' in subValue ? null : (
                                <Command.Section
                                    key={`${key}-${subKey}-section`}
                                    value={goodTitle(subKey)}
                                    heading={goodTitle(subKey)}
                                >
                                    {Object.entries(subValue as Hierarchy).map(
                                        ([childKey, childValue]) =>
                                            typeof childValue === 'object' &&
                                            'title' in childValue ? (
                                                <Command.Item
                                                    className='justify-between'
                                                    value={
                                                        childValue.title === 'Text Field'
                                                            ? 'Text Field Input'
                                                            : goodTitle(
                                                                  subKey +
                                                                      ' ' +
                                                                      (childValue as Doc).title
                                                              )
                                                    }
                                                    key={`${key}-${subKey}-${childKey}`}
                                                    onSelect={() =>
                                                        router.push(`/${childValue.slug}`)
                                                    }
                                                >
                                                    {goodTitle((childValue as Doc).title)}
                                                </Command.Item>
                                            ) : null
                                    )}
                                </Command.Section>
                            )
                        )}
                    </React.Fragment>
                ))}
            </Command.List>
        </Command>
    )
}
