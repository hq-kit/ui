'use client'

import React from 'react'

import { Command } from '@/components/ui'

export default function CommandDangerItemDemo() {
    return (
        <Command>
            <Command.Item>System Shutdown</Command.Item>
            <Command.Item isDanger>Format Disk</Command.Item>
            <Command.Item>Restart Service</Command.Item>
            <Command.Item>Empty Trash</Command.Item>
            <Command.Item>Overwrite File</Command.Item>
            <Command.Item isDanger>Reset Factory Settings</Command.Item>
            <Command.Item>Disconnect Network</Command.Item>
        </Command>
    )
}
