'use client'

import { LayoutGroup, motion } from 'motion/react'
import { usePathname } from 'next/navigation'
import React from 'react'
import { Heading, Link, type LinkProps, composeRenderProps } from 'react-aria-components'
import { type Docs, docs } from '#docs'

import { cn, goodTitle } from '@/lib/utils'
import { IconCircleHalf, IconLayers, IconPackage } from 'hq-icons'

export interface Doc {
    slug: string
    title: string
}

export interface Hierarchy {
    [key: string]: Hierarchy | Doc
}

export const createHierarchy = (docs: Array<Docs>): Hierarchy => {
    const hierarchy: Hierarchy = {}

    for (const doc of docs) {
        const parts = doc.slugAsParams.split('/')
        let currentLevel = hierarchy

        for (const [index, part] of parts.entries()) {
            if (index === parts.length - 1) {
                currentLevel[part] = doc
            } else {
                if (!currentLevel[part]) {
                    currentLevel[part] = {}
                }
                currentLevel = currentLevel[part] as Hierarchy
            }
        }
    }
    return hierarchy
}

const renderHierarchy = (node: Hierarchy) => {
    const menu = Object.entries(node).sort(([a], [b]) => {
        const order = ['getting-started', 'dark-mode', 'components']
        return order.indexOf(a) - order.indexOf(b)
    })

    return (
        <ul className='flex flex-col gap-5'>
            {menu.map(([key, value]) => (
                <li key={key} className='flex flex-col gap-1'>
                    <Heading className='flex items-center gap-x-2 font-semibold text-fg'>
                        {key === 'getting-started' ? (
                            <IconLayers />
                        ) : key === 'dark-mode' ? (
                            <IconCircleHalf />
                        ) : (
                            <IconPackage />
                        )}
                        {goodTitle(key)}
                    </Heading>
                    <ul className='relative flex flex-col gap-1 pl-2'>
                        <div className='absolute left-1.5 h-full w-0.5 bg-muted' />
                        {Object.entries(value as Hierarchy).map(([subKey, subValue]) =>
                            typeof subValue === 'object' && 'title' in subValue ? (
                                <MenuLink key={subKey} href={`/${subValue.slug}`}>
                                    {(subValue as Doc).title}
                                </MenuLink>
                            ) : (
                                <li key={subKey} id={subKey} className='flex flex-col gap-1'>
                                    <Heading className='py-2 pl-4 font-semibold text-fg'>{goodTitle(subKey)}</Heading>
                                    <ul className='mb-4 flex flex-col gap-1'>
                                        {Object.entries(subValue as Hierarchy).map(
                                            ([childKey, childValue]) =>
                                                typeof childValue === 'object' &&
                                                'title' in childValue && (
                                                    <MenuLink key={childKey} href={`/${childValue.slug}`}>
                                                        {goodTitle((childValue as Doc).title)}
                                                    </MenuLink>
                                                )
                                        )}
                                    </ul>
                                </li>
                            )
                        )}
                    </ul>
                </li>
            ))}
        </ul>
    )
}

export const Aside = () => {
    const id = React.useId()
    const hierarchicalDocs = createHierarchy(docs)

    React.useEffect(() => {
        const activeElement = document.querySelector('.is-active')

        if (activeElement) {
            activeElement.scrollIntoView({
                behavior: 'smooth',
                block: 'center'
            })
        }
    }, [])
    return (
        <LayoutGroup id={id}>
            <aside>{renderHierarchy(hierarchicalDocs)}</aside>
        </LayoutGroup>
    )
}

const MenuLink = ({ children, href, className, ...props }: LinkProps) => {
    const pathname = usePathname()
    const isActive = pathname === href
    return (
        <Link
            href={href}
            className={composeRenderProps(className, (className, { isHovered }) =>
                cn(
                    'relative w-full rounded-r-lg px-4 py-1 text-muted-fg transition-colors',
                    isActive && 'is-active pointer-events-none text-primary',
                    isHovered && 'bg-primary/5 text-primary',
                    className
                )
            )}
            {...props}
        >
            <>
                {children}
                {isActive && (
                    <motion.span
                        layoutId='active-indicator'
                        className='absolute inset-0 size-full rounded-r-lg border-primary border-l-2 bg-primary/10'
                    />
                )}
            </>
        </Link>
    )
}
