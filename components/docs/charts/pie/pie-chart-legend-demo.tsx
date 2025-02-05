'use client'

import { Pie, PieChart } from 'recharts'

import { Card, Chart, type ChartConfig } from '@/components/ui'

const chartData = [
    { region: 'tesla', visitors: 275, fill: 'var(--color-tesla)' },
    { region: 'rivian', visitors: 200, fill: 'var(--color-rivian)' },
    { region: 'ford', visitors: 187, fill: 'var(--color-ford)' },
    { region: 'lucid', visitors: 173, fill: 'var(--color-lucid)' },
    { region: 'other', visitors: 90, fill: 'var(--color-other)' }
]

const chartConfig = {
    visitors: {
        label: 'Visitors'
    },
    tesla: {
        label: 'Tesla',
        color: 'var(--chart-1)'
    },
    rivian: {
        label: 'Rivian',
        color: 'var(--chart-2)'
    },
    ford: {
        label: 'Ford',
        color: 'var(--chart-3)'
    },
    lucid: {
        label: 'Lucid',
        color: 'var(--chart-4)'
    },
    other: {
        label: 'Other',
        color: 'var(--chart-5)'
    }
} satisfies ChartConfig

export default function PieChartLegendDemo() {
    return (
        <Card>
            <Card.Header
                title='EV Market'
                description='Showing total visitors for the first half of 2024 by region'
                className='items-center pb-0'
            />
            <Card.Content className='flex-1 pb-0'>
                <Chart config={chartConfig} className='mx-auto aspect-square max-h-[300px]'>
                    <PieChart>
                        <Pie data={chartData} dataKey='visitors' />
                        <Chart.Legend
                            content={<Chart.LegendContent nameKey='region' />}
                            className='-translate-y-2 flex-wrap gap-2 *:basis-1/4 *:justify-center'
                        />
                    </PieChart>
                </Chart>
            </Card.Content>
        </Card>
    )
}
