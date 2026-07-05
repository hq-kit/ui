"use client"

import { Bar, BarChart, XAxis } from "recharts"
import { useStyle } from "@/components/style-provider"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { type ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { Item, ItemContent, ItemDescription } from "@/components/ui/item"

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
      <CardHeader>
        <CardTitle>Contribution History</CardTitle>
        <CardDescription>Last 6 months of activity</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer className="h-50 w-full" config={chartConfig}>
          <BarChart accessibilityLayer data={chartData} margin={{ left: 0, right: 0, top: 8, bottom: 0 }}>
            <XAxis axisLine={false} dataKey="month" tickLine={false} tickMargin={8} />
            <ChartTooltip content={<ChartTooltipContent className="min-w-40" hideLabel />} />
            <Bar dataKey="amount" fill="var(--color-amount)" maxBarSize={40} radius={isRounded ? [6, 6, 0, 0] : 0} />
          </BarChart>
        </ChartContainer>
      </CardContent>
      <CardContent>
        <div className="grid w-full grid-cols-1 gap-3 md:grid-cols-2">
          <Item className="flex-col items-stretch" variant="muted">
            <ItemContent className="gap-1">
              <ItemDescription className="font-medium text-muted-foreground text-xs uppercase tracking-wider">
                Upcoming
              </ItemDescription>
              <span className="cn-font-heading font-semibold text-lg">May 25, 2024</span>
              <span className="text-muted-foreground text-sm">$1,000 scheduled</span>
            </ItemContent>
          </Item>
          <Item className="flex-col items-stretch" variant="muted">
            <ItemContent className="gap-1">
              <ItemDescription className="font-medium text-muted-foreground text-xs uppercase tracking-wider">
                Auto-Save Plan
              </ItemDescription>
              <span className="cn-font-heading font-semibold text-lg">Accelerated</span>
              <span className="text-muted-foreground text-sm">Recurring weekly</span>
            </ItemContent>
          </Item>
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full">View Full Report</Button>
      </CardFooter>
    </Card>
  )
}
