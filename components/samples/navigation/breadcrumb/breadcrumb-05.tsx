import { Badge } from '@/components/ui/badge'
import { Breadcrumb, BreadcrumbItem } from '@/components/ui/breadcrumb'

export default function Breadcrumb05() {
  return (
    <Breadcrumb>
      <BreadcrumbItem href='#'>
        <Badge variant='outline'>Dashboard</Badge>
      </BreadcrumbItem>
      <BreadcrumbItem href='#'>
        <Badge variant='outline'>Settings</Badge>
      </BreadcrumbItem>
      <BreadcrumbItem>
        <Badge className='border-primary' variant='outline'>
          Profile
        </Badge>
      </BreadcrumbItem>
    </Breadcrumb>
  )
}
