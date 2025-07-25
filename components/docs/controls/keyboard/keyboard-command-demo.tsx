'use client'

import { Command, Keyboard } from '@/components/ui'
import { IconFolder, IconLayoutSidebar, IconSettings, IconX } from '@tabler/icons-react'

export default function KeyboardCommandDemo() {
    return (
        <Command>
            <Command.Item textValue='explorer'>
                <IconFolder />
                <Command.Label>Explorer</Command.Label>
                <Keyboard keys={['mod', 'shift', 'e']} />
            </Command.Item>
            <Command.Item textValue='hide sidebar'>
                <IconLayoutSidebar />
                <Command.Label>Hide Sidebar</Command.Label>
                <Keyboard keys={['mod', 'b']} />
            </Command.Item>
            <Command.Item textValue='settings'>
                <IconSettings />
                <Command.Label>Settings</Command.Label>
                <Keyboard keys={['mod', ',']} />
            </Command.Item>
            <Command.Item textValue='quit'>
                <IconX />
                <Command.Label>Quit</Command.Label>
                <Keyboard keys={['alt', 'F4']} />
            </Command.Item>
        </Command>
    )
}
