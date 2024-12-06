'use client'

import { IconBrandCleon, IconSearch, IconShoppingBag } from 'hq-icons'
import { usePathname } from 'next/navigation'

import { Button, Navbar } from '@/components/ui'

export default function NavbarLayout({
    variant = 'navbar',
    children
}: {
    variant?: 'inset' | 'navbar' | 'floating'
    children: React.ReactNode
}) {
    const pathname = usePathname()
    return (
        <Navbar variant={variant}>
            <Navbar.Nav className='container'>
                <Navbar.Logo href='#'>
                    <IconBrandCleon className='size-5' />
                </Navbar.Logo>
                <Navbar.Section>
                    <Navbar.Item isCurrent={pathname.includes('dashboard')} href='#'>
                        Dashboard
                    </Navbar.Item>
                    <Navbar.Item isCurrent={pathname.includes('setting')} href='#'>
                        Setting
                    </Navbar.Item>
                    <Navbar.Item isCurrent={pathname.includes('orders')} href='#'>
                        Orders
                    </Navbar.Item>
                    <Navbar.Item isCurrent={pathname.includes('products')} href='#'>
                        Products
                    </Navbar.Item>
                    <Navbar.Item isCurrent={pathname.includes('profile')} href='#'>
                        Profile
                    </Navbar.Item>
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
