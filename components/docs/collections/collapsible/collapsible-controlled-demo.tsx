'use client'

import { useState } from 'react'

import { Collapsible } from '@/components/ui'

export default function CollapsibleControlledDemo() {
    const [expanded, setExpanded] = useState(false)

    return (
        <div className='space-y-6'>
            <Collapsible isExpanded={expanded} onExpandedChange={setExpanded}>
                <Collapsible.Trigger>System Requirements</Collapsible.Trigger>
                <Collapsible.Content>Details about system requirements here.</Collapsible.Content>
            </Collapsible>
            <code>{JSON.stringify({ expanded }, null, 2)}</code>
        </div>
    )
}
