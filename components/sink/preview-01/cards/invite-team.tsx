"use client"

import { IconPlaceholder } from "@/components/icon-placeholder"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Label } from "@/components/ui/field"
import { Input, InputGroup } from "@/components/ui/input"
import { Select } from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import { TextField } from "@/components/ui/text-field"

export function InviteTeam() {
  return (
    <Card>
      <Card.Header>
        <Card.Title>Invite Team</Card.Title>
        <Card.Description>Add members to your workspace</Card.Description>
      </Card.Header>
      <Card.Content className="flex flex-col gap-4">
        <div className="flex flex-col gap-3">
          {[
            { email: "alex@example.com", role: "Editor" },
            { email: "sam@example.com", role: "Viewer" }
          ].map((invite) => (
            <div className="flex items-center gap-2" key={invite.email}>
              <TextField aria-label="Email" className="flex-1" defaultValue={invite.email}>
                <Input />
              </TextField>
              <Select aria-label="Role" className="w-24" defaultValue={invite.role.toLowerCase()}>
                <Select.Trigger>
                  <Select.Value />
                </Select.Trigger>
                <Select.Content placement="end">
                  <Select.Group>
                    <Select.Item id="admin">Admin</Select.Item>
                    <Select.Item id="editor">Editor</Select.Item>
                    <Select.Item id="viewer">Viewer</Select.Item>
                  </Select.Group>
                </Select.Content>
              </Select>
            </div>
          ))}
        </div>
        <Button variant="outline">
          <IconPlaceholder
            data-icon="inline-start"
            hugeicons="PlusSignIcon"
            lucide="PlusIcon"
            phosphor="PlusIcon"
            remixicon="RiAddLine"
            tabler="IconPlus"
          />
          Add another
        </Button>
        <Separator />
        <TextField defaultValue="https://app.co/invite/x8f2k" isReadOnly>
          <Label>Or share invite link</Label>
          <InputGroup>
            <InputGroup.Input />
            <InputGroup.Addon align="inline-end">
              <InputGroup.Button aria-label="Copy link" size="icon-xs">
                <IconPlaceholder
                  hugeicons="Copy01Icon"
                  lucide="CopyIcon"
                  phosphor="CopyIcon"
                  remixicon="RiFileCopyLine"
                  tabler="IconCopy"
                />
              </InputGroup.Button>
            </InputGroup.Addon>
          </InputGroup>
        </TextField>
      </Card.Content>
      <Card.Footer>
        <Button className="w-full">Send Invites</Button>
      </Card.Footer>
    </Card>
  )
}
