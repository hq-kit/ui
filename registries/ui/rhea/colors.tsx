"use client"

import type { VariantProps } from "tailwind-variants"
import {
  type ColorAreaProps,
  type ColorThumbProps,
  ColorArea as RACColorArea,
  ColorThumb as RACColorThumb
} from "react-aria-components/ColorArea"
import { type ColorFieldProps, ColorField as RACColorField } from "react-aria-components/ColorField"
import { ColorPicker as RACColorPicker } from "react-aria-components/ColorPicker"
import {
  type ColorSliderProps,
  ColorSlider as RACColorSlider,
  SliderOutput as RACSliderOutput,
  type SliderOutputProps
} from "react-aria-components/ColorSlider"
import { type ColorSwatchProps, ColorSwatch as RACColorSwatch } from "react-aria-components/ColorSwatch"
import {
  type ColorSwatchPickerItemProps,
  type ColorSwatchPickerProps,
  ColorSwatchPicker as RACColorSwatchPicker,
  ColorSwatchPickerItem as RACColorSwatchPickerItem
} from "react-aria-components/ColorSwatchPicker"
import { type ColorWheelProps, ColorWheelTrack, ColorWheel as RACColorWheel } from "react-aria-components/ColorWheel"
import { composeRenderProps } from "react-aria-components/composeRenderProps"
import { SliderTrack } from "react-aria-components/Slider"
import { cn } from "@/lib/utils"
import { fieldVariants } from "./field"

const ColorPicker = RACColorPicker

const ColorField = ({
  className,
  orientation = "vertical",
  ...props
}: ColorFieldProps & VariantProps<typeof fieldVariants>) => (
  <RACColorField
    {...props}
    aria-label={props["aria-label"] ?? "Color field"}
    className={composeRenderProps(className, (className) => cn(fieldVariants({ orientation }), className))}
    data-orientation={orientation}
    data-slot="field"
  />
)

const ColorWheel = ({
  className,
  outerRadius = 100,
  innerRadius = 74,
  ...props
}: Omit<ColorWheelProps, "innerRadius" | "outerRadius"> & { innerRadius?: number; outerRadius?: number }) => (
  <RACColorWheel
    className={composeRenderProps(className, (className) => cn("relative", className))}
    innerRadius={innerRadius}
    outerRadius={outerRadius}
    {...props}
  >
    <ColorWheelTrack className="data-disabled:opacity-50 data-disabled:grayscale-50" />
    <ColorThumb className="rounded-full" />
  </RACColorWheel>
)

const ColorArea = ({ className, ...props }: ColorAreaProps) => (
  <RACColorArea
    className={composeRenderProps(className, (className) =>
      cn("bg-muted rounded-2xl size-48 shrink-0 shadow-md data-disabled:opacity-50 data-disabled:grayscale-50", className)
    )}
    {...props}
  >
    <ColorThumb />
  </RACColorArea>
)

const ColorSlider = ({ className, children, ...props }: ColorSliderProps) => (
  <RACColorSlider
    className={composeRenderProps(className, (className) =>
      cn(
        "group/slider data-[orientation=vertical]:min-h-40 relative flex touch-none select-none flex-wrap gap-3 data-disabled:opacity-50",
        "data-[orientation=horizontal]:w-full",
        "data-[orientation=vertical]:h-full data-[orientation=vertical]:flex-col data-[orientation=vertical]:items-center",
        className
      )
    )}
    data-slot="color-slider"
    {...props}
  >
    {(values) => (
      <>
        {typeof children === "function" ? children(values) : children}
        <SliderTrack
          className="bg-input/90 rounded-2xl data-[orientation=horizontal]:h-1 data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-1 data-[orientation=horizontal]:h-2.5 data-[orientation=horizontal]:flex-col data-[orientation=horizontal]:border-t data-[orientation=horizontal]:border-t-transparent data-[orientation=vertical]:h-full data-[orientation=vertical]:w-2.5 data-[orientation=vertical]:border-l data-[orientation=vertical]:border-l-transparent relative block grow select-none bg-muted-foreground disabled:opacity-50 data-disabled:opacity-50 data-disabled:grayscale-50"
          data-slot="color-slider-track"
        >
          <ColorThumb data-slot="color-slider-thumb" />
        </SliderTrack>
      </>
    )}
  </RACColorSlider>
)

const ColorSliderOutput = ({ className, ...props }: SliderOutputProps) => (
  <RACSliderOutput
    className={composeRenderProps(className, (className) =>
      cn("in-data-[orientation=vertical]:hidden font-medium text-base/6 sm:text-sm/6", className)
    )}
    {...props}
  />
)

const ColorThumb = ({ className, ...props }: ColorThumbProps) => (
  <RACColorThumb
    className={composeRenderProps(className, (className) =>
      cn(
        "ring-black/10 not-dark:bg-clip-padding ring-1 size-4 rounded-2xl bg-white shadow-md transition-[color,box-shadow] duration-200 hover:ring-4 hover:ring-ring/30 focus-visible:ring-4 focus-visible:ring-ring/30 focus-visible:outline-hidden select-none [box-shadow:0_0_0_1px_var(--background),inset_0_0_0_1px_var(--foreground)] disabled:opacity-50 group-data-[orientation=horizontal]/slider:top-1/2 group-data-[orientation=vertical]/slider:left-1/2",
        "transition data-dragging:scale-120 data-focus-visible:scale-120 data-dragging:bg-muted-foreground data-disabled:opacity-50",
        className
      )
    )}
    {...props}
  />
)

const ColorSwatchPicker = ({ className, ...props }: ColorSwatchPickerProps) => (
  <RACColorSwatchPicker
    className={composeRenderProps(className, (className) => cn("flex flex-wrap gap-2", className))}
    {...props}
  />
)

const ColorSwatchPickerItem = ({ className, children, ...props }: ColorSwatchPickerItemProps) => (
  <RACColorSwatchPickerItem
    className={composeRenderProps(className, (className) =>
      cn(
        "bg-muted rounded-2xl relative outline-hidden",
        "data-selected:ring-3 data-selected:ring-ring/20 data-selected:*:inset-ring-current/40",
        "data-focus-visible:opacity-80 data-focus-visible:ring-ring/20 data-focus-visible:*:inset-ring-current/40",
        "data-hovered:opacity-90",
        "data-disabled:opacity-50 data-disabled:grayscale-50",
        className
      )
    )}
    {...props}
  >
    {(values) => (
      <>
        {values.isSelected && (
          <span className="absolute top-0 left-0 box-border size-full rounded-[inherit] border-2 border-black outline-2 outline-white -outline-offset-4 dark:border-white dark:outline-black" />
        )}
        {typeof children === "function" ? children(values) : children}
      </>
    )}
  </RACColorSwatchPickerItem>
)

const ColorSwatch = ({ className, ...props }: ColorSwatchProps) => (
  <RACColorSwatch
    className={composeRenderProps(className, (className) =>
      cn("size-6 [&_svg:not([class*='size-'])]:size-3 bg-muted rounded-2xl inset-ring-1 inset-ring-current/20 shrink-0", className)
    )}
    data-slot="color-swatch"
    {...props}
  />
)

export {
  ColorArea,
  ColorField,
  ColorPicker,
  ColorSlider,
  ColorSliderOutput,
  ColorSwatch,
  ColorSwatchPicker,
  ColorSwatchPickerItem,
  ColorThumb,
  ColorWheel
}
