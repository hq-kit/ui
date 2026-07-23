"use client"
import { IconPlaceholder } from "@/components/icon-placeholder"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Description, Field, FieldGroup, Label, Separator } from "@/components/ui/field"
import { Select } from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"

export function Preferences() {
  return (
    <Card>
      <Card.Header>
        <Card.Title>Preferences</Card.Title>
        <Card.Description>Manage your account settings and notifications.</Card.Description>
        <Card.Action>
          <Button className="bg-muted" size="icon-sm" variant="ghost">
            <IconPlaceholder
              hugeicons="Cancel01Icon"
              lucide="XIcon"
              phosphor="XIcon"
              remixicon="RiCloseLine"
              tabler="IconX"
            />
          </Button>
        </Card.Action>
      </Card.Header>
      <Card.Content>
        <FieldGroup>
          <Field>
            <Label htmlFor="default-currency">Default Currency</Label>
            <Select defaultValue="usd">
              <Select.Trigger className="w-full" id="default-currency">
                <Select.Value />
              </Select.Trigger>
              <Select.Content>
                <Select.Group>
                  <Select.Item id="usd">USD — United States Dollar</Select.Item>
                  <Select.Item id="eur">EUR — Euro</Select.Item>
                  <Select.Item id="gbp">GBP — British Pound</Select.Item>
                  <Select.Item id="jpy">JPY — Japanese Yen</Select.Item>
                </Select.Group>
              </Select.Content>
            </Select>
          </Field>
          <Separator className="-my-4 style-sera:hidden" />
          <Switch defaultSelected id="public-statistics">
            <Label htmlFor="public-statistics">Public Statistics</Label>
            <Description>Allow others to see your total stream count and listening activity</Description>
          </Switch>
          <Separator className="-my-4 style-sera:hidden" />
          <Switch defaultSelected id="email-notifications">
            <Label htmlFor="email-notifications">Email Notifications</Label>
            <Description>Monthly royalty reports and distribution updates</Description>
          </Switch>
        </FieldGroup>
      </Card.Content>
      <Card.Footer>
        <Button variant="outline">Reset</Button>
        <Button className="ml-auto">Save Preferences</Button>
      </Card.Footer>
    </Card>
  )
}
