'use client'

import type { ColorAreaProps } from 'react-aria-components'
import { composeRenderProps, ColorArea as RACColorArea } from 'react-aria-components'
import { cn } from '@/lib/utils'
import { ColorThumb } from './color-thumb'

const ColorArea = ({ className, ...props }: ColorAreaProps) => {
    return (
        <RACColorArea
            className={composeRenderProps(className, (className, { isDisabled }) =>
                cn('min-h-56 min-w-56 rounded-lg bg-muted', isDisabled && 'opacity-50 grayscale-50', className)
            )}
            slot='color-area'
            style={({ defaultStyle }) => ({ ...defaultStyle })}
            {...props}
        >
            <ColorThumb />
        </RACColorArea>
    )
}

export { ColorArea }
