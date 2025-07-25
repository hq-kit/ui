'use client'

import { IconApp } from '@/components/icons'
import { ThemeToggle } from '@/components/theme-toggle'
import { Link } from '@/components/ui'
import { Avatar } from '@/components/ui/avatar'
import { Breadcrumbs } from '@/components/ui/breadcrumbs'
import { Menu } from '@/components/ui/menu'
import { SidebarNav } from '@/components/ui/sidebar'
import { IconLogout, IconSettings } from '@tabler/icons-react'

export default function AppSidebarNav() {
    return (
        <SidebarNav>
            <Link href='#' className='ml-auto pl-16 md:hidden'>
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
                <Menu.Trigger className='md:hidden' aria-label='Open Menu'>
                    <Avatar alt='Diqi Al-Haqqi' src='https://github.com/dq-alhq.png' />
                </Menu.Trigger>
                <Menu.Content placement='right bottom' className='sm:min-w-(--trigger-width)'>
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
