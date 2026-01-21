import { IconDashboard, IconDots } from '@tabler/icons-react'
import { Badge } from '@/components/ui/badge'
import { Breadcrumb, BreadcrumbItem } from '@/components/ui/breadcrumb'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'

export default function Breadcrumb09() {
  return (
    <Breadcrumb>
      <BreadcrumbItem href='#'>
        <Badge variant='outline'>
          <IconDashboard />
          Dashboard
        </Badge>
      </BreadcrumbItem>
      <BreadcrumbItem>
        <DropdownMenu>
          <DropdownMenuTrigger>
            <IconDots />
          </DropdownMenuTrigger>
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
