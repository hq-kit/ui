"use client"
import { IconX } from "@tabler/icons-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Description, Field, FieldGroup, Label } from "@/components/ui/field"
import { Textarea } from "@/components/ui/input"
import { Progress } from "@/components/ui/progress"
import { Select } from "@/components/ui/select"
import { TextField } from "@/components/ui/text-field"

const CURRENCIES = [
  { label: "USD — United States Dollar", id: "usd" },
  { label: "EUR — Euro", id: "eur" },
  { label: "GBP — British Pound", id: "gbp" },
  { label: "JPY — Japanese Yen", id: "jpy" }
]

export function PayoutThreshold() {
  return (
    <Card>
      <Card.Header>
        <Card.Title>Payout Threshold</Card.Title>
        <Card.Description>Set the minimum balance required before a payout is triggered.</Card.Description>
        <Card.Action>
          <Button aria-label="Dismiss payout threshold" className="bg-muted" size="icon-sm" variant="ghost">
            <IconX />
          </Button>
        </Card.Action>
      </Card.Header>
      <Card.Content>
        <FieldGroup>
          <Select defaultValue="usd" name="preferred-currency">
            <Label>Preferred Currency</Label>
            <Select.Trigger className="w-full" id="preferred-currency">
              <Select.Value />
            </Select.Trigger>
            <Select.Content>
              <Select.Group items={CURRENCIES}>{(item) => <Select.Item>{item.label}</Select.Item>}</Select.Group>
            </Select.Content>
          </Select>
          <Field>
            <div className="flex items-baseline justify-between">
              <Label elementType="span">Minimum Payout Amount</Label>
              <span className="text-2xl font-semibold tabular-nums">$2500.00</span>
            </div>
            <Progress aria-labelledby="min-payout-label" aria-valuetext="$2,500 of $10,000" value={25} />
            <div className="flex items-center justify-between">
              <Description>$50 (MIN)</Description>
              <Description>$10,000 (MAX)</Description>
            </div>
          </Field>
          <TextField name="payout-notes">
            <Label>Notes</Label>
            <Textarea className="min-h-25" placeholder="Add any notes for this payout configuration..." />
          </TextField>
        </FieldGroup>
      </Card.Content>
      <Card.Footer>
        <Button className="w-full">Save Threshold</Button>
      </Card.Footer>
    </Card>
  )
}
