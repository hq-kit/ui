'use client'

import { IconActivity, IconChartColumn, IconRupiah, IconSquareArrowUpRight, IconUsers } from 'hq-icons'

import NavbarLayout from '@/components/docs/block/layouts/app-navbar'
import { Avatar, Card, Container, Link, Navbar, Table, buttonStyle } from '@/components/ui'

export default function Dashboard() {
    return (
        <NavbarLayout variant='inset'>
            <Navbar.Inset>
                <Container className='@xl:py-12 py-6'>
                    <main className='flex flex-1 flex-col gap-4 md:gap-8'>
                        <div className='grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4'>
                            <Card>
                                <Card.Header className='flex flex-row items-center justify-between space-y-0'>
                                    <Card.Title className='font-medium text-sm'>Total Revenue</Card.Title>
                                    <IconRupiah className='size-4 text-muted-fg' />
                                </Card.Header>
                                <Card.Content className='pb-4'>
                                    <div className='font-bold text-2xl'>Rp 45,231.89</div>
                                    <p className='text-muted-fg text-xs'>+20.1% from last month</p>
                                </Card.Content>
                            </Card>
                            <Card>
                                <Card.Header className='flex flex-row items-center justify-between space-y-0'>
                                    <Card.Title className='font-medium text-sm'>Subscriptions</Card.Title>
                                    <IconUsers className='size-4 text-muted-fg' />
                                </Card.Header>
                                <Card.Content className='pb-4'>
                                    <div className='font-bold text-2xl'>+2350</div>
                                    <p className='text-muted-fg text-xs'>+180.1% from last month</p>
                                </Card.Content>
                            </Card>
                            <Card>
                                <Card.Header className='flex flex-row items-center justify-between space-y-0'>
                                    <Card.Title className='font-medium text-sm'>Sales</Card.Title>
                                    <IconChartColumn className='size-4 text-muted-fg' />
                                </Card.Header>
                                <Card.Content className='pb-4'>
                                    <div className='font-bold text-2xl'>+12,234</div>
                                    <p className='text-muted-fg text-xs'>+19% from last month</p>
                                </Card.Content>
                            </Card>
                            <Card>
                                <Card.Header className='flex flex-row items-center justify-between space-y-0'>
                                    <Card.Title className='font-medium text-sm'>Active Now</Card.Title>
                                    <IconActivity className='size-4 text-muted-fg' />
                                </Card.Header>
                                <Card.Content className='pb-4'>
                                    <div className='font-bold text-2xl'>+573</div>
                                    <p className='text-muted-fg text-xs'>+201 since last hour</p>
                                </Card.Content>
                            </Card>
                        </div>
                        <div className='grid gap-4 md:gap-8 lg:grid-cols-2 xl:grid-cols-3'>
                            <Card className='xl:col-span-2'>
                                <Card.Header className='flex flex-row justify-between'>
                                    <div className='grid gap-1'>
                                        <Card.Title>Transactions</Card.Title>
                                        <Card.Description>Recent transactions.</Card.Description>
                                    </div>
                                    <Link className={buttonStyle({ variant: 'outline' })} href='#'>
                                        All
                                        <IconSquareArrowUpRight />
                                    </Link>
                                </Card.Header>
                                <Card.Content>
                                    <Table>
                                        <Table.Header>
                                            <Table.Column isRowHeader>Customer</Table.Column>
                                            <Table.Column className='[&_div]:justify-end'>Amount</Table.Column>
                                        </Table.Header>
                                        <Table.Body>
                                            {transactions.map((transaction) => (
                                                <Table.Row key={transaction.id}>
                                                    <Table.Cell>
                                                        <div className='font-medium'>{transaction.name}</div>
                                                        <div className='hidden text-muted-fg text-sm md:inline'>
                                                            {transaction.email}
                                                        </div>
                                                    </Table.Cell>
                                                    <Table.Cell className='text-right'>
                                                        Rp {transaction.amount}
                                                    </Table.Cell>
                                                </Table.Row>
                                            ))}
                                        </Table.Body>
                                    </Table>
                                </Card.Content>
                            </Card>
                            <Card>
                                <Card.Header>
                                    <Card.Title>Recent Sales</Card.Title>
                                </Card.Header>
                                <Card.Content className='grid gap-8'>
                                    {transactions.map((transaction) => (
                                        <div key={transaction.id} className='flex items-center gap-4'>
                                            <Avatar
                                                className='hidden size-9 sm:flex'
                                                src={`https://i.pravatar.cc/150?img=${transaction.id}`}
                                                initials={transaction.name}
                                            />
                                            <div className='grid gap-1'>
                                                <p className='font-medium text-sm leading-none'>{transaction.name}</p>
                                                <p className='text-muted-fg text-sm'>{transaction.email}</p>
                                            </div>
                                            <div className='ml-auto font-medium'>+Rp {transaction.amount}</div>
                                        </div>
                                    ))}
                                </Card.Content>
                            </Card>
                        </div>
                    </main>
                </Container>
            </Navbar.Inset>
        </NavbarLayout>
    )
}

const transactions = [
    {
        id: 1,
        name: 'Berger',
        email: 'bergersavage@senmao.com',
        amount: 17135
    },
    {
        id: 2,
        name: 'Horn',
        email: 'hornsavage@senmao.com',
        amount: 25866
    },
    {
        id: 3,
        name: 'Frieda',
        email: 'friedasavage@senmao.com',
        amount: 54584
    },
    {
        id: 4,
        name: 'Noble',
        email: 'noblesavage@senmao.com',
        amount: 27562
    },
    {
        id: 5,
        name: 'Hewitt',
        email: 'hewittsavage@senmao.com',
        amount: 77237
    }
]
