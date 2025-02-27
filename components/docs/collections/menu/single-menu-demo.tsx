'use client'

import React from 'react'

import type { Selection } from 'react-aria-components'

import { Button, Menu } from '@/components/ui'
import type { Placement } from '@react-types/overlays'

export const placements = [
    'bottom',
    'bottom left',
    'bottom right',
    'bottom start',
    'bottom end',
    'top',
    'top left',
    'top right',
    'top start',
    'top end',
    'left',
    'left top',
    'left bottom',
    'start',
    'start top',
    'start bottom',
    'right',
    'right top',
    'right bottom',
    'end',
    'end top',
    'end bottom'
].map((item, i) => ({ id: i, name: item }))

export default function SingleMenuDemo() {
    const [selected, setSelected] = React.useState<Selection>(new Set(['bottom']))
    return (
        <Menu>
            <Button variant='outline'>Placement</Button>
            <Menu.Content
                placement={Array.from(selected)[0] as Placement}
                selectionMode='single'
                selectedKeys={selected}
                onSelectionChange={setSelected}
                items={placements}
                className='max-h-72 min-w-52'
            >
                {(item) => (
                    <Menu.Item id={item.name}>
                        <Menu.Label>{item.name}</Menu.Label>
                    </Menu.Item>
                )}
            </Menu.Content>
        </Menu>
    )
}
