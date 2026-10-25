import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { Item, ItemContent } from "@/components/ui/item"
import { Separator } from "@/components/ui/separator"

const netRoyalties = 1248.75
const processingFee = 37.46
const totalClaimable = netRoyalties - processingFee

const formatCurrency = (amount: number) =>
  amount.toLocaleString("en-US", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  })

export function ClaimableBalance() {
  return (
    <Card>
      <Card.Header>
        <Card.Description>Claimable Balance</Card.Description>
        <Card.Title className="text-4xl tabular-nums">${formatCurrency(totalClaimable)}</Card.Title>
        <Badge variant="outline">
          <span className="size-2 rounded-full bg-yellow-500" />
          Pending Setup
        </Badge>
      </Card.Header>
      <Card.Content className="flex flex-1 flex-col justify-end">
        <Item className="flex-col items-stretch" variant="muted">
          <ItemContent className="gap-3">
            <div className="flex items-center justify-between">
              <span className="text-muted-foreground text-sm">Net Royalties</span>
              <span className="font-medium text-sm tabular-nums">${formatCurrency(netRoyalties)}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-muted-foreground text-sm">Processing Fee</span>
              <span className="font-medium text-sm tabular-nums">-${formatCurrency(processingFee)}</span>
            </div>
            <Separator />
            <div className="flex items-center justify-between">
              <span className="text-muted-foreground text-sm">Total Ready to Claim</span>
              <span className="font-semibold text-sm tabular-nums">${formatCurrency(totalClaimable)} USD</span>
            </div>
          </ItemContent>
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
