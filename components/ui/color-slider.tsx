'use client'

import type { ColorSliderProps as RACColorSliderProps } from 'react-aria-components'
import { composeRenderProps, ColorSlider as RACColorSlider, SliderOutput, SliderTrack } from 'react-aria-components'
import { cn } from '@/lib/utils'
import { ColorThumb } from './color-thumb'
import { Label } from './form'

interface ColorSliderProps extends RACColorSliderProps {
    label?: string
    showOutput?: boolean
}

const ColorSlider = ({ showOutput = true, label, className, ...props }: ColorSliderProps) => {
    return (
        <RACColorSlider
            {...props}
            className={composeRenderProps(className, (className, { orientation }) =>
                cn(
                    'group/field relative flex flex-col items-center gap-2',
                    orientation === 'horizontal' ? 'min-w-56 justify-between' : 'justify-center',
                    className
                )
            )}
            slot='color-slider'
        >
            {({ orientation }) => (
                <>
                    <div className='flex w-full items-center justify-between has-only:justify-center'>
                        {label && <Label>{label}</Label>}
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
