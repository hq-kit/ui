import { FileCodeIcon, FileTextIcon, type LucideIcon, TableIcon, XIcon } from "lucide-react"
import {
  Attachment,
  AttachmentAction,
  AttachmentActions,
  AttachmentContent,
  AttachmentDescription,
  AttachmentGroup,
  AttachmentMedia,
  AttachmentTitle
} from "@/components/ui/attachment"

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

export default function AttachmentGroupDemo() {
  return (
    <div className="mx-auto w-full max-w-sm py-12">
      <AttachmentGroup className="w-full">
        {items.map((item) => {
          const Icon = item.icon

          return (
            <Attachment className="w-64" key={item.name}>
              {item.src ? (
                <AttachmentMedia variant="image">
                  <img alt={item.name} src={item.src} />
                </AttachmentMedia>
              ) : Icon ? (
                <AttachmentMedia>
                  <Icon />
                </AttachmentMedia>
              ) : null}
              <AttachmentContent>
                <AttachmentTitle>{item.name}</AttachmentTitle>
                <AttachmentDescription>{item.meta}</AttachmentDescription>
              </AttachmentContent>
              <AttachmentActions>
                <AttachmentAction aria-label={`Remove ${item.name}`}>
                  <XIcon />
                </AttachmentAction>
              </AttachmentActions>
            </Attachment>
          )
        })}
      </AttachmentGroup>
    </div>
  )
}
