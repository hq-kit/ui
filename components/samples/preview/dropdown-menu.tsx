"use client"
import {
  IconArrowBearLeft,
  IconArrowBearRight,
  IconArrowDown,
  IconArrowLeft,
  IconArrowRight,
  IconArrowUp,
  IconDeviceDesktop,
  IconLogout,
  IconMoon,
  IconSun,
  IconUser
} from "@tabler/icons-react"
import { type ComponentProps, type ReactNode, useState } from "react"
import { ComponentPreview, spreadOptions } from "@/components/component-preview"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger
} from "@/components/ui/dropdown-menu"
import { Label } from "@/components/ui/field"
import { NumberField, NumberInput } from "@/components/ui/number-field"
import { cn } from "@/lib/utils"

type DropdownMenuContentProps = ComponentProps<typeof DropdownMenuContent>

const placements: { placement: DropdownMenuContentProps["placement"]; colSpan: number; icon: ReactNode }[] = [
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
interface Options {
  placement: DropdownMenuContentProps["placement"]
  offset: DropdownMenuContentProps["offset"]
  crossOffset: DropdownMenuContentProps["crossOffset"]
}

export default function DropdownMenuPreview() {
  const [options, setOptions] = useState<Options>({
    placement: "bottom",
    offset: 4,
    crossOffset: 0
  })
  return (
    <>
      <ComponentPreview>
        <ComponentPreview.Settings>
          <NumberField onChange={(e) => setOptions({ ...options, offset: e })} value={options.offset}>
            <Label>Offset</Label>
            <NumberInput />
          </NumberField>
          <NumberField onChange={(e) => setOptions({ ...options, crossOffset: e })} value={options.crossOffset}>
            <Label>Cross Offset</Label>
            <NumberInput />
          </NumberField>
        </ComponentPreview.Settings>
        <ComponentPreview.View>
          <div className="grid grid-cols-6 gap-1">
            {placements.map((item) => (
              <DropdownMenu
                key={item.placement}
                onOpenChange={() => setOptions({ ...options, placement: item.placement })}
              >
                <Button className={cn(item.colSpan === 2 ? "col-span-2" : "col-span-3")}>{item.icon}</Button>
                <DropdownMenuContent {...options} placement={item.placement}>
                  <DropdownMenuGroup>
                    <DropdownMenuLabel>My Account</DropdownMenuLabel>
                    <DropdownMenuItem>
                      <IconUser />
                      Profile
                    </DropdownMenuItem>
                    <DropdownMenuSub>
                      <DropdownMenuSubTrigger>
                        <IconDeviceDesktop />
                        Theme
                      </DropdownMenuSubTrigger>
                      <DropdownMenuSubContent>
                        <DropdownMenuItem>
                          <IconSun />
                          Light
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <IconMoon />
                          Dark
                        </DropdownMenuItem>
                      </DropdownMenuSubContent>
                    </DropdownMenuSub>
                  </DropdownMenuGroup>
                  <DropdownMenuSeparator />
                  <DropdownMenuGroup>
                    <DropdownMenuItem variant="destructive">
                      <IconLogout />
                      Sign Out
                    </DropdownMenuItem>
                  </DropdownMenuGroup>
                </DropdownMenuContent>
              </DropdownMenu>
            ))}
          </div>
        </ComponentPreview.View>
      </ComponentPreview>
      <ComponentPreview.Code
        code={`import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'
import { Button } from '@/components/ui/button'
          
<DropdownMenu>
  <Button>Open</Button>
  <DropdownMenuContent ${spreadOptions(options)}>
    <DropdownMenuGroup>
      <DropdownMenuLabel>My Account</DropdownMenuLabel>
      <DropdownMenuItem>
        <IconUser />
        Profile
      </DropdownMenuItem>
      <DropdownMenuSub>
        <DropdownMenuSubTrigger>
          <IconDeviceDesktop />
          Theme
        </DropdownMenuSubTrigger>
        <DropdownMenuSubContent>
          <DropdownMenuItem>
            <IconSun />
            Light
          </DropdownMenuItem>
          <DropdownMenuItem>
            <IconMoon />
            Dark
          </DropdownMenuItem>
        </DropdownMenuSubContent>
      </DropdownMenuSub>
    </DropdownMenuGroup>
    <DropdownMenuSeparator />
    <DropdownMenuGroup>
      <DropdownMenuItem variant="destructive">
        <IconLogout />
        Sign Out
      </DropdownMenuItem>
    </DropdownMenuGroup>
  </DropdownMenuContent>
</DropdownMenu>`}
      />
    </>
  )
}
