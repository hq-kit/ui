'use client'

import {
    type ColorAreaProps,
    type ColorSwatchPickerItemProps,
    type ColorSwatchPickerProps,
    type ColorSwatchProps,
    type ColorThumbProps,
    type ColorWheelProps,
    composeRenderProps,
    ColorArea as RACColorArea,
    ColorSwatch as RACColorSwatch,
    ColorSwatchPicker as RACColorSwatchPicker,
    ColorSwatchPickerItem as RACColorSwatchPickerItem,
    ColorThumb as RACColorThumb,
    ColorWheel as RACColorWheel,
    SliderTrack as RACSliderTrack,
    type SliderTrackProps
} from 'react-aria-components'
import { cn } from '@/lib/utils'

const ColorWheel = ({ className, outerRadius = 100, innerRadius = 74, ...props }: ColorWheelProps) => (
    <RACColorWheel
        className={composeRenderProps(className, (className) => cn(className))}
        innerRadius={innerRadius}
        outerRadius={outerRadius}
        {...props}
    />
)

const ColorArea = ({ className, ...props }: ColorAreaProps) => (
    <RACColorArea
        className={composeRenderProps(className, (className) =>
            cn('size-48 shrink-0 rounded-md border border-border shadow-md', className)
        )}
        {...props}
    />
)

const SliderTrack = ({ className, ...props }: SliderTrackProps) => (
    <RACSliderTrack
        className={composeRenderProps(className, (className) =>
            cn('h-7 w-48 rounded-md border border-border', className)
        )}
        {...props}
    />
)

const ColorThumb = ({ className, ...props }: ColorThumbProps) => (
    <RACColorThumb
        className={composeRenderProps(className, (className) =>
            cn(
                'z-10 box-border size-5 rounded-[50%] border-2 border-white shadow-md',
                'data-focus-visible:size-6',
                className
            )
        )}
        {...props}
    />
)

const ColorSwatchPicker = ({ className, ...props }: ColorSwatchPickerProps) => (
    <RACColorSwatchPicker
        className={composeRenderProps(className, (className) => cn('flex flex-wrap gap-2', className))}
        {...props}
    />
)

const ColorSwatchPickerItem = ({ className, ...props }: ColorSwatchPickerItemProps) => (
    <RACColorSwatchPickerItem
        className={composeRenderProps(className, (className) =>
            cn(
                'size-8 overflow-hidden rounded-md border-2 ring-offset-background transition-colors',
                'data-selected:border-white',
                'data-disabled:pointer-events-none data-disabled:opacity-50',
                'data-focus-visible:outline-none data-focus-visible:ring-2 data-focus-visible:ring-ring',
                className
            )
        )}
        {...props}
    />
)

const ColorSwatch = ({ className, ...props }: ColorSwatchProps) => (
    <RACColorSwatch className={composeRenderProps(className, (className) => cn('size-8', className))} {...props} />
)

export { ColorArea, ColorSwatch, ColorSwatchPicker, ColorSwatchPickerItem, ColorThumb, ColorWheel, SliderTrack }
