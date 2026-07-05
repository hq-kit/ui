"use client"

import { useState } from "react"
import { IconPlaceholder } from "@/components/icon-placeholder"
import { Button } from "@/components/ui/button"
import { Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Description, Field, FieldGroup, Label } from "@/components/ui/field"
import { Textarea } from "@/components/ui/input"
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"

export function PayoutThreshold() {
  const [amount, setAmount] = useState([2500])

  return (
    <Card>
      <CardHeader>
        <CardTitle>Payout Threshold</CardTitle>
        <CardDescription>Set the minimum balance required before a payout is triggered.</CardDescription>
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
            <Label htmlFor="preferred-currency">Preferred Currency</Label>
            <Select defaultValue="usd">
              <SelectTrigger className="w-full" id="preferred-currency">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem id="usd">USD — United States Dollar</SelectItem>
                  <SelectItem id="eur">EUR — Euro</SelectItem>
                  <SelectItem id="gbp">GBP — British Pound</SelectItem>
                  <SelectItem id="jpy">JPY — Japanese Yen</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </Field>
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
          <Field>
            <Label htmlFor="payout-notes">Notes</Label>
            <Textarea
              className="min-h-25"
              id="payout-notes"
              placeholder="Add any notes for this payout configuration..."
            />
          </Field>
        </FieldGroup>
      </CardContent>
      <CardFooter>
        <Button className="w-full">Save Threshold</Button>
      </CardFooter>
    </Card>
  )
}
