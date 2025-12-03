'use client'
import { type ComponentProps, use } from 'react'
import {
    composeRenderProps,
    Slider as RACSlider,
    SliderOutput as RACSliderOutput,
    SliderThumb as RACSliderThumb,
    SliderTrack as RACSliderTrack,
    type SliderProps,
    SliderStateContext
} from 'react-aria-components'
import { cn } from '@/lib/utils'

const SliderGroup = ({ className, ...props }: ComponentProps<'div'>) => (
    <div className='flex items-center gap-x-3 *:data-[slot=icon]:size-5' {...props} />
)

const Slider = ({ className, ...props }: SliderProps) => (
    <RACSlider
        className={composeRenderProps(className, (className) =>
            cn(
                'group relative flex touch-none select-none flex-col disabled:opacity-50',
                'orientation-horizontal:w-full orientation-horizontal:min-w-fit orientation-horizontal:gap-y-2',
                'orientation-vertical:h-full orientation-vertical:min-h-fit orientation-vertical:w-1.5 orientation-vertical:items-center orientation-vertical:gap-y-2',
                className
            )
        )}
        data-slot='control'
        {...props}
    />
)

const SliderOutput = ({ className, ...props }: ComponentProps<typeof RACSliderOutput>) => (
    <RACSliderOutput
        className={composeRenderProps(className, (className) => cn('font-medium text-base/6 sm:text-sm/6', className))}
        {...props}
    />
)

const SliderThumb = ({ className, ...props }: ComponentProps<typeof RACSliderThumb>) => (
    <RACSliderThumb
        className={composeRenderProps(className, (className) =>
            cn(
                'top-[50%] left-[50%] size-5 rounded-full border border-foreground/10 bg-white outline-hidden ring-black transition-[width,height]',
                className
            )
        )}
        {...props}
    />
)

const SliderTrack = ({ className, children, ...props }: ComponentProps<typeof RACSliderTrack>) => (
    <RACSliderTrack
        className={composeRenderProps(className, (className) =>
            cn(
                'bg-(--slider-track-bg,var(--color-secondary))',
                'group/track relative cursor-default rounded-full',
                'grow group-orientation-horizontal:h-1.5 group-orientation-horizontal:w-full group-orientation-vertical:w-1.5 group-orientation-vertical:flex-1',
                'disabled:cursor-default disabled:opacity-60',
                className
            )
        )}
        {...props}
    >
        {(values) => (
            <>
                {typeof children === 'function'
                    ? children(values)
                    : (children ?? (
                          <>
                              <SliderFill />
                              <SliderThumb />
                          </>
                      ))}
            </>
        )}
    </RACSliderTrack>
)

const SliderFill = ({ className, ...props }: ComponentProps<'div'>) => {
    const state = use(SliderStateContext)
    const { orientation, getThumbPercent, values } = state || {}

    const getStyle = () => {
        const percent0 = getThumbPercent ? getThumbPercent(0) * 100 : 0
        const percent1 = getThumbPercent ? getThumbPercent(1) * 100 : 0

        if (values?.length === 1) {
            return orientation === 'horizontal' ? { width: `${percent0}%` } : { height: `${percent0}%` }
        }

        return orientation === 'horizontal'
            ? {
                  left: `${percent0}%`,
                  width: `${Math.abs(percent0 - percent1)}%`
              }
            : {
                  bottom: `${percent0}%`,
                  height: `${Math.abs(percent0 - percent1)}%`
              }
    }

    return (
        <div
            {...props}
            className={cn(
                'group-orientation-horizontal/top-0 pointer-events-none absolute rounded-full bg-primary group-disabled/track:opacity-60 group-orientation-vertical/track:bottom-0 group-orientation-horizontal/track:h-full group-orientation-vertical/track:w-full',
                className
            )}
            style={getStyle()}
        />
    )
}

Slider.Group = SliderGroup
Slider.Output = SliderOutput
Slider.Thumb = SliderThumb
Slider.Track = SliderTrack
Slider.Fill = SliderFill

export { SliderGroup, Slider, SliderOutput, SliderThumb, SliderTrack, SliderFill }
