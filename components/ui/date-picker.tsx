'use client'

import { IconCalendarDays } from 'hq-icons'
import {
    Button,
    composeRenderProps,
    DatePicker as RACDatePicker,
    type DateValue,
    type DatePickerProps as RACDatePickerProps
} from 'react-aria-components'

import { cn } from '@/lib/utils'

import { Calendar } from './calendar'
import { DateInput } from './date-field'
import { Description, FieldError, FieldGroup, FieldProps, Label } from './field'
import { Popover } from './popover'

interface DatePickerProps<T extends DateValue> extends RACDatePickerProps<T>, FieldProps {
    portal?: Element
}

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
                cn('group flex flex-col gap-y-1.5', className)
            )}
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
                        <Button className='mr-1 cursor-pointer size-8 rounded-lg outline-hidden inline-flex items-center justify-center'>
                            <IconCalendarDays
                                aria-hidden
                                className={cn('size-4', isOpen ? 'text-primary' : 'text-muted-fg')}
                            />
                        </Button>
                    </FieldGroup>
                    {description && <Description>{description}</Description>}
                    <FieldError>{errorMessage}</FieldError>
                    <Popover.Content
                        showArrow={false}
                        className='p-4'
                        UNSTABLE_portalContainer={props.portal}
                    >
                        <Calendar />
                        <Button
                            type='button'
                            slot='close'
                            className='mt-2 w-full sm:hidden rounded-lg p-2 text-center border hover:bg-accent/40 pressed:bg-accent/50'
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
