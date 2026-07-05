"use client"
import { IconPlaceholder } from "@/components/icon-placeholder"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/field"
import { Popover } from "@/components/ui/popover"
import { Select } from "@/components/ui/select"
import { Tooltip } from "@/components/ui/tooltip"

export interface Values {
  side?: "left" | "right"
  variant?: "sidebar" | "floating" | "inset"
  collapsible?: "offcanvas" | "icon" | "none"
}

interface Props {
  value: Values
  onChange: (value: Values) => void
}

export const SidebarControl = ({ value, onChange }: Props) => {
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
            <Select.Item id="sidebar">Sidebar</Select.Item>
            <Select.Item id="floating">Floating</Select.Item>
            <Select.Item id="inset">Inset</Select.Item>
          </Select.Content>
        </Select>
        <Select
          onChange={(e) => onChange({ ...value, collapsible: String(e) as Values["collapsible"] })}
          value={value.collapsible}
        >
          <Label>Variant</Label>
          <Select.Trigger>
            <Select.Value />
          </Select.Trigger>
          <Select.Content>
            <Select.Item id="icon">Icon</Select.Item>
            <Select.Item id="offcanvas">Offcanvas</Select.Item>
            <Select.Item id="none">None</Select.Item>
          </Select.Content>
        </Select>
      </Popover.Content>
    </Popover>
  )
}
