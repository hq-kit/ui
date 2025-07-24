'use client'

import { useEffect } from 'react'

import { usePathname } from 'next/navigation'

import { IconCircleHalf, IconLayers, IconPackage } from 'hq-icons'
import { Heading, Link, type LinkProps } from 'react-aria-components'

import { docs } from '@/components/docs/generated/docs'
import { Badge } from '@/components/ui'
import { cn } from '@/lib/utils'
import { titleCase } from '@/lib/utils/modifiers'

export function Aside() {
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
        <aside>
            <div className='flex flex-col gap-5 py-16'>
                {docs
                    .sort((a, b) => a.order - b.order)
                    .map((doc, i) => (
                        <div key={i} className='flex flex-col gap-1'>
                            <Heading className='flex items-center gap-x-2 font-semibold text-foreground'>
                                {doc.order === 1 ? (
                                    <IconLayers />
                                ) : doc.order === 2 ? (
                                    <IconCircleHalf />
                                ) : (
                                    <IconPackage />
                                )}
                                {titleCase(doc.title)}
                            </Heading>
                            <div className='relative flex flex-col gap-1 pl-1.5'>
                                <div className='absolute left-1.5 h-full w-px bg-border' />
                                {doc.items
                                    ?.sort((a, b) => a.order - b.order)
                                    .map((item, i) => (
                                        <div key={i} className='flex flex-col gap-1'>
                                            {item.items?.length ? (
                                                <div className='mb-4 flex flex-col gap-1'>
                                                    <Heading className='py-2 pl-4 font-semibold text-foreground'>
                                                        {titleCase(item.title)}
                                                    </Heading>
                                                    {item.items
                                                        .sort((a, b) => a.order - b.order)
                                                        .map((subItem, i) => (
                                                            <MenuLink key={i} href={subItem.url}>
                                                                {subItem.title}
                                                                {subItem.status === 'alpha' ? (
                                                                    <Badge variant='destructive' className='ml-auto'>
                                                                        {subItem.status}
                                                                    </Badge>
                                                                ) : subItem.status === 'beta' ? (
                                                                    <Badge className='ml-auto'>{subItem.status}</Badge>
                                                                ) : null}
                                                            </MenuLink>
                                                        ))}
                                                </div>
                                            ) : (
                                                <MenuLink href={item.url}>{item.title}</MenuLink>
                                            )}
                                        </div>
                                    ))}
                            </div>
                        </div>
                    ))}
            </div>
        </aside>
    )
}

const MenuLink = ({ href, className, ...props }: LinkProps) => {
    const pathname = usePathname()
    const isActive = pathname === href
    return (
        <Link
            href={href}
            className={cn(
                'relative flex w-full items-center rounded-r-lg border-l px-4 py-1 text-muted-foreground text-sm hover:bg-accent/80 hover:text-accent-foreground',
                isActive && 'is-active pointer-events-none border-l-accent bg-accent text-accent-foreground',
                className
            )}
            {...props}
        />
    )
}
