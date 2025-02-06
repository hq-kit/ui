'use client'

import { createContext, use } from 'react'

import type { ToggleButtonGroupProps, ToggleButtonProps } from 'react-aria-components'
import { ToggleButton, ToggleButtonGroup } from 'react-aria-components'
import type { VariantProps } from 'tailwind-variants'
import { tv } from 'tailwind-variants'

import { cr } from './utils'

type ToggleGroupContextProps = {
    isDisabled?: boolean
    gap?: 0 | 1 | 2 | 3 | 4
    variant?: 'primary' | 'outline' | 'dark'
    orientation?: 'horizontal' | 'vertical'
    size?: 'sm' | 'md' | 'lg' | 'icon'
}

const ToggleGroupContext = createContext<ToggleGroupContextProps>({
    gap: 1,
    variant: 'outline',
    orientation: 'horizontal',
    size: 'md'
})

type BaseToggleGroupProps = Omit<ToggleGroupContextProps, 'gap' | 'variant'>
interface ToggleGroupPropsNonZeroGap extends BaseToggleGroupProps {
    gap?: Exclude<ToggleGroupContextProps['gap'], 0>
    variant?: ToggleGroupContextProps['variant']
}

interface ToggleGroupPropsGapZero extends BaseToggleGroupProps {
    gap?: 0
    variant?: ToggleGroupContextProps['variant']
}

type ToggleGroupProps = ToggleButtonGroupProps &
    (ToggleGroupPropsGapZero | ToggleGroupPropsNonZeroGap) & {
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
            className:
                '*:[button]:-mt-px *:[button]:first:rounded-t-lg *:[button]:last:rounded-b-lg'
        },
        {
            gap: 0,
            orientation: 'horizontal',
            className:
                '*:[button]:-mr-px *:[button]:first:rounded-s-lg *:[button]:last:rounded-e-lg'
        }
    ]
})

const ToggleGroup = ({
    className,
    ref,
    variant,
    gap,
    size,
    orientation,
    ...props
}: ToggleGroupProps) => {
    return (
        <ToggleGroupContext.Provider
            value={{ variant, gap, orientation, size, isDisabled: props.isDisabled }}
        >
            <ToggleButtonGroup
                ref={ref}
                orientation={orientation}
                className={cr(className, (className, renderProps) =>
                    toggleGroupStyles({
                        ...renderProps,
                        gap,
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
        'inline-flex cursor-pointer items-center gap-x-2 rounded-lg border outline-hidden transition sm:text-sm',
        '*:svg:-mx-0.5 *:svg:my-1 *:svg:size-4 *:svg:shrink-0'
    ],
    variants: {
        isDisabled: {
            true: 'cursor-default opacity-50'
        },
        isFocusVisible: {
            true: 'ring-primary/20 z-20 ring-4'
        },
        variant: {
            primary:
                'data-hovered:bg-primary/20 data-pressed:bg-primary/90 data-selected:bg-primary data-selected:text-primary-fg',
            dark: 'data-hovered:bg-muted/80 data-pressed:bg-muted/90 data-selected:bg-fg data-selected:text-bg',
            outline:
                'data-hovered:bg-muted/40 data-pressed:bg-muted/60 data-selected:bg-muted data-selected:text-secondary-fg'
        },
        noGap: { true: '' },
        orientation: {
            horizontal: 'inline-flex justify-center',
            vertical: 'flex'
        },
        size: {
            sm: 'h-9 px-3.5',
            md: 'h-10 px-4',
            lg: '*:svg:size-4.5 h-11 px-5 sm:text-base',
            icon: 'size-10 shrink-0'
        },
        shape: {
            square: 'rounded-lg',
            circle: 'rounded-full'
        }
    },
    defaultVariants: {
        variant: 'primary',
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
    const {
        variant: groupvariant,
        orientation,
        gap,
        size,
        isDisabled: isGroupDisabled
    } = use(ToggleGroupContext)
    return (
        <ToggleButton
            ref={ref}
            isDisabled={props.isDisabled ?? isGroupDisabled}
            className={cr(className, (className, renderProps) =>
                toggleStyles({
                    ...renderProps,
                    variant: variant ?? groupvariant,
                    size: props.size ?? size,
                    orientation,
                    shape: props.shape,
                    noGap: gap === 0,
                    className
                })
            )}
            {...props}
        />
    )
}

Toggle.Group = ToggleGroup

export { Toggle }
export type { ToggleGroupProps, ToggleProps }
