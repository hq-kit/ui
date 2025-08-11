'use client'

import { useMemo } from 'react'
import { Card, PieChart } from '@/components/ui'

export default function PieChartDonutCustomLabelDemo() {
    const data = useMemo(
        () => [
            { name: 'Rent', amount: 1200 },
            { name: 'Groceries', amount: 450 },
            { name: 'Utilities', amount: 200 },
            { name: 'Entertainment', amount: 150 }
        ],
        []
    )

    const total = useMemo(() => data.reduce((sum, item) => sum + item.amount, 0), [data])

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
                    label=''
                    nameKey='name'
                    showLabel
                    valueFormatter={() => ''}
                    variant='donut'
                >
                    <text
                        className='fill-fg font-bold text-xl'
                        dominantBaseline='middle'
                        textAnchor='middle'
                        x='50%'
                        y='50%'
                    >
                        ${total.toLocaleString()}
                    </text>
                    <text
                        className='fill-muted-fg text-xs'
                        dominantBaseline='hanging'
                        textAnchor='middle'
                        x='50%'
                        y='60%'
                    >
                        Total spent
                    </text>
                </PieChart>
            </Card.Content>
        </Card>
    )
}
