import { IconDashboard } from '@tabler/icons-react'
import { Breadcrumb, BreadcrumbItem } from '@/components/ui/breadcrumb'

export default function Breadcrumb02() {
  return (
    <Breadcrumb separator='/'>
      <BreadcrumbItem href='#'>
        <IconDashboard />
        Dashboard
      </BreadcrumbItem>
      <BreadcrumbItem href='#'>Settings</BreadcrumbItem>
      <BreadcrumbItem>Profile</BreadcrumbItem>
    </Breadcrumb>
  )
}
