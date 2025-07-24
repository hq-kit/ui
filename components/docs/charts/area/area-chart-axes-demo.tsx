'use client'

import type { ChartConfig } from '@/components/ui'
import { Card, Chart } from '@/components/ui'
import { Area, AreaChart, CartesianGrid, XAxis, YAxis } from 'recharts'

const chartData = [
    { month: 'January', desktop: 186, mobile: 80 },
    { month: 'February', desktop: 305, mobile: 200 },
    { month: 'March', desktop: 237, mobile: 120 },
    { month: 'April', desktop: 73, mobile: 190 },
    { month: 'May', desktop: 209, mobile: 130 },
    { month: 'June', desktop: 214, mobile: 140 }
]

const chartConfig = {
    desktop: {
        label: 'Desktop',
        color: 'var(--chart-1)'
    },
    mobile: {
        label: 'Mobile',
        color: 'var(--chart-2)'
    }
} satisfies ChartConfig

export default function AreaChartAxesDemo() {
    return (
        <Card>
            <Card.Header>
                <Card.Title>Area Chart - Axes</Card.Title>
                <Card.Description>Showing total visitors for the last 6 months</Card.Description>
            </Card.Header>
            <Card.Content>
                <Chart config={chartConfig}>
                    <AreaChart
                        accessibilityLayer
                        data={chartData}
                        margin={{
                            left: -20,
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
                        <YAxis tickLine={false} axisLine={false} tickMargin={8} tickCount={3} />
                        <Chart.Tooltip cursor={false} content={<Chart.TooltipContent />} />
                        <Area
                            dataKey='mobile'
                            type='natural'
                            fill='var(--color-mobile)'
                            fillOpacity={0.4}
                            stroke='var(--color-mobile)'
                            stackId='a'
                        />
                        <Area
                            dataKey='desktop'
                            type='natural'
                            fill='var(--color-desktop)'
                            fillOpacity={0.4}
                            stroke='var(--color-desktop)'
                            stackId='a'
                        />
                    </AreaChart>
                </Chart>
            </Card.Content>
        </Card>
    )
}
