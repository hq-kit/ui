'use client'

import React from 'react'

import { type Key } from 'react-aria-components'

import { Note, NoteProps, Select } from '@/components/ui'

const notes = ['info', 'primary', 'secondary', 'warning', 'danger', 'success'].map((n) => ({
    name: n,
    value: n
}))

export default function NoteIntentDemo() {
    const [selected, setSelected] = React.useState<Key>('primary')
    return (
        <>
            <div className='absolute left-4 top-4 inline-flex min-w-32 flex-col gap-1'>
                <Select
                    className='[&_button]:h-9'
                    selectedKey={selected}
                    onSelectionChange={setSelected}
                    placeholder='Choose an intent'
                    items={notes}
                >
                    {(item) => (
                        <Select.Item id={item.name} textValue={item.name}>
                            {item.name}
                        </Select.Item>
                    )}
                </Select>
            </div>
            <div className='max-w-md'>
                <Note variant={selected as NoteProps['variant']}>
                    We hook you up with top-tier migration services in our startup plan. Wanna roll
                    with it? Hit us up here.
                </Note>
            </div>
        </>
    )
}
