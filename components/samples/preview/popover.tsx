"use client"
import type { Placement } from "react-aria-components/Popover"
import {
  IconArrowBearLeft,
  IconArrowBearRight,
  IconArrowDown,
  IconArrowLeft,
  IconArrowRight,
  IconArrowUp
} from "@tabler/icons-react"
import { type ReactNode, useState } from "react"
import { Code } from "@/components/mdx/code-client"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/field"
import { NumberField, NumberInput } from "@/components/ui/number-field"
import { Popover } from "@/components/ui/popover"
import { Switch } from "@/components/ui/switch"
import { cn } from "@/lib/utils"

const placements: { placement: Placement; colSpan: number; icon: ReactNode }[] = [
  { placement: "top right", colSpan: 2, icon: <IconArrowBearLeft /> },
  { placement: "top", colSpan: 2, icon: <IconArrowUp /> },
  { placement: "top left", colSpan: 2, icon: <IconArrowBearRight /> },
  { placement: "left top", colSpan: 3, icon: <IconArrowBearLeft className="-rotate-90" /> },
  { placement: "right top", colSpan: 3, icon: <IconArrowBearRight className="rotate-90" /> },
  { placement: "left", colSpan: 3, icon: <IconArrowLeft /> },
  { placement: "right", colSpan: 3, icon: <IconArrowRight /> },
  { placement: "left bottom", colSpan: 3, icon: <IconArrowBearRight className="-rotate-90" /> },
  { placement: "right bottom", colSpan: 3, icon: <IconArrowBearLeft className="rotate-90" /> },
  { placement: "bottom right", colSpan: 2, icon: <IconArrowBearRight className="rotate-180" /> },
  { placement: "bottom", colSpan: 2, icon: <IconArrowDown /> },
  { placement: "bottom left", colSpan: 2, icon: <IconArrowBearLeft className="rotate-180" /> }
]

export default function PopoverPreview() {
  const [options, setOptions] = useState({
    offset: 4,
    crossOffset: 0,
    showArrow: true,
    placement: "top right"
  })
  return (
    <div>
      <div className="flex flex-col gap-2 lg:flex-row-reverse">
        <div className="flex flex-col gap-2 border-b p-4 lg:border-b-0 lg:border-l">
          <NumberField onChange={(e) => setOptions({ ...options, offset: e })} value={options.offset}>
            <Label>Offset</Label>
            <NumberInput />
          </NumberField>
          <NumberField onChange={(e) => setOptions({ ...options, crossOffset: e })} value={options.crossOffset}>
            <Label>Cross Offset</Label>
            <NumberInput />
          </NumberField>
          <Switch isSelected={options.showArrow} onChange={(e) => setOptions({ ...options, showArrow: e })}>
            Show Arrow
          </Switch>
        </div>
        <div className="grid w-full place-items-center py-4">
          <div className="grid grid-cols-6 gap-1">
            {placements.map((item) => (
              <Popover key={item.placement}>
                <Button
                  className={cn(item.colSpan === 2 ? "col-span-2" : "col-span-3")}
                  onPress={() => setOptions({ ...options, placement: item.placement })}
                >
                  {item.icon}
                </Button>
                <Popover.Content {...options} placement={item.placement}>
                  <Popover.Header>
                    <Popover.Title>{item.placement}</Popover.Title>
                    <Popover.Description>This popover opened in {item.placement}</Popover.Description>
                  </Popover.Header>
                </Popover.Content>
              </Popover>
            ))}
          </div>
        </div>
      </div>
      <Code
        className="my-0 size-full rounded-lg rounded-t-none border **:[pre]:rounded-t-none"
        code={`import { Popover } from '@/components/ui/popover'
        
  <Popover>
    <Button size="icon">
      <IconArrowLeft />
    </Button>
    <Popover.Content ${Object.entries(options)
      .map(([key, value]) => `${key}=${typeof value === "string" ? `"${value}"` : `{${value}}`}`)
      .join(" ")}>
      <Popover.Header>
        <Popover.Title>Popover Title</Popover.Title>
        <Popover.Description>Popover Description</Popover.Description>
      </Popover.Header>
    </Popover.Content>
  </Popover>
`}
        copy
      />
    </div>
  )
}
