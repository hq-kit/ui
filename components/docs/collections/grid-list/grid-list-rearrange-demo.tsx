'use client'

import { GridList, useDND, useList } from '@/components/ui'

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

export default function GridListRearrangeDemo() {
    const list = useList({ initialItems: items })
    const { dragAndDropHooks } = useDND({ list, operation: 'move' })

    return (
        <GridList
            aria-label='Linux Distros'
            selectionMode='multiple'
            items={list.items}
            dragAndDropHooks={dragAndDropHooks}
        >
            {(item) => (
                <GridList.Item key={item.id} textValue={item.name}>
                    {item.name}
                </GridList.Item>
            )}
        </GridList>
    )
}
