'use client'

import { Pie, PieChart } from 'recharts'

import { Card, Chart, type ChartConfig } from '@/components/ui'

const chartData = [
    { category: 'Sales', amount: 275, fill: 'var(--color-sales)' },
    { category: 'Marketing', amount: 200, fill: 'var(--color-marketing)' },
    { category: 'IT', amount: 187, fill: 'var(--color-it)' },
    { category: 'HR', amount: 173, fill: 'var(--color-hr)' },
    { category: 'Operations', amount: 90, fill: 'var(--color-operations)' }
]

const chartConfig = {
    amount: {
        label: 'Amount'
    },
    sales: {
        label: 'Sales',
        color: 'var(--chart-1)'
    },
    marketing: {
        label: 'Marketing',
        color: 'var(--chart-2)'
    },
    it: {
        label: 'IT',
        color: 'var(--chart-3)'
    },
    hr: {
        label: 'HR',
        color: 'var(--chart-4)'
    },
    operations: {
        label: 'Operations',
        color: 'var(--chart-5)'
    }
} satisfies ChartConfig

export default function PieChartBasicDemo() {
    return (
        <Card>
            <Card.Header className='items-center pb-0'>
                <Card.Title>Departmental Budget Allocation</Card.Title>
                <Card.Description>Jan - Jun 2024</Card.Description>
            </Card.Header>
            <Card.Content className='flex-1 pb-0'>
                <Chart config={chartConfig} className='mx-auto aspect-square max-h-[250px]'>
                    <PieChart>
                        <Chart.Tooltip cursor={false} content={<Chart.TooltipContent hideLabel />} />
                        <Pie data={chartData} dataKey='amount' nameKey='category' />
                    </PieChart>
                </Chart>
            </Card.Content>
        </Card>
    )
}
