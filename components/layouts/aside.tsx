'use client'

import React from 'react'

import { type Docs, docs } from '#docs'
import { IconCircleHalf, IconLayers, IconPackage } from 'hq-icons'
import { LayoutGroup, motion } from 'motion/react'
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
            className='flex w-full flex-col gap-y-0.5'
        >
            {filteredNodeEntries.map(([key, value]) => (
                <Accordion.Item
                    className={({ isExpanded }) => cn(isExpanded && 'pb-0')}
                    key={key}
                    id={key}
                >
                    <Trigger className='text-fg group-data-[open]:text-primary **:data-[slot=icon]:text-fg **:data-[slot=icon]:fill-primary/20 px-3 **:data-[slot=icon]:size-4'>
                        {key === 'getting-started' ? (
                            <IconLayers />
                        ) : key === 'dark-mode' ? (
                            <IconCircleHalf />
                        ) : (
                            <IconPackage />
                        )}
                        {goodTitle(key)}
                    </Trigger>
                    <Accordion.Content>
                        <Accordion
                            allowsMultipleExpanded
                            hideBorder
                            defaultExpandedKeys={defaultValues}
                            className='relative w-full'
                        >
                            <div className='absolute left-0 ml-4 h-full w-px bg-zinc-200 dark:bg-zinc-800' />
                            {Object.entries(value as HierarchyNode).map(([subKey, subValue]) =>
                                typeof subValue === 'object' && 'title' in subValue ? (
                                    <AsideLink
                                        className='flex items-center justify-between pl-8'
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
                                        <Trigger className='!px-8'>{goodTitle(subKey)}</Trigger>
                                        <Accordion.Content className='*:px-0'>
                                            {Object.entries(subValue as HierarchyNode).map(
                                                ([childKey, childValue]) =>
                                                    typeof childValue === 'object' &&
                                                    'title' in childValue ? (
                                                        <AsideLink
                                                            className='flex h-9 items-center justify-between pl-12'
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
                'group data-hovered:text-primary data-hovered:bg-primary/10 data-pressed:text-primary aria-expanded:text-primary rounded-lg py-1.5 whitespace-nowrap',
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
    base: 'group focus-visible:bg-primary/5 focus-visible:ring-primary hover:bg-primary/10 hover:text-primary relative block h-9 w-full rounded-lg pl-2.5 text-base font-medium transition-colors focus:outline-none focus-visible:ring-1 focus-visible:ring-inset lg:text-sm',
    variants: {
        isActive: {
            false: 'text-muted-fg hover:text-primary',
            true: 'text-primary'
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
                        'bg-primary absolute inset-y-1 left-[1rem] w-0.5 rounded-full',
                        indicatorClassName
                    )}
                />
            )}
        </NextLink>
    )
}
