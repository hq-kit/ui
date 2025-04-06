'use client'

import { IconHome, IconLayoutDashboard, IconPackage, IconPalette, IconShapes } from 'hq-icons'

import { Button, Command } from '@/components/ui'

export default function CommandTriggerByKeyboardDemo() {
    return (
        <>
            <Button
                variant='outline'
                onPress={() => alert('Do not press me!, press the keyboard shortcut')}
            >
                <Command.Shortcut>⌘ + /</Command.Shortcut>
            </Button>
            <Command shortcut={{ key: '/' }}>
                <Command.Item textValue='home'>
                    <IconHome />
                    <Command.Label>Home</Command.Label>
                </Command.Item>
                <Command.Item textValue='documenation'>
                    <IconPackage />
                    <Command.Label>Documentation</Command.Label>
                </Command.Item>
                <Command.Item textValue='blocks'>
                    <IconLayoutDashboard />
                    <Command.Label>Blocks</Command.Label>
                </Command.Item>
                <Command.Item textValue='icons'>
                    <IconShapes />
                    <Command.Label>Icons</Command.Label>
                </Command.Item>
                <Command.Item textValue='colors'>
                    <IconPalette />
                    <Command.Label>Colors</Command.Label>
                </Command.Item>
            </Command>
        </>
    )
}
