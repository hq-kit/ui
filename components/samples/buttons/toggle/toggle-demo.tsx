import { BookmarkIcon } from "lucide-react"
import { Toggle } from "@/components/ui/toggle"

export default function ToggleDemo() {
  return (
    <Toggle aria-label="Toggle bookmark" size="sm" variant="outline">
      <BookmarkIcon className="group-data-selected/toggle:fill-foreground" />
      Bookmark
    </Toggle>
  )
}
