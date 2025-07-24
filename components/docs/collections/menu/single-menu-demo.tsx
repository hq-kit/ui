'use client'

import { Menu } from '@/components/ui'
import type { Placement } from '@react-types/overlays'
import { useState } from 'react'
import type { Selection } from 'react-aria-components'

const placements = [
    { position: 'bottom' },
    { position: 'bottom left' },
    { position: 'bottom right' },
    { position: 'bottom start' },
    { position: 'bottom end' },
    { position: 'top' },
    { position: 'top left' },
    { position: 'top right' },
    { position: 'top start' },
    { position: 'top end' },
    { position: 'left' },
    { position: 'left top' },
    { position: 'left bottom' },
    { position: 'start' },
    { position: 'start top' },
    { position: 'start bottom' },
    { position: 'right' },
    { position: 'right top' },
    { position: 'right bottom' },
    { position: 'end' },
    { position: 'end top' },
    { position: 'end bottom' }
]

export default function SingleMenuDemo() {
    const [selected, setSelected] = useState<Selection>(new Set(['bottom']))
    return (
        <Menu>
            <Menu.Trigger>Open</Menu.Trigger>
            <Menu.Content
                placement={Array.from(selected)[0] as Placement}
                selectionMode='single'
                selectedKeys={selected}
                onSelectionChange={setSelected}
                items={placements}
            >
                {(item) => (
                    <Menu.Item id={item.position}>
                        <Menu.Label>{item.position}</Menu.Label>
                    </Menu.Item>
                )}
            </Menu.Content>
        </Menu>
    )
}
