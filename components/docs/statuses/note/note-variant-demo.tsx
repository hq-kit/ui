'use client'

import React from 'react'

import { type Key } from 'react-aria-components'

import { Note, Select } from '@/components/ui'

const variants = ['primary', 'secondary', 'warning', 'danger', 'info', 'success', 'outline'].map(
    (n) => ({
        name: n,
        value: n
    })
)

export default function NoteVariantDemo() {
    const [selected, setSelected] = React.useState<Key>('primary')
    return (
        <div className='space-y-6'>
            <Select
                aria-label='Variant'
                placeholder='Choose a variant'
                selectedKey={selected}
                onSelectionChange={setSelected}
                items={variants}
            >
                {(item) => <Select.Item id={item.name}>{item.name}</Select.Item>}
            </Select>
            <Note
                variant={
                    selected as
                        | 'primary'
                        | 'secondary'
                        | 'warning'
                        | 'danger'
                        | 'success'
                        | 'info'
                        | 'outline'
                }
            >
                {selected} alert! Change a few things up and try submitting again.
            </Note>
        </div>
    )
}
