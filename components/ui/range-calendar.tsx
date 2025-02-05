'use client'

import type {
    DateValue,
    RangeCalendarProps as RangeCalendarPrimitiveProps
} from 'react-aria-components'
import {
    CalendarCell,
    CalendarGrid,
    CalendarGridBody,
    RangeCalendar as RangeCalendarPrimitive,
    Text
} from 'react-aria-components'
import { twJoin } from 'tailwind-merge'
import { tv } from 'tailwind-variants'

import { Calendar } from './calendar'
import { focusRing } from './utils'

const cell = tv({
    extend: focusRing,
    base: 'flex size-full items-center justify-center rounded-lg tabular-nums',
    variants: {
        selectionState: {
            none: 'group-data-hovered/calendar-cell:bg-muted-fg/15 group-data-pressed/calendar-cell:bg-muted-fg/20',
            middle: [
                'group-data-hovered/calendar-cell:bg-(--cell)',
                'group-data-pressed/calendar-cell:bg-(--cell)',
                'group-data-invalid/calendar-cell:group-data-pressed/calendar-cell:bg-danger/30',
                'group-data-invalid:group-data-hovered/calendar-cell:bg-danger/30 group-data-invalid/calendar-cell:text-danger'
            ],
            cap: 'bg-primary text-primary-fg group-data-invalid/calendar-cell:bg-danger group-data-invalid/calendar-cell:text-danger-fg'
        },
        isDisabled: {
            true: 'opacity-50'
        }
    }
})

interface RangeCalendarProps<T extends DateValue> extends RangeCalendarPrimitiveProps<T> {
    errorMessage?: string
}

const RangeCalendar = <T extends DateValue>({
    errorMessage,
    visibleDuration = { months: 1 },
    ...props
}: RangeCalendarProps<T>) => {
    return (
        <RangeCalendarPrimitive visibleDuration={visibleDuration} {...props}>
            <Calendar.Header type='range-calendar' />
            <div className='flex gap-2 overflow-auto'>
                {Array.from({ length: visibleDuration?.months ?? 1 }).map((_, index) => {
                    const id = index + 1
                    return (
                        <CalendarGrid
                            key={index}
                            offset={id >= 2 ? { months: id - 1 } : undefined}
                            className='**:[td]:px-0 **:[td]:py-[1.5px]'
                        >
                            <Calendar.GridHeader />
                            <CalendarGridBody>
                                {(date) => (
                                    <CalendarCell
                                        date={date}
                                        className={twJoin([
                                            'group/calendar-cell data-outside-month:text-muted-fg size-10 cursor-default [line-height:2.286rem] outline-hidden data-selection-end:rounded-e-lg data-selection-start:rounded-s-lg sm:text-sm lg:size-9',
                                            'data-selected:bg-primary/20 data-selected:text-primary',
                                            'data-invalid:data-selected:bg-danger/30',
                                            '[td:first-child_&]:rounded-s-lg [td:last-child_&]:rounded-e-lg'
                                        ])}
                                    >
                                        {({
                                            formattedDate,
                                            isSelected,
                                            isSelectionStart,
                                            isSelectionEnd,
                                            isFocusVisible,
                                            isDisabled
                                        }) => (
                                            <span
                                                className={cell({
                                                    selectionState:
                                                        isSelected &&
                                                        (isSelectionStart || isSelectionEnd)
                                                            ? 'cap'
                                                            : isSelected
                                                              ? 'middle'
                                                              : 'none',
                                                    isFocusVisible,
                                                    isDisabled
                                                })}
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

            {errorMessage && (
                <Text slot='errorMessage' className='text-danger text-sm'>
                    {errorMessage}
                </Text>
            )}
        </RangeCalendarPrimitive>
    )
}

export { RangeCalendar }
export type { RangeCalendarProps }
