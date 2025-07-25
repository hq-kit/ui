'use client'

import { Button, Command } from '@/components/ui'
import { IconHome, IconLayoutDashboard, IconPackage, IconPalette } from '@tabler/icons-react'
import { useState } from 'react'

export default function CommandTriggerByKeyboardDemo() {
    const [open, setOpen] = useState<boolean>(false)
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
                <Command.Item textValue='colors'>
                    <IconPalette />
                    <Command.Label>Colors</Command.Label>
                </Command.Item>
            </Command.Modal>
        </>
    )
}
