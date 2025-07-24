'use client'

import { ThemeToggle } from '@/components/theme-toggle'
import { Avatar, Breadcrumbs, Button, Menu, Navbar, Separator } from '@/components/ui'
import { IconBrandCleon, IconGauge, IconLogOut, IconSearch, IconSettings, IconShield, IconShoppingBag } from 'hq-icons'

export default function AppNavbar({ children }: { children: React.ReactNode }) {
    return (
        <Navbar variant='inset'>
            <Navbar.Nav>
                <Navbar.Logo aria-label='Goto documenation of Navbar' href='/docs/components/layouts/navbar'>
                    <IconBrandCleon className='size-6 sm:size-5' />
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
                        <Button variant='ghost' icon aria-label='Search for products'>
                            <IconSearch />
                        </Button>
                        <ThemeToggle variant='ghost' />
                    </Navbar.Flex>
                    <Separator orientation='vertical' className='mr-3 ml-1 h-6' />
                    <UserMenu />
                </Navbar.Section>
            </Navbar.Nav>
            <Navbar.Compact>
                <Navbar.Flex>
                    <Navbar.Trigger className='-ml-2' />
                    <Separator orientation='vertical' className='h-6 sm:mx-1' />
                    <Navbar.Logo aria-label='Goto documenation of Navbar' href='/docs/components/layouts/navbar'>
                        <IconBrandCleon className='size-5' />
                    </Navbar.Logo>
                </Navbar.Flex>
                <Navbar.Flex>
                    <Navbar.Flex>
                        <Button variant='ghost' icon aria-label='Search for products'>
                            <IconSearch />
                        </Button>
                        <Button variant='ghost' icon aria-label='Your Bag'>
                            <IconShoppingBag />
                        </Button>
                        <ThemeToggle variant='ghost' />
                    </Navbar.Flex>
                    <Separator orientation='vertical' className='mr-3 ml-1 h-6' />
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
                <Avatar alt='DQ' size='sm' shape='square' src='https://github.com/dq-alhq.png' />
            </Menu.Trigger>
            <Menu.Content placement='bottom right' className='sm:min-w-56'>
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
                    <IconLogOut />
                    Log out
                </Menu.Item>
            </Menu.Content>
        </Menu>
    )
}
