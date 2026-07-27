"use client"

import type { ComponentProps } from "react"
import { composeRenderProps } from "react-aria-components/composeRenderProps"
import {
  Slider as RACSlider,
  SliderOutput as RACSliderOutput,
  SliderFill,
  type SliderProps,
  SliderThumb,
  SliderTrack
} from "react-aria-components/Slider"
import { cn } from "@/lib/utils"

const SliderGroup = ({ className, ...props }: ComponentProps<"div">) => (
  <div className="flex items-center justify-between gap-x-3 *:data-[slot=icon]:size-5" {...props} />
)

const Slider = ({ className, children, ...props }: SliderProps) => (
  <RACSlider
    className={composeRenderProps(className, (className) =>
      cn(
        "group/slider relative flex touch-none select-none flex-wrap gap-3 data-[orientation=vertical]:min-h-40 data-disabled:opacity-50",
        "data-[orientation=horizontal]:w-full",
        "data-[orientation=vertical]:h-full data-[orientation=vertical]:flex-col data-[orientation=vertical]:items-center",
        className
      )
    )}
    data-slot="slider"
    {...props}
  >
    {({ state }) => (
      <>
        {children}
        <SliderTrack
          className="relative block grow select-none rounded-none bg-muted data-[orientation=horizontal]:h-1 data-[orientation=vertical]:h-full data-[orientation=horizontal]:w-full data-[orientation=vertical]:w-1"
          data-slot="slider-track"
        >
          <SliderFill className="select-none rounded-[inherit] bg-primary" data-slot="slider-range" />
          {state.values.map((_, i) => (
            <SliderThumb
              className="relative size-3 select-none rounded-none border border-ring bg-white ring-ring/50 transition-[color,box-shadow] after:absolute after:-inset-2 hover:ring-1 focus-visible:outline-hidden focus-visible:ring-1 active:ring-1 disabled:pointer-events-none disabled:opacity-50 group-data-[orientation=horizontal]/slider:top-1/2 group-data-[orientation=vertical]/slider:left-1/2"
              data-slot="slider-thumb"
              index={i}
              key={i}
            />
          ))}
        </SliderTrack>
      </>
    )}
  </RACSlider>
)

const SliderOutput = ({ className, ...props }: ComponentProps<typeof RACSliderOutput>) => (
  <RACSliderOutput
    className={composeRenderProps(className, (className) =>
      cn(
        "ml-auto text-muted-foreground text-xs tabular-nums group-data-[orientation=vertical]/slider:mx-auto",
        className
      )
    )}
    {...props}
  />
)

Slider.Group = SliderGroup
Slider.Output = SliderOutput

export { Slider, SliderGroup, SliderOutput }
