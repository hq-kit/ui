'use client'

import React from 'react'

import { IconHome, IconLayoutDashboard, IconPackage, IconPalette, IconShapes } from 'hq-icons'

import { Button, Command } from '@/components/ui'

export default function CommandTriggerByKeyboardDemo() {
    const [open, setOpen] = React.useState<boolean>(false)
    return (
        <>
            <Button variant='outline' onPress={() => setOpen(true)}>
                <Command.Shortcut keys={['meta', '/']} />
            </Button>
            <Command.Modal isOpen={open} onOpenChange={setOpen} shortcut={{ key: '/' }}>
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
            </Command.Modal>
        </>
    )
}
