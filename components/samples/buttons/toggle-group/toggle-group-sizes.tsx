import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"

export default function ToggleGroupSizes() {
  return (
    <div className="flex flex-col gap-4">
      <ToggleGroup defaultSelectedKeys={["top"]} size="sm" variant="outline">
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
      <ToggleGroup defaultSelectedKeys={["top"]} variant="outline">
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
    </div>
  )
}
