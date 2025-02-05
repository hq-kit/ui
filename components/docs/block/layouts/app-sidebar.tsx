'use client'

import {
    IconArchive,
    IconArrowDown,
    IconArrowUp,
    IconBrandCleon,
    IconBuilding,
    IconCheck,
    IconChevronDown,
    IconClock,
    IconCommand,
    IconCreditCard,
    IconEllipsis,
    IconGauge,
    IconHash,
    IconHeadphones,
    IconList,
    IconLogOut,
    IconMessage,
    IconNotebook,
    IconPackage,
    IconPlus,
    IconSettings,
    IconShield,
    IconShieldQuestion,
    IconShoppingBag,
    IconTicket
} from 'hq-icons'

import { Avatar, Link, Menu, Sidebar } from '@/components/ui'

export default function AppSidebar(props: React.ComponentProps<typeof Sidebar>) {
    return (
        <Sidebar {...props}>
            <Sidebar.Header>
                <Link
                    className='flex items-center gap-x-2 group-data-[collapsible=dock]:size-10 group-data-[collapsible=dock]:justify-center'
                    href='/docs/components/layouts/sidebar'
                >
                    <IconBrandCleon className='size-5' />
                    <Sidebar.Label className='font-medium'>HQ UI</Sidebar.Label>
                </Link>
            </Sidebar.Header>
            <Sidebar.Content>
                <Sidebar.SectionGroup>
                    <Sidebar.Section title='Overview'>
                        <Sidebar.Item tooltip='Overview' isCurrent href='#'>
                            <IconGauge />
                            <Sidebar.Label>Overview</Sidebar.Label>
                        </Sidebar.Item>

                        <Sidebar.Item tooltip='Orders'>
                            {({ isHovered, isCollapsed }) => (
                                <>
                                    <Sidebar.Link href='#'>
                                        <IconShoppingBag />
                                        <Sidebar.Label>Orders</Sidebar.Label>
                                    </Sidebar.Link>
                                    {!isCollapsed && isHovered && (
                                        <Menu>
                                            <Menu.Trigger aria-label='Manage'>
                                                <IconEllipsis />
                                            </Menu.Trigger>
                                            <Menu.Content offset={0} placement='right top'>
                                                <Menu.Item href='#new-order'>
                                                    <IconPlus />
                                                    Create New Order
                                                </Menu.Item>
                                                <Menu.Item href='#view-all'>
                                                    <IconList />
                                                    View All Orders
                                                </Menu.Item>
                                                <Menu.Item href='#pending-orders'>
                                                    <IconClock />
                                                    Pending Orders
                                                </Menu.Item>
                                                <Menu.Item href='#completed-orders'>
                                                    <IconCheck />
                                                    Completed Orders
                                                </Menu.Item>
                                                <Menu.Item href='#export-orders'>
                                                    <IconArrowUp />
                                                    Export Orders
                                                </Menu.Item>
                                            </Menu.Content>
                                        </Menu>
                                    )}
                                </>
                            )}
                        </Sidebar.Item>
                        <Sidebar.Item tooltip='Products'>
                            {({ isHovered, isCollapsed }) => (
                                <>
                                    <Sidebar.Link href='#'>
                                        <Sidebar.Label>Products</Sidebar.Label>
                                    </Sidebar.Link>
                                    {!isCollapsed && isHovered && (
                                        <Menu>
                                            <Menu.Trigger aria-label='Manage'>
                                                <IconEllipsis />
                                            </Menu.Trigger>
                                            <Menu.Content offset={0} placement='right top'>
                                                <Menu.Item href='#new-product'>
                                                    <IconPlus />
                                                    Add New Product
                                                </Menu.Item>
                                                <Menu.Item href='#archive'>
                                                    <IconArchive />
                                                    Archive Product
                                                </Menu.Item>
                                                <Menu.Item href='#manage-categories'>
                                                    <IconHash />
                                                    Manage Categories
                                                </Menu.Item>
                                                <Menu.Item href='#import'>
                                                    <IconArrowDown />
                                                    Import Products
                                                </Menu.Item>
                                                <Menu.Item href='#export'>
                                                    <IconArrowUp />
                                                    Export Products
                                                </Menu.Item>
                                            </Menu.Content>
                                        </Menu>
                                    )}
                                </>
                            )}
                        </Sidebar.Item>
                        <Sidebar.Item href='#' badge='4 Pending' tooltip='Payments'>
                            <IconCreditCard />
                            <Sidebar.Label>Payments</Sidebar.Label>
                        </Sidebar.Item>
                    </Sidebar.Section>

                    <Sidebar.DisclosureGroup defaultExpandedKeys={[1]}>
                        <Sidebar.Disclosure id={1}>
                            <Sidebar.DisclosureTrigger>
                                <IconEllipsis />
                                <Sidebar.Label>Support</Sidebar.Label>
                            </Sidebar.DisclosureTrigger>
                            <Sidebar.DisclosurePanel>
                                <Sidebar.Item href='#' tooltip='Tickets'>
                                    <IconTicket />
                                    <Sidebar.Label>Tickets</Sidebar.Label>
                                </Sidebar.Item>
                                <Sidebar.Item href='#' tooltip='Chat Support'>
                                    <IconMessage />
                                    <Sidebar.Label>Chat Support</Sidebar.Label>
                                </Sidebar.Item>
                                <Sidebar.Item href='#' tooltip='FAQ'>
                                    <IconShieldQuestion />
                                    <Sidebar.Label>FAQ</Sidebar.Label>
                                </Sidebar.Item>
                                <Sidebar.Item href='#' tooltip='Documentation'>
                                    <IconNotebook />
                                    <Sidebar.Label>Documentation</Sidebar.Label>
                                </Sidebar.Item>
                            </Sidebar.DisclosurePanel>
                        </Sidebar.Disclosure>
                        <Sidebar.Disclosure id={2}>
                            <Sidebar.DisclosureTrigger>
                                <IconPackage />
                                <Sidebar.Label>Inventory</Sidebar.Label>
                            </Sidebar.DisclosureTrigger>
                            <Sidebar.DisclosurePanel>
                                <Sidebar.Item href='#' tooltip='Warehouse'>
                                    <IconBuilding />
                                    <Sidebar.Label>Warehouse</Sidebar.Label>
                                </Sidebar.Item>
                                <Sidebar.Item href='#' tooltip='Stock Levels'>
                                    <Sidebar.Label>Stock Levels</Sidebar.Label>
                                </Sidebar.Item>
                                <Sidebar.Item href='#' tooltip='Shipping'>
                                    <Sidebar.Label>Shipping</Sidebar.Label>
                                </Sidebar.Item>
                            </Sidebar.DisclosurePanel>
                        </Sidebar.Disclosure>
                    </Sidebar.DisclosureGroup>
                </Sidebar.SectionGroup>
            </Sidebar.Content>

            <Sidebar.Footer>
                <Menu>
                    <Menu.Trigger className='group' aria-label='Profile' data-slot='menu-trigger'>
                        <Avatar shape='square' src='https://github.com/dq-alhq.png' />
                        <div className='text-sm in-data-[sidebar-collapsible=dock]:hidden'>
                            <Sidebar.Label>DQ Al Haqqi</Sidebar.Label>
                            <span className='text-muted-fg -mt-0.5 block'>@dq-alhq</span>
                        </div>
                        <IconChevronDown
                            data-slot='chevron'
                            className='group-pressed:rotate-180 absolute right-3 size-4 transition-transform'
                        />
                    </Menu.Trigger>
                    <Menu.Content placement='bottom right' className='sm:min-w-(--trigger-width)'>
                        <Menu.Section>
                            <Menu.Header separator>
                                <span className='block'>DQ Al Haqqi</span>
                                <span className='text-muted-fg font-normal'>@dq-alhq</span>
                            </Menu.Header>
                        </Menu.Section>

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
            </Sidebar.Footer>
            <Sidebar.Rail />
        </Sidebar>
    )
}
