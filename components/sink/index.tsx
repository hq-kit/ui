"use client"

import dynamic from "next/dynamic"
import { Tabs } from "@/components/ui/tabs"

const Preview1 = dynamic(() => import("./preview-01"))
const Preview2 = dynamic(() => import("./preview-02"))
const sinks = [
  { id: "preview-1", label: "1", component: Preview1 },
  { id: "preview-2", label: "2", component: Preview2 }
]
export default function Sink() {
  return (
    <Tabs className="m-(--gap)">
      <Tabs.List className="w-full" items={sinks}>
        {(item) => <Tabs.Trigger>{item.label}</Tabs.Trigger>}
      </Tabs.List>
      {sinks.map((item) => (
        <Tabs.Content id={item.id} key={item.id}>
          <div className="scrollbar-fade scroll-fade-x overflow-auto p-(--gap) px-0 contain-content">
            <item.component />
          </div>
        </Tabs.Content>
      ))}
    </Tabs>
  )
}
