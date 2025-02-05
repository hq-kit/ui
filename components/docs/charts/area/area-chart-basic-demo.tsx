'use client'

import { Area, AreaChart, CartesianGrid, XAxis } from 'recharts'

import type { ChartConfig } from '@/components/ui'
import { Card, Chart } from '@/components/ui'

const salesData = Array.from({ length: 24 }, (_, index) => {
    const date = new Date(new Date().getFullYear() - 1, index)
    const month = date.toLocaleDateString('en-US', { month: 'long' })
    return {
        month,
        revenue: Math.floor(Math.random() * 5000 + 2000)
    }
})

const salesConfig = {
    revenue: {
        label: 'Revenue',
        color: 'var(--chart-1)'
    }
} satisfies ChartConfig

export default function AreaChartBasicDemo() {
    return (
        <Card>
            <Card.Header
                title='Revenue Trends'
                description='Monthly revenue for the last 24 months'
                className='items-center pb-0'
            />
            <Card.Content>
                <Chart config={salesConfig}>
                    <AreaChart
                        accessibilityLayer
                        data={salesData}
                        margin={{
                            left: 12,
                            right: 12
                        }}
                    >
                        <CartesianGrid vertical={false} />
                        <XAxis
                            dataKey='month'
                            tickLine={false}
                            axisLine={false}
                            tickMargin={8}
                            tickFormatter={(value) => value.slice(0, 3)}
                        />
                        <Chart.Tooltip
                            cursor={false}
                            content={<Chart.TooltipContent indicator='line' />}
                        />
                        <Area
                            dataKey='revenue'
                            type='natural'
                            fill='var(--color-revenue)'
                            fillOpacity={0.4}
                            stroke='var(--color-revenue)'
                        />
                    </AreaChart>
                </Chart>
            </Card.Content>
        </Card>
    )
}
