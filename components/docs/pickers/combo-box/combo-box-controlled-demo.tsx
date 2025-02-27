'use client'

import React from 'react'

import { ComboBox, Description } from '@/components/ui'

const sports = [
    { id: 1, name: 'Football' },
    { id: 2, name: 'Basketball' },
    { id: 3, name: 'Baseball' },
    { id: 4, name: 'Soccer' },
    { id: 5, name: 'Tennis' },
    { id: 6, name: 'Cricket' },
    { id: 7, name: 'Hockey' },
    { id: 8, name: 'Rugby' },
    { id: 9, name: 'Golf' }
]

export default function ComboBoxControlledDemo() {
    const [sport, setSport] = React.useState('')
    return (
        <>
            <ComboBox
                onInputChange={setSport}
                inputValue={sport}
                placeholder='Select a sports'
                label='Sports'
                items={sports}
            >
                {(item) => (
                    <ComboBox.Item id={item.id} textValue={item.name}>
                        {item.name}
                    </ComboBox.Item>
                )}
            </ComboBox>
            <Description className='[&>strong]:text-fg text-muted-fg mt-2 block'>
                You have selected: <strong>{sport}</strong>
            </Description>
        </>
    )
}
