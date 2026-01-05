import { IconPoint } from '@tabler/icons-react'
import { Breadcrumb, BreadcrumbItem } from '@/components/ui/breadcrumb'

export default function Breadcrumb04() {
  return (
    <Breadcrumb separator={<IconPoint size={16} />}>
      <BreadcrumbItem href='#'>Dashboard</BreadcrumbItem>
      <BreadcrumbItem href='#'>Settings</BreadcrumbItem>
      <BreadcrumbItem>Profile</BreadcrumbItem>
    </Breadcrumb>
  )
}
