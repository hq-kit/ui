"use client"

import { Bar, BarChart } from "recharts"
import { IconPlaceholder } from "@/components/icon-placeholder"
import { useStyle } from "@/components/style-provider"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { type ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { Item } from "@/components/ui/item"

const HOLDINGS = [
  {
    name: "Vanguard VIG",
    shares: "450 Shares",
    amount: "$1,842.10",
    data: [
      { q: "Q1", value: 380 },
      { q: "Q2", value: 420 },
      { q: "Q3", value: 390 },
      { q: "Q4", value: 652 }
    ]
  },
  {
    name: "S&P 500 VOO",
    shares: "112 Shares",
    amount: "$928.40",
    data: [
      { q: "Q1", value: 180 },
      { q: "Q2", value: 210 },
      { q: "Q3", value: 320 },
      { q: "Q4", value: 218 }
    ]
  },
  {
    name: "Apple AAPL",
    shares: "85 Shares",
    amount: "$340.00",
    data: [
      { q: "Q1", value: 60 },
      { q: "Q2", value: 70 },
      { q: "Q3", value: 120 },
      { q: "Q4", value: 90 }
    ]
  },
  {
    name: "Realty Income",
    shares: "320 Shares",
    amount: "$1,139.50",
    data: [
      { q: "Q1", value: 240 },
      { q: "Q2", value: 260 },
      { q: "Q3", value: 280 },
      { q: "Q4", value: 360 }
    ]
  }
]

const miniChartConfig = {
  value: {
    label: "Dividend",
    color: "var(--chart-2)"
  }
} satisfies ChartConfig

export function DividendIncome() {
  const { style } = useStyle()
  const isRounded = !["lyra", "sera"].includes(style)

  return (
    <Card>
      <Card.Header>
        <Card.Title>Q2 Dividend Income</Card.Title>
        <Card.Description>Quarterly dividend payouts across your portfolio holdings.</Card.Description>
        <Card.Action>
          <Button className="bg-muted" size="icon-sm" variant="ghost">
            <IconPlaceholder
              hugeicons="Cancel01Icon"
              lucide="XIcon"
              phosphor="XIcon"
              remixicon="RiCloseLine"
              tabler="IconX"
            />
          </Button>
        </Card.Action>
      </Card.Header>
      <Card.Content>
        <Item.Group>
          {HOLDINGS.map((holding) => (
            <Item key={holding.name} variant="muted">
              <Item.Content>
                <Item.Title>{holding.name}</Item.Title>
                <Item.Description>{holding.shares}</Item.Description>
              </Item.Content>
              <ChartContainer className="hidden h-8 w-24 md:block" config={miniChartConfig}>
                <BarChart data={holding.data} margin={{ top: 0, right: 0, bottom: 0, left: 0 }}>
                  <ChartTooltip content={<ChartTooltipContent hideLabel />} cursor={false} />
                  <Bar dataKey="value" fill="var(--color-value)" radius={isRounded ? [3, 3, 0, 0] : 0} />
                </BarChart>
              </ChartContainer>
              <span className="hidden font-semibold text-sm tabular-nums md:block">{holding.amount}</span>
            </Item>
          ))}
        </Item.Group>
      </Card.Content>
    </Card>
  )
}
