'use client'

import React from 'react'

import { IconChevronLeft, IconChevronRight, IconMinus, IconPlus } from 'hq-icons'
import { useDateFormatter } from 'react-aria'
import {
    CalendarCell,
    CalendarGrid,
    CalendarGridBody,
    CalendarGridHeader as CalendarGridHeaderPrimitive,
    CalendarHeaderCell,
    Calendar as CalendarPrimitive,
    type CalendarProps as CalendarPrimitiveProps,
    CalendarStateContext,
    type DateValue,
    Group,
    Heading,
    Input,
    ListBox,
    ListBoxItem,
    NumberField,
    RangeCalendarStateContext,
    Text,
    useLocale
} from 'react-aria-components'
import { CalendarState, RangeCalendarState } from 'react-stately'
import { tv } from 'tailwind-variants'

import { Button } from './button'
import { Popover } from './popover'
import { cr, ctr, focusRing } from './utils'

const cellStyles = tv({
    extend: focusRing,
    base: 'flex size-10 cursor-default items-center justify-center rounded-lg tabular-nums sm:size-9 lg:text-sm',
    variants: {
        isSelected: {
            false: 'text-fg data-hovered:bg-primary/10 data-pressed:bg-primary/10',
            true: 'bg-primary text-primary-fg'
        },
        isDisabled: {
            true: 'text-muted-fg/70'
        },
        isInvalid: {
            true: 'bg-danger text-danger-fg'
        }
    }
})

interface CalendarProps<T extends DateValue>
    extends Omit<CalendarPrimitiveProps<T>, 'visibleDuration'> {
    errorMessage?: string
    className?: string
}

const Calendar = <T extends DateValue>({ errorMessage, className, ...props }: CalendarProps<T>) => {
    return (
        <CalendarPrimitive
            className={ctr(className, 'max-w-[17.5rem] sm:max-w-[15.8rem]')}
            {...props}
        >
            <CalendarHeader type='calendar' />
            <CalendarGrid className='**:[td]border **:[td]:border-collapse **:[td]:px-0 **:[td]:py-[1.5px]'>
                <CalendarGridHeader />
                <CalendarGridBody>
                    {(date) => (
                        <CalendarCell
                            date={date}
                            className={cr(className, (className, renderProps) =>
                                cellStyles({
                                    ...renderProps,
                                    className
                                })
                            )}
                        />
                    )}
                </CalendarGridBody>
            </CalendarGrid>
            {errorMessage && (
                <Text slot='errorMessage' className='text-danger text-sm'>
                    {errorMessage}
                </Text>
            )}
        </CalendarPrimitive>
    )
}

const calendarHeaderStyles = tv({
    slots: {
        header: 'flex w-full justify-center gap-1 px-1 pb-5 sm:pb-4',
        heading: 'text-muted-fg mr-2 flex-1 space-x-1 text-left font-medium tracking-tight',
        calendarGridHeaderCell: 'text-muted-fg text-sm font-semibold lg:text-xs'
    }
})

const { header, heading, calendarGridHeaderCell } = calendarHeaderStyles()

const CalendarHeader = ({
    className,
    type,
    ...props
}: { type: 'calendar' | 'range-calendar' } & React.HTMLAttributes<HTMLDivElement>) => {
    const { direction } = useLocale()
    const stateContext = type === 'calendar' ? CalendarStateContext : RangeCalendarStateContext
    const state = React.useContext(
        stateContext as React.Context<CalendarState | RangeCalendarState>
    )

    return (
        <header className={header({ className })} {...props}>
            {state ? (
                <div className={heading()}>
                    <MonthDropdown {...state} />
                    <YearDropdown {...state} />
                </div>
            ) : (
                <Heading className={heading()} />
            )}
            <div className='flex items-center gap-1'>
                <Button
                    size='icon'
                    className='**:data-[slot=icon]:text-fg size-8 sm:size-7'
                    shape='circle'
                    variant='ghost'
                    slot='previous'
                >
                    {direction === 'rtl' ? <IconChevronRight /> : <IconChevronLeft aria-hidden />}
                </Button>
                <Button
                    size='icon'
                    className='**:data-[slot=icon]:text-fg size-8 sm:size-7'
                    shape='circle'
                    variant='ghost'
                    slot='next'
                >
                    {direction === 'rtl' ? <IconChevronLeft /> : <IconChevronRight />}
                </Button>
            </div>
        </header>
    )
}

const CalendarGridHeader = () => {
    return (
        <CalendarGridHeaderPrimitive>
            {(day) => (
                <CalendarHeaderCell className={calendarGridHeaderCell()}>{day}</CalendarHeaderCell>
            )}
        </CalendarGridHeaderPrimitive>
    )
}

