"use client"

import type { Key } from "react-aria-components/ComboBox"
import { useState } from "react"
import { Area, AreaChart, CartesianGrid } from "recharts"
import { Card } from "@/components/ui/card"
import { type ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { Combobox } from "@/components/ui/combobox"
import { FieldGroup, Label } from "@/components/ui/field"
import { Separator } from "@/components/ui/separator"

const TICKERS = ["VOO", "VIG", "AAPL", "MSFT", "GOOGL", "AMZN", "TSLA"]

const CHART_DATA: Record<string, { month: string; price: number }[]> = {
  VOO: [
    { month: "Jan", price: 412 },
    { month: "Feb", price: 438 },
    { month: "Mar", price: 395 },
    { month: "Apr", price: 450 },
    { month: "May", price: 420 },
    { month: "Jun", price: 462 }
  ],
  AAPL: [
    { month: "Jan", price: 185 },
    { month: "Feb", price: 210 },
    { month: "Mar", price: 172 },
    { month: "Apr", price: 198 },
    { month: "May", price: 178 },
    { month: "Jun", price: 215 }
  ]
}

const DEFAULT_DATA = [
  { month: "Jan", price: 100 },
  { month: "Feb", price: 118 },
  { month: "Mar", price: 95 },
  { month: "Apr", price: 125 },
  { month: "May", price: 108 },
  { month: "Jun", price: 130 }
]

const chartConfig = {
  price: {
    label: "Price",
    color: "var(--chart-1)"
  }
} satisfies ChartConfig

export function StockPerformance() {
  const [ticker, setTicker] = useState<Key | null>("VOO")

  const data = CHART_DATA[ticker!] ?? DEFAULT_DATA

  return (
    <Card>
      <Card.Header>
        <Card.Title>Stock Performance</Card.Title>
        <Card.Description>6-month price history.</Card.Description>
      </Card.Header>
      <Card.Content className="flex flex-col gap-4">
        <FieldGroup>
          <Combobox
            onChange={(value) => {
              setTicker(value)
            }}
            value={ticker}
          >
            <Label>Ticker</Label>
            <Combobox.Input placeholder="Search ticker..." />
            <Combobox.Content items={TICKERS.map((t) => ({ id: t, value: t }))}>
              {(item) => <Combobox.Item>{item.value}</Combobox.Item>}
            </Combobox.Content>
          </Combobox>
        </FieldGroup>
        <Separator className="style-sera:hidden" />
        <ChartContainer className="h-50 w-full" config={chartConfig}>
          <AreaChart accessibilityLayer data={data} margin={{ left: 0, right: 0, top: 8, bottom: 0 }}>
            <defs>
              <linearGradient id="fillPrice" x1="0" x2="0" y1="0" y2="1">
                <stop offset="0%" stopColor="var(--color-price)" stopOpacity={0.3} />
                <stop offset="100%" stopColor="var(--color-price)" stopOpacity={0.05} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <ChartTooltip content={<ChartTooltipContent hideLabel />} cursor={false} />
            <Area dataKey="price" fill="url(#fillPrice)" stroke="var(--color-price)" strokeWidth={2} type="monotone" />
          </AreaChart>
        </ChartContainer>
      </Card.Content>
    </Card>
  )
}
