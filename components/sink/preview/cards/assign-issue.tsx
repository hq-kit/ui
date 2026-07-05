"use client"

import { IconPlaceholder } from "@/components/icon-placeholder"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardAction, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectValue } from "@/components/ui/select"
import { Tag, TagGroup, TagList } from "@/components/ui/tag"
import { Tooltip, TooltipContent } from "@/components/ui/tooltip"

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
      <CardHeader className="border-b">
        <CardTitle className="text-sm">Assign Issue</CardTitle>
        <CardDescription className="text-sm">Select users to assign to this issue.</CardDescription>
        <CardAction>
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
            <TooltipContent>Add user</TooltipContent>
          </Tooltip>
        </CardAction>
      </CardHeader>
      <CardContent>
        <Select defaultValue={[users[0].id]} selectionMode="multiple">
          <Select.Trigger>
            <SelectValue<(typeof users)[0]>>
              {({ selectedItems, state }) => (
                <TagGroup
                  aria-label="Selected states"
                  onRemove={(keys) => {
                    if (Array.isArray(state.value)) {
                      state.setValue(state.value.filter((k) => !keys.has(k)))
                    }
                  }}
                >
                  <TagList
                    items={selectedItems.filter((item) => item != null)}
                    renderEmptyState={() => "No selected items"}
                  >
                    {(item) => <Tag>{item.name}</Tag>}
                  </TagList>
                </TagGroup>
              )}
            </SelectValue>
          </Select.Trigger>
          <Select.Content items={users}>
            {(user) => (
              <Select.Item textValue={user.name}>
                <Avatar className="size-5">
                  <AvatarImage alt={user.name} src={`https://github.com/${user.name}.png`} />
                  <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
                </Avatar>
                {user.name}
              </Select.Item>
            )}
          </Select.Content>
        </Select>
      </CardContent>
    </Card>
  )
}
