import { Card, Table } from '@/components/ui'

type Item = {
    id: number
    header: string
    type: string
    status: string
    target: string
    limit: string
    reviewer: string
}

export default function DataTable({ data }: { data: Item[] }) {
    return (
        <Card>
            <Table>
                <Table.Header>
                    <Table.Column className='w-0'>#</Table.Column>
                    <Table.Column isRowHeader>Name</Table.Column>
                    <Table.Column>Type</Table.Column>
                    <Table.Column>Status</Table.Column>
                </Table.Header>
                <Table.Body items={data}>
                    {(item) => (
                        <Table.Row>
                            <Table.Cell>{item.id}</Table.Cell>
                            <Table.Cell>{item.header}</Table.Cell>
                            <Table.Cell>{item.type}</Table.Cell>
                            <Table.Cell>{item.status}</Table.Cell>
                        </Table.Row>
                    )}
                </Table.Body>
            </Table>
        </Card>
    )
}
