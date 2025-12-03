'use client'

import type { VariantProps } from 'tailwind-variants'
import { type CSSProperties, createContext, use } from 'react'
import {
    composeRenderProps,
    ToggleButton,
    ToggleButtonGroup,
    type ToggleButtonGroupProps,
    type ToggleButtonProps
} from 'react-aria-components'
import { cn } from '@/lib/utils'
import { toggleVariants } from './toggle'

const ToggleGroupContext = createContext<
    VariantProps<typeof toggleVariants> & {
        spacing?: number
    }
>({
    size: 'default',
    variant: 'default',
    spacing: 0
})

const ToggleGroup = ({
    className,
    variant,
    size,
    spacing = 0,
    ...props
}: ToggleButtonGroupProps &
    VariantProps<typeof toggleVariants> & {
        spacing?: number
    }) => (
    <ToggleGroupContext.Provider value={{ variant, size, spacing }}>
        <ToggleButtonGroup
            className={composeRenderProps(className, (className) =>
                cn(
                    'group/toggle-group flex w-fit items-center gap-[--spacing(var(--gap))] rounded-md data-[spacing=default]:data-[variant=outline]:shadow-xs',
                    className
                )
            )}
            data-size={size}
            data-slot='toggle-group'
            data-spacing={spacing}
            data-variant={variant}
            style={{ '--gap': spacing } as CSSProperties}
            {...props}
        />
    </ToggleGroupContext.Provider>
)

const ToggleGroupItem = ({
    className,
    variant,
    size,
    ...props
}: ToggleButtonProps & VariantProps<typeof toggleVariants>) => {
    const context = use(ToggleGroupContext)

    return (
        <ToggleButton
            className={cn(
                toggleVariants({
                    variant: context.variant || variant,
                    size: context.size || size
                }),
                'w-auto min-w-0 shrink-0 px-3 focus:z-10 focus-visible:z-10',
                'data-[spacing=0]:data-[variant=outline]:border-l-0 data-[spacing=0]:rounded-none data-[spacing=0]:shadow-none data-[spacing=0]:last:rounded-r-md data-[spacing=0]:data-[variant=outline]:first:border-l data-[spacing=0]:first:rounded-l-md',
                className
            )}
            data-size={context.size || size}
            data-slot='toggle-group-item'
            data-spacing={context.spacing}
            data-variant={context.variant || variant}
            {...props}
        />
    )
}

ToggleGroup.Item = ToggleGroupItem

export { ToggleGroup, ToggleGroupItem }
