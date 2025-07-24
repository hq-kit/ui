'use client'

import { Table } from '@/components/ui'
import { useState } from 'react'

import type { Selection } from 'react-aria-components'

const items = [
    { id: 1, name: 'Charizard', type: 'Fire, Flying', level: '67' },
    { id: 2, name: 'Blastoise', type: 'Water', level: '56' },
    { id: 3, name: 'Venusaur', type: 'Grass, Poison', level: '83' },
    { id: 4, name: 'Pikachu', type: 'Electric', level: '100' }
]
export default function TableBulkDemo() {
    const [selectedKeys, setSelectedKeys] = useState<Selection>(new Set())
    return (
        <div className='space-y-6'>
            <Table
                aria-label='Books'
                selectionMode='multiple'
                selectedKeys={selectedKeys}
                onSelectionChange={setSelectedKeys}
            >
                <Table.Header>
                    <Table.Column className='w-0'>#</Table.Column>
                    <Table.Column isRowHeader>Name</Table.Column>
                    <Table.Column>Type</Table.Column>
                    <Table.Column>Level</Table.Column>
                </Table.Header>
                <Table.Body items={items}>
                    {(item) => (
                        <Table.Row>
                            <Table.Cell>{item.id}</Table.Cell>
                            <Table.Cell>{item.name}</Table.Cell>
                            <Table.Cell>{item.type}</Table.Cell>
                            <Table.Cell>{item.level}</Table.Cell>
                        </Table.Row>
                    )}
                </Table.Body>
            </Table>
            <code>selected: {JSON.stringify(Array.from(selectedKeys))}</code>
        </div>
    )
}
