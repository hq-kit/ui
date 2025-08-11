'use client'

import { IconCircleHalf2, IconLayout, IconPackage } from '@tabler/icons-react'
import { usePathname } from 'next/navigation'
import { useEffect } from 'react'
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
                        <div className='flex flex-col gap-1' key={i}>
                            <Heading className='flex items-center gap-x-2 font-semibold text-foreground'>
                                {doc.order === 1 ? (
                                    <IconCircleHalf2 className='size-5' /> // Dark Mode
                                ) : doc.order === 2 ? (
                                    <IconPackage className='size-5' /> // Components
                                ) : (
                                    <IconLayout className='size-5' /> // Getting Started
                                )}
                                {titleCase(doc.title)}
                            </Heading>
                            <div className='relative flex flex-col gap-1 pl-2'>
                                <div className='absolute left-2 h-full w-px bg-border' />
                                {doc.items
                                    ?.sort((a, b) => a.order - b.order)
                                    .map((item, i) => (
                                        <div className='flex flex-col gap-1' key={i}>
                                            {item.items?.length ? (
                                                <div className='mb-4 flex flex-col gap-1'>
                                                    <Heading className='py-2 pl-4 font-semibold text-foreground'>
                                                        {titleCase(item.title)}
                                                    </Heading>
                                                    {item.items
                                                        .sort((a, b) => a.order - b.order)
                                                        .map((subItem, i) => (
                                                            <MenuLink href={subItem.url} key={i}>
                                                                {subItem.title}
                                                                {subItem.status === 'alpha' ? (
                                                                    <Badge className='ml-auto' variant='destructive'>
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
            className={cn(
                'relative flex w-full items-center rounded-r-lg border-l border-l-transparent px-4 py-1 text-muted-foreground text-sm hover:bg-accent/80 hover:text-accent-foreground',
                isActive && 'is-active pointer-events-none border-l-accent bg-primary text-primary-foreground',
                className
            )}
            href={href}
            {...props}
        />
    )
}
