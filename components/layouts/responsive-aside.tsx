'use client'

import React from 'react'

import { LayoutGroup } from 'framer-motion'
import { IconBrandCleon, IconMenu, IconSearch } from 'hq-icons'
import { usePathname } from 'next/navigation'

import { Aside } from '@/components/layouts/aside'
import { CommandMenu } from '@/components/layouts/command-menu'
import { NavbarDropdown } from '@/components/layouts/navbar'
import { ThemeToggle } from '@/components/theme-toggle'
import { Button, Link, Sheet } from '@/components/ui'

export function ResponsiveAside({
    openCmd,
    setOpenCmd
}: {
    openCmd: boolean
    setOpenCmd: (openCmd: boolean) => void
}) {
    const id = React.useId()
    const [openAside, setOpenAside] = React.useState(false)
    const pathname = usePathname()
    React.useEffect(() => setOpenAside(false), [pathname])
    return (
        <nav className='lg:hidden z-10 md:h-14 relative'>
            <CommandMenu setOpen={setOpenCmd} openCommand={openCmd} />
            <div className='flex items-center justify-between pl-4 pr-2 -mb-2 pt-2'>
                <Button
                    aria-label='Open Menu.'
                    className='-ml-2 [&_[data-slot=icon]]:text-foreground'
                    variant='outline'
                    size='icon'
                    onPress={() => {
                        setOpenAside(true)
                    }}
                >
                    <IconMenu />
                </Button>
                <Link className='focus:outline-none -mr-6 rounded' href='/' aria-label='Logo'>
                    <IconBrandCleon className='size-6' />
                </Link>
                <div className='flex items-center gap-x-1'>
                    <Button
                        onPress={() => setOpenCmd(true)}
                        size='icon'
                        variant='outline'
                        aria-label='Open command palette'
                    >
                        <IconSearch />
                    </Button>
                    <ThemeToggle />
                </div>
            </div>
            <Sheet.Content
                aria-label='Docs Menu'
                isOpen={openAside}
                onOpenChange={setOpenAside}
                classNames={{ content: 'w-[19rem]' }}
                side='left'
                closeButton={true}
            >
                <Sheet.Header className='mb-4 flex flex-row justify-between py-2'>
                    <NavbarDropdown />
                </Sheet.Header>
                <Sheet.Body className='px-2'>
                    <LayoutGroup id={id}>
                        <Aside />
                    </LayoutGroup>
                </Sheet.Body>
            </Sheet.Content>
        </nav>
    )
}