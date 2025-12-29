'use client'

import type { Key } from 'react-aria-components'
import { useMemo, useState } from 'react'
import { Card, CardAction, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { PieChart } from '@/components/ui/chart'
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group'

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
      <CardHeader className='text-center'>
        <CardTitle>Audience insights</CardTitle>
        <CardDescription>Engagement metrics by type</CardDescription>
        <CardAction>
          <ToggleGroup onSelectionChange={setSelected} selectedKeys={selected} selectionMode='single' size='sm'>
            {data.map((d) => (
              <ToggleGroupItem className='rounded-lg' id={d.code} key={d.code}>
                {d.code}
              </ToggleGroupItem>
            ))}
          </ToggleGroup>
        </CardAction>
      </CardHeader>
      <CardContent>
        <PieChart
          config={{
            UV: { label: 'UV' },
            PV: { label: 'PV' },
            BR: { label: 'BR' },
            CR: { label: 'CR' }
          }}
          containerHeight={250}
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
      </CardContent>
    </Card>
  )
}
