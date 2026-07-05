import { Toggle } from "@/components/ui/toggle"

export default function ToggleDisabled() {
  return (
    <div className="flex flex-wrap items-center gap-2">
      <Toggle aria-label="Toggle disabled" isDisabled>
        Disabled
      </Toggle>
      <Toggle aria-label="Toggle disabled outline" isDisabled variant="outline">
        Disabled
      </Toggle>
    </div>
  )
}
