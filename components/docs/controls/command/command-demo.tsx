'use client'

import { IconHome, IconLayoutDashboard, IconPackage, IconPalette, IconShapes } from 'hq-icons'

import { Command } from '@/components/ui'

export default function CommandDemo() {
    return (
        <Command>
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
    )
}
