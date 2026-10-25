"use client"

import { IconArrowRight, IconChevronUp, IconSearch } from "@tabler/icons-react"
import { AlertDialog } from "@/components/ui/alert-dialog"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ButtonGroup } from "@/components/ui/button-group"
import { Card } from "@/components/ui/card"
import { Checkbox, CheckboxGroup } from "@/components/ui/checkbox"
import { DropdownMenu } from "@/components/ui/dropdown-menu"
import { FieldGroup } from "@/components/ui/field"
import { InputGroup, Textarea } from "@/components/ui/input"
import { RadioGroup } from "@/components/ui/radio"
import { Switch } from "@/components/ui/switch"
import { TextField } from "@/components/ui/text-field"

export function UIElements() {
  return (
    <Card className="w-full">
      <Card.Content className="flex flex-col gap-6">
        <div className="flex gap-2">
          <Button>
            Button
            <IconArrowRight />
          </Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="outline">Outline</Button>
        </div>
        <FieldGroup>
          <TextField aria-label="Name">
            <InputGroup>
              <InputGroup.Input placeholder="Name" />
              <InputGroup.Addon align="inline-end">
                <InputGroup.Text>
                  <IconSearch />
                </InputGroup.Text>
              </InputGroup.Addon>
            </InputGroup>
          </TextField>
          <TextField aria-label="Message" className="flex-1">
            <Textarea className="resize-none" placeholder="Message" />
          </TextField>
        </FieldGroup>
        <div className="flex items-center gap-2">
          <div className="flex gap-2">
            <Badge>Badge</Badge>
            <Badge variant="secondary">Secondary</Badge>
            <Badge className="4xl:flex hidden" variant="outline">
              Outline
            </Badge>
          </div>
          <RadioGroup aria-label="Fruit preference" className="ml-auto" defaultValue="apple" orientation="horizontal">
            <RadioGroup.Item aria-label="Apple" value="apple" />
            <RadioGroup.Item aria-label="Banana" value="banana" />
          </RadioGroup>
          <CheckboxGroup aria-label="Alerts" defaultValue={["email-alert"]} orientation="horizontal">
            <Checkbox aria-label="Enable email alerts" id="email-alert" value="email-alert" />
            <Checkbox aria-label="Enable push alerts" id="push-alert" value="push-alert" />
          </CheckboxGroup>
          <Switch aria-label="Enable compact notifications" className="4xl:hidden flex" defaultSelected />
        </div>
        <div className="flex items-center gap-4">
          <AlertDialog>
            <Button variant="outline">
              <span className="style-sera:md:hidden hidden md:flex">Alert Dialog</span>
              <span className="style-sera:md:flex flex md:hidden">Dialog</span>
            </Button>
            <AlertDialog.Content className="theme-neutral" size="sm">
              <AlertDialog.Header>
                <AlertDialog.Title>Allow accessory to connect?</AlertDialog.Title>
                <AlertDialog.Description>
                  Do you want to allow the USB accessory to connect to this device and your data?
                </AlertDialog.Description>
              </AlertDialog.Header>
              <AlertDialog.Footer>
                <AlertDialog.Cancel>Don&apos;t allow</AlertDialog.Cancel>
                <AlertDialog.Action>Allow</AlertDialog.Action>
              </AlertDialog.Footer>
            </AlertDialog.Content>
          </AlertDialog>
          <ButtonGroup className="ml-auto">
            <Button variant="outline">
              <span className="style-sera:hidden">Button Group</span>
              <span className="style-sera:block hidden">Group</span>
            </Button>
            <DropdownMenu>
              <Button aria-label="Open quick actions" size="icon" variant="outline">
                <IconChevronUp />
              </Button>
              <DropdownMenu.Content className="w-40" placement="top end">
                <DropdownMenu.Group>
                  <DropdownMenu.Label>Quick Actions</DropdownMenu.Label>
                  <DropdownMenu.Item>Mute Conversation</DropdownMenu.Item>
                  <DropdownMenu.Item>Mark as Read</DropdownMenu.Item>
                  <DropdownMenu.Item>Block User</DropdownMenu.Item>
                </DropdownMenu.Group>
                <DropdownMenu.Separator />
                <DropdownMenu.Group>
                  <DropdownMenu.Item variant="destructive">Delete Conversation</DropdownMenu.Item>
                </DropdownMenu.Group>
              </DropdownMenu.Content>
            </DropdownMenu>
          </ButtonGroup>
          <Switch aria-label="Enable advanced setting" className="4xl:flex hidden" defaultSelected />
        </div>
      </Card.Content>
    </Card>
  )
}
