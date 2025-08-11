'use client'

import {
    IconAlignJustified,
    IconAlignRight,
    IconCamera,
    IconPencil,
    IconPhoto,
    IconPointer,
    IconScissors
} from '@tabler/icons-react'
import { Toggle, Toolbar } from '@/components/ui'

export default function ToolbarDisabledDemo() {
    return (
        <Toolbar aria-label='Toolbox'>
            <Toolbar.Group aria-label='Toolbox' icon>
                <Toggle aria-label='Cursor' isDisabled>
                    <IconPointer />
                </Toggle>
                <Toggle aria-label='Scissors'>
                    <IconScissors />
                </Toggle>
                <Toggle aria-label='Pencil'>
                    <IconPencil />
                </Toggle>
            </Toolbar.Group>
            <Toolbar.Separator />
            <Toolbar.Group aria-label='Gallery' icon isDisabled>
                <Toolbar.Item aria-label='Camera'>
                    <IconCamera />
                </Toolbar.Item>
                <Toolbar.Item aria-label='Gallery'>
                    <IconPhoto />
                </Toolbar.Item>
            </Toolbar.Group>
            <Toolbar.Separator />
            <Toolbar.Group aria-label='Alignment' icon>
                <Toggle aria-label='Align Right'>
                    <IconAlignRight />
                </Toggle>
                <Toggle aria-label='Align Justify'>
                    <IconAlignJustified />
                </Toggle>
            </Toolbar.Group>
        </Toolbar>
    )
}
