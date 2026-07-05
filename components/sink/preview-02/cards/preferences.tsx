"use client"
import { IconPlaceholder } from "@/components/icon-placeholder"
import { Button } from "@/components/ui/button"
import { Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Description, Field, FieldGroup, Label, Separator } from "@/components/ui/field"
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"

export function Preferences() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Preferences</CardTitle>
        <CardDescription>Manage your account settings and notifications.</CardDescription>
        <CardAction>
          <Button className="bg-muted" size="icon-sm" variant="ghost">
            <IconPlaceholder
              hugeicons="Cancel01Icon"
              lucide="XIcon"
              phosphor="XIcon"
              remixicon="RiCloseLine"
              tabler="IconX"
            />
          </Button>
        </CardAction>
      </CardHeader>
      <CardContent>
        <FieldGroup>
          <Field>
            <Label htmlFor="default-currency">Default Currency</Label>
            <Select defaultValue="usd">
              <SelectTrigger className="w-full" id="default-currency">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem id="usd">USD — United States Dollar</SelectItem>
                  <SelectItem id="eur">EUR — Euro</SelectItem>
                  <SelectItem id="gbp">GBP — British Pound</SelectItem>
                  <SelectItem id="jpy">JPY — Japanese Yen</SelectItem>
                </SelectGroup>
              </SelectContent>
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
      </CardContent>
      <CardFooter>
        <Button variant="outline">Reset</Button>
        <Button className="ml-auto">Save Preferences</Button>
      </CardFooter>
    </Card>
  )
}
