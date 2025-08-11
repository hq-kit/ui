'use client'

import type { Key } from 'react-aria-components'
import { useMemo, useState } from 'react'
import { BarChart, Card, Toggle } from '@/components/ui'

export default function BarChartControlledSmart() {
    const [selected, setSelected] = useState<Set<Key>>(new Set(['7d']))
    const selectedKey = Array.from(selected)[0] as string | undefined

    const engagementData = useMemo(() => {
        if (selectedKey === '1m') {
            return Array.from({ length: 4 }, (_, i) => ({
                label: `Week ${i + 1}`,
                likes: Math.floor(400 + Math.random() * 300),
                comments: Math.floor(100 + Math.random() * 100),
                shares: Math.floor(50 + Math.random() * 50)
            }))
        }

        if (selectedKey === '2w') {
            return Array.from({ length: 2 }, (_, i) => ({
                label: `Week ${i + 1}`,
                likes: Math.floor(800 + Math.random() * 400),
                comments: Math.floor(200 + Math.random() * 150),
                shares: Math.floor(100 + Math.random() * 80)
            }))
        }

        const lengthMap: Record<string, number> = { '3d': 3, '7d': 7 }
        const length = lengthMap[selectedKey ?? '7d'] ?? 7

        return Array.from({ length }, (_, i) => ({
            label: `Day ${i + 1}`,
            likes: Math.floor(100 + Math.random() * 300),
            comments: Math.floor(20 + Math.random() * 80),
            shares: Math.floor(10 + Math.random() * 50)
        }))
    }, [selectedKey])

    const showAllTicks = selectedKey === '3d' || selectedKey === '7d'

    return (
        <Card>
            <Card.Header>
                <Card.Title>Engagement</Card.Title>
                <Card.Description>Likes, comments, and shares over a dynamic time range.</Card.Description>
                <Card.Action>
                    <Toggle.Group
                        onSelectionChange={setSelected}
                        selectedKeys={selected}
                        selectionMode='single'
                        size='sm'
                        variant='outline'
                    >
                        <Toggle id='3d'>3d</Toggle>
                        <Toggle id='7d'>7d</Toggle>
                        <Toggle id='2w'>2w</Toggle>
                        <Toggle id='1m'>1m</Toggle>
                    </Toggle.Group>
                </Card.Action>
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
                    dataKey='label'
                    xAxisProps={{ interval: showAllTicks ? 0 : undefined }}
                />
            </Card.Content>
        </Card>
    )
}
