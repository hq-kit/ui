'use client'

import {
    ColorArea as ColorAreaPrimitive,
    type ColorAreaProps as ColorAreaPropsPrimitive
} from 'react-aria-components'

import { ColorThumb } from './color-thumb'
import { ctr } from './utils'

type ColorAreaProps = ColorAreaPropsPrimitive

const ColorArea = ({ className, ...props }: ColorAreaProps) => {
    return (
        <ColorAreaPrimitive
            {...props}
            data-slot='color-area'
            className={ctr(className, 'bg-muted size-56 shrink-0 rounded-lg')}
            style={({ defaultStyle, isDisabled }) => ({
                ...defaultStyle,
                background: isDisabled ? undefined : defaultStyle.background
            })}
        >
            <ColorThumb />
        </ColorAreaPrimitive>
    )
}

export { ColorArea }
