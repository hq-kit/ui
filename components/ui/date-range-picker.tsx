'use client'

import { IconCalendarDays } from 'hq-icons'
import {
    Button,
    composeRenderProps,
    DateRangePicker as RACDateRangePicker,
    type DateValue,
    type DateRangePickerProps as RACDateRangePickerProps
} from 'react-aria-components'

import { cn } from '@/lib/utils'

import { DateInput } from './date-field'
import { Description, FieldError, FieldGroup, FieldProps, Label } from './field'
import { Popover } from './popover'
import { RangeCalendar } from './range-calendar'

interface DateRangePickerProps<T extends DateValue> extends RACDateRangePickerProps<T>, FieldProps {
    portal?: Element
}

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
                    <FieldGroup className='w-auto min-w-40'>
                        <DateInput
                            slot='start'
                            className='px-2 text-base tabular-nums lg:text-sm'
                        />
                        <span
                            aria-hidden='true'
                            className='flex-1 px-2 py-1.5 text-base tabular-nums lg:text-sm'
                        >
                            –
                        </span>
                        <DateInput
                            slot='end'
                            className='flex-1 px-2 py-1.5 text-base tabular-nums lg:text-sm'
                        />
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
                        <RangeCalendar />
                        <Button
                            type='button'
                            slot='close'
                            className='mt-2 w-full sm:hidden rounded-lg p-2 text-center border hover:bg-primary/40 pressed:bg-primary/50'
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
