'use client'

import { Autocomplete } from 'react-aria-components'
import { ListBox, SearchField } from '@/components/ui'
import { fuzzyMatch } from '@/lib/utils'

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

export default function AutocompleteListBoxDemo() {
    return (
        <Autocomplete filter={fuzzyMatch}>
            <SearchField className='mb-2' />
            <ListBox aria-label='Linux Distros' items={items} selectionMode='multiple'>
                {(item) => <ListBox.Item id={item.id}>{item.name}</ListBox.Item>}
            </ListBox>
        </Autocomplete>
    )
}
