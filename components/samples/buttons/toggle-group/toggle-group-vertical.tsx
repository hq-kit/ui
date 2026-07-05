import { BoldIcon, ItalicIcon, UnderlineIcon } from "lucide-react"
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"

export default function ToggleGroupVertical() {
  return (
    <ToggleGroup defaultSelectedKeys={["bold", "italic"]} orientation="vertical" selectionMode="multiple" spacing={1}>
      <ToggleGroupItem aria-label="Toggle bold" id="bold">
        <BoldIcon />
      </ToggleGroupItem>
      <ToggleGroupItem aria-label="Toggle italic" id="italic">
        <ItalicIcon />
      </ToggleGroupItem>
      <ToggleGroupItem aria-label="Toggle underline" id="underline">
        <UnderlineIcon />
      </ToggleGroupItem>
    </ToggleGroup>
  )
}
