import { ItalicIcon } from "lucide-react"
import { Toggle } from "@/components/ui/toggle"

export default function ToggleText() {
  return (
    <Toggle aria-label="Toggle italic">
      <ItalicIcon />
      Italic
    </Toggle>
  )
}
