'use client'

import type {
  ComboBoxProps,
  InputProps,
  ListBoxItemProps,
  ListBoxProps,
  ListBoxSectionProps,
  PopoverProps,
  SeparatorProps
} from 'react-aria-components'
import { IconCheck, IconSelector } from '@tabler/icons-react'
import {
  Button,
  Collection,
  composeRenderProps,
  Header,
  ListBox,
  ListBoxItem,
  ListBoxSection,
  Popover,
  ComboBox as RACCombobox,
  Separator
} from 'react-aria-components'
import { cn } from '@/lib/utils'
import { Input } from './input'

const ComboBox = <T extends object>({ ...props }: ComboBoxProps<T>) => (
  <RACCombobox
    className={composeRenderProps(props.className, (className) => cn('group/field grid gap-3', className))}
    defaultFilter={(textValue, inputValue) => {
      if (inputValue.length === 0) return true
      if (textValue.length === 0) return false
      let textIndex = 0
      let inputIndex = 0
      while (textIndex < textValue.length && inputIndex < inputValue.length) {
        if (textValue.toLowerCase()[textIndex] === inputValue.toLowerCase()[inputIndex]) {
          inputIndex++
        }
        textIndex++
      }
      return inputIndex === inputValue.length
    }}
    menuTrigger='focus'
    {...props}
  />
)

const ComboBoxInput = (props: InputProps) => (
  <span className='relative isolate block has-[>svg:last-child]:[&_input]:pr-10' data-slot='control'>
    <Input {...props} placeholder={props?.placeholder} />
    <Button className='absolute top-0 right-0 grid h-full w-11 cursor-default place-content-center sm:w-9'>
      <IconSelector className='-mr-1 size-5 text-muted-foreground sm:size-4' data-slot='chevron' />
    </Button>
  </span>
)

const ComboBoxContent = <T extends object>({
  className,
  offset = 4,
  placement = 'bottom',
  ...props
}: ListBoxProps<T> & Pick<PopoverProps, 'offset' | 'placement'>) => (
  <Popover
    className={cn(
      'data-exiting:fade-out-0 data-entering:fade-in-0 data-exiting:zoom-out-95 data-entering:zoom-in-95 data-[placement=bottom]:slide-in-from-top-2 data-[placement=left]:slide-in-from-right-2 data-[placement=right]:slide-in-from-left-2 data-[placement=top]:slide-in-from-bottom-2 z-50 min-w-(--trigger-width) overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md outline-hidden data-entering:animate-in data-exiting:animate-out',
      className
    )}
    offset={offset}
    placement={placement}
  >
    <ListBox
      className='flex max-h-[calc(var(--visual-viewport-height)-10rem)] flex-col overflow-auto rounded-lg p-1 outline-hidden sm:max-h-[inherit]'
      data-slot='select-content'
      layout='stack'
      orientation='vertical'
      renderEmptyState={() => <div className='w-full p-4 text-center text-muted-foreground'>No results found</div>}
      {...props}
    />
  </Popover>
)

const ComboBoxGroup = <T extends object>({ title, ...props }: ListBoxSectionProps<T> & { title?: string }) => (
  <ListBoxSection className={cn('flex flex-col text-sm', props.className)} data-slot='select-group' {...props}>
    {title && (
      <Header className='pointer-events-none px-2 py-1 font-medium text-muted-foreground text-xs'>{title}</Header>
    )}
    <Collection items={props.items}>{props.children}</Collection>
  </ListBoxSection>
)

const ComboBoxItem = ({ className, children, ...props }: ListBoxItemProps) => {
  const textValue = typeof children === 'string' ? children : undefined
  return (
    <ListBoxItem
      className={cn(
        "relative flex w-full cursor-default select-none items-center gap-2 rounded-sm py-1.5 pr-8 pl-2 text-sm outline-hidden data-disabled:pointer-events-none data-focused:bg-accent data-selected:bg-accent data-focused:text-accent-foreground data-disabled:opacity-50 [&_svg:not([class*='size-'])]:size-4 [&_svg:not([class*='text-'])]:text-muted-foreground [&_svg]:pointer-events-none [&_svg]:shrink-0 *:[span]:last:flex *:[span]:last:items-center *:[span]:last:gap-2",
        className
      )}
      data-slot='select-item'
      textValue={textValue}
      {...props}
    >
      {(values) => (
        <>
          {typeof children === 'function' ? children(values) : children}
          {values.isSelected && (
            <span className='absolute right-2 flex size-3.5 items-center justify-center'>
              <IconCheck className='size-4' data-slot='selected-indicator' />
            </span>
          )}
        </>
      )}
    </ListBoxItem>
  )
}

const ComboBoxSeparator = ({ className, ...props }: SeparatorProps) => (
  <Separator
    className={cn('pointer-events-none -mx-1 my-1 h-px bg-border', className)}
    data-slot='select-separator'
    {...props}
  />
)

ComboBox.Input = ComboBoxInput
ComboBox.Content = ComboBoxContent
ComboBox.Group = ComboBoxGroup
ComboBox.Item = ComboBoxItem
ComboBox.Separator = ComboBoxSeparator

export { ComboBox, ComboBoxContent, ComboBoxGroup, ComboBoxItem, ComboBoxInput, ComboBoxSeparator }
