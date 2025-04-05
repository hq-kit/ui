'use client'

import React from 'react'

import { type Docs, docs } from '#docs'
import { IconCircleHalf, IconLayers, IconPackage } from 'hq-icons'
import { LayoutGroup, motion } from 'motion/react'
import { usePathname } from 'next/navigation'
import { composeRenderProps, Heading, Link, LinkProps } from 'react-aria-components'

import { cn, goodTitle } from '@/lib/utils'

export interface Doc {
    slug: string
    title: string
}

export interface Hierarchy {
    [key: string]: Hierarchy | Doc
}

export const createHierarchy = (docs: Array<Docs>): Hierarchy => {
    const hierarchy: Hierarchy = {}

    docs.forEach((doc) => {
        const parts = doc.slugAsParams.split('/')
        let currentLevel = hierarchy

        parts.forEach((part: string, index: number) => {
            if (index === parts.length - 1) {
                currentLevel[part] = doc
            } else {
                if (!currentLevel[part]) {
                    currentLevel[part] = {}
                }
                currentLevel = currentLevel[part] as Hierarchy
            }
        })
    })
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
                    <Heading className='text-fg flex gap-x-2 items-center font-semibold'>
                        {key === 'getting-started' ? (
                            <IconLayers />
                        ) : key === 'dark-mode' ? (
                            <IconCircleHalf />
                        ) : (
                            <IconPackage />
                        )}
                        {goodTitle(key)}
                    </Heading>
                    <ul className='flex flex-col gap-1 relative pl-2'>
                        <div className='absolute left-1.5 h-full w-0.5 bg-muted' />
                        {Object.entries(value as Hierarchy).map(([subKey, subValue]) =>
                            typeof subValue === 'object' && 'title' in subValue ? (
                                <MenuLink key={subKey} href={`/${subValue.slug}`}>
                                    {(subValue as Doc).title}
                                </MenuLink>
                            ) : (
                                <li key={subKey} id={subKey} className='flex flex-col gap-1'>
                                    <Heading className='text-fg font-semibold pl-4 py-2'>
                                        {goodTitle(subKey)}
                                    </Heading>
                                    <ul className='flex flex-col gap-1 mb-4'>
                                        {Object.entries(subValue as Hierarchy).map(
                                            ([childKey, childValue]) =>
                                                typeof childValue === 'object' &&
                                                'title' in childValue && (
                                                    <MenuLink
                                                        key={childKey}
                                                        href={`/${childValue.slug}`}
                                                    >
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
    const pathname = usePathname()
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
    }, [pathname])
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
                    'relative text-muted-fg w-full px-4 py-1 rounded-r-lg transition-colors',
                    isActive && 'text-primary pointer-events-none is-active',
                    isHovered && 'text-primary bg-primary/5',
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
                        className='absolute inset-0 size-full bg-primary/10 rounded-r-lg border-l-2 border-primary'
                    />
                )}
            </>
        </Link>
    )
}
