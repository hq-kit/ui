'use client'

import { IconCircleHalf, IconLayers, IconPackage } from 'hq-icons'
import { motion } from 'motion/react'
import { useEffect } from 'react'
import { Heading, Link, type LinkProps, composeRenderProps } from 'react-aria-components'

import { Badge } from '@/components/ui'
import type { Docs } from '@/lib/hooks/docs'
import { cn } from '@/lib/utils'
import { usePathname } from 'next/navigation'

export const DocsNavigation = ({ docs }: { docs: Docs[] }) => {
    useEffect(() => {
        const activeElement = document.querySelector('.is-active')

        if (activeElement) {
            activeElement.scrollIntoView({
                behavior: 'smooth',
                block: 'center'
            })
        }
    }, [])

    return (
        <ul className='flex flex-col gap-5'>
            {docs
                .sort((a, b) => b.order - a.order)
                .map((doc, i) => (
                    <li key={i} className='flex flex-col gap-1'>
                        <Heading className='flex items-center gap-x-2 font-semibold text-fg'>
                            {doc.order === 1 ? <IconLayers /> : doc.order === 2 ? <IconCircleHalf /> : <IconPackage />}
                            {doc.title}
                        </Heading>
                        <ul className='relative flex flex-col gap-1 pl-1.5'>
                            <div className='absolute left-1.5 h-full w-0.5 bg-muted' />
                            {doc.items
                                ?.sort((a, b) => a.order - b.order)
                                .map((item, i) => (
                                    <li key={i} className='flex flex-col gap-1'>
                                        {item.items?.length ? (
                                            <ul className='mb-4 flex flex-col gap-1'>
                                                <Heading className='py-2 pl-4 font-semibold text-fg'>
                                                    {item.title}
                                                </Heading>
                                                {item.items
                                                    .sort((a, b) => a.order - b.order)
                                                    .map((subItem, i) => (
                                                        <MenuLink key={i} href={subItem.url}>
                                                            {subItem.title}
                                                            {subItem.status === 'alpha' ? (
                                                                <Badge variant='danger' className='ml-auto'>
                                                                    {subItem.status}
                                                                </Badge>
                                                            ) : subItem.status === 'beta' ? (
                                                                <Badge className='ml-auto'>{subItem.status}</Badge>
                                                            ) : null}
                                                        </MenuLink>
                                                    ))}
                                            </ul>
                                        ) : (
                                            <MenuLink href={item.url}>{item.title}</MenuLink>
                                        )}
                                    </li>
                                ))}
                        </ul>
                    </li>
                ))}
        </ul>
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
                    'relative flex w-full items-center rounded-r-lg px-4 py-1 text-muted-fg text-sm transition-colors',
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
