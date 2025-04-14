'use client'

import { IconBadgeDollar, IconShoppingBag } from 'hq-icons'
import { PolarAngleAxis, PolarGrid, Radar, RadarChart } from 'recharts'

import { Card, Chart, type ChartConfig } from '@/components/ui'

const chartData = [
    { month: 'Jan', sales: 186, profit: 80 },
    { month: 'Feb', sales: 305, profit: 200 },
    { month: 'Mar', sales: 237, profit: 120 },
    { month: 'Apr', sales: 73, profit: 190 },
    { month: 'May', sales: 209, profit: 130 },
    { month: 'Jun', sales: 214, profit: 140 },
    { month: 'Jul', sales: 250, profit: 150 },
    { month: 'Aug', sales: 270, profit: 160 },
    { month: 'Sep', sales: 290, profit: 170 },
    { month: 'Oct', sales: 310, profit: 180 },
    { month: 'Nov', sales: 330, profit: 190 },
    { month: 'Dec', sales: 350, profit: 200 }
]

const chartConfig = {
    sales: {
        label: 'Sales',
        color: 'var(--chart-1)',
        icon: IconShoppingBag
    },
    profit: {
        label: 'Profit',
        color: 'var(--chart-2)',
        icon: IconBadgeDollar
    }
} satisfies ChartConfig

export default function RadarChartIconsDemo() {
    return (
        <Card>
            <Card.Header
                className='items-center pb-4'
                title='Annual Sales and Profit'
                description='Performance data for Jan - Dec 2024'
            />
            <Card.Content>
                <Chart config={chartConfig} className='mx-auto aspect-square max-h-[250px]'>
                    <RadarChart
                        data={chartData}
                        margin={{
                            top: -40,
                            bottom: -10
                        }}
                    >
                        <Chart.Tooltip cursor={false} content={<Chart.TooltipContent indicator='line' />} />
                        <PolarAngleAxis dataKey='month' />
                        <PolarGrid />
                        <Radar dataKey='sales' fill='var(--color-sales)' fillOpacity={0.6} />
                        <Radar dataKey='profit' fill='var(--color-profit)' />
                        <Chart.Legend className='mt-8' content={<Chart.LegendContent />} />
                    </RadarChart>
                </Chart>
            </Card.Content>
        </Card>
    )
}
