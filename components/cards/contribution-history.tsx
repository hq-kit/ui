import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Item } from "@/components/ui/item"

const chartData = [
  { month: "Dec", amount: 800 },
  { month: "Jan", amount: 1100 },
  { month: "Feb", amount: 900 },
  { month: "Mar", amount: 1300 },
  { month: "Apr", amount: 750 }
]

export function ContributionHistory() {
  const maxAmount = Math.max(...chartData.map((item) => item.amount))

  return (
    <Card>
      <Card.Header>
        <Card.Title>Contribution History</Card.Title>
        <Card.Description>Last 6 months of activity</Card.Description>
      </Card.Header>
      <Card.Content>
        <div
          aria-label="Last 6 months of contribution activity"
          className="flex h-50 w-full items-end gap-3"
          role="img"
        >
          {chartData.map((item, index) => (
            <div className="flex h-full flex-1 flex-col justify-end gap-2" key={item.month}>
              <div
                className="data-[index=0]:bg-chart-1 data-[index=1]:bg-chart-2 data-[index=2]:bg-chart-3 data-[index=3]:bg-chart-4 data-[index=4]:bg-chart-5 data-[index=5]:bg-chart-6 min-h-2 rounded-lg"
                data-index={index}
                style={{ height: `${(item.amount / maxAmount) * 100}%` }}
              />
              <span className="text-muted-foreground text-center text-xs">{item.month}</span>
            </div>
          ))}
        </div>
      </Card.Content>
      <Card.Content>
        <div className="grid w-full grid-cols-1 gap-3 xl:grid-cols-2">
          <Item className="flex-col items-stretch" variant="muted">
            <Item.Content className="gap-1">
              <Item.Description className="text-muted-foreground text-xs font-medium tracking-wider uppercase">
                Upcoming
              </Item.Description>
              <span className="cn-font-heading text-base font-semibold">May 2024</span>
              <span className="text-muted-foreground text-sm">Scheduled</span>
            </Item.Content>
          </Item>
          <Item className="hidden flex-col items-stretch xl:flex" variant="muted">
            <Item.Content className="gap-1">
              <Item.Description className="text-muted-foreground text-xs font-medium tracking-wider uppercase">
                Savings Plan
              </Item.Description>
              <span className="cn-font-heading text-base font-semibold">Accelerated</span>
              <span className="text-muted-foreground text-sm">Recurring</span>
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
