'use client'

import { IconChevronLeft, IconChevronRight } from 'hq-icons'
import {
    CalendarCell,
    CalendarGrid,
    CalendarGridBody,
    CalendarGridHeader as CalendarGridHeaderPrimitive,
    CalendarHeaderCell,
    Calendar as CalendarPrimitive,
    type CalendarProps as CalendarPrimitiveProps,
    type DateValue,
    Heading,
    Text,
    useLocale
} from 'react-aria-components'
import { tv } from 'tailwind-variants'

import { Button } from './button'
import { cr, ctr, focusRing } from './utils'

const cellStyles = tv({
    extend: focusRing,
    base: 'flex size-10 sm:size-9 cursor-default tabular-nums items-center justify-center rounded-lg lg:text-sm forced-colors:outline-0',
    variants: {
        isSelected: {
            false: 'text-foreground forced-colors:text-[ButtonText] hover:bg-secondary-foreground/15 pressed:bg-secondary-foreground/20',
            true: 'bg-primary text-primary-foreground invalid:bg-danger invalid:text-danger-foreground forced-colors:bg-[Highlight] forced-colors:text-[Highlight] forced-colors:invalid:bg-[Mark]'
        },
        isDisabled: {
            true: 'text-muted-foreground/70 forced-colors:text-[GrayText]'
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
            <CalendarHeader />
            <CalendarGrid className='[&_td]:border-collapse [&_td]:px-0'>
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
                <Text slot='errorMessage' className='text-sm text-red-600'>
                    {errorMessage}
                </Text>
            )}
        </CalendarPrimitive>
    )
}

const calendarHeaderStyles = tv({
    slots: {
        header: 'flex w-full justify-center gap-1 px-1 pb-5 sm:pb-4',
        heading: 'mr-2 text-muted-foreground tracking-tight flex-1 text-left font-medium',
        calendarGridHeaderCell: 'text-sm lg:text-xs font-semibold text-muted-foreground'
    }
})

const { header, heading, calendarGridHeaderCell } = calendarHeaderStyles()

const CalendarHeader = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => {
    const { direction } = useLocale()

    return (
        <header className={header({ className })} {...props}>
            <Heading className={heading()} />
            <div className='flex items-center gap-1'>
                <Button
                    size='icon'
                    className='[&_[data-slot=icon]]:text-foreground size-8 sm:size-7'
                    shape='circle'
                    variant='ghost'
                    slot='previous'
                >
                    {direction === 'rtl' ? <IconChevronRight /> : <IconChevronLeft aria-hidden />}
                </Button>
                <Button
                    size='icon'
                    className='[&_[data-slot=icon]]:text-foreground size-8 sm:size-7'
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

Calendar.Header = CalendarHeader
Calendar.GridHeader = CalendarGridHeader
export { Calendar }
