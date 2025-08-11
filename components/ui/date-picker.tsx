'use client'

import { IconCalendarFilled } from '@tabler/icons-react'
import {
    Button,
    composeRenderProps,
    type DateValue,
    DatePicker as RACDatePicker,
    type DatePickerProps as RACDatePickerProps,
    DateRangePicker as RACDateRangePicker,
    type DateRangePickerProps as RACDateRangePickerProps
} from 'react-aria-components'
import { cn } from '@/lib/utils'
import { Calendar, RangeCalendar } from './calendar'
import { DateInput } from './date-field'
import { Description, FieldError, FieldGroup, type FieldProps, Label } from './form'
import { PopoverContent } from './popover'

interface DatePickerProps<T extends DateValue> extends RACDatePickerProps<T>, FieldProps {}

const DatePicker = <T extends DateValue>({
    label,
    className,
    description,
    errorMessage,
    ...props
}: DatePickerProps<T>) => {
    return (
        <RACDatePicker
            {...props}
            className={composeRenderProps(className, (className) =>
                cn('group/field flex flex-col gap-y-1.5', className)
            )}
        >
            {({ isOpen }) => (
                <>
                    {label && <Label>{label}</Label>}
                    <FieldGroup className='min-w-40'>
                        <DateInput className='w-full px-2 text-base lg:text-sm' />
                        <Button className='mr-1 inline-flex size-8 cursor-pointer items-center justify-center rounded-lg outline-hidden'>
                            <IconCalendarFilled
                                aria-hidden
                                className={cn('size-4', isOpen ? 'text-primary' : 'text-muted-foreground')}
                            />
                        </Button>
                    </FieldGroup>
                    {description && <Description>{description}</Description>}
                    <FieldError>{errorMessage}</FieldError>
                    <PopoverContent className='p-4' showArrow={false}>
                        <Calendar />
                        <Button
                            className='mt-2 w-full rounded-lg border pressed:bg-accent p-2 text-center hover:bg-accent/90 sm:hidden'
                            slot='close'
                            type='button'
                        >
                            Close
                        </Button>
                    </PopoverContent>
                </>
            )}
        </RACDatePicker>
    )
}

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
            className={composeRenderProps(className, (className) =>
                cn('group/field flex flex-col gap-y-1.5', className)
            )}
        >
            {({ isOpen }) => (
                <>
                    {label && <Label>{label}</Label>}
                    <FieldGroup className='w-auto min-w-40'>
                        <DateInput className='px-2 text-base tabular-nums lg:text-sm' slot='start' />
                        <span aria-hidden='true' className='flex-1 px-2 py-1.5 text-base tabular-nums lg:text-sm'>
                            –
                        </span>
                        <DateInput className='flex-1 px-2 py-1.5 text-base tabular-nums lg:text-sm' slot='end' />
                        <Button className='mr-1 inline-flex size-8 cursor-pointer items-center justify-center rounded-lg outline-hidden'>
                            <IconCalendarFilled
                                aria-hidden
                                className={cn('size-4', isOpen ? 'text-primary' : 'text-muted-foreground')}
                            />
                        </Button>
                    </FieldGroup>
                    {description && <Description>{description}</Description>}
                    <FieldError>{errorMessage}</FieldError>
                    <PopoverContent showArrow={false}>
                        <RangeCalendar />
                        <Button
                            className='mt-2 w-full rounded-lg border pressed:bg-accent p-2 text-center hover:bg-accent/90 sm:hidden'
                            slot='close'
                            type='button'
                        >
                            Close
                        </Button>
                    </PopoverContent>
                </>
            )}
        </RACDateRangePicker>
    )
}

export { DatePicker, DateRangePicker }
