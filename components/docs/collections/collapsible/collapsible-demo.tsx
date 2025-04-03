'use client'

import { Collapsible } from '@/components/ui'

export default function CollapsibleDemo() {
    return (
        <Collapsible>
            <Collapsible.Trigger>System Requirements</Collapsible.Trigger>
            <Collapsible.Content>Details about system requirements here.</Collapsible.Content>
        </Collapsible>
    )
}
