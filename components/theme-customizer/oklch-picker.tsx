"use client"

import { clampChroma, converter, displayable, formatHsl, parse } from "culori"
import { useMemo, useState } from "react"
import { Slider, SliderThumb, SliderTrack } from "react-aria-components"
import { Badge } from "@/components/ui/badge"
import { Label } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { NumberField } from "@/components/ui/number-field"
import { SliderGroup, SliderOutput } from "@/components/ui/slider"
import { getTextColor } from "@/lib/themes/color-formatter"

const toOklch = converter("oklch")

interface ChannelState {
  l: number // 0–1
  c: number // 0–~0.4
  h: number // 0–360
  alpha: number // 0–1
}

const FALLBACK: ChannelState = { l: 0.7, c: 0.15, h: 250, alpha: 1 }
const HUE_STOPS = [0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330, 360]

function parseToChannel(input: string | undefined, fallback: ChannelState): ChannelState {
  if (!input) return fallback
  const parsed = parse(input)
  if (!parsed) return fallback
  const ok = toOklch(parsed)
  if (!ok) return fallback
  return {
    l: ok.l ?? fallback.l,
    c: ok.c ?? 0,
    h: ok.h ?? fallback.h,
    alpha: ok.alpha ?? 1
  }
}

function toCssOklch({ l, c, h, alpha }: ChannelState) {
  const lPct = `${(l * 100).toFixed(1)}%`
  const cVal = c.toFixed(3)
  const hVal = h.toFixed(1)
  return alpha < 1 ? `oklch(${lPct} ${cVal} ${hVal} / ${alpha.toFixed(2)})` : `oklch(${lPct} ${cVal} ${hVal})`
}

export interface OklchColorPickerProps {
  value?: string
  defaultValue?: string
  onChange?: (value: string) => void
  className?: string
}

export function OklchColorPicker({ value, defaultValue, onChange }: OklchColorPickerProps) {
  const maxChroma = 0.37
  const isControlled = value !== undefined
  const [internal, setInternal] = useState<ChannelState>(() => parseToChannel(value ?? defaultValue, FALLBACK))

  const channel = isControlled ? parseToChannel(value, internal) : internal

  function update(patch: Partial<ChannelState>) {
    const next = { ...channel, ...patch }
    if (!isControlled) setInternal(next)
    onChange?.(toCssOklch(next))
  }

  const gamutOk = useMemo(
    () =>
      displayable({
        mode: "oklch",
        l: channel.l,
        c: channel.c,
        h: channel.h,
        alpha: channel.alpha
      }),
    [channel.l, channel.c, channel.h, channel.alpha]
  )

  const hslFallback = useMemo(() => {
    const clamped = clampChroma({ mode: "oklch", l: channel.l, c: channel.c, h: channel.h }, "oklch")
    return formatHsl({ ...clamped, alpha: channel.alpha })
  }, [channel.l, channel.c, channel.h, channel.alpha])

  const cssValue = toCssOklch(channel)

  return (
    <>
      <ChannelSlider
        color={gamutOk ? cssValue : hslFallback}
        format={(v) => `${Math.round(v * 100)}%`}
        label="Lightness"
        maxValue={1}
        minValue={0}
        onChange={(l) => update({ l })}
        step={0.005}
        trackStyle={{
          backgroundImage: `linear-gradient(to right, oklch(0 ${channel.c} ${channel.h}), oklch(1 ${channel.c} ${channel.h}))`
        }}
        value={channel.l}
      />

      <ChannelSlider
        color={gamutOk ? cssValue : hslFallback}
        format={(v) => v.toFixed(3)}
        label="Chroma"
        maxValue={maxChroma}
        minValue={0}
        onChange={(c) => update({ c })}
        step={0.002}
        trackStyle={{
          backgroundImage: `linear-gradient(to right, oklch(${channel.l} 0 ${channel.h}), oklch(${channel.l} ${maxChroma} ${channel.h}))`
        }}
        value={channel.c}
      />

      <ChannelSlider
        color={gamutOk ? cssValue : hslFallback}
        format={(v) => `${v.toFixed(2)}°`}
        label="Hue"
        maxValue={360}
        minValue={0}
        onChange={(h) => update({ h })}
        step={0.01}
        trackStyle={{
          backgroundImage: `linear-gradient(to right, ${HUE_STOPS.map(
            (stop) => `oklch(${channel.l} ${channel.c} ${stop})`
          ).join(", ")})`
        }}
        value={channel.h}
      />

      <ChannelSlider
        color={gamutOk ? cssValue : hslFallback}
        format={(v) => `${Math.round(v * 100)}%`}
        label="Alpha"
        maxValue={1}
        minValue={0}
        onChange={(alpha) => update({ alpha })}
        step={0.005}
        trackStyle={{
          backgroundImage: `linear-gradient(to right, oklch(${channel.l} ${channel.c} ${channel.h} / 0), oklch(${channel.l} ${channel.c} ${channel.h} / 1)), conic-gradient(#d4d4d8 0.25turn, #f4f4f5 0.25turn 0.5turn, #d4d4d8 0.5turn 0.75turn, #f4f4f5 0.75turn)`,
          backgroundSize: "100% 100%, 10px 10px"
        }}
        value={channel.alpha}
      />

      <div className="flex gap-2">
        <NumberField
          formatOptions={{ style: "percent" }}
          maxValue={1}
          minValue={0}
          onChange={(l) => update({ l })}
          value={channel.l}
        >
          <Label>L</Label>
          <Input />
        </NumberField>
        <NumberField maxValue={maxChroma} minValue={0} onChange={(c) => update({ c })} step={0.002} value={channel.c}>
          <Label>C</Label>
          <Input />
        </NumberField>
        <NumberField
          formatOptions={{
            style: "unit",
            unit: "degree",
            unitDisplay: "narrow"
          }}
          maxValue={360}
          minValue={0}
          onChange={(h) => update({ h })}
          step={0.01}
          value={channel.h}
        >
          <Label>H</Label>
          <Input />
        </NumberField>
        <NumberField
          formatOptions={{ style: "percent" }}
          maxValue={1}
          minValue={0}
          onChange={(alpha) => update({ alpha })}
          step={0.005}
          value={channel.alpha}
        >
          <Label>ALPHA</Label>
          <Input />
        </NumberField>
      </div>

      <Badge
        className="w-full justify-center font-mono text-xs ring-1 ring-ring"
        style={{ backgroundColor: cssValue, color: getTextColor(cssValue) }}
      >
        {gamutOk ? cssValue : hslFallback}
      </Badge>
    </>
  )
}

interface ChannelSliderProps {
  label: string
  value: number
  minValue: number
  maxValue: number
  step: number
  format: (v: number) => string
  onChange: (v: number) => void
  trackStyle: React.CSSProperties
  color: string
}

function ChannelSlider({
  label,
  value,
  minValue,
  maxValue,
  step,
  format,
  onChange,
  trackStyle,
  color
}: ChannelSliderProps) {
  return (
    <Slider
      className="group/slider cn-slider relative flex w-full touch-none select-none flex-wrap gap-3"
      defaultValue={value}
      maxValue={maxValue}
      minValue={minValue}
      onChange={onChange}
      step={step}
    >
      <SliderGroup>
        <Label>{label}</Label>
        <SliderOutput>{format(value)}</SliderOutput>
      </SliderGroup>
      <SliderTrack className="cn-slider-track relative block grow select-none" style={trackStyle}>
        <SliderThumb className="cn-slider-thumb top-1/2 select-none" style={{ backgroundColor: color }} />
      </SliderTrack>
    </Slider>
  )
}
