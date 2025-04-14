'use client'

import { IconPower } from 'hq-icons'

import { Toggle } from '@/components/ui'

export default function ToggleDisabledDemo() {
    return (
        <Toggle icon isDisabled>
            <IconPower />
        </Toggle>
    )
}
