'use client'

import type { TooltipProps as RechartsTooltipProps } from 'recharts'
import type { NameType, ValueType } from 'recharts/types/component/DefaultTooltipContent'
import { IconHeartFilled, IconMessageFilled, IconUpload } from '@tabler/icons-react'
import { useMemo } from 'react'
import { AreaChart, Card } from '@/components/ui'

interface CustomTooltipProps extends Partial<RechartsTooltipProps<ValueType, NameType>> {
    active?: boolean
    payload?: {
        name?: string
        value?: number
        dataKey?: string
        color?: string
    }[]
    label?: string
}

function CustomTooltip({ active, payload, label }: CustomTooltipProps) {
    if (!active || !payload?.length) return null

    return (
        <div className='inset-ring inset-ring-fg/20 rounded-2xl bg-bg/10 p-3 text-xs backdrop-blur-2xl'>
            <div className='mb-2 font-medium text-muted-fg'>{label}</div>
            <div className='space-y-1'>
                {payload.map((entry) => (
                    <div className='flex items-center justify-between gap-3' key={entry.dataKey}>
                        <div className='flex items-center gap-2 text-muted-fg capitalize'>
                            {entry.dataKey === 'likes' && <IconHeartFilled style={{ color: entry.color }} />}
                            {entry.dataKey === 'comments' && <IconMessageFilled style={{ color: entry.color }} />}
                            {entry.dataKey === 'shares' && <IconUpload style={{ color: entry.color }} />}
                            <span>{entry.name}</span>
                        </div>
                        <span className='font-mono text-fg tabular-nums'>{entry.value}</span>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default function AreaChartCustomTooltipDemo() {
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
                <AreaChart
                    className='aspect-video h-56 min-h-[224px] sm:h-72 sm:min-h-[288px]'
                    config={{
                        likes: { label: 'Likes' },
                        comments: { label: 'Comments' },
                        shares: { label: 'Shares' }
                    }}
                    data={data}
                    dataKey='day'
                    tooltip={<CustomTooltip />}
                    xAxisProps={{ interval: 0 }}
                />
            </Card.Content>
        </Card>
    )
}
