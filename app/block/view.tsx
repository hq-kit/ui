"use client"

import type { PropsWithChildren } from "react"
import { previews } from "@/components/samples/generated/previews"

export default function View({ component, ...props }: PropsWithChildren & { component: string }) {
  const Component = previews[component]?.component
  if (!Component) return null
  return <Component {...props} />
}
