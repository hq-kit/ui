'use client'

import { Menu, Sidebar, User } from '@/components/ui'
import {
    IconBrandCleon,
    IconChevronRight,
    IconCreditCard,
    IconEllipsis,
    IconGauge,
    IconLogOut,
    IconMessage,
    IconNotebook,
    IconSettings,
    IconShieldQuestion,
    IconTicket
} from 'hq-icons'

export default function AppSidebar() {
    return (
        <Sidebar>
            <Sidebar.Header>
                <IconBrandCleon />
                <Sidebar.Label>HQ UI</Sidebar.Label>
            </Sidebar.Header>
            <Sidebar.Content>
                <Sidebar.Section title='Overview'>
                    <Sidebar.Item tooltip='Overview' isCurrent href='#'>
                        <IconGauge />
                        <Sidebar.Label>Overview</Sidebar.Label>
                    </Sidebar.Item>
                    <Sidebar.Item href='#' badge='4 Pending' tooltip='Payments'>
                        <IconCreditCard />
                        <Sidebar.Label>Payments</Sidebar.Label>
                    </Sidebar.Item>
                </Sidebar.Section>

                <Sidebar.Section defaultExpandedKeys={[1]}>
                    <Sidebar.Item id={1}>
                        <Sidebar.SubItemTrigger>
                            <IconEllipsis />
                            <Sidebar.Label>Support</Sidebar.Label>
                        </Sidebar.SubItemTrigger>
                        <Sidebar.SubItem>
                            <Sidebar.Item href='#'>
                                <IconTicket />
                                <Sidebar.Label>Tickets</Sidebar.Label>
                            </Sidebar.Item>
                            <Sidebar.Item href='#'>
                                <IconMessage />
                                <Sidebar.Label>Chat Support</Sidebar.Label>
                            </Sidebar.Item>
                            <Sidebar.Item href='#'>
                                <IconShieldQuestion />
                                <Sidebar.Label>FAQ</Sidebar.Label>
                            </Sidebar.Item>
                            <Sidebar.Item href='#'>
                                <IconNotebook />
                                <Sidebar.Label>Documentation</Sidebar.Label>
                            </Sidebar.Item>
                        </Sidebar.SubItem>
                    </Sidebar.Item>
                </Sidebar.Section>
            </Sidebar.Content>
            <Sidebar.Footer>
                <Menu>
                    <Menu.Trigger
                        slot={null}
                        className='group flex size-full items-center justify-between rounded-lg pressed:bg-muted p-2 hover:bg-muted'
                    >
                        <User
                            src='https://github.com/dq-alhq.png'
                            name='DQ Al Haqqi'
                            description='@dq-alhq'
                            shape='square'
                        />
                        <IconChevronRight className='group-aria-expanded:-rotate-90 size-4' />
                    </Menu.Trigger>
                    <Menu.Content placement='top left' className='sm:min-w-(--trigger-width)'>
                        <Menu.Header>
                            <span className='block'>DQ Al Haqqi</span>
                            <span className='font-normal text-muted-foreground'>@dq-alhq</span>
                        </Menu.Header>
                        <Menu.Item href='#settings'>
                            <IconSettings />
                            Settings
                        </Menu.Item>
                        <Menu.Item href='#logout'>
                            <IconLogOut />
                            Log out
                        </Menu.Item>
                    </Menu.Content>
                </Menu>
            </Sidebar.Footer>
            <Sidebar.Rail />
            <Sidebar.Trigger />
        </Sidebar>
    )
}
