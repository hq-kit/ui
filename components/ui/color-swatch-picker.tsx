'use client'

import type { ColorSwatchPickerItemProps, ColorSwatchPickerProps } from 'react-aria-components'
import {
    ColorSwatchPickerItem,
    ColorSwatchPicker as ColorSwatchPickerPrimitive
} from 'react-aria-components'
import { tv } from 'tailwind-variants'

import { ColorSwatch } from './color-swatch'
import { ctr, focusRing } from './utils'

const ColorSwatchPicker = ({
    children,
    className,
    layout = 'grid',
    ...props
}: ColorSwatchPickerProps) => {
    return (
        <ColorSwatchPickerPrimitive
            layout={layout}
            {...props}
            className={ctr(className, 'flex gap-1')}
        >
            {children}
        </ColorSwatchPickerPrimitive>
    )
}

const itemStyles = tv({
    extend: focusRing,
    base: 'relative rounded-lg data-disabled:opacity-50'
})

const SwatchPickerItem = (props: ColorSwatchPickerItemProps) => {
    return (
        <ColorSwatchPickerItem {...props} className={itemStyles}>
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
