"use client"

import { PRESET_ICON_LIBRARIES } from "shadcn/preset"
import { Label } from "@/components/ui/field"
import { Select } from "@/components/ui/select"
import { titleCase } from "@/lib/modifiers"
import { useIcon } from "@/stores/icon-store"

const SelectIcon = () => {
  const { icon, setIcon } = useIcon()
  return (
    <Select name="icon" onChange={setIcon} placeholder="Select icon" value={icon}>
      <Label>Icon Library</Label>
      <Select.Trigger>
        <Select.Value />
      </Select.Trigger>
      <Select.Content
        items={PRESET_ICON_LIBRARIES.map((icon) => ({
          id: icon,
          label: titleCase(icon)
        }))}
      >
        {(item) => <Select.Item textValue={item.label}>{item.label}</Select.Item>}
      </Select.Content>
    </Select>
  )
}

export default SelectIcon
