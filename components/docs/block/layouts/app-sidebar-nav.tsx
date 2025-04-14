'use client'

import { IconBrandCleon, IconSearch, IconShoppingBag } from 'hq-icons'

import { ThemeToggle } from '@/components/theme-toggle'
import { Button, Navbar, Separator } from '@/components/ui'

export default function AppNavbar(props: React.ComponentProps<typeof Navbar>) {
    return (
        <Navbar {...props}>
            <Navbar.Nav>
                <Navbar.Logo aria-label='Goto documenation of Navbar' href='#'>
                    <IconBrandCleon className='size-6 sm:size-5' />
                </Navbar.Logo>
                <Navbar.Section className='ml-auto hidden md:flex'>
                    <Navbar.Flex className='sm:gap-x-1'>
                        <Button variant='ghost' icon aria-label='Search for products'>
                            <IconSearch />
                        </Button>
                        <Button variant='ghost' icon aria-label='Your Bag'>
                            <IconShoppingBag />
                        </Button>
                        <ThemeToggle />
                    </Navbar.Flex>
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
                </Navbar.Flex>
            </Navbar.Compact>
            {props.children ?? null}
        </Navbar>
    )
}
