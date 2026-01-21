import { IconDashboard, IconDots } from '@tabler/icons-react'
import { Breadcrumb, BreadcrumbItem } from '@/components/ui/breadcrumb'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import { cn } from '@/lib/utils'

export default function Breadcrumb10() {
  return (
    <Breadcrumb>
      <BreadcrumbItem href='#'>
        <IconDashboard />
        Dashboard
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
      <BreadcrumbItem className={(isCurrent) => cn(isCurrent && 'font-semibold text-blue-500')}>Profile</BreadcrumbItem>
    </Breadcrumb>
  )
}
