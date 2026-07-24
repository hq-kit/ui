"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { FieldGroup, Label } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { Select } from "@/components/ui/select"
import { TextField } from "@/components/ui/text-field"

export function ShippingAddress() {
  return (
    <Card>
      <Card.Header>
        <Card.Title>Shipping Address</Card.Title>
        <Card.Description>Where should we deliver?</Card.Description>
      </Card.Header>
      <Card.Content>
        <FieldGroup>
          <TextField>
            <Label>Street address</Label>
            <Input placeholder="123 Main Street" />
          </TextField>
          <TextField>
            <Label>Apt / Suite</Label>
            <Input placeholder="Apt 4B" />
          </TextField>
          <FieldGroup className="grid grid-cols-2">
            <TextField>
              <Label>City</Label>
              <Input placeholder="San Francisco" />
            </TextField>
            <Select defaultValue="CA">
              <Label>State</Label>
              <Select.Trigger className="w-full">
                <Select.Value />
              </Select.Trigger>
              <Select.Content>
                <Select.Group>
                  <Select.Item id="CA">California</Select.Item>
                  <Select.Item id="NY">New York</Select.Item>
                  <Select.Item id="TX">Texas</Select.Item>
                </Select.Group>
              </Select.Content>
            </Select>
          </FieldGroup>
          <FieldGroup className="grid grid-cols-2">
            <TextField>
              <Label>ZIP Code</Label>
              <Input placeholder="94102" />
            </TextField>
            <Select defaultValue="US">
              <Label>Country</Label>
              <Select.Trigger className="w-full">
                <Select.Value />
              </Select.Trigger>
              <Select.Content>
                <Select.Group>
                  <Select.Item id="US">United States</Select.Item>
                  <Select.Item id="CA">Canada</Select.Item>
                  <Select.Item id="UK">United Kingdom</Select.Item>
                </Select.Group>
              </Select.Content>
            </Select>
          </FieldGroup>
          <Checkbox defaultSelected id="shipping-save">
            Save as default address
          </Checkbox>
        </FieldGroup>
      </Card.Content>
      <Card.Footer>
        <Button size="sm" variant="outline">
          Cancel
        </Button>
        <Button className="ml-auto" size="sm">
          Save Address
        </Button>
      </Card.Footer>
    </Card>
  )
}
