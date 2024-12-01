'use client'

import {
    IconChevronDown,
    IconCircleUser,
    IconLogOut,
    IconSearch,
    IconSettings,
    IconShield
} from 'hq-icons'
import AppSidebar from 'layouts/app-sidebar'

import { Avatar, Button, Menu, SearchField, Separator, Sidebar } from '@/components/ui'

export default function SidebarBasicDemo() {
    return (
        <Sidebar.Provider>
            <AppSidebar />
            <Sidebar.Inset>
                <header className='sticky justify-between sm:justify-start top-0 bg-bg h-[3.57rem] px-4 border-b flex items-center gap-x-2'>
                    <span className='flex items-center gap-x-3'>
                        <Sidebar.Trigger className='-mx-2' />
                        <Separator className='h-6 sm:block hidden' orientation='vertical' />
                    </span>
                    <SearchField className='sm:inline hidden sm:ml-1.5' />
                    <div className='flex sm:hidden items-center gap-x-2'>
                        <Button variant='ghost' aria-label='Search...' size='icon'>
                            <IconSearch />
                        </Button>
                        <Menu>
                            <Menu.Trigger
                                aria-label='Profile'
                                className='flex items-center gap-x-2 group'
                            >
                                <Avatar
                                    size='sm'
                                    shape='circle'
                                    src='https://github.com/dq-alhq.png'
                                />
                                <IconChevronDown className='size-4 group-pressed:rotate-180 transition-transform' />
                            </Menu.Trigger>
                            <Menu.Content className='min-w-[--trigger-width]'>
                                <Menu.Item href='#'>
                                    <IconCircleUser />
                                    Profile
                                </Menu.Item>
                                <Menu.Item href='#'>
                                    <IconSettings />
                                    Settings
                                </Menu.Item>
                                <Menu.Item href='#'>
                                    <IconShield />
                                    Security
                                </Menu.Item>
                                <Menu.Item href='#'>
                                    <IconLogOut />
                                    Log out
                                </Menu.Item>
                            </Menu.Content>
                        </Menu>
                    </div>
                </header>
                <div className='p-4 lg:p-6'>YOUR CONTENT</div>
            </Sidebar.Inset>
        </Sidebar.Provider>
    )
}
