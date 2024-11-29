'use client'

import React from 'react'

import { LayoutGroup } from 'framer-motion'
import {
    IconBrandAdobe,
    IconBrandCleon,
    IconBrandFramer,
    IconBrandGithub,
    IconBrandTailwind,
    IconChevronDown,
    IconHome,
    IconLayoutDashboard,
    IconPackage,
    IconPalette,
    IconSearch,
    IconShapes,
    IconSwatchBook
} from 'hq-icons'
import { usePathname } from 'next/navigation'
import { Collection } from 'react-aria-components'

import { CommandMenu } from '@/components/layouts/command-menu'
import { NavLink } from '@/components/layouts/nav-link'
import { ResponsiveAside } from '@/components/layouts/responsive-aside'
import { ThemeToggle } from '@/components/theme-toggle'
import { Button, buttonVariants, Link, Menu, Separator, useMediaQuery } from '@/components/ui'

export function Navbar() {
    const id = React.useId()
    const pathname = usePathname()
    const menuItems = [
        { id: 1, label: 'Home', url: '/', active: pathname === '/' },
        { id: 2, label: 'Components', url: '/docs', active: pathname.startsWith('/docs') },
        { id: 3, label: 'Blocks', url: '/blocks', active: pathname.startsWith('/blocks') },
        { id: 4, label: 'Icons', url: '/icons', active: pathname.startsWith('/icons') },
        { id: 5, label: 'Colors', url: '/colors', active: pathname.startsWith('/colors') },
        { id: 6, label: 'Themes', url: '/themes', active: pathname.startsWith('/themes') }
    ]

    const [open, setOpen] = React.useState(false)
    const isDesktop = useMediaQuery('(min-width: 1024px)')
    return (
        <>
            <CommandMenu setOpen={setOpen} openCommand={open} />
            <LayoutGroup id={`navigation-${id}`}>
                <div className='sticky top-0 z-30 hidden overflow-hidden pb-0 lg:block'>
                    <nav className='border-b bg-background/95 py-2 backdrop-blur-lg supports-[backdrop-filter]:bg-background/60'>
                        <div className='mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-8'>
                            <div className='flex items-center justify-between'>
                                <div className='flex items-center gap-x-6'>
                                    <NavbarDropdown />
                                    <Separator orientation='vertical' className='h-6' />
                                    <Collection items={menuItems}>
                                        {(item) => (
                                            <NavLink href={item.url} isActive={item.active}>
                                                {item.label}
                                            </NavLink>
                                        )}
                                    </Collection>
                                </div>

                                <div className='flex items-center gap-x-1'>
                                    <>
                                        <Button
                                            onPress={() => setOpen((open: boolean) => !open)}
                                            variant='outline'
                                            aria-label='Open command palette'
                                        >
                                            <IconSearch />
                                            <span className='text-muted-foreground'>Search..</span>
                                            <Menu.Keyboard className='-mr-2' keys='⌘K' />
                                        </Button>
                                        <ThemeToggle />

                                        <Separator orientation='vertical' className='h-7 mx-2' />

                                        <Link
                                            aria-label='Github Repository'
                                            className={buttonVariants({
                                                variant: 'outline',
                                                size: 'icon',
                                                className: '[&_[data-slot=icon]]:text-foreground'
                                            })}
                                            target='_blank'
                                            href={'https://github.com/hq-kit/ui'}
                                        >
                                            <IconBrandGithub />
                                        </Link>
                                    </>
                                </div>
                            </div>
                        </div>
                    </nav>
                </div>
            </LayoutGroup>
            {!isDesktop && <ResponsiveAside openCmd={open} setOpenCmd={setOpen} />}
        </>
    )
}

export function NavbarDropdown() {
    return (
        <Menu>
            <Button aria-label='Menu' variant='ghost' className='group -ml-1 [&_svg]:size-4'>
                <span className='flex items-center gap-x-2'>
                    <IconBrandCleon className='-ml-1 size-6' />
                    <span className='text-base font-bold tracking-tight sm:text-sm'>HQ UI</span>
                    <IconChevronDown className='-mr-2 ml-1 text-muted-foreground transition group-hover:text-foreground group-pressed:rotate-180 group-pressed:text-foreground' />
                    <span className='sr-only'>Open menu</span>
                </span>
            </Button>
            <Menu.Content placement='bottom' className='md:w-64'>
                <Menu.Item href='/' target='_blank'>
                    <IconHome />
                    Home
                </Menu.Item>
                <Menu.Item href='/docs'>
                    <IconPackage />
                    Components
                </Menu.Item>
                <Menu.Item href='/blocks'>
                    <IconLayoutDashboard />
                    Blocks
                </Menu.Item>
                <Menu.Item href='/icons'>
                    <IconShapes />
                    Icons
                </Menu.Item>
                <Menu.Item href='/colors'>
                    <IconSwatchBook />
                    Colors
                </Menu.Item>
                <Menu.Item href='/themes'>
                    <IconPalette />
                    Themes
                </Menu.Item>
                <Menu.Separator />
                <Menu.Header separator>Refs</Menu.Header>
                <Menu.Item href='https://github.com/hq-kit/ui' target='_blank'>
                    <IconBrandGithub />
                    Github
                </Menu.Item>
                <Menu.Item
                    href='https://react-spectrum.adobe.com/react-aria/components.html'
                    target='_blank'
                >
                    <IconBrandAdobe />
                    RAC
                </Menu.Item>
                <Menu.Item href='https://tailwindcss.com/' target='_blank'>
                    <IconBrandTailwind />
                    Tailwind CSS
                </Menu.Item>
                <Menu.Item href='https://www.framer.com/motion/' target='_blank'>
                    <IconBrandFramer />
                    Framer Motion
                </Menu.Item>
            </Menu.Content>
        </Menu>
    )
}
