'use client'

import { Menu, Toggle, Toolbar } from '@/components/ui'
import {
    IconAlignCenter,
    IconAlignJustify,
    IconAlignLeft,
    IconCamera,
    IconCircleArrowLeft,
    IconCircleArrowRight,
    IconEllipsisVertical,
    IconImage,
    IconLayoutGrid,
    IconLink,
    IconPencil,
    IconPencilRuler,
    IconPointer
} from 'hq-icons'

export default function ToolbarOrientationDemo() {
    return (
        <Toolbar aria-label='Toolbox' orientation='vertical'>
            <Toolbar.Group icon aria-label='Toolbox'>
                <Toolbar.Item aria-label='Cursor'>
                    <IconPointer />
                </Toolbar.Item>
                <Toolbar.Item aria-label='Pencil Box'>
                    <IconPencil />
                </Toolbar.Item>
                <Toolbar.Item aria-label='Pencil Box'>
                    <IconPencilRuler />
                </Toolbar.Item>
            </Toolbar.Group>
            <Toolbar.Separator />
            <Toolbar.Group icon aria-label='Gallery'>
                <Toolbar.Item aria-label='Camera'>
                    <IconCamera />
                </Toolbar.Item>
                <Toolbar.Item aria-label='Gallery'>
                    <IconImage />
                </Toolbar.Item>
            </Toolbar.Group>
            <Toolbar.Separator />
            <Toolbar.Group icon aria-label='Alignment'>
                <Toggle aria-label='Align Left'>
                    <IconAlignLeft />
                </Toggle>
                <Toolbar.Item aria-label='Align Center'>
                    <IconAlignCenter />
                </Toolbar.Item>
                <Toolbar.Item aria-label='Align Justify'>
                    <IconAlignJustify />
                </Toolbar.Item>
            </Toolbar.Group>
            <Toolbar.Separator />
            <Toolbar.Group icon>
                <Menu>
                    <Toolbar.Item aria-label='Other options'>
                        <IconEllipsisVertical />
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
                            <IconImage />
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
