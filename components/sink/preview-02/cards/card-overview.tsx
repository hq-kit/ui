"use client"

import { Bar, BarChart, XAxis } from "recharts"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { type ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

const activityData = [
  { month: "Jan", amount: 40 },
  { month: "Feb", amount: 55 },
  { month: "Mar", amount: 35 },
  { month: "Apr", amount: 60 },
  { month: "May", amount: 45 },
  { month: "Jun", amount: 50 },
  { month: "Jul", amount: 65 },
  { month: "Aug", amount: 40 },
  { month: "Sep", amount: 55 },
  { month: "Oct", amount: 70 },
  { month: "Nov", amount: 45 },
  { month: "Dec", amount: 80 }
]

const chartConfig = {
  amount: {
    label: "Activity",
    color: "var(--chart-2)"
  }
} satisfies ChartConfig

export function CardOverview() {
  return (
    <div className="grid grid-cols-2 gap-3">
      <Card>
        <Card.Content>
          <Card.Description>Card Balance</Card.Description>
          <Card.Title className="text-2xl tabular-nums">US$12.94</Card.Title>
          <Card.Description className="tabular-nums">US$11,337.06 Available</Card.Description>
        </Card.Content>
      </Card>
      <Card className="flex flex-col justify-between">
        <Card.Content className="flex flex-1 flex-col justify-between">
          <div className="flex flex-col gap-1">
            <Card.Description>Payment Due</Card.Description>
            <Card.Title className="text-2xl">1 Apr</Card.Title>
          </div>
          <Button className="mt-3 w-full" size="sm" variant="outline">
            Pay Early
          </Button>
        </Card.Content>
      </Card>
      <Card className="col-span-2">
        <Card.Content className="flex flex-col gap-2">
          <div className="flex items-center justify-between">
            <Card.Description>Yearly Activity</Card.Description>
            <Badge variant="secondary">+US$0.25 Daily Cash</Badge>
          </div>
          <ChartContainer className="h-20 w-full" config={chartConfig}>
            <BarChart data={activityData} margin={{ top: 4, right: 0, bottom: 0, left: 0 }}>
              <XAxis
                axisLine={false}
                className="text-[10px]"
                dataKey="month"
                tickFormatter={(v) => String(v).slice(0, 1)}
                tickLine={false}
                tickMargin={4}
              />
              <ChartTooltip content={<ChartTooltipContent hideLabel />} cursor={false} />
              <Bar dataKey="amount" fill="var(--color-amount)" radius={[3, 3, 0, 0]} />
            </BarChart>
          </ChartContainer>
        </Card.Content>
      </Card>
    </div>
  )
}
