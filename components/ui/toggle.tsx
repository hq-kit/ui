'use client'

import React from 'react'

import type { ToggleButtonGroupProps, ToggleButtonProps } from 'react-aria-components'
import { composeRenderProps, ToggleButton, ToggleButtonGroup } from 'react-aria-components'
import type { VariantProps } from 'tailwind-variants'
import { tv } from 'tailwind-variants'

import { cn } from '@/lib/utils'

type ToggleGroupContextProps = {
    isDisabled?: boolean
    gap?: 0 | 1 | 2 | 3 | 4
    variant?: 'solid' | 'outline' | 'ghost'
    orientation?: 'horizontal' | 'vertical'
    size?: 'xs' | 'sm' | 'md' | 'lg'
    icon?: boolean
}

const ToggleGroupContext = React.createContext<ToggleGroupContextProps>({
    gap: 0,
    variant: 'outline',
    orientation: 'horizontal',
    size: 'md',
    icon: false
})

interface ToggleGroupProps extends ToggleButtonGroupProps, ToggleGroupContextProps {
    ref?: React.RefObject<HTMLDivElement>
}

const toggleGroupStyles = tv({
    variants: {
        orientation: {
            horizontal: 'flex flex-row [-ms-overflow-style:none]',
            vertical: 'grid items-start'
        },
        gap: {
            0: 'gap-0 rounded-lg *:[button]:rounded-none',
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
            className: '*:[button]:-mt-px *:[button]:first:rounded-t-lg *:[button]:last:rounded-b-lg'
        },
        {
            gap: 0,
            orientation: 'horizontal',
            className: '*:[button]:-mr-px *:[button]:first:rounded-s-lg *:[button]:last:rounded-e-lg'
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
        'flex justify-center cursor-pointer items-center gap-x-2 outline-hidden rounded-lg border transition sm:text-sm backdrop-blur-2xl',
        'focus-visible:ring-2 ring-ring focus-visible:border-primary/70',
        'disabled:cursor-default disabled:opacity-50'
    ],
    variants: {
        variant: {
            solid: 'bg-bg/80 hover:bg-primary/10 pressed:bg-primary/15 selected:bg-primary selected:text-primary-fg',
            ghost: 'text-fg hover:bg-muted/40 pressed:bg-muted/50 border-transparent bg-transparent',
            outline: 'bg-bg/80 hover:bg-muted/40 pressed:bg-muted/50 selected:bg-muted selected:text-fg'
        },
        noGap: { true: '' },
        size: {
            xs: '[--height:theme(spacing.6)] [--width:auto] px-2 py-1.5 text-xs **:[svg]:size-3.5 gap-x-1.5',
            sm: '[--height:theme(spacing.8)] [--width:auto] px-3 py-2 text-sm **:[svg]:size-4 gap-x-1.5',
            md: '[--height:theme(spacing.10)] [--width:auto] px-4 py-3 text-sm **:[svg]:size-4 gap-x-2',
            lg: '[--height:theme(spacing.12)] [--width:auto] px-5 py-3.5 text-base **:[svg]:size-6 gap-x-2.5'
        },
        icon: {
            true: 'h-(--height) w-(--height) shrink-0 p-0',
            false: 'w-(--width) h-(--height)'
        },
        shape: {
            square: 'rounded-lg',
            circle: 'rounded-full'
        }
    },
    defaultVariants: {
        variant: 'solid',
        size: 'sm',
        shape: 'square'
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
    ref?: React.RefObject<HTMLButtonElement>
}

const Toggle = ({ className, variant, ref, ...props }: ToggleProps) => {
    const { variant: groupvariant, gap, size, icon, isDisabled: isGroupDisabled } = React.use(ToggleGroupContext)
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
                        shape: props.shape,
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

export { Toggle, ToggleGroupContext, toggleGroupStyles }
export type { ToggleGroupContextProps }
