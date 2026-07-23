import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { Item } from "@/components/ui/item"
import { Separator } from "@/components/ui/separator"

export function ClaimableBalance() {
  return (
    <Card>
      <Card.Header>
        <Card.Description>Claimable Balance</Card.Description>
        <Card.Title className="text-5xl tabular-nums">$0.00</Card.Title>
        <Badge variant="outline">
          <span className="size-2 rounded-full bg-yellow-500" />
          Pending Setup
        </Badge>
      </Card.Header>
      <Card.Content className="flex flex-1 flex-col justify-end">
        <Item className="flex-col items-stretch" variant="muted">
          <Item.Content className="gap-3">
            <div className="flex items-center justify-between">
              <span className="text-muted-foreground text-sm">Net Royalties</span>
              <span className="font-medium text-sm tabular-nums">$0.00</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-muted-foreground text-sm">Processing Fee</span>
              <span className="font-medium text-sm tabular-nums">-$0.00</span>
            </div>
            <Separator />
            <div className="flex items-center justify-between">
              <span className="text-muted-foreground text-sm">Total Ready to Claim</span>
              <span className="font-semibold text-sm tabular-nums">$0.00 USD</span>
            </div>
          </Item.Content>
        </Item>
      </Card.Content>
      <Card.Footer>
        <Card.Description>
          Once your bank is connected, balances over $10.00 are automatically eligible for monthly distribution on the
          15th of each month.
        </Card.Description>
      </Card.Footer>
    </Card>
  )
}
