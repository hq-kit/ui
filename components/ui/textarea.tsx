'use client'

import { composeRenderProps, TextArea, type TextAreaProps } from 'react-aria-components'
import { cn } from '@/lib/utils'

const Textarea = ({ className, ...props }: TextAreaProps) => (
  <TextArea
    className={composeRenderProps(className, (className) =>
      cn(
        'field-sizing-content flex min-h-16 w-full rounded-md border border-input bg-transparent px-3 py-2 text-base shadow-xs outline-none transition-[color,box-shadow,border] placeholder:text-muted-foreground hover:border-ring focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 md:text-sm dark:bg-input/30 dark:aria-invalid:ring-destructive/40',
        '[&::-webkit-scrollbar-thumb]:cursor-pointer [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-foreground/50 [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar]:w-2',
        className
      )
    )}
    data-slot='textarea'
    {...props}
  />
)

export { Textarea }
