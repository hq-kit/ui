import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"

export default function ToggleGroupOutline() {
  return (
    <ToggleGroup defaultSelectedKeys={["all"]} variant="outline">
      <ToggleGroupItem aria-label="Toggle all" id="all">
        All
      </ToggleGroupItem>
      <ToggleGroupItem aria-label="Toggle missed" id="missed">
        Missed
      </ToggleGroupItem>
    </ToggleGroup>
  )
}
