'use client'

import { cn } from '@/lib/utils'
import { type ColorThumbProps, ColorThumb as RACColorThumb, composeRenderProps } from 'react-aria-components'

const ColorThumb = ({ className, ...props }: ColorThumbProps) => {
    return (
        <RACColorThumb
            {...props}
            style={({ defaultStyle }) => ({ ...defaultStyle })}
            className={composeRenderProps(className, (className) =>
                cn(
                    'top-[50%] left-[50%] size-6 rounded-full border-2 border-white [box-shadow:0_0_0_1px_black,_inset_0_0_0_1px_black]',
                    'focus-visible:size-8',
                    'dragging:bg-muted-foreground',
                    'disabled:opacity-50',
                    className
                )
            )}
        />
    )
}

export { ColorThumb }
