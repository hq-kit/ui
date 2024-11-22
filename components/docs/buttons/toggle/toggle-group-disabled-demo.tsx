'use client'

import { Toggle } from '@/components/ui'

export default function ToggleGroupDisabledDemo() {
    return (
        <Toggle.Group isDisabled>
            <Toggle id='left'>Left</Toggle>
            <Toggle id='center'>Center</Toggle>
            <Toggle id='right'>Right</Toggle>
        </Toggle.Group>
    )
}
