"use client"

import type { Key } from "react-aria-components"
import dynamic from "next/dynamic"
import { useState } from "react"
import { Tabs } from "@/components/ui/tabs"

const Preview1 = dynamic(() => import("./preview-01"))
const Preview2 = dynamic(() => import("./preview-02"))
const sinks = [
  { id: "preview-1", label: "1", component: Preview1 },
  { id: "preview-2", label: "2", component: Preview2 }
] as const

type PreviewId = (typeof sinks)[number]["id"]

export default function Sink() {
  const [selectedPreview, setSelectedPreview] = useState<PreviewId>("preview-1")
  const ActivePreview = sinks.find((sink) => sink.id === selectedPreview)?.component ?? Preview1

  return (
    <Tabs
      className="m-(--gap)"
      onSelectionChange={(key: Key) => setSelectedPreview(key as PreviewId)}
      selectedKey={selectedPreview}
    >
      <Tabs.List className="w-full" items={sinks}>
        {(item) => <Tabs.Trigger>{item.label}</Tabs.Trigger>}
      </Tabs.List>
      <Tabs.Content id={selectedPreview}>
        <div className="scrollbar-fade scroll-fade-x overflow-auto p-(--gap) px-0 contain-content">
          <ActivePreview />
        </div>
      </Tabs.Content>
    </Tabs>
  )
}
