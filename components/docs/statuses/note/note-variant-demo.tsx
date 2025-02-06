'use client'

import React from 'react'

import { type Key } from 'react-aria-components'

import { Note, NoteProps, Select } from '@/components/ui'

const notes = ['primary', 'secondary', 'warning', 'danger', 'success','dark'].map((n) => ({
    name: n,
    value: n
}))

export default function NoteVariantDemo() {
    const [selected, setSelected] = React.useState<Key>('primary')
    return (
        <>
            <div className='absolute top-4 left-4 inline-flex min-w-32 flex-col gap-1'>
                <Select aria-label='Variant'
                    className='[&_button]:h-9'
                    selectedKey={selected}
                    onSelectionChange={setSelected}
                    placeholder='Choose a variant'
                    items={notes}
                >
                    {(item) => (
                        <Select.Item id={item.name} textValue={item.name}>
                            {item.name}
                        </Select.Item>
                    )}
                </Select>
            </div>
            <div className='max-w-md mt-8'>
                <Note variant={selected as NoteProps['variant']}>
                    We hook you up with top-tier migration services in our startup plan. Wanna roll
                    with it? Hit us up here.
                </Note>
            </div>
        </>
    )
}
