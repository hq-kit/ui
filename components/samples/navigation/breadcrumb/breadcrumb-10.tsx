import { IconDashboard, IconDots } from "@tabler/icons-react"
import { Breadcrumb, BreadcrumbItem } from "@/components/ui/breadcrumb"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem } from "@/components/ui/dropdown-menu"
import { cn } from "@/lib/utils"

export default function Breadcrumb10() {
  return (
    <Breadcrumb>
      <BreadcrumbItem href="#">
        <IconDashboard />
        Dashboard
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
      <BreadcrumbItem className={(isCurrent) => cn(isCurrent && "font-semibold text-blue-500")}>Profile</BreadcrumbItem>
    </Breadcrumb>
  )
}
