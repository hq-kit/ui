"use client"

import { IconPlaceholder } from "@/components/icon-placeholder"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Field, Label } from "@/components/ui/field"
import { Input, InputGroup, InputGroupAddon, InputGroupButton, InputGroupInput } from "@/components/ui/input"
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"

export function InviteTeam() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Invite Team</CardTitle>
        <CardDescription>Add members to your workspace</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        <div className="flex flex-col gap-3">
          {[
            { email: "alex@example.com", role: "Editor" },
            { email: "sam@example.com", role: "Viewer" }
          ].map((invite) => (
            <div className="flex items-center gap-2" key={invite.email}>
              <Input className="flex-1" defaultValue={invite.email} />
              <Select defaultValue={invite.role.toLowerCase()}>
                <SelectTrigger className="w-24">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem id="admin">Admin</SelectItem>
                    <SelectItem id="editor">Editor</SelectItem>
                    <SelectItem id="viewer">Viewer</SelectItem>
                  </SelectGroup>
                </SelectContent>
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
        <Field>
          <Label htmlFor="invite-link">Or share invite link</Label>
          <InputGroup>
            <InputGroupInput defaultValue="https://app.co/invite/x8f2k" id="invite-link" readOnly />
            <InputGroupAddon align="inline-end">
              <InputGroupButton aria-label="Copy link" size="icon-xs">
                <IconPlaceholder
                  hugeicons="Copy01Icon"
                  lucide="CopyIcon"
                  phosphor="CopyIcon"
                  remixicon="RiFileCopyLine"
                  tabler="IconCopy"
                />
              </InputGroupButton>
            </InputGroupAddon>
          </InputGroup>
        </Field>
      </CardContent>
      <CardFooter>
        <Button className="w-full">Send Invites</Button>
      </CardFooter>
    </Card>
  )
}
