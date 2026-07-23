import { IconPlaceholder } from "@/components/icon-placeholder"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Empty } from "@/components/ui/empty"

export function EmptyConnectBank() {
  return (
    <Card>
      <Card.Content>
        <Empty className="p-4">
          <Empty.Media variant="icon">
            <IconPlaceholder
              hugeicons="CreditCardIcon"
              lucide="CreditCardIcon"
              phosphor="CreditCardIcon"
              remixicon="RiBankCardLine"
              tabler="IconCreditCard"
            />
          </Empty.Media>
          <Empty.Header>
            <Empty.Title>Connect Bank</Empty.Title>
            <Empty.Description>
              Link your payout method to receive monthly royalty distributions automatically.
            </Empty.Description>
          </Empty.Header>
          <Empty.Content>
            <Button>Set Up Payouts</Button>
          </Empty.Content>
        </Empty>
      </Card.Content>
    </Card>
  )
}
