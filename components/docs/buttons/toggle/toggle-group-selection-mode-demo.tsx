'use client'

import {
    IconAlignCenter,
    IconAlignJustified,
    IconAlignLeft,
    IconAlignRight,
    IconBold,
    IconItalic,
    IconStrikethrough,
    IconUnderline
} from '@tabler/icons-react'
import { Description, Toggle } from '@/components/ui'

export default function ToggleGroupSelectionModeDemo() {
    return (
        <div className='flex flex-col gap-2'>
            <Description>Single</Description>
            <Toggle.Group defaultSelectedKeys={['center']} selectionMode='single'>
                <Toggle id='left'>
                    <IconAlignLeft />
                </Toggle>
                <Toggle id='center'>
                    <IconAlignCenter />
                </Toggle>
                <Toggle id='right'>
                    <IconAlignRight />
                </Toggle>
                <Toggle id='justify'>
                    <IconAlignJustified />
                </Toggle>
            </Toggle.Group>
            <Description>Multiple</Description>
            <Toggle.Group defaultSelectedKeys={['bold']} selectionMode='multiple'>
                <Toggle id='bold'>
                    <IconBold />
                </Toggle>
                <Toggle id='italic'>
                    <IconItalic />
                </Toggle>
                <Toggle id='underline'>
                    <IconUnderline />
                </Toggle>
                <Toggle id='strike'>
                    <IconStrikethrough />
                </Toggle>
            </Toggle.Group>
        </div>
    )
}
