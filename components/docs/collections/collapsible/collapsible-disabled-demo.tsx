'use client'

import { Collapsible } from '@/components/ui'

export default function CollapsibleDisabledDemo() {
    return (
        <Collapsible isDisabled>
            <Collapsible.Trigger>What is your return policy?</Collapsible.Trigger>
            <Collapsible.Content>
                <p>
                    You can return any item within 30 days of purchase, provided it is in its
                    original condition with proof of purchase.
                </p>
            </Collapsible.Content>
        </Collapsible>
    )
}
