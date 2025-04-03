'use client'

import { GridList } from '@/components/ui'

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

export default function GridListDemo() {
    return (
        <GridList selectionMode='single' items={items} aria-label='Linux Distros'>
            {(item) => <GridList.Item id={item.id}>{item.name}</GridList.Item>}
        </GridList>
    )
}
