'use client'

import {
    IconAlignCenter,
    IconAlignLeft,
    IconAlignRight,
    IconBold,
    IconCamera,
    IconCameraOff,
    IconEye,
    IconImage,
    IconImageOff,
    IconItalic,
    IconLink,
    IconLinkOff,
    IconPencil,
    IconUnderline
} from 'hq-icons'

import { Toolbar } from '@/components/ui'

export default function ToolbarVariantsDemo() {
    return (
        <Toolbar aria-label='Toolbars'>
            <Toolbar.Group icon variant='solid' aria-label='Text Formatting Options'>
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
            <Toolbar.Group icon variant='ghost' aria-label='Objects'>
                <Toolbar.Item aria-label='Image'>
                    {({ isSelected }) => (isSelected ? <IconImage /> : <IconImageOff />)}
                </Toolbar.Item>
                <Toolbar.Item aria-label='Link'>
                    {({ isSelected }) => (isSelected ? <IconLink /> : <IconLinkOff />)}
                </Toolbar.Item>
                <Toolbar.Item aria-label='Camera'>
                    {({ isSelected }) => (isSelected ? <IconCamera /> : <IconCameraOff />)}
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
