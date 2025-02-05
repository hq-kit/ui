'use client'

import { Menu } from '@/components/ui'

export default function MenuDisabledDemo() {
    return (
        <Menu>
            <Menu.Trigger>Open</Menu.Trigger>
            <Menu.Content className='min-w-48' placement='bottom'>
                <Menu.Item id='view'>
                    <Menu.Label>View</Menu.Label>
                </Menu.Item>
                <Menu.Item id='edit'>
                    <Menu.Label>Edit</Menu.Label>
                </Menu.Item>
                <Menu.Item id='gsu' isDisabled>
                    <Menu.Label>Generate Short URL</Menu.Label>
                </Menu.Item>
            </Menu.Content>
        </Menu>
    )
}
