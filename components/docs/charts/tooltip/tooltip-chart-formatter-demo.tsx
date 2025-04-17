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
        sales: Math.floor(Math.random() * 1000 + 200),
        profit: Math.floor(Math.random() * 500 + 100)
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

export default function TooltipChartFormatterDemo() {
    return (
        <Card>
            <Card.Header
                className='items-center pb-0'
                title='Monthly Sales and Profit'
                description='Visualizing data for the last 24 months'
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
                                    hideLabel
                                    formatter={(value, name) => (
                                        <div className='flex min-w-[130px] items-center text-muted-fg text-xs'>
                                            {chartConfig[name as keyof typeof chartConfig]?.label || name}
                                            <div className='ml-auto flex items-baseline gap-0.5 font-medium font-mono text-foreground tabular-nums'>
                                                {value}
                                                <span className='font-normal text-muted-fg'>USD</span>
                                            </div>
                                        </div>
                                    )}
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
