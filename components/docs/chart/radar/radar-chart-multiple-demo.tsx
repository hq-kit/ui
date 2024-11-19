'use client'

import { IconTrendingUp } from 'cleon-icons'
import { PolarAngleAxis, PolarGrid, Radar, RadarChart } from 'recharts'

import { Card, Chart, type ChartConfig } from '@/components/ui'

const data = [
    { month: 'Jan', sales: 186, profit: 80 },
    { month: 'Feb', sales: 305, profit: 200 },
    { month: 'Mar', sales: 237, profit: 120 },
    { month: 'Apr', sales: 73, profit: 190 },
    { month: 'May', sales: 209, profit: 130 },
    { month: 'Jun', sales: 214, profit: 140 },
    { month: 'Jul', sales: 186, profit: 80 },
    { month: 'Aug', sales: 305, profit: 200 },
    { month: 'Sep', sales: 237, profit: 120 },
    { month: 'Oct', sales: 73, profit: 190 },
    { month: 'Nov', sales: 209, profit: 130 },
    { month: 'Dec', sales: 214, profit: 140 }
]

const config = {
    sales: {
        label: 'Sales',
        color: 'hsl(var(--primary-chart))'
    },
    profit: {
        label: 'Profit',
        color: 'hsl(var(--secondary-chart))'
    }
} satisfies ChartConfig

export default function RadarChartMultipleDemo() {
    return (
        <Card>
            <Card.Header className='items-center pb-4'>
                <Card.Title>Radar Chart - Multiple</Card.Title>
                <Card.Description>Showing total visitors for last year</Card.Description>
            </Card.Header>
            <Card.Content className='pb-0'>
                <Chart className='min-h-[250px] max-h-[250px] w-full' config={config}>
                    <RadarChart data={data}>
                        <Chart.Tooltip
                            cursor={false}
                            content={<Chart.TooltipContent indicator='line' />}
                        />
                        <PolarAngleAxis dataKey='month' />
                        <PolarGrid />
                        <Radar dataKey='sales' fill='var(--color-sales)' fillOpacity={0.6} />
                        <Radar dataKey='profit' fill='var(--color-profit)' />
                    </RadarChart>
                </Chart>
            </Card.Content>
            <Card.Footer className='flex-col gap-2 text-sm'>
                <div className='flex items-center gap-2 font-medium leading-none'>
                    Profit increased by 5.2% this year <IconTrendingUp />
                </div>
                <div className='flex items-center gap-2 leading-none text-muted-foreground'>
                    January - December 2023
                </div>
            </Card.Footer>
        </Card>
    )
}
