'use client'

import {
    IconAlignCenter,
    IconAlignJustified,
    IconAlignLeft,
    IconCamera,
    IconCircleArrowLeft,
    IconCircleArrowRight,
    IconDotsCircleHorizontal,
    IconLayoutGrid,
    IconLink,
    IconPencil,
    IconPhoto,
    IconPointer,
    IconScissors
} from '@tabler/icons-react'
import { Menu, Toggle, Toolbar } from '@/components/ui'

export default function ToolbarOrientationDemo() {
    return (
        <Toolbar aria-label='Toolbox' orientation='vertical'>
            <Toolbar.Group aria-label='Toolbox' icon>
                <Toolbar.Item aria-label='Cursor'>
                    <IconPointer />
                </Toolbar.Item>
                <Toolbar.Item aria-label='Scissors'>
                    <IconScissors />
                </Toolbar.Item>
                <Toolbar.Item aria-label='Pencil'>
                    <IconPencil />
                </Toolbar.Item>
            </Toolbar.Group>
            <Toolbar.Separator />
            <Toolbar.Group aria-label='Gallery' icon>
                <Toolbar.Item aria-label='Camera'>
                    <IconCamera />
                </Toolbar.Item>
                <Toolbar.Item aria-label='Gallery'>
                    <IconPhoto />
                </Toolbar.Item>
            </Toolbar.Group>
            <Toolbar.Separator />
            <Toolbar.Group aria-label='Alignment' icon>
                <Toggle aria-label='Align Left'>
                    <IconAlignLeft />
                </Toggle>
                <Toolbar.Item aria-label='Align Center'>
                    <IconAlignCenter />
                </Toolbar.Item>
                <Toolbar.Item aria-label='Align Justify'>
                    <IconAlignJustified />
                </Toolbar.Item>
            </Toolbar.Group>
            <Toolbar.Separator />
            <Toolbar.Group icon>
                <Menu>
                    <Toolbar.Item aria-label='Other options'>
                        <IconDotsCircleHorizontal />
                    </Toolbar.Item>
                    <Menu.Content placement='right'>
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
        </Toolbar>
    )
}
