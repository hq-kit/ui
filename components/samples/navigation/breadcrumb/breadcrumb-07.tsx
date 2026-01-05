import { IconHome, IconSettings } from '@tabler/icons-react'
import { Breadcrumb, BreadcrumbItem } from '@/components/ui/breadcrumb'

export default function Breadcrumb07() {
  return (
    <Breadcrumb>
      <BreadcrumbItem href='#'>
        <IconHome />
      </BreadcrumbItem>
      <BreadcrumbItem href='#'>
        <IconSettings />
      </BreadcrumbItem>
      <BreadcrumbItem>Profile</BreadcrumbItem>
    </Breadcrumb>
  )
}
