'use client'

import { Card, Container, Menu, SearchField, Select, Table, Toolbar } from '@/components/ui'

import { IconDotsVertical, IconEye, IconHighlight, IconPlus, IconTrash } from '@tabler/icons-react'
import { useEffect, useState } from 'react'
import type { Key } from 'react-aria-components'
import { useDebouncedCallback } from 'use-debounce'
import Paginator from './paginator'

type product = {
    id: number
    title: string
    category: string
    price: string
}

export default function ProductManagement() {
    const [items, setItems] = useState<product[]>([])
    const [show, setShow] = useState<Key | null>(5)
    const [page, setPage] = useState<number>(1)
    const [total, setTotal] = useState<number>(0)

    const getProducts = async ({ query = '' }: { query?: string } = {}) => {
        const response = await fetch(
            `https://dummyjson.com/products/search?q=${query}&limit=${show}&skip=${(page - 1) * Number(show)}&select=title,category,price`
        )
        const data = await response.json()
        setItems(data.products)
        setTotal(data.total)
    }

    const handleSearch = useDebouncedCallback((e) => {
        if (e) {
            getProducts({ query: e })
        } else {
            getProducts()
        }
    }, 300)

    useEffect(() => {
        getProducts()
    }, [show, page])

    return (
        <Container className='py-6 xl:py-12'>
            <Card>
                <Card.Header>
                    <Card.Title>Product Management</Card.Title>
                    <Card.Description>Manage your products</Card.Description>
                    <Toolbar className='flex justify-between pt-2'>
                        <Select className='w-32' aria-label='Show' selectedKey={show} onSelectionChange={setShow}>
                            <Select.Item id={5} textValue='5'>
                                5
                            </Select.Item>
                            <Select.Item id={10} textValue='10'>
                                10
                            </Select.Item>
                            <Select.Item id={20} textValue='20'>
                                20
                            </Select.Item>
                        </Select>
                        <Toolbar.Group aria-label='Actions'>
                            <SearchField onChange={handleSearch} placeholder='Search...' aria-label='Search' />
                            <Toolbar.Item aria-label='Create' size='md' icon variant='outline'>
                                <IconPlus />
                            </Toolbar.Item>
                        </Toolbar.Group>
                    </Toolbar>
                </Card.Header>
                <Card.Content>
                    <Table aria-label='Product'>
                        <Table.Header>
                            <Table.Column>#</Table.Column>
                            <Table.Column id='title' isRowHeader>
                                Title
                            </Table.Column>
                            <Table.Column>Category</Table.Column>
                            <Table.Column>Price</Table.Column>
                            <Table.Column />
                        </Table.Header>
                        <Table.Body
                            items={items}
                            renderEmptyState={() => (
                                <div className='flex h-10 w-full items-center justify-center'>No products found</div>
                            )}
                        >
                            {(item) => (
                                <Table.Row id={item.id}>
                                    <Table.Cell>{item.id}</Table.Cell>
                                    <Table.Cell>{item.title}</Table.Cell>
                                    <Table.Cell>{item.category}</Table.Cell>
                                    <Table.Cell>{item.price}</Table.Cell>
                                    <Table.Cell className='flex justify-end'>
                                        <Menu>
                                            <Menu.Trigger>
                                                <IconDotsVertical />
                                            </Menu.Trigger>
                                            <Menu.Content placement='left top'>
                                                <Menu.Item>
                                                    <IconEye /> View
                                                </Menu.Item>
                                                <Menu.Item>
                                                    <IconHighlight /> Edit
                                                </Menu.Item>
                                                <Menu.Separator />
                                                <Menu.Item isDestructive>
                                                    <IconTrash /> Delete
                                                </Menu.Item>
                                            </Menu.Content>
                                        </Menu>
                                    </Table.Cell>
                                </Table.Row>
                            )}
                        </Table.Body>
                    </Table>
                </Card.Content>
                <Card.Footer>
                    <Paginator total={total} page={page} show={Number(show)} action={setPage} />
                </Card.Footer>
            </Card>
        </Container>
    )
}
