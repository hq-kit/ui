"use client"

import { Bar, BarChart, XAxis } from "recharts"
import { useStyle } from "@/components/style-provider"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { type ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { Item } from "@/components/ui/item"

const chartData = [
  { month: "Dec", amount: 800 },
  { month: "Jan", amount: 1100 },
  { month: "Feb", amount: 900 },
  { month: "Mar", amount: 1300 },
  { month: "Apr", amount: 750 },
  { month: "May", amount: 1400 }
]

const chartConfig = {
  amount: {
    label: "Contribution",
    color: "var(--chart-2)"
  }
} satisfies ChartConfig

export function ContributionHistory() {
  const { style } = useStyle()
  const isRounded = !["lyra", "sera"].includes(style)

  return (
    <Card>
      <Card.Header>
        <Card.Title>Contribution History</Card.Title>
        <Card.Description>Last 6 months of activity</Card.Description>
      </Card.Header>
      <Card.Content>
        <ChartContainer className="h-50 w-full" config={chartConfig}>
          <BarChart accessibilityLayer data={chartData} margin={{ left: 0, right: 0, top: 8, bottom: 0 }}>
            <XAxis axisLine={false} dataKey="month" tickLine={false} tickMargin={8} />
            <ChartTooltip content={<ChartTooltipContent className="min-w-40" hideLabel />} />
            <Bar dataKey="amount" fill="var(--color-amount)" maxBarSize={40} radius={isRounded ? [6, 6, 0, 0] : 0} />
          </BarChart>
        </ChartContainer>
      </Card.Content>
      <Card.Content>
        <div className="grid w-full grid-cols-1 gap-3 md:grid-cols-2">
          <Item className="flex-col items-stretch" variant="muted">
            <Item.Content className="gap-1">
              <Item.Description className="font-medium text-muted-foreground text-xs uppercase tracking-wider">
                Upcoming
              </Item.Description>
              <span className="cn-font-heading font-semibold text-lg">May 25, 2024</span>
              <span className="text-muted-foreground text-sm">$1,000 scheduled</span>
            </Item.Content>
          </Item>
          <Item className="flex-col items-stretch" variant="muted">
            <Item.Content className="gap-1">
              <Item.Description className="font-medium text-muted-foreground text-xs uppercase tracking-wider">
                Auto-Save Plan
              </Item.Description>
              <span className="cn-font-heading font-semibold text-lg">Accelerated</span>
              <span className="text-muted-foreground text-sm">Recurring weekly</span>
            </Item.Content>
          </Item>
        </div>
      </Card.Content>
      <Card.Footer>
        <Button className="w-full">View Full Report</Button>
      </Card.Footer>
    </Card>
  )
}
