import { IconAlertCircle, IconArrowRight, IconLock } from "@tabler/icons-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { FieldGroup, Label } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { Item } from "@/components/ui/item"
import { TextField } from "@/components/ui/text-field"

export function AccountAccess() {
  return (
    <Card>
      <Card.Header>
        <Card.Title>Account Access</Card.Title>
        <Card.Description>Update your credentials or re-authenticate.</Card.Description>
      </Card.Header>
      <Card.Content>
        <FieldGroup>
          <TextField name="email-address" type="email">
            <Label>Email Address</Label>
            <Input placeholder="artist@studio.inc" />
          </TextField>
          <TextField name="current-password" type="password">
            <div className="flex items-center justify-between">
              <Label>Current Password</Label>
              <a
                className="text-muted-foreground hover:text-foreground text-xs font-medium tracking-wider uppercase"
                href="#"
              >
                Forgot?
              </a>
            </div>
            <Input placeholder="••••••••••••••••••••••••" />
          </TextField>
        </FieldGroup>
      </Card.Content>
      <Card.Footer className="flex-col gap-4">
        <Button className="w-full">
          <IconLock />
          Update Security
        </Button>
        <Item href="#" variant="muted">
          <Item.Media variant="icon">
            <IconAlertCircle className="text-destructive" />
          </Item.Media>
          <Item.Content>
            <Item.Title>Danger Zone</Item.Title>
            <Item.Description className="line-clamp-1">Archive account and remove catalog</Item.Description>
          </Item.Content>
          <IconArrowRight className="size-4" />
        </Item>
      </Card.Footer>
    </Card>
  )
}
