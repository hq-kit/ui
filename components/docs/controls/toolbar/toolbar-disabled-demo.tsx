'use client'

import { Toggle, Toolbar } from '@/components/ui'
import {
    IconAlignJustified,
    IconAlignRight,
    IconCamera,
    IconPencil,
    IconPhoto,
    IconPointer,
    IconScissors
} from '@tabler/icons-react'

export default function ToolbarDisabledDemo() {
    return (
        <Toolbar aria-label='Toolbox'>
            <Toolbar.Group icon aria-label='Toolbox'>
                <Toggle isDisabled aria-label='Cursor'>
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
            <Toolbar.Group icon isDisabled aria-label='Gallery'>
                <Toolbar.Item aria-label='Camera'>
                    <IconCamera />
                </Toolbar.Item>
                <Toolbar.Item aria-label='Gallery'>
                    <IconPhoto />
                </Toolbar.Item>
            </Toolbar.Group>
            <Toolbar.Separator />
            <Toolbar.Group icon aria-label='Alignment'>
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
