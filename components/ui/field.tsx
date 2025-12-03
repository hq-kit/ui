'use client'

import type { ComponentProps, ReactNode } from 'react'
import {
    composeRenderProps,
    type DateFieldProps,
    type DateValue,
    type FieldErrorProps,
    type NumberFieldProps,
    DateField as RACDateField,
    FieldError as RACFieldError,
    NumberField as RACNumberField,
    TextField as RACTextField,
    TimeField as RACTimeField,
    type TextFieldProps,
    type TimeFieldProps,
    type TimeValue
} from 'react-aria-components'
import { tv, type VariantProps } from 'tailwind-variants'
import { cn } from '@/lib/utils'
import { Label } from './label'
import { Separator } from './separator'

const FieldSet = ({ className, ...props }: ComponentProps<'fieldset'>) => (
    <fieldset
        className={cn(
            'flex flex-col gap-6',
            'has-[>[data-slot=checkbox-group]]:gap-3 has-[>[data-slot=radio-group]]:gap-3',
            className
        )}
        data-slot='field-set'
        {...props}
    />
)

const FieldLegend = ({
    className,
    variant = 'legend',
    ...props
}: ComponentProps<'legend'> & { variant?: 'legend' | 'label' }) => (
    <legend
        className={cn('mb-3 font-medium', 'data-[variant=legend]:text-base', 'data-[variant=label]:text-sm', className)}
        data-slot='field-legend'
        data-variant={variant}
        {...props}
    />
)

const FieldGroup = ({ className, ...props }: ComponentProps<'div'>) => (
    <div
        className={cn(
            'group/field-group @container/field-group flex w-full flex-col gap-7 data-[slot=checkbox-group]:gap-3 *:data-[slot=field-group]:gap-4',
            className
        )}
        data-slot='field-group'
        {...props}
    />
)

const fieldVariants = tv({
    base: 'group/field flex w-full gap-3 data-[invalid=true]:text-destructive',
    variants: {
        orientation: {
            vertical: ['flex-col [&>*]:w-full [&>.sr-only]:w-auto'],
            horizontal: [
                'flex-row items-center',
                '[&>[data-slot=field-label]]:flex-auto',
                'has-[>[data-slot=field-content]]:items-start has-[>[data-slot=field-content]]:[&>[role=checkbox],[role=radio]]:mt-px'
            ],
            responsive: [
                '@md/field-group:flex-row flex-col @md/field-group:items-center @md/field-group:[&>*]:w-auto [&>*]:w-full [&>.sr-only]:w-auto',
                '@md/field-group:[&>[data-slot=field-label]]:flex-auto',
                '@md/field-group:has-[>[data-slot=field-content]]:items-start @md/field-group:has-[>[data-slot=field-content]]:[&>[role=checkbox],[role=radio]]:mt-px'
            ]
        }
    },
    defaultVariants: {
        orientation: 'vertical'
    }
})

const Field = ({
    className,
    orientation = 'vertical',
    ...props
}: ComponentProps<'div'> & VariantProps<typeof fieldVariants>) => (
    <div
        className={cn(fieldVariants({ orientation }), className)}
        data-orientation={orientation}
        data-slot='field'
        role='group'
        {...props}
    />
)

const TextField = ({
    className,
    orientation = 'vertical',
    ...props
}: TextFieldProps & VariantProps<typeof fieldVariants>) => (
    <RACTextField
        className={composeRenderProps(className, (className) => cn(fieldVariants({ orientation }), className))}
        data-orientation={orientation}
        data-slot='field'
        {...props}
    />
)

const NumberField = ({
    className,
    orientation = 'vertical',
    ...props
}: NumberFieldProps & VariantProps<typeof fieldVariants>) => (
    <RACNumberField
        className={composeRenderProps(className, (className) => cn(fieldVariants({ orientation }), className))}
        data-orientation={orientation}
        data-slot='field'
        {...props}
    />
)

