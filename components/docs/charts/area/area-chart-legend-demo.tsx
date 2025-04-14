'use client'

import { Area, AreaChart, CartesianGrid, XAxis } from 'recharts'

import type { ChartConfig } from '@/components/ui'
import { Card, Chart } from '@/components/ui'

const salesData = Array.from({ length: 24 }, (_, index) => {
    const date = new Date(new Date().getFullYear() - 1, index)
    const month = date.toLocaleDateString('en-US', { month: 'long' })
    return {
        month,
        wholesale: Math.floor(Math.random() * 1000 + 500),
        retail: Math.floor(Math.random() * 1000 + 1500)
    }
})

const salesConfig = {
    wholesale: {
        label: 'Wholesale',
        color: 'var(--chart-1)'
    },
    retail: {
        label: 'Retail',
        color: 'var(--chart-2)'
    }
} satisfies ChartConfig

export default function AreaChartLegendDemo() {
    return (
        <Card>
            <Card.Header
                className='items-center pb-0'
                title='Sales Overview'
                description='Distribution of wholesale and retail sales over the last 24 months'
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
                        <Chart.Tooltip cursor={false} content={<Chart.TooltipContent indicator='line' />} />
                        <Area
                            dataKey='retail'
                            type='natural'
                            fill='var(--color-retail)'
                            fillOpacity={0.4}
                            stroke='var(--color-retail)'
                            stackId='a'
                        />
                        <Area
                            dataKey='wholesale'
                            type='natural'
                            fill='var(--color-wholesale)'
                            fillOpacity={0.4}
                            stroke='var(--color-wholesale)'
                            stackId='a'
                        />
                        <Chart.Legend content={<Chart.LegendContent />} />
                    </AreaChart>
                </Chart>
            </Card.Content>
        </Card>
    )
}
