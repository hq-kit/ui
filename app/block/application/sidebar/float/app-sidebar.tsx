'use client'

import {
    IconChevronRight,
    IconCreditCard,
    IconDots,
    IconGauge,
    IconLogout,
    IconMessage,
    IconNotebook,
    IconSettings,
    IconShieldQuestion,
    IconTicket
} from '@tabler/icons-react'
import { IconApp } from '@/components/icons'
import { Menu, Sidebar, User } from '@/components/ui'

export default function AppSidebar() {
    return (
        <Sidebar variant='float'>
            <Sidebar.Header>
                <IconApp />
                <Sidebar.Label>HQ UI</Sidebar.Label>
            </Sidebar.Header>
            <Sidebar.Content>
                <Sidebar.Section title='Overview'>
                    <Sidebar.Item href='#' isCurrent tooltip='Overview'>
                        <IconGauge />
                        <Sidebar.Label>Overview</Sidebar.Label>
                    </Sidebar.Item>
                    <Sidebar.Item badge='4 Pending' href='#' tooltip='Payments'>
                        <IconCreditCard />
                        <Sidebar.Label>Payments</Sidebar.Label>
                    </Sidebar.Item>
                </Sidebar.Section>

                <Sidebar.Section defaultExpandedKeys={[1]}>
                    <Sidebar.Item id={1}>
                        <Sidebar.SubItemTrigger>
                            <IconDots />
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
                        className='group flex size-full items-center justify-between rounded-lg pressed:bg-muted p-2 hover:bg-muted'
                        slot={null}
                    >
                        <User
                            description='@dq-alhq'
                            name='DQ Al Haqqi'
                            shape='square'
                            src='https://github.com/dq-alhq.png'
                        />
                        <IconChevronRight className='group-aria-expanded:-rotate-90 size-4' />
                    </Menu.Trigger>
                    <Menu.Content className='sm:min-w-(--trigger-width)' placement='top left'>
                        <Menu.Header>
                            <span className='block'>DQ Al Haqqi</span>
                            <span className='font-normal text-muted-foreground'>@dq-alhq</span>
                        </Menu.Header>
                        <Menu.Item href='#settings'>
                            <IconSettings />
                            Settings
                        </Menu.Item>
                        <Menu.Item href='#logout'>
                            <IconLogout />
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
