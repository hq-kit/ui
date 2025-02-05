'use client'

import React from 'react'

import Paginator from 'components/paginator'
import { IconEllipsisVertical, IconEye, IconHighlighter, IconPlus, IconTrash } from 'hq-icons'
import { Key } from 'react-aria-components'
import { useDebouncedCallback } from 'use-debounce'

import NavbarLayout from '@/components/docs/block/layouts/app-navbar'
import { Card, Menu, SearchField, Select, Table, Toolbar } from '@/components/ui'

type product = {
    id: number
    title: string
    category: string
    price: string
}

export default function ProductManagement() {
    const [items, setItems] = React.useState<product[]>([])
    const [show, setShow] = React.useState<Key>(5)
    const [page, setPage] = React.useState<number>(1)
    const [total, setTotal] = React.useState<number>(0)

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

    React.useEffect(() => {
        getProducts()
    }, [show, page])

    return (
        <NavbarLayout>
            <Card>
                <Card.Header>
                    <Card.Title>Product Management</Card.Title>
                    <Card.Description>Manage your products</Card.Description>
                    <Toolbar className='flex justify-between pt-2'>
                        <Toolbar.Group aria-label='Filters'>
                            <Select
                                aria-label='Show'
                                selectedKey={show}
                                onSelectionChange={setShow}
                            >
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
                        </Toolbar.Group>
                        <Toolbar.Group aria-label='Actions'>
                            <SearchField
                                onChange={handleSearch}
                                placeholder='Search...'
                                aria-label='Search'
                            />
                            <Toolbar.Item aria-label='Create' size='icon' variant='outline'>
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
                        <Table.Body items={items} renderEmptyState={() => <Table.Empty />}>
                            {(item) => (
                                <Table.Row id={item.id}>
                                    <Table.Cell>{item.id}</Table.Cell>
                                    <Table.Cell>{item.title}</Table.Cell>
                                    <Table.Cell>{item.category}</Table.Cell>
                                    <Table.Cell>{item.price}</Table.Cell>
                                    <Table.Cell className='flex justify-end'>
                                        <Menu>
                                            <Menu.Trigger>
                                                <IconEllipsisVertical />
                                            </Menu.Trigger>
                                            <Menu.Content showArrow placement='left top'>
                                                <Menu.Item>
                                                    <IconEye /> View
                                                </Menu.Item>
                                                <Menu.Item>
                                                    <IconHighlighter /> Edit
                                                </Menu.Item>
                                                <Menu.Separator />
                                                <Menu.Item isDanger>
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
                    <Paginator total={total} page={page} show={Number(show)} setPage={setPage} />
                </Card.Footer>
            </Card>
        </NavbarLayout>
    )
}
