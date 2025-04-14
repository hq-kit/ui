'use client'

import type { ColorSwatchPickerItemProps, ColorSwatchPickerProps } from 'react-aria-components'
import {
    ColorSwatchPickerItem,
    composeRenderProps,
    ColorSwatchPicker as RACColorSwatchPicker
} from 'react-aria-components'

import { cn } from '@/lib/utils'

import { ColorSwatch } from './color-swatch'

const ColorSwatchPicker = ({ children, className, layout = 'grid', ...props }: ColorSwatchPickerProps) => {
    return (
        <RACColorSwatchPicker
            layout={layout}
            className={composeRenderProps(className, (className) => cn('flex gap-1', className))}
            {...props}
        >
            {children}
        </RACColorSwatchPicker>
    )
}

const SwatchPickerItem = ({ className, ...props }: ColorSwatchPickerItemProps) => {
    return (
        <ColorSwatchPickerItem
            {...props}
            className={composeRenderProps(className, (className, { isDisabled, isFocusVisible, isFocused }) =>
                cn(
                    'relative rounded-lg disabled:opacity-50',
                    isFocused && 'ring-primary/20 ring-4',
                    isFocusVisible && 'ring-primary/20 ring-4',
                    isDisabled && 'opacity-50',
                    className
                )
            )}
        >
            {({ isSelected }) => (
                <>
                    <ColorSwatch />
                    {isSelected && (
                        <div className='ring-fg/30 absolute top-0 left-0 h-full w-full rounded-lg ring-2 outline-hidden ring-inset' />
                    )}
                </>
            )}
        </ColorSwatchPickerItem>
    )
}

ColorSwatchPicker.Item = SwatchPickerItem

export { ColorSwatchPicker }
