'use client'

import React from 'react'

import * as Aria from 'react-aria-components'
import { tv, type VariantProps } from 'tailwind-variants'

interface ToggleGroupContextProps {
    variant?: 'solid' | 'outline' | 'ghost'
}

const ToggleGroupContext = React.createContext<ToggleGroupContextProps>({
    variant: 'solid'
})

const toggleGroupStyles = tv({
    base: ['flex gap-1'],
    variants: {
        orientation: {
            horizontal:
                'flex-row [&::-webkit-scrollbar]:hidden [scrollbar-width:none] [-ms-overflow-style:none]',
            vertical: 'flex-col items-start'
        }
    }
})

const ToggleGroup = ({
    className,
    orientation = 'horizontal',
    variant = 'solid',
    ...props
}: Aria.ToggleButtonGroupProps & ToggleGroupContextProps) => {
    return (
        <ToggleGroupContext.Provider value={{ variant }}>
            <Aria.ToggleButtonGroup
                orientation={orientation}
                className={Aria.composeRenderProps(className, (className, renderProps) =>
                    toggleGroupStyles({
                        ...renderProps,
                        orientation,
                        className
                    })
                )}
                {...props}
            />
        </ToggleGroupContext.Provider>
    )
}

const toggleStyles = tv({
    base: [
        'inline-flex btn gap-x-2 whitespace-nowrap relative items-center bg-transparent justify-center border text-sm font-medium ring-offset-bg transition-colors hover:bg-muted',
        'outline-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary'
    ],
    variants: {
        isDisabled: {
            true: 'opacity-50 cursor-default'
        },
        variant: {
            solid: 'bg-white border-muted selected:border-primary hover:text-black text-black selected:bg-primary selected:text-primary-foreground',
            outline:
                'border-muted selected:bg-muted selected:backdrop-blur-sm hover:bg-muted hover:brightness-110',
            ghost: 'border-transparent'
        },
        size: {
            xs: 'h-8 px-2 text-xs',
            sm: 'h-9 px-3 text-sm',
            md: 'h-10 px-4 py-2 text-sm',
            lg: 'h-10 sm:h-11 px-6 sm:px-8 text-base',
            icon: 'size-10 shrink-0'
        },
        shape: {
            square: 'rounded-lg',
            circle: 'rounded-full'
        }
    },
    defaultVariants: {
        variant: 'solid',
        size: 'md',
        shape: 'square'
    }
})

type ToggleProps = Aria.ToggleButtonProps & VariantProps<typeof toggleStyles>

const Toggle = ({ className, variant, ...props }: ToggleProps) => {
    const { variant: groupVariant } = React.useContext(ToggleGroupContext)

    return (
        <Aria.ToggleButton
            {...props}
            className={Aria.composeRenderProps(className, (className, renderProps) =>
                toggleStyles({
                    ...renderProps,
                    variant: variant ?? groupVariant,
                    size: props.size,
                    shape: props.shape,
                    className
                })
            )}
        />
    )
}

Toggle.Group = ToggleGroup

export { Toggle, toggleStyles, type ToggleProps }
