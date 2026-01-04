'use client'

import { IconEye, IconEyeClosed, IconMinus, IconPlus, IconSearch, IconX } from '@tabler/icons-react'
import { type ComponentProps, useState } from 'react'
import { composeRenderProps, Group, type GroupProps, type InputProps, type TextAreaProps } from 'react-aria-components'
import { tv, type VariantProps } from 'tailwind-variants'
import { cn } from '@/lib/utils'
import { Button } from './button'
import { Input } from './input'
import { Textarea } from './textarea'

const InputGroup = ({ className, ...props }: GroupProps) => (
  <Group
    className={composeRenderProps(className, (className) =>
      cn(
        'group/input-group relative flex w-full items-center rounded-md border border-input shadow-xs outline-none transition-[color,box-shadow] dark:bg-input/30',
        'h-9 min-w-0 has-[>textarea]:h-auto',
        'has-[>[data-align=inline-start]]:[&>input]:pl-2',
        'has-[>[data-align=inline-end]]:[&>input]:pr-2',
        'has-[>[data-align=block-start]]:h-auto has-[>[data-align=block-start]]:flex-col has-[>[data-align=block-start]]:[&>input]:pb-3',
        'has-[>[data-align=block-end]]:h-auto has-[>[data-align=block-end]]:flex-col has-[>[data-align=block-end]]:[&>input]:pt-3',
        'has-[[data-slot=input-group-control]:focus-visible]:border-ring has-[[data-slot=input-group-control]:focus-visible]:ring-[3px] has-[[data-slot=input-group-control]:focus-visible]:ring-ring/50',
        'has-[[data-slot][aria-invalid=true]]:border-destructive has-[[data-slot][aria-invalid=true]]:ring-destructive/20 dark:has-[[data-slot][aria-invalid=true]]:ring-destructive/40',
        className
      )
    )}
    data-slot='input-group'
    role='group'
    {...props}
  />
)

const inputGroupAddonVariants = tv({
  base: "flex h-auto cursor-text select-none items-center justify-center gap-2 py-1.5 font-medium text-muted-foreground text-sm group-data-[disabled=true]/input-group:opacity-50 [&>kbd]:rounded-[calc(var(--radius)-5px)] [&>svg:not([class*='size-'])]:size-4",
  variants: {
    align: {
      'inline-start': 'order-first pl-3 has-[>button]:ml-[-0.45rem] has-[>kbd]:ml-[-0.35rem]',
      'inline-end': 'order-last pr-3 has-[>button]:mr-[-0.45rem] has-[>kbd]:mr-[-0.35rem]',
      'block-start':
        'order-first w-full justify-start px-3 pt-3 group-has-[>input]/input-group:pt-2.5 [.border-b]:pb-3',
      'block-end': 'order-last w-full justify-start px-3 pb-3 group-has-[>input]/input-group:pb-2.5 [.border-t]:pt-3'
    }
  },
  defaultVariants: {
    align: 'inline-start'
  }
})

const InputGroupAddon = ({
  className,
  align = 'inline-start',
  ...props
}: ComponentProps<'div'> & VariantProps<typeof inputGroupAddonVariants>) => (
  <div
    className={cn(inputGroupAddonVariants({ align }), className)}
    data-align={align}
    data-slot='input-group-addon'
    role='group'
    {...props}
  />
)

const inputGroupButtonVariants = tv({
  base: 'flex items-center gap-2 text-sm shadow-none',
  variants: {
    size: {
      xs: "h-6 gap-1 rounded-[calc(var(--radius)-5px)] px-2 has-[>svg]:px-2 [&>svg:not([class*='size-'])]:size-3.5",
      sm: 'h-8 gap-1.5 rounded-md px-2.5 has-[>svg]:px-2.5',
      'icon-xs': 'size-6 rounded-[calc(var(--radius)-5px)] p-0 has-[>svg]:p-0',
      'icon-sm': 'size-8 p-0 has-[>svg]:p-0'
    }
  },
  defaultVariants: {
    size: 'xs'
  }
})

const InputGroupButton = ({
  className,
  type = 'button',
  variant = 'ghost',
  size = 'xs',
  ...props
}: Omit<ComponentProps<typeof Button>, 'size'> & VariantProps<typeof inputGroupButtonVariants>) => (
  <Button
    className={cn(inputGroupButtonVariants({ size }), className)}
    data-size={size}
    type={type}
    variant={variant}
    {...props}
  />
)

const InputGroupText = ({ className, ...props }: ComponentProps<'span'>) => (
  <span
    className={cn(
      "flex items-center gap-2 text-muted-foreground text-sm [&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none",
      className
    )}
    {...props}
  />
)

const InputGroupInput = ({ className, ...props }: ComponentProps<typeof Input>) => (
  <Input
    className={cn(
      'flex-1 rounded-none border-0 bg-transparent shadow-none focus-visible:ring-0 dark:bg-transparent',
      className
    )}
    data-slot='input-group-control'
    {...props}
  />
)

const InputGroupTextarea = ({ className, ...props }: TextAreaProps) => (
  <Textarea
    className={cn(
      'flex-1 resize-none rounded-none border-0 bg-transparent py-3 shadow-none focus-visible:ring-0 dark:bg-transparent',
      className
    )}
    data-slot='input-group-control'
    {...props}
  />
)

const NumberInput = ({ className, ...props }: InputProps) => (
  <InputGroup>
    <InputGroupInput {...props} />
    <InputGroupAddon align='inline-end' className='gap-1'>
      <InputGroupButton slot='decrement' variant='outline'>
        <IconMinus className='size-3' />
        <span className='sr-only'>Decrement</span>
      </InputGroupButton>
      <InputGroupButton slot='increment' variant='outline'>
        <IconPlus className='size-3' />
        <span className='sr-only'>Increment</span>
      </InputGroupButton>
    </InputGroupAddon>
  </InputGroup>
)

const SearchInput = ({ className, ...props }: InputProps) => (
  <InputGroup>
    <InputGroupAddon>
      <IconSearch />
    </InputGroupAddon>
    <InputGroupInput className='[&::-webkit-search-cancel-button]:hidden' {...props} />
    <InputGroupAddon align='inline-end' className='group-data-empty/field:hidden'>
      <InputGroupButton>
        <IconX />
      </InputGroupButton>
    </InputGroupAddon>
  </InputGroup>
)

const PasswordInput = ({ className, ...props }: InputProps) => {
  const [isVisible, setIsVisible] = useState<boolean>(false)
  return (
    <InputGroup>
      <InputGroupInput type={isVisible ? 'text' : 'password'} {...props} />
      <InputGroupAddon align='inline-end'>
        <InputGroupButton onPress={() => setIsVisible(!isVisible)}>
          <IconEye className={cn('size-5 transition-transform sm:size-4', isVisible ? 'scale-0' : 'scale-100')} />
          <IconEyeClosed
            className={cn('absolute size-5 transition-transform sm:size-4', isVisible ? 'scale-100' : 'scale-0')}
          />
        </InputGroupButton>
      </InputGroupAddon>
    </InputGroup>
  )
}

InputGroup.Addon = InputGroupAddon
InputGroup.Button = InputGroupButton
InputGroup.Text = InputGroupText
InputGroup.Input = InputGroupInput
InputGroup.Textarea = InputGroupTextarea
InputGroup.Number = NumberInput
InputGroup.Search = SearchInput
InputGroup.Password = PasswordInput

export {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupText,
  InputGroupInput,
  InputGroupTextarea,
  NumberInput,
  SearchInput,
  PasswordInput
}
