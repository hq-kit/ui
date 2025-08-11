'use client'

import type { Key } from 'react-aria-components'
import { type FormEvent, useState } from 'react'
import { Button, ComboBox, Form } from '@/components/ui'

const items = [
    { id: 1, name: 'Ubuntu' },
    { id: 2, name: 'Debian' },
    { id: 3, name: 'Fedora' },
    { id: 4, name: 'Arch' },
    { id: 5, name: 'Redhat' }
]

export default function ComboBoxValidationDemo() {
    const [value, setValue] = useState<Key | null>('')
    const onSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        alert(value)
    }
    return (
        <Form className='space-y-4' onSubmit={onSubmit}>
            <ComboBox isRequired items={items} label='Linux Distro' onSelectionChange={setValue} selectedKey={value}>
                {(item) => <ComboBox.Item id={item.id}>{item.name}</ComboBox.Item>}
            </ComboBox>
            <Button type='submit'>Submit</Button>
        </Form>
    )
}
