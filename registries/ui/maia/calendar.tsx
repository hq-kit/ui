"use client"

import type { ComponentPropsWithRef } from "react"
import { getLocalTimeZone, today } from "@internationalized/date"
import {
  CalendarCell,
  CalendarGrid,
  CalendarGridBody,
  CalendarHeaderCell,
  CalendarHeading,
  CalendarMonthPicker,
  type CalendarProps,
  CalendarYearPicker,
  type DateValue,
  Calendar as RACCalendar,
  CalendarGridHeader as RACCalendarGridHeader
} from "react-aria-components/Calendar"
import { composeRenderProps } from "react-aria-components/composeRenderProps"
import { RangeCalendar as RACRangeCalendar, type RangeCalendarProps } from "react-aria-components/RangeCalendar"
import { IconPlaceholder } from "@/components/icon-placeholder"
import { cn } from "@/lib/utils"
import { Button } from "./button"
import { Select } from "./select"

const Calendar = <T extends DateValue>({
  visibleDuration = { months: 1 },
  withPicker = true,
  ...props
}: CalendarProps<T> & { withPicker?: boolean }) => {
  const now = today(getLocalTimeZone())
  const months = visibleDuration?.months || 1
  return (
    <RACCalendar
      {...props}
      className={composeRenderProps(props.className, (className) =>
        cn(
          "p-3 [--cell-radius:var(--radius-4xl)] [--cell-size:--spacing(8)] group/calendar grid w-fit place-items-center bg-background in-data-[slot=card-content]:bg-transparent in-data-[slot=popover-content]:bg-transparent",
          className
        )
      )}
      data-slot="calendar"
    >
      <div className="flex items-start gap-2">
        {Array.from({ length: months }).map((_, i) => (
          <div className="grid place-items-center" key={i}>
            <CalendarHeader index={i} picker={withPicker} visibleMonths={months} />
            <CalendarGrid key={i} offset={{ months: i }}>
              <CalendarGridHeader />
              <CalendarGridBody>
                {(date) => (
                  <CalendarCell
                    className={cn([
                      "relative mt-2 flex size-(--cell-size) shrink-0 cursor-pointer items-center justify-center rounded-(--cell-radius) outside-month:text-muted-foreground text-sm outline-hidden hover:bg-accent/90 hover:text-accent-foreground data-pressed:bg-accent data-pressed:text-accent-foreground",
                      "data-selected:data-invalid:bg-destructive data-selected:data-invalid:text-destructive-foreground data-selected:bg-primary data-selected:text-primary-foreground",
                      "focus-visible:ring-2 focus-visible:ring-ring/50",
                      "aria-disabled:pointer-events-none aria-disabled:opacity-50 data-outside-month:pointer-events-none data-outside-month:opacity-50",
                      date.compare(now) === 0 &&
                        "after:pointer-events-none after:absolute after:inset-s-1/2 after:bottom-1 after:z-10 after:size-1 after:-translate-x-1/2 after:rounded-(--cell-radius) after:bg-primary data-selected:after:bg-primary-foreground"
                    ])}
                    date={date}
                  />
                )}
              </CalendarGridBody>
            </CalendarGrid>
          </div>
        ))}
      </div>
    </RACCalendar>
  )
}

