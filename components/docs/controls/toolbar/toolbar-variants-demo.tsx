'use client'

import { Toolbar } from '@/components/ui'
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

export default function ToolbarVariantsDemo() {
    return (
        <Toolbar aria-label='Toolbars'>
            <Toolbar.Group icon aria-label='Text Formatting Options'>
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
            <Toolbar.Group icon variant='outline' aria-label='Alignment'>
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
            <Toolbar.Group variant='outline' aria-label='Mode'>
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
