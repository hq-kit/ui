'use client'

import React from 'react'

import { DropZone, Label } from '@/components/ui'

export default function DropZoneDemo() {
    const [dropped, setDropped] = React.useState(false)

    return (
        <DropZone onDrop={() => setDropped(true)}>
            <Label>{dropped ? 'Item dropped!' : 'Drop an Item here'}</Label>
        </DropZone>
    )
}
