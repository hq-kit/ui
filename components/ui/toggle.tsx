'use client'

import { createContext, use } from 'react'

import type { ToggleButtonGroupProps, ToggleButtonProps } from 'react-aria-components'
import { ToggleButton, ToggleButtonGroup } from 'react-aria-components'
import type { VariantProps } from 'tailwind-variants'
import { tv } from 'tailwind-variants'

import { compose } from './utils'

type ToggleGroupContextProps = {
    isDisabled?: boolean
    gap?: 0 | 1 | 2 | 3 | 4
    variant?: 'solid' | 'outline' | 'ghost'
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
                className={compose(
                    className,
                    toggleGroupStyles({
                        gap,
                        orientation
                    })
                )}
                {...props}
            />
        </ToggleGroupContext.Provider>
    )
}

const toggleStyles = tv({
    base: [
        'inline-flex cursor-pointer items-center gap-x-2 outline-hidden rounded-lg border transition sm:text-sm',
        '*:svg:-mx-0.5 *:svg:my-1 *:svg:size-4 *:svg:shrink-0',
        'focus-visible:ring-4 ring-primary/20',
        'disabled:cursor-default disabled:opacity-50'
    ],
    variants: {
        variant: {
            solid: 'hover:bg-accent/40 pressed:bg-accent/50 selected:bg-primary selected:text-primary-fg',
            ghost: 'text-fg hover:bg-accent/40 pressed:bg-accent/50 border-transparent bg-transparent selected:bg-accent selected:text-accent-fg',
            outline:
                'hover:bg-accent/40 pressed:bg-accent/50 selected:bg-accent selected:text-accent-fg'
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
            className={compose(
                className,
                toggleStyles({
                    variant: variant ?? groupvariant,
                    size: props.size ?? size,
                    orientation,
                    shape: props.shape,
                    noGap: gap === 0
                })
            )}
            {...props}
        />
    )
}

Toggle.Group = ToggleGroup

export { Toggle }
export type { ToggleGroupProps, ToggleProps }
