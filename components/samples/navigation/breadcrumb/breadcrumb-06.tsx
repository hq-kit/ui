import { IconChevronDown, IconDashboard } from "@tabler/icons-react"
import { Badge } from "@/components/ui/badge"
import { Breadcrumb, BreadcrumbItem } from "@/components/ui/breadcrumb"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem } from "@/components/ui/dropdown-menu"

export default function Breadcrumb06() {
  return (
    <Breadcrumb>
      <BreadcrumbItem href="#">
        <Badge variant="outline">
          <IconDashboard />
          Dashboard
        </Badge>
      </BreadcrumbItem>
      <BreadcrumbItem href="#">
        <Badge variant="outline">Settings</Badge>
      </BreadcrumbItem>
      <BreadcrumbItem>
        <DropdownMenu>
          <Button variant="ghost">
            <Badge variant="outline">
              Profile
              <IconChevronDown />
            </Badge>
          </Button>
          <DropdownMenuContent>
            <DropdownMenuItem>Security</DropdownMenuItem>
            <DropdownMenuItem>Preferences</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </BreadcrumbItem>
    </Breadcrumb>
  )
}
