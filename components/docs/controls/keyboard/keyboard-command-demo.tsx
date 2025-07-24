'use client'

import { Command, Keyboard } from '@/components/ui'
import { IconFolderTree, IconPanelLeftClose, IconSettings, IconX } from 'hq-icons'

export default function KeyboardCommandDemo() {
    return (
        <Command>
            <Command.Item textValue='explorer'>
                <IconFolderTree />
                <Command.Label>Explorer</Command.Label>
                <Keyboard keys={['mod', 'shift', 'e']} />
            </Command.Item>
            <Command.Item textValue='hide sidebar'>
                <IconPanelLeftClose />
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
