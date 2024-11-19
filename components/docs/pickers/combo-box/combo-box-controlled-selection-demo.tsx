'use client'

import React from 'react'

import type { Key } from 'react-aria-components'

import { ComboBox, Description } from '@/components/ui'

export default function ComboBoxControlledSelectionDemo() {
    const [country, setCountry] = React.useState<Key | null>(null)
    return (
        <>
            <ComboBox
                label='Country'
                placeholder='Country'
                onSelectionChange={setCountry}
                selectedKey={country}
                items={countries}
            >
                {(item) => <ComboBox.Item id={item.id}>{item.name}</ComboBox.Item>}
            </ComboBox>

            <Description className='mt-2 block [&>strong]:text-foreground text-muted-foreground'>
                You have selected: <strong>{country}</strong>
            </Description>
        </>
    )
}

const countries = [
    { id: 1, name: 'Argentina' },
    { id: 2, name: 'Australia' },
    { id: 3, name: 'Austria' },
    { id: 4, name: 'Belgium' },
    { id: 5, name: 'Brazil' },
    { id: 6, name: 'Canada' },
    { id: 7, name: 'China' },
    { id: 8, name: 'Denmark' },
    { id: 9, name: 'France' },
    { id: 10, name: 'Germany' },
    { id: 11, name: 'India' },
    { id: 12, name: 'Italy' },
    { id: 13, name: 'Japan' },
    { id: 14, name: 'Mexico' },
    { id: 15, name: 'Netherlands' },
    { id: 16, name: 'New Zealand' },
    { id: 17, name: 'Norway' },
    { id: 18, name: 'South Korea' },
    { id: 19, name: 'Sweden' },
    { id: 20, name: 'United Kingdom' },
    { id: 21, name: 'United States' }
]
