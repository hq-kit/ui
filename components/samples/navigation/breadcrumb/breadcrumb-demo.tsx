import { Breadcrumb, BreadcrumbItem } from "@/components/ui/breadcrumb"

export default () => {
  return (
    <Breadcrumb>
      <BreadcrumbItem href="#home">Home</BreadcrumbItem>
      <BreadcrumbItem href="#docs">Docs</BreadcrumbItem>
      <BreadcrumbItem href="#components">Components</BreadcrumbItem>
      <BreadcrumbItem>Breadcrumb</BreadcrumbItem>
    </Breadcrumb>
  )
}
