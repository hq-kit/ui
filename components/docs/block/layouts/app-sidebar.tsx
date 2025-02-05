'use client'

import {
    IconArchive,
    IconArrowDown,
    IconArrowUp,
    IconBrandApple,
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

import {
    Avatar,
    Link,
    Menu,
    Sidebar,
    SidebarContent,
    SidebarDisclosure,
    SidebarDisclosureGroup,
    SidebarDisclosurePanel,
    SidebarDisclosureTrigger,
    SidebarFooter,
    SidebarHeader,
    SidebarItem,
    SidebarLabel,
    SidebarLink,
    SidebarRail,
    SidebarSection,
    SidebarSectionGroup
} from '@/components/ui'

export default function AppSidebar(props: React.ComponentProps<typeof Sidebar>) {
    return (
        <Sidebar {...props}>
            <SidebarHeader>
                <Link
                    className='flex items-center gap-x-2 group-data-[collapsible=dock]:size-10 group-data-[collapsible=dock]:justify-center'
                    href='/docs/2.x/components/layouts/sidebar'
                >
                    <IconBrandApple className='size-5' />
                    <SidebarLabel className='font-medium'>Apple</SidebarLabel>
                </Link>
            </SidebarHeader>
            <SidebarContent>
                <SidebarSectionGroup>
                    <SidebarSection title='Overview'>
                        <SidebarItem tooltip='Overview' isCurrent href='#'>
                            <IconGauge />
                            <SidebarLabel>Overview</SidebarLabel>
                        </SidebarItem>

                        <SidebarItem tooltip='Orders'>
                            {({ isHovered, isCollapsed }) => (
                                <>
                                    <SidebarLink href='#'>
                                        <IconShoppingBag />
                                        <SidebarLabel>Orders</SidebarLabel>
                                    </SidebarLink>
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
                        </SidebarItem>
                        <SidebarItem tooltip='Products'>
                            {({ isHovered, isCollapsed }) => (
                                <>
                                    <SidebarLink href='#'>
                                        <SidebarLabel>Products</SidebarLabel>
                                    </SidebarLink>
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
                        </SidebarItem>
                        <SidebarItem href='#' badge='4 Pending' tooltip='Payments'>
                            <IconCreditCard />
                            <SidebarLabel>Payments</SidebarLabel>
                        </SidebarItem>
                    </SidebarSection>

                    <SidebarDisclosureGroup defaultExpandedKeys={[1]}>
                        <SidebarDisclosure id={1}>
                            <SidebarDisclosureTrigger>
                                <IconEllipsis />
                                <SidebarLabel>Support</SidebarLabel>
                            </SidebarDisclosureTrigger>
                            <SidebarDisclosurePanel>
                                <SidebarItem href='#' tooltip='Tickets'>
                                    <IconTicket />
                                    <SidebarLabel>Tickets</SidebarLabel>
                                </SidebarItem>
                                <SidebarItem href='#' tooltip='Chat Support'>
                                    <IconMessage />
                                    <SidebarLabel>Chat Support</SidebarLabel>
                                </SidebarItem>
                                <SidebarItem href='#' tooltip='FAQ'>
                                    <IconShieldQuestion />
                                    <SidebarLabel>FAQ</SidebarLabel>
                                </SidebarItem>
                                <SidebarItem href='#' tooltip='Documentation'>
                                    <IconNotebook />
                                    <SidebarLabel>Documentation</SidebarLabel>
                                </SidebarItem>
                            </SidebarDisclosurePanel>
                        </SidebarDisclosure>
                        <SidebarDisclosure id={2}>
                            <SidebarDisclosureTrigger>
                                <IconPackage />
                                <SidebarLabel>Inventory</SidebarLabel>
                            </SidebarDisclosureTrigger>
                            <SidebarDisclosurePanel>
                                <SidebarItem href='#' tooltip='Warehouse'>
                                    <IconBuilding />
                                    <SidebarLabel>Warehouse</SidebarLabel>
                                </SidebarItem>
                                <SidebarItem href='#' tooltip='Stock Levels'>
                                    <SidebarLabel>Stock Levels</SidebarLabel>
                                </SidebarItem>
                                <SidebarItem href='#' tooltip='Shipping'>
                                    <SidebarLabel>Shipping</SidebarLabel>
                                </SidebarItem>
                            </SidebarDisclosurePanel>
                        </SidebarDisclosure>
                    </SidebarDisclosureGroup>
                </SidebarSectionGroup>
            </SidebarContent>

            <SidebarFooter>
                <Menu>
                    <Menu.Trigger className='group' aria-label='Profile' data-slot='menu-trigger'>
                        <Avatar shape='square' src='https://github.com/dq-alhq.png' />
                        <div className='text-sm in-data-[sidebar-collapsible=dock]:hidden'>
                            <SidebarLabel>DQ Al Haqqi</SidebarLabel>
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
                                <span className='block'>Kurt Cobain</span>
                                <span className='text-muted-fg font-normal'>@cobain</span>
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
            </SidebarFooter>
            <SidebarRail />
        </Sidebar>
    )
}
