"use client"

import { Description, Label } from "@/components/ui/field"
import { Item } from "@/components/ui/item"
import { Select } from "@/components/ui/select"

export default function SelectDetailsDescriptionDemo() {
  return (
    <Select placeholder="Select a role">
      <Label>Roles</Label>
      <Select.Trigger>
        <Select.Value />
      </Select.Trigger>
      <Select.Content items={roles}>
        {(item) => (
          <Select.Item id={item.id} textValue={item.name}>
            <Item className="w-full p-0" size="xs">
              <Item.Content className="gap-0">
                <Item.Title>{item.name}</Item.Title>
                <Item.Description>{item.description}</Item.Description>
              </Item.Content>
            </Item>
          </Select.Item>
        )}
      </Select.Content>
      <Description>Choose the appropriate role based on the level of access required.</Description>
    </Select>
  )
}

export const roles = [
  {
    id: 1,
    name: "Admin",
    description: "Has full access to all resources"
  },
  {
    id: 2,
    name: "Editor",
    description: "Can edit content but has limited access to settings"
  },
  {
    id: 3,
    name: "Viewer",
    description: "Can view content but cannot make changes"
  },
  {
    id: 4,
    name: "Contributor",
    description: "Can contribute content for review"
  },
  {
    id: 5,
    name: "Guest",
    description: "Limited access, mostly for viewing purposes"
  }
]
