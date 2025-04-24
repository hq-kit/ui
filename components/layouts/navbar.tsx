'use client'

import { LayoutGroup } from 'motion/react'
import { usePathname } from 'next/navigation'
import { useId, useState } from 'react'
import { Collection } from 'react-aria-components'

import { CommandMenu } from '@/components/layouts/command-menu'
import { NavLink } from '@/components/layouts/nav-link'
import { ResponsiveAside } from '@/components/layouts/responsive-aside'
import { MotionIcon } from '@/components/mdx/references'
import { ThemeToggle } from '@/components/theme-toggle'
import { Button, Keyboard, Link, Menu, Separator, buttonStyles } from '@/components/ui'
import { useIsMobile } from '@/lib/hooks'
import {
    IconBrandAdobe,
    IconBrandCleon,
    IconBrandGithub,
    IconBrandTailwind,
    IconChevronDown,
    IconHome,
    IconLayoutDashboard,
    IconPackage,
    IconPalette,
    IconSearch,
    IconShapes
} from 'hq-icons'

export function Navbar() {
    const id = useId()
    const pathname = usePathname()
    const menuItems = [
        { id: 1, label: 'Home', url: '/', active: pathname === '/' },
        { id: 2, label: 'Components', url: '/docs', active: pathname.startsWith('/docs') },
        { id: 3, label: 'Blocks', url: '/blocks', active: pathname.startsWith('/blocks') },
        { id: 4, label: 'Icons', url: '/icons', active: pathname.startsWith('/icons') },
        { id: 5, label: 'Colors', url: '/colors', active: pathname.startsWith('/colors') }
    ]

    const isMobile = useIsMobile()

    const [open, setOpen] = useState(false)
    return (
        <>
            <CommandMenu action={setOpen} openCommand={open} />
            <LayoutGroup id={`navigation-${id}`}>
                <div className='sticky top-0 z-30 hidden overflow-hidden pb-0 md:block'>
                    <nav className='border-b bg-bg/60 py-2 backdrop-blur-lg'>
                        <div className='mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-8'>
                            <div className='flex items-center justify-between'>
                                <div className='flex items-center gap-x-2'>
                                    <NavbarDropdown />
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
                                        <Button onPress={() => setOpen((open: boolean) => !open)} variant='outline'>
                                            <IconSearch />
                                            <span className='mr-2 text-muted-fg'>Search...</span>
                                            <Keyboard keys={['meta', 'k']} />
                                        </Button>
                                        <ThemeToggle />

                                        <Separator orientation='vertical' className='mx-2 h-7' />

                                        <Link
                                            aria-label='Github Repository'
                                            className={buttonStyles({
                                                variant: 'outline',
                                                icon: true,
                                                className: '[&_[data-slot=icon]]:text-fg'
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
            {isMobile && <ResponsiveAside action={setOpen} />}
        </>
    )
}

export function NavbarDropdown() {
    return (
        <Menu>
            <Button aria-label='Menu' variant='ghost' className='group -ml-1 [&_svg]:size-4'>
                <span className='flex items-center gap-x-2'>
                    <IconBrandCleon className='-ml-1 size-6' />
                    <span className='font-bold text-base tracking-tight sm:text-sm'>HQ UI</span>
                    <IconChevronDown className='-mr-2 ml-1 text-muted-fg transition group-pressed:rotate-180 group-pressed:text-fg group-data-hovered:text-fg' />
                    <span className='sr-only'>Open menu</span>
                </span>
            </Button>
            <Menu.Content placement='bottom' className='md:w-64'>
                <Menu.Item href='/' target='_blank'>
                    <IconHome />
                    <Menu.Label>Home</Menu.Label>
                </Menu.Item>
                <Menu.Item href='/docs'>
                    <IconPackage />
                    <Menu.Label>Components</Menu.Label>
                </Menu.Item>
                <Menu.Item href='/blocks'>
                    <IconLayoutDashboard />
                    <Menu.Label>Blocks</Menu.Label>
                </Menu.Item>
                <Menu.Item href='/icons'>
                    <IconShapes />
                    <Menu.Label>Icons</Menu.Label>
                </Menu.Item>
                <Menu.Item href='/colors'>
                    <IconPalette />
                    <Menu.Label>Colors</Menu.Label>
                </Menu.Item>
                <Menu.Separator />
                <Menu.Header>Refs</Menu.Header>
                <Menu.Item href='https://github.com/hq-kit/ui' target='_blank'>
                    <IconBrandGithub />
                    <Menu.Label>Github</Menu.Label>
                </Menu.Item>
                <Menu.Item href='https://react-spectrum.adobe.com/react-aria/components.html' target='_blank'>
                    <IconBrandAdobe />
                    <Menu.Label>RAC</Menu.Label>
                </Menu.Item>
                <Menu.Item href='https://tailwindcss.com/' target='_blank'>
                    <IconBrandTailwind />
                    <Menu.Label>Tailwind CSS</Menu.Label>
                </Menu.Item>
                <Menu.Item href='https://motion.dev/' target='_blank'>
                    <MotionIcon />
                    <Menu.Label>Motion</Menu.Label>
                </Menu.Item>
            </Menu.Content>
        </Menu>
    )
}
