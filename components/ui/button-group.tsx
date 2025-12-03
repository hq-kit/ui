'use client'

import type { ComponentProps } from 'react'
import { composeRenderProps, Toolbar, type ToolbarProps } from 'react-aria-components'
import { tv, type VariantProps } from 'tailwind-variants'
import { cn } from '@/lib/utils'

const buttonGroupVariants = tv({
    base: "flex w-fit items-stretch has-[>[data-slot=button-group]]:gap-2 [&>*]:focus-visible:relative [&>*]:focus-visible:z-10 has-[select[aria-hidden=true]:last-child]:[&>[data-slot=select-trigger]:last-of-type]:rounded-r-md [&>[data-slot=select-trigger]:not([class*='w-'])]:w-fit [&>input]:flex-1",
    variants: {
        orientation: {
            horizontal:
                '[&>*:not(:first-child)]:rounded-l-none [&>*:not(:first-child)]:border-l-0 [&>*:not(:last-child)]:rounded-r-none',
            vertical:
                'flex-col [&>*:not(:first-child)]:rounded-t-none [&>*:not(:first-child)]:border-t-0 [&>*:not(:last-child)]:rounded-b-none'
        },
        separator: {
            true: 'data-[orientation=horizontal]:divide-x data-[orientation=vertical]:divide-y'
        }
    },
    defaultVariants: {
        orientation: 'horizontal',
        separator: false
    }
})

interface ButtonGroupProps extends ToolbarProps, VariantProps<typeof buttonGroupVariants> {}

const ButtonGroup = ({ className, orientation, separator, ...props }: ButtonGroupProps) => (
    <Toolbar
        className={composeRenderProps(className, (className) =>
            cn(buttonGroupVariants({ orientation, separator, className }))
        )}
        data-slot='button-group'
        orientation={orientation ?? 'horizontal'}
        {...props}
    />
)

const ButtonGroupText = ({ className, ...props }: ComponentProps<'div'>) => {
    return (
        <div
            className={cn(
                "flex items-center gap-2 rounded-md border bg-muted px-4 font-medium text-sm shadow-xs *:data-[slot=icon]:pointer-events-none [&_svg:not([class*='size-'])]:size-4",
                className
            )}
            {...props}
        />
    )
}

export { ButtonGroup, ButtonGroupText }
