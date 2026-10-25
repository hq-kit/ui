import { IconX } from "@tabler/icons-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Item } from "@/components/ui/item"

const HOLDINGS = [
  {
    name: "Vanguard",
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

export function DividendIncome() {
  return (
    <Card>
      <Card.Header>
        <Card.Title>Q2 Dividend Income</Card.Title>
        <Card.Description>Quarterly dividend payouts across your portfolio holdings.</Card.Description>
        <Card.Action>
          <Button aria-label="Dismiss dividend income" className="bg-muted" size="icon-sm" variant="ghost">
            <IconX />
          </Button>
        </Card.Action>
      </Card.Header>
      <Card.Content>
        <Item.Group>
          {HOLDINGS.map((holding) => (
            <Item key={holding.name} role="listitem" variant="muted">
              <Item.Content>
                <Item.Title>{holding.name}</Item.Title>
                <Item.Description>{holding.shares}</Item.Description>
              </Item.Content>
              <div
                aria-label={`${holding.name} quarterly dividends`}
                className="hidden h-8 w-24 items-end gap-1 md:flex"
                role="img"
              >
                {holding.data.map((item) => (
                  <div
                    className="bg-chart-2 min-h-1 flex-1 rounded-t-sm"
                    key={item.q}
                    style={{
                      height: `${(item.value / Math.max(...holding.data.map((point) => point.value))) * 100}%`
                    }}
                  />
                ))}
              </div>
            </Item>
          ))}
        </Item.Group>
      </Card.Content>
    </Card>
  )
}
