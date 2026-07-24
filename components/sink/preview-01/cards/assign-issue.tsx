"use client"

import { IconPlaceholder } from "@/components/icon-placeholder"
import { Avatar } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Combobox, ComboboxChip, ComboboxChips } from "@/components/ui/combobox"
import { Tooltip } from "@/components/ui/tooltip"

// Users available for assignment.
const users = [
  { id: 1, name: "shadcn" },
  { id: 2, name: "maxleiter" },
  { id: 3, name: "evilrabbit" },
  { id: 4, name: "pranathip" },
  { id: 5, name: "jorgezreik" },
  { id: 6, name: "shuding" },
  { id: 7, name: "rauchg" }
]

export function AssignIssue() {
  return (
    <Card className="w-full max-w-sm" size="sm">
      <Card.Header className="border-b">
        <Card.Title className="text-sm">Assign Issue</Card.Title>
        <Card.Description className="text-sm">Select users to assign to this issue.</Card.Description>
        <Card.Action>
          <Tooltip>
            <Button size="icon-xs" variant="outline">
              <IconPlaceholder
                hugeicons="PlusSignIcon"
                lucide="PlusIcon"
                phosphor="PlusIcon"
                remixicon="RiAddLine"
                tabler="IconPlus"
              />
            </Button>
            <Tooltip.Content>Add user</Tooltip.Content>
          </Tooltip>
        </Card.Action>
      </Card.Header>
      <Card.Content>
        <Combobox defaultValue={[users[0].id]} selectionMode="multiple">
          <ComboboxChips<(typeof users)[0]>>{(value) => <ComboboxChip>{value.name}</ComboboxChip>}</ComboboxChips>
          <Combobox.Content items={users}>
            {(user) => (
              <Combobox.Item textValue={user.name}>
                <Avatar className="size-5">
                  <Avatar.Image alt={user.name} src={`https://github.com/${user.name}.png`} />
                  <Avatar.Fallback>{user.name.charAt(0)}</Avatar.Fallback>
                </Avatar>
                {user.name}
              </Combobox.Item>
            )}
          </Combobox.Content>
        </Combobox>
      </Card.Content>
    </Card>
  )
}
