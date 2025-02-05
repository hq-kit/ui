'use client'

import { IconBrandCleon, IconSearch, IconShoppingBag } from 'hq-icons'

import { ThemeToggle } from '@/components/theme-toggle'
import { Avatar, Button, Navbar, Separator } from '@/components/ui'

export default function AppNavbar() {
    return (
        <Navbar>
            <Navbar.Nav>
                <Navbar.Logo
                    aria-label='Goto documenation of Navbar'
                    href='/docs/components/layouts/navbar'
                >
                    <IconBrandCleon className='size-6 sm:size-5' />
                </Navbar.Logo>
                <Navbar.Section>
                    <Navbar.Item href='#' isCurrent>
                        Home
                    </Navbar.Item>
                    <Navbar.Item href='#'>Shop</Navbar.Item>
                    <Navbar.Item href='#'>Offers</Navbar.Item>
                    <Navbar.Item href='#'>Orders</Navbar.Item>
                </Navbar.Section>

                <Navbar.Section className='ml-auto hidden md:flex'>
                    <Navbar.Flex className='sm:gap-x-1'>
                        <Button variant='ghost' size='icon' aria-label='Search for products'>
                            <IconSearch />
                        </Button>
                        <Button variant='ghost' size='icon' aria-label='Your Bag'>
                            <IconShoppingBag />
                        </Button>
                        <ThemeToggle variant='ghost' />
                    </Navbar.Flex>
                    <Separator orientation='vertical' className='mr-3 ml-1 h-6' />
                    <Avatar
                        alt='DQ'
                        size='sm'
                        shape='square'
                        src='https://github.com/dq-alhq.png'
                    />
                </Navbar.Section>
            </Navbar.Nav>

            <Navbar.Compact>
                <Navbar.Flex>
                    <Navbar.Trigger className='-ml-2' />
                    <Separator orientation='vertical' className='h-6 sm:mx-1' />
                    <Navbar.Logo
                        aria-label='Goto documenation of Navbar'
                        href='/docs/components/layouts/navbar'
                    >
                        <IconBrandCleon className='size-5' />
                    </Navbar.Logo>
                </Navbar.Flex>
                <Navbar.Flex>
                    <Navbar.Flex>
                        <Button variant='ghost' size='icon' aria-label='Search for products'>
                            <IconSearch />
                        </Button>
                        <Button variant='ghost' size='icon' aria-label='Your Bag'>
                            <IconShoppingBag />
                        </Button>
                        <ThemeToggle variant='ghost' />
                    </Navbar.Flex>
                    <Separator orientation='vertical' className='mr-3 ml-1 h-6' />
                    <Avatar
                        alt='DQ'
                        size='sm'
                        shape='square'
                        src='https://github.com/dq-alhq.png'
                    />
                </Navbar.Flex>
            </Navbar.Compact>
        </Navbar>
    )
}
