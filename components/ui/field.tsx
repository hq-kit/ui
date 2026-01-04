'use client'

import type { ComponentProps, ReactNode } from 'react'
import {
  composeRenderProps,
  type DateFieldProps,
  type DatePickerProps,
  type DateRangePickerProps,
  type DateValue,
  type FieldErrorProps,
  type NumberFieldProps,
  DateField as RACDateField,
  DatePicker as RACDatePicker,
  DateRangePicker as RACDateRangePicker,
  FieldError as RACFieldError,
  NumberField as RACNumberField,
  SearchField as RACSearchField,
  TextField as RACTextField,
  TimeField as RACTimeField,
  type SearchFieldProps,
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
}: React.ComponentProps<'div'> & VariantProps<typeof fieldVariants>) => (
  <div
    className={cn(fieldVariants({ orientation }), className)}
    data-orientation={orientation}
    data-slot='field'
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

const SearchField = ({
  className,
  orientation = 'vertical',
  ...props
}: SearchFieldProps & VariantProps<typeof fieldVariants>) => (
  <RACSearchField
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

const DatePicker = <T extends DateValue>({
  className,
  orientation = 'vertical',
  ...props
}: DatePickerProps<T> & VariantProps<typeof fieldVariants>) => (
  <RACDatePicker
    className={composeRenderProps(className, (className) => cn(fieldVariants({ orientation }), className))}
    data-orientation={orientation}
    data-slot='field'
    {...props}
  />
)

const DateRangePicker = <T extends DateValue>({
  className,
  orientation = 'vertical',
  ...props
}: DateRangePickerProps<T> & VariantProps<typeof fieldVariants>) => (
  <RACDateRangePicker
    className={composeRenderProps(className, (className) => cn(fieldVariants({ orientation }), className))}
    data-orientation={orientation}
    data-slot='field'
    {...props}
  />
)

const FieldLabel = ({ className, ...props }: ComponentProps<typeof Label>) => (
  <Label
    className={cn(
      'group/field-label peer/field-label flex w-fit gap-2 leading-snug group-data-[disabled=true]/field:opacity-50',
      'has-[>[data-slot=field]]:w-full has-[>[data-slot=field]]:flex-col has-[>[data-slot=field]]:rounded-md has-[>[data-slot=field]]:border *:data-[slot=field]:p-4',
      'has-data-[state=checked]:border-primary has-data-selected:bg-primary/5 dark:has-data-selected:bg-primary/10',
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
      'nth-last-2:-mt-1 last:mt-0 [[data-variant=legend]+&]:-mt-1.5',
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
    className={cn('relative -my-2 h-5 text-sm group-data-[variant=outline]/field-group:-mb-2', className)}
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
      className={composeRenderProps(props.className, (className) =>
        cn('font-normal text-destructive text-xs', className)
      )}
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
Field.Title = FieldTitle

Field.Text = TextField
Field.Date = DateField
Field.DatePicker = DatePicker
Field.DateRangePicker = DateRangePicker
Field.Time = TimeField
Field.Number = NumberField
Field.Search = SearchField

export {
  Field,
  FieldLabel,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLegend,
  FieldSeparator,
  FieldSet,
  FieldTitle,
  DateField,
  TimeField,
  DateRangePicker,
  DatePicker,
  TextField,
  NumberField,
  SearchField,
  fieldVariants
}
