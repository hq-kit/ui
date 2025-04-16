'use client'

import { IconCircleCheck } from 'hq-icons'
import type { ColorSwatchPickerItemProps, ColorSwatchPickerProps } from 'react-aria-components'
import {
    ColorSwatchPicker as RACColorSwatchPicker,
    ColorSwatchPickerItem,
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
                    'relative rounded-lg disabled:opacity-50 outline-hidden',
                    isFocused && 'ring-primary/20 ring-4',
                    isFocusVisible && 'ring-primary/20 ring-4',
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
                            className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-5'
                        />
                    )}
                </>
            )}
        </ColorSwatchPickerItem>
    )
}

ColorSwatchPicker.Item = SwatchPickerItem

export { ColorSwatchPicker }
