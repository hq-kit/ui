"use client"
import { IconCalendar, IconChevronRight, IconDots, IconRotateClockwise, IconSettings } from "@tabler/icons-react"
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
              <Button aria-label="Account options" size="icon-sm" variant="ghost">
                <IconDots />
                <span className="sr-only">Account options</span>
              </Button>
              <DropdownMenu.Content placement="start">
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
          <div className="w-full" role="listitem">
            <Item href="#" variant="muted">
              <Item.Media variant="icon">
                <IconSettings />
              </Item.Media>
              <Item.Content>
                <Item.Title>Change transfer limit</Item.Title>
                <Item.Description>Adjust how much you can send from your balance.</Item.Description>
              </Item.Content>
              <IconChevronRight className="text-muted-foreground size-4 shrink-0" />
            </Item>
          </div>
          <div className="w-full" role="listitem">
            <Item href="#" variant="muted">
              <Item.Media variant="icon">
                <IconCalendar />
              </Item.Media>
              <Item.Content>
                <Item.Title>Scheduled transfers</Item.Title>
                <Item.Description>Set up a transfer to send at a later date.</Item.Description>
              </Item.Content>
              <IconChevronRight className="text-muted-foreground size-4 shrink-0" />
            </Item>
          </div>
          <div className="w-full" role="listitem">
            <Item href="#" variant="muted">
              <Item.Media variant="icon">
                <IconRotateClockwise />
              </Item.Media>
              <Item.Content>
                <Item.Title>Recurring card payments</Item.Title>
                <Item.Description>Manage your repeated card transactions.</Item.Description>
              </Item.Content>
              <IconChevronRight className="text-muted-foreground size-4 shrink-0" />
            </Item>
          </div>
        </Item.Group>
      </Card.Content>
    </Card>
  )
}
