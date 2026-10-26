import { IconChevronsRight, IconHandFingerRight } from "@tabler/icons-react"
import { Breadcrumb, BreadcrumbItem } from "@/components/ui/breadcrumb"

export default () => {
  return (
    <div className="grid gap-2">
      <Breadcrumb separator={"/"}>
        <BreadcrumbItem href="#home">Home</BreadcrumbItem>
        <BreadcrumbItem href="#docs">Docs</BreadcrumbItem>
        <BreadcrumbItem href="#components">Components</BreadcrumbItem>
        <BreadcrumbItem>Breadcrumb</BreadcrumbItem>
      </Breadcrumb>
      <Breadcrumb separator={<IconChevronsRight className="text-accent" />}>
        <BreadcrumbItem href="#home">Home</BreadcrumbItem>
        <BreadcrumbItem href="#docs">Docs</BreadcrumbItem>
        <BreadcrumbItem href="#components">Components</BreadcrumbItem>
        <BreadcrumbItem>Breadcrumb</BreadcrumbItem>
      </Breadcrumb>
      <Breadcrumb separator={<IconHandFingerRight />}>
        <BreadcrumbItem href="#home">Home</BreadcrumbItem>
        <BreadcrumbItem href="#docs">Docs</BreadcrumbItem>
        <BreadcrumbItem href="#components">Components</BreadcrumbItem>
        <BreadcrumbItem>Breadcrumb</BreadcrumbItem>
      </Breadcrumb>
    </div>
  )
}
