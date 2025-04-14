'use client'

import { ColorThumb as RACColorThumb, composeRenderProps, type ColorThumbProps } from 'react-aria-components'

import { cn } from '@/lib/utils'

const ColorThumb = ({ className, ...props }: ColorThumbProps) => {
    return (
        <RACColorThumb
            {...props}
            style={({ defaultStyle }) => ({ ...defaultStyle })}
            className={composeRenderProps(className, (className, { isFocusVisible, isDragging, isDisabled }) =>
                cn(
                    'ring-bg top-1/2 left-1/2 size-5 rounded-full border-2',
                    isFocusVisible && 'size-8',
                    isDragging && 'bg-muted',
                    isDisabled && 'opacity-50',
                    className
                )
            )}
        />
    )
}

export { ColorThumb }
