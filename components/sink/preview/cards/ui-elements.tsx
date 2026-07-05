"use client"

import * as React from "react"
import { IconPlaceholder } from "@/components/icon-placeholder"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle
} from "@/components/ui/alert-dialog"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ButtonGroup } from "@/components/ui/button-group"
import { Card, CardContent } from "@/components/ui/card"
import { Checkbox, CheckboxGroup } from "@/components/ui/checkbox"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator
} from "@/components/ui/dropdown-menu"
import { Field, FieldGroup } from "@/components/ui/field"
import { InputGroup, InputGroupAddon, InputGroupInput, InputGroupText, Textarea } from "@/components/ui/input"
import { Item, ItemActions, ItemContent, ItemDescription, ItemTitle } from "@/components/ui/item"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio"
import { Slider } from "@/components/ui/slider"
import { Switch } from "@/components/ui/switch"

export function UIElements() {
  const [sliderValue, setSliderValue] = React.useState<number[]>([500])
  const handleSliderValueChange = React.useCallback((value: number | readonly number[]) => {
    if (typeof value === "number") {
      setSliderValue([value])
    } else {
      setSliderValue([...value])
    }
  }, [])

  return (
    <Card className="w-full">
      <CardContent className="flex flex-col gap-6">
        <div className="flex flex-col gap-4">
          <div className="flex flex-wrap gap-2">
            <Button>Button</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="ghost">Ghost</Button>
          </div>
          <Item variant="outline">
            <ItemContent>
              <ItemTitle>Two-factor authentication</ItemTitle>
              <ItemDescription className="text-pretty xl:hidden 2xl:block">
                Verify via email or phone number.
              </ItemDescription>
            </ItemContent>
            <ItemActions className="hidden md:flex">
              <Button size="sm" variant="secondary">
                Enable
              </Button>
            </ItemActions>
          </Item>
        </div>
        <Slider
          aria-label="Slider"
          className="flex-1"
          maxValue={1000}
          minValue={0}
          onChange={(e) => handleSliderValueChange(e as number[])}
          step={10}
          value={sliderValue}
        />
        <FieldGroup>
          <Field>
            <InputGroup>
              <InputGroupInput placeholder="Name" />
              <InputGroupAddon align="inline-end">
                <InputGroupText>
                  <IconPlaceholder
                    hugeicons="Search01Icon"
                    lucide="SearchIcon"
                    phosphor="MagnifyingGlassIcon"
                    remixicon="RiSearchLine"
                    tabler="IconSearch"
                  />
                </InputGroupText>
              </InputGroupAddon>
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
            <RadioGroupItem value="apple" />
            <RadioGroupItem value="banana" />
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
            <AlertDialogContent size="sm">
              <AlertDialogHeader>
                <AlertDialogTitle>Allow accessory to connect?</AlertDialogTitle>
                <AlertDialogDescription>
                  Do you want to allow the USB accessory to connect to this device and your data?
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Don&apos;t allow</AlertDialogCancel>
                <AlertDialogAction>Allow</AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
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
              <DropdownMenuContent className="w-fit" placement="top end">
                <DropdownMenuGroup>
                  <DropdownMenuLabel>Quick Actions</DropdownMenuLabel>
                  <DropdownMenuItem>Mute Conversation</DropdownMenuItem>
                  <DropdownMenuItem>Mark as Read</DropdownMenuItem>
                  <DropdownMenuItem>Block User</DropdownMenuItem>
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                  <DropdownMenuLabel>Conversation</DropdownMenuLabel>
                  <DropdownMenuItem>Share Conversation</DropdownMenuItem>
                  <DropdownMenuItem>Copy Conversation</DropdownMenuItem>
                  <DropdownMenuItem>Report Conversation</DropdownMenuItem>
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                  <DropdownMenuItem variant="destructive">Delete Conversation</DropdownMenuItem>
                </DropdownMenuGroup>
              </DropdownMenuContent>
            </DropdownMenu>
          </ButtonGroup>
          <Switch className="ml-auto" defaultSelected />
        </div>
      </CardContent>
    </Card>
  )
}
