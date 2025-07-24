'use client'

import { Card, Chart, type ChartConfig } from '@/components/ui'
import { PolarAngleAxis, PolarGrid, Radar, RadarChart } from 'recharts'

const chartData = [
    { month: 'Jan', revenue: 186 },
    { month: 'Feb', revenue: 305 },
    { month: 'Mar', revenue: 237 },
    { month: 'Apr', revenue: 203 },
    { month: 'May', revenue: 209 },
    { month: 'Jun', revenue: 214 },
    { month: 'Jul', revenue: 220 },
    { month: 'Aug', revenue: 250 },
    { month: 'Sep', revenue: 270 },
    { month: 'Oct', revenue: 290 },
    { month: 'Nov', revenue: 310 },
    { month: 'Dec', revenue: 330 }
]

const chartConfig = {
    revenue: {
        label: 'Revenue',
        color: 'var(--chart-1)'
    }
} satisfies ChartConfig

export default function Component() {
    return (
        <Card>
            <Card.Header
                className='items-center pb-4'
                title='Monthly Revenue Breakdown'
                description='Revenue data displayed for Jan - Dec 2024'
            />
            <Card.Content>
                <Chart config={chartConfig} className='mx-auto aspect-square max-h-[250px]'>
                    <RadarChart data={chartData}>
                        <Chart.Tooltip cursor={false} content={<Chart.TooltipContent hideLabel />} />
                        <PolarGrid gridType='circle' radialLines={false} />
                        <PolarAngleAxis dataKey='month' />
                        <Radar
                            dataKey='revenue'
                            fill='var(--color-revenue)'
                            fillOpacity={0.6}
                            dot={{
                                r: 4,
                                fillOpacity: 1
                            }}
                        />
                    </RadarChart>
                </Chart>
            </Card.Content>
        </Card>
    )
}
