"use client"
import { IconPlaceholder } from "@/components/icon-placeholder"
import { Button } from "@/components/ui/button"
import { Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Field, FieldGroup, Label } from "@/components/ui/field"
import { InputGroup, InputGroupAddon, InputGroupInput, InputGroupText } from "@/components/ui/input"
import { Item, ItemContent } from "@/components/ui/item"
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"

export function TransferFunds() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Transfer Funds</CardTitle>
        <CardDescription>Move money between your connected accounts.</CardDescription>
        <CardAction>
          <Button className="bg-muted" size="icon-sm" variant="ghost">
            <IconPlaceholder
              hugeicons="Cancel01Icon"
              lucide="XIcon"
              phosphor="XIcon"
              remixicon="RiCloseLine"
              tabler="IconX"
            />
          </Button>
        </CardAction>
      </CardHeader>
      <CardContent>
        <FieldGroup>
          <Field>
            <Label htmlFor="transfer-amount">Amount to Transfer</Label>
            <InputGroup>
              <InputGroupAddon>
                <InputGroupText>$</InputGroupText>
              </InputGroupAddon>
              <InputGroupInput defaultValue="1,200.00" id="transfer-amount" />
            </InputGroup>
          </Field>
          <Field>
            <Label htmlFor="from-account">From Account</Label>
            <Select defaultValue="checking">
              <SelectTrigger className="w-full" id="from-account">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem id="checking">Main Checking (··8402) — $12,450.00</SelectItem>
                  <SelectItem id="business">Business (··7731) — $8,920.00</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </Field>
          <Field>
            <Label htmlFor="to-account">To Account</Label>
            <Select defaultValue="savings">
              <SelectTrigger className="w-full" id="to-account">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem id="savings">High Yield Savings (··1192) — $42,100.00</SelectItem>
                  <SelectItem id="investment">Investment (··3349) — $18,200.00</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </Field>
          <Item className="flex-col items-stretch" variant="muted">
            <ItemContent className="gap-3">
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
            </ItemContent>
          </Item>
        </FieldGroup>
      </CardContent>
      <CardFooter>
        <Button className="w-full">Confirm Transfer</Button>
      </CardFooter>
    </Card>
  )
}
