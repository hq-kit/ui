'use client'

import React from 'react'

import { Collapsible } from '@/components/ui'

export default function CollapsibleControlledDemo() {
    const [expanded, setExpanded] = React.useState(false)

    return (
        <div>
            The Collapsible is{' '}
            <strong className='text-info'>{expanded ? 'expanded' : 'collapsed'}</strong>.
            <Collapsible isExpanded={expanded} onExpandedChange={setExpanded}>
                <Collapsible.Trigger>What is your return policy?</Collapsible.Trigger>
                <Collapsible.Content>
                    <p>
                        You can return any item within 30 days of purchase, provided it is in its
                        original condition with proof of purchase.
                    </p>
                </Collapsible.Content>
            </Collapsible>
        </div>
    )
}
