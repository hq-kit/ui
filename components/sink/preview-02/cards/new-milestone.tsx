"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Field, FieldGroup, Label } from "@/components/ui/field"
import { Input } from "@/components/ui/input"

export function NewMilestone() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Set a new milestone</CardTitle>
        <CardDescription>Define your financial target and we&apos;ll help you pace your savings.</CardDescription>
      </CardHeader>
      <CardContent>
        <FieldGroup>
          <Field>
            <Label htmlFor="goal-name">Goal Name</Label>
            <Input id="goal-name" placeholder="e.g. New Car, Home Downpayment" />
          </Field>
          <div className="grid grid-cols-2 gap-3">
            <Field>
              <Label htmlFor="target-amount">Target Amount</Label>
              <Input defaultValue="$15,000" id="target-amount" />
            </Field>
            <Field>
              <Label htmlFor="target-date">Target Date</Label>
              <Input defaultValue="Dec 2025" id="target-date" />
            </Field>
          </div>
        </FieldGroup>
      </CardContent>
      <CardFooter className="flex-col gap-2">
        <Button className="w-full">Create Goal</Button>
        <Button className="w-full" variant="outline">
          Cancel
        </Button>
      </CardFooter>
    </Card>
  )
}
