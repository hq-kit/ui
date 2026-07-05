"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Field, FieldGroup, Label } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export function ShippingAddress() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Shipping Address</CardTitle>
        <CardDescription>Where should we deliver?</CardDescription>
      </CardHeader>
      <CardContent>
        <FieldGroup>
          <Field>
            <Label htmlFor="shipping-street">Street address</Label>
            <Input id="shipping-street" placeholder="123 Main Street" />
          </Field>
          <Field>
            <Label htmlFor="shipping-apt">Apt / Suite</Label>
            <Input id="shipping-apt" placeholder="Apt 4B" />
          </Field>
          <FieldGroup className="grid grid-cols-2">
            <Field>
              <Label htmlFor="shipping-city">City</Label>
              <Input id="shipping-city" placeholder="San Francisco" />
            </Field>
            <Field>
              <Label htmlFor="shipping-state">State</Label>
              <Select defaultValue="CA">
                <SelectTrigger className="w-full" id="shipping-state">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem id="CA">California</SelectItem>
                    <SelectItem id="NY">New York</SelectItem>
                    <SelectItem id="TX">Texas</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </Field>
          </FieldGroup>
          <FieldGroup className="grid grid-cols-2">
            <Field>
              <Label htmlFor="shipping-zip">ZIP Code</Label>
              <Input id="shipping-zip" placeholder="94102" />
            </Field>
            <Field>
              <Label htmlFor="shipping-country">Country</Label>
              <Select defaultValue="US">
                <SelectTrigger className="w-full" id="shipping-country">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem id="US">United States</SelectItem>
                    <SelectItem id="CA">Canada</SelectItem>
                    <SelectItem id="UK">United Kingdom</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </Field>
          </FieldGroup>
          <Field orientation="horizontal">
            <Checkbox defaultSelected id="shipping-save">
              Save as default address
            </Checkbox>
          </Field>
        </FieldGroup>
      </CardContent>
      <CardFooter>
        <Button size="sm" variant="outline">
          Cancel
        </Button>
        <Button className="ml-auto" size="sm">
          Save Address
        </Button>
      </CardFooter>
    </Card>
  )
}
