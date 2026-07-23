"use client"

import { IconPlaceholder } from "@/components/icon-placeholder"
import { Breadcrumb } from "@/components/ui/breadcrumb"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { DropdownMenu } from "@/components/ui/dropdown-menu"
import { Item } from "@/components/ui/item"

export function Payments() {
  return (
    <Card>
      <Card.Header className="flex flex-col gap-3">
        <Breadcrumb>
          <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
          <Breadcrumb.Item>
            <DropdownMenu>
              <Button size="icon-sm" variant="ghost">
                <IconPlaceholder
                  hugeicons="MoreHorizontalCircle01Icon"
                  lucide="MoreHorizontalIcon"
                  phosphor="DotsThreeIcon"
                  remixicon="RiMoreLine"
                  tabler="IconDots"
                />
                <span className="sr-only">Account options</span>
              </Button>
              <DropdownMenu.Content placement="bottom start">
                <DropdownMenu.Group>
                  <DropdownMenu.Item>Profile</DropdownMenu.Item>
                  <DropdownMenu.Item>Statements</DropdownMenu.Item>
                  <DropdownMenu.Item>Documents</DropdownMenu.Item>
                </DropdownMenu.Group>
              </DropdownMenu.Content>
            </DropdownMenu>
          </Breadcrumb.Item>
          <Breadcrumb.Item>Payments</Breadcrumb.Item>
        </Breadcrumb>
      </Card.Header>
      <Card.Content>
        <Item.Group>
          <Item href="#" variant="muted">
            <Item.Media variant="icon">
              <IconPlaceholder
                hugeicons="Settings01Icon"
                lucide="GaugeIcon"
                phosphor="GaugeIcon"
                remixicon="RiDashboardLine"
                tabler="IconGauge"
              />
            </Item.Media>
            <Item.Content>
              <Item.Title>Change transfer limit</Item.Title>
              <Item.Description>Adjust how much you can send from your balance.</Item.Description>
            </Item.Content>
            <IconPlaceholder
              className="size-4 shrink-0 text-muted-foreground"
              hugeicons="ArrowRight01Icon"
              lucide="ChevronRightIcon"
              phosphor="CaretRightIcon"
              remixicon="RiArrowRightSLine"
              tabler="IconChevronRight"
            />
          </Item>
          <Item href="#" variant="muted">
            <Item.Media variant="icon">
              <IconPlaceholder
                hugeicons="Calendar03Icon"
                lucide="CalendarIcon"
                phosphor="CalendarIcon"
                remixicon="RiCalendarLine"
                tabler="IconCalendar"
              />
            </Item.Media>
            <Item.Content>
              <Item.Title>Scheduled transfers</Item.Title>
              <Item.Description>Set up a transfer to send at a later date.</Item.Description>
            </Item.Content>
            <IconPlaceholder
              className="size-4 shrink-0 text-muted-foreground"
              hugeicons="ArrowRight01Icon"
              lucide="ChevronRightIcon"
              phosphor="CaretRightIcon"
              remixicon="RiArrowRightSLine"
              tabler="IconChevronRight"
            />
          </Item>
          <Item href="#" variant="muted">
            <Item.Media variant="icon">
              <IconPlaceholder
                hugeicons="RepeatIcon"
                lucide="RepeatIcon"
                phosphor="RepeatIcon"
                remixicon="RiRepeatLine"
                tabler="IconRepeat"
              />
            </Item.Media>
            <Item.Content>
              <Item.Title>Direct Debits</Item.Title>
              <Item.Description>Set up and manage regular payments.</Item.Description>
            </Item.Content>
            <IconPlaceholder
              className="size-4 shrink-0 text-muted-foreground"
              hugeicons="ArrowRight01Icon"
              lucide="ChevronRightIcon"
              phosphor="CaretRightIcon"
              remixicon="RiArrowRightSLine"
              tabler="IconChevronRight"
            />
          </Item>
          <Item href="#" variant="muted">
            <Item.Media variant="icon">
              <IconPlaceholder
                hugeicons="RepeatIcon"
                lucide="RefreshCwIcon"
                phosphor="ArrowsClockwiseIcon"
                remixicon="RiRefreshLine"
                tabler="IconRefresh"
              />
            </Item.Media>
            <Item.Content>
              <Item.Title>Recurring card payments</Item.Title>
              <Item.Description>Manage your repeated card transactions.</Item.Description>
            </Item.Content>
            <IconPlaceholder
              className="size-4 shrink-0 text-muted-foreground"
              hugeicons="ArrowRight01Icon"
              lucide="ChevronRightIcon"
              phosphor="CaretRightIcon"
              remixicon="RiArrowRightSLine"
              tabler="IconChevronRight"
            />
          </Item>
        </Item.Group>
      </Card.Content>
    </Card>
  )
}
