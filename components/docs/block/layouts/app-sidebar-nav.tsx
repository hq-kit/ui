'use client'

import {
    IconCommand,
    IconComputer,
    IconGauge,
    IconLogOut,
    IconMoon,
    IconSettings,
    IconSun
} from 'hq-icons'
import { useTheme } from 'next-themes'

import { Avatar, Breadcrumbs, Menu, Sidebar } from '@/components/ui'

export default function AppSidebarNav() {
    return (
        <Sidebar.Nav className='border-b'>
            <span className='flex items-center gap-x-4'>
                <Sidebar.Trigger />
                <Breadcrumbs className='hidden @md:flex'>
                    <Breadcrumbs.Item href='/blocks/sidebar/sidebar-01'>Dashboard</Breadcrumbs.Item>
                    <Breadcrumbs.Item>Newsletter</Breadcrumbs.Item>
                </Breadcrumbs>
            </span>
            <UserMenu />
        </Sidebar.Nav>
    )
}

function UserMenu() {
    const { resolvedTheme, setTheme } = useTheme()
    return (
        <Menu>
            <Menu.Trigger className='ml-auto md:hidden' aria-label='Open Menu'>
                <Avatar alt='DQ Al-Haqqi' src='https://github.com/dq-alhq.png' />
            </Menu.Trigger>
            <Menu.Content placement='bottom' className='sm:min-w-64'>
                <Menu.Header>
                    <span className='block'>DQ Al-Haqqi</span>
                    <span className='text-muted-fg font-normal'>@dq-alhq</span>
                </Menu.Header>
                <Menu.Item href='#dashboard'>
                    <IconGauge />
                    <Menu.Label>Dashboard</Menu.Label>
                </Menu.Item>
                <Menu.Item href='#settings'>
                    <IconSettings />
                    <Menu.Label>Settings</Menu.Label>
                </Menu.Item>
                <Menu.Separator />
                <Menu.Item>
                    <IconCommand />
                    <Menu.Label>Command Menu</Menu.Label>
                </Menu.Item>
                <Menu.Submenu>
                    <Menu.Item>
                        {resolvedTheme === 'light' ? (
                            <IconSun />
                        ) : resolvedTheme === 'dark' ? (
                            <IconMoon />
                        ) : (
                            <IconComputer />
                        )}
                        <Menu.Label>Switch theme</Menu.Label>
                    </Menu.Item>
                    <Menu.Content>
                        <Menu.Item onAction={() => setTheme('system')}>
                            <IconComputer /> System
                        </Menu.Item>
                        <Menu.Item onAction={() => setTheme('dark')}>
                            <IconMoon /> Dark
                        </Menu.Item>
                        <Menu.Item onAction={() => setTheme('light')}>
                            <IconSun /> Light
                        </Menu.Item>
                    </Menu.Content>
                </Menu.Submenu>
                <Menu.Separator />
                <Menu.Item href='#contact-s'>
                    <Menu.Label>Contact Support</Menu.Label>
                </Menu.Item>
                <Menu.Separator />
                <Menu.Item href='#logout'>
                    <IconLogOut />
                    <Menu.Label>Log out</Menu.Label>
                </Menu.Item>
            </Menu.Content>
        </Menu>
    )
}
