"use client"

import { FileCodeIcon, FileTextIcon, type LucideIcon, TableIcon, XIcon } from "lucide-react"
import { useState } from "react"
import { Code } from "@/components/mdx/code-client"
import { Attachment, AttachmentGroup } from "@/components/ui/attachment"
import { Label } from "@/components/ui/field"
import { Radio, RadioGroup } from "@/components/ui/radio"

type Item = {
  name: string
  meta: string
  icon?: LucideIcon
  src?: string
}
const items: Item[] = [
  { name: "briefing-notes.pdf", meta: "PDF · 1.4 MB", icon: FileTextIcon },
  {
    name: "workspace.png",
    meta: "PNG · 820 KB",
    src: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=900&auto=format&fit=crop&q=80"
  },
  { name: "customers.csv", meta: "CSV · 18 KB", icon: TableIcon },
  { name: "renderer.tsx", meta: "TSX · 12 KB", icon: FileCodeIcon }
]

export default function AttachmentPreview() {
  const [orientation, setOrientation] = useState<"horizontal" | "vertical">("vertical")
  const [itemOrientation, setItemOrientation] = useState<"horizontal" | "vertical">("vertical")

  return (
    <div>
      <div className="flex flex-col gap-2 lg:flex-row-reverse">
        <div className="flex flex-col gap-2 border-b p-4 lg:border-b-0 lg:border-l">
          <RadioGroup onChange={(v) => setOrientation(v.toString() as "horizontal" | "vertical")} value={orientation}>
            <Label className="whitespace-nowrap">Group Orientation</Label>
            <Radio value="horizontal">Horizontal</Radio>
            <Radio value="vertical">Vertical</Radio>
          </RadioGroup>
          <RadioGroup
            onChange={(v) => setItemOrientation(v.toString() as "horizontal" | "vertical")}
            value={itemOrientation}
          >
            <Label className="whitespace-nowrap">Item Orientation</Label>
            <Radio value="horizontal">Horizontal</Radio>
            <Radio value="vertical">Vertical</Radio>
          </RadioGroup>
        </div>
        <div className="grid min-h-52 w-full place-items-center px-6 py-4">
          <AttachmentGroup layout="grid" orientation={orientation}>
            {items.map((item) => {
              const Icon = item.icon
              return (
                <Attachment className="w-64" key={item.name} orientation={itemOrientation}>
                  {item.src ? (
                    <Attachment.Media variant="image">
                      <img alt={item.name} src={item.src} />
                    </Attachment.Media>
                  ) : Icon ? (
                    <Attachment.Media>
                      <Icon />
                    </Attachment.Media>
                  ) : null}
                  <Attachment.Content>
                    <Attachment.Title>{item.name}</Attachment.Title>
                    <Attachment.Description>{item.meta}</Attachment.Description>
                  </Attachment.Content>
                  <Attachment.Actions>
                    <Attachment.Action aria-label={`Remove ${item.name}`}>
                      <XIcon />
                    </Attachment.Action>
                  </Attachment.Actions>
                </Attachment>
              )
            })}
          </AttachmentGroup>
        </div>
      </div>
      <Code
        className="my-0 size-full rounded-lg rounded-t-none border **:[pre]:rounded-t-none"
        code={`import { FileCodeIcon, FileTextIcon, type LucideIcon, TableIcon, XIcon } from "lucide-react"
import { AttachmentGroup, Attachment } from "@/components/ui/attachment"

<AttachmentGroup layout="grid" orientation="${orientation}">
  {items.map((item) => {
    const Icon = item.icon
    return (
        <Attachment className="w-64" key={item.name} orientation="${itemOrientation}">
          {item.src ? (
            <Attachment.Media variant="image">
              <img alt={item.name} src={item.src} />
            </Attachment.Media>
          ) : Icon ? (
            <Attachment.Media>
              <Icon />
            </Attachment.Media>
          ) : null}
          <Attachment.Content>
            <Attachment.Title>{item.name}</Attachment.Title>
            <Attachment.Description>{item.meta}</Attachment.Description>
          </Attachment.Content>
          <Attachment.Actions>
            <Attachment.Action aria-label={\`Remove \${item.name}\`}>
              <XIcon />
            </Attachment.Action>
          </Attachment.Actions>
        </Attachment>
      )
    })}
</AttachmentGroup>

type Item = {
  name: string
  meta: string
  icon?: LucideIcon
  src?: string
}

const items: Item[] = [
  { name: "briefing-notes.pdf", meta: "PDF · 1.4 MB", icon: FileTextIcon },
  { name: "workspace.png", meta: "PNG · 820 KB", src: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=900&auto=format&fit=crop&q=80"},
  { name: "customers.csv", meta: "CSV · 18 KB", icon: TableIcon },
  { name: "renderer.tsx", meta: "TSX · 12 KB", icon: FileCodeIcon }
]`}
        copy
      />
    </div>
  )
}
