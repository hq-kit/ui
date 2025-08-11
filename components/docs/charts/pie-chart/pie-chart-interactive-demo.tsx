'use client'

import type { Key } from 'react-aria-components'
import { useMemo, useState } from 'react'
import { Card, PieChart, Toggle } from '@/components/ui'

export default function PieChartAudienceSegmentDemo() {
    const data = useMemo(
        () => [
            { name: 'Unique visitors', code: 'UV', value: 2400 },
            { name: 'Page views', code: 'PV', value: 5600 },
            { name: 'Bounce rate', code: 'BR', value: 700 },
            { name: 'Conversion rate', code: 'CR', value: 480 }
        ],
        []
    )

    const defaultCode = data[0]?.code
    const [selected, setSelected] = useState<Set<Key>>(new Set(defaultCode ? [defaultCode] : []))
    const selectedCode = [...selected][0] as string

    return (
        <Card>
            <Card.Header className='text-center'>
                <Card.Title>Audience insights</Card.Title>
                <Card.Description>Engagement metrics by type</Card.Description>
                <Card.Action>
                    <Toggle.Group
                        onSelectionChange={setSelected}
                        selectedKeys={selected}
                        selectionMode='single'
                        size='sm'
                        variant='outline'
                    >
                        {data.map((d) => (
                            <Toggle className='rounded-lg' id={d.code} key={d.code}>
                                {d.code}
                            </Toggle>
                        ))}
                    </Toggle.Group>
                </Card.Action>
            </Card.Header>
            <Card.Content>
                <PieChart
                    className='mx-auto h-64'
                    config={{
                        UV: { label: 'UV' },
                        PV: { label: 'PV' },
                        BR: { label: 'BR' },
                        CR: { label: 'CR' }
                    }}
                    data={data}
                    dataKey='value'
                    nameKey='name'
                    pieProps={{
                        innerRadius: '50%',
                        outerRadius: (dp: { code: string }) => (dp.code === selectedCode ? 110 : 90)
                    }}
                    showLabel
                    valueFormatter={(v) => `${v.toLocaleString()} units`}
                    variant='donut'
                />
            </Card.Content>
        </Card>
    )
}
