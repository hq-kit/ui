'use client'

import { useState } from 'react'

import { DropZone, Label } from '@/components/ui'

export default function DropZoneDemo() {
    const [dropped, setDropped] = useState(false)

    return (
        <DropZone onDrop={() => setDropped(true)}>
            <Label>{dropped ? 'Item dropped!' : 'Drop an Item here'}</Label>
        </DropZone>
    )
}
