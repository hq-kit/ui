'use client'

import { IconBrandCleon, IconSearch, IconShoppingBag } from 'hq-icons'

import { Button, Navbar } from '@/components/ui'

export default function NavbarLayout({ children }: { children: React.ReactNode }) {
    return (
        <Navbar variant='inset'>
            <Navbar.Nav className='container'>
                <Navbar.Logo href='#'>
                    <IconBrandCleon className='size-5' />
                </Navbar.Logo>
                <Navbar.Section>
                    <Navbar.Item href='#'>Home</Navbar.Item>
                    <Navbar.Item isCurrent href='#'>
                        Dashboard
                    </Navbar.Item>
                    <Navbar.Item href='#'>Orders</Navbar.Item>
                    <Navbar.Item href='#'>Products</Navbar.Item>
                    <Navbar.Item href='#'>Customers</Navbar.Item>
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
            <Navbar.Inset>{children}</Navbar.Inset>
        </Navbar>
    )
}
