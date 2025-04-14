'use client'

import { GridList } from '@/components/ui'

const items = [
    { id: 1, name: 'Ubuntu' },
    { id: 2, name: 'Debian' },
    { id: 3, name: 'Fedora' },
    { id: 4, name: 'Arch' }
]
export default function GridListDisabledDemo() {
    return (
        <GridList disabledKeys={[1, 3]} items={items} aria-label='Linux Distros' selectionMode='multiple'>
            {(item) => <GridList.Item id={item.id}>{item.name}</GridList.Item>}
        </GridList>
    )
}
