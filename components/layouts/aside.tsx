'use client'

import React from 'react'

import { type Docs, docs } from '#docs'
import { LayoutGroup, motion } from 'framer-motion'
import { IconCircleHalf, IconHighlighter, IconLayers, IconPackage } from 'hq-icons'
import type { LinkProps as NextLinkProps } from 'next/link'
import NextLink from 'next/link'
import { usePathname } from 'next/navigation'
import { tv } from 'tailwind-variants'

import { Accordion, cn } from '@/components/ui'
import { goodTitle, sortDocs } from '@/lib/utils'

export interface Doc {
    slug: string
    title: string
    status?: 'wip' | 'new' | 'beta' | 'help' | 'primitive' | 'alpha'
}

export interface HierarchyNode {
    [key: string]: HierarchyNode | Doc
}

export const createHierarchy = (docs: Array<Docs>): HierarchyNode => {
    const hierarchy: HierarchyNode = {}

    sortDocs(docs).forEach((doc) => {
        const parts = doc.slug.split('/').slice(1)
        let currentLevel = hierarchy

        parts.forEach((part: string, index: number) => {
            if (index === parts.length - 1) {
                // @ts-expect-error unknown-type
                currentLevel[part] = doc
            } else {
                if (!currentLevel[part]) {
                    currentLevel[part] = {}
                }
                currentLevel = currentLevel[part] as HierarchyNode
            }
        })
    })

    return hierarchy
}

const renderHierarchy = (node: HierarchyNode, defaultValues: string[]) => {
    const filteredNodeEntries = Object.entries(node).sort(([a], [b]) => {
        const order = ['getting-started', 'dark-mode', 'components']
        return order.indexOf(a) - order.indexOf(b)
    })
    return (
        <Accordion
            hideBorder
            hideIndicator
            allowsMultipleExpanded
            defaultExpandedKeys={['getting-started', 'components']}
            className='w-full flex flex-col gap-y-0.5'
        >
            {filteredNodeEntries.map(([key, value]) => (
                <Accordion.Item
                    className={({ isExpanded }) => cn(isExpanded && 'pb-0')}
                    key={key}
                    id={key}
                >
                    <Trigger className='[&_.icon]:size-4 pl-2.5 pr-1 text-foreground group-data-[open]:text-primary [&_.icon]:text-foreground [&_.icon]:fill-foreground/10 dark:[&_.icon]:fill-foreground/30'>
                        {key === 'getting-started' ? (
                            <IconLayers className='icon' />
                        ) : key === 'prologue' ? (
                            <IconHighlighter className='icon' />
                        ) : key === 'dark-mode' ? (
                            <IconCircleHalf className='icon' />
                        ) : (
                            <IconPackage className='icon' />
                        )}
                        {goodTitle(key)}
                    </Trigger>
                    <Accordion.Content>
                        <Accordion
                            allowsMultipleExpanded
                            hideBorder
                            defaultExpandedKeys={defaultValues}
                            className='w-full relative'
                        >
                            <div className='h-full absolute left-0 bg-zinc-200 dark:bg-zinc-800 w-px ml-4' />
                            {Object.entries(value as HierarchyNode).map(([subKey, subValue]) =>
                                typeof subValue === 'object' && 'title' in subValue ? (
                                    <AsideLink
                                        className='pl-[2.1rem] flex justify-between items-center'
                                        key={subKey}
                                        href={`/${subValue.slug}`}
                                    >
                                        {(subValue as Doc).title}
                                    </AsideLink>
                                ) : (
                                    <Accordion.Item
                                        className={({ isExpanded }) => cn(isExpanded && 'pb-0')}
                                        key={subKey}
                                        id={subKey}
                                    >
                                        <Trigger className='[--trigger-padding-left:2.2rem] pl-[--trigger-padding-left] pr-2'>
                                            {goodTitle(subKey)}
                                        </Trigger>
                                        <Accordion.Content>
                                            {Object.entries(subValue as HierarchyNode).map(
                                                ([childKey, childValue]) =>
                                                    typeof childValue === 'object' &&
                                                    'title' in childValue ? (
                                                        <AsideLink
                                                            className='flex justify-between h-9 items-center pl-12 pr-2'
                                                            key={childKey}
                                                            href={`/${childValue.slug}`}
                                                        >
                                                            {goodTitle((childValue as Doc).title)}
                                                        </AsideLink>
                                                    ) : null
                                            )}
                                        </Accordion.Content>
                                    </Accordion.Item>
                                )
                            )}
                        </Accordion>
                    </Accordion.Content>
                </Accordion.Item>
            ))}
        </Accordion>
    )
}

export const Aside = () => {
    const pathname = usePathname()
    const id = React.useId()
    const hierarchicalDocs = createHierarchy(docs)

    const computeDefaultValuesFromURL = (): string[] => {
        const pathParts = pathname.split('/').filter(Boolean)
        const relevantKey = pathParts[2]
        if (relevantKey) {
            return [relevantKey]
        }
        return []
    }

    const defaultValues = computeDefaultValuesFromURL()

    React.useEffect(() => {
        const activeElement = document.querySelector('.active-el')

        if (activeElement) {
            activeElement.scrollIntoView({
                behavior: 'smooth',
                block: 'center'
            })
        }
    }, [pathname])
    return (
        <LayoutGroup id={id}>
            <aside>{renderHierarchy(hierarchicalDocs, defaultValues)}</aside>
        </LayoutGroup>
    )
}

const Trigger = ({ children, className }: { children: React.ReactNode; className?: string }) => {
    return (
        <Accordion.Trigger
            className={cn(
                'group hover:text-primary hover:bg-muted/60 py-1.5 pressed:text-primary aria-expanded:text-primary',
                className
            )}
        >
            {children}
        </Accordion.Trigger>
    )
}

interface AsideLinkProps extends NextLinkProps {
    active?: boolean
    children: React.ReactNode
    className?: string
    indicatorClassName?: string
}

const asideLinkStyles = tv({
    base: 'relative block group focus:outline-none focus-visible:bg-muted/50 focus-visible:ring-inset focus-visible:ring-1 focus-visible:ring-primary rounded-lg pl-2.5 h-9 text-base transition-colors hover:bg-muted/60 hover:text-primary lg:text-sm',
    variants: {
        isActive: {
            false: 'text-foreground forced-colors:text-[Gray] hover:text-primary',
            true: 'text-primary forced-colors:text-[LinkText]'
        }
    }
})

function AsideLink({ indicatorClassName, className, children, ...props }: AsideLinkProps) {
    const pathname = usePathname()
    const isActive = pathname === props.href
    return (
        <NextLink className={asideLinkStyles({ isActive, className })} {...props}>
            {children}
            {isActive && (
                <motion.span
                    layoutId='current-indicator-sidebar'
                    className={cn(
                        'absolute inset-y-1 left-[1rem] w-0.5 rounded-full bg-primary',
                        indicatorClassName
                    )}
                />
            )}
        </NextLink>
    )
}
