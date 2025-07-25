'use client'

import { Toggle } from '@/components/ui'
import { IconAlignCenter, IconAlignLeft, IconAlignRight } from '@tabler/icons-react'

export default function ToggleGroupDisabledDemo() {
    return (
        <Toggle.Group icon isDisabled>
            <Toggle id='left'>
                <IconAlignLeft />
            </Toggle>
            <Toggle id='center'>
                <IconAlignCenter />
            </Toggle>
            <Toggle id='right'>
                <IconAlignRight />
            </Toggle>
        </Toggle.Group>
    )
}
