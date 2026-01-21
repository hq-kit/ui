import { Breadcrumb, BreadcrumbItem } from '@/components/ui/breadcrumb'

export default function Breadcrumb08() {
  return (
    <Breadcrumb className='h-8 rounded-lg border px-3'>
      <BreadcrumbItem href='#'>Dashboard</BreadcrumbItem>
      <BreadcrumbItem href='#'>Settings</BreadcrumbItem>
      <BreadcrumbItem>Profile</BreadcrumbItem>
    </Breadcrumb>
  )
}
