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
                        Organic: { label: 'Organic', color: 'var(--color-emerald-500)' },
                        Paid: { label: 'Paid', color: 'var(--color-rose-500)' },
                        Referral: { label: 'Referral', color: 'var(--color-sky-500)' },
                        Social: { label: 'Social', color: 'var(--color-indigo-500)' }
                    }}
                    data={data}
                    dataKey='amount'
                    nameKey='name'
                />
            </Card.Content>
        </Card>
    )
}
