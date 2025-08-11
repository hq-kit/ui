'use client'

import { Table } from '@/components/ui'

const items = [
    { id: 1, name: 'Charizard', type: 'Fire, Flying', level: '67' },
    { id: 2, name: 'Blastoise', type: 'Water', level: '56' },
    { id: 3, name: 'Venusaur', type: 'Grass, Poison', level: '83' },
    { id: 4, name: 'Pikachu', type: 'Electric', level: '100' }
]

export default function TableResizeDemo() {
    return (
        <Table allowResize aria-label='Pokemons'>
            <Table.Header>
                <Table.Column className='max-w-8'>#</Table.Column>
                <Table.Column isResizable isRowHeader>
                    Name
                </Table.Column>
                <Table.Column isResizable>Type</Table.Column>
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
    )
}
