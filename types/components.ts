import type { RegistryItem } from "shadcn/schema"

export type FileTree = {
  name: string
  path?: string
  children?: FileTree[]
}

export type ProcessedComponentsData = {
  component: RegistryItem
  tree: FileTree[] | null
}

export const chartTypes = ["area", "bar", "line", "pie", "radar", "radial", "tooltip"] as const
export type ChartType = (typeof chartTypes)[number]
