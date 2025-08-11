'use client'

import type { CalendarProps, CalendarState, DateValue, RangeCalendarProps } from 'react-aria-components'
import { type CalendarDate, getLocalTimeZone, today } from '@internationalized/date'
import { useDateFormatter } from '@react-aria/i18n'
import { IconChevronLeft, IconChevronRight } from '@tabler/icons-react'
import { type ComponentPropsWithRef, use } from 'react'
import {
    Button,
    CalendarCell,
    CalendarGrid,
    CalendarGridBody,
    CalendarHeaderCell,
    CalendarStateContext,
    Heading,
    Calendar as RACCalendar,
    CalendarGridHeader as RACCalendarGridHeader,
    RangeCalendar as RACRangeCalendar,
    useLocale
} from 'react-aria-components'
import { cn } from '@/lib/utils'
import { Menu } from './menu'

const Calendar = <T extends DateValue>(props: CalendarProps<T>) => {
    const now = today(getLocalTimeZone())
    return (
        <RACCalendar {...props}>
            <CalendarHeader />
            <CalendarGrid className='w-full **:[td]:px-0 **:[td]:py-[1.5px]'>
                <CalendarGridHeader />
                <CalendarGridBody>
                    {(date) => (
                        <CalendarCell
                            className={cn([
                                'relative flex size-8 shrink-0 cursor-pointer items-center justify-center rounded-lg pressed:bg-accent outside-month:text-muted-foreground pressed:text-accent-foreground text-sm outline-hidden hover:bg-accent/90 hover:text-accent-foreground',
                                'selected:bg-primary selected:text-primary-foreground selected:invalid:bg-destructive selected:invalid:text-destructive-foreground',
                                'focus-visible:ring-2 focus-visible:ring-ring/50',
                                'disabled:pointer-events-none disabled:opacity-50',
                                date.compare(now) === 0 &&
                                    'after:-translate-x-1/2 after:pointer-events-none after:absolute after:start-1/2 after:bottom-1 after:z-10 after:size-1 after:rounded-full after:bg-primary selected:after:bg-primary-foreground'
                            ])}
                            date={date}
                        >
                            {date.day}
                        </CalendarCell>
                    )}
                </CalendarGridBody>
            </CalendarGrid>
        </RACCalendar>
    )
}

const RangeCalendar = <T extends DateValue>({ visibleDuration = { months: 1 }, ...props }: RangeCalendarProps<T>) => {
    const now = today(getLocalTimeZone())
    return (
        <RACRangeCalendar visibleDuration={visibleDuration} {...props}>
            <CalendarHeader isRange />
            <div className='grid gap-2 overflow-auto md:flex'>
                {Array.from({ length: visibleDuration?.months ?? 1 }).map((_, index) => {
                    const id = index + 1
                    return (
                        <CalendarGrid
                            className='w-full **:[td]:px-0 **:[td]:py-[1.5px] **:[td]:first:*:rounded-s-lg **:[td]:last:*:rounded-e-lg'
                            key={index}
                            offset={id >= 2 ? { months: id - 1 } : undefined}
                        >
                            <CalendarGridHeader />
                            <CalendarGridBody>
                                {(date) => (
                                    <CalendarCell
                                        className={cn([
                                            'relative flex size-8 shrink-0 cursor-pointer items-center justify-center rounded-lg pressed:bg-accent outside-month:text-muted-foreground pressed:text-accent-foreground text-sm outline-hidden hover:bg-accent/90 hover:text-accent-foreground',
                                            'selection-start:bg-primary selection-start:text-primary-foreground selection-start:invalid:bg-destructive selection-start:invalid:text-destructive-foreground',
                                            'selection-end:bg-primary selection-end:text-primary-foreground selection-end:invalid:bg-destructive selection-end:invalid:text-destructive-foreground',
                                            'selected:rounded-none selected:bg-accent selected:text-accent-foreground selected:selection-end:rounded-r-lg selected:selection-start:rounded-l-lg',
                                            'focus-visible:ring-2 focus-visible:ring-ring/50',
                                            'disabled:pointer-events-none disabled:opacity-50',
                                            date.compare(now) === 0 &&
                                                'after:-translate-x-1/2 after:pointer-events-none after:absolute after:start-1/2 after:bottom-1 after:mt-1 after:size-1 after:rounded after:bg-primary selected:selection-end:after:bg-primary-foreground selected:selection-start:after:bg-primary-foreground'
                                        ])}
                                        date={date}
                                    >
                                        {date.day}
                                    </CalendarCell>
                                )}
                            </CalendarGridBody>
                        </CalendarGrid>
                    )
                })}
            </div>
        </RACRangeCalendar>
    )
}

