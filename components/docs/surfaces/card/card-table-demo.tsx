import { IconEllipsisVertical, IconEye, IconPencil, IconTrash } from 'hq-icons'

import { Card, Menu, Pagination, Table } from '@/components/ui'

export default function CardTableDemo() {
    return (
        <Card>
            <Card.Header>
                <Card.Title>Users</Card.Title>
                <Card.Description>Manage users, groups, and roles.</Card.Description>
            </Card.Header>
            <Card.Content>
                <Table aria-label='Users'>
                    <Table.Header>
                        <Table.Column>#</Table.Column>
                        <Table.Column isRowHeader>Name</Table.Column>
                        <Table.Column>Gender</Table.Column>
                        <Table.Column>Age</Table.Column>
                        <Table.Column>Occupation</Table.Column>
                        <Table.Column />
                    </Table.Header>
                    <Table.Body items={users}>
                        {(item) => (
                            <Table.Row id={item.id}>
                                <Table.Cell>{item.id}</Table.Cell>
                                <Table.Cell>{item.name}</Table.Cell>
                                <Table.Cell>{item.gender}</Table.Cell>
                                <Table.Cell>{item.age}</Table.Cell>
                                <Table.Cell>{item.occupation}</Table.Cell>
                                <Table.Cell className='flex justify-end'>
                                    <Menu>
                                        <Menu.Trigger>
                                            <IconEllipsisVertical />
                                        </Menu.Trigger>
                                        <Menu.Content placement='left top'>
                                            <Menu.Item>
                                                <IconEye />
                                                <Menu.Label>View</Menu.Label>
                                            </Menu.Item>
                                            <Menu.Item>
                                                <IconPencil />
                                                <Menu.Label>Edit</Menu.Label>
                                            </Menu.Item>
                                            <Menu.Separator />
                                            <Menu.Item isDestructive>
                                                <IconTrash />
                                                <Menu.Label>Delete</Menu.Label>
                                            </Menu.Item>
                                        </Menu.Content>
                                    </Menu>
                                </Table.Cell>
                            </Table.Row>
                        )}
                    </Table.Body>
                </Table>
            </Card.Content>
            <Card.Footer className='flex-col justify-between gap-2 md:flex-row'>
                <div className='text-muted-foreground text-sm'>Showing 1 to 10 of 50 entries</div>
                <Pagination>
                    <Pagination.Item slot='first' href='#first' />
                    <Pagination.Item slot='previous' href='#previous' />
                    <Pagination.Label className='lg:hidden' current={2} total={5} />
                    <Pagination.Pages className='hidden lg:flex'>
                        <Pagination.Item href='#1'>1</Pagination.Item>
                        <Pagination.Item isCurrent href='#2'>
                            2
                        </Pagination.Item>
                        <Pagination.Item href='#3'>3</Pagination.Item>
                        <Pagination.Item slot='ellipsis' />
                        <Pagination.Item href='#5'>5</Pagination.Item>
                    </Pagination.Pages>
                    <Pagination.Item slot='next' href='#next' />
                    <Pagination.Item slot='last' href='#last' />
                </Pagination>
            </Card.Footer>
        </Card>
    )
}

const users = [
    {
        id: 1,
        name: 'John Doe',
        gender: 'Male',
        age: 30,
        occupation: 'Software Engineer'
    },
    {
        id: 2,
        name: 'Jane Smith',
        gender: 'Female',
        age: 25,
        occupation: 'Marketing Manager'
    },
    {
        id: 3,
        name: 'Bob Johnson',
        gender: 'Male',
        age: 40,
        occupation: 'Doctor'
    },
    {
        id: 4,
        name: 'Emily Chen',
        gender: 'Female',
        age: 28,
        occupation: 'Teacher'
    },
    {
        id: 5,
        name: 'Michael Brown',
        gender: 'Male',
        age: 35,
        occupation: 'Lawyer'
    },
    {
        id: 6,
        name: 'Sarah Lee',
        gender: 'Female',
        age: 32,
        occupation: 'Designer'
    },
    {
        id: 7,
        name: 'Kevin White',
        gender: 'Male',
        age: 45,
        occupation: 'CEO'
    },
    {
        id: 8,
        name: 'Lisa Nguyen',
        gender: 'Female',
        age: 29,
        occupation: 'Engineer'
    },
    {
        id: 9,
        name: 'David Kim',
        gender: 'Male',
        age: 38,
        occupation: 'Consultant'
    },
    {
        id: 10,
        name: 'Hannah Patel',
        gender: 'Female',
        age: 26,
        occupation: 'Writer'
    }
]
