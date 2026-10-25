"use client"
import { Breadcrumb } from "@/components/ui/breadcrumb"

export function AppBreadcrumbs() {
  return (
    <Breadcrumb>
      <Breadcrumb.Item href="#">Dashboard</Breadcrumb.Item>
      <Breadcrumb.Item href="#">Blocks</Breadcrumb.Item>
      <Breadcrumb.Item>Page</Breadcrumb.Item>
    </Breadcrumb>
  )
}
