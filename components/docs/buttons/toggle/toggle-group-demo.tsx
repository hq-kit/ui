'use client'

import { Toggle } from '@/components/ui'
import { IconHeading, IconParagraph } from 'hq-icons'

export default function ToggleGroupDemo() {
    return (
        <Toggle.Group>
            <Toggle>
                <IconParagraph />
                Paragraph
            </Toggle>
            <Toggle>
                <IconHeading />
                Heading
            </Toggle>
        </Toggle.Group>
    )
}
