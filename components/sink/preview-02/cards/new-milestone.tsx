"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { FieldGroup, Label } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { TextField } from "@/components/ui/text-field"

export function NewMilestone() {
  return (
    <Card>
      <Card.Header>
        <Card.Title>Set a new milestone</Card.Title>
        <Card.Description>Define your financial target and we&apos;ll help you pace your savings.</Card.Description>
      </Card.Header>
      <Card.Content>
        <FieldGroup>
          <TextField>
            <Label>Goal Name</Label>
            <Input placeholder="e.g. New Car, Home Downpayment" />
          </TextField>
          <div className="grid grid-cols-2 gap-3">
            <TextField defaultValue="$15,000">
              <Label>Target Amount</Label>
              <Input />
            </TextField>
            <TextField defaultValue="Dec 2025">
              <Label>Target Date</Label>
              <Input />
            </TextField>
          </div>
        </FieldGroup>
      </Card.Content>
      <Card.Footer className="flex-col gap-2">
        <Button className="w-full">Create Goal</Button>
        <Button className="w-full" variant="outline">
          Cancel
        </Button>
      </Card.Footer>
    </Card>
  )
}
