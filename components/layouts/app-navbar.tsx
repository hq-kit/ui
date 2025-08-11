'use client'
import { IconBrandGithub, IconSearch } from '@tabler/icons-react'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { Collection } from 'react-aria-components'
import { IconApp } from '@/components/icons'
import { CommandMenu } from '@/components/layouts/command-menu'
import { MobileNav } from '@/components/layouts/mobile-nav'
import { ThemeToggle } from '@/components/theme-toggle'
import { Button, buttonStyle, Keyboard, Link, Navbar, Separator } from '@/components/ui'

export function AppNavbar() {
    const pathname = usePathname()
    const menuItems = [
        { id: 1, label: 'Home', url: '/', active: pathname === '/' },
        { id: 2, label: 'Components', url: '/docs', active: pathname.startsWith('/docs') },
        { id: 3, label: 'Blocks', url: '/blocks', active: pathname.startsWith('/blocks') },
        { id: 4, label: 'Colors', url: '/colors', active: pathname.startsWith('/colors') }
    ]

    const [openNav, setOpenNav] = useState(false)
    const [openCommand, setOpenCommand] = useState(false)

    useEffect(() => {
        setOpenNav(false)
    }, [pathname])

    return (
        <>
            <CommandMenu action={setOpenCommand} openCommand={openCommand} />
            <Navbar isOpen={openNav} isSticky onOpenChange={setOpenNav}>
                <Navbar.Nav className='xl:*:[div]:h-full xl:*:[div]:border-x'>
                    <Navbar.Logo aria-label='Home' className='flex items-center' href='/'>
                        <IconApp />
                        <span className='whitespace-nowrap font-bold'>HQ UI</span>
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
                    <MobileNav currentUrl={pathname} />
                    <Navbar.Section className='ml-auto hidden md:flex'>
                        <Navbar.Flex>
                            <Button onPress={() => setOpenCommand(true)} variant='outline'>
                                <IconSearch />
                                <span className='mr-2 text-muted-foreground'>Search...</span>
                                <Keyboard keys={['meta', 'k']} />
                            </Button>
                            <ThemeToggle />
                            <Separator className='mx-2 h-7' orientation='vertical' />
                            <Link
                                aria-label='Github Repository'
                                className={buttonStyle({
                                    variant: 'outline',
                                    icon: true
                                })}
                                href={'https://github.com/hq-kit/ui'}
                                target='_blank'
                            >
                                <IconBrandGithub />
                            </Link>
                        </Navbar.Flex>
                    </Navbar.Section>
                </Navbar.Nav>
                <Navbar.Compact>
                    <Navbar.Flex>
                        <Navbar.Trigger aria-label='Toggle Navbar' />
                        <Separator className='mx-1 h-7' orientation='vertical' />
                        <Navbar.Logo aria-label='Home' className='flex items-center' href='/'>
                            <IconApp />
                            <span className='whitespace-nowrap font-bold'>HQ UI</span>
                        </Navbar.Logo>
                    </Navbar.Flex>
                    <Navbar.Flex>
                        <Button icon onPress={() => setOpenCommand(true)} variant='outline'>
                            <IconSearch />
                        </Button>
                        <ThemeToggle />
                        <Separator className='mx-2 h-7' orientation='vertical' />
                        <Link
                            aria-label='Github Repository'
                            className={buttonStyle({
                                variant: 'outline',
                                icon: true
                            })}
                            href={'https://github.com/hq-kit/ui'}
                            target='_blank'
                        >
                            <IconBrandGithub />
                        </Link>
                    </Navbar.Flex>
                </Navbar.Compact>
            </Navbar>
        </>
    )
}
