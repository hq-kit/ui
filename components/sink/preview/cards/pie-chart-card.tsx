"use client"

import { Label, Pie, PieChart } from "recharts"
import { Badge } from "@/components/ui/badge"
import { Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import {
  type ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent
} from "@/components/ui/chart"
import { Progress } from "@/components/ui/progress"

const pieChartData = [
  { browser: "chrome", visitors: 275, fill: "var(--color-chrome)" },
  { browser: "safari", visitors: 200, fill: "var(--color-safari)" },
  { browser: "firefox", visitors: 287, fill: "var(--color-firefox)" },
  { browser: "edge", visitors: 173, fill: "var(--color-edge)" }
]

const pieChartConfig = {
  visitors: {
    label: "Visitors"
  },
  chrome: {
    label: "Chrome",
    color: "var(--chart-1)"
  },
  safari: {
    label: "Safari",
    color: "var(--chart-2)"
  },
  firefox: {
    label: "Firefox",
    color: "var(--chart-3)"
  },
  edge: {
    label: "Edge",
    color: "var(--chart-4)"
  }
} satisfies ChartConfig

export function PieChartCard() {
  const totalVisitors = pieChartData.reduce((sum, item) => sum + item.visitors, 0)
  const topBrowser = pieChartData.reduce((max, item) => (item.visitors > max.visitors ? item : max))
  const topBrowserShare = Math.round((topBrowser.visitors / totalVisitors) * 100)
  const topBrowserLabel = pieChartConfig[topBrowser.browser as keyof typeof pieChartConfig]?.label ?? "Top"

  return (
    <Card>
      <CardHeader className="pb-0">
        <CardTitle>Browser Share</CardTitle>
        <CardDescription>January - June 2026</CardDescription>
        <CardAction>
          <Badge variant="outline">{topBrowserLabel}</Badge>
        </CardAction>
      </CardHeader>
      <CardContent className="pt-0">
        <ChartContainer className="mx-auto aspect-square max-h-47.5" config={pieChartConfig}>
          <PieChart>
            <ChartTooltip content={<ChartTooltipContent hideLabel />} cursor={false} />
            <Pie data={pieChartData} dataKey="visitors" innerRadius={50} nameKey="browser" strokeWidth={5}>
              <Label
                content={({ viewBox }) => {
                  if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                    return (
                      <text dominantBaseline="middle" fill="red" textAnchor="middle" x={viewBox.cx} y={viewBox.cy}>
                        <tspan className="fill-foreground font-bold text-2xl" x={viewBox.cx} y={viewBox.cy - 16}>
                          {totalVisitors.toLocaleString()}
                        </tspan>
                        <tspan className="fill-muted-foreground text-xs" x={viewBox.cx} y={(viewBox.cy || 0) + 4}>
                          Visitors
                        </tspan>
                      </text>
                    )
                  }
                }}
              />
            </Pie>
            <ChartLegend className="translate-y-2" content={<ChartLegendContent nameKey="browser" />} />
          </PieChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-stretch gap-2">
        <div className="flex items-center text-xs">
          <span className="font-medium">{topBrowserLabel}</span>
          <span className="ml-auto text-muted-foreground tabular-nums">{topBrowserShare}%</span>
        </div>
        <Progress className="**:data-[slot=progress-indicator]:bg-chart-3" value={topBrowserShare} />
      </CardFooter>
    </Card>
  )
}
