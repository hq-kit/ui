'use client'

import { useMemo } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { PieChart } from '@/components/ui/chart'

export default function PieChartGapDemo() {
  const data = useMemo(
    () => [
      { name: 'Organic', amount: 1240 },
      { name: 'Paid', amount: 880 },
      { name: 'Referral', amount: 360 },
      { name: 'Social', amount: 220 }
    ],
    []
  )

  return (
    <Card>
      <CardHeader className='text-center'>
        <CardTitle>Traffic source breakdown</CardTitle>
        <CardDescription>Where your website traffic is coming from.</CardDescription>
      </CardHeader>
      <CardContent>
        <PieChart
          config={{
            Organic: { label: 'Organic' },
            Paid: { label: 'Paid' },
            Referral: { label: 'Referral' },
            Social: { label: 'Social' }
          }}
          containerHeight={200}
          data={data}
          dataKey='amount'
          nameKey='name'
          pieProps={{
            paddingAngle: 20,
            startOffset: 30
          }}
          showLabel
          valueFormatter={(v) => `${v} visits`}
          variant='donut'
        />
      </CardContent>
    </Card>
  )
}
