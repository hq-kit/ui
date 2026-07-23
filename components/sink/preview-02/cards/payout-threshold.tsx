"use client"

import { useState } from "react"
import { IconPlaceholder } from "@/components/icon-placeholder"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Description, Field, FieldGroup, Label } from "@/components/ui/field"
import { Textarea } from "@/components/ui/input"
import { Select } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { TextField } from "@/components/ui/text-field"

export function PayoutThreshold() {
  const [amount, setAmount] = useState([2500])

  return (
    <Card>
      <Card.Header>
        <Card.Title>Payout Threshold</Card.Title>
        <Card.Description>Set the minimum balance required before a payout is triggered.</Card.Description>
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
          <Select defaultValue="usd">
            <Label>Preferred Currency</Label>
            <Select.Trigger className="w-full">
              <Select.Value />
            </Select.Trigger>
            <Select.Content>
              <Select.Group>
                <Select.Item id="usd">USD — United States Dollar</Select.Item>
                <Select.Item id="eur">EUR — Euro</Select.Item>
                <Select.Item id="gbp">GBP — British Pound</Select.Item>
                <Select.Item id="jpy">JPY — Japanese Yen</Select.Item>
              </Select.Group>
            </Select.Content>
          </Select>
          <Field>
            <div className="flex items-baseline justify-between">
              <Label htmlFor="min-payout">Minimum Payout Amount</Label>
              <span className="font-semibold text-2xl tabular-nums">${amount[0].toFixed(2)}</span>
            </div>
            <Slider
              id="min-payout"
              maxValue={10000}
              minValue={50}
              onChange={(e) => setAmount(e as number[])}
              step={50}
              value={amount}
            />
            <div className="flex items-center justify-between">
              <Description>$50 (MIN)</Description>
              <Description>$10,000 (MAX)</Description>
            </div>
          </Field>
          <TextField>
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
