'use client'

import { useMemo } from 'react'
import { Card, PieChart } from '@/components/ui'

export default function PieChartDonutDemo() {
    const data = useMemo(
        () => [
            { name: 'Rent', amount: 1200 },
            { name: 'Groceries', amount: 450 },
            { name: 'Utilities', amount: 200 },
            { name: 'Entertainment', amount: 150 }
        ],
        []
    )

    return (
        <Card>
            <Card.Header className='text-center'>
                <Card.Title>Monthly spend breakdown</Card.Title>
                <Card.Description>Shows where the money goes each month.</Card.Description>
            </Card.Header>
            <Card.Content>
                <PieChart
                    className='mx-auto h-56'
                    config={{
                        Rent: { label: 'Rent' },
                        Groceries: { label: 'Groceries' },
                        Utilities: { label: 'Utilities' },
                        Entertainment: { label: 'Entertainment' }
                    }}
                    data={data}
                    dataKey='amount'
                    nameKey='name'
                    valueFormatter={(v) => `$${v}`}
                    variant='donut'
                />
            </Card.Content>
        </Card>
    )
}
