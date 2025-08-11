'use client'

import { useMemo } from 'react'
import { BarChart, Card } from '@/components/ui'

type EngagementPoint = {
    day: string
    likes: number
    comments: number
    shares: number
}

export default function BarChartDemo() {
    const engagementData: EngagementPoint[] = useMemo(
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
                <Card.Description>
                    Tracks likes, comments, and shares during the most recent 7-day period.
                </Card.Description>
            </Card.Header>
            <Card.Content>
                <BarChart
                    className='aspect-video h-56 min-h-[224px] sm:h-72 sm:min-h-[288px]'
                    config={{
                        likes: { label: 'Likes' },
                        comments: { label: 'Comments' },
                        shares: { label: 'Shares' }
                    }}
                    data={engagementData}
                    dataKey='day'
                    xAxisProps={{ interval: 0 }}
                />
            </Card.Content>
        </Card>
    )
}
