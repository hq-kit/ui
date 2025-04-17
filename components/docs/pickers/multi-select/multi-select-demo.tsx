'use client'

import { MultiSelect } from '@/components/ui'

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
    return (
        <div className='grid gap-2 sm:grid-cols-3'>
            <MultiSelect label='Default' items={items}>
                {(item) => {
                    return <MultiSelect.Item textValue={item.name}>{item.name}</MultiSelect.Item>
                }}
            </MultiSelect>
            <MultiSelect label='Invalid' items={items} isInvalid>
                {(item) => {
                    return <MultiSelect.Item textValue={item.name}>{item.name}</MultiSelect.Item>
                }}
            </MultiSelect>
            <MultiSelect label='Disabled' items={items} isDisabled>
                {(item) => {
                    return <MultiSelect.Item textValue={item.name}>{item.name}</MultiSelect.Item>
                }}
            </MultiSelect>
        </div>
    )
}
