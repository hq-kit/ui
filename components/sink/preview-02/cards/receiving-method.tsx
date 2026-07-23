import { IconPlaceholder } from "@/components/icon-placeholder"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Description, FieldGroup, Label } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { Radio, RadioGroup } from "@/components/ui/radio"
import { TextField } from "@/components/ui/text-field"

export function ReceivingMethod() {
  return (
    <Card>
      <Card.Header>
        <Card.Description>Payout Preferences</Card.Description>
        <Card.Title>Receiving Method</Card.Title>
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
        <FieldGroup>
          <TextField defaultValue="Synthetic Horizons Music LLC">
            <Label>Account Holder Name</Label>
            <Input />
          </TextField>
          <RadioGroup
            className="grid grid-cols-1 style-sera:grid-cols-1 items-start gap-3 md:grid-cols-2"
            defaultValue="bank"
          >
            <Label className="col-span-full">Receiving Method</Label>
            <Radio id="method-bank" value="bank">
              <Label>Bank Transfer</Label>
              <Description>SWIFT / IBAN</Description>
            </Radio>
            <Radio id="method-paypal" value="paypal">
              <Label>PayPal</Label>
              <Description className="line-clamp-1">Instant Payout</Description>
            </Radio>
          </RadioGroup>
          <TextField>
            <Label>IBAN / Account Number</Label>
            <Input placeholder="DE89 3704 0044 ...." />
          </TextField>
        </FieldGroup>
      </Card.Content>
      <Card.Footer>
        <Button className="w-full" isDisabled>
          Save Payout Settings
        </Button>
      </Card.Footer>
    </Card>
  )
}
