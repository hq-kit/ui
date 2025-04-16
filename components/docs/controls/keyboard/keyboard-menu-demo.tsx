'use client'

import { Keyboard, Menu } from '@/components/ui'

export default function KeyboardMenuDemo() {
    return (
        <Menu>
            <Menu.Trigger>Options</Menu.Trigger>
            <Menu.Content>
                <Menu.Item>
                    <Menu.Label>Copy</Menu.Label>
                    <Keyboard keys={['mod', 'c']} />
                </Menu.Item>
                <Menu.Item>
                    <Menu.Label>Cut</Menu.Label>
                    <Keyboard keys={['mod', 'x']} />
                </Menu.Item>
                <Menu.Item>
                    <Menu.Label>Paste</Menu.Label>
                    <Keyboard keys={['mod', 'v']} />
                </Menu.Item>
            </Menu.Content>
        </Menu>
    )
}
