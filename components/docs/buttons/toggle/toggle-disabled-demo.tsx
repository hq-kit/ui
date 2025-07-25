'use client'

import { Toggle } from '@/components/ui'
import { IconPower } from '@tabler/icons-react'

export default function ToggleDisabledDemo() {
    return (
        <Toggle icon isDisabled>
            <IconPower />
        </Toggle>
    )
}
