'use client'

import { IconBrandLinux, IconSearch, IconShoppingBag } from 'hq-icons'

import { Button, Navbar } from '@/components/ui'

export default function AppNavbar() {
    return (
        <Navbar>
            <Navbar.Nav>
                <Navbar.Logo href='#'>
                    <IconBrandLinux className='size-5' />
                </Navbar.Logo>
                <Navbar.Section>
                    <Navbar.Item href='/docs/components/layouts/navbar'>Documentation</Navbar.Item>
                    <Navbar.Item href='#'>Features</Navbar.Item>
                    <Navbar.Item href='#'>Support</Navbar.Item>
                    <Navbar.Item href='#'>Pricing</Navbar.Item>
                </Navbar.Section>
            </Navbar.Nav>
            <Navbar.Compact>
                <Navbar.Flex>
                    <Navbar.Trigger className='-ml-2' />
                </Navbar.Flex>
                <Navbar.Flex>
                    <Navbar.Flex>
                        <Button variant='ghost' size='icon' aria-label='Search for products'>
                            <IconSearch />
                        </Button>
                        <Button variant='ghost' size='icon' aria-label='Your Bag'>
                            <IconShoppingBag />
                        </Button>
                    </Navbar.Flex>
                </Navbar.Flex>
            </Navbar.Compact>
            {/*<Navbar.Inset>*/}
            {/*  <Heading>Home</Heading>*/}
            {/*</Navbar.Inset>*/}
        </Navbar>
    )
}