const CalendarHeader = ({ className, isRange, ...props }: ComponentPropsWithRef<'header'> & { isRange?: boolean }) => {
    const { direction } = useLocale()
    const state = use(CalendarStateContext)!

    return (
        <header
            className={cn('flex w-full items-center justify-between gap-1.5 pt-1 pr-1 pb-5 pl-1.5 sm:pb-4', className)}
            slot='calendar-header'
            {...props}
        >
            <Button
                className='inline-flex size-7 shrink-0 items-center justify-center rounded-md border border-border/40 bg-background pressed:bg-muted/50 text-muted-foreground shadow-sm outline-hidden hover:bg-muted/40 focus-visible:ring-2 focus-visible:ring-ring'
                slot='previous'
            >
                {direction === 'rtl' ? <IconChevronRight /> : <IconChevronLeft />}
            </Button>
            {isRange ? (
                <Heading className='font-normal text-sm' />
            ) : (
                <div className='flex items-center'>
                    <SelectMonth state={state} />
                    <SelectYear state={state} />
                </div>
            )}
            <Button
                className='inline-flex size-7 shrink-0 items-center justify-center rounded-md border border-border/40 bg-background pressed:bg-muted/50 text-muted-foreground shadow-sm outline-hidden hover:bg-muted/40 focus-visible:ring-2 focus-visible:ring-ring'
                slot='next'
            >
                {direction === 'rtl' ? <IconChevronLeft /> : <IconChevronRight />}
            </Button>
        </header>
    )
}

const CalendarGridHeader = () => {
    return (
        <RACCalendarGridHeader>
            {(day) => (
                <CalendarHeaderCell className='pb-2 font-semibold text-muted-foreground text-sm sm:px-0 sm:py-0.5 lg:text-xs'>
                    {day}
                </CalendarHeaderCell>
            )}
        </RACCalendarGridHeader>
    )
}

const SelectMonth = ({ state }: { state: CalendarState }) => {
    const months = []

    const formatter = useDateFormatter({
        month: 'long',
        timeZone: state.timeZone
    })

    const numMonths = state.focusedDate.calendar.getMonthsInYear(state.focusedDate)
    for (let i = 1; i <= numMonths; i++) {
        const date = state.focusedDate.set({ month: i })
        months.push(formatter.format(date.toDate(state.timeZone)))
    }
    const selectedMonth = state.focusedDate.month

    return (
        <Menu aria-label='Select month'>
            <Menu.Trigger className='p-0.5 text-sm outline-primary' slot={null}>
                {months[selectedMonth - 1]}
            </Menu.Trigger>
            <Menu.Content
                items={months.map((month, i) => ({ id: i + 1, textValue: month }))}
                onSelectionChange={(v) => state.setFocusedDate(state.focusedDate.set({ month: Number([...v][0]) }))}
                selectedKeys={[selectedMonth]}
                selectionMode='single'
            >
                {(item) => (
                    <Menu.Item id={item.id} key={item.id} textValue={item.textValue}>
                        <Menu.Label>{item.textValue}</Menu.Label>
                    </Menu.Item>
                )}
            </Menu.Content>
        </Menu>
    )
}

const SelectYear = ({ state }: { state: CalendarState }) => {
    const years: { value: CalendarDate; formatted: string }[] = []
    const formatter = useDateFormatter({
        year: 'numeric',
        timeZone: state.timeZone
    })

    for (let i = -20; i <= 20; i++) {
        const date = state.focusedDate.add({ years: i })
        years.push({
            value: date,
            formatted: formatter.format(date.toDate(state.timeZone))
        })
    }

    const selectedYear = state.focusedDate.year

    return (
        <Menu>
            <Menu.Trigger className='p-0.5 text-sm outline-primary' slot={null}>
                {years[selectedYear - years[0].value.year].formatted}
            </Menu.Trigger>
            <Menu.Content
                aria-label='Select year'
                items={years.map((year, i) => ({ id: i, textValue: year.formatted }))}
                onSelectionChange={(value) => {
                    state.setFocusedDate(state.focusedDate.set({ year: years[Number([...value][0])].value.year }))
                }}
                selectedKeys={[20]}
                selectionMode='single'
            >
                {(item) => (
                    <Menu.Item id={item.id} key={item.id} textValue={item.textValue}>
                        <Menu.Label>{item.textValue}</Menu.Label>
                    </Menu.Item>
                )}
            </Menu.Content>
        </Menu>
    )
}

export { Calendar, RangeCalendar }
