'use client'

import {
    composeRenderProps,
    ColorSlider as RACColorSlider,
    SliderOutput,
    SliderTrack,
    type ColorSliderProps as RACColorSliderProps
} from 'react-aria-components'

import { cn } from '@/lib/utils'

import { ColorThumb } from './color-thumb'
import { Label } from './field'

interface ColorSliderProps extends RACColorSliderProps {
    label?: string
    showOutput?: boolean
}

const ColorSlider = ({ showOutput = true, label, className, ...props }: ColorSliderProps) => {
    return (
        <RACColorSlider
            {...props}
            slot='color-slider'
            className={composeRenderProps(className, (className, { orientation, isDisabled }) =>
                cn(
                    'group relative gap-2 flex flex-col items-center',
                    orientation === 'horizontal' ? 'min-w-56 justify-between' : 'justify-center',
                    isDisabled && 'opacity-50',
                    className
                )
            )}
        >
            {({ isDisabled, orientation }) => (
                <>
                    <div className='flex items-center justify-between w-full has-only:justify-center'>
                        {label && <Label isDisabled={isDisabled}>{label}</Label>}
                        {showOutput && <SliderOutput />}
                    </div>
                    <SliderTrack
                        className={cn('rounded-lg', orientation === 'horizontal' ? 'h-6 w-full' : 'h-56 w-6')}
                        style={({ defaultStyle }) => ({ ...defaultStyle })}
                    >
                        <ColorThumb />
                    </SliderTrack>
                </>
            )}
        </RACColorSlider>
    )
}

export { ColorSlider }
export type { ColorSliderProps }
