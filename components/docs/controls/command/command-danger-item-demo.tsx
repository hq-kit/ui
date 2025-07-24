'use client'

import { Command } from '@/components/ui'

export default function CommandDestructiveItemDemo() {
    return (
        <Command>
            <Command.Item>System Shutdown</Command.Item>
            <Command.Item isDestructive>Format Disk</Command.Item>
            <Command.Item>Restart Service</Command.Item>
            <Command.Item>Empty Trash</Command.Item>
            <Command.Item>Overwrite File</Command.Item>
            <Command.Item isDestructive>Reset Factory Settings</Command.Item>
            <Command.Item>Disconnect Network</Command.Item>
        </Command>
    )
}
