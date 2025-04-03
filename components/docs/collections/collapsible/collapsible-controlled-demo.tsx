'use client'

import React from 'react'

import { Collapsible } from '@/components/ui'

export default function CollapsibleControlledDemo() {
    const [expanded, setExpanded] = React.useState(false)

    return (
        <div className='space-y-6'>
            <Collapsible isExpanded={expanded} onExpandedChange={setExpanded}>
                <Collapsible.Trigger>System Requirements</Collapsible.Trigger>
                <Collapsible.Content>Details about system requirements here.</Collapsible.Content>
            </Collapsible>
            <code>expanded: {JSON.stringify(expanded)}</code>
        </div>
    )
}
