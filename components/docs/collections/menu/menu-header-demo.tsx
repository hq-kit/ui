'use client'

import { IconCircleUser, IconLogOut, IconSettings } from 'hq-icons'

import { Avatar, Menu } from '@/components/ui'

export default function MenuHeaderDemo() {
    return (
        <>
            <Menu>
                <Menu.Trigger>
                    <Avatar className='size-10' src='https://github.com/dq-alhq.png' />
                </Menu.Trigger>
                <Menu.Content placement='bottom' className='min-w-64'>
                    <Menu.Header>
                        <span className='block'>DQ Al-Haqqi</span>
                        <span className='text-muted-fg font-normal'>@dq-alhq</span>
                    </Menu.Header>
                    <Menu.Item>
                        <IconCircleUser />
                        Profile
                    </Menu.Item>
                    <Menu.Item>
                        <IconSettings />
                        Settings
                    </Menu.Item>
                    <Menu.Separator />
                    <Menu.Item isDanger>
                        <IconLogOut />
                        Log out
                    </Menu.Item>
                </Menu.Content>
            </Menu>
        </>
    )
}
