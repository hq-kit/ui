'use client'

import { IconGauge, IconLogout, IconSearch, IconSettings, IconShield, IconShoppingBag } from '@tabler/icons-react'
import { IconApp } from '@/components/icons'
import { ThemeToggle } from '@/components/theme-toggle'
import { Avatar, Breadcrumbs, Button, Menu, Navbar, Separator } from '@/components/ui'

export default function AppNavbar({ children }: { children: React.ReactNode }) {
    return (
        <Navbar>
            <Navbar.Nav>
                <Navbar.Logo aria-label='Goto documenation of Navbar' href='/docs/components/layouts/navbar'>
                    <IconApp className='size-6 sm:size-5' />
                </Navbar.Logo>
                <Navbar.Section>
                    <Navbar.Item href='#' isCurrent>
                        Home
                    </Navbar.Item>
                    <Navbar.Item href='#'>About</Navbar.Item>
                    <Navbar.Item href='#'>Contact</Navbar.Item>
                </Navbar.Section>

                <Navbar.Section className='ml-auto hidden md:flex'>
                    <Navbar.Flex className='sm:gap-x-1'>
                        <Button aria-label='Search for products' icon variant='ghost'>
                            <IconSearch />
                        </Button>
                        <ThemeToggle variant='ghost' />
                    </Navbar.Flex>
                    <Separator className='mr-3 ml-1 h-6' orientation='vertical' />
                    <UserMenu />
                </Navbar.Section>
            </Navbar.Nav>
            <Navbar.Compact>
                <Navbar.Flex>
                    <Navbar.Trigger className='-ml-2' />
                    <Separator className='h-6 sm:mx-1' orientation='vertical' />
                    <Navbar.Logo aria-label='Goto documenation of Navbar' href='/docs/components/layouts/navbar'>
                        <IconApp className='size-5' />
                    </Navbar.Logo>
                </Navbar.Flex>
                <Navbar.Flex>
                    <Navbar.Flex>
                        <Button aria-label='Search for products' icon variant='ghost'>
                            <IconSearch />
                        </Button>
                        <Button aria-label='Your Bag' icon variant='ghost'>
                            <IconShoppingBag />
                        </Button>
                        <ThemeToggle variant='ghost' />
                    </Navbar.Flex>
                    <Separator className='mr-3 ml-1 h-6' orientation='vertical' />
                    <UserMenu />
                </Navbar.Flex>
            </Navbar.Compact>
            <Navbar.Breadcrumbs>
                <Breadcrumbs>
                    <Breadcrumbs.Item href='#'>Home</Breadcrumbs.Item>
                    <Breadcrumbs.Item href='#'>Blocks</Breadcrumbs.Item>
                    <Breadcrumbs.Item>Navbar</Breadcrumbs.Item>
                </Breadcrumbs>
            </Navbar.Breadcrumbs>
            <Navbar.Inset>{children}</Navbar.Inset>
        </Navbar>
    )
}

function UserMenu() {
    return (
        <Menu>
            <Menu.Trigger aria-label='Open Menu'>
                <Avatar alt='DQ' shape='square' size='sm' src='https://github.com/dq-alhq.png' />
            </Menu.Trigger>
            <Menu.Content className='sm:min-w-56' placement='bottom right'>
                <Menu.Header>
                    <span className='block'>DQ Al-Haqqi</span>
                    <span className='font-normal text-muted-foreground'>@dq-alhq</span>
                </Menu.Header>
                <Menu.Item href='#dashboard'>
                    <IconGauge />
                    Dashboard
                </Menu.Item>
                <Menu.Item href='#settings'>
                    <IconSettings />
                    Settings
                </Menu.Item>
                <Menu.Item href='#security'>
                    <IconShield />
                    Security
                </Menu.Item>
                <Menu.Separator />
                <Menu.Item href='#logout'>
                    <IconLogout />
                    Log out
                </Menu.Item>
            </Menu.Content>
        </Menu>
    )
}
