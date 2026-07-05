"use client"

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Field, FieldGroup, Label } from "@/components/ui/field"
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"

export function BookAppointment() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Book Appointment</CardTitle>
        <CardDescription>Dr. Sarah Chen · Cardiology</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        <FieldGroup>
          <Field>
            <Label>Available on March 18, 2026</Label>
            <ToggleGroup defaultSelectedKeys={["slot-0"]} selectionMode="multiple" spacing={2}>
              {["9:00 AM", "10:30 AM", "11:00 AM", "1:30 PM"].map((time, index) => (
                <ToggleGroupItem id={`slot-${index}`} key={time}>
                  {time}
                </ToggleGroupItem>
              ))}
            </ToggleGroup>
          </Field>
        </FieldGroup>
        <Alert>
          <AlertTitle>New patient?</AlertTitle>
          <AlertDescription>Please arrive 15 minutes early.</AlertDescription>
        </Alert>
      </CardContent>
      <CardFooter>
        <Button className="w-full">Book Appointment</Button>
      </CardFooter>
    </Card>
  )
}
