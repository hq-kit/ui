'use client'

import { Card, Chart, type ChartConfig } from '@/components/ui'
import { IconBadgeDollar } from 'hq-icons'
import { CartesianGrid, Line, LineChart, XAxis } from 'recharts'

const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

const chartData = months.map((month) => ({
    month,
    sales: Math.floor(Math.random() * 300) + 150,
    profit: Math.floor(Math.random() * 150) + 50
}))

const chartConfig = {
    sales: {
        label: 'Sales',
        color: 'var(--chart-1)'
    },
    profit: {
        label: 'Profit',
        color: 'var(--chart-2)'
    }
} satisfies ChartConfig

export default function LineChartCustomDotsDemo() {
    return (
        <Card>
            <Card.Header
                title='Monthly Sales & Profit'
                description='Visualizing Monthly Sales & Profit for Jan - Dec 2024'
            />
            <Card.Content>
                <Chart config={chartConfig}>
                    <LineChart
                        accessibilityLayer
                        data={chartData}
                        margin={{
                            left: 12,
                            right: 12
                        }}
                    >
                        <CartesianGrid vertical={false} />
                        <XAxis dataKey='month' tickLine={false} axisLine={false} tickMargin={8} />
                        <Chart.Tooltip cursor={false} content={<Chart.TooltipContent hideLabel />} />
                        <Line
                            dataKey='sales'
                            type='natural'
                            stroke='var(--color-sales)'
                            strokeWidth={2}
                            dot={({ cx, cy, payload }) => {
                                const r = 24
                                return (
                                    <IconBadgeDollar
                                        className='text-(--color-profit)'
                                        key={payload.month}
                                        x={cx - r / 2}
                                        y={cy - r / 2}
                                        width={r}
                                        height={r}
                                        fill='var(--background)'
                                        stroke='var(--color-sales)'
                                    />
                                )
                            }}
                        />
                    </LineChart>
                </Chart>
            </Card.Content>
        </Card>
    )
}
