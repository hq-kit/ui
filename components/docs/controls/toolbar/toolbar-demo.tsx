'use client'

import { Checkbox, Menu, Toolbar } from '@/components/ui'
import {
    IconAlignCenter,
    IconAlignJustified,
    IconAlignLeft,
    IconAlignRight,
    IconBold,
    IconChevronDown,
    IconCircleArrowLeft,
    IconCircleArrowRight,
    IconItalic,
    IconLayoutGrid,
    IconLink,
    IconPhoto,
    IconStrikethrough,
    IconUnderline
} from '@tabler/icons-react'

export default function ToolbarDemo() {
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
                <Toolbar.Item aria-label='Strikethrough'>
                    <IconStrikethrough />
                </Toolbar.Item>
            </Toolbar.Group>
            <Toolbar.Separator />
            <Toolbar.Group icon aria-label='Alignment'>
                <Toolbar.Item aria-label='Align Left'>
                    <IconAlignLeft />
                </Toolbar.Item>
                <Toolbar.Item aria-label='Align Center'>
                    <IconAlignCenter />
                </Toolbar.Item>
                <Toolbar.Item aria-label='Align Right'>
                    <IconAlignRight />
                </Toolbar.Item>
                <Toolbar.Item aria-label='Align Justify'>
                    <IconAlignJustified />
                </Toolbar.Item>
            </Toolbar.Group>
            <Toolbar.Separator />
            <Toolbar.Group>
                <Menu>
                    <Toolbar.Item aria-label='Other options'>
                        Options...
                        <IconChevronDown />
                    </Toolbar.Item>
                    <Menu.Content placement='bottom right'>
                        <Menu.Item>
                            <IconCircleArrowLeft />
                            Undo
                        </Menu.Item>
                        <Menu.Item>
                            <IconCircleArrowRight />
                            Redo
                        </Menu.Item>
                        <Menu.Item>
                            <IconLink />
                            Insert Link
                        </Menu.Item>
                        <Menu.Item>
                            <IconPhoto />
                            Insert Image
                        </Menu.Item>
                        <Menu.Item>
                            <IconLayoutGrid />
                            Insert Grid
                        </Menu.Item>
                    </Menu.Content>
                </Menu>
            </Toolbar.Group>
            <Checkbox>Spell Check</Checkbox>
        </Toolbar>
    )
}
