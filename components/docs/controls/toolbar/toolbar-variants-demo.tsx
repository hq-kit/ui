'use client'

import {
    IconAlignCenter,
    IconAlignLeft,
    IconAlignRight,
    IconBold,
    IconEye,
    IconItalic,
    IconPencil,
    IconUnderline
} from '@tabler/icons-react'
import { Toolbar } from '@/components/ui'

export default function ToolbarVariantsDemo() {
    return (
        <Toolbar aria-label='Toolbars'>
            <Toolbar.Group aria-label='Text Formatting Options' icon>
                <Toolbar.Item aria-label='Bold'>
                    <IconBold />
                </Toolbar.Item>
                <Toolbar.Item aria-label='Italic'>
                    <IconItalic />
                </Toolbar.Item>
                <Toolbar.Item aria-label='Underline'>
                    <IconUnderline />
                </Toolbar.Item>
            </Toolbar.Group>
            <Toolbar.Separator />
            <Toolbar.Group aria-label='Alignment' icon variant='outline'>
                <Toolbar.Item aria-label='Align Left'>
                    <IconAlignLeft />
                </Toolbar.Item>
                <Toolbar.Item aria-label='Align Center'>
                    <IconAlignCenter />
                </Toolbar.Item>
                <Toolbar.Item aria-label='Align Right'>
                    <IconAlignRight />
                </Toolbar.Item>
            </Toolbar.Group>
            <Toolbar.Separator />
            <Toolbar.Group aria-label='Mode' variant='outline'>
                <Toolbar.Item aria-label='View'>
                    <IconEye />
                    View
                </Toolbar.Item>
                <Toolbar.Item aria-label='Edit'>
                    <IconPencil />
                    Edit
                </Toolbar.Item>
            </Toolbar.Group>
        </Toolbar>
    )
}
