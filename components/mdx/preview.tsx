"use client"

import { previews } from "@/components/samples/generated/previews"

export function Preview({ component }: { component: string }) {
  const Component = previews[component].component
  return (
    <div className="group/demo cn-card relative my-6 py-0">
      <Component />
    </div>
  )
}