const MonthDropdown = (state: CalendarState | RangeCalendarState) => {
    const { timeZone, focusedDate, setFocusedDate } = state

    const formatter = useDateFormatter({
        month: 'long',
        timeZone: timeZone
    })

    const months: string[] = []
    const numMonths = focusedDate.calendar.getMonthsInYear(focusedDate)
    for (let i = 1; i <= numMonths; i++) {
        const date = focusedDate.set({ month: i })
        months.push(formatter.format(date.toDate(timeZone)))
    }

    const onChange = (e: number) => {
        const date = focusedDate.set({ month: e })
        setFocusedDate(date)
    }

    return (
        <Popover>
            <Popover.Trigger
                className='data-focus-visible:ring-primary relative inline rounded-lg text-left ring-offset-2 outline-hidden data-focus-visible:ring-1'
                slot={null}
            >
                {months[focusedDate.month - 1]}
            </Popover.Trigger>
            <Popover.Content
                className='min-w-0'
                aria-label='Month'
                shouldCloseOnInteractOutside={() => false}
            >
                <Popover.Body>
                    <ListBox
                        autoFocus
                        aria-labelledby='Month'
                        selectionMode='single'
                        layout='grid'
                        className='grid grid-cols-4 gap-1 pt-4 outline-hidden'
                        // @ts-expect-error unknown-type
                        onSelectionChange={(e) => onChange(e.currentKey)}
                        selectedKeys={[focusedDate.month]}
                        items={months.map((month, i) => ({ value: i + 1, formatted: month }))}
                    >
                        {(item) => (
                            <ListBoxItem
                                className='data-hovered:bg-primary/10 data-selected:bg-primary data-selected:text-primary-fg data-pressed:bg-primary/20 data-focus-visible:inset-ring-primary data-focus-visible:bg-primary/10 cursor-pointer rounded-lg p-2 text-center font-medium outline-hidden data-focus-visible:inset-ring'
                                id={item.value}
                                textValue={item.formatted}
                            >
                                {item.formatted.substring(0, 3).toUpperCase()}
                            </ListBoxItem>
                        )}
                    </ListBox>
                </Popover.Body>
                <Popover.Footer className='sm:pt-2'>
                    <Popover.Close type='button' className='w-full'>
                        Confirm
                    </Popover.Close>
                </Popover.Footer>
            </Popover.Content>
        </Popover>
    )
}

const YearDropdown = (state: CalendarState | RangeCalendarState) => {
    const { timeZone, focusedDate, setFocusedDate } = state
    const formatter = useDateFormatter({
        year: 'numeric',
        timeZone: timeZone
    })

    const years: string[] = []
    for (let i = -20; i <= 20; i++) {
        const date = focusedDate.add({ years: i })
        years.push(formatter.format(date.toDate(timeZone)))
    }

    const onChange = (e: number) => {
        const date = focusedDate.set({ year: e })
        setFocusedDate(date)
    }

    return (
        <Popover>
            <Popover.Trigger
                className='data-focus-visible:ring-primary relative inline rounded-lg text-left ring-offset-2 outline-hidden data-focus-visible:ring-1'
                slot={null}
            >
                {formatter.format(focusedDate.toDate(timeZone))}
            </Popover.Trigger>
            <Popover.Content
                shouldCloseOnInteractOutside={() => false}
                className='sm:w-48 sm:min-w-0'
                aria-label='Year'
            >
                <Popover.Body>
                    <NumberField
                        aria-labelledby='Year'
                        onChange={onChange}
                        value={focusedDate.year}
                        autoFocus
                        className='flex h-16 w-full items-center justify-center pt-4 sm:h-auto'
                        formatOptions={{ useGrouping: false }}
                    >
                        <Group className='flex w-full items-center justify-between gap-1'>
                            <Button variant='ghost' size='icon' slot='decrement'>
                                <IconMinus />
                            </Button>
                            <Input className='h-8 w-full text-center text-2xl outline-hidden sm:text-xl' />
                            <Button variant='ghost' size='icon' slot='increment'>
                                <IconPlus />
                            </Button>
                        </Group>
                    </NumberField>
                </Popover.Body>
                <Popover.Footer className='pt-0 sm:pt-0'>
                    <Popover.Close className='w-full'>Confirm</Popover.Close>
                </Popover.Footer>
            </Popover.Content>
        </Popover>
    )
}

Calendar.Header = CalendarHeader
Calendar.GridHeader = CalendarGridHeader
export { Calendar }
export type { CalendarProps }
