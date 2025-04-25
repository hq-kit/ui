'use client'

import { use } from 'react'

import { getLocalTimeZone, today } from '@internationalized/date'
import { useDateFormatter } from '@react-aria/i18n'
import { IconChevronLeft, IconChevronRight } from 'hq-icons'
import type { DateValue, CalendarProps as RACCalendarProps } from 'react-aria-components'
import {
    CalendarCell,
    CalendarGrid,
    CalendarGridBody,
    CalendarHeaderCell,
    CalendarStateContext,
    FieldError,
    Calendar as RACCalendar,
    CalendarGridHeader as RACCalendarGridHeader,
    RangeCalendarStateContext,
    useLocale
} from 'react-aria-components'
import type { CalendarState, RangeCalendarState } from 'react-stately'

import { cn } from '@/lib/utils'
import { Button } from './button'
import { Menu } from './menu'

interface CalendarProps<T extends DateValue> extends Omit<RACCalendarProps<T>, 'visibleDuration'> {
    errorMessage?: string
    className?: string
}

const Calendar = <T extends DateValue>({ errorMessage, ...props }: CalendarProps<T>) => {
    const now = today(getLocalTimeZone())
    return (
        <RACCalendar {...props}>
            <CalendarHeader />
            <CalendarGrid className='w-full **:[td]:px-0 **:[td]:py-[1.5px]'>
                <CalendarGridHeader />
                <CalendarGridBody>
                    {(date) => (
                        <CalendarCell
                            date={date}
                            className={({ isHovered, isSelected, isOutsideMonth, isInvalid, isDisabled }) =>
                                cn([
                                    'relative flex size-9 shrink-0 cursor-default items-center justify-center rounded-lg outline-hidden',
                                    isOutsideMonth && 'text-muted-fg',
                                    isHovered && 'bg-primary/10 text-primary',
                                    isSelected &&
                                        `${isInvalid ? 'bg-danger text-danger-fg' : 'bg-primary text-primary-fg'}`,
                                    isDisabled && 'pointer-events-none opacity-50',
                                    date.compare(now) === 0 &&
                                        'after:-translate-x-1/2 after:pointer-events-none after:absolute after:start-1/2 after:bottom-1.5 after:z-10 after:size-1 after:rounded-full after:bg-primary selected:after:bg-primary-fg'
                                ])
                            }
                        >
                            {({ formattedDate }) => formattedDate}
                        </CalendarCell>
                    )}
                </CalendarGridBody>
            </CalendarGrid>
            <FieldError className='px-2 text-danger text-sm/5'>{errorMessage}</FieldError>
        </RACCalendar>
    )
}

const CalendarHeader = ({ isRange, className, ...props }: React.ComponentProps<'header'> & { isRange?: boolean }) => {
    const { direction } = useLocale()
    const state = isRange ? use(RangeCalendarStateContext)! : use(CalendarStateContext)!

    return (
        <header
            slot='calendar-header'
            className={cn('flex w-full items-center justify-between gap-1.5 pt-1 pr-1 pb-5 pl-1.5 sm:pb-4', className)}
            {...props}
        >
            <MonthYearSelection state={state} />
            <div className='flex items-center gap-1'>
                <Button className='text-muted-fg' icon size='sm' shape='circle' variant='ghost' slot='previous'>
                    {direction === 'rtl' ? <IconChevronRight /> : <IconChevronLeft />}
                </Button>
                <Button className='text-muted-fg' icon size='sm' shape='circle' variant='ghost' slot='next'>
                    {direction === 'rtl' ? <IconChevronLeft /> : <IconChevronRight />}
                </Button>
            </div>
        </header>
    )
}

const MonthYearSelection = ({ state }: { state: CalendarState | RangeCalendarState }) => {
    const { timeZone, focusedDate, setFocusedDate } = state
    const monthFormatter = useDateFormatter({
        month: 'long',
        timeZone: timeZone
    })

    const months: string[] = []
    const numMonths = focusedDate.calendar.getMonthsInYear(focusedDate)
    for (let i = 1; i <= numMonths; i++) {
        const date = focusedDate.set({ month: i })
        months.push(monthFormatter.format(date.toDate(timeZone)))
    }
    const onMonthChange = (e: number) => {
        const date = focusedDate.set({ month: e })
        setFocusedDate(date)
    }

    const yearFormatter = useDateFormatter({
        year: 'numeric',
        timeZone: timeZone
    })

    const years: string[] = []
    for (let i = -20; i <= 20; i++) {
        const date = focusedDate.add({ years: i })
        years.push(yearFormatter.format(date.toDate(timeZone)))
    }
    const onYearChange = (e: number) => {
        const date = focusedDate.set({ year: Number(years[e]) })
        setFocusedDate(date)
    }

    return (
        <div className='flex gap-1'>
            <Menu aria-label='Select month'>
                <Menu.Trigger className='rounded-lg text-muted-fg' slot={null}>
                    {months[focusedDate.month - 1]}
                </Menu.Trigger>
                <Menu.Content
                    selectionMode='single'
                    selectedKeys={[focusedDate.month]}
                    items={months.map((month, i) => ({ id: i + 1, label: month }))}
                    // @ts-expect-error unknown-type
                    onSelectionChange={(e) => onMonthChange(e.currentKey)}
                >
                    {(item) => (
                        <Menu.Item id={item.id} textValue={item.label}>
                            <Menu.Label>{item.label}</Menu.Label>
                        </Menu.Item>
                    )}
                </Menu.Content>
            </Menu>
            <Menu aria-label='Select year'>
                <Menu.Trigger className='rounded-lg text-muted-fg' slot={null}>
                    {yearFormatter.format(focusedDate.toDate(timeZone))}
                </Menu.Trigger>
                <Menu.Content
                    selectionMode='single'
                    selectedKeys={[20]}
                    items={years.map((year, i) => ({ id: i, label: year }))}
                    // @ts-expect-error unknown-type
                    onSelectionChange={(e) => onYearChange(e.currentKey)}
                >
                    {(item) => (
                        <Menu.Item id={item.id} textValue={item.label}>
                            <Menu.Label>{item.label}</Menu.Label>
                        </Menu.Item>
                    )}
                </Menu.Content>
            </Menu>
        </div>
    )
}

const CalendarGridHeader = () => {
    return (
        <RACCalendarGridHeader>
            {(day) => (
                <CalendarHeaderCell className='pb-2 font-semibold text-muted-fg text-sm sm:px-0 sm:py-0.5 lg:text-xs'>
                    {day}
                </CalendarHeaderCell>
            )}
        </RACCalendarGridHeader>
    )
}

Calendar.Header = CalendarHeader
Calendar.GridHeader = CalendarGridHeader

export { Calendar }
