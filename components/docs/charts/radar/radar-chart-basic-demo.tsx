'use client'

import { Card, Chart, type ChartConfig } from '@/components/ui'
import { PolarAngleAxis, PolarGrid, Radar, RadarChart } from 'recharts'

const chartData = [
    { category: 'Electronics', sales: 186 },
    { category: 'Clothing', sales: 305 },
    { category: 'Groceries', sales: 237 },
    { category: 'Furniture', sales: 273 },
    { category: 'Toys', sales: 209 },
    { category: 'Beauty', sales: 214 }
]

const chartConfig = {
    sales: {
        label: 'Sales',
        color: 'var(--chart-1)'
    }
} satisfies ChartConfig

export default function RadarChartBasicDemo() {
    return (
        <Card>
            <Card.Header
                className='items-center pb-4'
                title='By Category'
                description='Sales performance by category (Jan - Jun 2024)'
            />
            <Card.Content>
                <Chart config={chartConfig} className='mx-auto aspect-square max-h-[250px]'>
                    <RadarChart data={chartData}>
                        <Chart.Tooltip cursor={false} content={<Chart.TooltipContent />} />
                        <PolarAngleAxis dataKey='category' />
                        <PolarGrid />
                        <Radar dataKey='sales' fill='var(--color-sales)' fillOpacity={0.6} />
                    </RadarChart>
                </Chart>
            </Card.Content>
        </Card>
    )
}
