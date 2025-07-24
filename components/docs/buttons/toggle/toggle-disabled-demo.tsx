'use client'

import { Toggle } from '@/components/ui'
import { IconPower } from 'hq-icons'

export default function ToggleDisabledDemo() {
    return (
        <Toggle icon isDisabled>
            <IconPower />
        </Toggle>
    )
}
