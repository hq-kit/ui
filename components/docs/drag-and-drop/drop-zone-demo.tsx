'use client'

import { DropZone, Label } from '@/components/ui'
import { useState } from 'react'

export default function DropZoneDemo() {
    const [dropped, setDropped] = useState(false)

    return (
        <DropZone onDrop={() => setDropped(true)}>
            <Label>{dropped ? 'Item dropped!' : 'Drop an Item here'}</Label>
        </DropZone>
    )
}
