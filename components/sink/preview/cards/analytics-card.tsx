"use client"

import { Area, AreaChart } from "recharts"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardAction, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { type ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

const chartData = [
  { month: "January", visitors: 186 },
  { month: "February", visitors: 305 },
  { month: "March", visitors: 237 },
  { month: "April", visitors: 73 },
  { month: "May", visitors: 209 },
  { month: "June", visitors: 214 }
]

const chartConfig = {
  visitors: {
    label: "Visitors",
    color: "var(--chart-1)"
  }
} satisfies ChartConfig

export function AnalyticsCard() {
  return (
    <Card className="mx-auto w-full max-w-sm data-[size=sm]:pb-0" size="sm">
      <CardHeader>
        <CardTitle>Analytics</CardTitle>
        <CardDescription>
          418.2K Visitors <Badge>+10%</Badge>
        </CardDescription>
        <CardAction>
          <Button size="sm" variant="outline">
            View Analytics
          </Button>
        </CardAction>
      </CardHeader>
      <ChartContainer className="aspect-[1/0.35]" config={chartConfig}>
        <AreaChart
          accessibilityLayer
          data={chartData}
          margin={{
            left: 0,
            right: 0
          }}
        >
          <ChartTooltip content={<ChartTooltipContent hideLabel indicator="line" />} cursor={false} defaultIndex={2} />
          <Area
            dataKey="visitors"
            fill="var(--color-visitors)"
            fillOpacity={0.4}
            stroke="var(--color-visitors)"
            type="linear"
          />
        </AreaChart>
      </ChartContainer>
    </Card>
  )
}
