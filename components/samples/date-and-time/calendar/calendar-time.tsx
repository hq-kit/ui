"use client"

import { Calendar } from "@/components/ui/calendar"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { DateInput, TimeField } from "@/components/ui/date-field"
import { FieldGroup, Label } from "@/components/ui/field"

export default function CalendarWithTime() {
  return (
    <Card className="mx-auto w-fit" size="sm">
      <CardContent>
        <Calendar className="p-0" />
      </CardContent>
      <CardFooter className="border-t bg-card">
        <FieldGroup>
          <TimeField>
            <Label>Start Time</Label>
            <DateInput />
          </TimeField>
          <TimeField>
            <Label>End Time</Label>
            <DateInput />
          </TimeField>
        </FieldGroup>
      </CardFooter>
    </Card>
  )
}
