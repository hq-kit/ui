import { IconPlaceholder } from "@/components/icon-placeholder"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { FieldGroup, Label } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { Item } from "@/components/ui/item"
import { PasswordInput, TextField } from "@/components/ui/text-field"

export function AccountAccess() {
  return (
    <Card>
      <Card.Header>
        <Card.Title>Account Access</Card.Title>
        <Card.Description>Update your credentials or re-authenticate.</Card.Description>
      </Card.Header>
      <Card.Content>
        <FieldGroup>
          <TextField defaultValue="artist@studio.inc" type="email">
            <Label>Email Address</Label>
            <Input />
          </TextField>
          <TextField defaultValue="password123" type="password">
            <div className="flex items-center justify-between">
              <Label>Current Password</Label>
              <a
                className="font-medium text-muted-foreground text-xs uppercase tracking-wider hover:text-foreground"
                href="#"
              >
                Forgot?
              </a>
            </div>
            <PasswordInput />
          </TextField>
        </FieldGroup>
      </Card.Content>
      <Card.Footer className="flex-col gap-4">
        <Button className="w-full">
          <IconPlaceholder
            hugeicons="SquareLock02Icon"
            lucide="LockKeyholeIcon"
            phosphor="LockKeyIcon"
            remixicon="RiLockLine"
            tabler="IconLock"
          />
          Update Security
        </Button>
        <Item href="#" variant="muted">
          <Item.Media variant="icon">
            <IconPlaceholder
              className="text-destructive"
              hugeicons="AlertCircleIcon"
              lucide="AlertCircleIcon"
              phosphor="WarningCircleIcon"
              remixicon="RiErrorWarningLine"
              tabler="IconAlertCircle"
            />
          </Item.Media>
          <Item.Content>
            <Item.Title>Danger Zone</Item.Title>
            <Item.Description className="line-clamp-1">Archive account and remove catalog</Item.Description>
          </Item.Content>
          <IconPlaceholder
            className="size-4"
            hugeicons="ArrowRight01Icon"
            lucide="ArrowRightIcon"
            phosphor="ArrowRightIcon"
            remixicon="RiArrowRightLine"
            tabler="IconArrowRight"
          />
        </Item>
      </Card.Footer>
    </Card>
  )
}
