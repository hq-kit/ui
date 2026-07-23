"use client"

import { Bar, BarChart, CartesianGrid, XAxis } from "recharts"
import { useStyle } from "@/components/style-provider"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import {
  type ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent
} from "@/components/ui/chart"

const barChartData = [
  { month: "January", desktop: 186, mobile: 80 },
  { month: "February", desktop: 305, mobile: 200 },
  { month: "March", desktop: 237, mobile: 120 },
  { month: "April", desktop: 73, mobile: 190 },
  { month: "May", desktop: 209, mobile: 130 },
  { month: "June", desktop: 214, mobile: 140 }
]

const barChartConfig = {
  desktop: {
    label: "Desktop",
    color: "var(--chart-1)"
  },
  mobile: {
    label: "Mobile",
    color: "var(--chart-2)"
  }
} satisfies ChartConfig

const desktopTotal = barChartData.reduce((sum, item) => sum + item.desktop, 0)
const mobileTotal = barChartData.reduce((sum, item) => sum + item.mobile, 0)
const desktopDelta = Math.round(((desktopTotal - mobileTotal) / mobileTotal) * 100)
const desktopDeltaPrefix = desktopDelta > 0 ? "+" : ""

export function BarChartCard() {
  const { style } = useStyle()
  const isRounded = !["lyra", "sera"].includes(style)

  return (
    <Card>
      <Card.Header>
        <Card.Title className="text-lg">Traffic channels</Card.Title>
        <Card.Description className="line-clamp-2 text-sm leading-snug">
          Monthly desktop and mobile traffic for the last six months—compare volume and mix across platforms and devices
          at a glance.
        </Card.Description>
      </Card.Header>
      <Card.Content className="flex flex-col gap-4 pt-0">
        <ChartContainer className="max-h-45 w-full" config={barChartConfig}>
          <BarChart accessibilityLayer data={barChartData} margin={{ left: 0, right: 0, top: 8, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis
              axisLine={false}
              dataKey="month"
              tickFormatter={(value) => String(value).slice(0, 3)}
              tickLine={false}
              tickMargin={8}
            />
            <ChartTooltip content={<ChartTooltipContent indicator="dashed" />} cursor={false} />
            <ChartLegend content={<ChartLegendContent />} />
            <Bar dataKey="desktop" fill="var(--color-desktop)" radius={isRounded ? [6, 6, 0, 0] : 0} />
            <Bar dataKey="mobile" fill="var(--color-mobile)" radius={isRounded ? [6, 6, 0, 0] : 0} />
          </BarChart>
        </ChartContainer>
        <div className="grid w-full grid-cols-3 divide-x divide-border/60">
          <div className="px-2 text-center">
            <div className="text-[0.65rem] text-muted-foreground uppercase">Desktop</div>
            <div className="font-medium text-sm tabular-nums">{desktopTotal.toLocaleString()}</div>
          </div>
          <div className="px-2 text-center">
            <div className="text-[0.65rem] text-muted-foreground uppercase">Mobile</div>
            <div className="font-medium text-sm tabular-nums">{mobileTotal.toLocaleString()}</div>
          </div>
          <div className="px-2 text-center">
            <div className="text-[0.65rem] text-muted-foreground uppercase">Mix Delta</div>
            <div className="font-medium text-sm tabular-nums">
              {desktopDeltaPrefix}
              {desktopDelta}%
            </div>
          </div>
        </div>
      </Card.Content>
      <Card.Footer>
        <Button className="w-full">View report</Button>
      </Card.Footer>
    </Card>
  )
}
