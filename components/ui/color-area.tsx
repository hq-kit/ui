'use client'

import {
    composeRenderProps,
    ColorArea as RACColorArea,
    type ColorAreaProps
} from 'react-aria-components'

import { cn } from '@/lib/utils'

import { ColorThumb } from './color-thumb'

const ColorArea = ({ className, ...props }: ColorAreaProps) => {
    return (
        <RACColorArea
            slot='color-area'
            className={composeRenderProps(className, (className, { isDisabled }) =>
                cn(
                    'bg-muted min-w-56 min-h-56 rounded-lg',
                    isDisabled && 'opacity-50 grayscale-50',
                    className
                )
            )}
            style={({ defaultStyle }) => ({ ...defaultStyle })}
            {...props}
        >
            <ColorThumb />
        </RACColorArea>
    )
}

export { ColorArea }
