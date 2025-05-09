'use client'

import { type ColorThumbProps, ColorThumb as RACColorThumb, composeRenderProps } from 'react-aria-components'

import { cn } from '@/lib/utils'

const ColorThumb = ({ className, ...props }: ColorThumbProps) => {
    return (
        <RACColorThumb
            {...props}
            style={({ defaultStyle }) => ({ ...defaultStyle })}
            className={composeRenderProps(className, (className) =>
                cn(
                    'top-1/2 left-1/2 size-5 rounded-full border-2 ring-bg',
                    'focus-visible:size-8',
                    'dragging:bg-muted',
                    'disabled:opacity-50',
                    className
                )
            )}
        />
    )
}

export { ColorThumb }
