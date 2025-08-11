'use client'

import { IconHeading, IconPilcrow } from '@tabler/icons-react'
import { Toggle } from '@/components/ui'

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