const RangeCalendar = <T extends DateValue>({
  visibleDuration = { months: 1 },
  withPicker = true,
  ...props
}: RangeCalendarProps<T> & { withPicker?: boolean }) => {
  const now = today(getLocalTimeZone())
  const months = visibleDuration?.months || 1
  return (
    <RACRangeCalendar
      data-slot="calendar"
      visibleDuration={visibleDuration}
      {...props}
      className={composeRenderProps(props.className, (className) =>
        cn(
          "p-3 [--cell-radius:var(--radius-4xl)] [--cell-size:--spacing(8)] group/calendar grid w-fit place-items-center bg-background in-data-[slot=card-content]:bg-transparent in-data-[slot=popover-content]:bg-transparent",
          className
        )
      )}
    >
      <div className="flex items-start gap-2">
        {Array.from({ length: months }).map((_, i) => (
          <div className="grid place-items-center" key={i}>
            <CalendarHeader index={i} picker={withPicker} visibleMonths={months} />
            <CalendarGrid key={i} offset={{ months: i }}>
              <CalendarGridHeader />
              <CalendarGridBody>
                {(date) => (
                  <CalendarCell
                    className={cn([
                      "relative mt-2 flex size-(--cell-size) shrink-0 cursor-pointer items-center justify-center rounded-(--cell-radius) outside-month:text-muted-foreground text-sm outline-hidden hover:bg-accent/90 hover:text-accent-foreground data-pressed:bg-accent data-pressed:text-accent-foreground",
                      "data-selection-start:data-invalid:bg-destructive data-selection-start:data-invalid:text-destructive-foreground data-selection-start:bg-primary data-selection-start:text-primary-foreground",
                      "data-selection-end:data-invalid:bg-destructive data-selection-end:data-invalid:text-destructive-foreground data-selection-end:bg-primary data-selection-end:text-primary-foreground",
                      "data-selected:data-selection-end:rounded-r-(--cell-radius) data-selected:data-selection-start:rounded-l-(--cell-radius) data-selected:rounded-none data-selected:bg-accent data-selected:text-accent-foreground",
                      "focus-visible:ring-2 focus-visible:ring-ring/50",
                      "disabled:pointer-events-none disabled:opacity-50 aria-disabled:pointer-events-none aria-disabled:opacity-50",
                      date.compare(now) === 0 &&
                        "after:pointer-events-none after:absolute after:inset-s-1/2 after:bottom-1 after:mt-1 after:size-1 after:-translate-x-1/2 after:rounded-(--cell-radius) after:bg-primary data-selected:data-selection-end:after:bg-primary-foreground data-selected:data-selection-start:after:bg-primary-foreground"
                    ])}
                    date={date}
                  />
                )}
              </CalendarGridBody>
            </CalendarGrid>
          </div>
        ))}
      </div>
    </RACRangeCalendar>
  )
}

const CalendarHeader = ({
  className,
  picker = false,
  index,
  visibleMonths = 1,
  ...props
}: ComponentPropsWithRef<"header"> & { picker?: boolean; index: number; visibleMonths?: number }) => (
  <header
    className={cn(
      "flex w-full items-center justify-between px-1 pt-1 pb-4",
      "ltr:flex-row rtl:flex-row-reverse",
      className
    )}
    slot="calendar-header"
    {...props}
  >
    {index === 0 && (
      <Button className="size-(--cell-size)" slot="previous" variant="ghost">
        <IconPlaceholder
          hugeicons="ArrowLeft01Icon"
          lucide="ChevronLeftIcon"
          phosphor="CaretLeftIcon"
          remixicon="RiArrowLeftSLine"
          tabler="IconChevronLeft"
        />
      </Button>
    )}

    {picker && visibleMonths === 1 ? (
      <div className="flex items-center gap-1">
        <CalendarMonthPicker>
          {(values) => (
            <Select className="w-min" {...values}>
              <Select.Trigger>
                <Select.Value />
              </Select.Trigger>
              <Select.Content items={values.items}>
                {(item) => <Select.Item>{item.formatted}</Select.Item>}
              </Select.Content>
            </Select>
          )}
        </CalendarMonthPicker>
        <CalendarYearPicker>
          {(values) => (
            <Select className="w-min" {...values}>
              <Select.Trigger>
                <Select.Value />
              </Select.Trigger>
              <Select.Content items={values.items}>
                {(item) => <Select.Item>{item.formatted}</Select.Item>}
              </Select.Content>
            </Select>
          )}
        </CalendarYearPicker>
      </div>
    ) : (
      <CalendarHeading
        className="flex h-(--cell-size) w-full items-center justify-center text-center font-normal text-sm"
        data-slot="calendar-heading"
        offset={{ months: index }}
      />
    )}
    {index === visibleMonths - 1 && (
      <Button className="size-(--cell-size)" slot="next" variant="ghost">
        <IconPlaceholder
          hugeicons="ArrowRight01Icon"
          lucide="ChevronRightIcon"
          phosphor="CaretRightIcon"
          remixicon="RiArrowRightSLine"
          tabler="IconChevronRight"
        />
      </Button>
    )}
  </header>
)

const CalendarGridHeader = () => {
  return (
    <RACCalendarGridHeader>
      {(day) => (
        <CalendarHeaderCell className="pb-2 text-center font-semibold text-muted-foreground text-sm sm:px-0 sm:py-0.5 lg:text-xs">
          {day}
        </CalendarHeaderCell>
      )}
    </RACCalendarGridHeader>
  )
}

export { Calendar, RangeCalendar }
