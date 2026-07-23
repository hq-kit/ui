"use client"
import { usePathname, useRouter, useSearchParams } from "next/navigation"
import { useCallback, useState } from "react"
import { Tabs } from "@/components/ui/tabs"

const sinks = [
  { id: "preview-1", label: "1" },
  { id: "preview-2", label: "2" }
]

export default function SinkNavs() {
  const searchParams = useSearchParams()
  const pathname = usePathname()
  const router = useRouter()

  const [selectedKey, setSelectedKey] = useState(searchParams?.get("components") ?? "preview-1")

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString())
      params.set(name, value)

      return params.toString()
    },
    [searchParams]
  )

  const onChange = (v: any) => {
    setSelectedKey(v)
    router.push(`${pathname}?${createQueryString("components", v)}`)
  }
  return (
    <Tabs className="m-(--gap) mb-0" onSelectionChange={onChange} selectedKey={selectedKey}>
      <Tabs.List className="w-full" items={sinks}>
        {(item) => <Tabs.Trigger>{item.label}</Tabs.Trigger>}
      </Tabs.List>
    </Tabs>
  )
}
