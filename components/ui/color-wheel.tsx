'use client'

import {
    ColorWheelTrack,
    ColorWheel as RACColorWheel,
    type ColorWheelProps as RACColorWheelProps
} from 'react-aria-components'
import { ColorThumb } from './color-thumb'

const ColorWheel = (props: Omit<RACColorWheelProps, 'outerRadius' | 'innerRadius'>) => {
    return (
        <RACColorWheel {...props} innerRadius={70} outerRadius={100}>
            <ColorWheelTrack className='disabled:opacity-50' style={({ defaultStyle }) => ({ ...defaultStyle })} />
            <ColorThumb />
        </RACColorWheel>
    )
}

export { ColorWheel }
