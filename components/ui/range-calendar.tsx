'use client'

import { getLocalTimeZone, today } from '@internationalized/date'
import type { DateValue, RangeCalendarProps as RangeCalendarPrimitiveProps } from 'react-aria-components'
import {
    CalendarCell,
    CalendarGrid,
    CalendarGridBody,
    FieldError,
    RangeCalendar as RangeCalendarPrimitive
} from 'react-aria-components'

import { cn } from '@/lib/utils'
import { Calendar } from './calendar'

interface RangeCalendarProps<T extends DateValue> extends RangeCalendarPrimitiveProps<T> {
    errorMessage?: string
}

const RangeCalendar = <T extends DateValue>({
    errorMessage,
    visibleDuration = { months: 1 },
    ...props
}: RangeCalendarProps<T>) => {
    const now = today(getLocalTimeZone())
    return (
        <RangeCalendarPrimitive visibleDuration={visibleDuration} {...props}>
            <Calendar.Header isRange />
            <div className='flex gap-2 overflow-auto'>
                {Array.from({ length: visibleDuration?.months ?? 1 }).map((_, index) => {
                    const id = index + 1
                    return (
                        <CalendarGrid
                            key={index}
                            offset={id >= 2 ? { months: id - 1 } : undefined}
                            className='w-full **:[td]:px-0 **:[td]:py-[1.5px] **:[td]:first:*:rounded-s-lg **:[td]:last:*:rounded-e-lg'
                        >
                            <Calendar.GridHeader />
                            <CalendarGridBody>
                                {(date) => (
                                    <CalendarCell
                                        date={date}
                                        className={({
                                            isSelected,
                                            isSelectionStart,
                                            isSelectionEnd,
                                            isOutsideMonth,
                                            isInvalid,
                                            isDisabled
                                        }) =>
                                            cn([
                                                'relative size-9 shrink-0 cursor-default outline-hidden',
                                                '[td:first-child_&]:rounded-s-lg [td:last-child_&]:rounded-e-lg',
                                                isSelectionStart && 'rounded-s-lg',
                                                isSelectionEnd && 'rounded-e-lg',
                                                isOutsideMonth && 'text-muted-fg',
                                                isSelected &&
                                                    `${isInvalid ? 'bg-danger/15 text-danger' : 'bg-primary/10 text-primary'}`,
                                                isDisabled && 'pointer-events-none opacity-50',
                                                date.compare(now) === 0 &&
                                                    'after:-translate-x-1/2 after:pointer-events-none after:absolute after:start-1/2 after:bottom-1.5 after:z-10 after:size-1 after:rounded-full after:bg-primary selection-end:after:bg-primary-fg selection-start:after:bg-primary-fg'
                                            ])
                                        }
                                    >
                                        {({
                                            formattedDate,
                                            isSelected,
                                            isHovered,
                                            isSelectionStart,
                                            isSelectionEnd,
                                            isDisabled
                                        }) => (
                                            <span
                                                className={cn(
                                                    'flex size-full items-center justify-center rounded-lg tabular-nums',
                                                    isHovered && 'bg-primary/10 text-primary',
                                                    isSelected &&
                                                        (isSelectionStart || isSelectionEnd) &&
                                                        'bg-primary text-primary-fg',
                                                    isDisabled && 'opacity-50'
                                                )}
                                            >
                                                {formattedDate}
                                            </span>
                                        )}
                                    </CalendarCell>
                                )}
                            </CalendarGridBody>
                        </CalendarGrid>
                    )
                })}
            </div>
            <FieldError className='px-2 text-danger text-sm/5'>{errorMessage}</FieldError>
        </RangeCalendarPrimitive>
    )
}

export { RangeCalendar }
