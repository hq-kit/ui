import { IconDashboard, IconDots } from "@tabler/icons-react"
import { Badge } from "@/components/ui/badge"
import { Breadcrumb, BreadcrumbItem } from "@/components/ui/breadcrumb"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem } from "@/components/ui/dropdown-menu"

export default function Breadcrumb09() {
  return (
    <Breadcrumb>
      <BreadcrumbItem href="#">
        <Badge variant="outline">
          <IconDashboard />
          Dashboard
        </Badge>
      </BreadcrumbItem>
      <BreadcrumbItem>
        <DropdownMenu>
          <Button size="icon-sm" variant="ghost">
            <IconDots />
          </Button>
          <DropdownMenuContent>
            <DropdownMenuItem>Security</DropdownMenuItem>
            <DropdownMenuItem>Preferences</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </BreadcrumbItem>
      <BreadcrumbItem>Profile</BreadcrumbItem>
    </Breadcrumb>
  )
}
