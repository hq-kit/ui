'use client'

import { type FormEvent, useState } from 'react'

import type { Key } from 'react-aria-components'

import { Button, Form, Select } from '@/components/ui'

const items = [
    { id: 1, name: 'Ubuntu' },
    { id: 2, name: 'Debian' },
    { id: 3, name: 'Fedora' },
    { id: 4, name: 'Arch' },
    { id: 5, name: 'Redhat' }
]

export default function SelectValidationDemo() {
    const [value, setValue] = useState<Key>('')
    const onSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        alert(value)
    }
    return (
        <Form onSubmit={onSubmit} className='space-y-4'>
            <Select label='Linux Distro' items={items} selectedKey={value} onSelectionChange={setValue} isRequired>
                {(item) => <Select.Item id={item.id}>{item.name}</Select.Item>}
            </Select>
            <Button type='submit'>Submit</Button>
        </Form>
    )
}
