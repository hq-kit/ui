'use client'

import { Pie, PieChart, Sector } from 'recharts'
import type { PieSectorDataItem } from 'recharts/types/polar/Pie'

import { Card, Chart, type ChartConfig } from '@/components/ui'

const chartData = [
    { category: 'Electronics', sales: 500, fill: 'var(--color-electronics)' },
    { category: 'Clothing', sales: 300, fill: 'var(--color-clothing)' },
    { category: 'Groceries', sales: 450, fill: 'var(--color-groceries)' },
    { category: 'Furniture', sales: 200, fill: 'var(--color-furniture)' },
    { category: 'Books', sales: 100, fill: 'var(--color-books)' }
]

const chartConfig = {
    sales: {
        label: 'Sales'
    },
    electronics: {
        label: 'Electronics',
        color: 'var(--chart-1)'
    },
    clothing: {
        label: 'Clothing',
        color: 'var(--chart-2)'
    },
    groceries: {
        label: 'Groceries',
        color: 'var(--chart-3)'
    },
    furniture: {
        label: 'Furniture',
        color: 'var(--chart-4)'
    },
    books: {
        label: 'Books',
        color: 'var(--chart-5)'
    }
} satisfies ChartConfig

export default function PieChartDonutActiveDemo() {
    return (
        <Card>
            <Card.Header
                className='items-center pb-0'
                title='Sales Allocation by Category'
                description='Jan - Jun 2024'
            />
            <Card.Content className='flex-1 pb-0'>
                <Chart config={chartConfig} className='mx-auto aspect-square max-h-[250px]'>
                    <PieChart>
                        <Chart.Tooltip cursor={false} content={<Chart.TooltipContent hideLabel />} />
                        <Pie
                            data={chartData}
                            dataKey='sales'
                            nameKey='category'
                            innerRadius={60}
                            strokeWidth={5}
                            activeIndex={0}
                            activeShape={({ outerRadius = 0, ...props }: PieSectorDataItem) => (
                                <Sector {...props} outerRadius={outerRadius + 10} />
                            )}
                        />
                    </PieChart>
                </Chart>
            </Card.Content>
        </Card>
    )
}
