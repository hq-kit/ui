'use client'

import { useAsyncList } from '@react-stately/data'
import { Card, SearchField, Table } from '@/components/ui'

interface Character {
    title: string
    director: number
    producer: number
    release_date: number
}

export default function TableFilteringDemo() {
    const list = useAsyncList<Character>({
        async load({ signal, filterText }) {
            const res = await fetch(`https://swapi.py4e.com/api/films/?search=${filterText}`, {
                signal
            })
            const json = await res.json()
            return {
                items: json.results
            }
        },
        async sort({ items, sortDescriptor }) {
            return {
                items: items.sort((a, b) => {
                    // @ts-expect-error unknown-type
                    const first = a[sortDescriptor.column]
                    // @ts-expect-error unknown-type
                    const second = b[sortDescriptor.column]
                    let cmp = (Number.parseInt(first) || first) < (Number.parseInt(second) || second) ? -1 : 1
                    if (sortDescriptor.direction === 'descending') {
                        cmp *= -1
                    }
                    return cmp
                })
            }
        }
    })
    return (
        <Card>
            <Card.Header>
                <SearchField
                    isPending={list.isLoading}
                    label='Search Movies'
                    onChange={list.setFilterText}
                    placeholder='Type to search...'
                    value={list.filterText}
                />
            </Card.Header>
            <Card.Content>
                <Table aria-label='Movies' selectionMode='multiple'>
                    <Table.Header>
                        <Table.Column id='title' isRowHeader>
                            Title
                        </Table.Column>
                        <Table.Column id='director'>Director</Table.Column>
                        <Table.Column id='producer'>Producer</Table.Column>
                        <Table.Column id='release_date'>Release Date</Table.Column>
                    </Table.Header>
                    <Table.Body
                        items={list.items}
                        renderEmptyState={() => (
                            <div className='col-span-full p-4 text-center text-muted-foreground'>No items found</div>
                        )}
                    >
                        {(item) => (
                            <Table.Row id={item.title}>
                                <Table.Cell>{item.title}</Table.Cell>
                                <Table.Cell>{item.director}</Table.Cell>
                                <Table.Cell>{item.producer}</Table.Cell>
                                <Table.Cell>{item.release_date}</Table.Cell>
                            </Table.Row>
                        )}
                    </Table.Body>
                </Table>
            </Card.Content>
        </Card>
    )
}
