'use client'

import {
    ColorWheelTrack,
    ColorWheel as RACColorWheel,
    type ColorWheelProps as RACColorWheelProps
} from 'react-aria-components'

import { ColorThumb } from './color-thumb'

const ColorWheel = (props: Omit<RACColorWheelProps, 'outerRadius' | 'innerRadius'>) => {
    return (
        <RACColorWheel {...props} outerRadius={100} innerRadius={70}>
            <ColorWheelTrack
                className='disabled:opacity-50'
                style={({ defaultStyle }) => ({ ...defaultStyle })}
            />
            <ColorThumb />
        </RACColorWheel>
    )
}

export { ColorWheel }
