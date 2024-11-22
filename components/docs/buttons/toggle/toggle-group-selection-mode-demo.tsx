'use client'

import { Toggle } from '@/components/ui'

export default function ToggleGroupSelectionModeDemo() {
    return (
        <Toggle.Group defaultSelectedKeys={['center']} selectionMode='single'>
            <Toggle id='left'>Left</Toggle>
            <Toggle id='center'>Center</Toggle>
            <Toggle id='right'>Right</Toggle>
        </Toggle.Group>
    )
}
