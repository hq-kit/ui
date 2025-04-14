'use client'

import { IconAlignCenter, IconAlignLeft, IconAlignRight } from 'hq-icons'

import { Toggle } from '@/components/ui'

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
