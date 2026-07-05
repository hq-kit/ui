"use client"

import { IconPlaceholder } from "@/components/icon-placeholder"
import { Breadcrumb, BreadcrumbItem } from "@/components/ui/breadcrumb"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem } from "@/components/ui/dropdown-menu"
import { Item, ItemContent, ItemDescription, ItemGroup, ItemMedia, ItemTitle } from "@/components/ui/item"

export function Payments() {
  return (
    <Card>
      <CardHeader className="flex flex-col gap-3">
        <Breadcrumb>
          <BreadcrumbItem href="#">Home</BreadcrumbItem>
          <BreadcrumbItem>
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
              <DropdownMenuContent placement="bottom start">
                <DropdownMenuGroup>
                  <DropdownMenuItem>Profile</DropdownMenuItem>
                  <DropdownMenuItem>Statements</DropdownMenuItem>
                  <DropdownMenuItem>Documents</DropdownMenuItem>
                </DropdownMenuGroup>
              </DropdownMenuContent>
            </DropdownMenu>
          </BreadcrumbItem>
          <BreadcrumbItem>Payments</BreadcrumbItem>
        </Breadcrumb>
      </CardHeader>
      <CardContent>
        <ItemGroup>
          <Item href="#" variant="muted">
            <ItemMedia variant="icon">
              <IconPlaceholder
                hugeicons="Settings01Icon"
                lucide="GaugeIcon"
                phosphor="GaugeIcon"
                remixicon="RiDashboardLine"
                tabler="IconGauge"
              />
            </ItemMedia>
            <ItemContent>
              <ItemTitle>Change transfer limit</ItemTitle>
              <ItemDescription>Adjust how much you can send from your balance.</ItemDescription>
            </ItemContent>
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
            <ItemMedia variant="icon">
              <IconPlaceholder
                hugeicons="Calendar03Icon"
                lucide="CalendarIcon"
                phosphor="CalendarIcon"
                remixicon="RiCalendarLine"
                tabler="IconCalendar"
              />
            </ItemMedia>
            <ItemContent>
              <ItemTitle>Scheduled transfers</ItemTitle>
              <ItemDescription>Set up a transfer to send at a later date.</ItemDescription>
            </ItemContent>
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
            <ItemMedia variant="icon">
              <IconPlaceholder
                hugeicons="RepeatIcon"
                lucide="RepeatIcon"
                phosphor="RepeatIcon"
                remixicon="RiRepeatLine"
                tabler="IconRepeat"
              />
            </ItemMedia>
            <ItemContent>
              <ItemTitle>Direct Debits</ItemTitle>
              <ItemDescription>Set up and manage regular payments.</ItemDescription>
            </ItemContent>
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
            <ItemMedia variant="icon">
              <IconPlaceholder
                hugeicons="RepeatIcon"
                lucide="RefreshCwIcon"
                phosphor="ArrowsClockwiseIcon"
                remixicon="RiRefreshLine"
                tabler="IconRefresh"
              />
            </ItemMedia>
            <ItemContent>
              <ItemTitle>Recurring card payments</ItemTitle>
              <ItemDescription>Manage your repeated card transactions.</ItemDescription>
            </ItemContent>
            <IconPlaceholder
              className="size-4 shrink-0 text-muted-foreground"
              hugeicons="ArrowRight01Icon"
              lucide="ChevronRightIcon"
              phosphor="CaretRightIcon"
              remixicon="RiArrowRightSLine"
              tabler="IconChevronRight"
            />
          </Item>
        </ItemGroup>
      </CardContent>
    </Card>
  )
}
