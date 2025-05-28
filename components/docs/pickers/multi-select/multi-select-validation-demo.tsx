'use client'

import { type FormEvent, useState } from 'react'

import type { Selection } from 'react-aria-components'

import { Button, Form, MultiSelect } from '@/components/ui'

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

export default function MultiSelectDemo() {
    const [selected, setSelected] = useState<Selection>(new Set([]))
    const onSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        alert(Array.from(selected))
    }
    return (
        <Form className='space-y-4' onSubmit={onSubmit}>
            <MultiSelect
                errorMessage={Array.from(selected).length < 2 ? 'Select at least 2 distros' : undefined}
                label='Linux Distro'
                selectedKeys={selected}
                onSelectionChange={setSelected}
                items={items}
            >
                {(item) => {
                    return <MultiSelect.Item textValue={item.name}>{item.name}</MultiSelect.Item>
                }}
            </MultiSelect>
            <Button type='submit'>Submit</Button>
        </Form>
    )
}
