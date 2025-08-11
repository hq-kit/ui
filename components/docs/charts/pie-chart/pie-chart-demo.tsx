'use client'

import { useMemo } from 'react'
import { Card, PieChart } from '@/components/ui'

export default function PieChartTrafficSourceDemo() {
    const data = useMemo(
        () => [
            { name: 'Organic', amount: 1240 },
            { name: 'Paid', amount: 880 },
            { name: 'Referral', amount: 360 },
            { name: 'Social', amount: 220 }
        ],
        []
    )

    return (
        <Card>
            <Card.Header className='text-center'>
                <Card.Title>Traffic source breakdown</Card.Title>
                <Card.Description>Where your website traffic is coming from.</Card.Description>
            </Card.Header>
            <Card.Content>
                <PieChart
                    className='mx-auto h-56'
                    config={{
                        Organic: { label: 'Organic' },
                        Paid: { label: 'Paid' },
                        Referral: { label: 'Referral' },
                        Social: { label: 'Social' }
                    }}
                    data={data}
                    dataKey='amount'
                    nameKey='name'
                />
            </Card.Content>
        </Card>
    )
}
