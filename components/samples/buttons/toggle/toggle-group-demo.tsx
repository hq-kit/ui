import { Bold, Italic, Underline } from "lucide-react"
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle"

export default () => {
  return (
    <ToggleGroup selectionMode="multiple" variant="outline">
      <ToggleGroupItem aria-label="Toggle bold" id="bold">
        <Bold />
      </ToggleGroupItem>
      <ToggleGroupItem aria-label="Toggle italic" id="italic">
        <Italic />
      </ToggleGroupItem>
      <ToggleGroupItem aria-label="Toggle strikethrough" id="strikethrough">
        <Underline />
      </ToggleGroupItem>
    </ToggleGroup>
  )
}
