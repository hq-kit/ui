'use client'

import { IconChevronDown } from '@tabler/icons-react'
import {
  Button,
  composeRenderProps,
  type DateInputProps,
  DateSegment,
  Group,
  DateInput as RACDateInput
} from 'react-aria-components'
import { cn } from '@/lib/utils'

const DateInput = ({ className, ...props }: Omit<DateInputProps, 'children'>) => {
  return (
    <RACDateInput
      className={composeRenderProps(className, (className) =>
        cn(
          'inline-flex w-full items-center justify-start',
          'h-9 min-w-0 rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-xs outline-none transition-[color,box-shadow,border] selection:bg-primary selection:text-primary-foreground placeholder:text-muted-foreground disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm dark:bg-input/30',
          'hover:border-ring data-focus-within:border-ring data-focus-within:ring-[3px] data-focus-within:ring-ring/50',
          'aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40',
          className
        )
      )}
      {...props}
    >
      {(segment) => (
        <DateSegment
          className='rounded-sm px-1 transition hover:ring hover:ring-ring/50 data-focused:bg-primary data-[type=literal]:p-0 data-focused:text-primary-foreground data-focused:outline-hidden'
          segment={segment}
        />
      )}
    </RACDateInput>
  )
}

const DatePickerInput = ({ className, ...props }: Omit<DateInputProps, 'children'>) => {
  return (
    <Group
      className={composeRenderProps(className, (className) =>
        cn(
          'group/input-group relative flex w-full items-center rounded-md border border-input shadow-xs outline-none transition-[color,box-shadow] dark:bg-input/30',
          'h-9 w-full min-w-0 rounded-md border border-input bg-transparent py-1 text-base shadow-xs outline-none transition-[color,box-shadow] selection:bg-primary selection:text-primary-foreground placeholder:text-muted-foreground disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm dark:bg-input/30',
          'in-data-open:border-ring in-data-open:ring-[3px] in-data-open:ring-ring/50',
          'has-data-focus-within:border-ring has-data-focus-within:ring-[3px] has-data-focus-within:ring-ring/50',
          'has-aria-invalid:border-destructive has-aria-invalid:ring-destructive/20 dark:has-aria-invalid:ring-destructive/40',
          className
        )
      )}
    >
      <RACDateInput className={cn('inline-flex items-center justify-start px-3')} {...props}>
        {(segment) => (
          <DateSegment
            className='rounded-sm px-1 data-focused:bg-primary data-[type=literal]:p-0 data-focused:text-primary-foreground data-focused:outline-hidden'
            segment={segment}
          />
        )}
      </RACDateInput>
      <Button
        className={cn(
          'touch-target ml-auto grid place-content-center outline-hidden',
          'text-muted-foreground hover:text-foreground focus-visible:text-foreground data-pressed:text-foreground',
          'px-[calc(--spacing(3.5)-1px)] py-[calc(--spacing(2.5)-1px)] sm:px-[calc(--spacing(3)-1px)] sm:py-[calc(--spacing(1.5)-1px)] sm:text-sm/6'
        )}
        data-slot='date-picker-trigger'
      >
        <IconChevronDown className='size-4 shrink-0' />
      </Button>
    </Group>
  )
}

const DateRangePickerInput = ({ className, ...props }: Omit<DateInputProps, 'children'>) => {
  return (
    <Group
      className={composeRenderProps(className, (className) =>
        cn(
          'group/input-group relative flex w-full items-center rounded-md border border-input shadow-xs outline-none transition-[color,box-shadow] dark:bg-input/30',
          'h-9 w-full min-w-0 rounded-md border border-input bg-transparent py-1 text-base shadow-xs outline-none transition-[color,box-shadow] selection:bg-primary selection:text-primary-foreground placeholder:text-muted-foreground disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm dark:bg-input/30',
          'in-data-open:border-ring in-data-open:ring-[3px] in-data-open:ring-ring/50',
          'has-data-focus-within:border-ring has-data-focus-within:ring-[3px] has-data-focus-within:ring-ring/50',
          'has-aria-invalid:border-destructive has-aria-invalid:ring-destructive/20 dark:has-aria-invalid:ring-destructive/40',
          className
        )
      )}
    >
      <RACDateInput className={cn('inline-flex items-center justify-start px-3')} slot='start' {...props}>
        {(segment) => (
          <DateSegment
            className='rounded-sm px-1 data-focused:bg-primary data-[type=literal]:p-0 data-focused:text-primary-foreground data-focused:outline-hidden'
            segment={segment}
          />
        )}
      </RACDateInput>
      <span
        aria-hidden='true'
        className='pointer-events-none z-10 -mx-3 block h-0.5 w-2 shrink-0 self-center rounded-full bg-foreground group-disabled/date-range-picker:text-opacity-50 sm:-mx-2'
      />
      <RACDateInput className={cn('inline-flex items-center justify-start px-3')} slot='end' {...props}>
        {(segment) => (
          <DateSegment
            className='rounded-sm px-1 data-focused:bg-primary data-[type=literal]:p-0 data-focused:text-primary-foreground data-focused:outline-hidden'
            segment={segment}
          />
        )}
      </RACDateInput>
      <Button
        className={cn(
          'touch-target ml-auto grid place-content-center outline-hidden',
          'text-muted-foreground hover:text-foreground focus-visible:text-foreground data-pressed:text-foreground',
          'px-[calc(--spacing(3.5)-1px)] py-[calc(--spacing(2.5)-1px)] sm:px-[calc(--spacing(3)-1px)] sm:py-[calc(--spacing(1.5)-1px)] sm:text-sm/6'
        )}
        data-slot='date-picker-trigger'
      >
        <IconChevronDown className='size-4 shrink-0' />
      </Button>
    </Group>
  )
}

export { DateInput, DatePickerInput, DateRangePickerInput }
