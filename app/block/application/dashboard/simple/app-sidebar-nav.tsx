'use client'

import { IconLogout, IconSettings } from '@tabler/icons-react'
import { IconApp } from '@/components/icons'
import { ThemeToggle } from '@/components/theme-toggle'
import { Avatar, Breadcrumbs, Link, Menu, SidebarNav } from '@/components/ui'

export default function AppSidebarNav() {
    return (
        <SidebarNav>
            <Link className='ml-auto pl-16 md:hidden' href='#'>
                <IconApp className='size-6' />
            </Link>
            <Breadcrumbs className='hidden md:flex'>
                <Breadcrumbs.Item href='#'>Dashboard</Breadcrumbs.Item>
                <Breadcrumbs.Item>Content</Breadcrumbs.Item>
            </Breadcrumbs>
            <div className='ml-auto'>
                <ThemeToggle variant='ghost' />
            </div>
            <Menu>
                <Menu.Trigger aria-label='Open Menu' className='md:hidden'>
                    <Avatar alt='Diqi Al-Haqqi' src='https://github.com/dq-alhq.png' />
                </Menu.Trigger>
                <Menu.Content className='sm:min-w-(--trigger-width)' placement='right bottom'>
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
        </SidebarNav>
    )
}
