import { IconChevronsRight, IconDashboard, IconSettings, IconUser } from '@tabler/icons-react'
import { Breadcrumb, BreadcrumbItem } from '@/components/ui/breadcrumb'

export default function Breadcrumb03() {
  return (
    <Breadcrumb separator={<IconChevronsRight size={16} />}>
      <BreadcrumbItem href='#'>
        <IconDashboard />
        Dashboard
      </BreadcrumbItem>
      <BreadcrumbItem href='#'>
        <IconSettings />
        Settings
      </BreadcrumbItem>
      <BreadcrumbItem>
        <IconUser />
        Profile
      </BreadcrumbItem>
    </Breadcrumb>
  )
}
