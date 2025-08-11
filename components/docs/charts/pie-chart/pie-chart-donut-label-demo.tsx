'use client'

import { useMemo } from 'react'
import { Card, PieChart } from '@/components/ui'

export default function PieChartDonutLabelDeviceDemo() {
    const data = useMemo(
        () => [
            { name: 'Mobile', amount: 640 },
            { name: 'Desktop', amount: 480 },
            { name: 'Tablet', amount: 160 },
            { name: 'Other', amount: 40 }
        ],
        []
    )

    return (
        <Card>
            <Card.Header className='text-center'>
                <Card.Title>Device usage</Card.Title>
                <Card.Description>Breakdown of users by device type.</Card.Description>
            </Card.Header>
            <Card.Content>
                <PieChart
                    className='mx-auto h-56'
                    config={{
                        Mobile: { label: 'Mobile' },
                        Desktop: { label: 'Desktop' },
                        Tablet: { label: 'Tablet' },
                        Other: { label: 'Other' }
                    }}
                    data={data}
                    dataKey='amount'
                    nameKey='name'
                    showLabel
                    valueFormatter={(v) => `${v} users`}
                    variant='donut'
                />
            </Card.Content>
        </Card>
    )
}
