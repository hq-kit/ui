"use client"

import { type ComponentProps, createContext, use } from "react"
import { composeRenderProps } from "react-aria-components/composeRenderProps"
import { Label, type LabelProps } from "react-aria-components/Label"
import { type MeterProps, type MeterRenderProps, Meter as RACMeter } from "react-aria-components/Meter"
import { cn } from "@/lib/utils"

const MeterContext = createContext<MeterRenderProps | null>(null)

const Meter = ({ className, children, ...props }: MeterProps) => (
  <RACMeter
    className={composeRenderProps(className, (className) => cn("cn-progress-root flex flex-wrap gap-3", className))}
    data-slot="meter"
    {...props}
  >
    {(values) => (
      <MeterContext value={{ ...values }}>
        {typeof children === "function" ? children(values) : children}
        <Meter.Track>
          <Meter.Indicator />
        </Meter.Track>
      </MeterContext>
    )}
  </RACMeter>
)

const MeterValue = ({ className, ...props }: Omit<React.ComponentProps<"span">, "children">) => {
  const { valueText } = use(MeterContext)!
  return (
    <span className={cn("cn-progress-value", className)} data-slot="meter-value" {...props}>
      {valueText}
    </span>
  )
}

const MeterLabel = ({ className, ...props }: LabelProps) => (
  <Label className={cn("cn-progress-label", className)} data-slot="progress-label" {...props} />
)

const MeterTrack = ({ className, ...props }: ComponentProps<"div">) => (
  <div
    className={cn("cn-progress-track relative flex w-full items-center overflow-x-hidden", className)}
    data-slot="progress-track"
    {...props}
  />
)

const MeterIndicator = ({ className, ...props }: ComponentProps<"div">) => {
  const { percentage } = use(MeterContext)!
  return (
    <div
      className={cn("h-full transition-all", className)}
      data-slot="progress-indicator"
      style={{ width: `${percentage}%`, backgroundColor: getMeterColor(percentage) }}
      {...props}
    />
  )
}

function getMeterColor(value: number): string {
  if (value < 50) return "var(--color-green-600)"
  if (value < 80) return "var(--color-orange-500)"
  return "var(--destructive)"
}

Meter.Track = MeterTrack
Meter.Value = MeterValue
Meter.Label = MeterLabel
Meter.Indicator = MeterIndicator

export { Meter, MeterIndicator, MeterLabel, MeterTrack, MeterValue }
