'use client'

import type { Key, Selection } from 'react-aria-components'
import { IconCheckbox, IconForms } from '@tabler/icons-react'
import { useState } from 'react'
import { ComboBox, Toggle } from '@/components/ui'

const items = [
    { id: 1, name: 'Ubuntu' },
    { id: 2, name: 'Debian' },
    { id: 3, name: 'Fedora' },
    { id: 4, name: 'Arch' },
    { id: 5, name: 'CentOS' },
    { id: 6, name: 'Gentoo' },
    { id: 7, name: 'OpenSuse' },
    { id: 8, name: 'Redhat' },
    { id: 9, name: 'FreeBSD' },
    { id: 10, name: 'NetBSD' }
]

export default function ComboBoxControlledDemo() {
    const [mode, setMode] = useState<Selection>(new Set(['selection']))
    return (
        <div className='space-y-4'>
            <Toggle.Group onSelectionChange={setMode} selectedKeys={mode} selectionMode='single'>
                <Toggle id='selection'>
                    <IconCheckbox />
                    Selection
                </Toggle>
                <Toggle id='input'>
                    <IconForms />
                    Input
                </Toggle>
            </Toggle.Group>
            {Array.from(mode).includes('selection') ? <ComboBoxControlledSelected /> : <ComboBoxControlledInput />}
        </div>
    )
}

const ComboBoxControlledInput = () => {
    const [value, setValue] = useState<string>('')
    return (
        <div className='grid space-y-4'>
            <ComboBox inputValue={value} items={items} label='Linux Distro' onInputChange={setValue}>
                {(item) => (
                    <ComboBox.Item id={item.id} textValue={item.name}>
                        {item.name}
                    </ComboBox.Item>
                )}
            </ComboBox>
            <code>value: {JSON.stringify(value)}</code>
        </div>
    )
}

const ComboBoxControlledSelected = () => {
    const [selected, setSelected] = useState<Key | null>(null)
    return (
        <div className='grid space-y-4'>
            <ComboBox items={items} label='Linux Distro' onSelectionChange={setSelected} selectedKey={selected}>
                {(item) => <ComboBox.Item id={item.id}>{item.name}</ComboBox.Item>}
            </ComboBox>
            <code>selected: {JSON.stringify(selected)}</code>
        </div>
    )
}
