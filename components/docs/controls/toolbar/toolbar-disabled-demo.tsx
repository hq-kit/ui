'use client'

import { Toggle, Toolbar } from '@/components/ui'
import {
    IconAlignJustify,
    IconAlignRight,
    IconCamera,
    IconImage,
    IconPencil,
    IconPencilRuler,
    IconPointer
} from 'hq-icons'

export default function ToolbarDisabledDemo() {
    return (
        <Toolbar aria-label='Toolbox'>
            <Toolbar.Group icon aria-label='Toolbox'>
                <Toggle isDisabled aria-label='Cursor'>
                    <IconPointer />
                </Toggle>
                <Toggle aria-label='Pencil Box'>
                    <IconPencil />
                </Toggle>
                <Toggle aria-label='Pencil Box'>
                    <IconPencilRuler />
                </Toggle>
            </Toolbar.Group>
            <Toolbar.Separator />
            <Toolbar.Group icon isDisabled aria-label='Gallery'>
                <Toolbar.Item aria-label='Camera'>
                    <IconCamera />
                </Toolbar.Item>
                <Toolbar.Item aria-label='Gallery'>
                    <IconImage />
                </Toolbar.Item>
            </Toolbar.Group>
            <Toolbar.Separator />
            <Toolbar.Group icon aria-label='Alignment'>
                <Toggle aria-label='Align Right'>
                    <IconAlignRight />
                </Toggle>
                <Toggle aria-label='Align Justify'>
                    <IconAlignJustify />
                </Toggle>
            </Toolbar.Group>
        </Toolbar>
    )
}
