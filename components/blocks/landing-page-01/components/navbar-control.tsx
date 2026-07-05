"use client"
import { IconPlaceholder } from "@/components/icon-placeholder"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/field"
import { Popover } from "@/components/ui/popover"
import { Select } from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"
import { Tooltip } from "@/components/ui/tooltip"

export interface Values {
  sticky?: boolean
  fluid?: boolean
  container?: boolean
  variant?: "navbar" | "floating" | "inset"
}

interface Props {
  value: Values
  onChange: (value: Values) => void
}

export const NavbarControl = ({ value, onChange }: Props) => {
  return (
    <Popover>
      <Tooltip>
        <Button className="fixed top-28 right-0 z-50 rounded-r-none" size="icon" variant="destructive">
          <IconPlaceholder
            hugeicons="SidebarLeftIcon"
            lucide="PanelLeftIcon"
            phosphor="SidebarIcon"
            remixicon="RiSideBarLine"
            tabler="IconLayoutSidebar"
          />
        </Button>
        <Tooltip.Content placement="left top">For Development only, Remove this on Production</Tooltip.Content>
      </Tooltip>
      <Popover.Content placement="left top">
        <Popover.Header>
          <Popover.Title>Sidebar Control</Popover.Title>
          <Popover.Description>Customize your sidebar</Popover.Description>
        </Popover.Header>
        <Select onChange={(e) => onChange({ ...value, variant: String(e) as Values["variant"] })} value={value.variant}>
          <Label>Variant</Label>
          <Select.Trigger>
            <Select.Value />
          </Select.Trigger>
          <Select.Content>
            <Select.Item id="navbar">Navbar</Select.Item>
            <Select.Item id="floating">Floating</Select.Item>
            <Select.Item id="inset">Inset</Select.Item>
          </Select.Content>
        </Select>
        <Switch
          isDisabled={value.variant === "inset"}
          isSelected={value.sticky}
          onChange={(e) => onChange({ ...value, sticky: e })}
        >
          Sticky
        </Switch>
        <Switch isSelected={value.fluid} onChange={(e) => onChange({ ...value, fluid: e })}>
          Fluid Navbar
        </Switch>
        <Switch isSelected={value.container} onChange={(e) => onChange({ ...value, container: e })}>
          Container
        </Switch>
      </Popover.Content>
    </Popover>
  )
}
