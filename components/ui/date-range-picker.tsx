'use client'

import { IconCalendarDays } from 'hq-icons'
import {
    Button,
    type DateValue,
    DateRangePicker as RACDateRangePicker,
    type DateRangePickerProps as RACDateRangePickerProps,
    composeRenderProps
} from 'react-aria-components'

import { cn } from '@/lib/utils'
import { DateInput } from './date-field'
import { Description, FieldError, FieldGroup, type FieldProps, Label } from './field'
import { Popover } from './popover'
import { RangeCalendar } from './range-calendar'

interface DateRangePickerProps<T extends DateValue> extends RACDateRangePickerProps<T>, FieldProps {}

const DateRangePicker = <T extends DateValue>({
    label,
    className,
    description,
    errorMessage,
    ...props
}: DateRangePickerProps<T>) => {
    return (
        <RACDateRangePicker
            shouldCloseOnSelect={false}
            {...props}
            className={composeRenderProps(className, (className) => cn('group flex flex-col gap-y-1.5', className))}
        >
            {({ isOpen, isInvalid, isDisabled }) => (
                <>
                    {label && (
                        <Label isInvalid={isInvalid} isDisabled={isDisabled}>
                            {label}
                        </Label>
                    )}
                    <FieldGroup className='w-auto min-w-40'>
                        <DateInput slot='start' className='px-2 text-base tabular-nums lg:text-sm' />
                        <span aria-hidden='true' className='flex-1 px-2 py-1.5 text-base tabular-nums lg:text-sm'>
                            –
                        </span>
                        <DateInput slot='end' className='flex-1 px-2 py-1.5 text-base tabular-nums lg:text-sm' />
                        <Button className='mr-1 inline-flex size-8 cursor-pointer items-center justify-center rounded-lg outline-hidden'>
                            <IconCalendarDays
                                aria-hidden
                                className={cn('size-4', isOpen ? 'text-primary' : 'text-muted-fg')}
                            />
                        </Button>
                    </FieldGroup>
                    {description && <Description>{description}</Description>}
                    <FieldError>{errorMessage}</FieldError>
                    <Popover.Content showArrow={false} className='p-4'>
                        <RangeCalendar />
                        <Button
                            type='button'
                            slot='close'
                            className='mt-2 w-full rounded-lg border pressed:bg-primary/50 p-2 text-center hover:bg-primary/40 sm:hidden'
                        >
                            Close
                        </Button>
                    </Popover.Content>
                </>
            )}
        </RACDateRangePicker>
    )
}

export { DateRangePicker }
