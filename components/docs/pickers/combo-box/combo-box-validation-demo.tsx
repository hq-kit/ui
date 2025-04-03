'use client'

import React from 'react'

import { Key } from 'react-aria-components'

import { Button, ComboBox, Form } from '@/components/ui'

const items = [
    { id: 1, name: 'Ubuntu' },
    { id: 2, name: 'Debian' },
    { id: 3, name: 'Fedora' },
    { id: 4, name: 'Arch' },
    { id: 5, name: 'Redhat' }
]

export default function ComboBoxValidationDemo() {
    const [value, setValue] = React.useState<Key | null>('')
    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        alert(value)
    }
    return (
        <Form onSubmit={onSubmit} className='space-y-4'>
            <ComboBox
                label='Linux Distro'
                items={items}
                selectedKey={value}
                onSelectionChange={setValue}
                isRequired
            >
                {(item) => <ComboBox.Item id={item.id}>{item.name}</ComboBox.Item>}
            </ComboBox>
            <Button type='submit'>Submit</Button>
        </Form>
    )
}
