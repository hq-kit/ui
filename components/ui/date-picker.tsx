'use client'

import { IconCalendarDays } from 'hq-icons'
import {
    Button,
    type DateValue,
    DatePicker as RACDatePicker,
    type DatePickerProps as RACDatePickerProps,
    composeRenderProps
} from 'react-aria-components'

import { cn } from '@/lib/utils'

import { Calendar } from './calendar'
import { DateInput } from './date-field'
import { Description, FieldError, FieldGroup, type FieldProps, Label } from './field'
import { Popover } from './popover'

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
            className={composeRenderProps(className, (className) => cn('group flex flex-col gap-y-1.5', className))}
        >
            {({ isOpen, isInvalid, isDisabled }) => (
                <>
                    {label && (
                        <Label isInvalid={isInvalid} isDisabled={isDisabled}>
                            {label}
                        </Label>
                    )}
                    <FieldGroup className='min-w-40'>
                        <DateInput className='w-full px-2 text-base lg:text-sm' />
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
                        <Calendar />
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
        </RACDatePicker>
    )
}

export { DatePicker }
