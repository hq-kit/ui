"use client"

import type { RangeValue } from "react-aria-components"
import type { DateValue } from "react-aria-components/DateField"
import type { TimeValue } from "react-aria-components/TimeField"
import { Time } from "@internationalized/date"
import { type FormEvent, useState } from "react"
import { toast } from "sonner"
import { Button } from "@/components/ui/button"
import { Calendar, RangeCalendar } from "@/components/ui/calendar"
import {
  type CalendarDate,
  DateField,
  DateInput,
  DatePicker,
  DatePickerInput,
  DateRangePicker,
  DateRangePickerInput,
  getLocalTimeZone,
  parseDate,
  TimeField,
  today
} from "@/components/ui/date-field"
import { FieldError, FieldGroup, Form, Label } from "@/components/ui/field"
import { PopoverContent } from "@/components/ui/popover"

export default function FieldDateDemo() {
  const [dob, setDob] = useState<CalendarDate | null>(parseDate(today(getLocalTimeZone()).toString()))
  const [event, setEvent] = useState<CalendarDate | null>(parseDate(today(getLocalTimeZone()).toString()))
  const [eventRange, setEventRange] = useState<RangeValue<DateValue> | null>({
    start: parseDate(today(getLocalTimeZone()).toString()),
    end: parseDate(today(getLocalTimeZone()).add({ days: 7 }).toString())
  })
  const [time, setTime] = useState<TimeValue | null>(new Time(8, 30))
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    toast("Form submitted", {
      description: JSON.stringify(
        {
          dob: dob?.toString(),
          event: event?.toString(),
          eventRange: `${eventRange?.start?.toString()} - ${eventRange?.end?.toString()}`,
          time: time?.toString()
        },
        null,
        2
      )
    })
  }
  return (
    <Form className="w-full" onSubmit={onSubmit}>
      <FieldGroup>
        <DateField isRequired name="dob" onChange={setDob} value={dob}>
          <Label>DOB</Label>
          <DateInput />
          <FieldError />
        </DateField>
        <DatePicker isRequired name="event" onChange={setEvent} value={event}>
          <Label>Event Date</Label>
          <DatePickerInput />
          <FieldError />
          <PopoverContent className="w-auto p-0">
            <Calendar />
          </PopoverContent>
        </DatePicker>
        <DateRangePicker endName="end" isRequired onChange={setEventRange} startName="start" value={eventRange}>
          <Label>Event Date</Label>
          <DateRangePickerInput />
          <FieldError />
          <PopoverContent className="w-auto p-0">
            <RangeCalendar />
          </PopoverContent>
        </DateRangePicker>
        <TimeField isRequired name="time" onChange={setTime} value={time}>
          <Label>Event time</Label>
          <DateInput />
        </TimeField>
        <Button type="submit">Submit</Button>
      </FieldGroup>
    </Form>
  )
}
