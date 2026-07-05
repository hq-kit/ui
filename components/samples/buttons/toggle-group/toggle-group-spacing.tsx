import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"

export default function ToggleGroupSpacing() {
  return (
    <ToggleGroup defaultSelectedKeys={["top"]} size="sm" spacing={2} variant="outline">
      <ToggleGroupItem aria-label="Toggle top" id="top">
        Top
      </ToggleGroupItem>
      <ToggleGroupItem aria-label="Toggle bottom" id="bottom">
        Bottom
      </ToggleGroupItem>
      <ToggleGroupItem aria-label="Toggle left" id="left">
        Left
      </ToggleGroupItem>
      <ToggleGroupItem aria-label="Toggle right" id="right">
        Right
      </ToggleGroupItem>
    </ToggleGroup>
  )
}