const DateField = <T extends DateValue>({
    className,
    orientation = 'vertical',
    ...props
}: DateFieldProps<T> & VariantProps<typeof fieldVariants>) => (
    <RACDateField
        className={composeRenderProps(className, (className) => cn(fieldVariants({ orientation }), className))}
        data-orientation={orientation}
        data-slot='field'
        {...props}
    />
)

const TimeField = <T extends TimeValue>({
    className,
    orientation = 'vertical',
    ...props
}: TimeFieldProps<T> & VariantProps<typeof fieldVariants>) => (
    <RACTimeField
        className={composeRenderProps(className, (className) => cn(fieldVariants({ orientation }), className))}
        data-orientation={orientation}
        data-slot='field'
        {...props}
    />
)

const FieldContent = ({ className, ...props }: ComponentProps<'div'>) => (
    <div
        className={cn('group/field-content flex flex-1 flex-col gap-1.5 leading-snug', className)}
        data-slot='field-content'
        {...props}
    />
)

const FieldLabel = ({ className, ...props }: ComponentProps<typeof Label>) => (
    <Label
        className={cn(
            'group/field-label peer/field-label flex w-fit gap-2 leading-snug group-data-[disabled=true]/field:opacity-50',
            'has-[>[data-slot=field]]:w-full has-[>[data-slot=field]]:flex-col has-[>[data-slot=field]]:rounded-md has-[>[data-slot=field]]:border *:data-[slot=field]:p-4',
            'has-data-[state=checked]:border-primary has-data-[state=checked]:bg-primary/5 dark:has-data-[state=checked]:bg-primary/10',
            className
        )}
        data-slot='field-label'
        {...props}
    />
)

const FieldTitle = ({ className, ...props }: ComponentProps<'div'>) => (
    <div
        className={cn(
            'flex w-fit items-center gap-2 font-medium text-sm leading-snug group-data-[disabled=true]/field:opacity-50',
            className
        )}
        data-slot='field-label'
        {...props}
    />
)

const FieldDescription = ({ className, ...props }: ComponentProps<'p'>) => (
    <p
        className={cn(
            'font-normal text-muted-foreground text-sm leading-normal group-has-data-[orientation=horizontal]/field:text-balance',
            'nth-last-2:-mt-1 [[data-variant=legend]+&]:-mt-1.5 last:mt-0',
            '[&>a:hover]:text-primary [&>a]:underline [&>a]:underline-offset-4',
            className
        )}
        data-slot='field-description'
        {...props}
    />
)

const FieldSeparator = ({
    children,
    className,
    ...props
}: ComponentProps<'div'> & {
    children?: ReactNode
}) => (
    <div
        className={cn('-my-2 group-data-[variant=outline]/field-group:-mb-2 relative h-5 text-sm', className)}
        data-content={!!children}
        data-slot='field-separator'
        {...props}
    >
        <Separator className='absolute inset-0 top-1/2' />
        {children && (
            <span
                className='relative mx-auto block w-fit bg-background px-2 text-muted-foreground'
                data-slot='field-separator-content'
            >
                {children}
            </span>
        )}
    </div>
)

const FieldError = (props: FieldErrorProps) => {
    return (
        <RACFieldError
            className={cn('font-normal text-destructive text-xs', props.className)}
            data-slot='field-error'
            {...props}
        />
    )
}

Field.Label = FieldLabel
Field.Description = FieldDescription
Field.Error = FieldError
Field.Group = FieldGroup
Field.Legend = FieldLegend
Field.Separator = FieldSeparator
Field.Set = FieldSet
Field.Content = FieldContent
Field.Title = FieldTitle

Field.Text = TextField
Field.Date = DateField
Field.Time = TimeField
Field.Number = NumberField

export {
    Field,
    FieldLabel,
    FieldDescription,
    FieldError,
    FieldGroup,
    FieldLegend,
    FieldSeparator,
    FieldSet,
    FieldContent,
    FieldTitle,
    DateField,
    TimeField,
    TextField,
    NumberField,
    fieldVariants
}
