'use client'

import { IconCircleCheck } from 'hq-icons'
import type { ColorSwatchPickerItemProps, ColorSwatchPickerProps } from 'react-aria-components'
import {
    ColorSwatchPickerItem,
    ColorSwatchPicker as RACColorSwatchPicker,
    composeRenderProps
} from 'react-aria-components'

import { cn } from '@/lib/utils'

import { ColorSwatch, isBrightColor } from './color-swatch'

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
                    'relative rounded-lg outline-hidden disabled:opacity-50',
                    isFocused && 'ring-4 ring-primary/20',
                    isFocusVisible && 'ring-4 ring-primary/20',
                    isDisabled && 'opacity-50',
                    className
                )
            )}
        >
            {({ isSelected, color }) => (
                <>
                    <ColorSwatch />
                    {isSelected && (
                        <IconCircleCheck
                            style={{ color: isBrightColor(color.toString('hex')) ? '#3F3F46' : '#E4E4E7' }}
                            className='-translate-x-1/2 -translate-y-1/2 absolute top-1/2 left-1/2 size-5'
                        />
                    )}
                </>
            )}
        </ColorSwatchPickerItem>
    )
}

ColorSwatchPicker.Item = SwatchPickerItem

export { ColorSwatchPicker }
