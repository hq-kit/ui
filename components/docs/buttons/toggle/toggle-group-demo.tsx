'use client'

import { Toggle } from '@/components/ui'
import { IconHeading, IconPilcrow } from '@tabler/icons-react'

export default function ToggleGroupDemo() {
    return (
        <Toggle.Group>
            <Toggle>
                <IconPilcrow />
                Paragraph
            </Toggle>
            <Toggle>
                <IconHeading />
                Heading
            </Toggle>
        </Toggle.Group>
    )
}
