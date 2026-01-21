import { IconChevronDown, IconDashboard } from '@tabler/icons-react'
import { Badge } from '@/components/ui/badge'
import { Breadcrumb, BreadcrumbItem } from '@/components/ui/breadcrumb'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'

export default function Breadcrumb06() {
  return (
    <Breadcrumb>
      <BreadcrumbItem href='#'>
        <Badge variant='outline'>
          <IconDashboard />
          Dashboard
        </Badge>
      </BreadcrumbItem>
      <BreadcrumbItem href='#'>
        <Badge variant='outline'>Settings</Badge>
      </BreadcrumbItem>
      <BreadcrumbItem>
        <DropdownMenu>
          <DropdownMenuTrigger>
            <Badge variant='outline'>
              Profile
              <IconChevronDown />
            </Badge>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem>Security</DropdownMenuItem>
            <DropdownMenuItem>Preferences</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </BreadcrumbItem>
    </Breadcrumb>
  )
}
