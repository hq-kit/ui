'use client'

import { Toggle } from '@/components/ui'
import { IconAlignCenter, IconAlignLeft, IconAlignRight } from 'hq-icons'

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
