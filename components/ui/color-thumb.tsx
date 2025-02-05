'use client'

import { ColorThumb as ColorThumbPrimitive, type ColorThumbProps } from 'react-aria-components'
import { tv } from 'tailwind-variants'

const thumbStyles = tv({
    base: 'ring-bg top-[50%] left-[50%] size-5 rounded-full border-2',
    variants: {
        isFocusVisible: {
            true: 'size-8'
        },
        isDragging: {
            true: 'bg-muted'
        },
        isDisabled: {
            true: 'opacity-50'
        }
    }
})

const ColorThumb = (props: ColorThumbProps) => {
    return (
        <ColorThumbPrimitive
            {...props}
            style={({ defaultStyle, isDisabled }) => ({
                ...defaultStyle,
                backgroundColor: isDisabled ? undefined : defaultStyle.backgroundColor
            })}
            className={thumbStyles}
        />
    )
}

export { ColorThumb }
