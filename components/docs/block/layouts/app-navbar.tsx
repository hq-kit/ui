'use client'

import {
    IconBrandCleon,
    IconChevronDown,
    IconCommand,
    IconGauge,
    IconHeadphones,
    IconLogOut,
    IconSearch,
    IconSettings,
    IconShield,
    IconShoppingBag
} from 'hq-icons'

import { ThemeToggle } from '@/components/theme-toggle'
import { Avatar, Button, Menu, Navbar, Separator } from '@/components/ui'

export default function AppNavbar(props: React.ComponentProps<typeof Navbar>) {
    return (
        <Navbar {...props}>
            <Navbar.Nav>
                <Navbar.Logo aria-label='Goto documenation of Navbar' href='/docs/components/layouts/navbar'>
                    <IconBrandCleon className='size-6 sm:size-5' />
                </Navbar.Logo>
                <Navbar.Section>
                    <Navbar.Item href='#' isCurrent>
                        Home
                    </Navbar.Item>
                    <Navbar.Item href='#'>Shop</Navbar.Item>
                    <Navbar.Item href='#'>Offers</Navbar.Item>
                    <Navbar.Item href='#'>Orders</Navbar.Item>
                    <Menu>
                        <Navbar.Item>
                            Categories <IconChevronDown data-slot='chevron' />
                        </Navbar.Item>
                        <Menu.Content items={categories}>
                            {(item) => (
                                <Menu.Item id={item.id} textValue={item.label} href={item.url}>
                                    {item.label}
                                </Menu.Item>
                            )}
                        </Menu.Content>
                    </Menu>
                </Navbar.Section>

                <Navbar.Section className='ml-auto hidden md:flex'>
                    <Navbar.Flex className='sm:gap-x-1'>
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
            {props.children ?? null}
        </Navbar>
    )
}

const categories = [
    {
        id: 1,
        label: 'Electronics',
        url: '#'
    },
    {
        id: 2,
        label: 'Fashion',
        url: '#'
    },
    {
        id: 3,
        label: 'Home & Kitchen',
        url: '#'
    },
    {
        id: 4,
        label: 'Sports',
        url: '#'
    },
    {
        id: 5,
        label: 'Books',
        url: '#'
    },
    {
        id: 6,
        label: 'Beauty & Personal Care',
        url: '#'
    },
    {
        id: 7,
        label: 'Grocery',
        url: '#'
    },
    {
        id: 8,
        label: 'Toys & Games',
        url: '#'
    },
    {
        id: 9,
        label: 'Automotive',
        url: '#'
    },
    {
        id: 10,
        label: 'Health & Wellness',
        url: '#'
    }
]

function UserMenu() {
    return (
        <Menu>
            <Menu.Trigger aria-label='Open Menu'>
                <Avatar alt='DQ' size='sm' shape='square' src='https://github.com/dq-alhq.png' />
            </Menu.Trigger>
            <Menu.Content placement='bottom right' className='sm:min-w-56'>
                <Menu.Header>
                    <span className='block'>DQ Al-Haqqi</span>
                    <span className='text-muted-fg font-normal'>@dq-alhq</span>
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
                <Menu.Item>
                    <IconCommand />
                    Command Menu
                </Menu.Item>
                <Menu.Item href='#contact'>
                    <IconHeadphones />
                    Customer Support
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
