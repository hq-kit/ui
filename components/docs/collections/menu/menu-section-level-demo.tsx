'use client'

import {
    IconAlignCenter,
    IconAlignLeft,
    IconAlignRight,
    IconBold,
    IconClipboard,
    IconCopy,
    IconItalic,
    IconScissors,
    IconUnderline
} from 'hq-icons'
import { useState } from 'react'
import type { Selection } from 'react-aria-components'

import { Menu } from '@/components/ui'

export default function MenuSectionLevelDemo() {
    const [style, setStyle] = useState<Selection>(new Set(['bold']))
    const [align, setAlign] = useState<Selection>(new Set(['left']))
    return (
        <Menu>
            <Menu.Trigger>Open</Menu.Trigger>
            <Menu.Content>
                <Menu.Section title='Actions'>
                    <Menu.Item textValue='Cut'>
                        <IconScissors />
                        <Menu.Label>Cut</Menu.Label>
                    </Menu.Item>
                    <Menu.Item textValue='Copy'>
                        <IconCopy />
                        <Menu.Label>Copy</Menu.Label>
                    </Menu.Item>
                    <Menu.Item textValue='Paste'>
                        <IconClipboard />
                        <Menu.Label>Paste</Menu.Label>
                    </Menu.Item>
                </Menu.Section>
                <Menu.Separator />
                <Menu.Section
                    selectionMode='multiple'
                    selectedKeys={style}
                    onSelectionChange={setStyle}
                    title='Text style'
                >
                    <Menu.Item id='bold' textValue='Bold'>
                        <IconBold />
                        <Menu.Label>Bold</Menu.Label>
                    </Menu.Item>
                    <Menu.Item id='italic' textValue='Italic'>
                        <IconItalic />
                        <Menu.Label>Italic</Menu.Label>
                    </Menu.Item>
                    <Menu.Item id='underline' textValue='Underline'>
                        <IconUnderline />
                        <Menu.Label>Underline</Menu.Label>
                    </Menu.Item>
                </Menu.Section>
                <Menu.Separator />
                <Menu.Section
                    selectionMode='single'
                    selectedKeys={align}
                    onSelectionChange={setAlign}
                    title='Text alignment'
                >
                    <Menu.Item id='left' textValue='Left'>
                        <IconAlignLeft />
                        <Menu.Label>Left</Menu.Label>
                    </Menu.Item>
                    <Menu.Item id='center' textValue='Cente'>
                        <IconAlignCenter />
                        <Menu.Label>Center</Menu.Label>
                    </Menu.Item>
                    <Menu.Item id='right' textValue='Right'>
                        <IconAlignRight />
                        <Menu.Label>Right</Menu.Label>
                    </Menu.Item>
                </Menu.Section>
            </Menu.Content>
        </Menu>
    )
}
