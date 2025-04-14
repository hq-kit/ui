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
        groceries: Math.floor(Math.random() * 300 + 100),
        utilities: Math.floor(Math.random() * 400 + 200)
    }
})

const chartConfig = {
    groceries: {
        label: 'Groceries',
        color: 'var(--chart-1)'
    },
    utilities: {
        label: 'Utilities',
        color: 'var(--chart-2)'
    }
} satisfies ChartConfig

export default function TooltipChartAdvanceDemo() {
    return (
        <Card>
            <Card.Header
                className='items-center pb-0'
                title='Monthly Expense Breakdown'
                description='Analyzing grocery and utility expenses for the last 24 months'
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
                        <Bar dataKey='groceries' stackId='a' fill='var(--color-groceries)' radius={[0, 0, 4, 4]} />
                        <Bar dataKey='utilities' stackId='a' fill='var(--color-utilities)' radius={[4, 4, 0, 0]} />
                        <Chart.Tooltip
                            content={
                                <Chart.TooltipContent
                                    hideLabel
                                    className='w-[180px]'
                                    formatter={(value, name, item, index) => (
                                        <>
                                            <div
                                                className='size-2.5 shrink-0 rounded-[2px] bg-[--color-bg]'
                                                style={
                                                    {
                                                        '--color-bg': `var(--color-${name})`
                                                    } as React.CSSProperties
                                                }
                                            />
                                            {chartConfig[name as keyof typeof chartConfig]?.label || name}
                                            <div className='text-foreground ml-auto flex items-baseline gap-0.5 font-mono font-medium tabular-nums'>
                                                {value}
                                                <span className='text-muted-fg font-normal'>USD</span>
                                            </div>
                                            {index === 1 && (
                                                <div className='text-foreground mt-1.5 flex basis-full items-center border-t pt-1.5 text-xs font-medium'>
                                                    Total
                                                    <div className='text-foreground ml-auto flex items-baseline gap-0.5 font-mono font-medium tabular-nums'>
                                                        {item.payload.groceries + item.payload.utilities}
                                                        <span className='text-muted-fg font-normal'>USD</span>
                                                    </div>
                                                </div>
                                            )}
                                        </>
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
