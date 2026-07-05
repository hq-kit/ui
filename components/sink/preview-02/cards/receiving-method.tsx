"use client"

import { IconPlaceholder } from "@/components/icon-placeholder"
import { Button } from "@/components/ui/button"
import { Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Description, Field, FieldGroup, FieldSet, Label, Legend } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio"

export function ReceivingMethod() {
  return (
    <Card>
      <CardHeader>
        <CardDescription>Payout Preferences</CardDescription>
        <CardTitle>Receiving Method</CardTitle>
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
            <Label htmlFor="account-holder">Account Holder Name</Label>
            <Input defaultValue="Synthetic Horizons Music LLC" id="account-holder" />
          </Field>
          <FieldSet>
            <Legend variant="label">Receiving Method</Legend>
            <RadioGroup
              className="grid grid-cols-1 style-sera:grid-cols-1 items-start gap-3 md:grid-cols-2"
              defaultValue="bank"
            >
              <Label htmlFor="method-bank">
                <Field className="pb-2.5" orientation="horizontal">
                  <RadioGroupItem id="method-bank" value="bank">
                    <Label>Bank Transfer</Label>
                    <Description>SWIFT / IBAN</Description>
                  </RadioGroupItem>
                </Field>
              </Label>
              <Label htmlFor="method-paypal">
                <Field className="pb-2.5" orientation="horizontal">
                  <RadioGroupItem id="method-paypal" value="paypal">
                    <Label>PayPal</Label>
                    <Description className="line-clamp-1">Instant Payout</Description>
                  </RadioGroupItem>
                </Field>
              </Label>
            </RadioGroup>
          </FieldSet>
          <Field>
            <Label htmlFor="iban">IBAN / Account Number</Label>
            <Input id="iban" placeholder="DE89 3704 0044 ...." />
          </Field>
        </FieldGroup>
      </CardContent>
      <CardFooter>
        <Button className="w-full" isDisabled>
          Save Payout Settings
        </Button>
      </CardFooter>
    </Card>
  )
}
