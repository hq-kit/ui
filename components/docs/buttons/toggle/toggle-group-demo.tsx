'use client'

import { IconHeading, IconParagraph } from 'hq-icons'

import { Toggle } from '@/components/ui'

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
