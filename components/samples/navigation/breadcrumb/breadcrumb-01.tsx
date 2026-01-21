import { Breadcrumb, BreadcrumbItem } from '@/components/ui/breadcrumb'

export default function Breadcrumb01() {
  return (
    <Breadcrumb>
      <BreadcrumbItem href='#'>Dashboard</BreadcrumbItem>
      <BreadcrumbItem href='#'>Settings</BreadcrumbItem>
      <BreadcrumbItem>Profile</BreadcrumbItem>
    </Breadcrumb>
  )
}
