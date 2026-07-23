"use client"
import { IconPlaceholder } from "@/components/icon-placeholder"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { FieldGroup, Label } from "@/components/ui/field"
import { InputGroup } from "@/components/ui/input"
import { Item } from "@/components/ui/item"
import { Select } from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import { TextField } from "@/components/ui/text-field"

export function TransferFunds() {
  return (
    <Card>
      <Card.Header>
        <Card.Title>Transfer Funds</Card.Title>
        <Card.Description>Move money between your connected accounts.</Card.Description>
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
          <TextField defaultValue="1,200.00">
            <Label>Amount to Transfer</Label>
            <InputGroup>
              <InputGroup.Addon>
                <InputGroup.Text>$</InputGroup.Text>
              </InputGroup.Addon>
              <InputGroup.Input />
            </InputGroup>
          </TextField>
          <Select className="w-full" defaultValue="checking">
            <Label>From Account</Label>
            <Select.Trigger>
              <Select.Value />
            </Select.Trigger>
            <Select.Content>
              <Select.Group>
                <Select.Item id="checking">Main Checking (··8402) — $12,450.00</Select.Item>
                <Select.Item id="business">Business (··7731) — $8,920.00</Select.Item>
              </Select.Group>
            </Select.Content>
          </Select>
          <Select className="w-full" defaultValue="savings">
            <Label>To Account</Label>
            <Select.Trigger>
              <Select.Value />
            </Select.Trigger>
            <Select.Content>
              <Select.Group>
                <Select.Item id="savings">High Yield Savings (··1192) — $42,100.00</Select.Item>
                <Select.Item id="investment">Investment (··3349) — $18,200.00</Select.Item>
              </Select.Group>
            </Select.Content>
          </Select>
          <Item className="flex-col items-stretch" variant="muted">
            <Item.Content className="gap-3">
              <div className="flex items-center justify-between">
                <span className="text-muted-foreground text-sm">Estimated arrival</span>
                <span className="font-medium text-sm">Today, Apr 14</span>
              </div>
              <Separator />
              <div className="flex items-center justify-between">
                <span className="text-muted-foreground text-sm">Transaction fee</span>
                <span className="font-medium text-sm tabular-nums">$0.00</span>
              </div>
              <Separator />
              <div className="flex items-center justify-between">
                <span className="font-medium text-sm">Total amount</span>
                <span className="font-semibold text-sm tabular-nums">$1,200.00</span>
              </div>
            </Item.Content>
          </Item>
        </FieldGroup>
      </Card.Content>
      <Card.Footer>
        <Button className="w-full">Confirm Transfer</Button>
      </Card.Footer>
    </Card>
  )
}
