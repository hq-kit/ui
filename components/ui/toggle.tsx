'use client'

import { type RefObject, createContext, use } from 'react'

import type { ToggleButtonGroupProps, ToggleButtonProps } from 'react-aria-components'
import { ToggleButton, ToggleButtonGroup, composeRenderProps } from 'react-aria-components'
import type { VariantProps } from 'tailwind-variants'
import { tv } from 'tailwind-variants'

import { cn } from '@/lib/utils'

type ToggleGroupContextProps = {
    isDisabled?: boolean
    gap?: 0 | 1 | 2 | 3 | 4
    variant?: 'default' | 'outline'
    orientation?: 'horizontal' | 'vertical'
    size?: 'xs' | 'sm' | 'md' | 'lg'
    icon?: boolean
}

const ToggleGroupContext = createContext<ToggleGroupContextProps>({
    gap: 0,
    variant: 'default',
    orientation: 'horizontal',
    size: 'md',
    icon: false
})

interface ToggleGroupProps extends ToggleButtonGroupProps, ToggleGroupContextProps {
    ref?: RefObject<HTMLDivElement>
}

const toggleGroupStyles = tv({
    variants: {
        orientation: {
            horizontal: 'flex flex-row [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden',
            vertical: 'grid items-start'
        },
        gap: {
            0: 'gap-0 rounded-md **:rounded-none',
            1: 'gap-1',
            2: 'gap-2',
            3: 'gap-3',
            4: 'gap-4'
        }
    },
    defaultVariants: {
        orientation: 'horizontal',
        gap: 0
    },
    compoundVariants: [
        {
            gap: 0,
            orientation: 'vertical',
            className: '*:[button]:-mt-px *:[button]:first:rounded-t-md *:[button]:last:rounded-b-md'
        },
        {
            gap: 0,
            orientation: 'horizontal',
            className: '*:-mr-px *:first:*:rounded-s-md *:first:rounded-s-md *:last:*:rounded-e-md *:last:rounded-e-md'
        }
    ]
})

const ToggleGroup = ({
    className,
    ref,
    variant,
    gap,
    icon,
    size = 'md',
    orientation = 'horizontal',
    ...props
}: ToggleGroupProps) => {
    return (
        <ToggleGroupContext.Provider value={{ variant, gap, orientation, size, icon, isDisabled: props.isDisabled }}>
            <ToggleButtonGroup
                ref={ref}
                orientation={orientation}
                className={composeRenderProps(className, (className) =>
                    cn(
                        toggleGroupStyles({
                            gap,
                            orientation
                        }),
                        className
                    )
                )}
                {...props}
            />
        </ToggleGroupContext.Provider>
    )
}

const toggleStyles = tv({
    base: [
        "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md pressed:bg-accent selected:bg-accent font-medium pressed:text-accent-foreground selected:text-accent-foreground text-sm outline-none transition-[color,box-shadow] hover:bg-muted hover:text-muted-foreground focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 [&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0"
    ],
    variants: {
        variant: {
            default: 'bg-transparent',
            outline: 'border border-input bg-transparent shadow-xs hover:bg-accent hover:text-accent-foreground'
        },
        noGap: { true: '' },
        orientation: {
            horizontal: 'inline-flex justify-center',
            vertical: 'flex'
        },
        size: {
            xs: 'gap-x-1.5 px-2 text-xs [--height:theme(spacing.6)] [--width:auto] **:[svg]:size-3.5',
            sm: 'gap-x-1.5 px-3 text-sm [--height:theme(spacing.8)] [--width:auto] **:[svg]:size-4',
            md: 'gap-x-2 px-4 text-sm [--height:theme(spacing.9)] [--width:auto] **:[svg]:size-4',
            lg: 'gap-x-2.5 px-5 text-base [--height:theme(spacing.10)] [--width:auto] **:[svg]:size-5'
        },
        icon: {
            true: 'h-(--height) w-(--height) shrink-0 justify-center px-0',
            false: 'h-(--height) w-(--width)'
        }
    },
    defaultVariants: {
        variant: 'default',
        size: 'sm'
    },
    compoundVariants: [
        {
            noGap: true,
            orientation: 'vertical',
            className: 'w-full'
        }
    ]
})

interface ToggleProps extends ToggleButtonProps, VariantProps<typeof toggleStyles> {
    ref?: RefObject<HTMLButtonElement>
}

const Toggle = ({ className, variant, ref, ...props }: ToggleProps) => {
    const { variant: groupvariant, gap, size, orientation, icon, isDisabled: isGroupDisabled } = use(ToggleGroupContext)
    return (
        <ToggleButton
            ref={ref}
            isDisabled={props.isDisabled ?? isGroupDisabled}
            className={composeRenderProps(className, (classname) =>
                cn(
                    toggleStyles({
                        variant: variant ?? groupvariant,
                        size: props.size ?? size,
                        icon: props.icon ?? icon,
                        orientation: orientation,
                        noGap: gap === 0
                    }),
                    classname
                )
            )}
            {...props}
        />
    )
}

Toggle.Group = ToggleGroup

export { Toggle, ToggleGroup, ToggleGroupContext, toggleGroupStyles }
export type { ToggleGroupContextProps }
