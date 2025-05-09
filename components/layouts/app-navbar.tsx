'use client'
import { useEffect, useState } from 'react'

import { IconBrandCleon, IconBrandGithub, IconSearch } from 'hq-icons'
import { usePathname } from 'next/navigation'
import { Collection } from 'react-aria-components'

import { CommandMenu } from '@/components/layouts/command-menu'
import { ThemeToggle } from '@/components/theme-toggle'
import { Button, Keyboard, Link, Navbar, Separator, buttonStyle } from '@/components/ui'

export function AppNavbar() {
    const pathname = usePathname()
    const menuItems = [
        { id: 1, label: 'Home', url: '/', active: pathname === '/' },
        { id: 2, label: 'Components', url: '/docs', active: pathname.startsWith('/docs') },
        { id: 3, label: 'Blocks', url: '/blocks', active: pathname.startsWith('/blocks') },
        { id: 4, label: 'Icons', url: '/icons', active: pathname.startsWith('/icons') },
        { id: 5, label: 'Colors', url: '/colors', active: pathname.startsWith('/colors') }
    ]

    const [openNav, setOpenNav] = useState(false)
    const [openCommand, setOpenCommand] = useState(false)

    // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
    useEffect(() => {
        setOpenNav(false)
    }, [pathname])

    return (
        <>
            <CommandMenu openCommand={openCommand} action={setOpenCommand} />
            <Navbar isSticky isOpen={openNav} onOpenChange={setOpenNav}>
                <Navbar.Nav>
                    <Navbar.Logo href='/' aria-label='Home' className='flex items-center'>
                        <IconBrandCleon />
                        <span className='font-bold'>HQ UI</span>
                    </Navbar.Logo>
                    <Navbar.Section className='md:ml-4'>
                        <Collection items={menuItems}>
                            {(item) => (
                                <Navbar.Item href={item.url} isCurrent={item.active}>
                                    {item.label}
                                </Navbar.Item>
                            )}
                        </Collection>
                    </Navbar.Section>
                    <Navbar.Section className='ml-auto hidden md:flex'>
                        <Navbar.Flex>
                            <>
                                <Button variant='outline' onPress={() => setOpenCommand(true)}>
                                    <IconSearch />
                                    <span className='mr-2 text-muted-fg'>Search...</span>
                                    <Keyboard keys={['meta', 'k']} />
                                </Button>
                                <ThemeToggle />
                                <Separator orientation='vertical' className='mx-2 h-7' />
                                <Link
                                    aria-label='Github Repository'
                                    className={buttonStyle({
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
                        </Navbar.Flex>
                    </Navbar.Section>
                </Navbar.Nav>
                <Navbar.Compact>
                    <Navbar.Flex>
                        <Navbar.Trigger aria-label='Toggle Navbar' />
                        <Separator orientation='vertical' className='mx-1 h-7' />
                        <Navbar.Logo href='/' aria-label='Home' className='flex items-center'>
                            <IconBrandCleon />
                            <span className='font-bold'>HQ UI</span>
                        </Navbar.Logo>
                    </Navbar.Flex>
                    <Navbar.Flex>
                        <Button variant='outline' icon onPress={() => setOpenCommand(true)}>
                            <IconSearch />
                        </Button>
                        <ThemeToggle />
                        <Separator orientation='vertical' className='mx-2 h-7' />
                        <Link
                            aria-label='Github Repository'
                            className={buttonStyle({
                                variant: 'outline',
                                icon: true,
                                className: '[&_[data-slot=icon]]:text-fg'
                            })}
                            target='_blank'
                            href={'https://github.com/hq-kit/ui'}
                        >
                            <IconBrandGithub />
                        </Link>
                    </Navbar.Flex>
                </Navbar.Compact>
            </Navbar>
        </>
    )
}
