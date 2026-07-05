"use client"
import Preview01 from "@/components/sink/preview"
import Preview02 from "@/components/sink/preview-02"
import { Tabs } from "@/components/ui/tabs"

export default function Sink() {
  return (
    <Tabs className="mt-4">
      <Tabs.List className="w-full">
        <Tabs.Trigger id="1">Preview 1</Tabs.Trigger>
        <Tabs.Trigger id="2">Preview 2</Tabs.Trigger>
      </Tabs.List>
      <Tabs.Contents>
        <Tabs.Content id="1">
          <Preview01 />
        </Tabs.Content>
        <Tabs.Content id="2">
          <Preview02 />
        </Tabs.Content>
      </Tabs.Contents>
    </Tabs>
  )
}
