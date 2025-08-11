'use client'

import { IconPower } from '@tabler/icons-react'
import { Toggle } from '@/components/ui'

export default function ToggleDisabledDemo() {
    return (
        <Toggle icon isDisabled>
            <IconPower />
        </Toggle>
    )
}
