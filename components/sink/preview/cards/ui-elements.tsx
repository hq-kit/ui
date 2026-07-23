"use client"

import { IconPlaceholder } from "@/components/icon-placeholder"
import { AlertDialog } from "@/components/ui/alert-dialog"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ButtonGroup } from "@/components/ui/button-group"
import { Card } from "@/components/ui/card"
import { Checkbox, CheckboxGroup } from "@/components/ui/checkbox"
import { DropdownMenu } from "@/components/ui/dropdown-menu"
import { Field, FieldGroup } from "@/components/ui/field"
import { InputGroup, Textarea } from "@/components/ui/input"
import { Item } from "@/components/ui/item"
import { Radio, RadioGroup } from "@/components/ui/radio"
import { Slider } from "@/components/ui/slider"
import { Switch } from "@/components/ui/switch"

export function UIElements() {
  return (
    <Card className="w-full">
      <Card.Content className="flex flex-col gap-6">
        <div className="flex flex-col gap-4">
          <div className="flex flex-wrap gap-2">
            <Button>Button</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="ghost">Ghost</Button>
          </div>
          <Item variant="outline">
            <Item.Content>
              <Item.Title>Two-factor authentication</Item.Title>
              <Item.Description className="text-pretty xl:hidden 2xl:block">
                Verify via email or phone number.
              </Item.Description>
            </Item.Content>
            <Item.Actions className="hidden md:flex">
              <Button size="sm" variant="secondary">
                Enable
              </Button>
            </Item.Actions>
          </Item>
        </div>
        <Slider aria-label="Slider" className="flex-1" maxValue={1000} minValue={0} step={10} />
        <FieldGroup>
          <Field>
            <InputGroup>
              <InputGroup.Input placeholder="Name" />
              <InputGroup.Addon align="inline-end">
                <InputGroup.Text>
                  <IconPlaceholder
                    hugeicons="Search01Icon"
                    lucide="SearchIcon"
                    phosphor="MagnifyingGlassIcon"
                    remixicon="RiSearchLine"
                    tabler="IconSearch"
                  />
                </InputGroup.Text>
              </InputGroup.Addon>
            </InputGroup>
          </Field>
          <Field className="flex-1">
            <Textarea className="resize-none" placeholder="Message" />
          </Field>
        </FieldGroup>
        <div className="flex items-center gap-2">
          <div className="flex gap-2">
            <Badge>Badge</Badge>
            <Badge variant="secondary">Secondary</Badge>
            <Badge variant="outline">Outline</Badge>
          </div>
          <RadioGroup className="ml-auto" defaultValue="apple" orientation="horizontal">
            <Radio value="apple" />
            <Radio value="banana" />
          </RadioGroup>
          <CheckboxGroup orientation="horizontal">
            <Checkbox defaultSelected value="1" />
            <Checkbox value="2" />
          </CheckboxGroup>
        </div>
        <div className="flex items-center gap-4">
          <AlertDialog>
            <Button variant="outline">
              <span className="hidden md:flex style-sera:md:hidden">Alert Dialog</span>
              <span className="flex style-sera:md:flex md:hidden">Dialog</span>
            </Button>
            <AlertDialog.Content size="sm">
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
          <ButtonGroup>
            <Button variant="outline">
              <span className="style-sera:hidden">Button Group</span>
              <span className="style-sera:block hidden">Group</span>
            </Button>
            <DropdownMenu>
              <Button size="icon" variant="outline">
                <IconPlaceholder
                  hugeicons="ArrowUp01Icon"
                  lucide="ChevronUpIcon"
                  phosphor="CaretUpIcon"
                  remixicon="RiArrowUpSLine"
                  tabler="IconChevronUp"
                />
              </Button>
              <DropdownMenu.Content className="w-fit" placement="top end">
                <DropdownMenu.Group>
                  <DropdownMenu.Label>Quick Actions</DropdownMenu.Label>
                  <DropdownMenu.Item>Mute Conversation</DropdownMenu.Item>
                  <DropdownMenu.Item>Mark as Read</DropdownMenu.Item>
                  <DropdownMenu.Item>Block User</DropdownMenu.Item>
                </DropdownMenu.Group>
                <DropdownMenu.Separator />
                <DropdownMenu.Group>
                  <DropdownMenu.Label>Conversation</DropdownMenu.Label>
                  <DropdownMenu.Item>Share Conversation</DropdownMenu.Item>
                  <DropdownMenu.Item>Copy Conversation</DropdownMenu.Item>
                  <DropdownMenu.Item>Report Conversation</DropdownMenu.Item>
                </DropdownMenu.Group>
                <DropdownMenu.Separator />
                <DropdownMenu.Group>
                  <DropdownMenu.Item variant="destructive">Delete Conversation</DropdownMenu.Item>
                </DropdownMenu.Group>
              </DropdownMenu.Content>
            </DropdownMenu>
          </ButtonGroup>
          <Switch className="ml-auto" defaultSelected />
        </div>
      </Card.Content>
    </Card>
  )
}
