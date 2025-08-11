'use client'

import type { LegendPayload } from 'recharts'
import { IconHeartFilled, IconMessageFilled, IconUpload } from '@tabler/icons-react'
import { useMemo } from 'react'
import { BarChart, Card, CardFooter } from '@/components/ui'

function CustomLegend({ payload }: { payload?: ReadonlyArray<LegendPayload> }) {
    const icons: Record<string, React.ReactNode> = {
        likes: <IconHeartFilled />,
        comments: <IconMessageFilled />,
        shares: <IconUpload />
    }

    return (
        <CardFooter className='flex justify-center gap-4 pt-6 text-sm'>
            {payload?.map((item) => {
                const key = item.dataKey?.toString() ?? ''
                return (
                    <div className='flex items-center gap-2' key={key}>
                        <span style={{ color: item.color }}>{icons[key]}</span>
                        <span>{item.value}</span>
                    </div>
                )
            })}
        </CardFooter>
    )
}

export default function BarChartCustomLegendDemo() {
    const data = useMemo(
        () =>
            Array.from({ length: 7 }, (_, i) => ({
                day: `Day ${i + 1}`,
                likes: Math.floor(100 + Math.random() * 300),
                comments: Math.floor(20 + Math.random() * 80),
                shares: Math.floor(10 + Math.random() * 50)
            })),
        []
    )

    return (
        <Card>
            <Card.Header>
                <Card.Title>Engagement last 7d</Card.Title>
                <Card.Description>Likes, comments, and shares for the recent week.</Card.Description>
            </Card.Header>
            <Card.Content>
                <BarChart
                    className='aspect-video h-56 min-h-[224px] sm:h-72 sm:min-h-[288px]'
                    config={{
                        likes: { label: 'Likes' },
                        comments: { label: 'Comments' },
                        shares: { label: 'Shares' }
                    }}
                    data={data}
                    dataKey='day'
                    legend={<CustomLegend />}
                    xAxisProps={{ interval: 0 }}
                />
            </Card.Content>
        </Card>
    )
}
