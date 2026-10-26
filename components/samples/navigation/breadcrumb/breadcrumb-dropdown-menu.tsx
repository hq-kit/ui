"use client"

import { IconDots } from "@tabler/icons-react"
import { Breadcrumb, BreadcrumbItem } from "@/components/ui/breadcrumb"
import { Button } from "@/components/ui/button"
import { DropdownMenu } from "@/components/ui/dropdown-menu"

export default () => {
  return (
    <Breadcrumb>
      <BreadcrumbItem href="#components">Components</BreadcrumbItem>
      <BreadcrumbItem>
        <DropdownMenu>
          <Button variant={"ghost"}>
            <IconDots />
          </Button>
          <DropdownMenu.Content>
            <DropdownMenu.Item>Breadcrumbs</DropdownMenu.Item>
            <DropdownMenu.Item>Button</DropdownMenu.Item>
            <DropdownMenu.Item>Link</DropdownMenu.Item>
          </DropdownMenu.Content>
        </DropdownMenu>
      </BreadcrumbItem>
      <BreadcrumbItem>Breadcrumb</BreadcrumbItem>
    </Breadcrumb>
  )
}
