'use client'

import { Bar, BarChart, XAxis } from 'recharts'

import { Card, Chart, type ChartConfig } from '@/components/ui'

const chartData = Array.from({ length: 24 }, (_, index) => {
    const date = new Date(new Date().getFullYear() - 1, index).toLocaleDateString('en-US', {
        month: 'short',
        year: 'numeric'
    })
    return {
        date,
        sales: Math.floor(Math.random() * 500 + 200),
        profit: Math.floor(Math.random() * 300 + 100)
    }
})

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

export default function TooltipChartLabelFormatterDemo() {
    return (
        <Card>
            <Card.Header
                className='items-center pb-0'
                title='Monthly Financial Trends'
                description='Sales and profit data for the last 24 months'
            />
            <Card.Content>
                <Chart config={chartConfig}>
                    <BarChart accessibilityLayer data={chartData}>
                        <XAxis
                            dataKey='date'
                            tickLine={false}
                            tickMargin={10}
                            axisLine={false}
                            tickFormatter={(value) => value}
                        />
                        <Bar dataKey='sales' stackId='a' fill='var(--color-sales)' radius={[0, 0, 4, 4]} />
                        <Bar dataKey='profit' stackId='a' fill='var(--color-profit)' radius={[4, 4, 0, 0]} />
                        <Chart.Tooltip
                            content={
                                <Chart.TooltipContent
                                    labelFormatter={(value) => {
                                        return new Date(value).toLocaleDateString('en-US', {
                                            month: 'long',
                                            year: 'numeric'
                                        })
                                    }}
                                />
                            }
                            cursor={false}
                            defaultIndex={1}
                        />
                    </BarChart>
                </Chart>
            </Card.Content>
        </Card>
    )
}
