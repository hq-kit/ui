'use client'

import { Collapsible } from '@/components/ui'

export default function CollapsibleDemo() {
    return (
        <Collapsible>
            <Collapsible.Trigger>What are the benefits of regular exercise?</Collapsible.Trigger>
            <Collapsible.Content>
                <p>
                    Regular exercise can improve your overall health, boost your mood, increase
                    energy levels, and help you maintain a healthy weight.
                </p>
            </Collapsible.Content>
        </Collapsible>
    )
}
