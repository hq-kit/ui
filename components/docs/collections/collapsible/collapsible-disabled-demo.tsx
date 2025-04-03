'use client'

import { Collapsible } from '@/components/ui'

export default function CollapsibleDisabledDemo() {
    return (
        <Collapsible isDisabled>
            <Collapsible.Trigger>System Requirements</Collapsible.Trigger>
            <Collapsible.Content>Details about system requirements here.</Collapsible.Content>
        </Collapsible>
    )
}
