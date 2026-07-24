"use client"

import { Alert } from "@/components/ui/alert"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Field, Label } from "@/components/ui/field"
import { ToggleGroup } from "@/components/ui/toggle-group"

export function BookAppointment() {
  return (
    <Card>
      <Card.Header>
        <Card.Title>Book Appointment</Card.Title>
        <Card.Description>Dr. Sarah Chen · Cardiology</Card.Description>
      </Card.Header>
      <Card.Content className="flex flex-col gap-4">
        <Field.Group>
          <Field>
            <Label slot="label">Available on March 18, 2026</Label>
            <ToggleGroup defaultSelectedKeys={["slot-0"]} selectionMode="multiple" spacing={2}>
              {["9:00 AM", "10:30 AM", "11:00 AM", "1:30 PM"].map((time, index) => (
                <ToggleGroup.Item id={`slot-${index}`} key={time}>
                  {time}
                </ToggleGroup.Item>
              ))}
            </ToggleGroup>
          </Field>
        </Field.Group>
        <Alert>
          <Alert.Title>New patient?</Alert.Title>
          <Alert.Description>Please arrive 15 minutes early.</Alert.Description>
        </Alert>
      </Card.Content>
      <Card.Footer>
        <Button className="w-full">Book Appointment</Button>
      </Card.Footer>
    </Card>
  )
}
